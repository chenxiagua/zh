const {
  app,
  dialog,
  BrowserWindow,
  session,
  Menu,
  MenuItem,
  powerSaveBlocker,
  ipcMain,
  shell,
  nativeImage,
  clipboard,
  nativeTheme,
} = require('electron');
const fetch = require('electron-fetch').default;
const path = require('path');
const fs = require('fs');
const storage = require('electron-json-storage');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');
console.log = log.info;
console.warn = log.warn;

const isDev = require('electron-is-dev');
const _ = require('lodash');

let sender = null;
let apiUrl = 'https://trade.tealstreet.io/api/';

BrowserWindow.backgroundColor = '#30303d';
nativeTheme.themeSource = 'dark';

const ZOOM_STEP = 0.05;

ipcMain.on('asynchronous-message', function (evt, { method, data }) {
  // Send message back to renderer.
  try {
    if (method === 'getAppVersion') {
      sendConsoleLog('got IPC getAppVersion');
      sender = evt.sender;
      evt.sender.send('asynchronous-message', { method: 'getAppVersion', data: app.getVersion() });
    } else if (method === 'clearEverything') {
      sendConsoleLog('got IPC clearEverything');
      clearEverything();
    } else if (method === 'onAppLoad') {
      sendConsoleLog('got IPC onAppLoad');
      if (data.apiUrl) {
        apiUrl = data.apiUrl;
      }
      sendConsoleLog('reset window');
      resetWindow();
    } else if (method === 'syncZoom') {
      syncZoomBasic();
    } else if (method === 'setCookie') {
      sendConsoleLog('got IPC setCookie');
      setCookies(data);
    } else if (method === 'deleteCookie') {
      sendConsoleLog('got IPC deleteCookie');
      deleteCookie(data);
    } else if (method === 'getCookie') {
      sendConsoleLog('got IPC getCookie');
      getCookie(data);
    }
  } catch (e) {
    sendConsoleLog(e.toString());
  }
});

ipcMain.handle('pnl:download', async function (event, path, image) {
  try {
    let filename = await dialog.showSaveDialog(BrowserWindow.getFocusedWindow(), {
      title: 'Download your pnl card',
      defaultPath: path,
      filters: [{ name: 'All Files', extensions: ['*'] }],
      properties: ['openFile', 'openDirectory', 'promptToCreate'],
    });

    if (!filename.canceled) {
      const createdImage = nativeImage.createFromDataURL(image);
      fs.writeFile(filename.filePath, createdImage.toPNG(100), {}, (err) => {
        console.log(filename.filePath);
        let options = { buttons: ['Close'] };
        if (err) {
          options = _.extend(options, {
            title: 'Something Went Wrong',
            type: 'error',
            message: err.name || 'Export Error',
            detail: err.toString(),
          });
        } else {
          options = _.extend(options, {
            title: 'Download Successful',
            type: 'info',
            message: `Saved to ${filename.filePath}`,
          });
        }
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), options);
      });
    }
  } catch (e) {
    console.error(e);
    sendConsoleLog(e.toString());
  }
});

ipcMain.handle('pnl:clipboard', function (event, image) {
  try {
    const createdImage = nativeImage.createFromDataURL(image);
    clipboard.writeImage(createdImage, 'image/jpeg');
  } catch (e) {
    console.error(e);
    sendConsoleLog(e.toString());
  }
});

const sendConsoleLog = (msg) => {
  let strMsg = msg;
  try {
    strMsg = JSON.stringify(msg);
  } catch (e) {
    strMsg = String(msg);
  }
  try {
    sender && sender.send('asynchronous-message', { method: 'consoleLog', data: strMsg });
  } catch (e) {
    console.log(strMsg);
  }
};

const sendCookie = (data) => {
  try {
    sender && sender.send('asynchronous-message', { method: 'getCookie', data });
  } catch (e) {
    console.log(e.toString());
  }
};

const sendPath = (path) => {
  try {
    sender && sender.send('asynchronous-message', { method: 'setElectronPath', data: { path } });
  } catch (e) {
    console.log(e.toString());
  }
};

function getZoomFactor() {
  const zoomFactor = storage.getSync('zoomFactor');
  sendConsoleLog(zoomFactor);
  return Math.max(parseFloat(isNaN(zoomFactor) ? 1 : zoomFactor), ZOOM_STEP);
}

function setZoomFactor(zoomFactor) {
  storage.set('zoomFactor', zoomFactor);
}

function handleZoomIn() {
  const newZoom = getZoomFactor() + ZOOM_STEP;
  BrowserWindow.getFocusedWindow().webContents.setZoomFactor(newZoom);
  setZoomFactor(newZoom);
}

function handleZoomOut() {
  const newZoom = Math.max(getZoomFactor() - ZOOM_STEP, ZOOM_STEP);
  BrowserWindow.getFocusedWindow().webContents.setZoomFactor(newZoom);
  setZoomFactor(newZoom);
}

function handleResetZoom() {
  BrowserWindow.getFocusedWindow().webContents.setZoomFactor(1);
  setZoomFactor(1);
}

// function sendStatusToWindow(text) {
//   win.webContents.send('message', text);
// }

// function getPreferences() {
//   sendConsoleLog('wow');
//   const configRootPath = path.join(app.getPath('userData'), 'Preferences');
//
//   const preferences = JSON.parse(fs.readFileSync(configRootPath, 'utf-8'));
//   sendConsoleLog(preferences);
// }

// Conditionally include the dev tools installer to load React Dev Tools
// let installExtension, REACT_DEVELOPER_TOOLS; // NEW!

// if (isDev) {
//   const devTools = require('electron-devtools-installer');
//   installExtension = devTools.default;
//   REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
// } // NEW!

let win;

// const allWins = [];

function syncZoomBasic() {
  const zoomFactor = getZoomFactor();
  try {
    BrowserWindow.getFocusedWindow().webContents.setZoomFactor(zoomFactor);
  } catch (e) {
    console.log(e.toString());
  }
}

function syncZoom() {
  sendConsoleLog('syncing zoom...');
  const currWindow = BrowserWindow.getFocusedWindow();
  try {
    if (currWindow) {
      currWindow.focus();
      currWindow.webContents?.setZoomFactor(getZoomFactor() + 0.01);
      currWindow.webContents?.setZoomFactor(getZoomFactor() - 0.01);
    }
  } catch (e) {
    sendConsoleLog(e);
  }

  const allWins = BrowserWindow.getAllWindows();

  for (let i = 0; i < allWins.length; i++) {
    sendConsoleLog(allWins[i]);
    try {
      allWins[i].focus();
      allWins[i].webContents.setZoomFactor(getZoomFactor() + 0.01);
      allWins[i].webContents.setZoomFactor(getZoomFactor() - 0.01);
    } catch (e) {
      sendConsoleLog(e);
    }
  }
  currWindow?.focus();
}

function createWindow() {
  // deal with twitch chat
  // https://github.com/BarryCarlyon/twitch_misc/tree/main/player/electron

  try {
    session.defaultSession.webRequest.onBeforeRequest(
      {
        urls: ['https://embed.twitch.tv/*channel=*'],
      },
      (details, cb) => {
        var redirectURL = details.url;

        var params = new URLSearchParams(redirectURL.replace('https://embed.twitch.tv/', ''));
        if (params.get('parent') !== '') {
          cb({});
          return;
        }
        params.set('parent', 'locahost');
        params.set('referrer', 'https://localhost/');

        var redirectURL = 'https://embed.twitch.tv/?' + params.toString();
        console.log('Adjust to', redirectURL);

        cb({
          cancel: false,
          redirectURL,
        });
      }
    );

    // works for dumb iFrames
    session.defaultSession.webRequest.onHeadersReceived(
      {
        urls: [
          'https://www.twitch.tv/*',
          'https://player.twitch.tv/*',
          'https://embed.twitch.tv/*',
        ],
      },
      (details, cb) => {
        var responseHeaders = details.responseHeaders;

        console.log('headers', details.url, responseHeaders);

        delete responseHeaders['Content-Security-Policy'];
        //console.log(responseHeaders);

        cb({
          cancel: false,
          responseHeaders,
        });
      }
    );
  } catch (e) {
    sendConsoleLog(e);
  }

  // Create the browser window.
  const _win = new BrowserWindow({
    // width: 800,
    // height: 600,
    backgroundColor: '#30303d',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      webviewTag: true,
    },
    // autoHideMenuBar: true,
  });
  // _win.maximize();

  // _win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
  //   callback({
  //     responseHeaders: Object.fromEntries(
  //       Object.entries(details.responseHeaders).filter(
  //         (header) => !/x-frame-options/i.test(header[0])
  //       )
  //     ),
  //   });
  // });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  _win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // Open the DevTools.
  if (isDev) {
    _win.webContents.openDevTools();
    // _win.webContents.openDevTools({ mode: 'detach' });
  }

  _win.webContents.on('new-window', function (e, url) {
    if (!url.includes('twitch.tv/login')) {
      e.preventDefault();
      console.log('new window');
      require('electron').shell.openExternal(url);
    }
  });

  _win.webContents.on('ready-to-show', () => {
    _win.webContents.setZoomFactor(getZoomFactor());
    sendPath(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/')}`);
  });

  _win.webContents.on(
    'did-fail-load',
    async (
      event,
      errorCode,
      errorDescription,
      validatedUrl,
      isMainFrame,
      frameProcessId,
      frameRoutingId
    ) => {
      // if (process.platform !== 'win32') {
      try {
        console.log('did-fail-load');
        console.log(isDev);
        console.log(errorCode);
        console.log(`file://${path.join(__dirname, '../build/index.html')}`);

        if (!isDev) {
          if (errorCode === -6) {
            await _win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
            syncZoom();
          }
        }
      } catch (e) {
        console.log(e.toString());
      }
      // REDIRECT TO FIRST WEBPAGE AGAIN
    }
  );
  win = _win;
  // _win.maximize();
  // allWins.push(_win);
  // if (!win) {
  // }
}

const isMac = process.platform === 'darwin';

const mainMenuTemplate = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' },
          ],
        },
      ]
    : []),

  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      {
        label: 'New Window',
        accelerator: 'CommandOrControl+N',
        click: createWindow,
      },
      // {
      //   label: 'Exit',
      //   accelerator: 'CommandOrControl+Q',
      //   click() {
      //     app.quit();
      //   },
      // },
      ...(isMac ? [{ role: 'close' }] : [{ role: 'quit' }]),
    ],
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac
        ? [
            { role: 'pasteAndMatchStyle' },
            { role: 'delete' },
            { role: 'selectAll' },
            { type: 'separator' },
            {
              label: 'Speech',
              submenu: [{ role: 'startSpeaking' }, { role: 'stopSpeaking' }],
            },
          ]
        : [{ role: 'delete' }, { type: 'separator' }, { role: 'selectAll' }]),
    ],
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { role: 'reload', accelerator: 'F5' },
      {
        role: 'reload',
        accelerator: 'CommandOrControl+R',
        visible: false,
        acceleratorWorksWhenHidden: true,
      },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      // { role: 'resetZoom' },
      // { role: 'zoomIn', accelerator: 'CommandOrControl+=' },
      {
        label: 'Actual Size',
        accelerator: 'CommandOrControl+0',
        click: handleResetZoom,
      },
      {
        label: 'Zoom In',
        accelerator: 'CommandOrControl+=',
        click: handleZoomIn,
      },
      { label: 'Zoom Out', accelerator: 'CommandOrControl+-', click: handleZoomOut },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac
        ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }]
        : [{ role: 'close' }]),
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Documentation',
        click: async () => {
          const { shell } = require('electron');
          await shell.openExternal('https://docs.tealstreet.io');
        },
      },
    ],
  },
  // { role: 'version on win/linux' }
  {
    label: `Version: ${app.getVersion()}`,
  },
  // { role: 'version on mac' }
  ...(isMac
    ? [
        {
          label: 'Version',
          submenu: [
            {
              label: `Version: ${app.getVersion()}`,
            },
          ],
        },
      ]
    : []),
];

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  //createMenu();
  createWindow();
  // setVersionTitle();
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //insert menu
  Menu.setApplicationMenu(mainMenu);
  //check for updates
  if (process.platform === 'win32') {
    app.setAppUserModelId(app.name);
  }
  const id = powerSaveBlocker.start('prevent-app-suspension');
  console.log(powerSaveBlocker.isStarted(id));
}); // UPDATED!

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//-------------------------------------------------------------------
//
// Everything to do with Updates
//
//-------------------------------------------------------------------

// autoUpdater.on('update-available', (_event, releaseNotes, releaseName) => {
//   const dialogOpts = {
//     type: 'info',
//     buttons: ['Ok'],
//     title: 'Tealstreet Update',
//     message: process.platform === 'win32' ? releaseNotes : releaseName,
//     detail: 'A new version is being downloaded.',
//   };
//   dialog.showMessageBox(dialogOpts, (response) => {});
// });

const alreadyNotifiedUpdates = {};

autoUpdater.on('update-downloaded', (_event, releaseNotes, releaseName) => {
  try {
    const dialogOpts = {
      type: 'info',
      buttons: ['Restart', 'Later'],
      title: 'Tealstreet Update',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'A new version has been downloaded. Restart the application to apply the updates.',
    };
    if (!alreadyNotifiedUpdates[dialogOpts.message]) {
      dialog.showMessageBox(dialogOpts).then((returnValue) => {
        if (returnValue.response === 0) autoUpdater.quitAndInstall();
      });
    }
    alreadyNotifiedUpdates[dialogOpts.message] = true;
  } catch (e) {
    sendConsoleLog(e.toString());
  }
});

let updateFetchErrorCount = 0;

setInterval(() => {
  fetch(apiUrl + 'operations/desktop-updates-enabled', {
    // fetch('http://192.168.86.30:8000/api/operations/desktop-updates-enabled', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((body) => {
      if (body['result'] === true) {
        sendConsoleLog('updates on');
        autoUpdater.checkForUpdates();
      } else {
        win.webContents
          .executeJavaScript('localStorage.getItem("username");', true)
          .then((user) => {
            if (user) {
              sendConsoleLog('found user');
              fetch(apiUrl + 'operations/desktop-updates-enabled', {
                // fetch('http://192.168.86.30:8000/api/operations/desktop-updates-enabled', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user }),
              })
                .then((res) => res.json())
                .then((body) => {
                  if (body['result'] === true) {
                    sendConsoleLog('updates on for user');
                    autoUpdater.checkForUpdates();
                  } else {
                    sendConsoleLog('updates not on for user');
                  }
                })
                .catch((e) => {
                  updateFetchErrorCount += 1;
                  if (updateFetchErrorCount > 20) {
                    autoUpdater.checkForUpdates();
                  }
                  sendConsoleLog(String(e));
                });
            } else {
              sendConsoleLog('updates not on and no user');
            }
          });
      }
    })
    .catch((e) => {
      try {
        updateFetchErrorCount += 1;
        if (updateFetchErrorCount > 20) {
          autoUpdater.checkForUpdates();
        }
        sendConsoleLog(String(e));
      } catch (e) {
        sendConsoleLog(e.toString());
      }
    });
}, 1000 * 60 * 3);

async function clearEverything() {
  try {
    await session.defaultSession.clearStorageData();
    await session.defaultSession.clearCache();
    await session.defaultSession.clearCodeCaches();
    await session.defaultSession.clearHostResolverCache();
    sendConsoleLog('Clearing app data...');
    app.commandLine.appendSwitch('disable-http-cache');
    app.exit();
    app.relaunch();
    app.commandLine.appendSwitch('disable-http-cache');
  } catch (e) {
    sendConsoleLog(e.toString());
  }
}

// let firstMaximize = true;

function resetWindow() {
  sendConsoleLog('resetting window...');
  try {
    BrowserWindow.getFocusedWindow()?.maximize();
  } catch (e) {
    sendConsoleLog(e.toString());
  }
  syncZoom();
  setTimeout(() => {
    try {
      BrowserWindow.getFocusedWindow()?.maximize();
    } catch (e) {
      sendConsoleLog(e.toString());
    }
    syncZoom();
  }, 300);
}

const setCookies = ({ seconds, ...rest }) => {
  try {
    const effectiveCookies = {
      // url: 'file://',
      // name: 'host_version',
      // value: 'failover',
      url: 'https://trade.tealstreet.io',
      // domain: 'tealstreet.io',
      sameSite: 'no_restriction',
      httpOnly: true,
      ...rest,
    };
    if (seconds) {
      try {
        effectiveCookies['expirationDate'] = parseInt(Date.now() / 1000 + parseInt(seconds));
      } catch (e) {
        sendConsoleLog(e.toString());
      }
    }
    session.defaultSession.cookies.set(effectiveCookies).catch((e) => sendConsoleLog(e.toString()));
  } catch (e) {
    sendConsoleLog(e.toString());
  }
};

const deleteCookie = ({ name, ...rest }) => {
  setCookies({ name, ...rest, expirationDate: parseInt(Date.now() / 1000 - 1000) });
};

async function getCookie({ name, id, ...rest }) {
  try {
    session.defaultSession.cookies
      .get({ ...rest })
      .then((cookies) => {
        const cookie = cookies.find((v) => v['name'] === name);
        sendCookie({ name, value: cookie && cookie['value'], id });
      })
      .catch((e) => {
        sendCookie({ cookie: undefined, id });
        sendConsoleLog(e);
      });
  } catch (e) {
    sendConsoleLog(e.toString());
  }
}
