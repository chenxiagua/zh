(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5142],
  {
    62378: (e) => {
      'use strict';
      e.exports = function (e) {
        for (var t = [], i = e.length, r = 0; r < i; r++) {
          var s = e.charCodeAt(r);
          if (s >= 55296 && s <= 56319 && i > r + 1) {
            var o = e.charCodeAt(r + 1);
            o >= 56320 && o <= 57343 && ((s = 1024 * (s - 55296) + o - 56320 + 65536), (r += 1));
          }
          s < 128
            ? t.push(s)
            : s < 2048
            ? (t.push((s >> 6) | 192), t.push((63 & s) | 128))
            : s < 55296 || (s >= 57344 && s < 65536)
            ? (t.push((s >> 12) | 224), t.push(((s >> 6) & 63) | 128), t.push((63 & s) | 128))
            : s >= 65536 && s <= 1114111
            ? (t.push((s >> 18) | 240),
              t.push(((s >> 12) & 63) | 128),
              t.push(((s >> 6) & 63) | 128),
              t.push((63 & s) | 128))
            : t.push(239, 191, 189);
        }
        return new Uint8Array(t).buffer;
      };
    },
    67669: (e, t, i) => {
      e.exports = i.p + 'alarm_clock.48d3df0afe4d4981523b8a12e4e25f92.mp3';
    },
    48994: (e, t, i) => {
      var r = i(55375);
      e.exports = function (e) {
        return (
          (e = r((e ^= e >>> 16), 2246822507)),
          (e = r((e ^= e >>> 13), 3266489909)),
          (e ^= e >>> 16) >>> 0
        );
      };
    },
    55375: (e) => {
      'use strict';
      e.exports =
        Math.imul ||
        function (e, t) {
          var i = 65535 & e,
            r = 65535 & t;
          return (
            (i * r + (((((e >>> 16) & 65535) * r + i * ((t >>> 16) & 65535)) << 16) >>> 0)) | 0
          );
        };
    },
    15561: (e) => {
      e.exports = { button: 'button-2Rly_LHp' };
    },
    10100: (e) => {
      e.exports = {
        'trading-panel-content': 'trading-panel-content-3q5skKoi',
        'trading-panel-spinner': 'trading-panel-spinner-3q5skKoi',
        'trading-panel-handle': 'trading-panel-handle-3q5skKoi',
      };
    },
    39784: (e) => {
      e.exports = {
        loader: 'loader-2-cnzqu-',
        'loader-animation': 'loader-animation-2-cnzqu-',
        loaderCircle: 'loaderCircle-2-cnzqu-',
      };
    },
    92176: (e) => {
      e.exports = {
        loader: 'loader-18GTjpi-',
        loaderItem: 'loaderItem-18GTjpi-',
        'loader-animation': 'loader-animation-18GTjpi-',
        touchMode: 'touchMode-18GTjpi-',
      };
    },
    92658: (e) => {
      e.exports = { wrapper: 'wrapper-2i2vljmZ', text: 'text-2i2vljmZ' };
    },
    71996: (e) => {
      e.exports = { blockHidden: 'blockHidden-xPfK7aM7', 'pane-button': 'pane-button-xPfK7aM7' };
    },
    62394: (e) => {
      e.exports = { 'css-value-padding': '4px' };
    },
    91407: (e) => {
      e.exports = {
        'css-value-padding': '4px',
        wrapper: 'wrapper-3X2QgaDd',
        notAvailableOnMobile: 'notAvailableOnMobile-3X2QgaDd',
        column: 'column-3X2QgaDd',
        button: 'button-3X2QgaDd',
        sellButton: 'sellButton-3X2QgaDd',
        buyButton: 'buyButton-3X2QgaDd',
        brokerButton: 'brokerButton-3X2QgaDd',
        highButtons: 'highButtons-3X2QgaDd',
        withoutBg: 'withoutBg-3X2QgaDd',
        lastCharSup: 'lastCharSup-3X2QgaDd',
        spreadQtyWrapper: 'spreadQtyWrapper-3X2QgaDd',
        spread: 'spread-3X2QgaDd',
        withoutQty: 'withoutQty-3X2QgaDd',
        qty: 'qty-3X2QgaDd',
        loader: 'loader-3X2QgaDd',
        circleLoader: 'circleLoader-3X2QgaDd',
        loading: 'loading-3X2QgaDd',
        buttonText: 'buttonText-3X2QgaDd',
        brokerButtonIconWrap: 'brokerButtonIconWrap-3X2QgaDd',
        brokerButtonDefault: 'brokerButtonDefault-3X2QgaDd',
        touchMode: 'touchMode-3X2QgaDd',
        buttons: 'buttons-3X2QgaDd',
      };
    },
    52034: (e) => {
      e.exports = { popupWrapper: 'popupWrapper-1kEHryCX' };
    },
    53363: (e, t, i) => {
      var r = i(55375),
        s = i(48994),
        o = i(62378),
        n = new Uint32Array([3432918353, 461845907]);
      function a(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      e.exports = function (e, t) {
        if (((t = t ? 0 | t : 0), 'string' == typeof e && (e = o(e)), !(e instanceof ArrayBuffer)))
          throw new TypeError('Expected key to be ArrayBuffer or string');
        var i = new Uint32Array([t]);
        return (
          (function (e, t) {
            for (var i = (e.byteLength / 4) | 0, s = new Uint32Array(e, 0, i), o = 0; o < i; o++)
              (s[o] = r(s[o], n[0])),
                (s[o] = a(s[o], 15)),
                (s[o] = r(s[o], n[1])),
                (t[0] = t[0] ^ s[o]),
                (t[0] = a(t[0], 13)),
                (t[0] = r(t[0], 5) + 3864292196);
          })(e, i),
          (function (e, t) {
            var i = (e.byteLength / 4) | 0,
              s = e.byteLength % 4,
              o = 0,
              l = new Uint8Array(e, 4 * i, s);
            switch (s) {
              case 3:
                o ^= l[2] << 16;
              case 2:
                o ^= l[1] << 8;
              case 1:
                (o ^= l[0] << 0),
                  (o = a((o = r(o, n[0])), 15)),
                  (o = r(o, n[1])),
                  (t[0] = t[0] ^ o);
            }
          })(e, i),
          (function (e, t) {
            (t[0] = t[0] ^ e.byteLength), (t[0] = s(t[0]));
          })(e, i),
          i.buffer
        );
      };
    },
    200: (e, t, i) => {
      'use strict';
      i.d(t, {
        filterDurationsByOrderType: () => b,
        findDurationMetaInfo: () => a,
        formatDateTime: () => _,
        formatTime: () => p,
        getTimestamp: () => l,
        makeDatePlus24UTCHours: () => m,
        makeInitialOrderDuration: () => n,
        makeOrderDuration: () => f,
      });
      var r = i(16282);
      const s = JSON.parse(
          '{"ar_AE":{"language":"ar","language_name":"العربية","flag":"ae","geoip_code":"ae","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"is_site_locale":true,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"name_on_widgets":"العَرَبِيَّة‎‎","global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"is_site_locale":true,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"name_on_widgets":"Português","global_name":"Portuguese"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"is_site_locale":true,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"name_on_widgets":"Česky","global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"is_site_locale":true,"iso":"de","iso_639_3":"de","show_on_widgets":true,"name_on_widgets":"Deutsch","global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"is_site_locale":true,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"name_on_widgets":"English","global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"is_site_locale":true,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"name_on_widgets":"Español","global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"is_site_locale":true,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":true,"name_on_widgets":"فارسی","global_name":"Iranian"},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"is_site_locale":true,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"name_on_widgets":"French","global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"is_site_locale":true,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"name_on_widgets":"‏עברית‏","global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"is_site_locale":true,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"name_on_widgets":"Magyar","global_name":"Hungarian","is_in_european_union":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"is_site_locale":true,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"name_on_widgets":"Indonesia","global_name":"Indonesian"},"in":{"language":"en","language_name":"English (India)","flag":"in","geoip_code":"in","priority":800,"is_site_locale":true,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"name_on_widgets":"India","global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"is_site_locale":true,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"name_on_widgets":"Italiano","global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"is_site_locale":true,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"name_on_widgets":"日本語","global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"is_site_locale":true,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"name_on_widgets":"한국어","global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"is_site_locale":true,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"name_on_widgets":"Malay [Malaysia]","global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"is_site_locale":true,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"name_on_widgets":"Polski","global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"is_site_locale":true,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"name_on_widgets":"Русский","global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"is_site_locale":true,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"name_on_widgets":"Swedish","global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"is_site_locale":true,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"name_on_widgets":"ภาษาไทย","global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"is_site_locale":true,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"name_on_widgets":"Türkçe","global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"is_site_locale":true,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"name_on_widgets":"Tiếng Việt","global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"is_site_locale":true,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"name_on_widgets":"简体中文","global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"is_site_locale":true,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"name_on_widgets":"繁體中文","global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"is_site_locale":true,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"is_site_locale":true,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"is_site_locale":true,"iso":"ro","iso_639_3":"nld","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}'
        ),
        o = (function () {
          const e = document.querySelectorAll('link[rel~=link-locale][data-locale]');
          if (0 === e.length) return s;
          const t = {};
          return (
            e.forEach((e) => {
              const i = (0, r.ensureNotNull)(e.getAttribute('data-locale'));
              t[i] = { ...s[i], href: e.href };
            }),
            t
          );
        })();
      function n(e, t) {
        var i;
        const r = b(e, t);
        if (0 === r.length) return null;
        return f(null !== (i = r.find((e) => e.default)) && void 0 !== i ? i : r[0]);
      }
      function a(e, t) {
        return e.find((e) => e.value === t);
      }
      function l(e) {
        return e.valueOf();
      }
      const c = ((u = u || window.locale), null === (d = o[u]) || void 0 === d ? void 0 : d.iso);
      var u, d;
      const h = new Intl.DateTimeFormat(c, { hour: '2-digit', minute: '2-digit' });
      function p(e) {
        return h.format(e);
      }
      function _(e, t) {
        return (
          (t.hasDatePicker
            ? (function (e) {
                const t = e.toLocaleString(c, { day: '2-digit' }),
                  i = e.toLocaleString(c, { month: '2-digit' });
                return `${e.toLocaleString(c, { year: 'numeric' })}-${i}-${t}`;
              })(e)
            : '') + (t.hasTimePicker ? ', ' + p(e) : '')
        );
      }
      const g = [1, 3, 4];
      function b(e, t) {
        return t.filter((t) => {
          var i;
          const r = null !== (i = t.supportedOrderTypes) && void 0 !== i ? i : g;
          return null === e || r.includes(e);
        });
      }
      function m() {
        const e = new Date();
        return e.setUTCHours(e.getUTCHours() + 24), e;
      }
      function f(e) {
        const t = { type: e.value };
        var i;
        return (i = e), Boolean(i.hasTimePicker || i.hasDatePicker) && (t.datetime = l(m())), t;
      }
    },
    79410: (e, t, i) => {
      'use strict';
      i.d(t, { ButtonType: () => r, Button: () => n });
      var r,
        s = i(67294),
        o = i(15561);
      !(function (e) {
        (e[(e.PlusValue = 0)] = 'PlusValue'),
          (e[(e.IncDec = 1)] = 'IncDec'),
          (e[(e.Clear = 2)] = 'Clear'),
          (e[(e.Default = 3)] = 'Default');
      })(r || (r = {}));
      class n extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._createClickHandler =
              (e, t = r.Default) =>
              () => {
                this.props.onClick(e, t);
              });
        }
        render() {
          let e;
          switch (this.props.type) {
            case r.PlusValue:
            case r.IncDec:
              e = this.props.value;
              break;
            case r.Clear:
              e = 'clear';
              break;
            case r.Default:
              e = 'default';
          }
          return s.createElement(
            'div',
            {
              className: o.button,
              'data-value': e,
              onClick: this._createClickHandler(this.props.value, this.props.type),
            },
            this.props.icon || this.props.value
          );
        }
      }
    },
    56753: (e, t, i) => {
      'use strict';
      i.d(t, { LoaderBaseRenderer: () => s });
      var r = i(71996);
      class s {
        constructor(e, t = {}) {
          (this._loadingEl = document.createElement('span')),
            this._renderLoading(t),
            this.toggleVisibility(!1),
            e.appendChild(this._loadingEl);
        }
        toggleVisibility(e) {
          this._loadingEl.classList.toggle(r.blockHidden, !e);
        }
        _renderLoading(e) {
          const { className: t } = e;
          t && this._loadingEl.classList.add(t);
        }
      }
    },
    42519: (e, t, i) => {
      'use strict';
      i.d(t, { LoaderPointsRenderer: () => o });
      var r = i(56753),
        s = i(92176);
      class o extends r.LoaderBaseRenderer {
        _renderLoading(e) {
          super._renderLoading(e),
            (this._loadingEl.innerHTML = `\n\t\t\t<span class="${s.loaderItem}"></span>\n\t\t\t<span class="${s.loaderItem}"></span>\n\t\t\t<span class="${s.loaderItem}"></span>\n\t\t`),
            this._loadingEl.classList.add(s.loader);
        }
      }
    },
    26057: (e, t, i) => {
      'use strict';
      i.d(t, { OfflineScreen: () => a, renderOfflineScreen: () => l });
      var r = i(67294),
        s = i(73935),
        o = i(74245),
        n = i(92658);
      function a() {
        return r.createElement(
          'div',
          { className: n.wrapper },
          r.createElement('p', { className: n.text }, (0, o.t)('Lost internet connection'))
        );
      }
      function l(e) {
        s.render(r.createElement(a, null), e);
      }
    },
    27896: (e, t, i) => {
      'use strict';
      i.d(t, { trackingModeIsAvailable: () => r });
      const r = i(85452).CheckMobile.any();
    },
    23252: (e, t, i) => {
      'use strict';
      i.d(t, { makeAccountManagerHeaderDropdownsProps: () => o });
      var r = i(16282),
        s = i(87915);
      async function o(e) {
        const t = e.brokersList().filter((e) => !e.configFlags.isSuspended),
          i = Promise.resolve(void 0),
          o = (0, r.ensureNotNull)(e.activeBroker()),
          n = await i,
          a = await o.accountsMetainfo(),
          l = o.accountManagerInfo();
        if (0 === a.length) return;
        const c = a.map((e) => {
            var t;
            return {
              id: e.id,
              name: e.name,
              callBack: async () => {
                e.id !== o.currentAccount() && o.setCurrentAccount(e.id);
              },
              currency:
                '' === e.currency ? void 0 : null !== (t = e.currency) && void 0 !== t ? t : void 0,
            };
          }),
          u = c.find((e) => e.id === o.currentAccount()),
          d = o.metainfo(),
          h = void 0 !== n ? (0, s.brokersListFromPlans)(t, n) : void 0;
        return {
          brokerDropdownProps:
            void 0 === h
              ? void 0
              : {
                  title: l.accountTitle,
                  brokerName: d.title,
                  logo: d.logoMiniUrl,
                  logoBlack: d.logoMiniBlackUrl,
                  actions: o.buttonDropdownActions(),
                  trading: e,
                  brokers: h,
                },
          accountDropdownProps: {
            currentAccount: (0, r.ensureDefined)(u),
            accountsList: c,
            currentAccountUpdate: o.currentAccountUpdate,
          },
        };
      }
    },
    15510: (e, t, i) => {
      'use strict';
      i.d(t, { BrokerService: () => s });
      var r = i(16282);
      class s {
        constructor(e) {
          (this._activeBroker = null),
            (this._trading = e),
            this._trading.onConnectionStatusChange.subscribe(this, this._onStatusChange),
            this._onStatusChange(this._trading.connectStatus());
        }
        activeBroker() {
          return this._activeBroker;
        }
        trading() {
          return this._trading;
        }
        _stopService() {
          this.stopService(),
            (0, r.ensureNotNull)(this._activeBroker).currentAccountUpdate.unsubscribeAll(this);
        }
        _startService() {
          this.startService(),
            (0, r.ensureNotNull)(this._activeBroker).currentAccountUpdate.subscribe(
              this,
              this._onCurrentAccountUpdate
            );
        }
        _onStatusChange(e) {
          const t = this._trading.activeBroker();
          (this._activeBroker === t && 1 === e) ||
            (null !== this._activeBroker && (this._stopService(), (this._activeBroker = null)),
            null !== t &&
              1 === e &&
              ((this._activeBroker = t),
              this._startService(),
              (this._lastAccountId = t.currentAccount())));
        }
        _onCurrentAccountUpdate() {
          const e = (0, r.ensureNotNull)(this._activeBroker);
          this._lastAccountId !== e.currentAccount() &&
            (this.stopService(), this.startService(), (this._lastAccountId = e.currentAccount()));
        }
      }
    },
    59784: (e, t, i) => {
      'use strict';
      i.r(t),
        i.d(t, { addBroker: () => te, brokersList: () => ie, createBrokerConnection: () => se });
      var r = i(74245),
        s = i(7424),
        o = i(90592),
        n = i(21526),
        a = i.n(n),
        l = i(16282);
      class c {
        constructor(e) {
          (this._objects = {}),
            (this._started = !1),
            (this._isObjectsRequestActual = !1),
            (this._ordersPromise = null),
            (this._getter = e),
            (this.updateDelegate = new (a())()),
            (this.partialUpdateDelegate = new (a())());
        }
        start() {
          this._started || ((this._started = !0), (this._ordersPromise = this._requestObjects()));
        }
        stop() {
          (this._objects = {}),
            (this._started = !1),
            (this._ordersPromise = null),
            (this._isObjectsRequestActual = !1);
        }
        update(e, t) {
          this._started &&
            (this._isObjectsRequestActual
              ? (this._isObjectsRequestActual = !1)
              : ((this._objects[e.id] = e), this._onObjectUpdated(e, t)));
        }
        partialUpdate(e, t) {
          if (!this._started) return;
          if (this._isObjectsRequestActual) return void (this._isObjectsRequestActual = !1);
          let i, r;
          (0, o.isObject)(e) ? ((i = e.id), (r = e)) : ((i = e), (r = (0, l.ensure)(t)));
          const s = this._objects[i];
          s && (Object.assign(s, r), this.partialUpdateDelegate.fire(s, r));
        }
        fullUpdate() {
          this._started &&
            (this._isObjectsRequestActual
              ? (this._isObjectsRequestActual = !1)
              : (this._ordersPromise = this._requestObjects()));
        }
        getObjects() {
          return this._ordersPromise || Promise.resolve(Object.values(this._objects));
        }
        _onObjectUpdated(e, t) {
          this.updateDelegate.fire(e, t);
        }
        _onAllObjectsUpdated() {
          this._objectsCache().forEach((e) => this.updateDelegate.fire(e, !0));
        }
        _objectsCache() {
          return Object.values(this._objects);
        }
        async _requestObjects() {
          let e = [];
          do {
            (this._isObjectsRequestActual = !0), (e = await this._getter());
          } while (!this._isObjectsRequestActual);
          var t;
          return (
            (this._objects = ((t = 'id'), e.reduce((e, i) => ((e[i[t]] = i), e), {}))),
            (this._ordersPromise = null),
            (this._isObjectsRequestActual = !1),
            this._onAllObjectsUpdated(),
            e
          );
        }
      }
      var u = i(14071),
        d = i(10407);
      class h extends c {
        constructor(e, t) {
          super(e), (this._brokerConfigGetter = t);
        }
        _onObjectUpdated(e, t) {
          this._patchTrades(
            this._objectsCache().filter((t) => t.symbol === e.symbol && 0 !== t.qty),
            e,
            t
          ),
            super._onObjectUpdated(e, t);
        }
        _onAllObjectsUpdated() {
          this._patchTrades(this._objectsCache().filter((e) => 0 !== e.qty)),
            super._onAllObjectsUpdated();
        }
        _patchTrades(e, t, i) {
          const r = this._brokerConfigGetter();
          let s;
          s = r.requiresFIFOCloseTrades ? (r.fifoOnlyForSameQty ? g : _) : p;
          const o = s(e);
          for (const e of o) t !== e && super._onObjectUpdated(e, i);
        }
      }
      function p(e) {
        const t = [];
        for (const i of e) i.canBeClosed || ((i.canBeClosed = !0), t.push(i));
        return t;
      }
      function _(e) {
        const t = {};
        for (const i of e) {
          let e = t[i.symbol];
          void 0 === e && ((e = { oldest: null, all: [] }), (t[i.symbol] = e)),
            (null === e.oldest || e.oldest.date > i.date) && (e.oldest = i),
            e.all.push(i);
        }
        const i = [];
        for (const e of Object.keys(t)) {
          const r = (0, l.ensureDefined)(t[e]);
          for (const e of r.all) {
            const t = r.oldest === e,
              s = t !== e.canBeClosed;
            (e.canBeClosed = t), s && i.push(e);
          }
        }
        return i;
      }
      function g(e) {
        const t = {};
        for (const i of e) {
          let e = t[i.symbol];
          void 0 === e && ((e = {}), (t[i.symbol] = e));
          let r = e[i.qty];
          void 0 === r && ((r = { oldest: null, all: [] }), (e[i.qty] = r)),
            (null === r.oldest || r.oldest.date > i.date) && (r.oldest = i),
            r.all.push(i);
        }
        const i = [];
        for (const e of Object.keys(t)) {
          const r = (0, l.ensureDefined)(t[e]);
          for (const e of Object.keys(r)) {
            const t = (0, l.ensureDefined)(r[e]);
            for (const e of t.all) {
              const r = t.oldest === e,
                s = r !== e.canBeClosed;
              (e.canBeClosed = r), s && i.push(e);
            }
          }
        }
        return i;
      }
      var b = i(766),
        m = i(40160),
        f = i(60874),
        y = i(85361),
        v = i(87915);
      function w(e, t) {
        return {
          symbol: t.symbol,
          type: 2,
          side: 1 === t.side ? -1 : 1,
          qty: Math.abs(e),
          seenPrice: null,
          isClose: !0,
        };
      }
      const k = (0, u.getLogger)('Trading.BrokerConnectionAdapter'),
        S = (0, r.t)('Failed to close position'),
        P = (0, r.t)('Failed to reverse position');
      function C(e) {
        (0, l.assert)('object' != typeof e, 'Expected not an object');
      }
      function B(e, t) {
        return (
          e.type === t.type &&
          e.qty === t.qty &&
          e.limitPrice === t.limitPrice &&
          e.stopPrice === t.stopPrice &&
          e.takeProfit === t.takeProfit &&
          e.stopLoss === t.stopLoss &&
          e.trailingStopPips === t.trailingStopPips
        );
      }
      class T {
        constructor(e, t, i, r, s, o) {
          (this.connectionStatusUpdate = new (a())()),
            (this.executionUpdate = new (a())()),
            (this.tradingOperationFinished = new (a())()),
            (this.currentAccountUpdate = new (a())()),
            (this._brokerPlan = null),
            (this._subscriptions = {}),
            (this._lastFireResult = {}),
            (this._fakeDomeSubscriptions = {}),
            (this._formattersCache = {}),
            (this._spreadFormattersCache = {}),
            (this._quantityFormattersCache = {}),
            (this._tradesCache = null),
            (this._fakePositionUpdateDelegate = null),
            (this._realtimeSubscriptionState = []),
            (this._loggedInManually = !1),
            (this._pendingSubscriptions = []),
            (this.leverageInfo = (e) => {
              if (this.config.supportLeverage && this._brokerConnection.leverageInfo)
                return this._brokerConnection.leverageInfo(e);
              throw new Error('Method leverage is not implemented');
            }),
            (this.setLeverage = (e) => {
              if (this.config.supportLeverage && this._brokerConnection.setLeverage)
                return this._brokerConnection.setLeverage(e);
              throw new Error('Method setLeverage is not implemented');
            }),
            (this.previewLeverage = (e) => {
              if (this.config.supportLeverage && this._brokerConnection.previewLeverage)
                return this._brokerConnection.previewLeverage(e);
              throw new Error('Method previewLeverage is not implemented');
            }),
            (this.config = Object.assign({}, e.configFlags)),
            (this._brokerMetainfo = this._patchMetainfo(e)),
            (this._brokerPlan = o || null),
            (this._brokerConnection = t),
            (this._host = i),
            (this._tradingStat = s),
            (this._brokerLogger = (0, u.getLogger)(
              'Trading.' + this._brokerMetainfo.id + '.Connection'
            )),
            i.setBrokerConnectionAdapter(this),
            this._initializeConnectProtection(),
            (this._positionsCache = t.positions
              ? new c(() => (t.positions ? t.positions() : Promise.resolve([])))
              : null),
            (this._tradesCache = t.trades
              ? new h(
                  () => (t.trades ? t.trades() : Promise.resolve([])),
                  () => this.config
                )
              : null),
            (this._ordersCache = new c(() => t.orders()));
          const n = (e) => {
            1 === e
              ? (null !== this._positionsCache && this._positionsCache.start(),
                this._ordersCache.start(),
                this._tradesCache && this._tradesCache.start())
              : (null !== this._positionsCache && this._positionsCache.stop(),
                this._ordersCache.stop(),
                this._tradesCache && this._tradesCache.stop());
          };
          this.connectionStatusUpdate.subscribe(null, n),
            n(this.connectionStatus()),
            (this._originalDOMESubscriptionMethods = {
              subscribeDOME: t.subscribeDOME,
              unsubscribeDOME: t.unsubscribeDOME,
            }),
            this._patchBrokerSubscribeUnsubscribeDOMEMethods(),
            this.connectionStatusUpdate.subscribe(null, (e) => {
              1 === e && this._patchBrokerSubscribeUnsubscribeDOMEMethods();
            }),
            e.configFlags.supportPositions || (this._fakePositionUpdateDelegate = new (a())()),
            (this._brokerRealtimeAdapter = r);
        }
        tryRestoreSession() {
          if (this._brokerConnection.tryRestoreSession)
            return this._brokerConnection.tryRestoreSession();
        }
        get orderUpdate() {
          return this._ordersCache.updateDelegate;
        }
        get positionUpdate() {
          return null === this._fakePositionUpdateDelegate
            ? (0, l.ensure)(this._positionsCache).updateDelegate
            : this._fakePositionUpdateDelegate;
        }
        get tradeUpdate() {
          return (0, l.ensure)(this._tradesCache).updateDelegate;
        }
        get orderPartialUpdate() {
          return this._ordersCache.partialUpdateDelegate;
        }
        get positionPartialUpdate() {
          return null === this._fakePositionUpdateDelegate
            ? (0, l.ensure)(this._positionsCache).partialUpdateDelegate
            : this._fakePositionUpdateDelegate;
        }
        get tradePartialUpdate() {
          return (0, l.ensure)(this._tradesCache).partialUpdateDelegate;
        }
        onOrderUpdate(e) {
          this._ordersCache.update(e);
        }
        onOrderPartialUpdate(e, t) {
          this._ordersCache.partialUpdate(e, t);
        }
        onPositionUpdate(e, t) {
          if (
            ((0, l.assert)(!!this.config.supportPositions, 'Broker doesn`t support positions'),
            0 === e.qty)
          ) {
            const t = this._lastFireResult[e.symbol];
            t && delete t.PL;
          }
          (0, l.ensure)(this._positionsCache).update(e, t);
        }
        onPositionPartialUpdate(e, t) {
          (0, l.assert)(!!this.config.supportPositions, 'Broker doesn`t support positions'),
            (0, l.ensure)(this._positionsCache).partialUpdate(e, t);
        }
        onTradeUpdate(e, t) {
          if (
            ((0, l.assert)(!!this.config.supportTrades, 'Broker doesn`t support trades'),
            0 === e.qty)
          ) {
            const t = this._lastFireResult[e.symbol];
            t && delete t.TradePL;
          }
          (0, l.ensure)(this._tradesCache).update(e, t);
        }
        onTradePartialUpdate(e, t) {
          (0, l.ensure)(this._tradesCache).partialUpdate(e, t);
        }
        onCurrentAccountChanged() {
          null !== this._positionsCache && this._positionsCache.fullUpdate(),
            this._ordersCache.fullUpdate(),
            this._tradesCache && this._tradesCache.fullUpdate();
          const e = this.currentAccount();
          this.currentAccountUpdate.fire(e);
        }
        patchConfig(e) {
          (0, b.migrateConfigFlags)(e),
            Object.assign(this.config, e),
            Object.assign(this._brokerMetainfo.configFlags, e),
            (this._brokerMetainfo = this._patchMetainfo(this._brokerMetainfo));
        }
        async getOrderDialogOptions(e) {
          return void 0 !== this._brokerConnection.getOrderDialogOptions
            ? this._brokerConnection.getOrderDialogOptions(e)
            : void 0;
        }
        getPositionDialogOptions() {
          return void 0 !== this._brokerConnection.getPositionDialogOptions
            ? this._brokerConnection.getPositionDialogOptions()
            : void 0;
        }
        getValidationRules(e) {
          return void 0 !== this._brokerConnection.getValidationRules
            ? this._brokerConnection.getValidationRules(e)
            : void 0;
        }
        chartContextMenuActions(e, t) {
          return this._brokerConnection.chartContextMenuActions(e, t);
        }
        buttonDropdownActions() {
          return this._host.buttonDropdownActions();
        }
        connectionStatus() {
          return this._brokerConnection.connectionStatus();
        }
        isConnected() {
          return 1 === this._brokerConnection.connectionStatus();
        }
        signIn(e, t, i, r) {
          return (
            this._brokerLogger.logNormal('Try to login with username: ' + e),
            (this._loggedInManually = !0),
            this._brokerConnection.signIn(e, t, i, r)
          );
        }
        loggedInManually() {
          return this._loggedInManually;
        }
        disconnect(e = !1) {
          try {
            return this._brokerConnection.disconnect(e);
          } catch (e) {
            k.logWarn('Failed to disconnect');
          }
        }
        currentAccount() {
          return this._brokerConnection.currentAccount
            ? this._brokerConnection.currentAccount()
            : '';
        }
        currentAccountType() {
          return this._brokerConnection.currentAccountType
            ? this._brokerConnection.currentAccountType()
            : void 0;
        }
        metainfo() {
          return this._brokerMetainfo;
        }
        brokerPlan() {
          return this._brokerPlan;
        }
        bro() {
          return this._brokerConnection;
        }
        fireSubscription(e, t, i, r) {
          if (
            (void 0 === this._lastFireResult[t] &&
              (this._lastFireResult[t] = {
                Realtime: null,
                PL: null,
                Equity: null,
                DOME: null,
                TradePL: null,
                PipValue: null,
                MarginAvailable: null,
                CryptoBalance: null,
              }),
            ((0, l.ensure)(this._lastFireResult[t])[e] = { data: i, time: Date.now() }),
            void 0 === this._subscriptions[t])
          )
            return;
          const s = (0, l.ensure)(this._subscriptions[t]);
          (0, l.ensure)(s[e]).forEach((e) => e(t, i, r));
        }
        positions(e) {
          return this.config.supportPositions
            ? (this._makeSureBrokerIsConnected(),
              this._positions().then((t) => t.filter((t) => void 0 === e || t.symbol === e)))
            : Promise.resolve([]);
        }
        disconnectWarningMessage() {
          return this._brokerConnection.disconnectWarningMessage
            ? this._brokerConnection.disconnectWarningMessage()
            : null;
        }
        connectWarningMessage() {
          return this._brokerConnection.connectWarningMessage
            ? this._brokerConnection.connectWarningMessage()
            : null;
        }
        trades(e) {
          return (
            this._makeSureBrokerIsConnected(),
            (0, l.assert)(!!this.config.supportTrades, 'Broker doesn`t support trades'),
            this._trades().then((t) => t.filter((t) => void 0 === e || t.symbol === e))
          );
        }
        positionById(e) {
          return this._brokerConnection.positionById
            ? this._brokerConnection.positionById(e)
            : this.positions().then((t) => t.find((t) => t.id === e));
        }
        tradeById(e) {
          return (
            (0, l.assert)(!!this.config.supportTrades, 'Broker doesn`t support trades'),
            this.trades().then((t) => t.find((t) => t.id === e))
          );
        }
        orders(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._orders().then((t) => t.filter((t) => void 0 === e || t.symbol === e))
          );
        }
        ordersHistory() {
          return (
            this._makeSureBrokerIsConnected(),
            this.config.supportOrdersHistory && this._brokerConnection.ordersHistory
              ? this._brokerConnection.ordersHistory()
              : Promise.resolve([])
          );
        }
        async executions(e) {
          return this.config.supportExecutions
            ? (this._makeSureBrokerIsConnected(), this._brokerConnection.executions(e))
            : [];
        }
        orderById(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._brokerConnection.orders().then((t) => t.find((t) => t.id === e))
          );
        }
        accountManagerInfo() {
          return this._brokerConnection.accountManagerInfo();
        }
        isTradable(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._brokerConnection
              .isTradable(e)
              .then(
                (t) => (
                  'object' != typeof t && (t = { tradable: t }),
                  t.tradable ||
                    void 0 !== t.reason ||
                    (t.reason = (0, m.makeNonTradableSymbolText)(
                      (0, f.htmlEscape)(e),
                      this._brokerMetainfo.title
                    )),
                  t
                )
              )
          );
        }
        formatter(e, t = !0) {
          return (
            this._makeSureBrokerIsConnected(),
            this._formattersCache[e] ||
              (this._formattersCache[e] =
                (this._brokerConnection.formatter && this._brokerConnection.formatter(e, t)) ||
                this._host.defaultFormatter(e, t)),
            (0, d.makeTimeLimited)(this._formattersCache[e], 1e4, 'formatter not received')
          );
        }
        spreadFormatter(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._spreadFormattersCache[e] ||
              (this._spreadFormattersCache[e] =
                (this._brokerConnection.spreadFormatter &&
                  this._brokerConnection.spreadFormatter(e)) ||
                this._host.defaultFormatter(e, !1)),
            (0, d.makeTimeLimited)(
              this._spreadFormattersCache[e],
              1e4,
              'spreadFormatter not received'
            )
          );
        }
        quantityFormatter(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._quantityFormattersCache[e] ||
              (this._quantityFormattersCache[e] =
                (this._brokerConnection.quantityFormatter &&
                  this._brokerConnection.quantityFormatter(e)) ||
                this._host.quantityFormatter()),
            (0, d.makeTimeLimited)(
              this._quantityFormattersCache[e],
              1e4,
              'quantityFormatter not received'
            )
          );
        }
        placeOrder(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this.processErrors(
              this._brokerConnection.placeOrder(e, t),
              !0,
              (0, r.t)('Order rejected'),
              (t) => {
                (0, l.ensureNotNull)(this._tradingStat).trackOrderPlaced({ ...e, id: t.orderId }),
                  this._host.trackEvent(
                    '',
                    'SilentMode',
                    this._host.silentOrdersPlacement().value() ? 'On' : 'Off'
                  );
              }
            )
          );
        }
        previewOrder(e) {
          if (!this._brokerConnection.previewOrder)
            throw new Error('Order preview is not supported');
          return this._brokerConnection.previewOrder(e);
        }
        modifyOrder(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this.processErrors(
              this._brokerConnection.modifyOrder(e, t),
              !0,
              (0, r.t)('Failed to modify order')
            ).then((t) => t && this._waitForOrderModification(e))
          );
        }
        cancelOrder(e) {
          return (
            C(e),
            this._makeSureBrokerIsConnected(),
            this.processErrors(
              this._brokerConnection.cancelOrder(e),
              !0,
              (0, r.t)('Failed to cancel order')
            )
          );
        }
        cancelOrders(e, t, i) {
          return (
            this._makeSureBrokerIsConnected(),
            this.processErrors(
              this._brokerConnection.cancelOrders(e, t, i),
              !0,
              (0, r.t)('Failed to cancel one or more orders')
            )
          );
        }
        async closePosition(e, t) {
          let i;
          C(e),
            this._makeSureBrokerIsConnected(),
            (0, l.assert)(
              void 0 === t || !!this.config.supportPartialClosePosition,
              'Broker doesn`t support partial position closing'
            );
          const r = new Promise(async (r, s) => {
            try {
              const s = await this.positionById(e);
              (i = (e) => {
                void 0 !== s &&
                  e.id === s.id &&
                  e.symbol === s.symbol &&
                  e.qty !== s.qty &&
                  (this.positionUpdate.unsubscribe(this, i), r(!0));
              }),
                this.positionUpdate.subscribe(this, i),
                await this._closePosition(e, t);
            } catch (e) {
              s(e);
            }
          });
          return (0, d.makeTimeLimited)(r, 3e4, 'Position closing timeout').catch(
            (e) => (
              this._brokerLogger.logError(`${S}: ${(0, m.getLoggerMessage)(e)}`),
              this.positionUpdate.unsubscribe(this, i),
              !1
            )
          );
        }
        async closeTrade(e, t) {
          var i;
          C(e),
            this._makeSureBrokerIsConnected(),
            (0, l.assert)(!!this.config.supportTrades, 'Broker doesn`t support trades'),
            (0, l.assert)(
              void 0 === t ||
                (null !== (i = this.config.supportPartialCloseTrade) && void 0 !== i && i),
              'Broker doesn`t support partial position closing'
            );
          const s = (0, l.ensureDefined)(await this.tradeById(e));
          if (0 === s.qty)
            return (
              this._host.showNotification(
                (0, r.t)('Failed to close the position'),
                (0, r.t)('The position you are trying to close has been already closed.'),
                0
              ),
              !1
            );
          if (void 0 === t || t <= Math.abs(s.qty)) {
            if (this._brokerConnection.closeTrade) {
              const i = w(null != t ? t : Math.abs(s.qty), s);
              return this.processErrors(this._brokerConnection.closeTrade(e, t), !0, S, () =>
                (0, l.ensureNotNull)(this._tradingStat).trackOrderPlaced(i)
              );
            }
            throw new Error('Method closeTrade is not implemented');
          }
          return (
            this._host.showNotification(
              (0, r.t)('Failed to close the position'),
              (0, r.t)('The position you are trying to close has been changed.'),
              0
            ),
            !1
          );
        }
        reversePosition(e) {
          if (
            (C(e),
            this._makeSureBrokerIsConnected(),
            this.config.supportMultiposition && !this.config.supportNativeReversePosition)
          )
            throw new Error('Cannot reverse position on multiposition account');
          let t;
          const i = new Promise(async (i, r) => {
            try {
              const r = await this.positionById(e);
              (t = (e) => {
                void 0 !== r &&
                  e.symbol === r.symbol &&
                  e.side !== r.side &&
                  (this.positionUpdate.unsubscribe(this, t), i(!0));
              }),
                this.positionUpdate.subscribe(this, t),
                await this._reversePosition(e);
            } catch (e) {
              r(e);
            }
          });
          return (0, d.makeTimeLimited)(i, 3e4, 'Position reversing timeout').catch(
            (e) => (
              this._brokerLogger.logError(`${P}: ${(0, m.getLoggerMessage)(e)}`),
              this.positionUpdate.unsubscribe(this, t),
              !1
            )
          );
        }
        editPositionBrackets(e, t, i) {
          if ((this._makeSureBrokerIsConnected(), this._brokerConnection.editPositionBrackets))
            return this.processErrors(
              this._brokerConnection.editPositionBrackets(e, t, i),
              !0,
              (0, r.t)('Failed to modify Stop Loss / Take Profit')
            );
          throw new Error('Method editPositionBrackets is not implemented');
        }
        editTradeBrackets(e, t) {
          if (
            (this._makeSureBrokerIsConnected(),
            (0, l.assert)(
              !!this.config.supportTradeBrackets,
              'Broker doesn`t support brackets on trades'
            ),
            this._brokerConnection.editTradeBrackets)
          )
            return this.processErrors(
              this._brokerConnection.editTradeBrackets(e, t),
              !0,
              (0, r.t)('Failed to modify Stop Loss / Take Profit')
            );
          throw new Error('Method editTradeBrackets is not implemented');
        }
        async subscribeRealtime(e, t) {
          this._makeSureBrokerIsConnected();
          const i = { symbol: e, listener: t, provider: 0 };
          this._realtimeSubscriptionState.push(i);
          const r = await this.symbolInfo(e),
            s = this._realtimeSubscriptionState.findIndex(
              (i) => i.symbol === e && i.listener === t
            );
          if (-1 !== s)
            return void 0 !== r.hasQuotes && !1 === r.hasQuotes
              ? ((this._realtimeSubscriptionState[s].provider = 1),
                (0, l.ensure)(this._brokerRealtimeAdapter).subscribeRealtime(e, t))
              : ((this._realtimeSubscriptionState[s].provider = 2),
                this._addSubscription('Realtime', e, t));
        }
        async quotesSnapshot(e) {
          let t, i;
          const r = (e, s) => {
              (i = s), (s.ask || s.bid) && (this.unsubscribeRealtime(e, r), null == t || t(s));
            },
            s = new Promise((i) => {
              (t = i), this.subscribeRealtime(e, r);
            });
          try {
            return await (0, d.makeTimeLimited)(s, 1e4, 'quotesSnapshot not received');
          } catch (t) {
            if ((this.unsubscribeRealtime(e, r), void 0 !== i)) return i;
            throw t;
          }
        }
        subscribeDOME(e, t) {
          return this._makeSureBrokerIsConnected(), this._addSubscription('DOME', e, t);
        }
        subscribePipValue(e, t) {
          return this._makeSureBrokerIsConnected(), this._addSubscription('PipValue', e, t);
        }
        subscribePL(e, t) {
          this._makeSureBrokerIsConnected(), this._addSubscription('PL', e, t);
        }
        subscribeTradePL(e, t) {
          return this._makeSureBrokerIsConnected(), this._addSubscription('TradePL', e, t);
        }
        subscribeCryptoBalance(e, t) {
          return this._makeSureBrokerIsConnected(), this._addSubscription('CryptoBalance', e, t);
        }
        subscribeEquity(e) {
          return this._makeSureBrokerIsConnected(), this._addSubscription('Equity', 'Equity', e);
        }
        subscribeMarginAvailable(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription('MarginAvailable', 'MarginAvailable', e)
          );
        }
        unsubscribeRealtime(e, t) {
          const i = this._realtimeSubscriptionState.findIndex(
            (i) => i.symbol === e && i.listener === t
          );
          -1 !== i &&
            (1 === this._realtimeSubscriptionState[i].provider
              ? (0, l.ensure)(this._brokerRealtimeAdapter).unsubscribeRealtime(e, t)
              : this._removeSubscription('Realtime', e, t),
            this._realtimeSubscriptionState.splice(i, 1));
        }
        unsubscribeDOME(e, t) {
          this._removeSubscription('DOME', e, t);
        }
        unsubscribePipValue(e, t) {
          this._removeSubscription('PipValue', e, t);
        }
        unsubscribePL(e, t) {
          this._removeSubscription('PL', e, t);
        }
        unsubscribeTradePL(e, t) {
          this._removeSubscription('TradePL', e, t);
        }
        unsubscribeCryptoBalance(e, t) {
          this._removeSubscription('CryptoBalance', e, t);
        }
        unsubscribeEquity(e) {
          this._removeSubscription('Equity', 'Equity', e);
        }
        unsubscribeMarginAvailable(e) {
          this._removeSubscription('MarginAvailable', 'MarginAvailable', e);
        }
        async accountMetainfo() {
          const e = await this.accountsMetainfo(),
            t = this.currentAccount(),
            i = e.find((e) => e.id === t);
          if (void 0 === i) throw new Error('accountMetainfo not received');
          return i;
        }
        accountsMetainfo() {
          return (0, d.makeTimeLimited)(
            this._brokerConnection.accountsMetainfo(),
            1e4,
            'accountsMetainfo not received'
          );
        }
        setCurrentAccount(e) {
          if (void 0 === this._brokerConnection.setCurrentAccount)
            throw new Error(this._brokerMetainfo.title + " doesn't support sub-accounts");
          this._brokerConnection.setCurrentAccount(e);
        }
        symbolInfo(e) {
          return (0, d.makeTimeLimited)(
            this._brokerConnection.symbolInfo(e),
            1e4,
            'symbolInfo not received'
          );
        }
        async getPositionCurrency(e) {
          try {
            const t = await this._brokerConnection.symbolInfo(e);
            if (
              this._brokerMetainfo.configFlags.positionPLInInstrumentCurrency &&
              void 0 !== t.currency
            )
              return t.currency;
            const i = await this.accountMetainfo();
            return (0, v.getCurrency)(i, !0);
          } catch (e) {
            return void k.logError(e);
          }
        }
        bugReportInfo() {
          function e(e) {
            return JSON.parse(JSON.stringify(e));
          }
          function t(e) {
            if ('object' != typeof e) return e;
            if ((0, o.isArray)(e)) return e.map(t);
            const i = {};
            for (const t in e) 'object' != typeof e[t] && (i[t] = e[t]);
            return i;
          }
          return Promise.all([
            this.orders(),
            this.positions(),
            this.config.supportTrades ? this.trades() : Promise.resolve([]),
          ]).then((i) => ({
            activeBroker: this.metainfo().title,
            orders: t(e(i[0])),
            positions: t(e(i[1])),
            trades: t(e(i[2])),
            silentOrdersPlacement: this._host.silentOrdersPlacement().value(),
            floatingPanel: (0, l.ensureNotNull)(this._host.sellBuyButtonsVisibility()).value(),
            account: this.currentAccount(),
            accountType: this.currentAccountType(),
            lastUpdates: this._lastFireResult,
            time: Date.now(),
            brokerSpecific: this._brokerConnection.bugReportInfo
              ? this._brokerConnection.bugReportInfo()
              : null,
          }));
        }
        processErrors(e, t, i, n) {
          if (!(0, o.isPromise)(e))
            throw new Error('Broker incorrectly implements API, should return Promise');
          return e
            .then((e) => n && n(e))
            .then((e) => 'boolean' != typeof e || e)
            .catch((e) => {
              let o = '';
              return (
                'string' == typeof e
                  ? (o = e)
                  : 'object' == typeof e &&
                    'string' == typeof e.message &&
                    (o = (0, f.removeTags)(e.message)),
                t && s.enabled('trading_notifications')
                  ? (0 !== o.length && ('.' !== o.slice(-1) && (o += '.'), (o += ' ')),
                    (o += (0, r.t)('To learn more, please contact your broker.')),
                    this._host.showNotification(i || '', o, 0))
                  : k.logWarn(e),
                Promise.resolve(!1)
              );
            })
            .then((e) => (this.tradingOperationFinished.fire(e), e));
        }
        setDurations(e) {
          this._brokerMetainfo.durations = e.slice();
        }
        setSymbolSearchId(e) {
          this._brokerMetainfo.backendBrokerName = e;
        }
        getRealtimeDataCheckParams() {
          return this._brokerConnection.getRealtimeDataCheckParams
            ? this._brokerConnection.getRealtimeDataCheckParams()
            : {};
        }
        getVerifyLiveAccountParams() {
          if (void 0 === this._brokerConnection.getVerifyLiveAccountParams)
            throw new Error(
              `Method getVerifyLiveAccountParams for broker ${this._brokerMetainfo.id} is not implemented`
            );
          return this._brokerConnection.getVerifyLiveAccountParams();
        }
        unhideSymbolSearchGroups() {
          return this._brokerConnection.unhideSymbolSearchGroups
            ? this._brokerConnection.unhideSymbolSearchGroups()
            : [];
        }
        destroy() {
          void 0 !== this._brokerConnection.destroy && this._brokerConnection.destroy();
        }
        currentBroker() {
          return this._brokerMetainfo.id;
        }
        _initializeConnectProtection() {
          let e = null;
          this.connectionStatusUpdate.subscribe(null, (t) => {
            if ((e && (clearTimeout(e), (e = null)), 2 === t)) {
              const t = (0, v.isOAuthAuthType)(this.config.authorizationType) ? 18e4 : 6e4;
              e = setTimeout(() => {
                this._host.selectBroker(),
                  this._host.showNotification(
                    (0, r.t)('Authorization Error'),
                    (0, r.t)('The connection attempt failed. Please try again later.')
                  );
              }, t);
            }
          });
        }
        _fakeSubscribeDOME(e) {
          (this._fakeDomeSubscriptions[e] = (e, t) => {
            const i = t.ask || t.trade,
              r = t.bid || t.trade,
              s = {
                snapshot: !0,
                asks: i ? [{ price: i, volume: t.ask_size || 1 / 0 }] : [],
                bids: r ? [{ price: r, volume: t.bid_size || 1 / 0 }] : [],
              };
            this._host.domeUpdate(e, s);
          }),
            this.subscribeRealtime(e, this._fakeDomeSubscriptions[e]);
        }
        _fakeUnsubscribeDOME(e) {
          this.unsubscribeRealtime(e, this._fakeDomeSubscriptions[e]);
        }
        _isMaintenance() {
          return isFeatureEnabled((0, v.makeMaintananceFeatureToggleName)(this._brokerMetainfo.id));
        }
        _isBrokerSideMaintenance() {
          return isFeatureEnabled(
            (0, v.makeBrokerSideMaintananceFeatureToggleName)(this._brokerMetainfo.id)
          );
        }
        _patchBrokerSubscribeUnsubscribeDOMEMethods() {
          const e = !this._brokerMetainfo.configFlags.supportLevel2Data;
          (this._brokerConnection.subscribeDOME = e
            ? (e) => {
                this._fakeSubscribeDOME(e);
              }
            : this._originalDOMESubscriptionMethods.subscribeDOME),
            (this._brokerConnection.unsubscribeDOME = e
              ? (e) => {
                  this._fakeUnsubscribeDOME(e);
                }
              : this._originalDOMESubscriptionMethods.unsubscribeDOME);
        }
        _patchMetainfo(e) {
          const t = (0, y.deepCopy)(e);
          return (
            (t.configFlags.supportNativeReversePosition =
              !this.config.supportMultiposition || this.config.supportNativeReversePosition),
            (t.configFlags.supportClosePosition = !0),
            (t.configFlags.supportPLUpdate = !0),
            t
          );
        }
        _addSubscription(e, t, i) {
          this._pendingSubscriptions.push({ brokerMethodName: e, symbol: t, listener: i });
          const r = this._lastFireResult[t];
          if (
            (void 0 !== r && void 0 !== r[e] && null !== r[e] && i(t, r[e].data),
            !this._removePendingSubscription({ brokerMethodName: e, symbol: t, listener: i }))
          )
            return;
          void 0 === this._subscriptions[t] &&
            (this._subscriptions[t] = {
              Realtime: [],
              PL: [],
              Equity: [],
              DOME: [],
              TradePL: [],
              PipValue: [],
              MarginAvailable: [],
              CryptoBalance: [],
            });
          const s = (0, l.ensure)(this._subscriptions[t]),
            o = s[e].length > 0;
          if ((s[e].push(i), !o && (s[e].length > 0 || 'CryptoBalance' === e))) {
            const i = 'subscribe' + e;
            this._brokerConnection[i] && this._brokerConnection[i](t);
          }
        }
        _removePendingSubscription(e) {
          const t = this._pendingSubscriptions.findIndex(
            (t) =>
              t.symbol === e.symbol &&
              t.brokerMethodName === e.brokerMethodName &&
              t.listener === e.listener
          );
          return -1 !== t && (this._pendingSubscriptions.splice(t, 1), !0);
        }
        _removeSubscription(e, t, i) {
          if (this._removePendingSubscription({ brokerMethodName: e, symbol: t, listener: i }))
            return;
          if (void 0 === this._subscriptions[t]) return;
          const r = (0, l.ensure)(this._subscriptions[t]),
            s = r[e].indexOf(i);
          if ((s > -1 && r[e].splice(s, 1), 0 === r[e].length)) {
            const i = 'unsubscribe' + e;
            this._brokerConnection[i] && this._brokerConnection[i](t);
          }
        }
        _positions() {
          return this._positionsCache ? this._positionsCache.getObjects() : Promise.resolve([]);
        }
        _trades() {
          return this._tradesCache ? this._tradesCache.getObjects() : Promise.resolve([]);
        }
        _orders() {
          return this._ordersCache.getObjects();
        }
        _makeSureBrokerIsConnected() {
          (0, l.assert)(1 === this.connectionStatus(), 'Broker is not connected');
        }
        _placeReversePositionOrder(e) {
          const t = w(2 * e.qty, e);
          return this.placeOrder(t);
        }
        async _closePosition(e, t) {
          const i = (0, l.ensureDefined)(await this.positionById(e));
          if (0 === i.qty) {
            const e = (0, r.t)('The position you are trying to close has been already closed.');
            throw (this._host.showNotification(S, e, 0), new Error(e));
          }
          if (void 0 === t || t <= Math.abs(i.qty)) {
            const r = w(null != t ? t : Math.abs(i.qty), i);
            return this.config.supportClosePosition && this._brokerConnection.closePosition
              ? void (await this.processErrors(
                  this._brokerConnection.closePosition(e, t),
                  !0,
                  S,
                  () => (0, l.ensureNotNull)(this._tradingStat).trackOrderPlaced(r)
                ))
              : void (await this.processErrors(this._brokerConnection.placeOrder(r), !0, S, () =>
                  (0, l.ensureNotNull)(this._tradingStat).trackOrderPlaced(r)
                ));
          }
          {
            const e = (0, r.t)('The position you are trying to close has been changed.');
            throw (this._host.showNotification(S, e, 0), new Error(e));
          }
        }
        async _reversePosition(e) {
          const t = (0, l.ensureDefined)(await this.positionById(e));
          if (0 === t.qty) {
            const e = (0, r.t)('The position you are trying to reverse no longer exists.');
            throw (this._host.showNotification(P, e, 0), new Error(e));
          }
          this.config.supportNativeReversePosition && this._brokerConnection.reversePosition
            ? await this.processErrors(this._brokerConnection.reversePosition(e), !0, P)
            : await this.processErrors(this._placeReversePositionOrder(t), !0, P, () =>
                (0, l.ensureNotNull)(this._tradingStat).trackOrderPlaced()
              );
        }
        async _waitForOrderModification(e) {
          const t = await this.orderById(e.id);
          return (
            !!B(e, (0, l.ensureDefined)(t)) ||
            new Promise((t) => {
              const i = () => this.orderUpdate.unsubscribe(this, r),
                r = (r) => {
                  (e.id === r.id || B(e, r)) && (t(!0), i(), clearTimeout(s));
                };
              this.orderUpdate.subscribe(this, r);
              const s = setTimeout(() => {
                t(!1),
                  this._brokerLogger.logError(
                    'Failed to modify order: timeout waiting for new order'
                  ),
                  i();
              }, 3e4);
            })
          );
        }
      }
      var E = i(93302),
        O = i(69671),
        D = i.n(O),
        L = i(19160),
        I = i.n(L),
        A = i(67400),
        N = i(6766),
        M = i(29699),
        V = i(51379),
        x = i(98658),
        R = i(83969),
        F = i(68836),
        q = i(90513),
        U = i(31488),
        W = i(28535),
        Q = i(25032);
      class j {
        constructor(e, t, i, r) {
          (this._lastPL = 0),
            (this._isActive = !1),
            (this._realtimeUpdate = (e, t) => {
              (this._realtimeData = t), this._updatePL();
            }),
            (this._symbol = e.symbol),
            (this._adapter = i),
            (this._onPlUpdate = t),
            (this._side = e.side),
            (this._qty = e.qty),
            (this._avgPrice = e.avgPrice),
            (this._instrumentInfo = r),
            this.positionUpdate(e);
        }
        positionUpdate(e) {
          (this._avgPrice = e.avgPrice),
            (this._qty = e.qty),
            (this._side = e.side),
            this._updatePL();
        }
        lastPL() {
          return this._lastPL;
        }
        start() {
          this._isActive ||
            (this._adapter.subscribeRealtime(this._symbol, this._realtimeUpdate),
            (this._isActive = !0));
        }
        stop() {
          this._isActive &&
            (this._adapter.unsubscribeRealtime(this._symbol, this._realtimeUpdate),
            (this._isActive = !1));
        }
        _updatePL() {
          var e;
          if (
            !this._realtimeData ||
            void 0 === this._realtimeData.bid ||
            void 0 === this._realtimeData.ask
          )
            return;
          const t = Number(
            new E.Big(1 === this._side ? this._realtimeData.bid : this._realtimeData.ask)
              .minus(Math.abs(this._avgPrice))
              .mul(1 === this._side ? 1 : -1)
              .mul(this._qty)
              .mul(null !== (e = this._instrumentInfo.lotSize) && void 0 !== e ? e : 1)
              .div(this._instrumentInfo.pipSize)
              .mul(this._instrumentInfo.pipValue)
          );
          (this._lastPL = t), this._onPlUpdate(t);
        }
      }
      class H {
        constructor(e, t, i) {
          var r;
          (this._setDefaultDropdownActionsBound = this._setDefaultDropdownActions.bind(this)),
            (this._trading = e),
            (this._metainfo = t),
            (this._setDefaultDropdownActionsBound = this._setDefaultDropdownActions.bind(this)),
            (this._defaultDropdownActions = !0),
            (this._credentialsStorage = i),
            this._setDefaultDropdownActions(),
            null !== this._trading &&
              (null === (r = this.sellBuyButtonsVisibility()) ||
                void 0 === r ||
                r.subscribe(this._setDefaultDropdownActionsBound),
              (0, l.ensureNotNull)(this.orderPanelVisibility()).subscribe(
                this._setDefaultDropdownActionsBound
              ),
              (0, l.ensureNotNull)(this.domPanelVisibility()).subscribe(
                this._setDefaultDropdownActionsBound
              ));
        }
        createPLEmitter(e, t, i) {
          return new j(e, t, this._adapter, i);
        }
        getLogger() {
          return (0, u.getLogger)('Trading.' + this._metainfo.id);
        }
        translate(e) {
          return e;
        }
        setBrokerConnectionAdapter(e) {
          this._adapter = e;
        }
        patchConfig(e) {
          this._adapter.patchConfig(e);
        }
        showOrderDialog(e, t) {
          return (0, l.ensureNotNull)(this._trading)
            .orderViewController()
            .showOrderView(this._adapter, e, t);
        }
        showPositionBracketsDialog(e, t, i) {
          return (0, l.ensureNotNull)(this._trading)
            .orderViewController()
            .showPositionView(this._adapter, e, t, i);
        }
        showCancelOrderDialog(e, t) {
          return U.ConfirmOrderCancelDialog.get()
            .open(e)
            .then((e) => {
              e && this._adapter.processErrors(t(), !0, (0, r.t)('Failed to cancel order'));
            });
        }
        showCancelMultipleOrdersDialog(e, t, i, s) {
          return U.ConfirmOrderCancelDialog.get()
            .multiple(e, t, i)
            .then((e) => {
              e &&
                this._adapter.processErrors(
                  s(),
                  !0,
                  (0, r.t)('Failed to cancel one or more orders')
                );
            });
        }
        showCancelBracketsDialog(e, t) {
          return W.ConfirmBracketsCancelDialog.get()
            .open(e)
            .then((e) => {
              e && this._adapter.processErrors(t(), !0, (0, r.t)('Failed to cancel brackets'));
            });
        }
        showCancelMultipleBracketsDialog(e, t) {
          return W.ConfirmBracketsCancelDialog.get()
            .multiple(e)
            .then((e) => {
              e && this._adapter.processErrors(t(), !0, (0, r.t)('Failed to cancel brackets'));
            });
        }
        showReversePositionDialog(e, t) {
          return (0, Q.reversePositionDialog)(
            e,
            (0, l.ensureNotNull)(this._trading).showErrorNotification,
            t
          );
        }
        showMessageDialog(e, t, i = !1) {
          i ? (0, R.showWarning)({ title: e, html: t }) : (0, R.showWarning)({ title: e, text: t });
        }
        showConfirmDialog(e, t, i, r, s) {
          return (0, F.showConfirmDialog)({
            title: e,
            content: t,
            mainButtonText: i,
            cancelButtonText: r,
            showDisableConfirmationsCheckbox: s,
          });
        }
        showSimpleConfirmDialog(e, t, i, r, s) {
          return (0, q.showSimpleConfirmDialog)({
            title: e,
            text: Array.isArray(t) ? t.join(' ') : t,
            mainButtonText: i,
            mainButtonIntent: 'primary',
            cancelButtonText: r,
            showDisableConfirmationsCheckbox: s,
          });
        }
        setDurations(e) {
          this._adapter.setDurations(e);
        }
        setSymbolSearchId(e) {
          this._adapter.setSymbolSearchId(e);
        }
        activateBottomWidget() {
          return null !== this._trading
            ? this._trading.toggleTradingWidget()
            : Promise.reject('Activate bottom widget failed: trading is not defined');
        }
        trackEvent(e, t, i) {
          null !== this._trading && this._trading.trackEvent(e, t, i);
        }
        defaultFormatter(e, t) {
          return (0, V.getQuoteSessionInstance)('simple').formatter(e, t);
        }
        numericFormatter(e) {
          return Promise.resolve(new N.NumericFormatter(e));
        }
        quantityFormatter(e) {
          return Promise.resolve(new M.QuantityFormatter(e));
        }
        selectBroker() {
          null !== this._trading && this._trading.selectBroker(null);
        }
        showTradingProperties() {
          null !== this._trading && this._trading.showTradingProperties();
        }
        async getSymbolType(e) {
          return (await z(e)).type;
        }
        async getSymbolMinTick(e) {
          const t = await z(e);
          return (0, E.Big)(t.minmov).div(t.pricescale).toNumber();
        }
        silentOrdersPlacement() {
          return (0, l.ensureNotNull)(this._trading).noConfirmEnabled;
        }
        sellBuyButtonsVisibility() {
          return null !== this._trading && s.enabled('buy_sell_buttons')
            ? this._trading.showSellBuyButtons
            : null;
        }
        domPanelVisibility() {
          return null !== this._trading ? this._trading.domPanelVisibility() : null;
        }
        orderPanelVisibility() {
          return null !== this._trading ? this._trading.orderPanelVisibility() : null;
        }
        showPricesWithZeroVolume() {
          return (0, l.ensureNotNull)(this._trading).showPricesWith().zeroVolume;
        }
        showNotification(e, t, i = 0) {
          null !== this._trading &&
            (0 === i
              ? this._trading.showErrorNotification(e, t)
              : this._trading.showSuccessNotification(e, t));
        }
        connectionStatusUpdate(e, t) {
          this._adapter.connectionStatusUpdate.fire(e, t),
            1 === e && this._setDefaultDropdownActions();
        }
        orderUpdate(e) {
          this._adapter.onOrderUpdate(e);
        }
        positionUpdate(e, t) {
          this._adapter.onPositionUpdate(e, t);
        }
        tradeUpdate(e, t) {
          this._adapter.onTradeUpdate(e, t);
        }
        orderPartialUpdate(e, t) {
          this._adapter.onOrderPartialUpdate(e, t);
        }
        positionPartialUpdate(e, t) {
          this._adapter.onPositionPartialUpdate(e, t);
        }
        tradePartialUpdate(e, t) {
          this._adapter.onTradePartialUpdate(e, t);
        }
        executionUpdate(e) {
          this._adapter.executionUpdate.fire(e);
        }
        currentAccountUpdate() {
          this._adapter.onCurrentAccountChanged();
        }
        realtimeUpdate(e, t) {
          this._adapter.fireSubscription('Realtime', e, t);
        }
        domeUpdate(e, t) {
          this._adapter.fireSubscription('DOME', e, t);
        }
        pipValueUpdate(e, t) {
          this._adapter.fireSubscription('PipValue', e, t);
        }
        plUpdate(e, t) {
          this._adapter.fireSubscription('PL', e, t);
        }
        tradePLUpdate(e, t) {
          this._adapter.fireSubscription('TradePL', e, t);
        }
        equityUpdate(e) {
          this._adapter.fireSubscription('Equity', 'Equity', e);
        }
        marginAvailableUpdate(e) {
          this._adapter.fireSubscription('MarginAvailable', 'MarginAvailable', e);
        }
        cryptoBalanceUpdate(e, t) {
          this._adapter.fireSubscription('CryptoBalance', e, t);
        }
        setButtonDropdownActions(e) {
          var t;
          null !== this._trading &&
            this._defaultDropdownActions &&
            ((this._defaultDropdownActions = !1),
            null === (t = this.sellBuyButtonsVisibility()) ||
              void 0 === t ||
              t.unsubscribe(this._setDefaultDropdownActionsBound),
            (0, l.ensureNotNull)(this.orderPanelVisibility()).unsubscribe(
              this._setDefaultDropdownActionsBound
            ),
            (0, l.ensureNotNull)(this.domPanelVisibility()).unsubscribe(
              this._setDefaultDropdownActionsBound
            )),
            (this._buttonDropdownActions = e);
        }
        buttonDropdownActions() {
          return this._buttonDropdownActions;
        }
        defaultContextMenuActions(...e) {
          return null !== this._trading
            ? this._trading.defaultContextMenuActions(...e)
            : Promise.resolve([]);
        }
        defaultDropdownMenuActions(e) {
          return null !== this._trading ? this._trading.defaultDropdownMenuActions(e) : [];
        }
        get factory() {
          return {
            createDelegate: () => new (a())(),
            createWatchedValue: (e) => new (I())(e),
            createPriceFormatter: (e, t, i, r) => new x.PriceFormatter(e, t, i, r),
          };
        }
        get settings() {
          return {
            save: (e, t) => D().setJSON(`${this._metainfo.id}.${e}`, t),
            load: (e, t) => D().getJSON(`${this._metainfo.id}.${e}`, t),
            clear: (e, t) => D().remove(`${this._metainfo.id}.${e}`, t),
          };
        }
        get credentialsStorage() {
          return this._credentialsStorage;
        }
        createMapper(e) {
          let t = null;
          return (t = { tvToBroker: (e) => e, brokerToTv: (e) => e }), t;
        }
        createMapperSync(e, t) {
          let i = null;
          {
            const e = Promise.resolve();
            i = { ready: () => e, tvToBroker: (e) => e, brokerToTv: (e) => e };
          }
          return i;
        }
        convertTimezone(e, t, i) {
          const r = A.get_timezone(t),
            s = A.get_timezone(i),
            o = A.cal_to_utc(r, e);
          return A.utc_to_cal(s, o);
        }
        language() {
          return window.language;
        }
        getUserSpecificHash() {
          return window.user.private_channel || '';
        }
        activateFXCMCFD() {
          D().setValue('fxcm_cfd', !0);
        }
        async isFractional(e) {
          return (await z(e)).fractional;
        }
        _setDefaultDropdownActions() {
          null !== this._trading &&
            this._defaultDropdownActions &&
            (this._buttonDropdownActions = this.defaultDropdownMenuActions());
        }
      }
      function z(e) {
        return (0, V.getQuoteSessionInstance)('full').snapshot(e);
      }
      var $ = i(98162);
      const G = (0, u.getLogger)('Trading.CredentialsEncryptedWebStorage');
      class K {
        constructor(e, t) {
          (this._key = 'credentials-storage'),
            (this._transientStorage = {}),
            (this._handleStorageStateChange = (e) => {
              const { key: t, storageArea: i } = e;
              i === this._persistentStorage && this._key === t && this._decryptStorage();
            }),
            (this._persistentStorage = e),
            (this._cryptographer = t),
            (this._decryptStorage = (0, $.sequentialize)(this._decryptStorage)),
            window.addEventListener('storage', this._handleStorageStateChange);
        }
        async setItem(e, t) {
          this._transientStorage[e] = JSON.stringify(t);
          try {
            await this._encryptStorageAndSave();
          } catch (t) {
            G.logError(`Unable to save credentials using key ${e}: ${t.message}`);
          }
        }
        getItem(e, t = null) {
          this._persistentStorage.removeItem(e);
          const i = this._transientStorage[e];
          if (void 0 === i) return t;
          if ('string' != typeof i) return i;
          try {
            return JSON.parse(i);
          } catch (e) {
            return i;
          }
        }
        async removeItem(e) {
          delete this._transientStorage[e], await this._encryptStorageAndSave();
        }
        destroy() {
          window.removeEventListener('storage', this._handleStorageStateChange);
        }
        static async create(e, t) {
          const i = new K(e, t);
          return await i._decryptStorage(), i;
        }
        async _decryptStorage() {
          const e = this._persistentStorage.getItem(this._key);
          if (null === e) return void (this._transientStorage = {});
          const t = await this._cryptographer.decrypt(e);
          if (null === t)
            return (
              this._persistentStorage.removeItem(this._key), void (this._transientStorage = {})
            );
          try {
            this._transientStorage = JSON.parse(t);
          } catch (e) {
            this._transientStorage = {};
          }
        }
        async _encryptStorageAndSave() {
          const e = await this._cryptographer.encrypt(JSON.stringify(this._transientStorage));
          this._persistentStorage.setItem(this._key, e);
        }
      }
      class X {
        constructor(e, t, i, r) {
          (this._brokerId = e.toLowerCase()),
            (this._rememberCredentials = t),
            (this._localStorageProvider = i),
            (this._sessionStorageProvider = r);
        }
        async save(e, t) {
          this._currentStorageProvider().setItem(`${this._brokerId}.${e}`, t);
        }
        load(e, t) {
          return this._currentStorageProvider().getItem(`${this._brokerId}.${e}`, t);
        }
        async clear(e) {
          this._currentStorageProvider().removeItem(`${this._brokerId}.${e}`);
        }
        destroy() {
          this._localStorageProvider.destroy(), this._sessionStorageProvider.destroy();
        }
        static async create(e, t, i) {
          const r = await K.create(localStorage, i),
            s = await K.create(sessionStorage, i);
          return new X(e, t, r, s);
        }
        _currentStorageProvider() {
          return this._rememberCredentials.value()
            ? this._localStorageProvider
            : this._sessionStorageProvider;
        }
      }
      var Z = i(92862),
        J = i(2005);
      class Y {
        constructor(e) {
          this._settingsKey = `trading.${e}.rememberCredentials`;
        }
        value() {
          return D().getBool(this._settingsKey, !0);
        }
        setValue(e) {
          D().setValue(this._settingsKey, e);
        }
      }
      const ee = [];
      function te(e, t) {
        (e.configFlags = (0, J.applyDefaultsToConfigFlags)(e.configFlags)),
          ee.push({ metainfo: e, createBrokerFunction: t });
      }
      function ie() {
        return ee.map((e) => e.metainfo);
      }
      let re;
      async function se(e, t, i, r) {
        const s = ee.filter((e) => e.metainfo.id === t)[0];
        let o;
        if (null === i) {
          const i = await X.create(t, new Y(t), re),
            r = (s) => {
              (null == s ? void 0 : s.metainfo().id) !== t &&
                (null == e || e.onBrokerChange.unsubscribe(null, r), i.destroy());
            };
          null == e || e.onBrokerChange.subscribe(null, r), (o = i);
        } else o = i;
        const n = new H(e, s.metainfo, o);
        try {
          const t = await s.createBrokerFunction(n),
            i = new Z.BrokerRealtimeAdapter(s.metainfo.id);
          return new T(s.metainfo, t, n, i, e && e.tradingStat(), r);
        } catch (e) {
          return Promise.reject(`${t} broker creation error: ${(0, m.getLoggerMessage)(e)}`);
        }
      }
      re = { encrypt: async (e) => e, decrypt: async (e) => e };
    },
    2005: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { defaultConfigFlags: () => r, applyDefaultsToConfigFlags: () => s });
      const r = {
        isSuspended: !1,
        supportDemoLiveSwitcher: !0,
        supportModifyOrderPrice: !0,
        supportEditAmount: !0,
        supportModifyBrackets: !0,
        supportMarketBrackets: !0,
        supportMarketOrders: !0,
        supportStopOrders: !0,
        supportLimitOrders: !0,
        supportStopLimitOrders: !1,
        supportPositions: !0,
        supportDOM: !0,
        supportModifyTrailingStop: !0,
        supportAddBracketsToExistingOrder: !0,
        supportVerifyLiveAccount: !0,
        supportReversePosition: !0,
        showNotificationsLog: !0,
        supportPLUpdate: !0,
        supportTwoFactorAuthorization: !1,
        supportDisplayBrokerNameInSymbolSearch: !0,
        supportCurrencyInOrderPreview: !0,
        supportRiskControls: !0,
      };
      function s(e) {
        return Object.assign({}, r, e);
      }
    },
    91109: (e, t, i) => {
      'use strict';
      i.d(t, { DialogVisibility: () => o });
      var r = i(86515),
        s = i(53741);
      class o {
        constructor() {
          (this._value$ = new r.BehaviorSubject({ isVisible: !1 })),
            (this.value$ = this._value$
              .asObservable()
              .pipe(
                (0, s.distinctUntilChanged)(
                  (e, t) => e.isVisible === t.isVisible && e.isFullScreen === t.isFullScreen
                )
              ));
        }
        getValue() {
          return this._value$.getValue();
        }
        setValue(e) {
          this._value$.next(e);
        }
      }
    },
    50561: (e, t, i) => {
      'use strict';
      i.d(t, { DisabledConfirmations: () => d });
      var r = i(69671),
        s = i.n(r),
        o = i(53363),
        n = i.n(o),
        a = i(35849);
      const l = /[0-9]+([\.,][0-9]+)*([\.,][0-9]+)?|\.[0-9]+/gm,
        c = /[A-Z]+/gm,
        u = a.settingsKeys.DISABLED_CONFIRMATIONS;
      class d {
        add(e) {
          const t = this._getAll(),
            i = this._makeMessageHash(e);
          t.add(i), s().setJSON(u, Array.from(t));
        }
        has(e) {
          const t = this._getAll(),
            i = this._makeMessageHash(e);
          return t.has(i);
        }
        clear() {
          s().remove(u);
        }
        _getAll() {
          return new Set(s().getJSON(u));
        }
        _makeMessageHash(e) {
          const t = e.replace(l, '').replace(c, '');
          return (i = n()(t)), btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
          var i;
        }
      }
    },
    69749: (e, t, i) => {
      'use strict';
      function r(e) {
        return 'string' == typeof e ? e : Array.isArray(e) ? e.join('') : void 0;
      }
      i.d(t, { makeConfirmation: () => r });
    },
    68836: (e, t, i) => {
      'use strict';
      i.d(t, { showConfirmDialog: () => n });
      var r = i(74245),
        s = i(69749),
        o = i(50561);
      async function n(e) {
        const {
            title: t,
            content: n,
            mainButtonText: a,
            cancelButtonText: l,
            showDisableConfirmationsCheckbox: c,
            onOpen: u,
            onClose: d,
          } = e,
          h = new o.DisabledConfirmations(),
          p = (0, s.makeConfirmation)(n);
        if (c && void 0 !== p && h.has(p)) return !0;
        const { ConfirmDialogRenderer: _ } = await Promise.all([
            i.e(8193),
            i.e(706),
            i.e(4078),
            i.e(83),
            i.e(2273),
            i.e(9602),
            i.e(4882),
            i.e(1274),
            i.e(5514),
            i.e(268),
            i.e(4956),
            i.e(6848),
            i.e(3566),
          ]).then(i.bind(i, 85111)),
          g = new _(h),
          b = {
            title: t,
            message: n,
            closeButton: null != l ? l : (0, r.t)('No'),
            confirmButton: null != a ? a : (0, r.t)('Yes'),
            showDisableConfirmationsCheckbox: c,
            onOpen: u,
            onClose: d,
          };
        return (await g.open(b)).status;
      }
    },
    51453: (e, t, i) => {
      'use strict';
      i.d(t, { showNonTradableSymbolDialog: () => c });
      var r = i(74245),
        s = i(38606),
        o = i(69878),
        n = i(12781),
        a = i(84514),
        l = i(14567);
      async function c(e) {
        var t;
        const { isTradableResult: c, activeBroker: u } = e,
          d = await (0, n.prepareTradableSolution)(c, u),
          [{ showSimpleDialog: h }, { SimpleConfirmDialog: p }] = await Promise.all([
            Promise.all([
              i.e(8193),
              i.e(706),
              i.e(4078),
              i.e(83),
              i.e(2273),
              i.e(9602),
              i.e(4882),
              i.e(1274),
              i.e(5514),
              i.e(268),
              i.e(4956),
              i.e(6848),
              i.e(3566),
            ]).then(i.bind(i, 97572)),
            Promise.all([
              i.e(8193),
              i.e(706),
              i.e(4078),
              i.e(83),
              i.e(2273),
              i.e(9602),
              i.e(4882),
              i.e(1274),
              i.e(5514),
              i.e(268),
              i.e(4956),
              i.e(6848),
              i.e(3566),
            ]).then(i.bind(i, 32944)),
          ]);
        h(
          {
            text: null !== (t = c.reason) && void 0 !== t ? t : (0, r.t)('Symbol cannot be traded'),
            title: (0, r.t)('Non-tradable symbol'),
            titleIcon: o.watchedTheme.value() === s.StdTheme.Light ? a : l,
            mainButtonText: void 0 !== d ? d.title : (0, r.t)('Ok'),
            mainButtonIntent: 'primary',
            showCancelButton: !1,
            onConfirm: (e) => {
              void 0 !== d && d.apply(), e.dialogClose();
            },
          },
          p
        );
      }
    },
    90513: (e, t, i) => {
      'use strict';
      i.d(t, { showSimpleConfirmDialog: () => s });
      var r = i(50561);
      async function s(e) {
        const t = new r.DisabledConfirmations();
        if (e.showDisableConfirmationsCheckbox && t.has(e.text)) return !0;
        const [{ showSimpleDialog: s }, { SimpleConfirmDialog: o }] = await Promise.all([
          Promise.all([
            i.e(8193),
            i.e(706),
            i.e(4078),
            i.e(83),
            i.e(2273),
            i.e(9602),
            i.e(4882),
            i.e(1274),
            i.e(5514),
            i.e(268),
            i.e(4956),
            i.e(6848),
            i.e(3566),
          ]).then(i.bind(i, 97572)),
          Promise.all([
            i.e(8193),
            i.e(706),
            i.e(4078),
            i.e(83),
            i.e(2273),
            i.e(9602),
            i.e(4882),
            i.e(1274),
            i.e(5514),
            i.e(268),
            i.e(4956),
            i.e(6848),
            i.e(3566),
          ]).then(i.bind(i, 32944)),
        ]);
        return new Promise((i) => {
          s(
            {
              ...e,
              disabledConfirmations: t,
              onConfirm: (t) => {
                i(!0), void 0 !== e.onConfirm && e.onConfirm(), t.dialogClose();
              },
              onClose: () => {
                i(!1), void 0 !== e.onClose && e.onClose();
              },
            },
            o
          );
        });
      }
    },
    28535: (e, t, i) => {
      'use strict';
      i.d(t, { ConfirmBracketsCancelDialog: () => o });
      var r = i(74245),
        s = i(90513);
      const o = {
        get() {
          return this;
        },
        open: (e) =>
          (0, s.showSimpleConfirmDialog)({
            title: (0, r.t)('Cancel bracket'),
            text: (0, r.t)('Are you sure you want to cancel {orderId}bracket?').replace(
              '{orderId}',
              '' !== e ? e + ' ' : ''
            ),
            mainButtonIntent: 'primary',
          }),
        multiple: (e) =>
          (0, s.showSimpleConfirmDialog)({
            title: (0, r.t)('Cancel bracket'),
            text: (0, r.t)('Are you sure you want to cancel {orderId}brackets?').replace(
              '{orderId}',
              '' !== e ? e + ' ' : ''
            ),
            mainButtonIntent: 'primary',
          }),
      };
    },
    31488: (e, t, i) => {
      'use strict';
      i.d(t, { ConfirmOrderCancelDialog: () => o });
      i(22190);
      var r = i(74245),
        s = i(90513);
      const o = {
        get() {
          return this;
        },
        open: (e) =>
          (0, s.showSimpleConfirmDialog)({
            title: (0, r.t)('Cancel order'),
            text: (0, r.t)('Are you sure you want to cancel order {orderId}?').replace(
              '{orderId}',
              e
            ),
            mainButtonIntent: 'primary',
          }),
        multiple(e, t, i) {
          let o = e;
          if (void 0 !== t) {
            o = `${o} ${1 === t ? (0, r.t)('BUY') : (0, r.t)('SELL')}`;
          }
          return (0, s.showSimpleConfirmDialog)({
            title: (0, r.t)('Cancel order'),
            text: (0, r.t)('Are you sure you want to cancel {qty} {side} orders?')
              .replace('{qty}', String(i))
              .replace('{side}', o),
            mainButtonIntent: 'primary',
          });
        },
      };
    },
    25032: (e, t, i) => {
      'use strict';
      i.d(t, { reversePositionDialog: () => o });
      var r = i(74245),
        s = i(90513);
      async function o(e, t, i, o) {
        if (
          !(await (0, s.showSimpleConfirmDialog)({
            title: (0, r.t)('Reverse {positionId} position?').replace('{positionId}', e),
            text:
              (0, r.t)('Are you sure you want to reverse {positionId} position?').replace(
                '{positionId}',
                e
              ) + (o ? ' ' + (0, r.t)('This will also close all active orders.') : ''),
            mainButtonText: (0, r.t)('Reverse position'),
            mainButtonIntent: 'primary',
            cancelButtonText: (0, r.t)('Cancel'),
            showBackdrop: !0,
          }))
        )
          return !1;
        try {
          return await i();
        } catch (e) {
          return (
            t(
              (0, r.t)('Failed to reverse position'),
              (function (e) {
                let t = '';
                null !== e && 'object' == typeof e && e.message
                  ? (t = e.message)
                  : 'string' == typeof e && (t = e);
                return t;
              })(e)
            ),
            !1
          );
        }
      }
    },
    44521: (e, t, i) => {
      'use strict';
      var r;
      i.d(t, {
        TradingPage: () => r,
        MAX_PANEL_WIDTH: () => s,
        PANEL_WIDTH: () => o,
        PANEL_HEIGHT: () => n,
      }),
        (function (e) {
          (e.DomPanel = 'domPanel'), (e.OrderPanel = 'orderPanel');
        })(r || (r = {}));
      const s = 400,
        o = 315,
        n = 451;
    },
    12781: (e, t, i) => {
      'use strict';
      i.d(t, {
        makeSubjectFromWatchedValue: () => g,
        comparator: () => b,
        shouldShowTotal: () => m,
        displayedLeverage: () => f,
        calculatePipValue: () => y,
        calculateTradeValue: () => v,
        calculateTradeValueByBigPointValue: () => w,
        calculateUsedMargin: () => k,
        calculatedMarginRatio: () => S,
        formatInfoValue: () => P,
        formatRiskReward: () => B,
        alignQuotesToMinTick: () => T,
        isMintickMultiple: () => E,
        getAsk: () => O,
        getBid: () => D,
        getLast: () => L,
        getQuotePrice: () => I,
        isNoQuotes: () => A,
        checkPriceByOrderType: () => N,
        prepareCalculatorEventText: () => M,
        i18nOrderResultText: () => V,
        createCustomFieldModels: () => x,
        prepareTradableSolution: () => R,
      });
      var r = i(74245),
        s = i(79442),
        o = i(86515),
        n = i(93302),
        a = i(19160),
        l = i.n(a),
        c = i(90592),
        u = i(6867),
        d = i(52067),
        h = i(79410),
        p = i(21526),
        _ = i.n(p);
      function g(e) {
        const t = new o.BehaviorSubject(e.value()),
          i = (e) => {
            t.next(e);
          };
        return e.subscribe(i), { subject: t, unsubscribe: () => e.unsubscribe(i) };
      }
      function b(e, t) {
        return (0, c.deepEquals)(e, t)[0];
      }
      function m(e) {
        return void 0 !== e && Boolean(e.showTotal);
      }
      function f(e, t) {
        if (void 0 !== e) return e;
        if (void 0 !== t) {
          const e = Math.round(1 / t);
          return String(e) + ':1';
        }
        return null;
      }
      function y(e, t, i) {
        return null !== e ? (void 0 !== i ? e * i : e) * t : 0;
      }
      function v(e, t, i, r, s) {
        return w(e, t, i / r, s);
      }
      function w(e, t, i, r) {
        return e * t * i * (r || 1);
      }
      function k(e, t) {
        return void 0 !== t ? e * t : 0;
      }
      function S(e, t) {
        const i = 0 !== t ? (100 * e) / t : 0;
        return i > 100 ? 100 : i;
      }
      function P(e) {
        if ('number' == typeof e) {
          const t = (0, u.splitThousands)((e || 0).toFixed(2), ' ');
          return Number.isInteger(e) || e >= 1
            ? t
            : (function (e) {
                if (Number.isInteger(e)) return e + '';
                return e < 1
                  ? (function (e) {
                      const t = (e + '').split('.')[1] || '';
                      let i = t.length;
                      for (let e = 0; e < t.length; e++)
                        if ('0' !== t[e]) {
                          i = e + 1;
                          break;
                        }
                      return e.toFixed(i);
                    })(e)
                  : e.toFixed(2);
              })(e);
        }
        return (0, u.splitThousands)(e, ' ');
      }
      const C = new d.VolumeFormatter(2);
      function B(e, t) {
        return null !== e && null !== t && e / t > 0 ? C.format(e / t) : '';
      }
      function T(e, t) {
        const i = Object.assign({}, e);
        return (
          ['trade', 'ask', 'bid'].forEach((e) => {
            const r = i[e];
            void 0 !== r &&
              (i[e] = (function (e, t) {
                return t > 1 ? e : (0, n.Big)(e).div(t).round(0, 1).mul(t).toNumber();
              })(r, t));
          }),
          i
        );
      }
      function E(e, t) {
        if (0 === t) return !1;
        const i = Math.round(1e12 * t) / 1e12,
          r = new n.Big(e),
          s = new n.Big(i);
        return r.mod(s).eq(0);
      }
      function O(e) {
        return (0, c.isNumber)(e.ask) ? e.ask : (0, c.isNumber)(e.trade) ? e.trade : 0;
      }
      function D(e) {
        return (0, c.isNumber)(e.bid) ? e.bid : (0, c.isNumber)(e.trade) ? e.trade : 0;
      }
      function L(e) {
        return (0, c.isNumber)(e.trade) ? e.trade : 0;
      }
      function I(e, t) {
        return 1 === e ? O(t) : D(t);
      }
      function A(e) {
        return null === e || void 0 === e.ask || void 0 === e.bid;
      }
      function N(e, t, i) {
        return 4 === e ? null === t || null === i : 3 === e ? null === i : null === t;
      }
      function M(e, t) {
        switch (t) {
          case h.ButtonType.IncDec:
            return e < 0 ? '-' : '+';
          case h.ButtonType.PlusValue:
            return String(e);
          case h.ButtonType.Clear:
            return 'Clear';
          default:
            return 'Default';
        }
      }
      const V = {
        buy: {
          market: (e, t) =>
            (0, r.t)('Buy {qty} {symbol}{whitespaceNoBreak}MKT').format({
              qty: e,
              symbol: t,
              whitespaceNoBreak: ' ',
            }),
          stop: (e, t, i) =>
            (0, r.t)(
              'Buy {qty} {symbol}{whitespaceNoBreak}@ {stopPrice}{whitespaceNoBreak}STP'
            ).format({ qty: e, symbol: t, stopPrice: i, whitespaceNoBreak: ' ' }),
          limit: (e, t, i) =>
            (0, r.t)(
              'Buy {qty} {symbol}{whitespaceNoBreak}@ {limitPrice}{whitespaceNoBreak}LMT'
            ).format({ qty: e, symbol: t, limitPrice: i, whitespaceNoBreak: ' ' }),
          stopLimit: (e, t, i, s) =>
            (0, r.t)(
              'Buy {qty} {symbol}{whitespaceNoBreak}@ {stopPrice}{whitespaceNoBreak}STP {limitPrice}{whitespaceNoBreak}LMT'
            ).format({ qty: e, symbol: t, stopPrice: i, limitPrice: s, whitespaceNoBreak: ' ' }),
        },
        sell: {
          market: (e, t) =>
            (0, r.t)('Sell {qty} {symbol}{whitespaceNoBreak}MKT').format({
              qty: e,
              symbol: t,
              whitespaceNoBreak: ' ',
            }),
          stop: (e, t, i) =>
            (0, r.t)(
              'Sell {qty} {symbol}{whitespaceNoBreak}@ {stopPrice}{whitespaceNoBreak}STP'
            ).format({ qty: e, symbol: t, stopPrice: i, whitespaceNoBreak: ' ' }),
          limit: (e, t, i) =>
            (0, r.t)(
              'Sell {qty} {symbol}{whitespaceNoBreak}@ {limitPrice}{whitespaceNoBreak}LMT'
            ).format({ qty: e, symbol: t, limitPrice: i, whitespaceNoBreak: ' ' }),
          stopLimit: (e, t, i, s) =>
            (0, r.t)(
              'Sell {qty} {symbol}{whitespaceNoBreak}@ {stopPrice}{whitespaceNoBreak}STP {limitPrice}{whitespaceNoBreak}LMT'
            ).format({ qty: e, symbol: t, stopPrice: i, limitPrice: s, whitespaceNoBreak: ' ' }),
        },
      };
      function x(e, t, i, r, s) {
        const o = [];
        return (
          void 0 !== r &&
            Array.isArray(r.customFields) &&
            r.customFields.forEach((r) => {
              if (
                ('TextWithCheckBox' === r.inputType &&
                  o.push({
                    id: r.id,
                    type: r.inputType,
                    inputType: r.customInfo.asterix ? 'password' : 'text',
                    placeholder: r.placeHolder || '',
                    title: r.title || '',
                    checkboxTitle: r.customInfo.checkboxTitle,
                    text: new (l())(r.value.text),
                    checked: new (l())(r.value.checked),
                    status: t,
                    onControlFocused: new (_())(),
                  }),
                'Checkbox' === r.inputType)
              ) {
                let i;
                const n = null == s ? void 0 : s[r.id];
                try {
                  i = JSON.parse(n);
                } catch (e) {
                  i = n;
                }
                o.push({
                  id: r.id,
                  type: r.inputType,
                  title: r.title,
                  help: r.help,
                  checked: new (l())(null != i ? i : r.value),
                  status: t,
                  onControlFocused: new (_())(),
                  disabled: e && !r.supportModify,
                  saveToSettings: r.saveToSettings,
                });
              }
              if ('ComboBox' === r.inputType && Array.isArray(r.items)) {
                let t = r.items[0];
                if (s && r.id in s) {
                  const e = s[r.id],
                    i = r.items.find((t) => t.value === e);
                  void 0 !== i && (t = i);
                } else r.forceUserEnterInitialValue && !e && (t = void 0);
                o.push({
                  id: r.id,
                  type: r.inputType,
                  title: r.title,
                  items: r.preventModify && e && t ? [t] : r.items,
                  selectedItem: new (l())(null == t ? void 0 : t.value),
                  onControlFocused: new (_())(),
                  saveToSettings: r.saveToSettings,
                  isRequired: Boolean(r.forceUserEnterInitialValue),
                  alwaysShowAttachedErrors: i,
                });
              }
            }),
          o
        );
      }
      async function R(e, t) {
        if (void 0 !== e.solutions) {
          let i, o;
          if ('changeSymbol' in e.solutions) {
            const t = e.solutions.changeSymbol;
            (i = (0, r.t)('Switch the symbol')), (o = () => s.linking.symbol.setValue(t));
          } else {
            const s = e.solutions.changeAccount,
              n = (await t.accountsMetainfo()).filter((e) => e.id === s)[0].name;
            (i = (0, r.t)('Switch to {accountName}').replace('{accountName}', n)),
              (o = () => t.setCurrentAccount(s));
          }
          return { title: i, apply: o };
        }
      }
    },
    72989: (e, t, i) => {
      'use strict';
      i.d(t, { qtyErrors: () => n, checkQtyError: () => a });
      var r = i(74245),
        s = i(93302),
        o = i.n(s);
      const n = {
        min: (0, r.t)('Specified amount is less than the instrument minimum of {min}.'),
        max: (0, r.t)('Specified amount is more than the instrument maximum of {max}.'),
        step: (0, r.t)(
          'Specified amount is not a multiple of the instrument quantity step of {step}.'
        ),
        balance: (0, r.t)('Your value exceeds the acceptable balance level.'),
      };
      function a(e, t, i = !1) {
        if (null === t) return { res: !0 };
        const r = e.step,
          s = e.min,
          a = e.max;
        if (t < s) return { res: !0, msg: n.min.format({ min: s.toString() }) };
        if (t > a) return { res: !0, msg: n.max.format({ max: a.toString() }) };
        const l = new (o())(t).minus(s).mod(r);
        return i && !l.eq(0)
          ? { res: !0, msg: n.step.format({ step: r.toString() }) }
          : { res: !1 };
      }
    },
    35849: (e, t, i) => {
      'use strict';
      i.d(t, { settingsKeys: () => r });
      const r = {
        ACTIVE_BROKER: 'trading.active_broker',
        PROPERTIES: 'trading.chart.proterty',
        PROFIT_VIEW_TYPE: 'trading.dom.profitViewType',
        ORDER_WIDGET_MODE: 'trading.orderWidgetMode.',
        DOM_DURATION: 'trading.domDuration.',
        TRADING_PANEL_OPENED: 'trading.tradingPanelOpened',
        TRADING_PANEL_ACTIVE_PAGE: 'trading.tradingPanelActivePage',
        PANEL_WIDTH: 'trading.panelWidth',
        PANEL_HEIGHT: 'trading.panelHeight',
        ORDER_PANEL_SETTINGS: 'trading.orderPanelSettings',
        FAVORITE_BROKERS: 'trading.panelFavorite',
        SHOW_TOOLTIP_FOR_SELECT_BROKER: 'trading.showTooltipForSelectBroker',
        LOGIN_COUNTER: 'trading.brokerLogInCounter',
        LOGOUT_COUNTER: 'trading.brokerLogOutCounter',
        DISABLED_CONFIRMATIONS: 'trading.disabledConfirmations',
        MOVE_TRADED_SOURCE_WITH_SHIFT: 'trading.chart.moveWithShift',
      };
    },
    91261: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { Trading: () => pi, showSellBuyButtonsDefault: () => hi });
      var r = i(74245),
        s = i(79442),
        o = i(69671),
        n = i(40181),
        a = i(16282),
        l = i(84213),
        c = i(87878),
        u = i(1545),
        d = i(57617),
        h = i(11954);
      var p = i(29127),
        _ = i(37560),
        g = i(87915),
        b = i(40160),
        m = i(14071),
        f = i(37229),
        y = i(98162),
        v = i(7424),
        w = i(14032),
        k = i(60028),
        S = i(19160),
        P = i.n(S),
        C = i(21526),
        B = i.n(C),
        T = i(42363);
      var E = i(83969),
        O = i(91109),
        D = i(59784),
        L = i(35849),
        I = i(92862),
        A = i(10407);
      const N = (0, m.getLogger)('Trading.RealtimeProvider');
      class M {
        constructor(e) {
          (this._results = {}), (this._getter = e);
        }
        get(e) {
          return this._results[e] || (this._results[e] = this._getter(e)), this._results[e];
        }
      }
      class V {
        constructor(e, t, i, r, s) {
          (this._stopped = !1),
            (this._subscribed = !1),
            (this._provider = null),
            (this._formatters = null),
            (this._symbol = e),
            (this._type = s),
            (this._callback = t),
            (this._providersCache = i),
            (this._formattersCache = r),
            'Realtime' === this._type
              ? (this._handler = (e, i) => {
                  this._stopped || t(e, i, this._formatters);
                })
              : (this._handler = (e, i) => {
                  this._stopped || t(e, i);
                }),
            this._start().catch((e) => {});
        }
        symbol() {
          return this._symbol;
        }
        type() {
          return this._type;
        }
        callback() {
          return this._callback;
        }
        destroy() {
          this._ensureNotStopped(),
            this._subscribed &&
              ('Realtime' === this._type
                ? (0, a.ensureNotNull)(this._provider).unsubscribeRealtime(
                    this._symbol,
                    this._handler
                  )
                : (0, a.ensureNotNull)(this._provider).unsubscribeDOME(
                    this._symbol,
                    this._handler
                  )),
            (this._stopped = !0);
        }
        async _start() {
          (this._provider = await this._providersCache.get(this._symbol)),
            this._ensureNotStopped(),
            (this._formatters = await this._formattersCache.get(this._symbol)),
            (0, a.ensure)(this._formatters),
            this._ensureNotStopped(),
            (this._subscribed = !0),
            'Realtime' === this._type
              ? this._provider.subscribeRealtime(this._symbol, this._handler)
              : this._provider.subscribeDOME(this._symbol, this._handler);
        }
        _ensureNotStopped() {
          (0, a.assert)(!this._stopped, 'Should not be stopped');
        }
      }
      class x {
        constructor(e, t, i) {
          (this.onStatusChanged = new (B())()),
            (this._subscriptions = []),
            (this._currentBroker = null),
            (this._activeBrokerGetter = e),
            t.subscribe(this, this._connectionStatusChanged),
            i.subscribe(this, this._connectionStatusChanged),
            (this._tvProvider = new I.BrokerRealtimeAdapter('RealtimeProvider')),
            this._connectionStatusChanged();
        }
        isTradable(e) {
          return this._tradableCache.get(e);
        }
        subscribeRealtime(e, t) {
          this._subscriptions.some(
            (i) => i.symbol() === e && i.callback() === t && 'Realtime' === i.type()
          ) ||
            this._subscriptions.push(
              new V(e, t, this._providersCache, this._formattersCache, 'Realtime')
            );
        }
        unsubscribeRealtime(e, t) {
          const i = this._subscriptions.findIndex(
            (i) => i.symbol() === e && i.callback() === t && 'Realtime' === i.type()
          );
          if (-1 === i) return;
          this._subscriptions[i].destroy(), this._subscriptions.splice(i, 1);
        }
        subscribeDOME(e, t) {
          this._subscriptions.some(
            (i) => i.symbol() === e && i.callback() === t && 'Dome' === i.type()
          ) ||
            this._subscriptions.push(
              new V(e, t, this._providersCache, this._formattersCache, 'Dome')
            );
        }
        unsubscribeDOME(e, t) {
          const i = this._subscriptions.findIndex(
            (i) => i.symbol() === e && i.callback() === t && 'Dome' === i.type()
          );
          if (-1 === i) return void N.logWarn('Subscription not found');
          this._subscriptions[i].destroy(), this._subscriptions.splice(i, 1);
        }
        formatter(e) {
          return this._formattersCache.get(e).then((e) => e.formatter);
        }
        spreadFormatter(e) {
          return this._formattersCache.get(e).then((e) => e.spreadFormatter);
        }
        quantityFormatter(e) {
          return this._formattersCache.get(e).then((e) => e.quantityFormatter);
        }
        symbolInfo(e) {
          if (!e) {
            const e = {
              minTick: NaN,
              qty: { min: NaN, max: NaN, step: NaN },
              pipValue: NaN,
              pipSize: NaN,
              description: 'no symbol',
            };
            return Promise.resolve(e);
          }
          return this._providersCache.get(e).then((t) =>
            t !== this._tvProvider
              ? t
                  .symbolInfo(e)
                  .then((t) => t || this._tvProvider.symbolInfo(e))
                  .catch((t) => this._tvProvider.symbolInfo(e))
              : this._tvProvider.symbolInfo(e)
          );
        }
        quotesSnapshot(e) {
          return this._providersCache.get(e).then((t) => t.quotesSnapshot(e));
        }
        activeBroker() {
          return null !== this._currentBroker && this._currentBroker !== this._tvProvider
            ? this._currentBroker
            : null;
        }
        _isTradable(e) {
          if (null === this._currentBroker || this._currentBroker === this._tvProvider)
            return Promise.resolve({ tradable: !1 });
          try {
            return (0, A.makeTimeLimited)(
              this._currentBroker.isTradable(e),
              6e4,
              'isTradable Promise Timeout'
            ).catch(() => Promise.resolve({ tradable: !1 }));
          } catch (e) {
            return Promise.resolve({ tradable: !1 });
          }
        }
        _haveRealtime(e) {
          return this._tradableCache.get(e) || Promise.resolve(null === this._currentBroker);
        }
        _connectionStatusChanged() {
          const e = this._activeBrokerGetter(),
            t = this._currentBroker,
            i = e && 1 === e.connectionStatus() ? e : null;
          if ((this._createCaches(), t !== i)) {
            const e = this._subscriptions.map((e) => ({
              symbol: e.symbol(),
              callback: e.callback(),
              type: e.type(),
            }));
            this._unsubscribeAll(),
              (this._currentBroker = i),
              this._subscribeAll(e),
              this.onStatusChanged.fire();
          }
        }
        _createCaches() {
          (this._providersCache = new M((e) => this._provider(e))),
            (this._tradableCache = new M((e) => this._isTradable(e))),
            (this._formattersCache = new M((e) =>
              this._providersCache
                .get(e)
                .then((t) =>
                  Promise.all([t.formatter(e, !1), t.spreadFormatter(e), t.quantityFormatter(e)])
                )
                .then(([e, t, i]) => ({ formatter: e, spreadFormatter: t, quantityFormatter: i }))
            ));
        }
        _provider(e) {
          return this._haveRealtime(e).then((e) =>
            e.tradable && this._currentBroker && 1 === this._currentBroker.connectionStatus()
              ? this._currentBroker
              : this._tvProvider
          );
        }
        _unsubscribeAll() {
          this._subscriptions.forEach((e) => {
            e.destroy();
          }),
            (this._subscriptions = []);
        }
        _subscribeAll(e) {
          e.forEach((e) => {
            this._subscriptions.push(
              new V(e.symbol, e.callback, this._providersCache, this._formattersCache, e.type)
            );
          });
        }
      }
      var R = i(15510);
      class F extends R.BrokerService {
        constructor(e) {
          super(e),
            (this._userId = (window.user.id || '').toString()),
            window.loginStateChange &&
              window.loginStateChange.subscribe(this, this._onLoginStateChange);
        }
        trackOrderPlaced(e) {
          this._trackOrderEvent('Placed', e);
        }
        startService() {
          (0, a.ensure)(this.activeBroker()).orderUpdate.subscribe(this, this._orderUpdate),
            this._trackTradingBrokerConnnected();
        }
        stopService() {
          (0, a.ensure)(this.activeBroker()).orderUpdate.unsubscribe(this, this._orderUpdate);
        }
        _orderUpdate(e, t) {
          t ||
            (5 === e.status
              ? this._trackOrderEvent('Rejected', e)
              : 2 === e.status
              ? this._trackOrderEvent('Executed', e)
              : 1 === e.status && this._trackOrderEvent('Canceled', e));
        }
        _trackOrderEvent(e, t) {
          const i = this.activeBroker();
          if (t && i) {
            const r = t.id || null;
            i.symbolInfo(t.symbol).then((i) => {
              const s = {
                amount: t.qty * (i.lotSize || 1),
                orderId: r,
                instrumentType: i.type,
                eventName: 'Order ' + e,
                userId: this._userId,
                symbol: t.symbol,
              };
              this._trackTradingOrder(s);
            });
          }
        }
        _trackTradingOrder(e) {
          const t = this.activeBroker();
          if (!t) throw new Error('no active broker');
        }
        _trackTradingBrokerConnnected() {
          const e = this.activeBroker();
          null !== e && e.metainfo().id;
          if (!e) throw new Error('no active broker');
        }
        _onLoginStateChange() {
          this._userId = (window.user.id || '').toString();
        }
      }
      var q = i(42254),
        U = i(68845),
        W = i(47368);
      function Q(e = 'default') {
        switch (e) {
          case 'danger':
            return U.ToastIntent.Danger;
          case 'attention':
            return U.ToastIntent.Warning;
          case 'success':
            return U.ToastIntent.Success;
          default:
            return U.ToastIntent.Default;
        }
      }
      class j {
        constructor(e) {
          this._chartWidgetCollection = e;
        }
        proSymbol() {
          return s.linking.proSymbol.value();
        }
        showTradingProperties() {
          this._chartWidgetCollection.activeChartWidget
            .value()
            .showGeneralChartProperties(T.TabNames.trading);
        }
        async closeAllNotifications() {
          const e = await this._chartWidgetCollection.getToasts();
          null !== e && e.reset();
        }
        async showNotification(e, t, i, r) {
          const s = await this._chartWidgetCollection.getToasts();
          if (null === s) return;
          let o = '';
          'string' == typeof t && (o = t),
            s.showSimpleToast({
              text: o,
              time: r,
              title: e,
              intent: Q(i),
              priority: W.ToastPriority.Low,
            });
        }
        showMaintenance(e) {
          0;
        }
        showBrokerSideMaintenance(e) {
          0;
        }
        trackEvent(e, t, i) {
          (0, q.trackEvent)(e, t, i);
        }
        showReplayConfirmationDialog() {
          return Promise.resolve();
        }
        reconnectChartApi(e) {
          0;
        }
        setBroker(e) {
          const t =
            (null == e ? void 0 : e.metainfo().backendBrokerName) ||
            (null == e ? void 0 : e.metainfo().id.toLowerCase()) ||
            '';
          this._chartWidgetCollection.setBroker(t);
        }
      }
      var H = i(33375),
        z = (i(22190), i(68836));
      async function $(e) {
        const { showErrorNotification: t, handler: i, message: s, onOpen: o, onClose: n } = e;
        if (
          !(await (0, z.showConfirmDialog)({
            title: (0, r.t)('Close position'),
            content: s,
            mainButtonText: (0, r.t)('Close position'),
            cancelButtonText: (0, r.t)('Cancel'),
            onOpen: o,
            onClose: n,
          }))
        )
          return !1;
        try {
          return await i();
        } catch (e) {
          return (
            t(
              (0, r.t)('Failed to close the position'),
              (function (e) {
                let t = '';
                null !== e && 'object' == typeof e && e.message
                  ? (t = e.message)
                  : 'string' == typeof e && (t = e);
                return t;
              })(e)
            ),
            !1
          );
        }
      }
      var G = i(25032),
        K = i(31488),
        X = i(28535);
      async function Z(e, t, s) {
        const o = await (async function (e) {
          const { PartiallyClosingDialogRenderer: t } = await i.e(3168).then(i.bind(i, 34080)),
            r = new t();
          return new Promise((t) => {
            r.open({ ...e, dialogActionHandler: t });
          });
        })(e);
        if (!o.status) return !1;
        try {
          return await t(o.qty);
        } catch (e) {
          return (
            s(
              (0, r.t)('Failed to close the position'),
              (function (e) {
                let t = '';
                null !== e && 'object' == typeof e && e.message
                  ? (t = e.message)
                  : 'string' == typeof e && (t = e);
                return t;
              })(e)
            ),
            !1
          );
        }
      }
      var J = i(67294),
        Y = i(6867);
      function ee(e) {
        const { symbol: t, side: i, qty: s, price: o, id: n, closePositionCancelsOrders: a } = e,
          l = (0, Y.splitThousands)(s, ' '),
          c = (0, Y.splitThousands)(o, ' ');
        return J.createElement(
          J.Fragment,
          null,
          J.createElement(
            'div',
            null,
            void 0 !== n ? (0, r.t)('Position ID {id}').replace('{id}', n) : (0, r.t)('Position')
          ),
          J.createElement('div', null, J.createElement('b', null, t)),
          J.createElement('div', null, J.createElement('b', null, `${i} ${l} @ ${c}`)),
          J.createElement(
            'div',
            null,
            a && ' ' + (0, r.t)('This will also close all active orders')
          )
        );
      }
      i(51453);
      var te = i(200);
      const ie = (0, m.getLogger)('Trading.BrokerCommandsUI'),
        re = { symbol: 1, qty: 1, side: 1, type: 1, seenPrice: 1 };
      class se {
        constructor(e, t, i, r, s, o) {
          (this._closePositionDialogVisibility = new O.DialogVisibility()),
            (this._isClosePositionDialogLoading = !1),
            (this._isCloseTradeDialogLoading = !1),
            (this._onClosePositionDialogOpen = (e) => {
              this._closePositionDialogVisibility.setValue({ isVisible: !0, isFullScreen: e });
            }),
            (this._onClosePositionDialogClose = () => {
              this._closePositionDialogVisibility.setValue({ isVisible: !1 });
            }),
            (this._activeBroker = e),
            (this._guiAccessor = t),
            (this._orderViewController = r),
            (this._showErrorNotification = s),
            (this._noConfirmEnabled = i),
            (this._trackEvent = o),
            (this.closePositionDialogVisibility = this._closePositionDialogVisibility.value$);
        }
        async placeOrder(e, t, i) {
          this._makeSureBrokerIsConnected();
          const r = t && this._noConfirmEnabled.value(),
            s =
              this._guiAccessor && r
                ? this._guiAccessor.showReplayConfirmationDialog()
                : Promise.resolve(!1);
          try {
            await s;
          } catch (e) {
            Promise.resolve(!1);
          }
          const o = await this._activeBroker.isTradable(e.symbol);
          if (
            r &&
            o.tradable &&
            (function (e) {
              for (const t in re) if (!(t in e)) return !1;
              return !0;
            })(e)
          ) {
            if (void 0 === e.duration) {
              const t = await this._activeBroker.symbolInfo(e.symbol),
                i = (0, te.makeInitialOrderDuration)(e.type, this._getDurationMetaInfoList(t));
              null !== i && (e.duration = i);
            }
            return this._activeBroker.placeOrder(e);
          }
          {
            const t = this._activeBroker.metainfo();
            if (t.customUI && void 0 !== t.customUI.showOrderDialog)
              return t.customUI.showOrderDialog(e);
          }
          return this._orderViewController().then((t) =>
            this._activeBroker
              ? t.showOrderView(this._activeBroker, e, void 0, i)
              : Promise.reject('Broker connection adapter is null')
          );
        }
        async modifyOrder(e, t, i, s) {
          if ((this._makeSureBrokerIsConnected(), e.flags && e.flags.trailingStop))
            return (
              ie.logError('Attempt to modify trailing stop loss order' + e.id),
              this._showErrorNotification(
                (0, r.t)('Cannot Modify Order'),
                (0, r.t)('Trailing Stops cannot be modified')
              ),
              Promise.resolve(!1)
            );
          const o = await this._activeBroker.symbolInfo(e.symbol);
          (e.limitPrice =
            void 0 !== o.limitPriceStep && void 0 !== e.limitPrice
              ? (0, b.roundToStepByPriceTypeAndSide)(e.limitPrice, o.limitPriceStep, 1, e.side)
              : e.limitPrice),
            (e.stopPrice =
              void 0 !== o.stopPriceStep && void 0 !== e.stopPrice
                ? (0, b.roundToStepByPriceTypeAndSide)(e.stopPrice, o.stopPriceStep, 2, e.side)
                : e.stopPrice);
          const n = e.limitPrice,
            a = e.stopPrice,
            l = e.stopType,
            c = t && this._noConfirmEnabled.value();
          let u = i || (1 === e.type ? 1 : 2);
          if (e.parentId && !v.enabled('always_pass_called_order_to_modify')) {
            let t,
              r = this._activeBroker.orderById.bind(this._activeBroker);
            2 === e.parentType && (r = this._activeBroker.positionById.bind(this._activeBroker)),
              3 === e.parentType && (r = this._activeBroker.tradeById.bind(this._activeBroker));
            try {
              t = await r(e.parentId);
            } catch (e) {
              t = void 0;
            }
            if (t) {
              u = i || (1 === e.type ? 3 : 4);
              const r = { takeProfit: n };
              if (
                (l === H.StopType.TrailingStop
                  ? (r.trailingStopPips = e.trailingStopPips)
                  : (r.stopLoss = a),
                c &&
                  ((r.takeProfit = r.takeProfit || t.takeProfit),
                  (r.stopLoss = r.stopLoss || t.stopLoss),
                  (r.trailingStopPips = r.trailingStopPips || t.trailingStopPips)),
                3 === e.parentType)
              )
                return c
                  ? this._activeBroker.editTradeBrackets(t.id, r)
                  : this._showTradeDialog(t, r, u);
              if (2 === e.parentType && e.qty === Math.abs(t.qty))
                return c
                  ? this._activeBroker.editPositionBrackets(t.id, r)
                  : this._showPositionDialog(t, r, u);
              const s = t;
              (0, g.isOrderActive)(s.status) &&
                ((e = Object.assign({}, s)),
                n && (e.takeProfit = n),
                a &&
                  (l === H.StopType.TrailingStop
                    ? (e.trailingStopPips = r.trailingStopPips || e.trailingStopPips)
                    : (e.stopLoss = a)));
            }
          }
          if (c) return this._activeBroker.modifyOrder(e);
          {
            const t = this._activeBroker.metainfo();
            if (t.customUI && void 0 !== t.customUI.showOrderDialog)
              return t.customUI.showOrderDialog(e, u);
          }
          return this._orderViewController().then((t) =>
            this._activeBroker
              ? t.showOrderView(this._activeBroker, e, u, s)
              : Promise.reject('Broker connection adapter is null')
          );
        }
        async closePosition(e) {
          var t, i;
          if ((this._makeSureBrokerIsConnected(), this._noConfirmEnabled.value()))
            return this._activeBroker.closePosition(e);
          {
            if (this._isClosePositionDialogLoading) return !1;
            const r = await this._obtainPositionClosingData(e);
            if (void 0 === r) return !1;
            const { supportPartialClosePosition: s, position: o, ...n } = r,
              a = this._activeBroker.metainfo();
            if (
              void 0 !==
              (null === (t = a.customUI) || void 0 === t ? void 0 : t.showClosePositionDialog)
            )
              return null === (i = a.customUI) || void 0 === i
                ? void 0
                : i.showClosePositionDialog(o);
            if (s) {
              const t = (t) => (
                t !== r.position.qty
                  ? this._trackEvent('', 'Close Position Dialog', 'partial')
                  : this._trackEvent('', 'Close Position Dialog', 'full'),
                this._activeBroker.closePosition(e, t)
              );
              return Z(
                {
                  ...n,
                  positionOrTrade: o,
                  onOpen: this._onClosePositionDialogOpen,
                  onClose: this._onClosePositionDialogClose,
                },
                t,
                this._showErrorNotification
              );
            }
            {
              const t = () => this._activeBroker.closePosition(e);
              return $({
                showErrorNotification: this._showErrorNotification,
                handler: t,
                message: r.message,
                onOpen: this._onClosePositionDialogOpen,
                onClose: this._onClosePositionDialogClose,
              });
            }
          }
        }
        async closeTrade(e) {
          if (
            (this._makeSureBrokerIsConnected(),
            (0, a.assert)(
              !!this._activeBroker.config.supportTrades,
              'Broker doesn`t support trades'
            ),
            this._noConfirmEnabled.value())
          )
            return this._activeBroker.closeTrade(e);
          {
            if (this._isCloseTradeDialogLoading) return !1;
            const t = await this._obtainTradeClosingData(e);
            if (void 0 === t) return !1;
            const { supportPartialCloseTrade: i, trade: r, ...s } = t;
            if (i) {
              const t = async (t) => (
                t !== r.qty
                  ? this._trackEvent('', 'Close Trade Dialog', 'partial')
                  : this._trackEvent('', 'Close Trade Dialog', 'full'),
                this._activeBroker.closeTrade(e, t)
              );
              return Z(
                {
                  ...s,
                  positionOrTrade: r,
                  onOpen: this._onClosePositionDialogOpen,
                  onClose: this._onClosePositionDialogClose,
                },
                t,
                this._showErrorNotification
              );
            }
            return $({
              showErrorNotification: this._showErrorNotification,
              handler: () => this._activeBroker.closeTrade(e),
              message: t.message,
              onOpen: this._onClosePositionDialogOpen,
              onClose: this._onClosePositionDialogClose,
            });
          }
        }
        editPositionBrackets(e, t, i, r) {
          return (
            this._makeSureBrokerIsConnected(),
            (0, a.assert)(
              !!this._activeBroker.config.supportPositionBrackets,
              'Broker doesn`t support brackets on positions'
            ),
            r && this._noConfirmEnabled.value()
              ? this._activeBroker.editPositionBrackets(e, null != t ? t : {})
              : this._activeBroker
                  .positionById(e)
                  .then((e) =>
                    this._activeBroker
                      ? this._showPositionDialog((0, a.ensureDefined)(e), t, i)
                      : Promise.reject('Broker connection adapter is null')
                  )
          );
        }
        editTradeBrackets(e, t, i, r) {
          return r && this._noConfirmEnabled.value()
            ? this._activeBroker.editTradeBrackets(e, null != t ? t : {})
            : this._activeBroker
                .tradeById(e)
                .then((e) =>
                  this._activeBroker
                    ? this._showTradeDialog((0, a.ensureDefined)(e), t, i)
                    : Promise.reject('Broker connection adapter is null')
                );
        }
        reversePosition(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._activeBroker.metainfo().configFlags.supportMultiposition &&
            !this._activeBroker.config.supportNativeReversePosition
              ? Promise.reject('Cannot reverse position on multiposition acount')
              : this._noConfirmEnabled.value()
              ? this._activeBroker.reversePosition(e)
              : this._activeBroker.positionById(e).then((t) => {
                  if (!this._activeBroker)
                    return Promise.reject('Broker connection adapter is null');
                  const i = this._activeBroker.reversePosition.bind(this._activeBroker, e);
                  return (0, G.reversePositionDialog)(
                    e,
                    this._showErrorNotification,
                    i,
                    this._activeBroker.config.closePositionCancelsOrders
                  );
                })
          );
        }
        async cancelOrder(e) {
          var t, i;
          this._makeSureBrokerIsConnected();
          if (this._noConfirmEnabled.value()) return this._activeBroker.cancelOrder(e);
          {
            const r = await this._activeBroker.orderById(e),
              s = this._activeBroker.cancelOrder.bind(this._activeBroker, e);
            if (r) {
              const e = this._activeBroker.metainfo();
              if (
                void 0 !==
                (null === (t = e.customUI) || void 0 === t ? void 0 : t.showCancelOrderDialog)
              )
                return null === (i = e.customUI) || void 0 === i
                  ? void 0
                  : i.showCancelOrderDialog(r);
              if (r.parentId) {
                const t = (await this._activeBroker.orders()).filter(
                  (e) => e.refNumber === r.refNumber
                );
                return e.configFlags.supportCancellingBothBracketsOnly && t.length > 1
                  ? this._showCancelMultipleBracketsDialog(r.parentId, s)
                  : this._showCancelBracketsDialog(r.id, s);
              }
              return this._showCancelOrderDialog(r.id, s);
            }
            return Promise.reject('Failed to find order');
          }
        }
        cancelOrders(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this._activeBroker.orders().then((i) => {
              if (!this._activeBroker) return Promise.reject('Broker connection adapter is null');
              const r = i.filter(
                (i) =>
                  i.symbol === e &&
                  (!t || i.side === t) &&
                  (function (e) {
                    return 4 === e.status || 3 === e.status || 6 === e.status;
                  })(i)
              );
              if (!r.length) return Promise.resolve(!1);
              if (1 === r.length) return this.cancelOrder(r[0].id);
              const s = r.map((e) => e.id);
              if (this._noConfirmEnabled.value()) return this._activeBroker.cancelOrders(e, t, s);
              {
                const i = this._activeBroker.cancelOrders.bind(this._activeBroker);
                return this._showCancelMultipleOrdersDialog(e, t, s, i);
              }
            })
          );
        }
        _makeSureBrokerIsConnected() {
          (0, a.assert)(1 === this._activeBroker.connectionStatus(), 'Broker is not connected');
        }
        async _showPositionDialog(e, t = {}, i) {
          const s = await this._activeBroker.isTradable(e.symbol);
          if (!s.tradable) {
            const t =
              void 0 !== s.reason
                ? s.reason
                : (0, b.makeNonTradableSymbolText)(e.symbol, this._activeBroker.metainfo().title);
            return (
              this._showErrorNotification((0, r.t)('Cannot protect position'), t),
              Promise.resolve(!1)
            );
          }
          {
            const r = this._activeBroker.metainfo();
            if (r.customUI && void 0 !== r.customUI.showPositionDialog)
              return r.customUI.showPositionDialog(
                e,
                { stopLoss: t.stopLoss || e.stopLoss, takeProfit: t.takeProfit || e.takeProfit },
                i
              );
          }
          return this._orderViewController().then((r) =>
            this._activeBroker
              ? r.showPositionView(
                  this._activeBroker,
                  e,
                  {
                    stopLoss: t.stopLoss,
                    takeProfit: t.takeProfit,
                    trailingStopPips: t.trailingStopPips,
                  },
                  i || (e.limitPrice && 3) || (e.stopPrice && 4)
                )
              : Promise.reject('Broker connection adapter is null')
          );
        }
        _showTradeDialog(e, t = {}, i) {
          {
            const r = this._activeBroker.metainfo();
            if (r.customUI && void 0 !== r.customUI.showPositionDialog)
              return r.customUI.showPositionDialog(
                e,
                { stopLoss: t.stopLoss || e.stopLoss, takeProfit: t.takeProfit || e.takeProfit },
                i
              );
          }
          return this._orderViewController().then((r) =>
            this._activeBroker
              ? r.showTradeView(
                  this._activeBroker,
                  e,
                  {
                    stopLoss: t.stopLoss,
                    takeProfit: t.takeProfit,
                    trailingStopPips: t.trailingStopPips,
                  },
                  i || (e.limitPrice && 3) || (e.stopPrice && 4)
                )
              : Promise.reject('Broker connection adapter is null')
          );
        }
        _isMaintenance() {
          return isFeatureEnabled(
            (0, g.makeMaintananceFeatureToggleName)(this._activeBroker.metainfo().id)
          );
        }
        _isBrokerSideMaintenance() {
          return isFeatureEnabled(
            (0, g.makeBrokerSideMaintananceFeatureToggleName)(this._activeBroker.metainfo().id)
          );
        }
        _showCancelOrderDialog(e, t) {
          return K.ConfirmOrderCancelDialog.get()
            .open(e)
            .then((i) => (i ? t(e) : Promise.resolve(!1)));
        }
        _showCancelMultipleOrdersDialog(e, t, i, r) {
          const s = i.length;
          return K.ConfirmOrderCancelDialog.get()
            .multiple(e, t, s)
            .then((s) => (s ? r(e, t, i) : Promise.resolve(!1)));
        }
        async _showCancelBracketsDialog(e, t) {
          return X.ConfirmBracketsCancelDialog.get()
            .open(e)
            .then((i) => (i ? t(e) : Promise.resolve(!1)));
        }
        _showCancelMultipleBracketsDialog(e, t) {
          return X.ConfirmBracketsCancelDialog.get()
            .multiple(e)
            .then((i) => (i ? t(e) : Promise.resolve(!1)));
        }
        async _obtainPositionClosingData(e) {
          try {
            this._isClosePositionDialogLoading = !0;
            const t = (0, a.ensureDefined)(await this._activeBroker.positionById(e)),
              {
                supportLots: i,
                qtyStep: s,
                uiQtyStep: o,
                minQty: n,
                qtyFormatter: l,
                priceFormatter: c,
              } = await this._obtainPositionOrTradeClosingCommonData(t),
              u = this._activeBroker.metainfo().configFlags.supportPartialClosePosition,
              d = ee({
                symbol: t.symbol,
                side: 1 === t.side ? (0, r.t)('Long') : (0, r.t)('Short'),
                qty: l.format(t.qty),
                price: c.format(t.avgPrice),
                closePositionCancelsOrders: this._activeBroker.config.closePositionCancelsOrders,
              });
            return (
              (this._isClosePositionDialogLoading = !1),
              {
                position: t,
                supportLots: i,
                qtyStep: s,
                uiQtyStep: o,
                minQty: n,
                supportPartialClosePosition: u,
                qtyFormatter: l,
                message: d,
              }
            );
          } catch (e) {
            return void (this._isClosePositionDialogLoading = !1);
          }
        }
        async _obtainTradeClosingData(e) {
          try {
            this._isCloseTradeDialogLoading = !0;
            const t = (0, a.ensureDefined)(await this._activeBroker.tradeById(e)),
              {
                supportLots: i,
                qtyStep: s,
                uiQtyStep: o,
                minQty: n,
                qtyFormatter: l,
                priceFormatter: c,
              } = await this._obtainPositionOrTradeClosingCommonData(t),
              u = this._activeBroker.metainfo().configFlags.supportPartialCloseTrade,
              d = ee({
                symbol: t.symbol,
                side: 1 === t.side ? (0, r.t)('Long') : (0, r.t)('Short'),
                qty: l.format(t.qty),
                price: c.format(t.price),
                id: e,
                closePositionCancelsOrders: this._activeBroker.config.closePositionCancelsOrders,
              });
            return (
              (this._isCloseTradeDialogLoading = !1),
              {
                trade: t,
                supportLots: i,
                qtyStep: s,
                uiQtyStep: o,
                minQty: n,
                supportPartialCloseTrade: u,
                qtyFormatter: l,
                message: d,
              }
            );
          } catch (e) {
            return void (this._isCloseTradeDialogLoading = !1);
          }
        }
        async _obtainPositionOrTradeClosingCommonData(e) {
          const t = await this._activeBroker.symbolInfo(e.symbol);
          return {
            supportLots: void 0 !== t.lotSize,
            qtyStep: t.qty.step,
            uiQtyStep: t.qty.uiStep,
            minQty: t.qty.min,
            qtyFormatter: await this._activeBroker.quantityFormatter(e.symbol),
            priceFormatter: await this._activeBroker.formatter(e.symbol, !1),
          };
        }
        _getDurationMetaInfoList(e) {
          var t;
          const i = e.allowedDurations,
            r = null !== (t = this._activeBroker.metainfo().durations) && void 0 !== t ? t : [];
          return 0 === r.length || void 0 === i ? r : r.filter(({ value: e }) => i.includes(e));
        }
      }
      class oe {
        constructor(e, t, i, r) {
          (this._domePanel = null),
            (this._resizerBridge = e),
            (this._trading = i),
            (this._qtySuggester = r),
            (this._close = () => {
              this.unmount(), t();
            });
        }
        mount() {
          return this._getDomPanel().then((e) => {
            e.setVisibility(!0);
          });
        }
        unmount() {
          this._getDomPanel().then((e) => {
            e.setVisibility(!1);
          });
        }
        async _getDomPanel() {
          if (null !== this._domePanel) return this._domePanel;
          const { DomePanel: e } = await Promise.all([
              i.e(7610),
              i.e(9448),
              i.e(8193),
              i.e(3894),
              i.e(3996),
              i.e(7936),
              i.e(706),
              i.e(4078),
              i.e(83),
              i.e(9843),
              i.e(9305),
              i.e(2),
              i.e(2778),
              i.e(6637),
              i.e(2321),
              i.e(3972),
              i.e(4084),
              i.e(7422),
              i.e(8986),
              i.e(7775),
              i.e(7987),
              i.e(5514),
              i.e(9253),
              i.e(268),
              i.e(3668),
              i.e(7467),
              i.e(1891),
              i.e(1436),
              i.e(7019),
              i.e(5075),
              i.e(6684),
              i.e(5566),
              i.e(7636),
            ]).then(i.bind(i, 70883)),
            t = (this._domePanel = new e(this._trading, this._resizerBridge, this._qtySuggester));
          return t.setCloseHandler(this._close), t;
        }
      }
      class ne {
        mount() {
          return Promise.resolve();
        }
        unmount() {}
      }
      var ae = i(44521),
        le = i(10100);
      const ce = v.enabled('show_order_panel_on_start');
      class ue {
        constructor(e) {
          (this.isOpened = new (P())(!1)),
            (this.isVisible = new (P())(!1)),
            (this.activePage = new (P())(ce ? ae.TradingPage.OrderPanel : ae.TradingPage.DomPanel)),
            (this.isLoading = new (P())(!1)),
            (this._pages = {}),
            (this._width = ae.PANEL_WIDTH),
            (this._onLayoutResizeHandleMousedown = (e) => {
              if (e.defaultPrevented || !e.cancelable) return;
              e.preventDefault();
              const t = Math.max(this._resizerBridge.width.value(), 0);
              let i;
              i = 'touches' in e ? e.touches[0].clientX : e.clientX;
              const r = (e) => {
                  let r;
                  e.preventDefault(), (r = 'touches' in e ? e.touches[0].clientX : e.clientX);
                  let s = t - (r - i);
                  s < ae.PANEL_WIDTH
                    ? (s = ae.PANEL_WIDTH)
                    : s > ae.MAX_PANEL_WIDTH && (s = ae.MAX_PANEL_WIDTH),
                    this._requestWidth(s);
                },
                s = () => {
                  document.removeEventListener('mousemove', r),
                    document.removeEventListener('touchmove', r),
                    document.removeEventListener('mouseup', s),
                    document.removeEventListener('touchend', s),
                    o.setValue(L.settingsKeys.PANEL_WIDTH, this._width);
                };
              document.addEventListener('mousemove', r),
                document.addEventListener('touchmove', r, { passive: !1 }),
                document.addEventListener('mouseup', s),
                document.addEventListener('touchend', s, { passive: !1 });
            }),
            (this._resizerBridge = e),
            (this._rootContainer = this._resizerBridge.container.value()),
            (this.container = document.createElement('div')),
            this.container.classList.add(le['trading-panel-content'], 'trading-panel-content'),
            this._rootContainer.appendChild(this.container),
            this._addSpinner(),
            this._addResizeHandler(),
            this._subscribeVisibility(),
            this.isLoading.subscribe(this._setLoading.bind(this)),
            (this._rootContainer.style.overflow = this.isOpened.value() ? '' : 'hidden');
        }
        addPage(e, t) {
          this._pages[e] = t;
        }
        isPageOpened(e) {
          return this.isOpened.value() && this.activePage.value() === e;
        }
        setPage(e) {
          this.isOpened.value() &&
            this.activePage.value() !== e &&
            this._pages[this.activePage.value()] &&
            this._pages[this.activePage.value()].unmount(),
            this.activePage.setValue(e),
            o.setValue(L.settingsKeys.TRADING_PANEL_ACTIVE_PAGE, e);
        }
        openPage(e) {
          this.setPage(e), this.open();
        }
        open() {
          this._pages[this.activePage.value()] &&
            (this._togglePanel(!0),
            this.isOpened.setValue(!0),
            this._pages[this.activePage.value()].mount());
        }
        close() {
          this.isOpened.setValue(!1),
            this._pages[this.activePage.value()] && this._pages[this.activePage.value()].unmount(),
            this._togglePanel(!1);
        }
        _setLoading(e) {
          e
            ? this._rootContainer.appendChild(this._spinnerContainer)
            : this._rootContainer.contains(this._spinnerContainer) &&
              this._rootContainer.removeChild(this._spinnerContainer);
        }
        _addSpinner() {
          (this._spinnerContainer = document.createElement('div')),
            this._spinnerContainer.classList.add(le['trading-panel-spinner']),
            i
              .e(7102)
              .then(i.bind(i, 66244))
              .then((e) => {
                e.render(this._spinnerContainer);
              });
        }
        _addResizeHandler() {
          (this._handle = document.createElement('div')),
            this._handle.classList.add(le['trading-panel-handle']),
            this._rootContainer.appendChild(this._handle),
            this._handle.addEventListener('mousedown', this._onLayoutResizeHandleMousedown, {
              passive: !1,
            }),
            this._handle.addEventListener('touchstart', this._onLayoutResizeHandleMousedown, {
              passive: !1,
            }),
            (this._width = o.getInt(L.settingsKeys.PANEL_WIDTH) || ae.PANEL_WIDTH);
        }
        _togglePanel(e) {
          this._resizerBridge.negotiateWidth(e ? this._width : 0),
            this._resizerBridge.negotiateHeight(e ? ae.PANEL_HEIGHT : 0),
            (this._rootContainer.style.overflow = e ? '' : 'hidden'),
            o.setValue(L.settingsKeys.TRADING_PANEL_OPENED, e);
        }
        _updateVisibility() {
          this.isVisible.setValue(
            Boolean(
              this._resizerBridge.visible.value() &&
                this._resizerBridge.availHeight.value() >= ae.PANEL_HEIGHT &&
                this._resizerBridge.availWidth.value() >= ae.PANEL_WIDTH
            )
          );
        }
        _subscribeVisibility() {
          this._updateVisibility(),
            this._resizerBridge.visible.subscribe(() => {
              this._updateVisibility();
            }),
            this._resizerBridge.availHeight.subscribe(() => {
              this._updateVisibility();
            }),
            this._resizerBridge.availWidth.subscribe(() => {
              this._updateVisibility();
            });
        }
        _requestWidth(e) {
          this._canOpen(e) &&
            this._resizerBridge.width.value() !== e &&
            (this._resizerBridge.negotiateWidth([{ min: ae.PANEL_WIDTH, max: e }]),
            (this._width = e));
        }
        _canOpen(e) {
          return e + 46 <= this._resizerBridge.availWidth.value();
        }
      }
      var de = i(99479),
        he = i(85361),
        pe = i(5844),
        _e = i(67669);
      const ge = (0, m.getLogger)('Lib.Sound', { color: '#dea433' }),
        be = 'notification/notification',
        me = [
          {
            title: (0, r.t)('Alarm Clock'),
            path: 'alert/alarm_clock',
            soundForAlerts: !0,
            filePath: _e,
          },
        ];
      const fe = {};
      function ye() {
        ve(me.filter((e) => !!e.soundForAlerts).map((e) => e.path));
      }
      function ve(e) {
        if ((0, pe.isOnMobileAppPage)('any')) return;
        if (!e) return;
        if (!/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent))
          return;
        if (
          (Array.isArray(e) || (e = [e]),
          0 ===
            (e = e.filter((e) => {
              const t = we(e);
              return (
                !(!t || !t.el.load || t._mobilePreloadActive) && ((t._mobilePreloadActive = !0), !0)
              );
            })).length)
        )
          return void ge.logNormal('enableForMobile no sounds passed');
        const t = () => {
            const r = [];
            Array.isArray(e) &&
              e.forEach((e) => {
                const t = we(e);
                t.el.load();
                const i = t.play().catch((e) => {
                  if ('AbortError' !== e.name)
                    throw (
                      (ge.logError(
                        `enableForMobile for "${t.el.src}" preload error: - ${e.message}`
                      ),
                      e)
                    );
                });
                t.el.pause(), r.push(i);
              }),
              Promise.all(r).then(() => {
                ge.logNormal('enableForMobile sounds initialized');
              }),
              i.forEach((e) => {
                document.removeEventListener(e, t, !0);
              });
          },
          i = ['click', 'touchend', 'keydown'];
        i.forEach((e) => {
          document.addEventListener(e, t, !0);
        });
      }
      const we = (e) => {
        if (e in fe) return fe[e];
        ge.logNormal(`requested sound  ${e} not cached, building a new audio element`);
        const t = me.find((t) => t.path === e);
        if (void 0 === t) throw new Error(`Cannot find sound "${e}"`);
        const i = new Audio(t.filePath),
          r = {
            el: i,
            playing: new (P())(!1),
            play: (t = 0) =>
              r.playing.value()
                ? (ge.logNormal('sound already playing'), Promise.reject('already playing'))
                : (r.playing.setValue(!0),
                  new Promise((i, s) => {
                    let o = t > 0;
                    const n = () => {
                      (function (e) {
                        try {
                          ge.logNormal(
                            `"${e.el.src}" triggering html5 play method, readyState - ${e.el.readyState}; muted - ${e.el.muted}; volume - ${e.el.volume}; currentTime - ${e.el.currentTime}`
                          );
                          let t = e.el.play();
                          return t || (t = Promise.resolve()), t;
                        } catch (t) {
                          return (
                            ge.logError(`play method for "${e.el.src}" catch error - ${t.message}`),
                            Promise.reject(t)
                          );
                        }
                      })(r).catch((t) => {
                        ge.logNormal(
                          `stop counting sound "${e}"; as playing due to an error: ${t.message}`
                        ),
                          r.stop(),
                          s(t);
                      });
                    };
                    (r._onEnded = () => {
                      o ? n() : (r.stop(), i());
                    }),
                      r.el.addEventListener('ended', r._onEnded),
                      o &&
                        setTimeout(() => {
                          ge.logNormal(`"${e}" repeat timeout - ${t}s off`), (o = !1);
                        }, 1e3 * t),
                      n();
                  })),
            stop: () => {
              r.el.pause(),
                r.playing.setValue(!1),
                r._onEnded && r.el.removeEventListener('ended', r._onEnded);
            },
          };
        fe[e] = r;
        return (
          ['canplaythrough', 'error'].forEach((t) => {
            i.addEventListener(
              t,
              () => {
                ge.logNormal(`for sound "${e}", event - ${t} is fired`);
              },
              !1
            );
          }),
          ge.logNormal('canPlayType - ' + i.canPlayType('audio/mp3')),
          fe[e]
        );
      };
      ve(me.filter((e) => !!e.common).map((e) => e.path));
      var ke = i(51379);
      const Se = ['qty', 'stopPrice', 'limitPrice', 'status', 'filledQty'];
      function Pe(e, t) {
        return e.enabled.value() && (t.soundName = e.name), t;
      }
      function Ce(e) {
        return 6 === e || 3 === e;
      }
      class Be extends R.BrokerService {
        constructor(e) {
          super(e),
            (this._orders = []),
            (this._playSound = (0, de.default)(this._playSoundImpl, 50)),
            ye();
        }
        startService() {
          const e = (0, a.ensure)(this.activeBroker());
          e.orders().then((e) => (this._orders = (0, he.deepCopy)(e))),
            e.orderUpdate.subscribe(this, this._orderUpdate);
        }
        stopService() {
          (0, a.ensure)(this.activeBroker()).orderUpdate.unsubscribe(this, this._orderUpdate);
        }
        _showNotification(e, t, i) {
          v.enabled('trading_notifications') &&
            ('error' === i
              ? this.trading().showErrorNotification(e, t)
              : this.trading().showSuccessNotification(e, t));
        }
        _formatter(e) {
          return (0, ke.getQuoteSessionInstance)('simple').formatter(e);
        }
        _checkOrderModified(e, t) {
          const i = this.activeBroker(),
            r = (i && i.metainfo().customNotificationFields) || [],
            s = Se.concat(r);
          let o = !1;
          return (
            s.forEach((i) => {
              o ||
                (function e(t, i, r) {
                  if (void 0 === t || void 0 === i) return !1;
                  const s = r.indexOf('.');
                  if (-1 !== s) {
                    const o = r.substring(0, s);
                    return e(t[o], i[o], r.substring(s + 1));
                  }
                  return t[r] === i[r];
                })(e, t, i) ||
                (o = !0);
            }),
            o
          );
        }
        _generateNotificationsInfo(e, t) {
          const i = [],
            s = e.statusMessage ? ': ' + e.statusMessage : '',
            o = (1 === e.side ? (0, r.t)('Bought') : (0, r.t)('Sold')).toUpperCase();
          const n = this.trading().orderExecutedSoundParams;
          return (
            t
              ? (this._checkOrderModified(e, t) &&
                  (1 === e.status
                    ? i.push({ text: (0, r.t)('cancelled'), notificationType: 1 })
                    : 5 === e.status
                    ? i.push({ text: (0, r.t)('rejected') + s, type: 'error', notificationType: 2 })
                    : 2 === e.status
                    ? i.push(Pe(n, { side: o, text: (0, r.t)('executed'), notificationType: 6 }))
                    : t.filledQty !== e.filledQty
                    ? i.push(
                        Pe(n, {
                          side: o,
                          text: (0, r.t)('executed partially'),
                          notificationType: 4,
                        })
                      )
                    : Ce(e.status) && i.push({ text: (0, r.t)('modified'), notificationType: 5 })),
                Object.assign(t, e))
              : Ce(e.status)
              ? (this._orders.push(e),
                i.push({ text: (0, r.t)('placed'), notificationType: 0 }),
                this.trading().trackEvent('', 'Order placed symbol', e.symbol))
              : 1 === e.status
              ? i.push({ text: (0, r.t)('cancelled'), notificationType: 1 })
              : 5 === e.status
              ? (this._orders.push(e),
                i.push({ text: (0, r.t)('rejected') + s, type: 'error', notificationType: 2 }))
              : 2 === e.status &&
                (this._orders.push(e),
                i.push(
                  { text: (0, r.t)('placed'), notificationType: 0 },
                  Pe(n, {
                    side: o,
                    text: (0, r.t)('executed'),
                    emptyOrderType: !0,
                    notificationType: 6,
                  })
                ),
                this.trading().trackEvent('', 'Order placed symbol', e.symbol)),
            i
          );
        }
        _orderUpdate(e, t) {
          const i = (0, he.deepCopy)(e),
            s = this._orders.find((e) => e.id === i.id);
          if (t) return void (void 0 === s && this._orders.push(i));
          if (s && (0, b.isFinalOrderStatus)(s.status)) return;
          const o = this._generateNotificationsInfo(i, s);
          0 !== o.length &&
            this._formatter(i.symbol).then((e) => {
              const t = (0, b.sideToText)(i.side, !0),
                s = i.qty,
                n = void 0 !== i.filledQty && i.filledQty > 0 ? i.filledQty : void 0;
              let a = '',
                l = '';
              switch (i.type) {
                case 2:
                  (a = i.avgPrice ? ' (' + (0, b.orderTypeToText)(i.type) + ')' : ''),
                    (l = i.avgPrice ? e.format(i.avgPrice) : (0, b.orderTypeToText)(i.type));
                  break;
                case 4:
                  (a =
                    ' ' +
                    (0, r.t)('(Limit) after {price} (Stop) crossed').format({
                      price: e.format(i.stopPrice),
                    })),
                    (l = e.format(i.avgPrice || i.limitPrice));
                  break;
                default:
                  (a = ' (' + (0, b.orderTypeToText)(i.type) + ')'),
                    (l = e.format(i.avgPrice || i.limitPrice || i.stopPrice));
              }
              const c =
                void 0 !== i.message
                  ? `${i.message.text.charAt(0).toUpperCase()}${i.message.text.substring(1)}`
                  : '';
              o.forEach(
                ({
                  text: e,
                  type: o,
                  side: u,
                  emptyOrderType: d,
                  soundName: h,
                  notificationType: p,
                }) => {
                  const _ = 4 === p && void 0 !== n ? n : s,
                    g =
                      (0, Y.splitThousands)(Math.abs(_), ' ') +
                      ' ' +
                      (i.brokerSymbol || i.symbol) +
                      ' ' +
                      (0, r.t)('at') +
                      ' ' +
                      l,
                    b = `${(0, r.t)('Order')} ${i.id} ${e}`,
                    m = `${u || t} ${g} ${d ? '' : a}\n${c}`;
                  void 0 !== h && this._playSound(h), this._showNotification(b, m, o);
                }
              );
            });
        }
        _playSoundImpl(e) {
          if (this._playingSound) {
            if (this._playingSound === e) return;
            !(function (e) {
              if ((0, pe.isOnMobileAppPage)('any')) return;
              let t = [];
              e ? t.push(we(e)) : (t = Object.values(fe)),
                t.forEach((e) => {
                  e.stop();
                });
            })(this._playingSound);
          }
          (this._playingSound = e),
            (function (e = be, t) {
              (0, pe.isOnMobileAppPage)('any')
                ? Promise.resolve()
                : (ge.logNormal(`Sound play attempt for "${e}" duration-${t}s;`), we(e).play(t));
            })(e),
            (function (e, t) {
              (0, pe.isOnMobileAppPage)('any') ||
                we(e).playing.subscribe(
                  (e) => {
                    e || t();
                  },
                  { once: !0 }
                );
            })(e, () => {
              delete this._playingSound;
            });
        }
      }
      var Te = i(90513),
        Ee = i(61250);
      const Oe = (0, m.getLogger)('Chart.PointsetManager');
      let De = 0;
      class Le {
        constructor(e, t, i, r, s) {
          (this._currentPointsetId = null),
            (this._onUpdate = new (B())()),
            (this._requestPoints = []),
            (this._gateway = e),
            (this._pointsetSuffix = t),
            (this._isGatewayConnected = this._gateway.isConnected().spawn()),
            this._isGatewayConnected.subscribe(this._updateByGatewayConnection.bind(this)),
            this._addPoints(i, r, s);
        }
        onUpdate() {
          return this._onUpdate;
        }
        destroy() {
          this._isGatewayConnected.value() &&
            null !== this._currentPointsetId &&
            this._gateway.removePointset(this._currentPointsetId),
            (this._requestPoints = []),
            (this._currentPointsetId = null),
            this._isGatewayConnected.destroy();
        }
        _updateByGatewayConnection(e) {
          e || ((this._currentPointsetId = null), (this._requestPoints = []));
        }
        _addPoints(e, t, i) {
          var r, s;
          this._isGatewayConnected.value() &&
            ((0, a.assert)(
              e.length > 0,
              "Can't possible create point set for empty array of time points"
            ),
            (this._requestPoints = e.map((e) => [e.time_t, e.offset])),
            (this._currentPointsetId =
              ((r = this._pointsetSuffix), (s = ++De), `pointset_${r}_${s}`)),
            this._gateway.createPointset(
              this._currentPointsetId,
              'turnaround',
              t,
              (0, Ee.getServerInterval)(i),
              this._requestPoints,
              this._onMessage.bind(this)
            ));
        }
        _onMessage(e) {
          switch (e.method) {
            case 'pointset_error':
              Oe.logNormal(`Pointset error with id ${e.params[0]} turnaround ${e.params[1]}`);
              break;
            case 'data_update': {
              const t = [];
              for (const i of e.params.plots)
                t.push({
                  time_t: this._requestPoints[i.index][0],
                  index: i.value[0],
                  barTime: i.value[1],
                });
              this._onUpdate.fire(t);
              break;
            }
          }
        }
      }
      var Ie = i(1573);
      function Ae(e) {
        const t = e.mainSeries().data().first();
        return null === t ? null : t.value[0];
      }
      async function Ne(e, t, r) {
        const [s, o, n] = await Promise.all([
          i.e(2650).then(i.bind(i, 60655)),
          i.e(2650).then(i.bind(i, 42530)),
          i.e(2650).then(i.bind(i, 69873)),
        ]);
        e.addCustomSource('executions', (e, i) => {
          const a = i.mainSeries(),
            l = a.dataEvents(),
            c = (0, Ie.createPrimitivePropertyFromGetterAndSubscription)(
              i.isInReplay.bind(i),
              i.onInReplayStateChanged()
            ),
            u = (0, Ie.createPrimitivePropertyFromGetterAndSubscription)(
              () => a.isConvertedToOtherCurrency() || a.isConvertedToOtherUnit(),
              a.symbolResolved()
            ),
            d = (0, Ie.combineProperty)(
              (e, t, i) => i && !t,
              c,
              u,
              i.properties().childs().tradingProperties.childs().showExecutions
            ),
            h = (function (e, t, i) {
              return (r) => {
                const s = i.seriesSource().symbolInstanceId(),
                  o = i.interval();
                return null === s ? null : new Le(e, t, r, s, o);
              };
            })(i.chartApi(), 'executions', a),
            p = (0, Ie.createWVFromGetterAndSubscription)(Ae.bind(null, i), l.barReceived()),
            _ = new s.ExecutionsService(
              t,
              l,
              (function (e) {
                return () => {
                  const t = e.symbolInfo();
                  return null !== t ? t.pro_name || t.full_name : e.proSymbol();
                };
              })(a)
            ),
            g = new o.ExecutionsPointsManager(_, h, p);
          return new n.ExecutionsSource(e, i, t, d, r, g);
        });
      }
      var Me = i(90592);
      const Ve = (0, m.getLogger)('Trading.Positions');
      function xe(e) {
        const t = null === e ? 0 : Math.round(100 * e) / 100;
        return t > 0 ? 'positive' : t < 0 ? 'negative' : 'neutral';
      }
      class Re extends R.BrokerService {
        constructor() {
          super(...arguments),
            (this._positions = new Map()),
            (this._positionUpdate = new (B())()),
            (this._positionsRemoved = new (B())()),
            (this._displayMode = 1),
            (this._updatePositionPLHandler = this._updatePositionPL.bind(this));
        }
        destroy() {
          this.stopService();
        }
        positions() {
          return Array.from(this._positions.values());
        }
        find(e) {
          return this._positions.get(e) || null;
        }
        async realIdFromBroker(e) {
          const t = (0, a.ensureNotNull)(this.activeBroker());
          if (1 === this._displayMode) {
            const i = await t.positionById(e);
            if (void 0 !== i) return i.id;
          } else {
            const i = await t.tradeById(e);
            if (void 0 !== i) return i.id;
          }
          return null;
        }
        positionUpdate() {
          return this._positionUpdate;
        }
        positionsRemoved() {
          return this._positionsRemoved;
        }
        isDisplayModeTrades() {
          return 0 === this._displayMode;
        }
        async getCurrency(e) {
          return (await (0, a.ensureNotNull)(this.activeBroker()).getPositionCurrency(e)) || '';
        }
        stopService() {
          this._clearPositions();
          const e = (0, a.ensureNotNull)(this.activeBroker());
          this.isDisplayModeTrades()
            ? e.tradeUpdate.unsubscribeAll(this)
            : e.positionUpdate.unsubscribeAll(this);
        }
        startService() {
          this._clearPositions(),
            (this._displayMode = (function (e) {
              if (null === e) return 1;
              const t = e.metainfo().configFlags;
              return t.supportTrades
                ? t.supportPositionBrackets
                  ? 1
                  : t.supportCloseTrade
                  ? 0
                  : 1
                : 1;
            })(this.activeBroker())),
            this._requestPositions();
        }
        _clearPositions() {
          const e = (0, a.ensureNotNull)(this.activeBroker()),
            t = Array.from(this._positions.keys());
          for (const i of t)
            this.isDisplayModeTrades()
              ? e.unsubscribeTradePL(i, this._updatePositionPLHandler)
              : e.unsubscribePL(i, this._updatePositionPLHandler);
          this._positions.clear(), this._positionsRemoved.fire(t);
        }
        async _requestPositions() {
          const e = this.activeBroker();
          if (!e) return;
          const t = this.isDisplayModeTrades(),
            i = await (t ? e.trades() : e.positions());
          for (const e of i) this._addPosition(e);
          t
            ? e.tradeUpdate.subscribe(this, this._addPosition)
            : e.positionUpdate.subscribe(this, this._addPosition);
        }
        _addPosition(e) {
          const t = e.id,
            i = this._positions.has(t),
            r = (0, a.ensureNotNull)(this.activeBroker());
          Ve.logDebug('Update position. Symbol:' + e.symbol + ' , qty:' + e.qty);
          const s = this.isDisplayModeTrades();
          if (!e.qty)
            return void (
              i &&
              (s
                ? r.unsubscribeTradePL(t, this._updatePositionPLHandler)
                : r.unsubscribePL(t, this._updatePositionPLHandler),
              this._positions.delete(t),
              this._positionsRemoved.fire([t]))
            );
          const o = this._getPositionData(e);
          this._positions.set(t, o),
            this._positionUpdate.fire(o),
            i ||
              (s
                ? r.subscribeTradePL(t, this._updatePositionPLHandler)
                : r.subscribePL(t, this._updatePositionPLHandler));
        }
        _updatePositionPL(e, t) {
          const i = (0, a.ensureDefined)(this._positions.get(e));
          (i.pl = (0, Me.isNumber)(t) ? t : null),
            (i.profitState = xe(t)),
            this._positionUpdate.fire(i);
        }
        _getPositionData(e) {
          const t = (0, a.ensureNotNull)(this.activeBroker()).metainfo().configFlags,
            i = this._positions.get(e.id),
            r = this.isDisplayModeTrades();
          let s = 'neutral';
          const o = e.pl || (i && i.pl) || null;
          return (
            null !== o && (s = xe(o)),
            {
              ...(void 0 !== i ? i : {}),
              ...e,
              pl: o,
              price: Math.abs(r ? e.price : e.avgPrice),
              qtyBySide: Math.abs(e.qty) * (1 === e.side ? 1 : -1),
              profitState: s,
              supportClose: Boolean(
                r ? t.supportCloseTrade && e.canBeClosed : t.supportClosePosition
              ),
              supportReverse: Boolean(!r && t.supportReversePosition),
              supportBrackets: Boolean(r ? t.supportTradeBrackets : t.supportPositionBrackets),
              supportOnlyPairBrackets: Boolean(t.supportOnlyPairPositionBrackets),
            }
          );
        }
      }
      const Fe = (0, m.getLogger)('Trading.OrderSource');
      function qe(e) {
        return 1 === e.type
          ? (0, a.ensureDefined)(e.limitPrice)
          : (0, a.ensureDefined)(e.stopPrice);
      }
      class Ue extends R.BrokerService {
        constructor() {
          super(...arguments),
            (this._activeOrders = new Map()),
            (this._activeOrderUpdate = new (B())()),
            (this._activeOrdersRemoved = new (B())()),
            (this._ordersRejected = new (B())());
        }
        destroy() {
          this.stopService();
        }
        orders() {
          return (0, a.ensureNotNull)(this.activeBroker()).orders();
        }
        find(e) {
          return this._activeOrders.get(e) || null;
        }
        activeOrders() {
          return Array.from(this._activeOrders.values());
        }
        activeOrdersUpdated() {
          return this._activeOrderUpdate;
        }
        activeOrdersRemoved() {
          return this._activeOrdersRemoved;
        }
        orderRejected() {
          return this._ordersRejected;
        }
        stopService() {
          this._clearOrders();
          (0, a.ensureNotNull)(this.activeBroker()).orderUpdate.unsubscribeAll(this);
        }
        startService() {
          this._clearOrders(), this._requestOrders();
        }
        _clearOrders() {
          const e = Array.from(this._activeOrders.keys());
          this._activeOrders.clear(), this._activeOrdersRemoved.fire(e);
        }
        async _requestOrders() {
          const e = this.activeBroker();
          if (!e) return;
          const t = await e.orders();
          for (const e of t) this._addActiveOrder(e);
          e.orderUpdate.unsubscribeAll(this), e.orderUpdate.subscribe(this, this._addActiveOrder);
        }
        _addActiveOrder(e) {
          if (2 === e.type) return;
          const t = e.id,
            i = this._activeOrders.has(t);
          if (6 !== e.status && 3 !== e.status)
            return void (i
              ? (this._activeOrders.delete(t), this._activeOrdersRemoved.fire([t]))
              : 5 === e.status && this._ordersRejected.fire(qe(e)));
          const r = this._getOrderData(e);
          this._activeOrders.set(t, r), this._activeOrderUpdate.fire(r);
        }
        _getOrderData(e) {
          const t = (0, a.ensureNotNull)(this.activeBroker()).metainfo().configFlags,
            i = qe(e);
          return (
            (0, Me.isNumber)(i) || Fe.logError('order price is not defined'),
            (0, Me.merge)((0, Me.clone)(e), {
              price: i,
              considerFilledQty: !0,
              supportModify: (0, g.isModifyOrderSupported)(e, t),
              supportMove: (0, g.isMoveOrderSupported)(e, t),
              supportCancel: !0,
              supportBrackets: Boolean(
                t.supportOrderBrackets &&
                  t.supportModifyBrackets &&
                  t.supportAddBracketsToExistingOrder
              ),
              supportModifyOrderPrice: Boolean(t.supportModifyOrderPrice),
            })
          );
        }
      }
      var We = i(75496),
        Qe = i(55023),
        je = i(98658);
      const He = (0, r.t)('A broker is not connected'),
        ze = (0, r.t)("This symbol can't be traded through this broker"),
        $e = (0, r.t)('No bids'),
        Ge = (0, r.t)('No asks'),
        Ke = (0, r.t)('Buy Market'),
        Xe = (0, r.t)('Sell Market'),
        Ze = (0, r.t)('Spread'),
        Je = (0, r.t)('Amount'),
        Ye = (0, r.t)('Quantity'),
        et = v.enabled('broker_button');
      class tt {
        constructor({
          dataEvents: e,
          getSymbolName: t,
          qtySuggester: i,
          tradingCommands: r,
          settings: s,
        }) {
          (this.ask = new (P())(null)),
            (this.askTooltip = new (P())(Ke)),
            (this.bid = new (P())(null)),
            (this.bidTooltip = new (P())(Xe)),
            (this.spread = new (P())(null)),
            (this.spreadTooltip = new (P())(Ze)),
            (this.qty = new (P())(null)),
            (this.qtyTooltip = new (P())('')),
            (this.brokerIconVisible = new (P())(!1)),
            (this.brokerIconLoading = new (P())(!1)),
            (this.brokerIconUrl = new (P())(null)),
            (this.isQtyVisible = new (P())(!1)),
            (this.hasAskBidAdditionalPrecision = new (P())(!1)),
            (this.canTrade = new (P())(!0)),
            (this._globalVisibility = null),
            (this._isSymbolTradableResult = new Qe.WatchedObject(null)),
            (this._formatter = null),
            (this._spreadFormatter = null),
            (this._symbol = null),
            (this.setQty = (e) => {
              this.qty.setValue(String(e));
            }),
            (this._onSuggestedQtyChange = (e) => {
              (this._lastSuggestedQty = e), this.setQty(e);
            }),
            (this._dataEvents = e),
            (this._getSymbolName = t),
            (this._qtySuggester = i),
            (this._realtimeProvider = r.realtimeProvider),
            (this._onNeedSelectBroker = r.onNeedSelectBroker),
            (this._toggleTradingWidget = r.toggleTradingWidget),
            (this._toggleTradingPanelPopup = r.toggleTradingPanelPopup),
            (this._brokerCommandsUI = r.brokerCommandsUI),
            (this._updateRealtimeDataHandler = this._updateRealtimeData.bind(this)),
            (this._isBrokerConnected = (0, Ie.createWVFromGetterAndSubscription)(
              () => null !== this._realtimeProvider.activeBroker(),
              this._realtimeProvider.onStatusChanged
            )),
            this._isBrokerConnected.subscribe(this._updateIsSymbolTraded.bind(this), {
              callWithLast: !0,
            }),
            this._isBrokerConnected.subscribe(this._updateQtyTooltip.bind(this), {
              callWithLast: !0,
            }),
            this._isBrokerConnected.subscribe(this._updateBrokerIcon.bind(this)),
            this._isBrokerConnected.subscribe(this._resubscribeQtySuggester.bind(this)),
            (this._isBrokerConnecting = (0, Ie.createWVFromGetterAndSubscription)(
              () => 2 === r.brokerConnectionStatus(),
              r.onBrokerConnectionStatusChange
            )),
            this._isBrokerConnecting.subscribe(this._updateBrokerIcon.bind(this)),
            (this.visible = new (P())(!1)),
            this.visible.subscribe(this._toggleState.bind(this), { callWithLast: !0 }),
            (this._showSellBuyButtons = s.showSellBuyButtons.spawn()),
            this._showSellBuyButtons.subscribe(this._updateVisibility.bind(this), {
              callWithLast: !0,
            }),
            (this._isInstantMode = s.noConfirmEnabled.spawn()),
            (this._themeName = s.themeName.spawn()),
            this._themeName.subscribe(this._updateBrokerIcon.bind(this), { callWithLast: !0 }),
            (this._tradePossibilityComputedWV = (0, k.combine)(
              () => ({}),
              this._isBrokerConnected,
              this._isSymbolTradableResult,
              this.ask,
              this.bid
            )),
            this._tradePossibilityComputedWV.subscribe(
              this._updateTradePossibilityAndTooltip.bind(this),
              { callWithLast: !0 }
            ),
            (this._isQtyVisibleComputedWV = (0, k.combine)(
              () => ({}),
              this.canTrade,
              this._isInstantMode
            )),
            this._isQtyVisibleComputedWV.subscribe(this._updateIsQtyVisible.bind(this), {
              callWithLast: !0,
            });
        }
        destroy() {
          var e;
          this._stop(),
            this._isBrokerConnected.destroy(),
            this._showSellBuyButtons.destroy(),
            null === (e = this._globalVisibility) || void 0 === e || e.destroy(),
            this._isInstantMode.destroy(),
            this._tradePossibilityComputedWV.destroy(),
            this._isQtyVisibleComputedWV.destroy(),
            this._themeName.destroy();
        }
        setGlobalVisibility(e) {
          (0, a.assert)(null === this._globalVisibility, 'GlobalVisibility can be set only once'),
            (this._globalVisibility = e.spawn()),
            this._globalVisibility.subscribe(this._updateVisibility.bind(this), {
              callWithLast: !0,
            });
        }
        async tryToPlaceSellOrder() {
          await this._tryToPlaceOrder(parseFloat((0, a.ensureNotNull)(this.bid.value())), -1);
        }
        async tryToPlaceBuyOrder() {
          await this._tryToPlaceOrder(parseFloat((0, a.ensureNotNull)(this.ask.value())), 1);
        }
        async getQtyInfo() {
          return null !== this._symbol && this.canTrade.value()
            ? (await this._realtimeProvider.symbolInfo(this._symbol)).qty
            : null;
        }
        applyQty() {
          if (null === this._symbol || !this.canTrade.value()) return;
          const e = this.qty.value(),
            t = null !== e ? Number(e) : null;
          null !== t && this._qtySuggester.setQty(this._symbol, t),
            void 0 !== this._lastSuggestedQty &&
              t !== this._lastSuggestedQty &&
              this.qty.setValue(String(this._lastSuggestedQty));
        }
        canShowMobileTrading() {
          var e;
          return !(null === (e = window.TradingView.bottomWidgetBar) || void 0 === e
            ? void 0
            : e.isVisible().value());
        }
        _updateVisibility() {
          const e =
            (null === this._globalVisibility || this._globalVisibility.value()) &&
            this._showSellBuyButtons.value();
          this.visible.setValue(e);
        }
        async _tryToPlaceOrder(e, t) {
          if (null === this._realtimeProvider.activeBroker())
            return (
              this.canShowMobileTrading()
                ? this._toggleTradingPanelPopup()
                : await this._toggleTradingWidget(),
              void this._onNeedSelectBroker.fire()
            );
          const i = Number(this.qty.value()) || 1,
            r = this._isMarketOrderSupported() ? 2 : 1,
            s = {
              symbol: (0, a.ensureNotNull)(this._symbol),
              qty: i,
              side: t,
              type: r,
              seenPrice: null,
            };
          1 === r && (s.limitPrice = e),
            await (0, a.ensureNotNull)(this._brokerCommandsUI()).placeOrder(s, !0);
        }
        _toggleState(e) {
          e ? this._start() : this._stop();
        }
        _start() {
          this._dataEvents.symbolResolved().subscribe(this, this._createTradedSymbol),
            this._dataEvents.symbolError().subscribe(this, this._createTradedSymbol),
            this._createTradedSymbol();
        }
        _stop() {
          this._clearTradedSymbol(),
            (this._symbol = null),
            this._dataEvents.symbolResolved().unsubscribeAll(this),
            this._dataEvents.symbolError().unsubscribeAll(this);
        }
        _createTradedSymbol() {
          const e = this._getSymbolName();
          e !== this._symbol &&
            (this._clearTradedSymbol(), e.length > 0 && this._initTradedSymbol(e));
        }
        _initTradedSymbol(e) {
          (this._symbol = e),
            this._updateIsSymbolTraded(),
            this._realtimeProvider.subscribeRealtime(this._symbol, this._updateRealtimeDataHandler),
            this._resubscribeQtySuggester();
        }
        _clearTradedSymbol() {
          var e;
          this.ask.setValue(null),
            this.bid.setValue(null),
            this.spread.setValue(null),
            this.qty.setValue(null),
            null !== this._symbol &&
              (this._realtimeProvider.unsubscribeRealtime(
                this._symbol,
                this._updateRealtimeDataHandler
              ),
              null === (e = this._qtySuggesterSubscription) || void 0 === e || e.unsubscribe(),
              (this._symbol = null),
              this._updateIsSymbolTraded());
        }
        async _resubscribeQtySuggester() {
          var e;
          if (null === this._symbol) return;
          null === (e = this._qtySuggesterSubscription) || void 0 === e || e.unsubscribe();
          const t = (this._suggestedQtyPromise = this._qtySuggester.getQty(this._symbol)),
            i = await t;
          t === this._suggestedQtyPromise &&
            ((this._lastSuggestedQty = i),
            this.setQty(i),
            (this._qtySuggesterSubscription = this._qtySuggester
              .suggestedQtyChanged(this._symbol)
              .subscribe(this._onSuggestedQtyChange)));
        }
        _isMarketOrderSupported() {
          const e = this._realtimeProvider.activeBroker();
          return null === e || Boolean(e.metainfo().configFlags.supportMarketOrders);
        }
        _updateTradePossibilityAndTooltip() {
          this._updateCanTrade(), this._updateSellBuyTooltip();
        }
        _updateCanTrade() {
          const e = this._isSymbolTradableResult.value(),
            t = this._isBrokerConnected.value() && null !== e && e.tradable;
          this.canTrade.setValue(t);
        }
        _updateSellBuyTooltip() {
          var e, t;
          const i = this._getNonTradedTooltip();
          this.askTooltip.setValue(
            null !== (e = null != i ? i : this._getAskTooltip()) && void 0 !== e ? e : Ke
          ),
            this.bidTooltip.setValue(
              null !== (t = null != i ? i : this._getBidTooltip()) && void 0 !== t ? t : Xe
            );
        }
        _getNonTradedTooltip() {
          const e = this._isSymbolTradableResult.value();
          if (null !== e && !e.tradable)
            return void 0 !== e.solutions
              ? ''
              : void 0 !== e.shortReason && '' !== e.shortReason
              ? e.shortReason
              : this._isBrokerConnected.value()
              ? ze
              : He;
        }
        _getAskTooltip() {
          return null === this.ask.value() ? Ge : void 0;
        }
        _getBidTooltip() {
          return null === this.bid.value() ? $e : void 0;
        }
        _updateRealtimeData(e, t, i) {
          (this._formatter = i.formatter), (this._spreadFormatter = i.spreadFormatter);
          const r = t.ask,
            s = t.bid,
            o = (0, We.isNumber)(r) ? this._formatter.format(r) : null,
            n = (0, We.isNumber)(s) ? this._formatter.format(s) : null;
          this.ask.setValue(o), this.bid.setValue(n);
          const a = t.spread || ((0, We.isNumber)(r) && (0, We.isNumber)(s) && r - s) || 0,
            l = (0, We.isNumber)(t.spread) ? this._spreadFormatter : this._formatter;
          this.spread.setValue(l.format(a));
          let c = !1;
          (0, je.isFormatterHasForexAdditionalPrecision)(this._formatter) &&
            (c = this._formatter.hasForexAdditionalPrecision()),
            this.hasAskBidAdditionalPrecision.setValue(c);
        }
        async _updateIsSymbolTraded() {
          if (null === this._symbol) return void this._isSymbolTradableResult.setValue(null);
          const e = await this._realtimeProvider.isTradable(this._symbol);
          this._isSymbolTradableResult.setValue((0, Me.clone)(e));
        }
        _updateIsQtyVisible() {
          const e = this._isInstantMode.value() && this.canTrade.value();
          this.isQtyVisible.setValue(e);
        }
        _updateQtyTooltip() {
          this.qtyTooltip.setValue(this._getQtyTooltip());
        }
        _getQtyTooltip() {
          const e = this._realtimeProvider.activeBroker();
          return null !== e && e.metainfo().configFlags.showQuantityInsteadOfAmount ? Ye : Je;
        }
        _updateBrokerIcon() {
          if (!et) return;
          let e;
          const t = this._realtimeProvider.activeBroker();
          if (null !== t) {
            const i = t.metainfo();
            e =
              'dark' === this._themeName.value() && i.logoMiniBlackUrl
                ? i.logoMiniBlackUrl
                : i.logoMiniUrl;
          }
          this.brokerIconVisible.setValue(this._isBrokerConnected.value()),
            this.brokerIconLoading.setValue(this._isBrokerConnecting.value()),
            this.brokerIconUrl.setValue(e || null);
        }
      }
      var it = i(1529),
        rt = i(58848),
        st = i(47977),
        ot = i(42519),
        nt = i(56753),
        at = i(39784);
      class lt extends nt.LoaderBaseRenderer {
        _renderLoading(e) {
          super._renderLoading(e),
            (this._loadingEl.innerHTML = `\n\t\t\t<span class="${at.loaderCircle}"></span>\n\t\t`),
            this._loadingEl.classList.add(at.loader);
        }
      }
      var ct = i(27896),
        ut = i(76774);
      var dt = i(93208),
        ht = i(91407),
        pt = i(71996),
        _t = i(62394),
        gt = i(2365);
      const bt = parseInt(_t['css-value-padding']);
      function mt(e, t, i, r) {
        let s = e.querySelector('.' + r);
        if (!i) return null !== s && s.remove(), void (0, dt.updateTextNode)(e, t);
        null === s && ((s = document.createElement('span')), s.classList.add(r), e.appendChild(s)),
          (0, dt.updateTextNode)((0, a.ensureNotNull)(s), t.slice(-1)),
          (0, dt.updateTextNode)(e, t.slice(0, -1));
      }
      class ft {
        constructor({
          model: e,
          highButtonsMode: t,
          trackEvent: i,
          toggleMinimizeBottomWidgetBar: r,
        }) {
          (this.element = document.createElement('div')),
            (this._sellButtonEl = document.createElement('div')),
            (this._sellButtonTextEl = document.createElement('span')),
            (this._buyButtonEl = document.createElement('div')),
            (this._buyButtonTextEl = document.createElement('span')),
            (this._spreadQtyWrapper = document.createElement('div')),
            (this._spreadEl = document.createElement('div')),
            (this._qtyEl = document.createElement('div')),
            (this._qtyTextEl = document.createElement('span')),
            (this._brokerButtonEl = document.createElement('div')),
            (this._brokerIconWrapEl = document.createElement('div')),
            (this._isCalcOpened = !1),
            (this._calcContainer = document.createElement('div')),
            (this._sellLoader = new ot.LoaderPointsRenderer(this._sellButtonEl, {
              className: ht.loader,
            })),
            (this._buyLoader = new ot.LoaderPointsRenderer(this._buyButtonEl, {
              className: ht.loader,
            })),
            (this._brokerLoader = new lt(this._brokerButtonEl, { className: ht.circleLoader })),
            (this._windowResizeHandlerThrottle = (0, rt.default)(
              this._windowResizeHandler.bind(this),
              100
            )),
            (this._isHiddenByViewport = !1),
            (this._mode = 2),
            (this._height = new (P())(0)),
            (this._resizeObserver = null),
            (this._cachedBreakPoints = {}),
            (this._parentWidth = 0),
            (this._getCurrentQty = () => {
              const e = this._qty.value();
              return null !== e ? Number(e) : null;
            }),
            (this._model = e),
            (this._toggleMinimizeBottomWidgetBar = r),
            (this._ask = this._model.ask.spawn()),
            this._ask.subscribe(this._updateBuyButton.bind(this)),
            (this._bid = this._model.bid.spawn()),
            this._bid.subscribe(this._updateSellButton.bind(this)),
            (this._spread = this._model.spread.spawn()),
            this._spread.subscribe(this._updateSpread.bind(this)),
            (this._qty = this._model.qty.spawn()),
            this._qty.subscribe(this._updateQty.bind(this)),
            (this._brokerIconVisible = this._model.brokerIconVisible.spawn()),
            this._brokerIconVisible.subscribe(this._updateBrokerIconImage.bind(this)),
            (this._brokerIconLoading = this._model.brokerIconLoading.spawn()),
            this._brokerIconLoading.subscribe(this._updateBrokerIconImage.bind(this)),
            (this._brokerIconUrl = this._model.brokerIconUrl.spawn()),
            this._brokerIconUrl.subscribe(this._updateBrokerIconImage.bind(this), {
              callWithLast: !0,
            }),
            (this._trackEvent = i),
            this._render(),
            (this._askTooltip = this._model.askTooltip.spawn()),
            this._askTooltip.subscribe(this._updateButtonTooltip.bind(this, this._buyButtonEl), {
              callWithLast: !0,
            }),
            (this._bidTooltip = this._model.bidTooltip.spawn()),
            this._bidTooltip.subscribe(this._updateButtonTooltip.bind(this, this._sellButtonEl), {
              callWithLast: !0,
            }),
            (this._spreadTooltip = this._model.spreadTooltip.spawn()),
            this._spreadTooltip.subscribe(this._updateButtonTooltip.bind(this, this._spreadEl), {
              callWithLast: !0,
            }),
            (this._qtyTooltip = this._model.qtyTooltip.spawn()),
            this._qtyTooltip.subscribe(this._updateButtonTooltip.bind(this, this._qtyEl), {
              callWithLast: !0,
            }),
            (this._isVisible = this._model.visible.spawn()),
            this._isVisible.subscribe(this._updateVisibility.bind(this), { callWithLast: !0 }),
            (this._isQtyVisible = this._model.isQtyVisible.spawn()),
            this._isQtyVisible.subscribe(this._updateQtyVisibility.bind(this), {
              callWithLast: !0,
            }),
            (this._isLastDigitSup = this._model.hasAskBidAdditionalPrecision.spawn()),
            this._isLastDigitSup.subscribe(this._updateLastDigitSup.bind(this)),
            (this._highButtonsMode = t.spawn()),
            this._highButtonsMode.subscribe(this._updateHighButtonsMode.bind(this), {
              callWithLast: !0,
            }),
            (this._canTrade = this._model.canTrade.spawn()),
            this._canTrade.subscribe(this._updateBgButtonsMode.bind(this), { callWithLast: !0 }),
            (this._sellButtonHandler = this._onSellButton.bind(this)),
            (this._buyButtonHandler = this._onBuyButton.bind(this)),
            (this._qtyHandler = this._toggleCalcVisibility.bind(this)),
            (this._brokerButtonHandler = this._onBrokerButton.bind(this)),
            this._sellButtonEl.addEventListener('click', this._sellButtonHandler),
            this._buyButtonEl.addEventListener('click', this._buyButtonHandler),
            this._qtyEl.addEventListener('click', this._qtyHandler),
            this._brokerButtonEl.addEventListener('click', this._brokerButtonHandler),
            window.addEventListener('resize', this._windowResizeHandlerThrottle),
            this._windowResizeHandler();
        }
        destroy() {
          var e;
          this._ask.destroy(),
            this._askTooltip.destroy(),
            this._bid.destroy(),
            this._bidTooltip.destroy(),
            this._spread.destroy(),
            this._spreadTooltip.destroy(),
            this._qty.destroy(),
            this._qtyTooltip.destroy(),
            this._isVisible.destroy(),
            this._isQtyVisible.destroy(),
            this._isLastDigitSup.destroy(),
            this._highButtonsMode.destroy(),
            this._canTrade.destroy(),
            this._brokerIconUrl.destroy(),
            this._sellButtonEl.removeEventListener('click', this._sellButtonHandler),
            this._buyButtonEl.removeEventListener('click', this._buyButtonHandler),
            this._qtyEl.removeEventListener('click', this._qtyHandler),
            this._brokerButtonEl.removeEventListener('click', this._brokerButtonHandler),
            null === (e = this._resizeObserver) || void 0 === e || e.disconnect(),
            (this._resizeObserver = null),
            this.element.remove(),
            delete this.element,
            window.removeEventListener('resize', this._windowResizeHandlerThrottle);
        }
        updateModeByWidth(e) {
          const t = this._cachedBreakPoints[0],
            i = this._cachedBreakPoints[1];
          (this._mode = void 0 !== t && e < t ? 0 : void 0 !== i && e < i ? 1 : 2),
            (this._parentWidth = e),
            this.element.classList.toggle(ht.column, 1 === this._mode),
            this._updateVisibility();
        }
        height() {
          return this._height;
        }
        renderTo(e, t) {
          void 0 !== t ? e.insertBefore(this.element, t) : e.appendChild(this.element),
            null === this._resizeObserver &&
              (this._resizeObserver = new it.default(this._updateBreakPointsAndSize.bind(this))),
            this._resizeObserver.unobserve(this.element),
            this._resizeObserver.observe(this.element);
        }
        isHiddenByViewport() {
          return this._isHiddenByViewport;
        }
        _render() {
          const e = this._bid.value() || '...';
          this._sellButtonTextEl.appendChild(document.createTextNode(e)),
            this._sellButtonTextEl.classList.add(ht.buttonText),
            this._sellButtonEl.append(this._sellButtonTextEl),
            this._sellButtonEl.classList.add('apply-common-tooltip', ht.button, ht.sellButton);
          const t = this._spread.value() || '';
          this._spreadEl.appendChild(document.createTextNode(String(t))),
            this._spreadEl.classList.add('apply-common-tooltip', ht.spread);
          const i = this._qty.value() || '';
          this._qtyTextEl.appendChild(document.createTextNode(i)),
            this._qtyEl.append(this._qtyTextEl),
            this._qtyEl.classList.add('apply-common-tooltip', ht.button, ht.qty),
            this._spreadQtyWrapper.classList.add(ht.spreadQtyWrapper),
            this._spreadQtyWrapper.appendChild(this._spreadEl),
            this._spreadQtyWrapper.appendChild(this._qtyEl);
          const r = this._ask.value() || '...';
          this._buyButtonTextEl.appendChild(document.createTextNode(String(r))),
            this._buyButtonTextEl.classList.add(ht.buttonText),
            this._buyButtonEl.append(this._buyButtonTextEl),
            this._buyButtonEl.classList.add('apply-common-tooltip', ht.button, ht.buyButton),
            this._brokerButtonEl.appendChild(this._brokerIconWrapEl),
            this._brokerIconWrapEl.classList.add(ht.brokerButtonIconWrap),
            this._brokerButtonEl.classList.add(ht.brokerButton),
            this.element.appendChild(this._sellButtonEl),
            this.element.appendChild(this._spreadQtyWrapper),
            this.element.appendChild(this._buyButtonEl),
            this.element.appendChild(this._brokerButtonEl),
            this.element.classList.add(ht.wrapper),
            this.element.classList.toggle(ht.touchMode, ct.trackingModeIsAvailable),
            this.element.classList.toggle(ht.notAvailableOnMobile, !1);
        }
        _updateBreakPointsAndSize(e) {
          const t = e[0],
            i = 2 * bt;
          2 === this._mode && (this._cachedBreakPoints[1] = Math.round(t.contentRect.width) + i),
            1 === this._mode && (this._cachedBreakPoints[0] = Math.round(t.contentRect.width) + i),
            this.updateModeByWidth(this._parentWidth);
          const r = t.contentRect.height > 0 ? Math.round(t.contentRect.height) + i : 0;
          this._height.setValue(r);
        }
        _updateBrokerIconImage() {
          const e = this._brokerIconLoading.value(),
            t = !this._brokerIconVisible.value() && !e;
          if ((this._brokerButtonEl.classList.toggle(pt.blockHidden, t), t)) return;
          if ((this._toggleLoaderVisibility(this._brokerButtonEl, this._brokerLoader, e), e))
            return void (this._brokerIconWrapEl.innerHTML = '');
          const i = this._brokerIconUrl.value(),
            r = null === i;
          (this._brokerIconWrapEl.innerHTML = r
            ? gt
            : `<image src="${i}" alt="Account Manager" />`),
            this._brokerButtonEl.classList.toggle(ht.brokerButtonDefault, r);
        }
        async _onSellButton() {
          if (null === this._bid.value()) return;
          const e = this._highButtonsMode.value();
          this._trackEvent('Sell/Buy Buttons', 'Sell', e ? 'Instant' : 'Not Instant'),
            e &&
              this._canTrade.value() &&
              this._toggleLoaderVisibility(this._sellButtonEl, this._sellLoader, !0),
            await this._model.tryToPlaceSellOrder(),
            e &&
              this._canTrade.value() &&
              setTimeout(
                () => this._toggleLoaderVisibility(this._sellButtonEl, this._sellLoader, !1),
                300
              );
        }
        async _onBuyButton() {
          if (null === this._ask.value()) return;
          const e = this._highButtonsMode.value();
          this._trackEvent('Sell/Buy Buttons', 'Buy', e ? 'Instant' : 'Not Instant'),
            e &&
              this._canTrade.value() &&
              this._toggleLoaderVisibility(this._buyButtonEl, this._buyLoader, !0),
            await this._model.tryToPlaceBuyOrder(),
            e &&
              this._canTrade.value() &&
              setTimeout(
                () => this._toggleLoaderVisibility(this._buyButtonEl, this._buyLoader, !1),
                300
              );
        }
        _onBrokerButton() {
          this._model.canShowMobileTrading()
            ? (async function () {
                (await (0, ut.waitTradingService)()).tradingPanelPopup.show();
              })()
            : this._toggleMinimizeBottomWidgetBar();
        }
        _toggleLoaderVisibility(e, t, i) {
          e.classList.toggle(ht.loading, i), t.toggleVisibility(i);
        }
        _updateBuyButton(e) {
          const t = null !== e && this._isLastDigitSup.value();
          mt(this._buyButtonTextEl, '' + (e || '...'), t, ht.lastCharSup);
        }
        _updateSellButton(e) {
          const t = null !== e && this._isLastDigitSup.value();
          mt(this._sellButtonTextEl, '' + (e || '...'), t, ht.lastCharSup);
        }
        _updateSpread(e) {
          const t = '' + (e || '');
          (0, dt.updateTextNode)(this._spreadEl, t), this._updateVisibilityForSpreadQtyWrapper();
        }
        _updateQty(e) {
          let t = '' + (e || '');
          !this._isCalcOpened && t.length > 0 && (t = (0, w.abbreviatedNumber)(Number(t))),
            (0, dt.updateTextNode)(this._qtyTextEl, t);
        }
        _updateHighButtonsMode(e) {
          this.element.classList.toggle(ht.highButtons, e);
        }
        _updateBgButtonsMode(e) {
          this.element.classList.toggle(ht.withoutBg, !e);
        }
        _updateVisibilityForSpreadQtyWrapper() {
          const e = !this._isQtyVisible.value() && null === this._spread.value();
          this._spreadQtyWrapper.classList.toggle(pt.blockHidden, e);
        }
        _updateQtyVisibility(e) {
          this._qtyEl.classList.toggle(pt.blockHidden, !e),
            this._spreadQtyWrapper.classList.toggle(ht.withoutQty, !e),
            this._updateVisibilityForSpreadQtyWrapper();
        }
        _updateVisibility() {
          const e = this._isVisible.value() && 0 !== this._mode && !this._isHiddenByViewport;
          this.element.classList.toggle(pt.blockHidden, !e);
        }
        _updateLastDigitSup() {
          this._updateBuyButton(this._ask.value()), this._updateSellButton(this._bid.value());
        }
        _updateButtonTooltip(e, t) {
          if ('' === t)
            return (0, st.setTooltipData)(e, 'text', t), void e.removeAttribute('title');
          e.setAttribute('title', t);
        }
        _toggleCalcVisibility() {
          (this._isCalcOpened = !this._isCalcOpened), this._renderCalc();
        }
        _closeCalc() {
          (this._isCalcOpened = !1),
            this._updateQty(this._qty.value()),
            this._model.applyQty(),
            this._renderCalc();
        }
        _renderCalc() {
          Promise.all([
            i.e(7610),
            i.e(8193),
            i.e(9305),
            i.e(2),
            i.e(6480),
            i.e(9253),
            i.e(268),
            i.e(7467),
            i.e(1436),
            i.e(3809),
          ])
            .then(i.bind(i, 14442))
            .then(async (e) => {
              const t = await this._model.getQtyInfo();
              null !== t &&
                e.render(this._isCalcOpened, this._calcContainer, {
                  ...t,
                  withInput: !0,
                  valueGetter: this._getCurrentQty,
                  position: this._getCalcPosition(),
                  targetEl: this._qtyEl,
                  onClose: this._closeCalc.bind(this),
                  onValueChange: this._model.setQty,
                  trackEventTarget: 'Sell/Buy Buttons',
                  trackEvent: this._trackEvent,
                });
            });
        }
        _getCalcPosition() {
          const e = this._qtyEl.getBoundingClientRect();
          return { x: e.left, y: e.bottom + 2 };
        }
        _windowResizeHandler() {
          !1 !== this._isHiddenByViewport &&
            ((this._isHiddenByViewport = !1), this._updateVisibility());
        }
      }
      var yt = i(5251);
      const vt = (0, r.t)('Show Buy/Sell buttons');
      class wt {
        constructor(e, t, i, r, s) {
          (this._showSellBuyButtons = s.showSellBuyButtons),
            (this._trackEvent = r.trackEvent),
            (this._model = new tt({
              dataEvents: e,
              getSymbolName: t,
              qtySuggester: i,
              tradingCommands: r,
              settings: s,
            })),
            (this._renderer = new ft({
              model: this._model,
              highButtonsMode: s.noConfirmEnabled,
              trackEvent: r.trackEvent,
              toggleMinimizeBottomWidgetBar: r.toggleMinimizeBottomWidgetBar,
            }));
        }
        destroy() {
          this._model.destroy(), this._renderer.destroy();
        }
        renderTo(e, t) {
          this._renderer.renderTo(e, t);
        }
        setGlobalVisibility(e) {
          this._model.setGlobalVisibility(e);
        }
        visibility() {
          return this._model.visible;
        }
        updateWidgetModeBySize(e) {
          this._renderer.updateModeByWidth(e.w);
        }
        contextMenuActions() {
          if (this._renderer.isHiddenByViewport()) return [];
          return [
            new yt.Action({
              actionId: 'Trading.SellBuyButtonsToggleVisibility',
              checkable: !0,
              checked: this._showSellBuyButtons.value(),
              label: vt,
              onExecute: () => {
                const e = !this._showSellBuyButtons.value();
                this._showSellBuyButtons.setValue(e),
                  this._trackEvent(
                    'SellBuyButtonsWidget context menu',
                    'Show Sell/Buy Button',
                    e ? 'Check' : 'Uncheck'
                  );
              },
            }),
          ];
        }
        height() {
          return this._renderer.height();
        }
      }
      var kt = i(73935),
        St = i(8361),
        Pt = i(94459),
        Ct = i(52034);
      const Bt = J.forwardRef((e, t) =>
        J.createElement('div', { ref: t, className: Ct.popupWrapper }, e.children)
      );
      var Tt = i(66189);
      const Et = (() => {
          let e,
            t,
            r = null,
            s = null;
          return async (o, n, a) => {
            const l = null == o ? void 0 : o.currentAccount();
            if (null === r || s !== o || e !== l) {
              null == t || t.remove();
              const { AccountManager: c } = await Promise.all([
                  i.e(3876),
                  i.e(7610),
                  i.e(9448),
                  i.e(3894),
                  i.e(3996),
                  i.e(7936),
                  i.e(706),
                  i.e(83),
                  i.e(9843),
                  i.e(3972),
                  i.e(8986),
                  i.e(3684),
                  i.e(446),
                  i.e(6002),
                  i.e(5514),
                  i.e(9253),
                  i.e(1529),
                  i.e(3668),
                  i.e(8354),
                ]).then(i.bind(i, 40953)),
                u = { container: n, visible: new (P())(!0) };
              (r = n), (s = o), (e = l), (t = new c(o, u, 0, a));
            } else n.appendChild(r);
          };
        })(),
        Ot = new (P())(null);
      function Dt(e) {
        const t = (0, J.useRef)(null),
          i = (0, J.useContext)(Tt.SlotContext);
        return (
          (0, J.useEffect)(() => {
            Ot.setValue(i);
          }, [i]),
          (0, J.useEffect)(() => {
            null !== t.current && Et(e.broker, t.current, Ot.readonly());
          }, []),
          J.createElement(Bt, { ref: t })
        );
      }
      var Lt = i(79225),
        It = i(23252),
        At = i(26057);
      const Nt = (0, r.t)('Trading');
      class Mt extends St.DialogRenderer {
        constructor(e) {
          super(),
            (this._title = Nt),
            (this._isSubscribed = !1),
            (this._showSeparator = !0),
            (this._unsetHeaderAlign = !0),
            (this._handleClose = () => {
              kt.unmountComponentAtNode(this._container), this._setVisibility(!1);
            }),
            (this._trading = e);
        }
        visible() {
          return this._visibility.spawn().readonly();
        }
        show() {
          this._isSubscribed ||
            ((this._isSubscribed = !0),
            this._onStatusChange(this._trading.connectStatus()),
            this._trading.onConnectionStatusChange.subscribe(this, this._onStatusChange)),
            this._setVisibility(!0),
            this._renderComponent();
        }
        hide() {
          this._handleClose();
        }
        destroy() {
          (this._isSubscribed = !1),
            this._trading.onConnectionStatusChange.unsubscribe(this, this._onStatusChange),
            this._handleClose();
        }
        _onStatusChange(e, t) {
          this._connectStatus !== e &&
            ((this._connectStatus = e),
            window.navigator.onLine
              ? 2 !== e &&
                (null == t ? void 0 : t.disconnectType) !== _.DisconnectType.Offline &&
                3 !== e &&
                4 !== e
                ? 1 === e && this._renderAccountManager()
                : this._renderSpinner()
              : this._renderOfflineScreen());
        }
        _renderComponent() {
          kt.render(
            J.createElement(Pt.AdaptivePopupDialog, {
              dataName: 'trading-dialog',
              isOpened: this.visible().value(),
              onClose: this._handleClose,
              showSeparator: this._showSeparator,
              unsetHeaderAlign: this._unsetHeaderAlign,
              fullScreen: !0,
              draggable: !1,
              title: this._title,
              render: () => this._content,
            }),
            this._container
          );
        }
        _renderSpinner() {
          (this._unsetHeaderAlign = !1),
            (this._showSeparator = !0),
            (this._title = Nt),
            this._changeDialogContent(J.createElement(Lt.Spinner, null));
        }
        _renderOfflineScreen() {
          (this._title = Nt), this._changeDialogContent(J.createElement(At.OfflineScreen, null));
        }
        async _renderBrokerSelectScreen() {
          0;
        }
        async _renderAccountManager() {
          const e = await (0, It.makeAccountManagerHeaderDropdownsProps)(this._trading);
          if (
            ((this._showSeparator = !1),
            (this._unsetHeaderAlign = !0),
            (this._title = Nt),
            void 0 !== e)
          ) {
            const { AccountManagerHeaderDropdowns: t } = await Promise.all([
              i.e(3876),
              i.e(7610),
              i.e(9448),
              i.e(3894),
              i.e(3996),
              i.e(7936),
              i.e(706),
              i.e(83),
              i.e(9843),
              i.e(3972),
              i.e(8986),
              i.e(3684),
              i.e(446),
              i.e(6002),
              i.e(5514),
              i.e(9253),
              i.e(1529),
              i.e(3668),
              i.e(8354),
            ]).then(i.bind(i, 21825));
            this._title = J.createElement(t, { ...e });
          }
          (this._content = J.createElement(Dt, { broker: this._trading.activeBroker() })),
            this._renderComponent();
        }
        _changeDialogContent(e) {
          (this._content = J.createElement(Bt, null, e)), this._renderComponent();
        }
      }
      var Vt,
        xt = i(50561),
        Rt = i(85452);
      async function Ft(e, t) {
        localStorage.setItem(e, t);
      }
      !(function (e) {
        (e.get = async function () {
          return (
            Rt.CheckMobile.any() ||
              (await (async function () {
                const e = o.getValue(L.settingsKeys.ACTIVE_BROKER);
                if ((o.remove(L.settingsKeys.ACTIVE_BROKER, { forceFlush: !0 }), void 0 === e))
                  return;
                await Ft(L.settingsKeys.ACTIVE_BROKER, e);
              })()),
            (async function (e) {
              return localStorage.getItem(e);
              const t = localStorage.getItem(e);
              if (null === t) return null;
              const i = await userSpecificDecrypt(t);
              null === i && localStorage.removeItem(e);
              return i;
            })(L.settingsKeys.ACTIVE_BROKER)
          );
        }),
          (e.set = async function (e) {
            await Ft(L.settingsKeys.ACTIVE_BROKER, e);
          }),
          (e.clear = function () {
            o.remove(L.settingsKeys.ACTIVE_BROKER, { forceFlush: !0 }),
              localStorage.removeItem(L.settingsKeys.ACTIVE_BROKER);
          });
      })(Vt || (Vt = {}));
      var qt = i(93302),
        Ut = i.n(qt),
        Wt = i(47753),
        Qt = i(34978),
        jt = i(98536),
        Ht = i(53741),
        zt = i(94975),
        $t = i(65583),
        Gt = (0, i(1819).createErrorClass)(function (e) {
          return function () {
            e(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
          };
        }),
        Kt = i(26267);
      var Xt = i(48346),
        Zt = i(58474),
        Jt = i(96798),
        Yt = i(2566),
        ei = i(90278);
      var ti = i(64185),
        ii = i(72989);
      class ri {
        constructor(e) {
          (this._rawAndFilteredQtyMap = new Map()), (this._qtyInfo = new Map());
          const { symbolInfoGetter: t, onBrokerChange: i, qtySettingsStorageGetter: r } = e;
          (this._getQtySettingsStorage = r),
            (this._getSymbolInfo = t),
            i.subscribe(this, this._onBrokerChange);
        }
        async getQty(e) {
          return (
            (t = this._getRawAndFilteredQty(e).filteredQty$),
            (r = 'object' == typeof i),
            new Promise(function (e, s) {
              var o = new Kt.SafeSubscriber({
                next: function (t) {
                  e(t), o.unsubscribe();
                },
                error: s,
                complete: function () {
                  r ? e(i.defaultValue) : s(new Gt());
                },
              });
              t.subscribe(o);
            })
          );
          var t, i, r;
        }
        setQty(e, t) {
          this._getRawAndFilteredQty(e).rawQty$.next(t);
        }
        suggestedQtyChanged(e) {
          return this._getRawAndFilteredQty(e).filteredQty$.pipe((0, Wt.skip)(1));
        }
        _getRawAndFilteredQty(e) {
          var t;
          return null !== (t = this._rawAndFilteredQtyMap.get(e)) && void 0 !== t
            ? t
            : this._makeRawAndFilteredQty(e);
        }
        _makeRawAndFilteredQty(e) {
          const t = new Xt.ReplaySubject(1),
            i = this._getInitialQty(e).pipe(
              (0, Qt.switchMap)((e) => t.pipe((0, jt.startWith)(e))),
              (0, Ht.distinctUntilChanged)(),
              (0, zt.filter)((t) => this._isQtyCorrect(e, t)),
              ((r = (t) => {
                var i;
                return null === (i = this._getQtySettingsStorage()) || void 0 === i
                  ? void 0
                  : i.setSymbolQty(e, t);
              }),
              (n = (0, Zt.isFunction)(r) || s || o ? { next: r, error: s, complete: o } : r)
                ? (0, Jt.operate)(function (e, t) {
                    var i;
                    null === (i = n.subscribe) || void 0 === i || i.call(n);
                    var r = !0;
                    e.subscribe(
                      new Yt.OperatorSubscriber(
                        t,
                        function (e) {
                          var i;
                          null === (i = n.next) || void 0 === i || i.call(n, e), t.next(e);
                        },
                        function () {
                          var e;
                          (r = !1),
                            null === (e = n.complete) || void 0 === e || e.call(n),
                            t.complete();
                        },
                        function (e) {
                          var i;
                          (r = !1),
                            null === (i = n.error) || void 0 === i || i.call(n, e),
                            t.error(e);
                        },
                        function () {
                          var e, t;
                          r && (null === (e = n.unsubscribe) || void 0 === e || e.call(n)),
                            null === (t = n.finalize) || void 0 === t || t.call(n);
                        }
                      )
                    );
                  })
                : ei.identity),
              (0, $t.share)({ connector: () => new Xt.ReplaySubject(1) })
            );
          var r, s, o, n;
          const a = { rawQty$: t, filteredQty$: i };
          return this._rawAndFilteredQtyMap.set(e, a), a;
        }
        _isQtyCorrect(e, t) {
          const i = (0, a.ensureDefined)(this._qtyInfo.get(e));
          return !(0, ii.checkQtyError)(i, t, !0).res;
        }
        _getInitialQty(e) {
          return (0, h.from)(this._getSymbolInfo(e)).pipe(
            (0, p.map)(({ qty: t }) => {
              var i, r;
              this._qtyInfo.set(e, t);
              const s =
                  null === (i = this._getQtySettingsStorage()) || void 0 === i
                    ? void 0
                    : i.symbolQty(e),
                o = null !== (r = t.default) && void 0 !== r ? r : t.min;
              return void 0 !== s && s > 0
                ? (function (e, t) {
                    const i = Ut()(e).div(t).round(0, 1).mul(t);
                    return Number(i);
                  })((0, ti.clamp)(s, t.min, t.max), Math.min(t.step, t.min))
                : o;
            })
          );
        }
        _onBrokerChange() {
          this._rawAndFilteredQtyMap.forEach(({ rawQty$: e }) => e.complete()),
            this._rawAndFilteredQtyMap.clear(),
            this._qtyInfo.clear();
        }
      }
      var si = i(84851),
        oi = i(62395),
        ni = i(65520);
      const ai = (0, m.getLogger)('Trading.Core'),
        li = { 1: 'Connected', 2: 'Connecting', 3: 'Disconnected', 4: 'Error' };
      var ci;
      !(function (e) {
        (e[(e.Paper = 43000516466)] = 'Paper'),
          (e[(e.CQG = 43000516372)] = 'CQG'),
          (e[(e.OANDA = 43000516375)] = 'OANDA'),
          (e[(e.FOREXCOM = 43000516374)] = 'FOREXCOM');
      })(ci || (ci = {}));
      const ui = { enabled: new (P())(!1), name: 'alert/alarm_clock' };
      const di = v.enabled('buy_sell_buttons'),
        hi = !0;
      class pi {
        constructor(e) {
          (this.accountType = new (P())()),
            (this.onBrokerChange = new (B())()),
            (this.onBrokerLoading = new (B())()),
            (this.onConnectionStatusChange = new (B())()),
            (this.onNewNotification = new (B())()),
            (this.onNeedSelectBroker = new (B())()),
            (this.onNotificationsChanged = new (B())()),
            (this.showTradedSources = new (P())(!0)),
            (this.showSellBuyButtons = new (P())()),
            (this.noConfirmEnabled = new (P())()),
            (this.showOnlyRejectionNotifications = new (P())()),
            (this.showPricesWithZeroVolume = new (P())()),
            (this.showSpread = new (P())()),
            (this.orderExecutedSoundParams = ui),
            (this._activeBroker = null),
            (this._orderViewController = null),
            (this._orderControllerPromise = null),
            (this._brokerCommandsUI = null),
            (this._showPricesWithZeroVolume = new (P())()),
            (this._showSpread = new (P())()),
            (this._closePositionDialogVisibility = new O.DialogVisibility()),
            (this._orderDialogVisibility = new O.DialogVisibility()),
            (this._loginDialogVisibility = new O.DialogVisibility()),
            (this._tradingPanelPopupVisibility = new O.DialogVisibility()),
            (this._tradingSettingsStorage = null),
            (this._offlineListener = this._offlineHandler.bind(this)),
            (this._onlineListener = this._onlineHandler.bind(this)),
            (this._notifications = []),
            (this._account = null),
            (this._domPanelVisibility = new (P())(!1)),
            (this._orderPanelVisibility = new (P())(!1)),
            (this._pipValueType = new (P())(_.PipValueType.None)),
            (this._switchingBroker = !1),
            (this._isReconnectNeeded = !1),
            (this._accountVerificationPromise = null),
            (this._chartWidgetCollection = null),
            (this._tradedItemsChartCollectionFacadePromise = null),
            (this._tryReconnectLastBroker = async () => {
              if (this._isReconnectNeeded) {
                if ('hidden' === document.visibilityState)
                  return window.addEventListener('visibilitychange', this._tryReconnectLastBroker, {
                    once: !0,
                  });
                (this._isReconnectNeeded = !1), await this._selectLastBroker();
              }
            }),
            (this._updateAccountId = () => {
              (this._account = (0, a.ensureNotNull)(this._activeBroker).currentAccount()),
                this.onNotificationsChanged.fire(this.getNotifications());
            }),
            (this._onFullScreenDialogOpen = () => {
              this._guiAccessor.closeAllNotifications();
            }),
            (this._setPipValueType = async () => {
              const e = s.linking.proSymbol.value(),
                { type: t } = await this._realtimeProvider.symbolInfo(e);
              let i = _.PipValueType.Ticks;
              'crypto' === t
                ? (i = _.PipValueType.None)
                : 'forex' === t && (i = _.PipValueType.Pips),
                this._pipValueType.setValue(i);
            }),
            (this._onBrokerChanged = (e) => {
              this._tradingSettingsStorage = null;
            }),
            (this._onTradingPanelVisibilityChanged = (e) => {
              e &&
                (this.setOrderPanelVisibility(e),
                this.tradingPanel.isVisible.unsubscribe(this._onTradingPanelVisibilityChanged));
            }),
            (this._setPipValueType = (0, y.sequentialize)(this._setPipValueType)),
            (this._showSellBuyButtonsKey = this._makeShowSellBuyButtonsKey()),
            (this._resizerBridge = e),
            (this._realtimeProvider = new x(
              () => this.activeBroker(),
              this.onBrokerChange,
              this.onConnectionStatusChange
            )),
            (this._positionService = new Re(this)),
            (this._ordersService = new Ue(this)),
            (this._tradingStat = new F(this)),
            this.onBrokerChange.subscribe(this, this._onBrokerChanged),
            (this.tradingPanelPopup = new Mt(this)),
            this.tradingPanelPopup.visible().subscribe((e) => {
              e
                ? (this._tradingPanelPopupVisibility.setValue({ isVisible: e, isFullScreen: !0 }),
                  this._onFullScreenDialogOpen())
                : this._tradingPanelPopupVisibility.setValue({ isVisible: e });
            }),
            (this.tradingPanel = new ue(e));
          this._qtySuggester = new ri({
            onBrokerChange: this.onBrokerChange,
            symbolInfoGetter: (e) => this._realtimeProvider.symbolInfo(e),
            qtySettingsStorageGetter: () => this._tradingSettingsStorage,
          });
          const t = new oe(e, () => this.tradingPanel.close(), this, this._qtySuggester);
          this.tradingPanel.addPage(ae.TradingPage.DomPanel, t);
          const i = new ne();
          this.tradingPanel.addPage(ae.TradingPage.OrderPanel, i);
          const r = o.getValue(L.settingsKeys.TRADING_PANEL_ACTIVE_PAGE),
            n = o.getBool(
              L.settingsKeys.TRADING_PANEL_OPENED,
              v.enabled('show_order_panel_on_start')
            );
          r && this.tradingPanel.activePage.setValue(r),
            n && this.tradingPanel.open(),
            this.tradingPanel.isPageOpened(ae.TradingPage.OrderPanel) &&
              (this.tradingPanel.isVisible.value()
                ? this.setOrderPanelVisibility(!0)
                : this.tradingPanel.isVisible.subscribe(this._onTradingPanelVisibilityChanged)),
            (0, k.combine)(
              () => ({}),
              this.tradingPanel.activePage,
              this.tradingPanel.isOpened
            ).subscribe(() => {
              this._domPanelVisibility.setValue(
                this.tradingPanel.isPageOpened(ae.TradingPage.DomPanel)
              ),
                this._orderPanelVisibility.setValue(
                  this.tradingPanel.isPageOpened(ae.TradingPage.OrderPanel)
                );
            }),
            (this.closePositionDialogVisibility = this._closePositionDialogVisibility.value$),
            (this.orderDialogVisibility = this._orderDialogVisibility.value$),
            (this.loginDialogVisibility = this._loginDialogVisibility.value$),
            (this.possibleFullScreenDialogsVisibility = (function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              var i = (0, d.popScheduler)(e),
                r = (0, d.popNumber)(e, 1 / 0),
                s = e;
              return s.length
                ? 1 === s.length
                  ? (0, c.innerFrom)(s[0])
                  : (0, l.mergeAll)(r)((0, h.from)(s, i))
                : u.EMPTY;
            })(
              this.closePositionDialogVisibility.pipe(
                (0, p.map)((e) => ({ ...e, name: 'close-position-dialog' }))
              ),
              this.orderDialogVisibility.pipe((0, p.map)((e) => ({ ...e, name: 'order-dialog' }))),
              this.loginDialogVisibility.pipe((0, p.map)((e) => ({ ...e, name: 'login-dialog' }))),
              this._tradingPanelPopupVisibility.value$.pipe(
                (0, p.map)((e) => ({ ...e, name: 'trading-panel-popup' }))
              )
            ));
        }
        setChartWidgetCollection(e) {
          (0, a.assert)(
            null === this._chartWidgetCollection,
            'ChartWidgetCollection can be set only once'
          ),
            (this._chartWidgetCollection = e),
            (this._guiAccessor = new j(e)),
            new Be(this),
            this._loadState(),
            o.onSync.subscribe(this, this._loadState);
          const t = () => {
            this._save();
          };
          this.showSellBuyButtons.subscribe(t),
            this.noConfirmEnabled.subscribe(t),
            this.showOnlyRejectionNotifications.subscribe(t),
            this._showPricesWithZeroVolume.subscribe(t),
            this._showSpread.subscribe(t),
            this.orderExecutedSoundParams.enabled.subscribe(t),
            window.addEventListener('offline', this._offlineListener),
            window.addEventListener('online', this._onlineListener),
            this.bindShortcuts(),
            (this._tradedItemsChartCollectionFacadePromise =
              this._createTradedItemsChartCollectionFacade(e)),
            this._registerCustomSources(e),
            this._registerCustomWidgets(e);
        }
        showPricesWith() {
          return { zeroVolume: this._showPricesWithZeroVolume, spread: this._showSpread };
        }
        domPanelVisibility() {
          return this._domPanelVisibility;
        }
        orderPanelVisibility() {
          return this._orderPanelVisibility;
        }
        realtimeProvider() {
          return this._realtimeProvider;
        }
        toggleTradingPanelPopup() {
          this.tradingPanelPopup.visible().value()
            ? this.tradingPanelPopup.hide()
            : this.tradingPanelPopup.show();
        }
        toggleTradingWidget() {
          return window.TradingView.bottomWidgetBar
            ? window.TradingView.bottomWidgetBar.activateTradingTab()
            : Promise.resolve();
        }
        toggleMinimizeBottomWidgetBar() {
          if (window.TradingView.bottomWidgetBar)
            return window.TradingView.bottomWidgetBar.toggleMinimize();
        }
        tradingWizard() {
          return this._tradingWizard;
        }
        showTradingProperties() {
          this._gui() && this._gui().showTradingProperties();
        }
        brokersList() {
          return D.brokersList();
        }
        brokersPlans() {
          return this._getBrokerPlans();
        }
        activeBroker() {
          return this._activeBroker;
        }
        brokerCommandsUI() {
          return this._brokerCommandsUI;
        }
        trackEvent(e, t, i) {
          const r = e ? `[${e}] ${t}` : t;
          if (this._gui()) {
            const e = this._activeBroker
                ? this._activeBroker.metainfo().id + ' Trading'
                : 'Trading No Broker',
              t = this._activeBroker ? this._activeBroker.currentAccountType() : void 0;
            this._gui().trackEvent(e, r, i || t);
          }
        }
        async selectBroker(e, t) {
          await this._selectBrokerInternal(e, !0, t);
        }
        async pickDefaultBroker() {
          if (this._activeBroker) return;
          let e = null;
          const t = this.brokersList().filter((e) => !e.configFlags.isSuspended);
          if (1 === t.length) e = t[0].id;
          else {
            const i = await Vt.get();
            i && t.some((e) => e.id === i) && (e = i);
          }
          e && this._selectBrokerInternal(e, !1);
        }
        async makeNewOrderContextMenuAction(e, t, i) {
          const s = await this._qtySuggester.getQty(e);
          return {
            name: 'trade-new-order',
            action: () => {
              this.trackEvent(t, 'New Order'),
                this._checkAndOpenOrderDialog({ symbol: e, qty: s, limitPrice: i, stopPrice: i });
            },
            text: (0, f.appendEllipsis)((0, r.t)('Create new order')),
            statName: 'NewOrder',
          };
        }
        async defaultContextMenuActions(
          e,
          { onlyMainActions: t = !1, gaOrigin: i = 'Chart Context Menu' } = {}
        ) {
          const s = await this._qtySuggester.getQty(e.symbol),
            o = e.value || void 0,
            { bid: n, ask: a } = await this.realtimeProvider().quotesSnapshot(e.symbol),
            l = [];
          if (null !== e.value && void 0 !== a && void 0 !== n && (e.value >= a || e.value <= n)) {
            const t = (n + a) / 2;
            l.push(...(await this._makeSubActions(e, s, t, i)));
          }
          return (
            l.push(await this.makeNewOrderContextMenuAction(e.symbol, i, o)),
            !t &&
              v.enabled('property_pages') &&
              (l.push({ separator: !0 }),
              l.push({
                name: 'trade-properties',
                action: () => {
                  this.trackEvent(i, 'Trading Properties'), this.showTradingProperties();
                },
                text: (0, f.appendEllipsis)((0, r.t)('Trading settings')),
                icon: si,
                statName: 'Properties',
              })),
            l
          );
        }
        defaultDropdownMenuActions(e) {
          const t = [],
            i = this.activeBroker(),
            s = e || {
              tradingProperties: !0,
              restoreConfirmations: i && i.metainfo().configFlags.supportConfirmations,
              showHowToUse: i && i.metainfo().configFlags.supportHowToUse,
            };
          return (
            v.enabled('property_pages') || (s.tradingProperties = !1),
            s.tradingProperties &&
              t.push({
                action: () => {
                  this.showTradingProperties(),
                    this.trackEvent('Bottom Panel Dropdown', 'Trading Properties');
                },
                text: (0, f.appendEllipsis)((0, r.t)('Trading settings')),
                icon: si,
              }),
            s.restoreConfirmations &&
              t.push({
                action: () => {
                  this._showRestoreConfirmations(),
                    this.trackEvent('Bottom Panel Dropdown', 'Restore confirmations');
                },
                text: (0, f.appendEllipsis)((0, r.t)('Restore confirmations')),
              }),
            t
          );
        }
        chartContextMenuActions(e, t) {
          return (
            this._activeBroker && 1 === this._activeBroker.connectionStatus()
              ? this._activeBroker.chartContextMenuActions(e, t)
              : this.defaultContextMenuActions(e, t)
          ).then((e) => (0, g.convertActionDescriptionsToActions)(e));
        }
        connectStatus() {
          return this._activeBroker ? this._activeBroker.connectionStatus() : 3;
        }
        bindShortcuts() {
          if (this._hotkeys) return;
          this._hotkeys = n.createGroup({ desc: 'Trading' });
          const e = async (e) => {
            const t = this._gui().proSymbol(),
              i = await this._qtySuggester.getQty(t),
              { bid: r, ask: s } = await this.realtimeProvider().quotesSnapshot(t),
              o = {
                price: void 0 !== r && void 0 !== s ? (r + s) / 2 : NaN,
                qty: i,
                side: e,
                symbol: t,
                type: 2,
                seenPrice: null,
              };
            this.trackEvent('Shortcut', -1 === e ? 'Sell' : 'Buy'), this._checkAndPlaceOrder(o);
          };
          this._hotkeys.add({ desc: 'Buy', hotkey: n.Modifiers.Shift + 66, handler: () => e(1) }),
            this._hotkeys.add({
              desc: 'Sell',
              hotkey: n.Modifiers.Shift + 83,
              handler: () => e(-1),
            });
        }
        formatter(e) {
          return this.realtimeProvider().formatter(e);
        }
        showSuccessNotification(e, t, i = 1e4) {
          this.showOnlyRejectionNotifications.value() || this._showNotification(e, t, 'success', i),
            v.enabled('show_trading_notifications_history') &&
              this._addNotificationRow(e, t, 'success', i),
            this._log(e, t);
        }
        showErrorNotification(e, t, i = 25e3) {
          this._showNotification(e, t, 'danger', i),
            v.enabled('show_trading_notifications_history') &&
              this._addNotificationRow(e, t, 'danger', i),
            this._log(e, t);
        }
        getNotifications() {
          return this._notifications.filter(
            (e) =>
              e.account === this._account &&
              e.broker === (this._activeBroker ? this._activeBroker.metainfo().id : null)
          );
        }
        setDomPanelVisibility(e) {
          e ? this.tradingPanel.openPage(ae.TradingPage.DomPanel) : this.tradingPanel.close();
        }
        setOrderPanelVisibility(e) {
          this._getOrderViewController().then((t) => {
            e ? t.openPanel() : t.closePanel();
          });
        }
        orderViewController() {
          return (0, a.ensureNotNull)(this._orderViewController);
        }
        tradingStat() {
          return this._tradingStat;
        }
        async verifyBrokerLiveAccount() {
          return (
            this._verifyLiveAccount(),
            null !== this._accountVerificationPromise
              ? this._accountVerificationPromise
              : Promise.reject('Account verification is not needed')
          );
        }
        pipValueType() {
          return this._pipValueType;
        }
        tradedItemsChartCollectionFacade() {
          return (0, a.ensureNotNull)(this._tradedItemsChartCollectionFacadePromise);
        }
        async _getOrderViewController() {
          return null !== this._orderViewController
            ? this._orderViewController
            : (await this._createOrderController(), this._getOrderViewController());
        }
        async _selectBrokerInternal(e, t, i = !1, s) {
          var o;
          if (this._switchingBroker)
            return void ai.logWarn(
              `Broker is already selected, but a new broker id: ${e} was received.`
            );
          if (e !== (this._activeBroker ? this._activeBroker.metainfo().id : null)) {
            if (this._activeBroker) {
              const e = this._activeBroker && this._activeBroker.disconnectWarningMessage(),
                o = () =>
                  this._showReviewDialogIfNeeded(3, { disconnectType: _.DisconnectType.LogOut });
              null !== e && window.is_authenticated
                ? (0, E.showConfirm)({
                    title: (0, r.t)('Log Out Confirmation'),
                    text: e,
                    mainButtonText: (0, r.t)('Log Out'),
                    mainButtonIntent: 'danger',
                    cancelButtonText: (0, r.t)('Cancel'),
                    onConfirm: ({ dialogClose: e }) => {
                      o(), this._logOut(t, i, s), e();
                    },
                    onCancel: ({ dialogClose: e }) => {
                      o(), e();
                    },
                  })
                : (o(), this._logOut(t, i, s));
            }
            if (null != e) {
              let t;
              0, (this._switchingBroker = !0);
              try {
                const r = await D.createBrokerConnection(this, e, null, t);
                await this._initBroker(r, i);
              } catch (e) {
                (this._switchingBroker = !1), ai.logError((0, b.getLoggerMessage)(e));
              }
            } else
              t &&
                setTimeout(() => {
                  Vt.clear();
                }),
                this.onBrokerChange.fire(null),
                null === (o = this._closePositionDialogVisibilitySubscription) ||
                  void 0 === o ||
                  o.unsubscribe(),
                (this._brokerCommandsUI = null);
          }
        }
        async _initBroker(e, t) {
          this._activeBroker &&
            (ai.logWarn('Another one connecting broker detected. Disconnect it.'),
            this._activeBroker.disconnect(t),
            this._activeBroker.destroy()),
            (this._switchingBroker = !1),
            (this._activeBroker = e),
            e.connectionStatusUpdate.subscribe(this, this._connectionListener),
            this._realtimeProvider.onStatusChanged.subscribe(null, this._setPipValueType),
            s.linking.proSymbol.subscribe(this._setPipValueType),
            (this._brokerCommandsUI = new se(
              this._activeBroker,
              this._guiAccessor,
              this.noConfirmEnabled,
              this._getOrderViewController.bind(this),
              this.showErrorNotification.bind(this),
              this.trackEvent.bind(this)
            )),
            (this._closePositionDialogVisibilitySubscription =
              this._brokerCommandsUI.closePositionDialogVisibility.subscribe(
                this._makeDialogVisibilityHandler(this._closePositionDialogVisibility)
              )),
            e.tryRestoreSession(),
            await Vt.set(e.metainfo().id),
            this.onBrokerChange.fire(this._activeBroker),
            this._getOrderViewController(),
            this._updateConnectionStatus(this.connectStatus());
        }
        _makeDialogVisibilityHandler(e) {
          return (t) => {
            e.setValue(t), t.isFullScreen && this._onFullScreenDialogOpen();
          };
        }
        _gui() {
          return this._guiAccessor;
        }
        _addNotificationRow(e, t, i, r) {
          const s = {
            id: this._notifications.length,
            account: this._account,
            broker: this._activeBroker ? this._activeBroker.metainfo().id : null,
            time: new Date(),
            title: e,
            text: t,
            type: i,
          };
          this._notifications.push(s), this.onNewNotification.fire(s);
        }
        _offlineHandler() {
          this._selectBrokerInternal(null, !1, !1, { disconnectType: _.DisconnectType.Offline }),
            ai.logNormal('The connection to the Internet was interrupted');
        }
        async _onlineHandler() {
          (await this._selectLastBroker()) &&
            ai.logNormal('The connection to the Internet was restored');
        }
        _showNotification(e, t, i, r) {
          this._gui() && this._gui().showNotification(e, t, i, r);
        }
        _showReviewDialogIfNeeded(e, t) {
          if (null === this._activeBroker) return;
          this._activeBroker;
        }
        _connectionListener(e, t) {
          const i = this.connectStatus();
          this._showReviewDialogIfNeeded(e, t);
          const r = (this._isReconnectNeeded =
            (null == t ? void 0 : t.disconnectType) === _.DisconnectType.BrokenConnection);
          3 !== e ||
            ((null == t ? void 0 : t.disconnectType) !== _.DisconnectType.LogOut &&
              !this._isReconnectNeeded) ||
            this._selectBrokerInternal(null, !1, !1, t).then(() => {
              if (this._isReconnectNeeded) return this._tryReconnectLastBroker();
            }),
            (null == t ? void 0 : t.disconnectType) === _.DisconnectType.CancelAuthorization &&
              this.trackEvent('Signin', 'OAuth popup closed', 'By user'),
            (null == t ? void 0 : t.disconnectType) === _.DisconnectType.TimeOutForAuthorization &&
              this.trackEvent('Signin', 'OAuth popup closed', 'By timeout'),
            this._updateConnectionStatus(i, !r, t);
        }
        async _selectLastBroker() {
          const e = await Vt.get();
          return null !== e && (await this._selectBrokerInternal(e, !1), !0);
        }
        _updateOrderPanelSpinnerState() {
          const e = this._orderViewController,
            t = 2 === this.connectStatus(),
            i = null !== e && e.stateChanging.value();
          this.tradingPanel.isLoading.setValue(t || i);
        }
        async _updateConnectionStatus(e, t = !0, i) {
          var r;
          this._updateOrderPanelSpinnerState(),
            this.onConnectionStatusChange.fire(e, i),
            this._log('Connection status', li[e]);
          this._activeBroker;
          if (t) {
            const e = null === (r = this._activeBroker) || void 0 === r ? void 0 : r.metainfo().id;
            void 0 !== e ? await Vt.set(e) : Vt.clear();
          }
          this._activeBroker
            ? 1 === e
              ? ((this._account = this._activeBroker.currentAccount()),
                this._guiAccessor.setBroker(this._activeBroker))
              : null !== this._account &&
                this._activeBroker.currentAccountUpdate.unsubscribe(this, this._updateAccountId)
            : ((this._accountVerificationPromise = null), this._guiAccessor.setBroker(null));
        }
        _verifyLiveAccount() {
          if (null !== this._accountVerificationPromise) return;
          const e = (0, a.ensureNotNull)(this._activeBroker);
          e.metainfo().configFlags.supportVerifyLiveAccount &&
            (e.currentAccountType(), _.AccountType.Live);
        }
        _save() {
          const e = o.getJSON(L.settingsKeys.PROPERTIES, {});
          o.setJSON(L.settingsKeys.PROPERTIES, {
            ...e,
            [this._showSellBuyButtonsKey]: +!!this.showSellBuyButtons.value(),
            noConfirmEnabled: +!!this.noConfirmEnabled.value(),
            qweqrq: +!!this.showOnlyRejectionNotifications.value(),
            showPricesWithZeroVolume: +!!this._showPricesWithZeroVolume.value(),
            showSpread: +!!this._showSpread.value(),
            orderExecutedSoundParams: JSON.stringify({
              enabled: +!!this.orderExecutedSoundParams.enabled.value(),
              name: this.orderExecutedSoundParams.name,
            }),
          });
        }
        _loadState() {
          const e = o.getJSON(L.settingsKeys.PROPERTIES, {}),
            t = e[this._showSellBuyButtonsKey];
          if (
            (this.showSellBuyButtons.setValue(void 0 !== t ? !!t : hi),
            this.noConfirmEnabled.setValue(!!e.noConfirmEnabled),
            this.showOnlyRejectionNotifications.setValue(!!e.qweqrq),
            this._showPricesWithZeroVolume.setValue(
              !e.hasOwnProperty('showPricesWithZeroVolume') || e.showPricesWithZeroVolume
            ),
            this._showSpread.setValue(!e.hasOwnProperty('showSpread') || e.showSpread),
            e.hasOwnProperty('orderExecutedSoundParams'))
          ) {
            const t = JSON.parse(e.orderExecutedSoundParams);
            this.orderExecutedSoundParams.enabled.setValue(!!t.enabled),
              (this.orderExecutedSoundParams.name = t.name);
          }
        }
        _makeShowSellBuyButtonsKey() {
          return 'showSellBuyButtons';
        }
        _log(e, t) {
          ai.logNormal(
            `${
              this._activeBroker ? this._activeBroker.metainfo().id + ' Trading: ' : ''
            }${e} - ${t}`
          );
        }
        _makeSureCanTrade() {
          const e = this.activeBroker(),
            t = this.brokerCommandsUI();
          return e && t
            ? 1 === e.connectionStatus() || (this.toggleTradingWidget(), !1)
            : (this.toggleTradingWidget().then(() => this.onNeedSelectBroker.fire()), !1);
        }
        _checkAndPlaceOrder(e, t = !0) {
          this._makeSureCanTrade() &&
            (0, a.ensureNotNull)(this.brokerCommandsUI()).placeOrder(e, t);
        }
        _checkAndOpenOrderDialog(e) {
          this._makeSureCanTrade() && (0, a.ensureNotNull)(this.brokerCommandsUI()).placeOrder(e);
        }
        _makeSubAction(e, t, i, s, o, n) {
          const a = 1 === t ? ni : oi,
            l = 1 === t ? 'Buy' : 'Sell',
            c = 1 === i ? 'Limit' : 3 === i ? 'Stop' : 'StopLimit',
            u = (function (e) {
              return 'altPrice' in e && 'formattedAltPrice' in e;
            })(s),
            d = l + c,
            h = {
              BuyLimit: (0, r.t)('Buy {qty} {symbol} @ {value} limit').format({
                symbol: e.displaySymbol,
                qty: (0, w.abbreviatedNumber)(o),
                value: s.formattedPrice,
              }),
              SellStop: (0, r.t)('Sell {qty} {symbol} @ {value} stop').format({
                symbol: e.displaySymbol,
                qty: (0, w.abbreviatedNumber)(o),
                value: s.formattedPrice,
              }),
              SellLimit: (0, r.t)('Sell {qty} {symbol} @ {value} limit').format({
                symbol: e.displaySymbol,
                qty: (0, w.abbreviatedNumber)(o),
                value: s.formattedPrice,
              }),
              BuyStop: (0, r.t)('Buy {qty} {symbol} @ {value} stop').format({
                symbol: e.displaySymbol,
                qty: (0, w.abbreviatedNumber)(o),
                value: s.formattedPrice,
              }),
            };
          return (
            u &&
              ((h.SellStopLimit = (0, r.t)(
                'Sell {qty} {symbol} @ {value} stop {altValue} limit'
              ).format({
                symbol: e.displaySymbol,
                qty: (0, w.abbreviatedNumber)(o),
                value: s.formattedPrice,
                altValue: s.formattedAltPrice,
              })),
              (h.BuyStopLimit = (0, r.t)(
                'Buy {qty} {symbol} @ {value} stop {altValue} limit'
              ).format({
                symbol: e.displaySymbol,
                qty: (0, w.abbreviatedNumber)(o),
                value: s.formattedPrice,
                altValue: s.formattedAltPrice,
              }))),
            {
              name: `trade-${l}-${c}`.toLowerCase(),
              action: () => {
                this.trackEvent(n, `${l} ${c}`);
                const r = 1 === i ? 'limitPrice' : 'stopPrice',
                  a = { qty: o, side: t, symbol: e.symbol, type: i, seenPrice: null };
                null !== s.price && (a[r] = s.price),
                  4 === i && u && (a.limitPrice = s.altPrice),
                  this._checkAndPlaceOrder(a);
              },
              icon: a,
              text: h[d],
              statName: d,
            }
          );
        }
        _createOrderController() {
          return (
            null === this._orderControllerPromise &&
              (this._orderControllerPromise = Promise.all([i.e(8986), i.e(5038), i.e(660)])
                .then(i.bind(i, 43025))
                .then(
                  ({ OrderViewController: e }) =>
                    new e(
                      {
                        resizerBridge: this._resizerBridge,
                        onNeedSelectBroker: this.onNeedSelectBroker,
                        realtimeProvider: this.realtimeProvider(),
                        pipValueType: this.pipValueType(),
                        trackEvent: this.trackEvent.bind(this),
                        toggleTradingWidget: this.toggleTradingWidget.bind(this),
                        showErrorNotification: this.showErrorNotification.bind(this),
                        getTradingSettingsStorage: () => this._tradingSettingsStorage,
                      },
                      {
                        container: this.tradingPanel.container,
                        isOpened: this.tradingPanel.isOpened,
                        isVisible: this.tradingPanel.isVisible,
                        activePage: this.tradingPanel.activePage,
                        close: this.tradingPanel.close.bind(this.tradingPanel),
                        openPage: this.tradingPanel.openPage.bind(this.tradingPanel),
                      },
                      this._qtySuggester
                    )
                )
                .then((e) => {
                  (this._orderControllerPromise = null),
                    (this._orderViewController = e),
                    this._orderViewController.stateChanging.subscribe(() =>
                      this._updateOrderPanelSpinnerState()
                    ),
                    this._orderViewController.visibility.subscribe(
                      this._makeDialogVisibilityHandler(this._orderDialogVisibility)
                    );
                })),
            this._orderControllerPromise
          );
        }
        async _registerCustomSources(e) {
          !(async function (e, t) {
            const r = await i.e(2650).then(i.bind(i, 37));
            e.addCustomSource(
              'bidask',
              (i, s) =>
                new r.BidAsk(i, s, t.realtimeProvider(), () => {
                  e.activeChartWidget.value().showGeneralChartProperties(T.TabNames.symbol);
                })
            );
          })(e, this),
            Ne(e, this, this.showTradedSources);
          new (await i.e(2650).then(i.bind(i, 8289))).TradedSourcesManager(
            this._ordersService,
            this._positionService,
            e,
            {
              showTradedSources: this.showTradedSources,
              realtimeProvider: this._realtimeProvider,
              brokerCommandsUI: this.brokerCommandsUI.bind(this),
              trackEvent: this.trackEvent.bind(this),
              pipValueType: this._pipValueType,
            }
          );
        }
        _registerCustomWidgets(e) {
          di &&
            (function (e, t, i) {
              e.addCustomWidgetToLegend(
                (e, r) => {
                  const s = e.mainSeries();
                  return new wt(
                    s.dataEvents(),
                    (function (e) {
                      return () => {
                        const t = e.symbolInfo();
                        return null !== t
                          ? t.pro_name || t.full_name || t.name || ''
                          : e.proSymbol();
                      };
                    })(s),
                    i,
                    {
                      onNeedSelectBroker: t.onNeedSelectBroker,
                      realtimeProvider: t.realtimeProvider(),
                      onBrokerConnectionStatusChange: t.onConnectionStatusChange,
                      brokerConnectionStatus: t.connectStatus.bind(t),
                      trackEvent: t.trackEvent.bind(t),
                      toggleTradingWidget: t.toggleTradingWidget.bind(t),
                      toggleTradingPanelPopup: t.toggleTradingPanelPopup.bind(t),
                      brokerCommandsUI: t.brokerCommandsUI.bind(t),
                      toggleMinimizeBottomWidgetBar: () => t.toggleMinimizeBottomWidgetBar(),
                    },
                    {
                      showSellBuyButtons: t.showSellBuyButtons,
                      noConfirmEnabled: t.noConfirmEnabled,
                      themeName: r,
                    }
                  );
                },
                { block: 0, position: 0 }
              );
            })(e, this, this._qtySuggester);
        }
        async _makeSubActions(e, t, i, r) {
          const s = [];
          if (null === e.value) return s;
          const o = this.activeBroker();
          let n,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            _,
            m,
            f,
            y,
            v,
            w = null === o,
            k = null === o,
            S = null === o,
            P = null === o;
          null !== o && 1 === o.connectionStatus() && (v = await o.isTradable(e.symbol));
          const [C, B] = await Promise.all([
            this._realtimeProvider.symbolInfo(e.symbol),
            this._realtimeProvider.formatter(e.symbol),
          ]);
          if (null !== o && v && v.tradable) {
            const t = o.metainfo().configFlags,
              i = (0, g.alignToStep)(e.value, C.minTick);
            (n = i),
              (l = i),
              (c = i),
              (a = i),
              (u = c + C.minTick),
              (d = a - C.minTick),
              (w = Boolean(t.supportLimitOrders)),
              (k = Boolean(t.supportStopOrders)),
              (S = Boolean(t.supportStopOrdersInBothDirectionsInUI)),
              (P = Boolean(t.supportStopLimitOrders)),
              void 0 !== C.limitPriceStep &&
                ((n = (0, b.roundToStepByPriceTypeAndSide)(e.value, C.limitPriceStep, 1, 1)),
                (l = (0, b.roundToStepByPriceTypeAndSide)(e.value, C.limitPriceStep, 1, -1)),
                (u = (0, b.roundToStepByPriceTypeAndSide)(
                  e.value + C.minTick,
                  C.limitPriceStep,
                  1,
                  1
                )),
                (d = (0, b.roundToStepByPriceTypeAndSide)(
                  e.value - C.minTick,
                  C.limitPriceStep,
                  1,
                  -1
                ))),
              void 0 !== C.stopPriceStep &&
                ((c = (0, b.roundToStepByPriceTypeAndSide)(e.value, C.stopPriceStep, 2, 1)),
                (a = (0, b.roundToStepByPriceTypeAndSide)(e.value, C.stopPriceStep, 2, -1))),
              (h = B.format(n)),
              (p = B.format(a)),
              (_ = B.format(l)),
              (m = B.format(c)),
              (f = B.format(u)),
              (y = B.format(d));
          } else
            (n = l = c = a = e.value),
              (h = p = _ = m = e.formattedValue),
              (u = c + C.minTick),
              (d = a - C.minTick),
              (f = B.format(u)),
              (y = B.format(d));
          if (e.value <= i) {
            if (w) {
              const i = { price: n, formattedPrice: h };
              s.push(this._makeSubAction(e, 1, 1, i, t, r));
            }
            if (S) {
              const i = { price: c, formattedPrice: m };
              s.push(this._makeSubAction(e, 1, 3, i, t, r));
            }
            if (k || S) {
              const i = { price: a, formattedPrice: p };
              s.push(this._makeSubAction(e, -1, 3, i, t, r));
            }
            if (P) {
              const i = { price: a, formattedPrice: p, altPrice: d, formattedAltPrice: y };
              s.push(this._makeSubAction(e, -1, 4, i, t, r));
            }
          } else {
            if (w) {
              const i = { price: l, formattedPrice: _ };
              s.push(this._makeSubAction(e, -1, 1, i, t, r));
            }
            if (S) {
              const i = { price: a, formattedPrice: p };
              s.push(this._makeSubAction(e, -1, 3, i, t, r));
            }
            if (k || S) {
              const i = { price: c, formattedPrice: m };
              s.push(this._makeSubAction(e, 1, 3, i, t, r));
            }
            if (P) {
              const i = { price: c, formattedPrice: m, altPrice: u, formattedAltPrice: f };
              s.push(this._makeSubAction(e, 1, 4, i, t, r));
            }
          }
          return s;
        }
        _initPaidBrokersByUserRegion() {
          this._brokersListPromise = fetch('/api/v1/brokers/trading_panel', { method: 'GET' })
            .then((e) => e.json())
            .catch((e) => {
              ai.logWarn('Failed to fetch brokers info: ' + e);
            });
        }
        async _getBrokerPlans() {
          let e = [];
          try {
            if (((e = await this._brokersListPromise), !Array.isArray(e)))
              throw new Error('Request result is not valid');
          } catch (e) {
            ai.logError('Failed to fetch broker list by user region: ' + e.message);
          }
          return e;
        }
        async _checkCQGCredentials(e) {}
        _showSupportDialog(e) {
          e in ci
            ? showSupportDialog({ initialState: SolutionCategoryName.Trading, solutionId: ci[e] })
            : showSupportDialog({ initialState: SolutionCategoryName.Trading });
        }
        async _showRestoreConfirmations() {
          const e = await (0, Te.showSimpleConfirmDialog)({
            title: (0, r.t)('Restore confirmations'),
            text: (0, r.t)(
              "Are you confirming you'd like to restore order confirmations, which you've previously disabled?"
            ),
            mainButtonIntent: 'primary',
          });
          null !== this._activeBroker && e && new xt.DisabledConfirmations().clear();
        }
        _logOut(e, t, i) {
          const r = (0, a.ensureNotNull)(this._activeBroker);
          r.connectionStatusUpdate.unsubscribe(this, this._connectionListener),
            this._realtimeProvider.onStatusChanged.unsubscribe(null, this._setPipValueType),
            s.linking.proSymbol.unsubscribe(this._setPipValueType),
            r.disconnect(t || !e),
            r.destroy(),
            (this._activeBroker = null),
            this._updateConnectionStatus(3, e, i);
        }
        async _createTradedItemsChartCollectionFacade(e) {
          return new (await i.e(2650).then(i.bind(i, 42859))).TradedItemsChartCollectionFacade(e);
        }
      }
    },
    87915: (e, t, i) => {
      'use strict';
      i.d(t, {
        bottomTradingTabClassName: () => c,
        orderStatusToText: () => l.orderStatusToText,
        brokersListFromPlans: () => h,
        isOAuthAuthType: () => _,
        executionText: () => g,
        convertActionDescriptionsToActions: () => b,
        isOrderActive: () => m,
        makeBrokerSideMaintananceFeatureToggleName: () => f,
        makeMaintananceFeatureToggleName: () => y,
        getCurrency: () => v,
        isModifyOrderSupported: () => k,
        isMoveOrderSupported: () => S,
        isBatsQuotes: () => P,
        isDefined: () => C,
        alignToStep: () => B,
      });
      var r = i(93302),
        s = i.n(r),
        o = i(16282),
        n = i(33375),
        a = i(5251),
        l = i(40160);
      const c = 'js-bottom-trading-tab';
      const u = ['Paper'];
      function d(e) {
        return e.findIndex(
          (e) =>
            e.brokerPlan &&
            !e.brokerPlan.hidden &&
            e.brokerPlan.flags &&
            e.brokerPlan.flags.includes('featured')
        );
      }
      function h(e, t) {
        const i = e.map((e) => e.id),
          r = t.map((e) => e.slug_name),
          s = t
            .filter((e) => i.includes(e.slug_name))
            .map((t) => ({ metainfo: p(e, t.slug_name), brokerPlan: t })),
          o = e.filter((e) => !r.includes(e.id) && !u.includes(e.id)).map((e) => ({ metainfo: e })),
          n = d(s),
          a = u.map((t) => ({ metainfo: p(e, t) }));
        return a.length > 0 && s.splice(n + 1, 0, ...a), [...s, ...o];
      }
      function p(e, t) {
        return (0, o.ensureDefined)(e.find((e) => e.id.toLowerCase() === t.toLowerCase()));
      }
      function _(e) {
        return void 0 !== e && ['oauth', 'oauth2-implicit-flow', 'oauth2-code-flow'].includes(e);
      }
      function g(e, t) {
        const i = (0, l.sideToText)(e.side) + ' ' + e.qty + ' @ ' + t.format(e.price);
        return i.substring(0, 1).toUpperCase() + i.substring(1).toLowerCase();
      }
      function b(e) {
        return e
          ? e.map((e) =>
              '-' === e.text || e.separator
                ? new a.Separator()
                : new a.Action({
                    actionId: 'Trading.CustomActionId',
                    name: e.name,
                    checkable: e.checkable,
                    checked: e.checked,
                    disabled: void 0 !== e.enabled && !e.enabled,
                    label: e.text,
                    statName: e.statName,
                    icon: e.icon,
                    onExecute: (t) => {
                      const i = t.getState();
                      e.action({
                        checkable: i.checkable,
                        checked: i.checked,
                        enabled: !i.disabled,
                        text: i.label,
                      });
                    },
                  })
            )
          : [];
      }
      function m(e) {
        return 6 === e || 3 === e;
      }
      function f(e) {
        return (e + '-brokers-side-maintenance').toLowerCase();
      }
      function y(e) {
        return (e + '-maintenance').toLowerCase();
      }
      function v(e, t) {
        return (!t && e.currencySign) || e.currency || '';
      }
      function w(e, t) {
        return Boolean(
          void 0 !== e.parentId &&
            t.supportModifyBrackets &&
            ((t.supportTrailingStop && t.supportModifyTrailingStop) ||
              e.stopType !== n.StopType.TrailingStop)
        );
      }
      function k(e, t) {
        const i =
            void 0 === e.parentId &&
            (t.supportModifyOrderPrice || t.supportEditAmount || t.supportModifyBrackets),
          r = w(e, t);
        return Boolean(i || r);
      }
      function S(e, t) {
        const i = void 0 === e.parentId && t.supportModifyOrderPrice,
          r = w(e, t);
        return Boolean(i || r);
      }
      function P(e) {
        var t;
        return (
          'BATS' === (null === (t = e.originalName) || void 0 === t ? void 0 : t.split(':')[0])
        );
      }
      function C(e) {
        return null != e;
      }
      function B(e, t) {
        return s()(e).div(t).round(0, 1).mul(t).toNumber();
      }
    },
    14032: (e, t, i) => {
      'use strict';
      i.d(t, { abbreviatedNumber: () => o });
      var r = i(6766);
      const s = ['', 'K', 'M', 'G', 'T', 'Y'];
      function o(e) {
        if (e < 1) return r.NumericFormatter.formatNoE(e);
        let t = 0,
          i = +e;
        if (isFinite(i)) for (; i >= 1e3 && i % 100 == 0; ) t++, (i /= 1e3);
        return i + (t < s.length ? s[t] : 'e' + 3 * t);
      }
    },
    98162: (e, t, i) => {
      'use strict';
      function r(e) {
        let t = Promise.resolve();
        return function (...i) {
          const r = t.then(() => e.apply(this, i));
          return (t = r.catch(() => {})), r;
        };
      }
      i.d(t, { sequentialize: () => r });
    },
    93208: (e, t, i) => {
      'use strict';
      function r(e, t) {
        null === e.firstChild ? (e.textContent = t) : (e.firstChild.nodeValue = t);
      }
      i.d(t, { updateTextNode: () => r });
    },
    79225: (e, t, i) => {
      'use strict';
      i.d(t, { Spinner: () => n });
      var r = i(67294),
        s = i(94184),
        o = i(30722);
      i(11739);
      function n(e) {
        const t = s(
          e.className,
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + o.spinnerSizeMap[e.size || o.DEFAULT_SIZE]
        );
        return r.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          r.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            r.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            })
          )
        );
      }
    },
    47368: (e, t, i) => {
      'use strict';
      var r, s;
      i.d(t, { ToastAnimationStage: () => r, ToastPriority: () => s }),
        (function (e) {
          (e[(e.Add = 0)] = 'Add'), (e[(e.Remove = 1)] = 'Remove'), (e[(e.None = 2)] = 'None');
        })(r || (r = {})),
        (function (e) {
          (e[(e.Low = 0)] = 'Low'), (e[(e.Medium = 1)] = 'Medium'), (e[(e.High = 2)] = 'High');
        })(s || (s = {}));
    },
    86515: (e, t, i) => {
      'use strict';
      i.d(t, { BehaviorSubject: () => s });
      var r = i(35987),
        s = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (i._value = t), i;
          }
          return (
            (0, r.__extends)(t, e),
            Object.defineProperty(t.prototype, 'value', {
              get: function () {
                return this.getValue();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype._subscribe = function (t) {
              var i = e.prototype._subscribe.call(this, t);
              return !i.closed && t.next(this._value), i;
            }),
            (t.prototype.getValue = function () {
              var e = this.hasError,
                t = this.thrownError,
                i = this._value;
              if (e) throw t;
              return this._throwIfClosed(), i;
            }),
            (t.prototype.next = function (t) {
              e.prototype.next.call(this, (this._value = t));
            }),
            t
          );
        })(i(16716).Subject);
    },
    81480: (e, t, i) => {
      'use strict';
      i.d(t, { Observable: () => d });
      var r = i(26267),
        s = i(35720),
        o = i(46766),
        n = i(90278);
      function a(e) {
        return 0 === e.length
          ? n.identity
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var l = i(53912),
        c = i(58474),
        u = i(68846),
        d = (function () {
          function e(e) {
            e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var i = new e();
              return (i.source = this), (i.operator = t), i;
            }),
            (e.prototype.subscribe = function (e, t, i) {
              var o,
                n = this,
                a =
                  ((o = e) && o instanceof r.Subscriber) ||
                  ((function (e) {
                    return (
                      e &&
                      (0, c.isFunction)(e.next) &&
                      (0, c.isFunction)(e.error) &&
                      (0, c.isFunction)(e.complete)
                    );
                  })(o) &&
                    (0, s.isSubscription)(o))
                    ? e
                    : new r.SafeSubscriber(e, t, i);
              return (
                (0, u.errorContext)(function () {
                  var e = n,
                    t = e.operator,
                    i = e.source;
                  a.add(t ? t.call(a, i) : i ? n._subscribe(a) : n._trySubscribe(a));
                }),
                a
              );
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                e.error(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var i = this;
              return new (t = h(t))(function (t, r) {
                var s;
                s = i.subscribe(
                  function (t) {
                    try {
                      e(t);
                    } catch (e) {
                      r(e), null == s || s.unsubscribe();
                    }
                  },
                  r,
                  t
                );
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t;
              return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e);
            }),
            (e.prototype[o.observable] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              return a(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = h(e))(function (e, i) {
                var r;
                t.subscribe(
                  function (e) {
                    return (r = e);
                  },
                  function (e) {
                    return i(e);
                  },
                  function () {
                    return e(r);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function h(e) {
        var t;
        return null !== (t = null != e ? e : l.config.Promise) && void 0 !== t ? t : Promise;
      }
    },
    48346: (e, t, i) => {
      'use strict';
      i.d(t, { ReplaySubject: () => n });
      var r = i(35987),
        s = i(16716),
        o = {
          now: function () {
            return (o.delegate || Date).now();
          },
          delegate: void 0,
        },
        n = (function (e) {
          function t(t, i, r) {
            void 0 === t && (t = 1 / 0), void 0 === i && (i = 1 / 0), void 0 === r && (r = o);
            var s = e.call(this) || this;
            return (
              (s._bufferSize = t),
              (s._windowTime = i),
              (s._timestampProvider = r),
              (s._buffer = []),
              (s._infiniteTimeWindow = !0),
              (s._infiniteTimeWindow = i === 1 / 0),
              (s._bufferSize = Math.max(1, t)),
              (s._windowTime = Math.max(1, i)),
              s
            );
          }
          return (
            (0, r.__extends)(t, e),
            (t.prototype.next = function (t) {
              var i = this,
                r = i.isStopped,
                s = i._buffer,
                o = i._infiniteTimeWindow,
                n = i._timestampProvider,
                a = i._windowTime;
              r || (s.push(t), !o && s.push(n.now() + a)),
                this._trimBuffer(),
                e.prototype.next.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              this._throwIfClosed(), this._trimBuffer();
              for (
                var t = this._innerSubscribe(e),
                  i = this._infiniteTimeWindow,
                  r = this._buffer.slice(),
                  s = 0;
                s < r.length && !e.closed;
                s += i ? 1 : 2
              )
                e.next(r[s]);
              return this._checkFinalizedStatuses(e), t;
            }),
            (t.prototype._trimBuffer = function () {
              var e = this._bufferSize,
                t = this._timestampProvider,
                i = this._buffer,
                r = this._infiniteTimeWindow,
                s = (r ? 1 : 2) * e;
              if ((e < 1 / 0 && s < i.length && i.splice(0, i.length - s), !r)) {
                for (var o = t.now(), n = 0, a = 1; a < i.length && i[a] <= o; a += 2) n = a;
                n && i.splice(0, n + 1);
              }
            }),
            t
          );
        })(s.Subject);
    },
    16716: (e, t, i) => {
      'use strict';
      i.d(t, { Subject: () => c });
      var r = i(35987),
        s = i(81480),
        o = i(35720),
        n = (0, i(1819).createErrorClass)(function (e) {
          return function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          };
        }),
        a = i(3699),
        l = i(68846),
        c = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.closed = !1),
              (t.observers = []),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            (0, r.__extends)(t, e),
            (t.prototype.lift = function (e) {
              var t = new u(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype._throwIfClosed = function () {
              if (this.closed) throw new n();
            }),
            (t.prototype.next = function (e) {
              var t = this;
              (0, l.errorContext)(function () {
                var i, s;
                if ((t._throwIfClosed(), !t.isStopped)) {
                  var o = t.observers.slice();
                  try {
                    for (var n = (0, r.__values)(o), a = n.next(); !a.done; a = n.next()) {
                      a.value.next(e);
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      a && !a.done && (s = n.return) && s.call(n);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                }
              });
            }),
            (t.prototype.error = function (e) {
              var t = this;
              (0, l.errorContext)(function () {
                if ((t._throwIfClosed(), !t.isStopped)) {
                  (t.hasError = t.isStopped = !0), (t.thrownError = e);
                  for (var i = t.observers; i.length; ) i.shift().error(e);
                }
              });
            }),
            (t.prototype.complete = function () {
              var e = this;
              (0, l.errorContext)(function () {
                if ((e._throwIfClosed(), !e.isStopped)) {
                  e.isStopped = !0;
                  for (var t = e.observers; t.length; ) t.shift().complete();
                }
              });
            }),
            (t.prototype.unsubscribe = function () {
              (this.isStopped = this.closed = !0), (this.observers = null);
            }),
            Object.defineProperty(t.prototype, 'observed', {
              get: function () {
                var e;
                return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype._trySubscribe = function (t) {
              return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              return (
                this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
              );
            }),
            (t.prototype._innerSubscribe = function (e) {
              var t = this.hasError,
                i = this.isStopped,
                r = this.observers;
              return t || i
                ? o.EMPTY_SUBSCRIPTION
                : (r.push(e),
                  new o.Subscription(function () {
                    return (0, a.arrRemove)(r, e);
                  }));
            }),
            (t.prototype._checkFinalizedStatuses = function (e) {
              var t = this.hasError,
                i = this.thrownError,
                r = this.isStopped;
              t ? e.error(i) : r && e.complete();
            }),
            (t.prototype.asObservable = function () {
              var e = new s.Observable();
              return (e.source = this), e;
            }),
            (t.create = function (e, t) {
              return new u(e, t);
            }),
            t
          );
        })(s.Observable),
        u = (function (e) {
          function t(t, i) {
            var r = e.call(this) || this;
            return (r.destination = t), (r.source = i), r;
          }
          return (
            (0, r.__extends)(t, e),
            (t.prototype.next = function (e) {
              var t, i;
              null === (i = null === (t = this.destination) || void 0 === t ? void 0 : t.next) ||
                void 0 === i ||
                i.call(t, e);
            }),
            (t.prototype.error = function (e) {
              var t, i;
              null === (i = null === (t = this.destination) || void 0 === t ? void 0 : t.error) ||
                void 0 === i ||
                i.call(t, e);
            }),
            (t.prototype.complete = function () {
              var e, t;
              null ===
                (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) ||
                void 0 === t ||
                t.call(e);
            }),
            (t.prototype._subscribe = function (e) {
              var t, i;
              return null !==
                (i = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) &&
                void 0 !== i
                ? i
                : o.EMPTY_SUBSCRIPTION;
            }),
            t
          );
        })(c);
    },
    26267: (e, t, i) => {
      'use strict';
      i.d(t, { SafeSubscriber: () => _, Subscriber: () => p });
      var r = i(35987),
        s = i(58474),
        o = i(35720),
        n = i(53912),
        a = i(40005),
        l = i(22967),
        c = u('C', void 0, void 0);
      function u(e, t, i) {
        return { kind: e, value: t, error: i };
      }
      var d = i(68380),
        h = i(68846),
        p = (function (e) {
          function t(t) {
            var i = e.call(this) || this;
            return (
              (i.isStopped = !1),
              t ? ((i.destination = t), (0, o.isSubscription)(t) && t.add(i)) : (i.destination = f),
              i
            );
          }
          return (
            (0, r.__extends)(t, e),
            (t.create = function (e, t, i) {
              return new _(e, t, i);
            }),
            (t.prototype.next = function (e) {
              this.isStopped
                ? m(
                    (function (e) {
                      return u('N', e, void 0);
                    })(e),
                    this
                  )
                : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped ? m(u('E', void 0, e), this) : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped ? m(c, this) : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(o.Subscription),
        _ = (function (e) {
          function t(t, i, r) {
            var o,
              a = e.call(this) || this;
            if ((0, s.isFunction)(t)) o = t;
            else if (t) {
              var c;
              (o = t.next),
                (i = t.error),
                (r = t.complete),
                a && n.config.useDeprecatedNextContext
                  ? ((c = Object.create(t)).unsubscribe = function () {
                      return a.unsubscribe();
                    })
                  : (c = t),
                (o = null == o ? void 0 : o.bind(c)),
                (i = null == i ? void 0 : i.bind(c)),
                (r = null == r ? void 0 : r.bind(c));
            }
            return (
              (a.destination = {
                next: o ? g(o, a) : l.noop,
                error: g(null != i ? i : b, a),
                complete: r ? g(r, a) : l.noop,
              }),
              a
            );
          }
          return (0, r.__extends)(t, e), t;
        })(p);
      function g(e, t) {
        return function () {
          for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
          try {
            e.apply(void 0, (0, r.__spreadArray)([], (0, r.__read)(t), !1));
          } catch (e) {
            n.config.useDeprecatedSynchronousErrorHandling
              ? (0, h.captureError)(e)
              : (0, a.reportUnhandledError)(e);
          }
        };
      }
      function b(e) {
        throw e;
      }
      function m(e, t) {
        var i = n.config.onStoppedNotification;
        i &&
          d.timeoutProvider.setTimeout(function () {
            return i(e, t);
          });
      }
      var f = { closed: !0, next: l.noop, error: b, complete: l.noop };
    },
    35720: (e, t, i) => {
      'use strict';
      i.d(t, { EMPTY_SUBSCRIPTION: () => l, Subscription: () => a, isSubscription: () => c });
      var r = i(35987),
        s = i(58474),
        o = (0, i(1819).createErrorClass)(function (e) {
          return function (t) {
            e(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (e, t) {
                      return t + 1 + ') ' + e.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t);
          };
        }),
        n = i(3699),
        a = (function () {
          function e(e) {
            (this.initialTeardown = e),
              (this.closed = !1),
              (this._parentage = null),
              (this._teardowns = null);
          }
          var t;
          return (
            (e.prototype.unsubscribe = function () {
              var e, t, i, n, a;
              if (!this.closed) {
                this.closed = !0;
                var l = this._parentage;
                if (l)
                  if (((this._parentage = null), Array.isArray(l)))
                    try {
                      for (var c = (0, r.__values)(l), d = c.next(); !d.done; d = c.next()) {
                        d.value.remove(this);
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        d && !d.done && (t = c.return) && t.call(c);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  else l.remove(this);
                var h = this.initialTeardown;
                if ((0, s.isFunction)(h))
                  try {
                    h();
                  } catch (e) {
                    a = e instanceof o ? e.errors : [e];
                  }
                var p = this._teardowns;
                if (p) {
                  this._teardowns = null;
                  try {
                    for (var _ = (0, r.__values)(p), g = _.next(); !g.done; g = _.next()) {
                      var b = g.value;
                      try {
                        u(b);
                      } catch (e) {
                        (a = null != a ? a : []),
                          e instanceof o
                            ? (a = (0, r.__spreadArray)(
                                (0, r.__spreadArray)([], (0, r.__read)(a), !1),
                                (0, r.__read)(e.errors),
                                !1
                              ))
                            : a.push(e);
                      }
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      g && !g.done && (n = _.return) && n.call(_);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                }
                if (a) throw new o(a);
              }
            }),
            (e.prototype.add = function (t) {
              var i;
              if (t && t !== this)
                if (this.closed) u(t);
                else {
                  if (t instanceof e) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this);
                  }
                  (this._teardowns = null !== (i = this._teardowns) && void 0 !== i ? i : []).push(
                    t
                  );
                }
            }),
            (e.prototype._hasParent = function (e) {
              var t = this._parentage;
              return t === e || (Array.isArray(t) && t.includes(e));
            }),
            (e.prototype._addParent = function (e) {
              var t = this._parentage;
              this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
            }),
            (e.prototype._removeParent = function (e) {
              var t = this._parentage;
              t === e ? (this._parentage = null) : Array.isArray(t) && (0, n.arrRemove)(t, e);
            }),
            (e.prototype.remove = function (t) {
              var i = this._teardowns;
              i && (0, n.arrRemove)(i, t), t instanceof e && t._removeParent(this);
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
        })(),
        l = a.EMPTY;
      function c(e) {
        return (
          e instanceof a ||
          (e &&
            'closed' in e &&
            (0, s.isFunction)(e.remove) &&
            (0, s.isFunction)(e.add) &&
            (0, s.isFunction)(e.unsubscribe))
        );
      }
      function u(e) {
        (0, s.isFunction)(e) ? e() : e.unsubscribe();
      }
    },
    53912: (e, t, i) => {
      'use strict';
      i.d(t, { config: () => r });
      var r = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    1545: (e, t, i) => {
      'use strict';
      i.d(t, { EMPTY: () => r });
      var r = new (i(81480).Observable)(function (e) {
        return e.complete();
      });
    },
    11954: (e, t, i) => {
      'use strict';
      i.d(t, { from: () => w });
      var r = i(87878),
        s = i(47845),
        o = i(96798),
        n = i(2566);
      function a(e, t) {
        return (
          void 0 === t && (t = 0),
          (0, o.operate)(function (i, r) {
            i.subscribe(
              new n.OperatorSubscriber(
                r,
                function (i) {
                  return (0, s.executeSchedule)(
                    r,
                    e,
                    function () {
                      return r.next(i);
                    },
                    t
                  );
                },
                function () {
                  return (0, s.executeSchedule)(
                    r,
                    e,
                    function () {
                      return r.complete();
                    },
                    t
                  );
                },
                function (i) {
                  return (0, s.executeSchedule)(
                    r,
                    e,
                    function () {
                      return r.error(i);
                    },
                    t
                  );
                }
              )
            );
          })
        );
      }
      function l(e, t) {
        return (
          void 0 === t && (t = 0),
          (0, o.operate)(function (i, r) {
            r.add(
              e.schedule(function () {
                return i.subscribe(r);
              }, t)
            );
          })
        );
      }
      var c = i(81480);
      var u = i(39768),
        d = i(58474);
      function h(e, t) {
        if (!e) throw new Error('Iterable cannot be null');
        return new c.Observable(function (i) {
          (0, s.executeSchedule)(i, t, function () {
            var r = e[Symbol.asyncIterator]();
            (0, s.executeSchedule)(
              i,
              t,
              function () {
                r.next().then(function (e) {
                  e.done ? i.complete() : i.next(e.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var p = i(71764),
        _ = i(53841),
        g = i(45685),
        b = i(1837),
        m = i(58430),
        f = i(88729),
        y = i(48671);
      function v(e, t) {
        if (null != e) {
          if ((0, p.isInteropObservable)(e))
            return (function (e, t) {
              return (0, r.innerFrom)(e).pipe(l(t), a(t));
            })(e, t);
          if ((0, g.isArrayLike)(e))
            return (function (e, t) {
              return new c.Observable(function (i) {
                var r = 0;
                return t.schedule(function () {
                  r === e.length ? i.complete() : (i.next(e[r++]), i.closed || this.schedule());
                });
              });
            })(e, t);
          if ((0, _.isPromise)(e))
            return (function (e, t) {
              return (0, r.innerFrom)(e).pipe(l(t), a(t));
            })(e, t);
          if ((0, m.isAsyncIterable)(e)) return h(e, t);
          if ((0, b.isIterable)(e))
            return (function (e, t) {
              return new c.Observable(function (i) {
                var r;
                return (
                  (0, s.executeSchedule)(i, t, function () {
                    (r = e[u.iterator]()),
                      (0, s.executeSchedule)(
                        i,
                        t,
                        function () {
                          var e, t, s;
                          try {
                            (t = (e = r.next()).value), (s = e.done);
                          } catch (e) {
                            return void i.error(e);
                          }
                          s ? i.complete() : i.next(t);
                        },
                        0,
                        !0
                      );
                  }),
                  function () {
                    return (0, d.isFunction)(null == r ? void 0 : r.return) && r.return();
                  }
                );
              });
            })(e, t);
          if ((0, y.isReadableStreamLike)(e))
            return (function (e, t) {
              return h((0, y.readableStreamLikeToAsyncGenerator)(e), t);
            })(e, t);
        }
        throw (0, f.createInvalidObservableTypeError)(e);
      }
      function w(e, t) {
        return t ? v(e, t) : (0, r.innerFrom)(e);
      }
    },
    87878: (e, t, i) => {
      'use strict';
      i.d(t, { innerFrom: () => g });
      var r = i(35987),
        s = i(45685),
        o = i(53841),
        n = i(81480),
        a = i(71764),
        l = i(58430),
        c = i(88729),
        u = i(1837),
        d = i(48671),
        h = i(58474),
        p = i(40005),
        _ = i(46766);
      function g(e) {
        if (e instanceof n.Observable) return e;
        if (null != e) {
          if ((0, a.isInteropObservable)(e))
            return (
              (f = e),
              new n.Observable(function (e) {
                var t = f[_.observable]();
                if ((0, h.isFunction)(t.subscribe)) return t.subscribe(e);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              })
            );
          if ((0, s.isArrayLike)(e))
            return (
              (m = e),
              new n.Observable(function (e) {
                for (var t = 0; t < m.length && !e.closed; t++) e.next(m[t]);
                e.complete();
              })
            );
          if ((0, o.isPromise)(e))
            return (
              (g = e),
              new n.Observable(function (e) {
                g.then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                ).then(null, p.reportUnhandledError);
              })
            );
          if ((0, l.isAsyncIterable)(e)) return b(e);
          if ((0, u.isIterable)(e))
            return (
              (i = e),
              new n.Observable(function (e) {
                var t, s;
                try {
                  for (var o = (0, r.__values)(i), n = o.next(); !n.done; n = o.next()) {
                    var a = n.value;
                    if ((e.next(a), e.closed)) return;
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (s = o.return) && s.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                e.complete();
              })
            );
          if ((0, d.isReadableStreamLike)(e))
            return (t = e), b((0, d.readableStreamLikeToAsyncGenerator)(t));
        }
        var t, i, g, m, f;
        throw (0, c.createInvalidObservableTypeError)(e);
      }
      function b(e) {
        return new n.Observable(function (t) {
          (function (e, t) {
            var i, s, o, n;
            return (0, r.__awaiter)(this, void 0, void 0, function () {
              var a, l;
              return (0, r.__generator)(this, function (c) {
                switch (c.label) {
                  case 0:
                    c.trys.push([0, 5, 6, 11]), (i = (0, r.__asyncValues)(e)), (c.label = 1);
                  case 1:
                    return [4, i.next()];
                  case 2:
                    if ((s = c.sent()).done) return [3, 4];
                    if (((a = s.value), t.next(a), t.closed)) return [2];
                    c.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (l = c.sent()), (o = { error: l }), [3, 11];
                  case 6:
                    return (
                      c.trys.push([6, , 9, 10]),
                      s && !s.done && (n = i.return) ? [4, n.call(i)] : [3, 8]
                    );
                  case 7:
                    c.sent(), (c.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (o) throw o.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
    },
    2566: (e, t, i) => {
      'use strict';
      i.d(t, { OperatorSubscriber: () => s });
      var r = i(35987),
        s = (function (e) {
          function t(t, i, r, s, o) {
            var n = e.call(this, t) || this;
            return (
              (n.onFinalize = o),
              (n._next = i
                ? function (e) {
                    try {
                      i(e);
                    } catch (e) {
                      t.error(e);
                    }
                  }
                : e.prototype._next),
              (n._error = s
                ? function (e) {
                    try {
                      s(e);
                    } catch (e) {
                      t.error(e);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                : e.prototype._error),
              (n._complete = r
                ? function () {
                    try {
                      r();
                    } catch (e) {
                      t.error(e);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                : e.prototype._complete),
              n
            );
          }
          return (
            (0, r.__extends)(t, e),
            (t.prototype.unsubscribe = function () {
              var t,
                i = this.closed;
              e.prototype.unsubscribe.call(this),
                !i && (null === (t = this.onFinalize) || void 0 === t || t.call(this));
            }),
            t
          );
        })(i(26267).Subscriber);
    },
    53741: (e, t, i) => {
      'use strict';
      i.d(t, { distinctUntilChanged: () => n });
      var r = i(90278),
        s = i(96798),
        o = i(2566);
      function n(e, t) {
        return (
          void 0 === t && (t = r.identity),
          (e = null != e ? e : a),
          (0, s.operate)(function (i, r) {
            var s,
              n = !0;
            i.subscribe(
              new o.OperatorSubscriber(r, function (i) {
                var o = t(i);
                (!n && e(s, o)) || ((n = !1), (s = o), r.next(i));
              })
            );
          })
        );
      }
      function a(e, t) {
        return e === t;
      }
    },
    94975: (e, t, i) => {
      'use strict';
      i.d(t, { filter: () => o });
      var r = i(96798),
        s = i(2566);
      function o(e, t) {
        return (0, r.operate)(function (i, r) {
          var o = 0;
          i.subscribe(
            new s.OperatorSubscriber(r, function (i) {
              return e.call(t, i, o++) && r.next(i);
            })
          );
        });
      }
    },
    29127: (e, t, i) => {
      'use strict';
      i.d(t, { map: () => o });
      var r = i(96798),
        s = i(2566);
      function o(e, t) {
        return (0, r.operate)(function (i, r) {
          var o = 0;
          i.subscribe(
            new s.OperatorSubscriber(r, function (i) {
              r.next(e.call(t, i, o++));
            })
          );
        });
      }
    },
    84213: (e, t, i) => {
      'use strict';
      i.d(t, { mergeAll: () => d });
      var r = i(29127),
        s = i(87878),
        o = i(96798),
        n = i(47845),
        a = i(2566);
      var l = i(58474);
      function c(e, t, i) {
        return (
          void 0 === i && (i = 1 / 0),
          (0, l.isFunction)(t)
            ? c(function (i, o) {
                return (0, r.map)(function (e, r) {
                  return t(i, e, o, r);
                })((0, s.innerFrom)(e(i, o)));
              }, i)
            : ('number' == typeof t && (i = t),
              (0, o.operate)(function (t, r) {
                return (function (e, t, i, r, o, l, c, u) {
                  var d = [],
                    h = 0,
                    p = 0,
                    _ = !1,
                    g = function () {
                      !_ || d.length || h || t.complete();
                    },
                    b = function (e) {
                      return h < r ? m(e) : d.push(e);
                    },
                    m = function (e) {
                      l && t.next(e), h++;
                      var u = !1;
                      (0, s.innerFrom)(i(e, p++)).subscribe(
                        new a.OperatorSubscriber(
                          t,
                          function (e) {
                            null == o || o(e), l ? b(e) : t.next(e);
                          },
                          function () {
                            u = !0;
                          },
                          void 0,
                          function () {
                            if (u)
                              try {
                                h--;
                                for (
                                  var e = function () {
                                    var e = d.shift();
                                    c
                                      ? (0, n.executeSchedule)(t, c, function () {
                                          return m(e);
                                        })
                                      : m(e);
                                  };
                                  d.length && h < r;

                                )
                                  e();
                                g();
                              } catch (e) {
                                t.error(e);
                              }
                          }
                        )
                      );
                    };
                  return (
                    e.subscribe(
                      new a.OperatorSubscriber(t, b, function () {
                        (_ = !0), g();
                      })
                    ),
                    function () {
                      null == u || u();
                    }
                  );
                })(t, r, e, i);
              }))
        );
      }
      var u = i(90278);
      function d(e) {
        return void 0 === e && (e = 1 / 0), c(u.identity, e);
      }
    },
    65583: (e, t, i) => {
      'use strict';
      i.d(t, { share: () => c });
      var r = i(35987),
        s = i(11954),
        o = i(74727),
        n = i(16716),
        a = i(26267),
        l = i(96798);
      function c(e) {
        void 0 === e && (e = {});
        var t = e.connector,
          i =
            void 0 === t
              ? function () {
                  return new n.Subject();
                }
              : t,
          r = e.resetOnError,
          o = void 0 === r || r,
          c = e.resetOnComplete,
          d = void 0 === c || c,
          h = e.resetOnRefCountZero,
          p = void 0 === h || h;
        return function (e) {
          var t = null,
            r = null,
            n = null,
            c = 0,
            h = !1,
            _ = !1,
            g = function () {
              null == r || r.unsubscribe(), (r = null);
            },
            b = function () {
              g(), (t = n = null), (h = _ = !1);
            },
            m = function () {
              var e = t;
              b(), null == e || e.unsubscribe();
            };
          return (0, l.operate)(function (e, l) {
            c++, _ || h || g();
            var f = (n = null != n ? n : i());
            l.add(function () {
              0 !== --c || _ || h || (r = u(m, p));
            }),
              f.subscribe(l),
              t ||
                ((t = new a.SafeSubscriber({
                  next: function (e) {
                    return f.next(e);
                  },
                  error: function (e) {
                    (_ = !0), g(), (r = u(b, o, e)), f.error(e);
                  },
                  complete: function () {
                    (h = !0), g(), (r = u(b, d)), f.complete();
                  },
                })),
                (0, s.from)(e).subscribe(t));
          })(e);
        };
      }
      function u(e, t) {
        for (var i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
        return !0 === t
          ? (e(), null)
          : !1 === t
          ? null
          : t
              .apply(void 0, (0, r.__spreadArray)([], (0, r.__read)(i), !1))
              .pipe((0, o.take)(1))
              .subscribe(function () {
                return e();
              });
      }
    },
    47753: (e, t, i) => {
      'use strict';
      i.d(t, { skip: () => s });
      var r = i(94975);
      function s(e) {
        return (0, r.filter)(function (t, i) {
          return e <= i;
        });
      }
    },
    98536: (e, t, i) => {
      'use strict';
      i.d(t, { startWith: () => c });
      var r = i(84213);
      function s() {
        return (0, r.mergeAll)(1);
      }
      var o = i(57617),
        n = i(11954);
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s()((0, n.from)(e, (0, o.popScheduler)(e)));
      }
      var l = i(96798);
      function c() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = (0, o.popScheduler)(e);
        return (0, l.operate)(function (t, r) {
          (i ? a(e, t, i) : a(e, t)).subscribe(r);
        });
      }
    },
    34978: (e, t, i) => {
      'use strict';
      i.d(t, { switchMap: () => n });
      var r = i(87878),
        s = i(96798),
        o = i(2566);
      function n(e, t) {
        return (0, s.operate)(function (i, s) {
          var n = null,
            a = 0,
            l = !1,
            c = function () {
              return l && !n && s.complete();
            };
          i.subscribe(
            new o.OperatorSubscriber(
              s,
              function (i) {
                null == n || n.unsubscribe();
                var l = 0,
                  u = a++;
                (0, r.innerFrom)(e(i, u)).subscribe(
                  (n = new o.OperatorSubscriber(
                    s,
                    function (e) {
                      return s.next(t ? t(i, e, u, l++) : e);
                    },
                    function () {
                      (n = null), c();
                    }
                  ))
                );
              },
              function () {
                (l = !0), c();
              }
            )
          );
        });
      }
    },
    74727: (e, t, i) => {
      'use strict';
      i.d(t, { take: () => n });
      var r = i(1545),
        s = i(96798),
        o = i(2566);
      function n(e) {
        return e <= 0
          ? function () {
              return r.EMPTY;
            }
          : (0, s.operate)(function (t, i) {
              var r = 0;
              t.subscribe(
                new o.OperatorSubscriber(i, function (t) {
                  ++r <= e && (i.next(t), e <= r && i.complete());
                })
              );
            });
      }
    },
    68380: (e, t, i) => {
      'use strict';
      i.d(t, { timeoutProvider: () => s });
      var r = i(35987),
        s = {
          setTimeout: function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = s.delegate;
            return ((null == i ? void 0 : i.setTimeout) || setTimeout).apply(
              void 0,
              (0, r.__spreadArray)([], (0, r.__read)(e), !1)
            );
          },
          clearTimeout: function (e) {
            var t = s.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
    },
    39768: (e, t, i) => {
      'use strict';
      i.d(t, { iterator: () => r });
      var r = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
    },
    46766: (e, t, i) => {
      'use strict';
      i.d(t, { observable: () => r });
      var r = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    57617: (e, t, i) => {
      'use strict';
      i.d(t, { popNumber: () => a, popResultSelector: () => o, popScheduler: () => n });
      var r = i(58474);
      function s(e) {
        return e[e.length - 1];
      }
      function o(e) {
        return (0, r.isFunction)(s(e)) ? e.pop() : void 0;
      }
      function n(e) {
        return (t = s(e)) && (0, r.isFunction)(t.schedule) ? e.pop() : void 0;
        var t;
      }
      function a(e, t) {
        return 'number' == typeof s(e) ? e.pop() : t;
      }
    },
    3699: (e, t, i) => {
      'use strict';
      function r(e, t) {
        if (e) {
          var i = e.indexOf(t);
          0 <= i && e.splice(i, 1);
        }
      }
      i.d(t, { arrRemove: () => r });
    },
    1819: (e, t, i) => {
      'use strict';
      function r(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = new Error().stack);
        });
        return (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t;
      }
      i.d(t, { createErrorClass: () => r });
    },
    68846: (e, t, i) => {
      'use strict';
      i.d(t, { errorContext: () => o, captureError: () => n });
      var r = i(53912),
        s = null;
      function o(e) {
        if (r.config.useDeprecatedSynchronousErrorHandling) {
          var t = !s;
          if ((t && (s = { errorThrown: !1, error: null }), e(), t)) {
            var i = s,
              o = i.errorThrown,
              n = i.error;
            if (((s = null), o)) throw n;
          }
        } else e();
      }
      function n(e) {
        r.config.useDeprecatedSynchronousErrorHandling &&
          s &&
          ((s.errorThrown = !0), (s.error = e));
      }
    },
    47845: (e, t, i) => {
      'use strict';
      function r(e, t, i, r, s) {
        void 0 === r && (r = 0), void 0 === s && (s = !1);
        var o = t.schedule(function () {
          i(), s ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(o), !s)) return o;
      }
      i.d(t, { executeSchedule: () => r });
    },
    90278: (e, t, i) => {
      'use strict';
      function r(e) {
        return e;
      }
      i.d(t, { identity: () => r });
    },
    45685: (e, t, i) => {
      'use strict';
      i.d(t, { isArrayLike: () => r });
      var r = function (e) {
        return e && 'number' == typeof e.length && 'function' != typeof e;
      };
    },
    58430: (e, t, i) => {
      'use strict';
      i.d(t, { isAsyncIterable: () => s });
      var r = i(58474);
      function s(e) {
        return (
          Symbol.asyncIterator && (0, r.isFunction)(null == e ? void 0 : e[Symbol.asyncIterator])
        );
      }
    },
    58474: (e, t, i) => {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      i.d(t, { isFunction: () => r });
    },
    71764: (e, t, i) => {
      'use strict';
      i.d(t, { isInteropObservable: () => o });
      var r = i(46766),
        s = i(58474);
      function o(e) {
        return (0, s.isFunction)(e[r.observable]);
      }
    },
    1837: (e, t, i) => {
      'use strict';
      i.d(t, { isIterable: () => o });
      var r = i(39768),
        s = i(58474);
      function o(e) {
        return (0, s.isFunction)(null == e ? void 0 : e[r.iterator]);
      }
    },
    53841: (e, t, i) => {
      'use strict';
      i.d(t, { isPromise: () => s });
      var r = i(58474);
      function s(e) {
        return (0, r.isFunction)(null == e ? void 0 : e.then);
      }
    },
    48671: (e, t, i) => {
      'use strict';
      i.d(t, { readableStreamLikeToAsyncGenerator: () => o, isReadableStreamLike: () => n });
      var r = i(35987),
        s = i(58474);
      function o(e) {
        return (0, r.__asyncGenerator)(this, arguments, function () {
          var t, i, s;
          return (0, r.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                (t = e.getReader()), (o.label = 1);
              case 1:
                o.trys.push([1, , 9, 10]), (o.label = 2);
              case 2:
                return [4, (0, r.__await)(t.read())];
              case 3:
                return (i = o.sent()), (s = i.value), i.done ? [4, (0, r.__await)(void 0)] : [3, 5];
              case 4:
                return [2, o.sent()];
              case 5:
                return [4, (0, r.__await)(s)];
              case 6:
                return [4, o.sent()];
              case 7:
                return o.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function n(e) {
        return (0, s.isFunction)(null == e ? void 0 : e.getReader);
      }
    },
    96798: (e, t, i) => {
      'use strict';
      i.d(t, { operate: () => s });
      var r = i(58474);
      function s(e) {
        return function (t) {
          if (
            (function (e) {
              return (0, r.isFunction)(null == e ? void 0 : e.lift);
            })(t)
          )
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    22967: (e, t, i) => {
      'use strict';
      function r() {}
      i.d(t, { noop: () => r });
    },
    40005: (e, t, i) => {
      'use strict';
      i.d(t, { reportUnhandledError: () => o });
      var r = i(53912),
        s = i(68380);
      function o(e) {
        s.timeoutProvider.setTimeout(function () {
          var t = r.config.onUnhandledError;
          if (!t) throw e;
          t(e);
        });
      }
    },
    88729: (e, t, i) => {
      'use strict';
      function r(e) {
        return new TypeError(
          'You provided ' +
            (null !== e && 'object' == typeof e ? 'an invalid object' : "'" + e + "'") +
            ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.'
        );
      }
      i.d(t, { createInvalidObservableTypeError: () => r });
    },
    35987: (e, t, i) => {
      'use strict';
      i.d(t, {
        __extends: () => s,
        __awaiter: () => o,
        __generator: () => n,
        __values: () => a,
        __read: () => l,
        __spreadArray: () => c,
        __await: () => u,
        __asyncGenerator: () => d,
        __asyncValues: () => h,
      });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          })(e, t);
      };
      function s(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
        function i() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i()));
      }
      function o(e, t, i, r) {
        return new (i || (i = Promise))(function (s, o) {
          function n(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(n, a);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function n(e, t) {
        var i,
          r,
          s,
          o,
          n = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (i) throw new TypeError('Generator is already executing.');
              for (; n; )
                try {
                  if (
                    ((i = 1),
                    r &&
                      (s =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((s = r.return) && s.call(r), 0)
                          : r.next) &&
                      !(s = s.call(r, o[1])).done)
                  )
                    return s;
                  switch (((r = 0), s && (o = [2 & o[0], s.value]), o[0])) {
                    case 0:
                    case 1:
                      s = o;
                      break;
                    case 4:
                      return n.label++, { value: o[1], done: !1 };
                    case 5:
                      n.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = n.ops.pop()), n.trys.pop();
                      continue;
                    default:
                      if (
                        !((s = n.trys),
                        (s = s.length > 0 && s[s.length - 1]) || (6 !== o[0] && 2 !== o[0]))
                      ) {
                        n = 0;
                        continue;
                      }
                      if (3 === o[0] && (!s || (o[1] > s[0] && o[1] < s[3]))) {
                        n.label = o[1];
                        break;
                      }
                      if (6 === o[0] && n.label < s[1]) {
                        (n.label = s[1]), (s = o);
                        break;
                      }
                      if (s && n.label < s[2]) {
                        (n.label = s[2]), n.ops.push(o);
                        break;
                      }
                      s[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  o = t.call(e, n);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      Object.create;
      function a(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          i = t && e[t],
          r = 0;
        if (i) return i.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function l(e, t) {
        var i = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r,
          s,
          o = i.call(e),
          n = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) n.push(r.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            r && !r.done && (i = o.return) && i.call(o);
          } finally {
            if (s) throw s.error;
          }
        }
        return n;
      }
      function c(e, t) {
        for (var i = 0, r = t.length, s = e.length; i < r; i++, s++) e[s] = t[i];
        return e;
      }
      function u(e) {
        return this instanceof u ? ((this.v = e), this) : new u(e);
      }
      function d(e, t, i) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          s = i.apply(e, t || []),
          o = [];
        return (
          (r = {}),
          n('next'),
          n('throw'),
          n('return'),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function n(e) {
          s[e] &&
            (r[e] = function (t) {
              return new Promise(function (i, r) {
                o.push([e, t, i, r]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (i = s[e](t)).value instanceof u
              ? Promise.resolve(i.value.v).then(l, c)
              : d(o[0][2], i);
          } catch (e) {
            d(o[0][3], e);
          }
          var i;
        }
        function l(e) {
          a('next', e);
        }
        function c(e) {
          a('throw', e);
        }
        function d(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function h(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          i = e[Symbol.asyncIterator];
        return i
          ? i.call(e)
          : ((e = a(e)),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(i) {
          t[i] =
            e[i] &&
            function (t) {
              return new Promise(function (r, s) {
                (function (e, t, i, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: i });
                  }, t);
                })(r, s, (t = e[i](t)).done, t.value);
              });
            };
        }
      }
      Object.create;
    },
    65520: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.9792 16.6205C19.7396 16.8955 19.3241 16.9285 19.044 16.6948L14.3924 12.8117L14.072 12.5442L13.7516 12.8117L9.10009 16.6947C8.82008 16.9285 8.40456 16.8955 8.16495 16.6205C7.92467 16.3447 7.94981 15.9272 8.22144 15.6822L14.0721 10.4057L19.9227 15.6822C20.1943 15.9272 20.2195 16.3447 19.9792 16.6205ZM18.4032 17.4624C19.1009 18.0448 20.1362 17.9626 20.7332 17.2774C21.3318 16.5902 21.2692 15.55 20.5924 14.9396L14.407 9.36109L14.0721 9.05908L13.7373 9.36109L7.55171 14.9396C6.87492 15.55 6.81229 16.5902 7.41096 17.2774C8.00796 17.9626 9.04326 18.0448 9.74094 17.4624L14.072 13.8468L18.4032 17.4624Z"/></svg>';
    },
    62395: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.9792 12.2892C19.7396 12.0142 19.3241 11.9812 19.044 12.2149L14.3924 16.098L14.072 16.3655L13.7516 16.098L9.10009 12.2149C8.82008 11.9812 8.40456 12.0142 8.16495 12.2892C7.92467 12.565 7.94981 12.9825 8.22144 13.2275L14.0721 18.504L19.9227 13.2275C20.1943 12.9825 20.2195 12.565 19.9792 12.2892ZM18.4032 11.4472C19.1009 10.8648 20.1362 10.9471 20.7332 11.6323C21.3318 12.3195 21.2692 13.3597 20.5924 13.9701L14.407 19.5486L14.0721 19.8506L13.7373 19.5486L7.55171 13.9701C6.87492 13.3597 6.81229 12.3195 7.41096 11.6323C8.00796 10.9471 9.04326 10.8648 9.74094 11.4473L14.072 15.0628L18.4032 11.4472Z"/></svg>';
    },
    14567: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><path fill="#363A45" fill-rule="evenodd" clip-rule="evenodd" d="M62.1259 28.2153C61.4066 28.8157 61.0001 29.7273 61.0858 30.6604C61.6716 37.0347 59.7763 44.3291 55.3181 50.8221C46.9016 63.0797 32.5383 67.839 23.2366 61.4522C13.935 55.0654 13.2174 39.9512 21.6339 27.6935C26.4984 20.6088 33.3496 16.029 40.0619 14.6585C40.9752 14.472 41.731 13.8291 42.1024 12.9741C42.485 12.0934 42.9606 11.2346 43.5313 10.4123C47.906 4.1093 56.2129 2.33004 62.0853 6.4382C67.9578 10.5464 69.172 18.9863 64.7974 25.2892C64.0194 26.4103 63.1169 27.3882 62.1259 28.2153Z"/><rect width="47.2" height="34" fill="#1E222D" stroke="#B2B5BE" stroke-width="2" rx="3.8" x="12.4004" y="16"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="2" d="M3.59961 54H67.1996"/><path fill="#B2B5BE" fill-rule="evenodd" clip-rule="evenodd" d="M29.1178 31.1324L30.8107 32.8253L32.225 31.4111L30.5321 29.7182L32.225 28.0253L30.8107 26.6111L29.1178 28.304L27.425 26.6111L26.0107 28.0253L27.7036 29.7182L26.0107 31.4111L27.425 32.8253L29.1178 31.1324Z"/><path fill="#B2B5BE" fill-rule="evenodd" clip-rule="evenodd" d="M43.5182 31.1324L45.2111 32.8253L46.6253 31.4111L44.9325 29.7182L46.6253 28.0253L45.2111 26.6111L43.5182 28.304L41.8253 26.6111L40.4111 28.0253L42.104 29.7182L40.4111 31.4111L41.8253 32.8253L43.5182 31.1324Z"/><path stroke="#B2B5BE" stroke-width="2" d="M30.5996 38.7H40.7996"/></g></svg>';
    },
    84514: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><path fill="#F0F3FA" fill-rule="evenodd" clip-rule="evenodd" d="M62.1259 28.2153C61.4066 28.8157 61.0001 29.7273 61.0858 30.6604C61.6716 37.0347 59.7763 44.3291 55.3181 50.8221C46.9016 63.0797 32.5383 67.839 23.2366 61.4522C13.935 55.0654 13.2174 39.9512 21.6339 27.6935C26.4984 20.6088 33.3496 16.029 40.0619 14.6585C40.9752 14.472 41.731 13.8291 42.1024 12.9741C42.485 12.0934 42.9606 11.2346 43.5313 10.4123C47.906 4.1093 56.2129 2.33004 62.0853 6.4382C67.9578 10.5464 69.172 18.9863 64.7974 25.2892C64.0194 26.4103 63.1169 27.3882 62.1259 28.2153Z"/><rect width="47.2" height="34" fill="#fff" stroke="#1E222D" stroke-width="2" rx="3.8" x="12.4004" y="16"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M3.59961 54H67.1996"/><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M29.1178 31.1324L30.8107 32.8253L32.225 31.4111L30.5321 29.7182L32.225 28.0253L30.8107 26.6111L29.1178 28.304L27.425 26.6111L26.0107 28.0253L27.7036 29.7182L26.0107 31.4111L27.425 32.8253L29.1178 31.1324Z"/><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M43.5182 31.1324L45.2111 32.8253L46.6253 31.4111L44.9325 29.7182L46.6253 28.0253L45.2111 26.6111L43.5182 28.304L41.8253 26.6111L40.4111 28.0253L42.104 29.7182L40.4111 31.4111L41.8253 32.8253L43.5182 31.1324Z"/><path stroke="#000" stroke-width="2" d="M30.5996 38.7H40.7996"/></g></svg>';
    },
    2365: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16"><path fill="currentColor" fill-rule="evenodd" d="M7.5 2.5C7.5 1.67 8.17 1 9 1h2c.83 0 1.5.67 1.5 1.5v.15h-5V2.5zm6 0v.15H17a2.5 2.5 0 0 1 2.5 2.5v8.35A2.5 2.5 0 0 1 17 16H3a2.5 2.5 0 0 1-2.5-2.5V5.15A2.5 2.5 0 0 1 3 2.65h3.5V2.5A2.5 2.5 0 0 1 9 0h2a2.5 2.5 0 0 1 2.5 2.5zm-12 2.65c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v8.35c0 .83-.67 1.5-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V5.15zM9.25 6.5a1.75 1.75 0 1 0 0 3.5h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75h-1c0 .97.78 1.75 1.75 1.75h.25v1h1v-1h.25a1.75 1.75 0 1 0 0-3.5h-1.5a.75.75 0 0 1 0-1.5h1.5c.41 0 .75.34.75.75h1c0-.97-.78-1.75-1.75-1.75h-.25v-1h-1v1h-.25z"/></svg>';
    },
  },
]);
