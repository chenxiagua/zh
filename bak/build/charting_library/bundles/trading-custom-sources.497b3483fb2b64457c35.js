'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2650],
  {
    60655: (t, e, i) => {
      i.r(e), i.d(e, { ExecutionsService: () => c });
      var o = i(16282),
        r = i(90592),
        s = i(98658),
        a = i(15510),
        l = i(21526),
        n = i.n(l),
        d = i(87915);
      class c extends a.BrokerService {
        constructor(t, e, i) {
          super(t),
            (this._allExecutionsID = new Set()),
            (this._executions = []),
            (this._executionsAdded = new (n())()),
            (this._executionsCleared = new (n())()),
            (this._formatter = new s.PriceFormatter()),
            (this._symbol = ''),
            (this._dataEvents = e),
            (this._getSymbolName = i),
            (this._initialized = !0),
            this._tryToStart();
        }
        destroy() {
          this.stopService();
        }
        formatter() {
          return this._formatter;
        }
        executions() {
          return this._executions;
        }
        executionsAdded() {
          return this._executionsAdded;
        }
        executionsCleared() {
          return this._executionsCleared;
        }
        startService() {
          var t;
          (null === (t = this.activeBroker()) || void 0 === t
            ? void 0
            : t.config.supportExecutions) && ((this._canBeStarted = !0), this._tryToStart());
        }
        stopService() {
          (this._canBeStarted = !1), this._isStarted && this._stop();
        }
        _tryToStart() {
          (0, o.assert)(!this._isStarted, "Execution's service has already started"),
            this._canBeStarted && this._initialized && this._start();
        }
        _start() {
          (0, o.assert)(!this._isStarted, "Execution's service has already started"),
            (this._isStarted = !0),
            this._dataEvents.symbolResolved().subscribe(this, this._createExecutions),
            this._dataEvents.symbolError().subscribe(this, this._createExecutions),
            this._createExecutions();
        }
        _stop() {
          (this._isStarted = !1), this._clearExecutions();
          (0, o.ensure)(this.activeBroker()).executionUpdate.unsubscribeAll(this),
            this._dataEvents.symbolResolved().unsubscribeAll(this),
            this._dataEvents.symbolError().unsubscribeAll(this);
        }
        _createExecutions() {
          this._clearExecutions(),
            (this._symbol = this._getSymbolName()),
            this._symbol && this._requestFormatterAndExecutions();
        }
        _clearExecutions() {
          (this._allExecutionsID = new Set()),
            (this._executions = []),
            this._executionsCleared.fire();
        }
        async _requestFormatterAndExecutions() {
          const t = this.activeBroker();
          if (!t) return;
          if (!this._symbol) return;
          if (!(await t.isTradable(this._symbol)).tradable) return;
          const e = this._symbol;
          Promise.all([t.formatter(this._symbol, !1), t.executions(this._symbol)]).then(
            ([i, o]) => {
              this._symbol === e &&
                ((this._formatter = i),
                (this._executions = o.map((t) => this._createExecutionData(t)).filter(r.notNull)),
                this._executionsAdded.fire(this._executions),
                t.executionUpdate.unsubscribeAll(this),
                t.executionUpdate.subscribe(this, this._addExecution));
            }
          );
        }
        _addExecution(t) {
          const e = this._createExecutionData(t);
          null !== e && this._executionsAdded.fire([e]);
        }
        _createExecutionData(t) {
          return t.symbol !== this._symbol || this._allExecutionsID.has(t.id)
            ? null
            : (this._allExecutionsID.add(t.id),
              { ...t, tooltip: (0, d.executionText)(t, this._formatter) });
        }
      }
    },
    42530: (t, e, i) => {
      i.r(e), i.d(e, { ExecutionsPointsManager: () => l });
      var o = i(36310),
        r = i(21526),
        s = i.n(r);
      function a(t) {
        return void 0 !== t.index;
      }
      class l {
        constructor(t, e, i) {
          (this._points = []),
            (this._existingExecutionPointsCache = null),
            (this._offsetOfFirstExistingPoint = null),
            (this._existingPointsChanged = new (s())()),
            (this._pointsets = []),
            (this._pointsetManagerFactory = e),
            (this._firstSeriesTimePointWV = i),
            this._firstSeriesTimePointWV.subscribe(this._updateExistingPoints.bind(this)),
            (this._executionsService = t),
            this._addPoints(this._executionsService.executions()),
            this._executionsService.executionsAdded().subscribe(this, this._addPoints),
            this._executionsService.executionsCleared().subscribe(this, this._clearPoints);
        }
        destroy() {
          this._clearPoints(),
            this._firstSeriesTimePointWV.destroy(),
            this._executionsService.executionsAdded().unsubscribeAll(this),
            this._executionsService.executionsCleared().unsubscribeAll(this),
            this._executionsService.destroy();
        }
        existingPoints() {
          return null === this._offsetOfFirstExistingPoint
            ? []
            : (null === this._existingExecutionPointsCache &&
                (this._existingExecutionPointsCache = this._points
                  .slice(this._offsetOfFirstExistingPoint)
                  .filter(a)),
              this._existingExecutionPointsCache);
        }
        existingPointsChanged() {
          return this._existingPointsChanged;
        }
        _onExistingStartPointChanged() {
          (this._existingExecutionPointsCache = null),
            this._existingPointsChanged.fire(this.existingPoints());
        }
        _addPoints(t) {
          if (0 === t.length) return;
          const e = (function (t) {
            return t.map((t) => ({
              time_t: Math.round(t.time / 1e3),
              index: void 0,
              isBuyDirection: 1 === t.side,
              tooltip: t.tooltip,
            }));
          })(t);
          e.sort((t, e) => t.time_t - e.time_t);
          let i = 0;
          const r = this._points.length > 0;
          r && (i = (0, o.upperbound)(this._points, e[0].time_t, (t, e) => e.time_t > t, 0)),
            (this._points = this._points.slice(0, i).concat(e).concat(this._points.slice(i)));
          const s = this._firstSeriesTimePointWV.value();
          null !== this._offsetOfFirstExistingPoint && null !== s && e[0].time_t < s
            ? (this._offsetOfFirstExistingPoint = this._offsetOfFirstExistingPoint + e.length)
            : ((null === this._offsetOfFirstExistingPoint ||
                e[0].time_t < this._points[this._offsetOfFirstExistingPoint].time_t) &&
                (this._offsetOfFirstExistingPoint = this._calcOffsetOfFirstExistingPoint()),
              null !== this._offsetOfFirstExistingPoint &&
                (r
                  ? i >= this._offsetOfFirstExistingPoint &&
                    this._sendPointsToServer(i, i + e.length)
                  : this._sendPointsToServer(
                      this._offsetOfFirstExistingPoint,
                      this._points.length
                    )));
        }
        _updateExistingPoints() {
          const t = this._calcOffsetOfFirstExistingPoint();
          null !== t &&
            (null === this._offsetOfFirstExistingPoint &&
              (this._offsetOfFirstExistingPoint = this._points.length),
            t < this._offsetOfFirstExistingPoint &&
              (this._sendPointsToServer(t, this._offsetOfFirstExistingPoint),
              (this._offsetOfFirstExistingPoint = t)));
        }
        _clearPoints() {
          for (const t of this._pointsets) t.onUpdate().unsubscribeAll(this), t.destroy();
          (this._pointsets = []),
            (this._points = []),
            (this._offsetOfFirstExistingPoint = null),
            this._onExistingStartPointChanged();
        }
        _sendPointsToServer(t, e) {
          const i = this._points.slice(t, e).map((t) => ({ time_t: t.time_t, offset: 0 }));
          if (0 === i.length) return;
          const o = this._pointsetManagerFactory(i);
          null !== o &&
            (o.onUpdate().subscribe(this, this._updatePointsFromServer), this._pointsets.push(o));
        }
        _updatePointsFromServer(t) {
          if (null === this._offsetOfFirstExistingPoint) return;
          const e = (0, o.lowerbound)(
            this._points,
            t[0].time_t,
            (t, e) => t.time_t < e,
            this._offsetOfFirstExistingPoint
          );
          let i = Math.max(this._offsetOfFirstExistingPoint, e);
          for (const e of t)
            for (
              let t = i;
              t < this._points.length && ((i = t), !(this._points[t].time_t > e.time_t));
              t++
            )
              this._points[t].time_t === e.time_t && (this._points[t].index = e.index);
          this._onExistingStartPointChanged();
        }
        _calcOffsetOfFirstExistingPoint() {
          const t = this._firstSeriesTimePointWV.value();
          return null === t
            ? null
            : (0, o.upperbound)(
                this._points,
                t,
                (t, e) => e.time_t > t,
                0,
                this._offsetOfFirstExistingPoint || this._points.length
              );
        }
      }
    },
    69873: (t, e, i) => {
      i.r(e), i.d(e, { ExecutionsSource: () => f });
      var o = i(6225),
        r = i(7424),
        s = i(16282),
        a = i(84929),
        l = i(36310),
        n = i(81332),
        d = i(53700),
        c = i(49445),
        h = i(43304);
      class u {
        constructor() {
          this._data = { points: [], arrowHeight: 0 };
        }
        setData(t) {
          this._data = t;
        }
        hitTest(t) {
          for (const e of this._data.points) {
            const i = Math.round(e.x),
              o = Math.round(e.y),
              r = 4;
            let s, a;
            if (
              (e.arrowUp
                ? ((s = o), (a = o + this._data.arrowHeight))
                : ((s = o - this._data.arrowHeight), (a = o)),
              t.x >= i - 2 && t.x <= i + 2 && t.y >= s && t.y <= a && '' !== e.tooltip)
            )
              return new c.HitTestResult(c.HitTestResult.CUSTOM, {
                tooltip: { text: e.tooltip, rect: { x: i - 2, y: s, w: r, h: a - s } },
              });
          }
          return null;
        }
        draw(t, e) {
          const i = e.pixelRatio;
          t.save(), (t.lineWidth = Math.max(1, Math.floor(t.lineWidth * i)));
          const o = Math.max(1, Math.round(4 * i)),
            r = Math.max(1, Math.round(this._data.arrowHeight * i));
          for (const e of this._data.points) {
            const s = Math.round((e.x - 2) * i),
              a = Math.round(e.y * i);
            (0, h.drawArrow)(t, s, a, e.arrowColor, !e.arrowUp, r, o);
          }
          t.restore();
        }
      }
      const _ = a.colorsPalette['color-tv-blue-500'],
        p = a.colorsPalette['color-ripe-red-500'];
      class m {
        constructor(t, e) {
          (this._invalidated = !0),
            (this._points = []),
            (this._renderer = new u()),
            (this._chartModel = t),
            (this._source = e);
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          return (
            this._invalidated && (this._updateImpl(), (this._invalidated = !1)), this._renderer
          );
        }
        _updateImpl() {
          (this._points = []), this._renderer.setData({ points: [], arrowHeight: 0 });
          const t = this._chartModel.timeScale().visibleBarsStrictRange();
          if (null === t) return;
          const e = this._source.points();
          if (0 === e.length) return;
          const i = (0, l.lowerbound)(e, t.firstBar(), (t, e) => t.index < e, 0),
            o = (0, l.upperbound)(e, t.lastBar(), (t, e) => e.index > t, i);
          if (i >= o) return;
          const r = this._chartModel.mainSeries().priceScale().isInverted(),
            a = new Map();
          for (let t = i; t < o; t++) {
            const i = e[t],
              o = a.get(i.index) || b(r);
            if (void 0 === o.x) {
              const t = this._getXCoordinate(i.index);
              if (null === t) continue;
              o.x = t;
            }
            const l = i.isBuyDirection !== r,
              n = l ? 'arrowUp' : 'arrowDown',
              d = l ? 1 : -1,
              c = o[n].y;
            if (void 0 === c) {
              const t = this._getYCoordinate(i.index, i.isBuyDirection);
              if (null === t) continue;
              o[n].y = t + 11 * d;
            } else o[n].y = c + 19 * d;
            a.set(i.index, o),
              this._points.push({
                x: (0, s.ensureDefined)(o.x),
                y: (0, s.ensureDefined)(o[n].y),
                arrowUp: l,
                arrowColor: o[n].color,
                tooltip: i.tooltip,
              });
          }
          this._renderer.setData({ points: this._points, arrowHeight: 8 });
        }
        _getXCoordinate(t) {
          const e = this._chartModel.mainSeries().bars().lastIndex();
          return null === e || t > e ? null : this._chartModel.timeScale().indexToCoordinate(t);
        }
        _getYCoordinate(t, e) {
          let i = null;
          const o = this._chartModel.mainSeries(),
            r = o.priceSource(),
            s = null !== r ? r : e ? 'low' : 'high',
            a = (0, n.barFunction)(s),
            l = o.nearestData(t, d.PlotRowSearchMode.NearestLeft);
          if (void 0 !== l) {
            const t = a(l.value);
            if (!Number.isNaN(t)) {
              const e = o.firstValue();
              null !== e &&
                (i = this._chartModel.mainSeries().priceScale().priceToCoordinate(t, e));
            }
          }
          return i;
        }
      }
      function b(t) {
        let e, i;
        return (
          t ? ((e = p), (i = _)) : ((e = _), (i = p)),
          { x: void 0, arrowUp: { y: void 0, color: e }, arrowDown: { y: void 0, color: i } }
        );
      }
      class f extends o.CustomSourceBase {
        constructor(t, e, i, o, r, s) {
          super(t, e),
            (this._paneViews = []),
            (this._executionsPointsManager = s),
            this._executionsPointsManager.existingPointsChanged().subscribe(this, this.redraw),
            (this._showExecutions = o),
            (this._globalVisibility = r),
            this._globalVisibility.subscribe(this.redraw.bind(this)),
            this._paneViews.push(new m(e, this));
        }
        destroy() {
          this._executionsPointsManager.existingPointsChanged().unsubscribeAll(this),
            this._executionsPointsManager.destroy(),
            this._showExecutions.destroy(),
            this._globalVisibility.unsubscribe();
        }
        redraw() {
          this.updateAllViews(), this._model.updateSource(this);
        }
        points() {
          return this._executionsPointsManager.existingPoints();
        }
        updateAllViews() {
          for (const t of this._paneViews) t.update();
        }
        paneViews(t) {
          return this._isSourceShouldBeShown(t) ? this._paneViews : [];
        }
        _isSourceShouldBeShown(t) {
          return (
            !!this._globalVisibility.value() &&
            !!t.containsMainSeries() &&
            !!this._showExecutions.value() &&
            !(window.TradingView.printing && !r.enabled('snapshot_trading_drawings'))
          );
        }
      }
    },
    421: (t, e, i) => {
      i.d(e, { TradedSource: () => xe, isTradedSource: () => ge });
      var o,
        r = i(16282),
        s = i(90592),
        a = i(37560);
      !(function (t) {
        (t[(t.Position = 0)] = 'Position'), (t[(t.Order = 1)] = 'Order');
      })(o || (o = {}));
      var l = i(6225),
        n = i(7424),
        d = i(75496),
        c = i(72927),
        h = i(74245),
        u = i(29699),
        _ = i(98658),
        p = i(33375),
        m = i(40160),
        b = i(5251),
        f = i(97391),
        y = i(37229);
      async function v(t, e, i, o) {
        const r = await (async function (t, e) {
          const i = [],
            o = t.modifyOrder;
          0;
          void 0 !== o &&
            i.push(
              new b.Action({
                actionId: 'Trading.EditOrder',
                label: P,
                statName: 'Edit Order',
                onExecute: () => o('Chart Order Context Menu'),
              })
            );
          const r = t.cancelOrder;
          void 0 !== r &&
            i.push(
              new b.Action({
                actionId: 'Trading.CancelOrder',
                label: C,
                statName: 'Cancel Order',
                onExecute: () => r('Chart Order Context Menu'),
              })
            );
          return i;
        })(t);
        return f.ContextMenuManager.createMenu(
          r,
          {},
          { menuName: 'TradingOrderContextMenu' },
          e
        ).then((t) => (t.show(i), t));
      }
      const P = (0, y.appendEllipsis)((0, h.t)('Modify Order')),
        C = (0, h.t)('Cancel Order');
      const g = (0, h.t)('Trailing Stop'),
        x = (0, h.t)('Stop Loss'),
        k = (0, h.t)('Take Profit'),
        w = (0, h.t)('TS', { context: 'Trailing stop' }),
        S = (0, h.t)('SL', { context: 'Stop loss' }),
        T = (0, h.t)('TP', { context: 'Take profit' }),
        M = n.enabled('chart_hide_close_order_button');
      function I(t) {
        return 3 === t.type
          ? t.stopType === p.StopType.TrailingStop
            ? a.BracketType.TrailingStop
            : a.BracketType.StopLoss
          : 1 === t.type
          ? a.BracketType.TakeProfit
          : null;
      }
      class B {
        constructor(t, e, i, o, r) {
          (this._callbacks = {}),
            (this._inEdit = !1),
            (this._formatters = {
              quantityFormatter: new u.QuantityFormatter(),
              priceFormatter: new _.PriceFormatter(),
            }),
            (this._contextMenu = null),
            (this._source = e),
            (this._mainSeries = i),
            this.setData(t),
            (this._minTick = 1 / this._mainSeries.base()),
            (this._symbolDataProvider = o),
            this._symbolDataProvider.onStatusChanged.subscribe(this, this._updateSymbolData),
            this._updateSymbolData(),
            (this._exitTrackingMode = r);
        }
        destroy() {
          var t;
          this._symbolDataProvider.onStatusChanged.unsubscribeAll(this),
            null === (t = this._contextMenu) || void 0 === t || t.hide();
        }
        id() {
          return this._id;
        }
        data() {
          return this._data;
        }
        setData(t) {
          if (this._inEdit) return;
          const { callbacks: e = {}, mainType: i, ...o } = t;
          (this._callbacks = e), (this._data = o), (this._id = this._calcId());
        }
        setInEdit(t) {
          this._inEdit = t;
        }
        type() {
          return this._data.type;
        }
        bracketType() {
          return this._isBracket() ? I(this._data) : null;
        }
        isBuyDirection() {
          return 1 === this._data.side;
        }
        price() {
          return this._data.price;
        }
        qtyText() {
          return this._formatters.quantityFormatter.format(
            this._data.considerFilledQty
              ? this._data.qty - (this._data.filledQty || 0)
              : this._data.qty
          );
        }
        priceText() {
          return this._formatters.priceFormatter.format((0, r.ensureNotNull)(this._data.price));
        }
        text(t) {

          // TEALSTREET custom order text
          if (t.customText && typeof t.customText === 'string' && t.customText.length > 0) {
            return t.customText;
          }
            
          if (this._isBracket()) {
            const e = (function (t, e, i) {
              return 3 === t
                ? e === p.StopType.TrailingStop
                  ? i
                    ? w
                    : g
                  : i
                  ? S
                  : x
                : 1 === t
                ? i
                  ? T
                  : k
                : null;
            })(this._data.type, this._data.stopType, t);
            if (null !== e) return e;
          }
          return t
            ? (0, m.orderTypeToText)(this._data.type, !0, !0)
            : `${(0, m.sideToText)(this._data.side)} ${(0, m.orderTypeToText)(
                this._data.type,
                !1
              )}`;
        }
        isWorking() {
          return 6 === this._data.status;
        }
        supportOnlyPairBrackets() {
          return !1;
        }
        supportBrackets() {
          return this._data.supportBrackets;
        }
        supportModify() {
          return Boolean(this._callbacks.modifyOrder);
        }
        async onModify(t = 'Chart Order', e, i) {
          this._source.setIsBlocked(!0);
          const o = (0, s.clone)(this._data);
          await this._addTrailingStopPipsData(o);
          const a = await (0, r.ensureDefined)(this._callbacks.modifyOrder)(t, o.id, o, e, i);
          return this._source.setIsBlocked(!1), this._source.syncData(), a;
        }
        isMovingEnabled() {
          return Boolean(this._callbacks.moveOrder);
        }
        calcPriceDiff(t) {
          const e = new c.Point(t.localX, t.localY),
            i = this._mainSeries.priceScale(),
            o = this._mainSeries.firstValue();
          if (null === o) return null;
          const s = (0, r.ensureNotNull)(this._data.price);
          return i.coordinateToPrice(e.y, o) - s;
        }
        applyPriceDiff(t) {
          this._inEdit = !0;
          const e = (0, r.ensureNotNull)(this._data.price);
          this._data.price = (0, d.fixComputationError)(
            this._minTick * Math.round((t + e) / this._minTick)
          );
        }
        onMove(t) {
          const e = this.calcPriceDiff(t);
          null !== e && (this.applyPriceDiff(e), t.isTouch && this._exitTrackingMode());
        }
        async onFinishMove(t, e, i = {}, o = !0, a, l = !0) {
          var n, d, c, h;
          o && this._source.setIsBlocked(!0);
          const u = (0, s.clone)(this._data),
            _ = (0, r.ensureNotNull)(u.price);
          if (
            ((u.limitPrice = null !== (n = i.limitPrice) && void 0 !== n ? n : u.limitPrice),
            (u.takeProfit = null !== (d = i.takeProfit) && void 0 !== d ? d : u.takeProfit),
            (u.stopLoss = null !== (c = i.stopLoss) && void 0 !== c ? c : u.stopLoss),
            u.stopPrice ? (u.stopPrice = _) : u.limitPrice && (u.limitPrice = _),
            await this._addTrailingStopPipsData(u),
            !(null === (h = this._callbacks) || void 0 === h ? void 0 : h.moveOrder) &&
              !this._data.supportModifyOrderPrice)
          ) {
            const t = (0, r.ensureDefined)(this._callbacks.modifyOrder)(
              'Chart Order',
              u.id,
              u,
              a,
              l
            );
            return (this._inEdit = !1), t;
          }
          const p = (0, r.ensureDefined)(this._callbacks.moveOrder)(
            'Chart Order',
            t,
            e,
            u.id,
            u,
            a
          );
          return (this._inEdit = !1), p;
        }
        supportClose() {
          return !M && Boolean(this._callbacks.cancelOrder);
        }
        async onClose(t = 'Chart Order') {
          this._source.isBlocked() ||
            (this._source.setIsBlocked(!0),
            await (0, r.ensureDefined)(this._callbacks.cancelOrder)(t, this._data.id),
            this._source.setIsBlocked(!1),
            this._source.syncData());
        }
        hasContextMenu() {
          return this.supportModify() || this.supportClose() || this.isMovingEnabled();
        }
        async onContextMenu(t) {
          const e = {};
          this.supportClose() && (e.cancelOrder = this.onClose.bind(this)),
            this.supportModify() && (e.modifyOrder = this.onModify.bind(this));
          (0, m.sideToText)(this._data.side),
            this.qtyText(),
            this.priceText(),
            (0, m.orderTypeToText)(this._data.type);
          this._contextMenu = await v(
            e,
            () => {
              this._contextMenu = null;
            },
            t
          );
        }
        _calcId() {
          return void 0 !== this._data.parentId
            ? (0, r.ensureNotNull)(I(this._data))
            : this._data.id;
        }
        async _addTrailingStopPipsData(t, e) {
          const i = this._source.mainItem();
          if (i) {
            const { side: o, type: s, stopPrice: a, limitPrice: l } = i.data();
            if (void 0 !== e) {
              const i = (0, r.ensureDefined)(t.stopPrice || t.limitPrice);
              t.trailingStopPips = await this._calcPipsByPrice(e, i, o);
            } else if (t.parentId && t.stopType === p.StopType.TrailingStop) {
              const { bid: e, ask: n } = await this._symbolDataProvider.quotesSnapshot(t.symbol);
              let d;
              (d = i instanceof B ? (3 === s ? a : l) : 1 === o ? e : n),
                (t.trailingStopPips = await this._calcPipsByPrice(
                  (0, r.ensureDefined)(t.stopPrice || t.limitPrice),
                  d,
                  o
                ));
            }
          }
          return t;
        }
        async _calcPipsByPrice(t, e, i) {
          const { pipSize: o } = await this._symbolDataProvider.symbolInfo(
            (0, r.ensureNotNull)(this._data).symbol
          );
          return (((0, r.ensureDefined)(t) - e) / o) * (1 === i ? -1 : 1);
        }
        async _updateSymbolData() {
          const [t, e, i] = await Promise.all([
            this._symbolDataProvider.quantityFormatter(this._data.symbol),
            this._symbolDataProvider.formatter(this._data.symbol),
            this._symbolDataProvider.symbolInfo(this._data.symbol),
          ]);
          (this._formatters.quantityFormatter = t),
            (this._formatters.priceFormatter = e),
            (this._minTick = i.minTick),
            this._source.redraw();
        }
        _isBracket() {
          if (!this._data.parentId) return !1;
          const t = this._source.mainItem();
          return 1 !== this._data.parentType || (void 0 !== t && t.data().side !== this._data.side);
        }
      }
      var D = i(21526),
        R = i.n(D),
        L = i(6867),
        W = i(74605),
        O = i(1573),
        A = i(6766),
        V = i(57938),
        H = i(34258),
        E = i(14071);
      async function F(t, e, i, o) {
        const s = await (async function (t, e) {
          const i = [];
          0;
          void 0 !== t.modifyPosition &&
            i.push(
              new b.Action({
                actionId: 'Trading.ModifyPosition',
                label: N,
                statName: 'Modify Position',
                onExecute: () =>
                  (0, r.ensureDefined)(t.modifyPosition)('Chart Position Context Menu'),
              })
            );
          void 0 !== t.closePosition &&
            i.push(
              new b.Action({
                actionId: 'Trading.ClosePosition',
                label: q,
                statName: 'Close Position',
                onExecute: () =>
                  (0, r.ensureDefined)(t.closePosition)('Chart Position Context Menu'),
              })
            );
          void 0 !== t.reversePosition &&
            i.push(
              new b.Action({
                actionId: 'Trading.ReversePosition',
                label: j,
                statName: 'Reverse Position',
                onExecute: () =>
                  (0, r.ensureDefined)(t.reversePosition)('Chart Position Context Menu'),
              })
            );
          return i;
        })(t);
        return f.ContextMenuManager.createMenu(
          s,
          {},
          { menuName: 'TradingOrderContextMenu' },
          e
        ).then((t) => (t.show(i), t));
      }
      const N = (0, y.appendEllipsis)((0, h.t)('Protect Position')),
        q = (0, h.t)('Close Position'),
        j = (0, h.t)('Reverse Position');
      const U = (0, E.getLogger)('Trading.Positions'),
        z = n.enabled('chart_hide_close_position_button');
      class G {
        constructor(t, e, i, o, r) {
          (this._integerFormatter = new A.NumericFormatter(0)),
            (this._oneDecimalFormatter = new A.NumericFormatter(1)),
            (this._symbolData = {
              calculatePLUsingLast: !1,
              minTick: 1,
              pipSize: 1,
              quantityFormatter: new u.QuantityFormatter(),
              priceFormatter: new _.PriceFormatter(),
            }),
            (this._last = null),
            (this._currency = null),
            (this._displayPlChanged = new (R())()),
            (this._contextMenu = null),
            (this._source = e),
            (this._currencyGetter = o),
            (this._styleGetter = r),
            this.setData(t),
            (this._symbolDataProvider = i),
            (this._updateLastHandler = this._updateLast.bind(this)),
            (this._formatPlWV = (0, O.createWVFromGetterAndSubscription)(
              () => this.textByPl(),
              this._displayPlChanged
            )),
            (this._plColorWV = (0, O.createWVFromGetterAndSubscription)(
              () => this.plTextColor(),
              this._displayPlChanged
            ));
        }
        destroy() {
          var t;
          this.clearRealtime(),
            this._displayPlChanged.destroy(),
            this._formatPlWV.destroy(),
            this._plColorWV.destroy(),
            null === (t = this._contextMenu) || void 0 === t || t.hide();
        }
        // TEALSTREET position pnl
        plTextColor() {
          const { text: t } = this._styleGetter(this),
            e = this.displayPl();
          return null === e || 0 === e
            ? t.textColor
            : e > 0
            ? t.positiveTextColor
            : t.negativeTextColor;
        }
        textByPl() {
          const t = this.displayPl(),
            e = this._source.positionDisplayMode(),
            i = this.currency();
          if (null === t) return '';
          const o = (0, r.ensureNotNull)(this._data.pl),
            s = Math.abs(t),
            l = e !== V.PositionPLDisplay.Pips ? s.toFixed(2) : s,
            n = (0, L.splitThousands)(l, ' '),
            d = o > 0 ? '+ ' + n : o < 0 ? '− ' + n : n,
            c = (0, h.t)('{pips} pip', { plural: '{pips} pips', count: s, replace: { pips: d } }),
            u = (0, h.t)('{ticks} tick', {
              plural: '{ticks} ticks',
              count: s,
              replace: { ticks: d },
            });
          let _;
          switch (e) {
            case V.PositionPLDisplay.Money:
              _ = i ? `${d} ${i}` : d;
              break;
            case V.PositionPLDisplay.Pips:
              _ = this._source.pipValueType() === a.PipValueType.Pips ? c : u;
              break;
            case V.PositionPLDisplay.Percentage:
              _ = d + '%';
          }
          return (0, W.startWithLTR)(_);
        }
        clearRealtime() {
          this._symbolDataProvider.unsubscribeRealtime(this._data.symbol, this._updateLastHandler),
            this._symbolDataProvider.onStatusChanged.unsubscribeAll(this);
        }
        subscribeRealtime() {
          this._symbolDataProvider.subscribeRealtime(this._data.symbol, this._updateLastHandler),
            this._symbolDataProvider.onStatusChanged.subscribe(this, this._updateSymbolData),
            this._updateSymbolData();
        }
        id() {
          return this._data.id;
        }
        data() {
          return this._data;
        }
        setData(t) {
          var e;
          const { callbacks: i = {}, mainType: o, ...r } = t;
          this._callbacks = i;
          const s = null === (e = this.data()) || void 0 === e ? void 0 : e.pl;
          (this._data = r), this.data().pl !== s && this.displayPlChange();
        }
        isBuyDirection() {
          return 1 === this._data.side;
        }
        price() {
          return this._data.price;
        }
        priceText() {
          return this._symbolData.priceFormatter.format((0, r.ensureNotNull)(this._data.price));
        }
        qtyText() {
          return this._symbolData.quantityFormatter.format(this._data.qtyBySide);
        }
        qty() {
          return this._data.qtyBySide;
        }
        displayPlChange() {
          this._displayPlChanged.fire();
        }
        currency() {
          var t;
          return null !== (t = this._currency) && void 0 !== t ? t : '';
        }
        updateCurrency(t) {
          null === this._currency &&
            ((this._currency = ''),
            this._currencyGetter(t).then((t) => {
              (this._currency = t), this._displayPlChanged.fire(), this._source.redraw();
            }));
        }
        pl() {
          return this._data.pl;
        }
        displayPl() {
          if (!this._source.isPositionPLVisible()) return null;
          const { pl: t, side: e, price: i } = this._data;
          if (null === t) return null;
          const o = this._source.positionDisplayMode();
          if (o === V.PositionPLDisplay.Money) return (100 * t) / 100 || 0;
          const { trade: r, ask: s, bid: a } = this._last || {},
            l = -1 === e;
          let n = r;
          this._symbolData.calculatePLUsingLast || (n = l ? s : a), (n = Number(n || i));
          const d = (n - i) * (l ? -1 : 1);
          if (o === V.PositionPLDisplay.Pips) {
            const { pipSize: t, minTick: e } = this._symbolData,
              i = isFinite(t) && t !== e ? this._oneDecimalFormatter : this._integerFormatter;
            return parseFloat(i.format(d / (t || e)));
          }
          return (d / i) * 100;
        }
        profitState() {
          return this._data.profitState;
        }
        supportBrackets() {
          return this._data.supportBrackets;
        }
        supportOnlyPairBrackets() {
          return this._data.supportOnlyPairBrackets;
        }
        supportReverse() {
          return this._data.supportReverse;
        }
        async onReverse(t) {
          await this._doActionWithBlock('reversePosition', !0, t);
        }
        supportClose() {
          return !z && this._data.supportClose;
        }
        async onClose(t) {
          await this._doActionWithBlock('closePosition', !0, t);
        }
        supportModify() {
          return this._data.supportBrackets;
        }
        async onModify() {
          return this._doActionWithBlock(
            'modifyPosition',
            !0,
            'Chart Position',
            'Edit Position',
            '',
            void 0,
            void 0,
            !1
          );
        }
        async onModifyWithBracket(t, e = 'Edit Position', i = '', o = {}, r = !0, s, a = !0) {
          return this._doActionWithBlock('modifyPosition', r, t, e, i, o, s, a);
        }
        hasContextMenu() {
          return this.supportModify() || this.supportClose() || this.supportReverse();
        }
        async onContextMenu(t) {
          const e = {};
          this.supportClose() && (e.closePosition = this.onClose.bind(this)),
            this.supportReverse() && (e.reversePosition = this.onReverse.bind(this)),
            this.supportModify() && (e.modifyPosition = this.onModify.bind(this));
          (0, m.sideToText)(this._data.side),
            this.qtyText(),
            this.priceText(),
            this._formatPlWV,
            this._plColorWV;
          this._contextMenu = await F(
            e,
            () => {
              this._contextMenu = null;
            },
            t
          );
        }
        _updateLast(t, e) {
          var i, o, r;
          (this._symbolData.calculatePLUsingLast
            ? (null === (r = this._last) || void 0 === r ? void 0 : r.trade) !== e.trade
            : (null === (i = this._last) || void 0 === i ? void 0 : i.ask) !== e.ask &&
              (null === (o = this._last) || void 0 === o ? void 0 : o.bid) !== e.bid) &&
            ((this._last = { trade: e.trade || NaN, ask: e.ask || NaN, bid: e.bid || NaN }),
            this._source.positionDisplayMode() !== V.PositionPLDisplay.Money &&
              this._source.redraw(),
            this._displayPlChanged.fire());
        }
        async _updateSymbolData() {
          const [t, e, i] = await Promise.all([
            this._symbolDataProvider.symbolInfo(this._data.symbol),
            this._symbolDataProvider.quantityFormatter(this._data.symbol),
            this._symbolDataProvider.formatter(this._data.symbol),
          ]);
          (this._symbolData.minTick = t.minTick),
            (this._symbolData.pipSize = t.pipSize),
            (this._symbolData.quantityFormatter = e),
            (this._symbolData.priceFormatter = i);
          const o = this._symbolDataProvider.activeBroker();
          (this._symbolData.calculatePLUsingLast =
            (null == o ? void 0 : o.metainfo().configFlags.calculatePLUsingLast) || !1),
            this._source.positionDisplayMode() !== V.PositionPLDisplay.Money &&
              this._source.redraw();
        }
        async _doActionWithBlock(t, e, i = 'Chart Position', o = '', s = '', a = {}, l, n) {
          if (void 0 === this._callbacks[t]) return !1;
          e && this._source.setIsBlocked(!0);
          let d = !1;
          try {
            d =
              'modifyPosition' === t
                ? await (0, r.ensureDefined)(this._callbacks.modifyPosition)(
                    i,
                    o,
                    s,
                    this._data.id,
                    a,
                    l,
                    n
                  )
                : await (0, r.ensureDefined)(this._callbacks[t])(i, this._data.id);
          } catch (e) {
            U.logWarn(`Try to ${t}, but got error: ${(0, H.errorToString)(e)}`);
          } finally {
            e && (this._source.setIsBlocked(!1), this._source.syncData());
          }
          return d;
        }
      }
      var Q,
        $ = i(73771),
        Y = i(60084),
        X = i(40714),
        K = i(72196),
        J = i(49445),
        Z = i(44744),
        tt = i(85452),
        et = i(41352);
      function it(t, e, i, o, r, s, a, l) {
        t.save(),
          (t.textAlign = 'center'),
          (t.textBaseline = 'middle'),
          (t.fillStyle = a),
          (t.font = l),
          t.translate(o, r + s),
          (0, K.drawScaled)(t, e, () => {
            t.fillText(i, 0, 0);
          }),
          t.restore();
      }
      function ot(t, e, i, o, r, s) {
        t.save(), (t.fillStyle = s), t.fillRect(e, i, o, r), t.restore();
      }
      !(function (t) {
        (t[(t.Position = 0)] = 'Position'),
          (t[(t.WithBracketButtons = 1)] = 'WithBracketButtons'),
          (t[(t.Projection = 2)] = 'Projection'),
          (t[(t.Default = 3)] = 'Default');
      })(Q || (Q = {}));
      const rt = tt.CheckMobile.any();
      class st {
        constructor(t, e, i) {
          (this._height = rt ? 23 : 19),
            (this._bodyBorderRadius = 4),
            (this._font = null),
            (this._offsets = null),
            (this._cache = null),
            (this._cacheWithOffset = null),
            (this._wasSourceMoved = !1),
            (this._textWidthCache = e),
            (this._data = t),
            (this._font = i),
            this._initCtx();
        }
        setFont(t) {
          this._font !== t && ((this._font = t), this.clearCache());
        }
        data() {
          return this._data;
        }
        clearCache() {
          (this._cache = null), (this._cacheWithOffset = null);
        }
        applyOffset(t) {
          (this._offsets = t), this.clearCache();
        }
        hitTest(t, e) {
          const i = this._rectWithOffsets(e),
            o = e.pixelRatio,
            s = Math.round(t.x * o),
            a = Math.round(t.y * o),
            l = s >= i.body.left,
            n = s <= i.body.right,
            d = l && n;
          if (!(a >= i.top && a <= i.bottom) || !d) return null;
          const c = {
            cursorType: Z.PaneCursorType.Default,
            hideCrosshairLinesOnHover: !0,
            activeItem: { id: this._data.id, part: 6 },
          };
          if (this._data.disabled) return new J.HitTestResult(J.HitTestResult.CUSTOM, c);
          let h = {};
          if (void 0 !== this._data.callbacks.onMove) {
            const t = (t) => {
                var e;
                (null === (e = this._data) || void 0 === e ? void 0 : e.callbacks.onMove) &&
                  this._data.callbacks.onMove(t),
                  (this._wasSourceMoved = !0);
              },
              e = () => {
                var t;
                this._wasSourceMoved &&
                  (null === (t = this._data) || void 0 === t ? void 0 : t.callbacks.onFinishMove) &&
                  this._data.callbacks.onFinishMove(),
                  (this._wasSourceMoved = !1);
              };
            h = {
              cursorType: Z.PaneCursorType.Pointer,
              pressedMouseMoveHandler: t,
              touchMoveHandler: t,
              mouseUpHandler: e,
              touchEndHandler: e,
            };
          }
          const u = this._data.callbacks.onContextMenu,
            _ = this._data.callbacks.onContextMenu,
            p = {
              ...c,
              ...h,
              hasOwnShortcutsBehaviourFor: { shiftKey: !0 },
              contextMenuHandler: u,
              touchContextMenuHandler: _,
            },
            m = Math.round(i.body.left / o),
            b = Math.round(i.top / o);
          if (l && s < i.text.left && void 0 !== this._data.callbacks.onModify) {
            const t = Math.round(i.text.left / o);
            return new J.HitTestResult(J.HitTestResult.CUSTOM, {
              ...p,
              activeItem: { id: this._data.id, part: 1 },
              cursorType: Z.PaneCursorType.Default,
              clickHandler: this._data.callbacks.onModify,
              tapHandler: this._data.callbacks.onModify,
              tooltip: {
                extendMargin: !0,
                text: (0, r.ensureDefined)(this._data.qty).title,
                rect: { x: m, y: b, w: t - m, h: this._height },
              },
            });
          }
          if (s >= i.close.left && n && void 0 !== this._data.callbacks.onClose) {
            const t = Math.round(i.body.right / o),
              e = Math.round(i.close.left / o);
            return new J.HitTestResult(J.HitTestResult.CUSTOM, {
              ...p,
              activeItem: { id: this._data.id, part: 2 },
              cursorType: Z.PaneCursorType.Default,
              clickHandler: this._data.callbacks.onClose,
              tapHandler: this._data.callbacks.onClose,
              tooltip: {
                extendMargin: !0,
                text: (0, r.ensureDefined)(this._data.close).title,
                rect: { x: e, y: b, w: t - e, h: this._height },
              },
            });
          }
          return new J.HitTestResult(J.HitTestResult.CUSTOM, p);
        }
        drawBackground(t, e) {
          this._data.line.drawOnTop || this._drawLine(t, e);
        }
        drawLine(t, e) {
          this._isDataVisibleInViewport(e) && this._data.line.drawOnTop && this._drawLine(t, e);
        }
        drawPointOnLine(t, e, i) {
          if (!this._isDataVisibleInViewport(e) || !this._data.point.visible) return;
          const o = this._rectWithOffsets(e),
            r = Math.round(3 * e.pixelRatio),
            s = Math.max(1, Math.floor(1 * e.pixelRatio)),
            a = s / 2,
            l = 2.5 * e.pixelRatio + a,
            n = i + (a % 1 == 0 ? 0 : 0.5),
            d = o.yMid + (a % 1 == 0 ? 0 : 0.5);
          this._data.line.extend ||
            this._data.bodyAlignment !== V.TradingSourcesHorizontalAlignment.Left ||
            (t.save(),
            (t.strokeStyle = this._data.line.color),
            (t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * e.pixelRatio))),
            (0, X.setLineStyle)(t, this._data.line.style),
            (0, et.drawHorizontalLine)(t, o.yMid, n, o.left),
            t.restore()),
            t.save(),
            (t.lineWidth = s),
            (0, X.setLineStyle)(t, this._data.point.borderStyle),
            this._data.point.shadowColor &&
              !this._data.disabled &&
              ((t.fillStyle = this._data.point.shadowColor),
              (0, et.createCircle)(t, n, d, l + r),
              t.fill()),
            (t.strokeStyle = this._data.point.borderColor),
            (t.fillStyle = this._data.point.backgroundColor),
            (0, et.createCircle)(t, n, d, l),
            t.fill(),
            t.stroke(),
            t.restore();
        }
        draw(t, e) {
          const i = e.pixelRatio,
            o = this._rectWithOffsets(e);
          if (!this._isDataVisibleInViewport(e)) return;
          const s = 0 !== o.qty.width,
            a = 0 !== o.text.width,
            l = 0 !== o.close.width,
            n = o.body.right - o.body.left,
            d = o.body.bottom - o.body.top,
            c = o.body.top + o.borderWidth,
            h = d - 2 * o.borderWidth,
            u = o.borderRadius - o.borderWidth;
          (0, et.drawRoundRectWithInnerBorder)(
            t,
            o.body.left,
            o.body.top,
            n,
            d,
            this._data.borderBackgroundColor,
            o.borderRadius,
            o.borderWidth,
            this._data.borderColor,
            this._data.borderStyle
          );
          const _ = (o.body.top + o.body.bottom) / 2;
          let p = o.body.left + o.borderWidth;
          if (s) {
            const e = (0, r.ensureDefined)(this._data.qty),
              s = a || l ? [u, 0, 0, u] : u;
            (0, et.drawRoundRectWithInnerBorder)(
              t,
              o.qty.left,
              c,
              o.qty.width,
              h,
              e.backgroundColor,
              s
            ),
              e.active.visible &&
                (0, et.drawRoundRectWithInnerBorder)(
                  t,
                  o.qty.left,
                  c,
                  o.qty.width,
                  h,
                  e.active.backgroundColor,
                  s
                );
            const n = o.qty.left + o.qty.width / 2;
            this._drawText(t, i, e.text, e.textColor, n, _),
              (p += o.qty.width),
              o.qty.rightDividerWidth &&
                (ot(t, p, c, o.qty.rightDividerWidth, h, e.dividerColor),
                (p += o.qty.rightDividerWidth));
          }
          if (
            (a &&
              (this._drawTextWithBackground(t, i, o, !s, !l),
              (p += o.text.width),
              o.text.rightDividerWidth &&
                (ot(t, p, c, o.text.rightDividerWidth, h, this._data.text.dividerColor),
                (p += o.text.rightDividerWidth))),
            l)
          ) {
            const e = (0, r.ensureDefined)(this._data.close),
              s = o.body.right - p - o.borderWidth;
            (0, et.drawRoundRectWithInnerBorder)(t, p, c, s, h, e.backgroundColor, [0, u, u, 0]),
              e.active.visible &&
                (0, et.drawRoundRectWithInnerBorder)(t, p, c, s, h, e.active.backgroundColor, [
                  0,
                  u,
                  u,
                  0,
                ]),
              this._drawCloseButton(t, i, p, o.body.top, o.close.width, d, o.borderWidth);
          }
        }
        rect(t) {
          return null === this._cache && (this._cache = this._calculateCacheRect(t)), this._cache;
        }
        _rectWithOffsets(t) {
          return (
            null === this._cacheWithOffset &&
              (this._cacheWithOffset = this._calculateCacheRectWithOffsets(t)),
            this._cacheWithOffset
          );
        }
        _calculateCacheRect(t) {
          const e = t.pixelRatio,
            i = Math.round(t.cssWidth * e),
            o = Math.max(1, Math.floor(1 * e)),
            r = this._bodyBorderRadius,
            s = Math.max(r, Math.floor(r * e)),
            a = this._quantityWidth(this._ctxInternal),
            l = Math.round(a * e),
            n = this._mainTextWidth(this._ctxInternal),
            d = Math.round(n * e),
            c = this._data.callbacks.onClose ? this._closeWidth() : 0,
            h = Math.round(c * e);
          let u = 0;
          const _ = a && (n || c),
            p = n && c;
          (u += _ && 1), (u += p && 1);
          const m = l + d + h + o * u + 2 * o;
          let b = Math.round(this._height * e);
          const f = Math.max(1, Math.floor(e));
          b % 2 != f % 2 && (b += 1);
          const y = Math.round(this._data.y * e),
            v = Math.floor(y + f / 2 - b / 2) - Math.floor(0.5 * e),
            P =
              this._data.bodyAlignment === V.TradingSourcesHorizontalAlignment.Center
                ? Math.round((40 * i) / 100)
                : Math.round(this._data.rightPadding * e);
          let C = P;
          this._data.bodyAlignment === V.TradingSourcesHorizontalAlignment.Left && (C = i - P - m);
          const g = i - C,
            x = g - m,
            k = x + l + (l && o) + (l && o);
          return {
            borderWidth: o,
            borderRadius: s,
            yMid: y,
            top: v,
            bottom: v + b,
            left: x,
            right: g,
            body: { left: x, right: g, top: v, bottom: v + b },
            qty: { width: l, left: x + (l && o), rightDividerWidth: _ ? o : 0 },
            text: { width: d, left: k, rightDividerWidth: p ? o : 0 },
            close: { width: h, left: k + d + (d && o) },
          };
        }
        _calculateCacheRectWithOffsets(t) {
          const e = this.rect(t),
            { left: i, right: o } = this._calcCoordinateWithOffset(e.left, e.right),
            { left: r, right: s } = this._calcCoordinateWithOffset(e.body.left, e.body.right);
          return {
            ...e,
            left: i,
            right: o,
            body: { ...e.body, left: r, right: s },
            qty: {
              ...e.qty,
              left: this._calcCoordinateWithOffset(e.qty.left, e.qty.left + e.qty.width).left,
            },
            text: {
              ...e.text,
              left: this._calcCoordinateWithOffset(e.text.left, e.text.left + e.text.width).left,
            },
            close: {
              ...e.close,
              left: this._calcCoordinateWithOffset(e.close.left, e.close.left + e.close.width).left,
            },
          };
        }
        _calcCoordinateWithOffset(t, e) {
          var i, o, r, s;
          if (null !== this._cache) {
            const a =
              null !==
                (o =
                  null === (i = this._offsets) || void 0 === i
                    ? void 0
                    : i.leftmostForItemOffset) && void 0 !== o
                ? o
                : null;
            if (null !== a) {
              const i = t - (this._cache.left - a);
              return { left: i, right: i + (e - t) };
            }
            const l =
              null !==
                (s =
                  null === (r = this._offsets) || void 0 === r
                    ? void 0
                    : r.rightmostForItemOffset) && void 0 !== s
                ? s
                : null;
            if (null !== l) {
              const i = e + (l - this._cache.right);
              return { left: i - (e - t), right: i };
            }
          }
          return { left: t, right: e };
        }
        _calcAllWidth(t, e, i, o, r, s) {
          return e + i + o + r + 2 * s;
        }
        _isDataVisibleInViewport(t) {
          const e = Math.ceil(this._height / 2);
          return this._data.y >= -e && this._data.y <= t.cssHeight + e;
        }
        _mainTextWidth(t) {
          return this._textWidth(t, this._data.text.text);
        }
        _closeWidth() {
          return 23;
        }
        _textWidth(t, e) {
          if (!e) return 0;
          t.save(), (t.font = (0, r.ensureNotNull)(this._font));
          const i = Math.ceil(this._textWidthCache.measureText(t, e));
          return t.restore(), i ? Math.round(14 + i) : 0;
        }
        _drawLine(t, e) {
          const i = e.pixelRatio,
            o = this._rectWithOffsets(e),
            r = Math.round(e.physicalWidth);
          t.save(),
            (t.strokeStyle = this._data.line.color),
            (t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * i))),
            (0, X.setLineStyle)(t, this._data.line.style),
            (0, et.drawHorizontalLine)(t, o.yMid, o.body.right, r),
            this._data.line.extend && (0, et.drawHorizontalLine)(t, o.yMid, 0, o.body.left),
            t.restore();
        }
        _drawTextWithBackground(t, e, i, o, s) {
          const a = i.body.bottom - i.body.top,
            l = i.body.top + i.borderWidth,
            n = a - 2 * i.borderWidth,
            d = i.borderRadius - i.borderWidth;
          let c = 0;
          s ? (c = o ? d : [0, d, d, 0]) : o && (c = [d, 0, 0, d]),
            (0, et.drawRoundRectWithInnerBorder)(
              t,
              i.text.left,
              l,
              i.text.width,
              n,
              this._data.text.backgroundColor,
              c
            );
          const h = i.body.top + a / 2,
            u = i.text.left + i.text.width / 2,
            _ = (this._data.qty || this._data.text).text,
            p = this._textWidthCache.yMidCorrection(t, _) * e;
          it(
            t,
            e,
            this._data.text.text,
            u,
            h,
            p,
            this._data.text.textColor,
            (0, r.ensureNotNull)(this._font)
          );
        }
        _drawText(t, e, i, o, s, a) {
          it(
            t,
            e,
            i,
            s,
            a,
            this._textWidthCache.yMidCorrection(t, i) * e,
            o,
            (0, r.ensureNotNull)(this._font)
          );
        }
        _drawCloseButton(t, e, i, o, s, a, l) {
          const n = (0, r.ensureDefined)(this._data.close);
          t.save(), (t.lineWidth = l), (t.strokeStyle = n.iconColor);
          const d = o + a,
            h = Math.max(1, Math.ceil(7 * e)),
            u = Math.round((s - h) / 2),
            _ = Math.round((a - h) / 2);
          (0, X.drawPoly)(t, [new c.Point(i + u, o + _), new c.Point(i + u + h, d - _)], !0),
            (0, X.drawPoly)(t, [new c.Point(i + u + h, o + _), new c.Point(i + u, d - _)], !0),
            t.restore();
        }
        _quantityWidth(t) {
          var e;
          if (void 0 === this._data.qty) return 0;
          t.save(), (t.font = (0, r.ensureNotNull)(this._font));
          const i = Math.ceil(this._textWidthCache.measureText(t, this._data.qty.text));
          return (
            t.restore(),
            Math.round(
              Math.max(
                this._height,
                14 + i,
                null !== (e = this._data.qty.minTextWidth) && void 0 !== e ? e : 0
              )
            )
          );
        }
        _initCtx() {
          const t = document.createElement('canvas');
          (t.width = 0),
            (t.height = 0),
            (this._ctxInternal = (0, r.ensureNotNull)(t.getContext('2d')));
        }
      }
      const at = (0, h.t)('SL', { context: 'Stop loss' }),
        lt = (0, h.t)('TP', { context: 'Take profit' }),
        nt = (0, h.t)('Add Take Profit'),
        dt = (0, h.t)('Add Stop Loss');
      class ct extends B {
        price() {
          return this.data().price;
        }
        setPrice(t) {
          null !== t &&
            (t = (0, d.fixComputationError)(this._minTick * Math.round(t / this._minTick))),
            this.setData({ ...(0, s.clone)(this.data()), price: t });
        }
        // TEALSTREET TP / SL text
        text() {
          return this.bracketType() === a.BracketType.TakeProfit ? lt : at;
        }
        tooltip() {
          return this.bracketType() === a.BracketType.TakeProfit ? nt : dt;
        }
        isWorking() {
          return !0;
        }
        isMinifyMode() {
          return null === this.price();
        }
        bracketType() {
          // TEALSTREET maybe can use to hide brackets for certain types of orders?
          return this.data().bracketType;
        }
        isMovingEnabled() {
          return !0;
        }
        async onMove(t) {
          const e = new c.Point(t.localX, t.localY),
            i = this._mainSeries.priceScale(),
            o = this._mainSeries.firstValue();
          if (null === o) return;
          const r = i.coordinateToPrice(e.y, o);
          this.setPrice(r), t.isTouch && this._exitTrackingMode();
        }
        _calcId() {
          return this.bracketType();
        }
      }
      class ht extends B {
        isWorking() {
          return !1;
        }
        async onFinishMove(t, e, i = {}, o = !0, a) {
          this._source.setIsBlocked(o);
          const l = (0, s.clone)(this.data()),
            n = (0, r.ensureNotNull)(l.price);
          (l.limitPrice = n),
            (l.takeProfit = i.takeProfit || l.takeProfit),
            (l.stopLoss = i.stopLoss || l.stopLoss),
            await this._addTrailingStopPipsData(l),
            void 0 === a && (a = 1);
          const d = await (0, r.ensureDefined)(this._callbacks.moveOrder)(
            'Chart Order',
            t,
            e,
            l.id,
            l,
            a
          );
          return (this._inEdit = !1), this._source.setIsBlocked(!1), this._source.syncData(), d;
        }
        supportClose() {
          return !1;
        }
        _calcId() {
          return this.data().type;
        }
      }
      function ut(t) {
        return 'pl' in t && 'displayPl' in t && 'profitState' in t && 'onReverse' in t;
      }
      function _t(t) {
        return (
          (function (t) {
            return 'isMovingEnabled' in t && 'onMove' in t && 'onFinishMove' in t;
          })(t) &&
          'bracketType' in t &&
          'isWorking' in t
        );
      }
      function pt(t) {
        return t instanceof ct;
      }
      function mt(t) {
        return t instanceof ht;
      }
      var bt = i(84929),
        ft = i(14563);
      const yt = (t, e) =>
        (0, ft.rgbaToString)((0, ft.blendRgba)((0, ft.parseRgba)(t), (0, ft.parseRgba)(e)));
      function vt(t, e) {
        const i = (0, s.clone)(t);
        for (const [o, r] of Object.entries(t)) i[o] = 'string' == typeof r ? yt(r, e) : vt(r, e);
        return i;
      }
      const Pt = (0, Y.generateColor)(bt.colorsPalette['color-tv-blue-500'], 85),
        Ct =
          ((0, Y.generateColor)(bt.colorsPalette['color-tv-blue-500'], 80),
          (0, Y.generateColor)(bt.colorsPalette['color-ripe-red-500'], 85)),
        gt =
          ((0, Y.generateColor)(bt.colorsPalette['color-ripe-red-500'], 80),
          (0, Y.generateColor)(bt.colorsPalette['color-minty-green-500'], 85)),
        xt =
          ((0, Y.generateColor)(bt.colorsPalette['color-minty-green-500'], 80),
          (0, Y.generateColor)(bt.colorsPalette['color-tan-orange-500'], 85)),
        kt =
          ((0, Y.generateColor)(bt.colorsPalette['color-tan-orange-500'], 80),
          (0, Y.generateColor)(bt.colorsPalette['color-tv-blue-500'], 70)),
        wt = (0, Y.generateColor)(bt.colorsPalette['color-ripe-red-500'], 70),
        St = (0, Y.generateColor)(bt.colorsPalette['color-minty-green-500'], 70),
        Tt = (0, Y.generateColor)(bt.colorsPalette['color-tan-orange-500'], 70),
        Mt = (0, Y.generateColor)(bt.colorsPalette['color-cold-gray-900'], 50),
        It = {
          pointShadowColor: kt,
          labelTickColor: bt.colorsPalette['color-tv-blue-500'],
          lineColor: bt.colorsPalette['color-tv-blue-500'],
          borderBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          borderColor: bt.colorsPalette['color-tv-blue-500'],
          pointBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          disabledLineColor: bt.colorsPalette['color-tv-blue-a700'],
          qty: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-tv-blue-500'],
            dividerColor: bt.colorsPalette['color-tv-blue-a800'],
            activeColor: Pt,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-tv-blue-500'],
            dividerColor: bt.colorsPalette['color-tv-blue-a800'],
            buttonTextColor: bt.colorsPalette['color-tv-blue-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            iconColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: Pt,
          },
        },
        Bt = {
          pointShadowColor: wt,
          labelTickColor: bt.colorsPalette['color-ripe-red-500'],
          lineColor: bt.colorsPalette['color-ripe-red-500'],
          borderBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          borderColor: bt.colorsPalette['color-ripe-red-500'],
          pointBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          disabledLineColor: bt.colorsPalette['color-ripe-red-a800'],
          qty: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-ripe-red-a800'],
            activeColor: Ct,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-ripe-red-a800'],
            buttonTextColor: bt.colorsPalette['color-ripe-red-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            iconColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: Ct,
          },
        },
        Dt = {
          pointShadowColor: St,
          labelTickColor: bt.colorsPalette['color-minty-green-500'],
          lineColor: bt.colorsPalette['color-minty-green-500'],
          borderBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          borderColor: bt.colorsPalette['color-minty-green-500'],
          qty: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-minty-green-500'],
            dividerColor: '#0D3D41',
            activeColor: gt,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-minty-green-500'],
            dividerColor: '#0D3D41',
            buttonTextColor: bt.colorsPalette['color-minty-green-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            iconColor: bt.colorsPalette['color-minty-green-500'],
            activeColor: gt,
          },
        },
        Rt = {
          pointShadowColor: Tt,
          labelTickColor: bt.colorsPalette['color-tan-orange-500'],
          lineColor: bt.colorsPalette['color-tan-orange-500'],
          borderBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          borderColor: bt.colorsPalette['color-tan-orange-500'],
          qty: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-tan-orange-500'],
            dividerColor: '#453826',
            activeColor: xt,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-tan-orange-500'],
            dividerColor: '#453826',
            buttonTextColor: bt.colorsPalette['color-tan-orange-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            iconColor: bt.colorsPalette['color-tan-orange-500'],
            activeColor: xt,
          },
        },
        Lt = {
          buy: { normal: It, disabled: vt(It, Mt) },
          sell: { normal: Bt, disabled: vt(Bt, Mt) },
          takeProfit: { normal: Dt, disabled: vt(Dt, Mt) },
          stopLoss: { normal: Rt, disabled: vt(Rt, Mt) },
        },
        Wt = (0, Y.generateColor)(bt.colorsPalette['color-tv-blue-500'], 80),
        Ot = (0, Y.generateColor)(bt.colorsPalette['color-ripe-red-500'], 80),
        At = (0, Y.generateColor)(bt.colorsPalette['color-minty-green-500'], 80),
        Vt = (0, Y.generateColor)(bt.colorsPalette['color-tan-orange-500'], 80),
        Ht = (0, Y.generateColor)(bt.colorsPalette['color-white'], 50),
        Et = {
          pointShadowColor: Wt,
          labelTickColor: bt.colorsPalette['color-tv-blue-500'],
          lineColor: bt.colorsPalette['color-tv-blue-500'],
          borderBackgroundColor: bt.colorsPalette['color-white'],
          borderColor: bt.colorsPalette['color-tv-blue-500'],
          pointBackgroundColor: bt.colorsPalette['color-white'],
          disabledLineColor: bt.colorsPalette['color-tv-blue-100'],
          qty: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-tv-blue-500'],
            dividerColor: bt.colorsPalette['color-tv-blue-50'],
            activeColor: Pt,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-tv-blue-500'],
            dividerColor: bt.colorsPalette['color-tv-blue-50'],
            buttonTextColor: bt.colorsPalette['color-tv-blue-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-white'],
            iconColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: Pt,
          },
        },
        Ft = {
          pointShadowColor: Ot,
          labelTickColor: bt.colorsPalette['color-ripe-red-500'],
          lineColor: bt.colorsPalette['color-ripe-red-500'],
          borderBackgroundColor: bt.colorsPalette['color-white'],
          borderColor: bt.colorsPalette['color-ripe-red-500'],
          pointBackgroundColor: bt.colorsPalette['color-white'],
          disabledLineColor: bt.colorsPalette['color-ripe-red-100'],
          qty: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-ripe-red-50'],
            activeColor: Ct,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-ripe-red-50'],
            buttonTextColor: bt.colorsPalette['color-ripe-red-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-white'],
            iconColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: Ct,
          },
        },
        Nt = {
          pointShadowColor: At,
          labelTickColor: bt.colorsPalette['color-minty-green-500'],
          lineColor: bt.colorsPalette['color-minty-green-500'],
          borderBackgroundColor: bt.colorsPalette['color-white'],
          borderColor: bt.colorsPalette['color-minty-green-500'],
          qty: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-minty-green-500'],
            dividerColor: bt.colorsPalette['color-minty-green-50'],
            activeColor: gt,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-minty-green-500'],
            dividerColor: bt.colorsPalette['color-minty-green-50'],
            buttonTextColor: bt.colorsPalette['color-minty-green-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-white'],
            iconColor: bt.colorsPalette['color-minty-green-500'],
            activeColor: gt,
          },
        },
        qt = {
          pointShadowColor: Vt,
          labelTickColor: bt.colorsPalette['color-tan-orange-500'],
          lineColor: bt.colorsPalette['color-tan-orange-500'],
          borderBackgroundColor: bt.colorsPalette['color-white'],
          borderColor: bt.colorsPalette['color-tan-orange-500'],
          qty: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-tan-orange-500'],
            dividerColor: bt.colorsPalette['color-tan-orange-50'],
            activeColor: xt,
          },
          text: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-tan-orange-500'],
            dividerColor: bt.colorsPalette['color-tan-orange-50'],
            buttonTextColor: bt.colorsPalette['color-tan-orange-500'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-white'],
            iconColor: bt.colorsPalette['color-tan-orange-500'],
            activeColor: xt,
          },
        },
        jt = {
          buy: { normal: Et, disabled: vt(Et, Ht) },
          sell: { normal: Ft, disabled: vt(Ft, Ht) },
          takeProfit: { normal: Nt, disabled: vt(Nt, Ht) },
          stopLoss: { normal: qt, disabled: vt(qt, Ht) },
        };
      function Ut(t, e, i, o = {}) {
        const r = i() ? Lt : jt;
        let s;
        const l = t.bracketType();
        s =
          null !== l
            ? l === a.BracketType.TakeProfit
              ? r.takeProfit
              : r.stopLoss
            : t.isBuyDirection()
            ? r.buy
            : r.sell;
        const n = pt(t),
          d = e.isBlocked() ? s.disabled : s.normal,
          c = !t.isWorking(),
          h = n ? $.LineStyle.Solid : c ? $.LineStyle.Solid : $.LineStyle.Dashed;
          // TEALSTREET customize order line style
        return { ...d, lineStyle: $.LineStyle.Dashed, borderStyle: $.LineStyle.Solid, labelBorderVisible: !0, ...o };
      }
      const zt = {
          pointShadowColor: kt,
          lineColor: bt.colorsPalette['color-tv-blue-500'],
          borderBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          borderColor: bt.colorsPalette['color-tv-blue-500'],
          pointBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          disabledLineColor: bt.colorsPalette['color-tv-blue-a700'],
          qty: {
            backgroundColor: bt.colorsPalette['color-tv-blue-500'],
            textColor: bt.colorsPalette['color-white'],
            dividerColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: bt.colorsPalette['color-tv-blue-600'],
          },
          text: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-cold-gray-600'],
            positiveTextColor: bt.colorsPalette['color-minty-green-500'],
            negativeTextColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-tv-blue-a800'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            iconColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: Pt,
          },
          reverse: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            borderColor: bt.colorsPalette['color-tv-blue-500'],
            iconColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: Pt,
          },
        },
        Gt = {
          pointShadowColor: wt,
          lineColor: bt.colorsPalette['color-ripe-red-500'],
          borderBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          borderColor: bt.colorsPalette['color-ripe-red-500'],
          pointBackgroundColor: bt.colorsPalette['color-cold-gray-900'],
          disabledLineColor: bt.colorsPalette['color-ripe-red-a800'],
          qty: {
            backgroundColor: bt.colorsPalette['color-ripe-red-500'],
            textColor: bt.colorsPalette['color-white'],
            dividerColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: bt.colorsPalette['color-ripe-red-600'],
          },
          text: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            textColor: bt.colorsPalette['color-cold-gray-600'],
            positiveTextColor: bt.colorsPalette['color-minty-green-500'],
            negativeTextColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-ripe-red-a800'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            iconColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: Ct,
          },
          reverse: {
            backgroundColor: bt.colorsPalette['color-cold-gray-900'],
            borderColor: bt.colorsPalette['color-ripe-red-500'],
            iconColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: Ct,
          },
        },
        Qt = {
          buy: { normal: zt, disabled: vt(zt, Mt) },
          sell: { normal: Gt, disabled: vt(Gt, Mt) },
        },
        $t = {
          pointShadowColor: Wt,
          lineColor: bt.colorsPalette['color-tv-blue-500'],
          borderBackgroundColor: bt.colorsPalette['color-white'],
          borderColor: bt.colorsPalette['color-tv-blue-500'],
          pointBackgroundColor: bt.colorsPalette['color-white'],
          disabledLineColor: bt.colorsPalette['color-tv-blue-100'],
          qty: {
            backgroundColor: bt.colorsPalette['color-tv-blue-500'],
            textColor: bt.colorsPalette['color-white'],
            dividerColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: bt.colorsPalette['color-tv-blue-600'],
          },
          text: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-cold-gray-300'],
            positiveTextColor: bt.colorsPalette['color-minty-green-500'],
            negativeTextColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-tv-blue-50'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-white'],
            iconColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: Pt,
          },
          reverse: {
            backgroundColor: bt.colorsPalette['color-white'],
            borderColor: bt.colorsPalette['color-tv-blue-500'],
            iconColor: bt.colorsPalette['color-tv-blue-500'],
            activeColor: Pt,
          },
        },
        Yt = {
          pointShadowColor: Ot,
          lineColor: bt.colorsPalette['color-ripe-red-500'],
          borderBackgroundColor: bt.colorsPalette['color-white'],
          borderColor: bt.colorsPalette['color-ripe-red-500'],
          pointBackgroundColor: bt.colorsPalette['color-white'],
          disabledLineColor: bt.colorsPalette['color-ripe-red-100'],
          qty: {
            backgroundColor: bt.colorsPalette['color-ripe-red-500'],
            textColor: bt.colorsPalette['color-white'],
            dividerColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: bt.colorsPalette['color-ripe-red-600'],
          },
          text: {
            backgroundColor: bt.colorsPalette['color-white'],
            textColor: bt.colorsPalette['color-cold-gray-300'],
            positiveTextColor: bt.colorsPalette['color-minty-green-500'],
            negativeTextColor: bt.colorsPalette['color-ripe-red-500'],
            dividerColor: bt.colorsPalette['color-ripe-red-50'],
          },
          close: {
            backgroundColor: bt.colorsPalette['color-white'],
            iconColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: Ct,
          },
          reverse: {
            backgroundColor: bt.colorsPalette['color-white'],
            borderColor: bt.colorsPalette['color-ripe-red-500'],
            iconColor: bt.colorsPalette['color-ripe-red-500'],
            activeColor: Ct,
          },
        },
        Xt = {
          buy: { normal: $t, disabled: vt($t, Ht) },
          sell: { normal: Yt, disabled: vt(Yt, Ht) },
        };
      function Kt(t, e, i) {
        const o = i() ? Qt : Xt,
          r = t.isBuyDirection() ? o.buy : o.sell;
        // TEALSTREET change position line style
        return {
          ...(e.isBlocked() ? r.disabled : r.normal),
          lineStyle: $.LineStyle.Solid,
          borderStyle: $.LineStyle.Solid,
          labelBorderVisible: !1,
        };
      }
      var Jt = i(57635),
        Zt = i(5054),
        te = i(75740),
        ee = i(43304);
      function ie(t) {
        return t.hasOwnProperty('tp') && t.hasOwnProperty('sl');
      }
      class oe extends st {
        constructor() {
          super(...arguments), (this._wasTPMoved = !1), (this._wasSLMoved = !1);
        }
        hitTest(t, e) {
          const i = e.pixelRatio,
            o = this._rectWithOffsets(e),
            s = Math.round(t.x * i),
            a = Math.round(t.y * i),
            l = s >= o.left,
            n = s <= o.right,
            d = l && n;
          if (!(a >= o.top && a <= o.bottom) || !d) return null;
          const c = {
            cursorType: Z.PaneCursorType.Default,
            hideCrosshairLinesOnHover: !0,
            activeItem: { id: this._data.id, part: 6 },
            contextMenuHandler: this._data.callbacks.onContextMenu,
            touchContextMenuHandler: this._data.callbacks.onContextMenu,
          };
          if (this._data.disabled) return new J.HitTestResult(J.HitTestResult.CUSTOM, c);
          const h = Math.round(o.top / i),
            u =
              void 0 !== this._data.callbacks.onMoveProjectionTP &&
              1 === (0, r.ensureDefined)(this._data.tp).visibility;
          if (u && s >= o.tp.left && s < o.tp.left + o.tp.width) {
            const t = Math.round(o.tp.left / i),
              e = Math.round(o.tp.width / i),
              s = (t) => {
                var e;
                (null === (e = this._data) || void 0 === e
                  ? void 0
                  : e.callbacks.onMoveProjectionTP) && this._data.callbacks.onMoveProjectionTP(t),
                  (this._wasTPMoved = !0);
              },
              a = () => {
                var t;
                this._wasTPMoved &&
                  (null === (t = this._data) || void 0 === t
                    ? void 0
                    : t.callbacks.onFinishMoveTP) &&
                  this._data.callbacks.onFinishMoveTP(),
                  (this._wasTPMoved = !1);
              };
            return new J.HitTestResult(J.HitTestResult.CUSTOM, {
              ...c,
              activeItem: { id: (0, r.ensureDefined)(this._data.tp).id, part: 4 },
              pressedMouseMoveHandler: s,
              touchMoveHandler: s,
              mouseUpHandler: a,
              touchEndHandler: a,
              tooltip: {
                extendMargin: !0,
                text: (0, r.ensureDefined)(this._data.tp).title,
                rect: { x: t, y: h, w: e, h: this._height },
              },
            });
          }
          const _ = o.sl.left + o.sl.width,
            p =
              void 0 !== this._data.callbacks.onMoveProjectionSL &&
              1 === (0, r.ensureDefined)(this._data.sl).visibility;
          if (p && s >= o.sl.left && s < _) {
            const t = Math.round(o.sl.width / i),
              e = Math.round(o.sl.left / i),
              s = (t) => {
                var e;
                (null === (e = this._data) || void 0 === e
                  ? void 0
                  : e.callbacks.onMoveProjectionSL) && this._data.callbacks.onMoveProjectionSL(t),
                  (this._wasSLMoved = !0);
              },
              a = () => {
                var t;
                this._wasSLMoved &&
                  (null === (t = this._data) || void 0 === t
                    ? void 0
                    : t.callbacks.onFinishMoveSL) &&
                  this._data.callbacks.onFinishMoveSL(),
                  (this._wasSLMoved = !1);
              };
            return new J.HitTestResult(J.HitTestResult.CUSTOM, {
              ...c,
              activeItem: { id: (0, r.ensureDefined)(this._data.sl).id, part: 5 },
              cursorType: Z.PaneCursorType.Default,
              pressedMouseMoveHandler: s,
              touchMoveHandler: s,
              mouseUpHandler: a,
              touchEndHandler: a,
              tooltip: {
                extendMargin: !0,
                text: (0, r.ensureDefined)(this._data.sl).title,
                rect: { x: e, y: h, w: t, h: this._height },
              },
            });
          }
          const m =
            _ - o.body.left < 0 ? s >= _ && s < o.body.left : s >= o.body.right && s < o.tp.left;
          return (u || p) && m
            ? new J.HitTestResult(J.HitTestResult.CUSTOM, c)
            : super.hitTest(t, e);
        }
        draw(t, e) {
          if ((super.draw(t, e), !this._isTPSLVisible() || !this._isDataVisibleInViewport(e)))
            return;
          const i = this._rectWithOffsets(e),
            o = i.body.bottom - i.body.top,
            s = (i.body.top + i.body.bottom) / 2;
          0 !== i.tp.width &&
            1 === (0, r.ensureDefined)(this._data.tp).visibility &&
            this._drawBracketButton(t, e, o, i.borderRadius, s, i.tp, this._data.tp),
            0 !== i.sl.width &&
              1 === (0, r.ensureDefined)(this._data.sl).visibility &&
              this._drawBracketButton(t, e, o, i.borderRadius, s, i.sl, this._data.sl);
        }
        rect(t) {
          return super.rect(t);
        }
        _rectWithOffsets(t) {
          return super._rectWithOffsets(t);
        }
        _calculateCacheRectWithOffsets(t) {
          const e = super._calculateCacheRectWithOffsets(t);
          return {
            ...e,
            tp: {
              ...e.tp,
              left: this._calcCoordinateWithOffset(e.tp.left, e.tp.left + e.tp.width).left,
            },
            sl: {
              ...e.sl,
              left: this._calcCoordinateWithOffset(e.sl.left, e.sl.left + e.sl.width).left,
            },
          };
        }
        _calculateCacheRect(t) {
          const e = super._calculateCacheRect(t),
            i = this._calcTPSLRect(t.pixelRatio, e.borderWidth);
          let o = 0,
            r = 0;
          this._data.bodyAlignment === V.TradingSourcesHorizontalAlignment.Left
            ? ((r = e.body.right + i.offset), (o = r + i.tp - (i.tp > 0 ? e.borderWidth : 0)))
            : ((o = e.body.left - i.offset - i.sl),
              (r = o - (i.tp > 0 ? i.tp - e.borderWidth : 0)));
          let s = r,
            a = e.right;
          return (
            this._data.bodyAlignment === V.TradingSourcesHorizontalAlignment.Left &&
              ((s = e.left), (a = o + i.sl)),
            { ...e, left: s, right: a, tp: { width: i.tp, left: r }, sl: { width: i.sl, left: o } }
          );
        }
        _drawLine(t, e) {
          var i, o, r, s;
          if (
            !(null === (i = this._data) || void 0 === i ? void 0 : i.callbacks.onFinishMoveSL) &&
            !(null === (o = this._data) || void 0 === o ? void 0 : o.callbacks.onFinishMoveTP)
          )
            return void super._drawLine(t, e);
          const a = e.pixelRatio,
            l = this._rectWithOffsets(e),
            n = Math.round(e.physicalWidth);
          if (
            (t.save(),
            (t.strokeStyle = this._data.line.color),
            (t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * a))),
            (0, X.setLineStyle)(t, this._data.line.style),
            (0, et.drawHorizontalLine)(t, l.yMid, l.body.right, n),
            this._data.line.extend)
          )
            (0, et.drawHorizontalLine)(t, l.yMid, 0, l.body.left);
          else {
            const e = 1 === (null === (r = this._data.tp) || void 0 === r ? void 0 : r.visibility),
              i = 1 === (null === (s = this._data.sl) || void 0 === s ? void 0 : s.visibility);
            if (e || i) {
              const e = i ? l.sl.left + l.sl.width : l.tp.left + l.tp.width;
              (0, et.drawHorizontalLine)(t, l.yMid, e, l.body.left);
            }
          }
          t.restore();
        }
        _calcAllWidth(t, e, i, o, r, s) {
          const a = super._calcAllWidth(t, e, i, o, r, s);
          if (!this._data.tp && !this._data.sl) return a;
          const l = this._calcTPSLRect(t, s);
          return a + l.tp + l.sl + l.offset;
        }
        _calcTPSLRect(t, e) {
          const i = 2 * e,
            o = this._textWidth(
              this._ctxInternal,
              void 0 !== this._data.tp ? this._data.tp.text : ''
            ),
            r = Math.round(o * t) + (o && i),
            s = this._textWidth(
              this._ctxInternal,
              void 0 !== this._data.sl ? this._data.sl.text : ''
            ),
            a = Math.round(s * t) + (s && i);
          return { tp: r, sl: a, offset: a > 0 || r > 0 ? Math.round(10 * t) : 0 };
        }
        _drawBracketButton(t, e, i, o, r, s, a) {
          if (void 0 === a) return;
          const l = this._rectWithOffsets(e);
          (0, et.drawRoundRectWithInnerBorder)(
            t,
            s.left,
            l.body.top,
            s.width,
            i,
            a.backgroundColor,
            o
          ),
            a.active.visible &&
              (0, et.drawRoundRectWithInnerBorder)(
                t,
                s.left,
                l.body.top,
                s.width,
                i,
                a.active.backgroundColor,
                o
              ),
            (0, et.drawRoundRectWithInnerBorder)(
              t,
              s.left,
              l.body.top,
              s.width,
              i,
              'transparent',
              o,
              l.borderWidth,
              a.borderColor,
              a.borderStyle
            );
          const n = s.left + s.width / 2;
          this._drawText(t, e.pixelRatio, a.text, a.textColor, n, r);
        }
        _isTPSLVisible() {
          return Boolean(this._data.tp) || Boolean(this._data.sl);
        }
      }
      class re extends oe {
        constructor() {
          super(...arguments), (this._bodyBorderRadius = 4), (this._lastTextWidth = 0);
        }
        hitTest(t, e) {
          const i = e.pixelRatio,
            o = this._rectWithOffsets(e),
            s = Math.round(t.x * i),
            a = Math.round(t.y * i),
            l = s >= o.left,
            n = s <= o.right,
            d = l && n,
            c = a >= o.top && a <= o.bottom,
            h = Math.round(o.top / i);
          if (!c || !d) return null;
          const u = {
            cursorType: Z.PaneCursorType.Default,
            hideCrosshairLinesOnHover: !0,
            activeItem: { id: this._data.id, part: 6 },
          };
          if (this._data.disabled) return new J.HitTestResult(J.HitTestResult.CUSTOM, u);
          const _ = this._hasReverseButton() && (0, r.ensureDefined)(this._data.reverse);
          if (_ && 1 === _.visibility) {
            const t = o.reverse.left + o.reverse.width;
            if (s >= o.reverse.left && s < t) {
              const t = Math.round(o.reverse.left / i),
                e = Math.round(o.reverse.width / i);
              return new J.HitTestResult(J.HitTestResult.CUSTOM, {
                activeItem: { id: this._data.id, part: 3 },
                cursorType: Z.PaneCursorType.Default,
                hideCrosshairLinesOnHover: !0,
                contextMenuHandler: this._data.callbacks.onContextMenu,
                touchContextMenuHandler: this._data.callbacks.onContextMenu,
                clickHandler: this._data.callbacks.onReverse,
                tapHandler: this._data.callbacks.onReverse,
                tooltip: { text: _.title, rect: { x: t, y: h, w: e, h: this._height } },
              });
            }
            const r = this._calcReverseRect(e.pixelRatio).offset;
            if (
              t - o.body.left < 0
                ? s >= t && s < o.tp.left
                : s >= o.reverse.left - r && s < o.reverse.left
            )
              return new J.HitTestResult(J.HitTestResult.CUSTOM, u);
          }
          return super.hitTest(t, e);
        }
        draw(t, e) {
          if ((super.draw(t, e), !this._isReverseVisible() || !this._isDataVisibleInViewport(e)))
            return;
          const i = this._rectWithOffsets(e);
          this._drawReverseButton(
            t,
            e.pixelRatio,
            i.reverse.left,
            i.top,
            i.reverse.width,
            i.bottom - i.top,
            i.borderWidth,
            i.borderRadius
          );
        }
        rect(t) {
          return super.rect(t);
        }
        _rectWithOffsets(t) {
          return super._rectWithOffsets(t);
        }
        _calculateCacheRectWithOffsets(t) {
          const e = super._calculateCacheRectWithOffsets(t);
          return {
            ...e,
            reverse: {
              ...e.reverse,
              left: this._calcCoordinateWithOffset(e.reverse.left, e.reverse.left + e.reverse.width)
                .left,
            },
          };
        }
        _calculateCacheRect(t) {
          var e;
          const i = super._calculateCacheRect(t);
          if (
            !(null === (e = this._data) || void 0 === e ? void 0 : e.callbacks.onReverse) ||
            !this._hasReverseButton()
          )
            return { ...i, reverse: { width: 0, left: 0 } };
          const o = this._calcReverseRect(t.pixelRatio),
            r = this._data.bodyAlignment === V.TradingSourcesHorizontalAlignment.Left,
            s = r ? i.right + o.offset : i.left - o.width - o.offset,
            a = r ? i.left : s,
            l = r ? s + o.width : i.right;
          return { ...i, left: a, right: l, reverse: { width: o.width, left: s } };
        }
        _calcAllWidth(t, e, i, o, r, s) {
          var a;
          const l = super._calcAllWidth(t, e, i, o, r, s);
          if (
            !(null === (a = this._data) || void 0 === a ? void 0 : a.callbacks.onReverse) ||
            !this._hasReverseButton()
          )
            return l;
          const n = this._calcReverseRect(t);
          return l + n.width + n.offset;
        }
        _mainTextWidth(t) {
          if (!this._data.text.text) return 0;
          t.save(), (t.font = (0, r.ensureNotNull)(this._font));
          const e = Math.ceil(this._textWidthCache.measureText(t, this._data.text.text));
          if (e > this._lastTextWidth) {
            const i = Math.ceil(this._textWidthCache.measureText(t, '0'));
            this._lastTextWidth = e + i;
          }
          return t.restore(), Math.round(14 + this._lastTextWidth);
        }
        _drawLine(t, e) {
          var i;
          if (!(null === (i = this._data) || void 0 === i ? void 0 : i.callbacks.onReverse))
            return void super._drawLine(t, e);
          const o = e.pixelRatio,
            r = this._rectWithOffsets(e),
            s = Math.round(e.physicalWidth),
            a = r.reverse.left + r.reverse.width;
          if (
            (t.save(),
            (t.strokeStyle = this._data.line.color),
            (t.lineWidth = Math.max(1, Math.floor(this._data.line.thickness * o))),
            (0, X.setLineStyle)(t, this._data.line.style),
            (0, et.drawHorizontalLine)(t, r.yMid, r.body.right, s),
            this._isReverseVisible() && (0, et.drawHorizontalLine)(t, r.yMid, a, r.body.left),
            this._data.line.extend)
          ) {
            const e = this._isReverseVisible() ? r.reverse.left : r.body.left;
            (0, et.drawHorizontalLine)(t, r.yMid, 0, e);
          }
          t.restore();
        }
        _calcReverseRect(t) {
          return { width: Math.round(29 * t), offset: Math.round(10 * t) };
        }
        _drawReverseButton(t, e, i, o, s, a, l, n) {
          const d = (0, r.ensureDefined)(this._data.reverse),
            c = d.active;
          t.save(),
            (0, et.drawRoundRectWithInnerBorder)(
              t,
              i,
              o,
              s,
              a,
              d.backgroundColor,
              n,
              l,
              this._data.borderColor
            ),
            c.visible &&
              (0, et.drawRoundRectWithInnerBorder)(
                t,
                i,
                o,
                s,
                a,
                c.backgroundColor,
                n,
                l,
                'transparent'
              );
          const h = Math.round(3 * e),
            u = Math.round(3 * e),
            _ = Math.round(9 * e),
            p = Math.round(i + (s - h) / 2),
            m = Math.round(p + h),
            b = o + l + Math.round((a - _) / 2 - l),
            f = b + _,
            y = d.iconColor;
          (t.lineWidth = l),
            (0, ee.drawHalfArrow)(t, p, b, y, !1, _, u),
            (0, ee.drawHalfArrow)(t, m, f, y, !0, _, u),
            t.restore();
        }
        _isReverseVisible() {
          return (
            this._hasReverseButton() && 1 === (0, r.ensureDefined)(this._data.reverse).visibility
          );
        }
        _hasReverseButton() {
          return Boolean(this._data.callbacks.onReverse && this._data.reverse);
        }
      }
      class se extends st {
        constructor() {
          super(...arguments), (this._left = 0);
        }
        hitTest(t, e) {
          const i = e.pixelRatio,
            o = this._rectWithOffsets(e),
            r = Math.round(t.x * i),
            s = Math.round(t.y * i),
            a = r >= o.left,
            l = r <= o.right,
            n = a && l;
          if (!(s >= o.top && s <= o.bottom) || !n) return null;
          const d = {
            cursorType: Z.PaneCursorType.Default,
            hideCrosshairLinesOnHover: !0,
            activeItem: { id: this._data.id },
          };
          return this._data.disabled
            ? new J.HitTestResult(J.HitTestResult.CUSTOM, d)
            : new J.HitTestResult(J.HitTestResult.CUSTOM, {
                ...d,
                activeItem: { id: this._data.id, part: 6 },
              });
        }
        applyOffset(t) {
          const e = (0, r.ensureDefined)(
            this._data.drawWithTPOffset
              ? t.projItemTpLeft
              : this._data.drawWithSLOffset
              ? t.projItemSlLeft
              : 0
          );
          this._left !== e && ((this._left = e), this.clearCache());
        }
        _drawTextWithBackground(t, e, i, o, r) {
          const s = i.body.right - i.body.left,
            a = i.body.bottom - i.body.top,
            l = this._data.text.active,
            n = l.visible ? l.backgroundColor : this._data.borderBackgroundColor;
          (0, et.drawRoundRectWithInnerBorder)(
            t,
            i.body.left,
            i.body.top,
            s,
            a,
            n,
            i.borderRadius,
            i.borderWidth,
            this._data.borderColor,
            this._data.borderStyle
          );
          const d = i.body.left + i.borderWidth + i.text.width / 2,
            c = (i.body.top + i.body.bottom) / 2;
          this._drawText(t, e, this._data.text.text, this._data.text.textColor, d, c);
        }
        _calculateCacheRect(t) {
          const e = t.pixelRatio,
            i = super._calculateCacheRect(t),
            o = 2 * i.borderWidth,
            r = this._mainTextWidth(this._ctxInternal),
            s = Math.round(r * e) + (r && o),
            a = this._left + s;
          return {
            ...i,
            left: this._left,
            right: a,
            body: { ...i.body, left: this._left, right: a },
            text: { left: this._left, width: i.text.width },
          };
        }
        _calcAllWidth(t, e, i, o, r, s) {
          const a = 2 * s;
          return Math.round(i * t) + (i && a);
        }
      }
      class ae {
        constructor(t) {
          (this._prevCssWidth = null),
            (this._prevPixelRatio = null),
            (this._prevFontSize = null),
            (this._font = null),
            (this._itemsRectsInfo = null),
            (this._textWidthCache = new te.TextWidthCache()),
            (this._tradedItems = []),
            (this._vertLineData = null),
            (this._tradedSourceRenderersController = t);
        }
        itemRenderers() {
          return this._tradedItems;
        }
        clearCache() {
          (this._itemsRectsInfo = null), this._tradedSourceRenderersController.invalidateCache();
        }
        setHorizontalAlignment(t) {
          this._horizontalAlignment = t;
        }
        setVertLineData(t) {
          this._vertLineData = t;
        }
        setData(t) {
          this._data = t;
        }
        setFontSize(t) {
          if (this._prevFontSize !== t) {
            this._checkCacheValid(
              { pixelRatio: this._prevPixelRatio, cssWidth: this._prevCssWidth },
              t
            ),
              (this._prevFontSize = t),
              (this._font =
                null === t ? null : (0, Zt.makeFont)(t, Jt.CHART_FONT_FAMILY, '', 'normal'));
            for (const t of this._tradedItems) t.setFont(this._font);
          }
        }
        clearItems() {
          this._tradedItems = [];
        }
        addItem(t) {
          const e = (function (t, e, i) {
            if (t.type === Q.Position) return new re(t, e, i);
            if (t.type === Q.WithBracketButtons) return new oe(t, e, i);
            if (t.type === Q.Projection) return new se(t, e, i);
            if (t.type === Q.Default) return new st(t, e, i);
            throw new Error("Unknown traded item renderer's type");
          })(t, this._textWidthCache, (0, r.ensureNotNull)(this._font));
          this._tradedItems.push(e);
        }
        hitTest(t, e) {
          if (!this._tradedItems.length) return null;
          this._checkCacheValid(e, this._prevFontSize),
            this._tradedSourceRenderersController.alignItems(e),
            this._calcItemsRectsInfo(e);
          for (let i = this._tradedItems.length - 1; i >= 0; i--) {
            const o = this._tradedItems[i];
            o.applyOffset((0, r.ensureNotNull)(this._itemsRectsInfo));
            const s = o.hitTest(t, e);
            if (null !== s) return s;
          }
          return null;
        }
        drawBackground(t, e) {
          if (this._tradedItems.length) {
            this._checkCacheValid(e, this._prevFontSize),
              this._tradedSourceRenderersController.alignItems(e),
              this._calcItemsRectsInfo(e);
            for (const i of this._tradedItems)
              i.applyOffset((0, r.ensureNotNull)(this._itemsRectsInfo)), i.drawBackground(t, e);
          }
        }
        draw(t, e) {
          var i, o, s, a;
          if (!this._tradedItems.length) return;
          this._checkCacheValid(e, this._prevFontSize),
            this._tradedSourceRenderersController.alignItems(e),
            this._calcItemsRectsInfo(e);
          for (const i of this._tradedItems)
            i.applyOffset((0, r.ensureNotNull)(this._itemsRectsInfo)), i.drawLine(t, e);
          const l =
              null !==
                (o =
                  null === (i = this._itemsRectsInfo) || void 0 === i
                    ? void 0
                    : i.rightmostBorder) && void 0 !== o
                ? o
                : null,
            n =
              null !==
                (a =
                  null === (s = this._itemsRectsInfo) || void 0 === s
                    ? void 0
                    : s.leftmostBorder) && void 0 !== a
                ? a
                : null,
            d = Math.round(e.cssWidth * e.pixelRatio),
            c = Math.round(12 * e.pixelRatio),
            h = this._horizontalAlignment === V.TradingSourcesHorizontalAlignment.Left,
            u = h ? n : l,
            _ = h ? -1 : 1;
          if (null !== u && u + _ * c <= d) {
            const i = h ? 0 : d,
              o = Math.round(this._data.rightPadding * e.pixelRatio),
              r = u + _ * (Math.min(o, i - _ * u) / 2);
            this._drawVertLine(t, e, r);
            for (const i of this._tradedItems) i.drawPointOnLine(t, e, r);
          }
          for (const i of this._tradedItems) i.draw(t, e);
        }
        _checkCacheValid(t, e) {
          const i = this._prevFontSize !== e || this._prevPixelRatio !== t.pixelRatio,
            o = this._prevCssWidth !== t.cssWidth;
          if (i || o) {
            i && this._textWidthCache.reset();
            for (const t of this._tradedItems) t.clearCache();
          }
        }
        _calcItemsRectsInfo(t) {
          const e = this._tradedItems.map((e) => e.rect(t));
          let i,
            o,
            r,
            s,
            { rightmostBorder: a, leftmostBorder: l } =
              this._tradedSourceRenderersController.getBorderPoint(this),
            n = e[0].yMid,
            d = e[0].yMid;
          for (const t of e) {
            t.yMid < n && (n = t.yMid), t.yMid > d && (d = t.yMid);
            ie(t) && ((i = t.tp.left), (o = t.sl.left));
          }
          const c = a - l;
          if (this._horizontalAlignment === V.TradingSourcesHorizontalAlignment.Left)
            a > t.physicalWidth &&
              (s = Math.max(t.physicalWidth - c, Math.round(12 * t.pixelRatio)));
          else if (l < 0) {
            const e = Math.round(12 * t.pixelRatio);
            r = t.physicalWidth - c > e ? c : t.physicalWidth - e;
          }
          if (void 0 !== i && void 0 !== o) {
            if (void 0 !== s) {
              const t = l - s;
              (i -= t), (o -= t);
            }
            if (void 0 !== r) {
              const t = r - a;
              (i += t), (o += t);
            }
          }
          void 0 !== s && (l = s),
            void 0 !== r && (a = r),
            (this._itemsRectsInfo = {
              rightmostBorder: a,
              leftmostBorder: l,
              leftmostForItemOffset: s,
              rightmostForItemOffset: r,
              yMin: n,
              yMax: d,
              projItemTpLeft: i,
              projItemSlLeft: o,
            });
        }
        _drawVertLine(t, e, i) {
          const o = this._vertLineData;
          if (
            null === o ||
            null === this._itemsRectsInfo ||
            this._itemsRectsInfo.yMax === this._itemsRectsInfo.yMin
          )
            return;
          const r = e.pixelRatio;
          (t.strokeStyle = o.color),
            (t.lineWidth = Math.max(1, Math.floor(o.thickness * r))),
            (0, X.setLineStyle)(t, o.style),
            (0, et.drawVerticalLine)(t, i, this._itemsRectsInfo.yMin, this._itemsRectsInfo.yMax);
        }
      }
      function le(t) {
        let e, i, o;
        return (
          t.forEach((t) => {
            switch (_t(t) ? t.bracketType() : I(t)) {
              case a.BracketType.TakeProfit:
                e = t;
                break;
              case a.BracketType.TrailingStop:
                o = t;
                break;
              case a.BracketType.StopLoss:
                i = t;
            }
          }),
          { takeProfit: e, trailingStop: o, stopLoss: i }
        );
      }
      function ne(t) {
        return null === t
          ? '0'
          : ((0, s.isNumber)(t) && t < 0 && (t = '− ' + Math.abs(t)),
            (0, W.forceLTRStr)((0, L.splitThousands)(t, ' ')));
      }
      var de;
      !(function (t) {
        (t[(t.Large = 380)] = 'Large'), (t[(t.Small = 280)] = 'Small');
      })(de || (de = {}));
      const ce = (0, h.t)('Modify Order...'),
        he = (0, h.t)('Cancel Order'),
        ue = (0, y.appendEllipsis)((0, h.t)('Protect Position')),
        _e = (0, h.t)('Reverse Position'),
        pe = (0, h.t)('Close Position');
      class me {
        constructor(t, e, i) {
          (this._displayMode = 2),
            (this._invalidated = !0),
            (this._chartModel = t),
            (this._source = e),
            (this._tradedSourceRenderersController = i),
            (this._showOrderProperty = e.showOrderProperty()),
            (this._showPositionProperty = e.showPositionProperty()),
            (this._renderer = new ae(this._tradedSourceRenderersController)),
            this._tradedSourceRenderersController.registerRenderer(this._renderer),
            this._renderer.setFontSize(13);
        }
        destroy() {
          this._tradedSourceRenderersController.removeRenderer(this._renderer);
        }
        update() {
          this._invalidated = !0;
        }
        renderer(t, e) {
          return (
            this._invalidated &&
              (this._calculateMode(e),
              this._updateImpl(),
              this._renderer.clearCache(),
              (this._invalidated = !1)),
            this._renderer
          );
        }
        priceToCoordinate(t) {
          if (null === t) return null;
          const e = this._chartModel.mainSeries(),
            i = e.firstValue();
          return null === i ? null : e.priceScale().priceToCoordinate(t, i);
        }
        _isHideTextMode() {
          return 0 === this._displayMode;
        }
        _isShortenTextMode() {
          return 2 !== this._displayMode;
        }
        _isCloseVisible() {
          return 0 !== this._displayMode;
        }
        _minQtyWidth() {
          return 0 === this._displayMode ? 30 : 0;
        }
        _isReverseVisible() {
          return 2 === this._displayMode;
        }
        _isHoveredSource() {
          return this._chartModel.hoveredSource() === this._source;
        }
        _rightPadding() {
          return 2 !== this._displayMode ? 40 : 64;
        }
        _isHoveredOtherTradedSource() {
          return !this._isHoveredSource() && this._chartModel.hoveredSource() instanceof xe;
        }
        _isSelectedSource() {
          return this._chartModel.selection().isSelected(this._source);
        }
        _isHoveredItem(t) {
          var e;
          return (
            (null === (e = this._source.hoveredItem()) || void 0 === e ? void 0 : e.id) === t.id()
          );
        }
        _isHoveredItemPart(t, e) {
          var i;
          return (
            this._isHoveredItem(t) &&
            (null === (i = this._source.hoveredItem()) || void 0 === i ? void 0 : i.part) === e
          );
        }
        _isSelectedItem(t) {
          var e;
          return (
            (null === (e = this._source.selectedItem()) || void 0 === e ? void 0 : e.id) === t.id()
          );
        }
        _isMovingItem(t) {
          var e;
          return (
            (null === (e = this._source.movingItem()) || void 0 === e ? void 0 : e.id) === t.id()
          );
        }
        _calculateMode(t) {
          n.enabled('adaptive_trading_sources') &&
            (this._displayMode = t < de.Large ? (t < de.Small ? 0 : 1) : 2);
        }
        _sortedItems() {
          const t = [],
            e = this._source.tradedItems();
          let i = null,
            o = null,
            r = null;
          const s = e.brackets.slice();
          s.push(...e.projection.brackets),
            void 0 !== e.stopLimit && s.push(e.stopLimit),
            void 0 !== e.main && s.push(e.main);
          for (const e of s)
            this._isMovingItem(e)
              ? (r = e)
              : this._isHoveredItem(e)
              ? (o = e)
              : this._isSelectedItem(e)
              ? (i = e)
              : t.push(e);
          return null !== i && t.push(i), null !== o && t.push(o), null !== r && t.push(r), t;
        }
        _updateImpl() {
          if (
            (this._renderer.clearItems(),
            (!this._showOrderProperty.value() && !this._showPositionProperty.value()) ||
              this._isNoData())
          )
            return;
          let t = null;
          const e = this._mainItemStyle(),
            i = this._isSelectedSource(),
            o =
              i && this._isHoveredOtherTradedSource()
                ? (0, r.ensureDefined)(e.disabledLineColor)
                : e.lineColor;
          (this._isHoveredSource() || i) &&
            (t = { thickness: this._source.lineWidth(), style: e.lineStyle, color: o });
          const s = { rightPadding: this._rightPadding() };
          this._renderer.setHorizontalAlignment(this._source.horizontalAlignment()),
            this._renderer.setVertLineData(t),
            this._renderer.setData(s);
          for (const t of this._sortedItems()) {
            const i = this.priceToCoordinate(t.price());
            if (null === i) continue;
            let r;
            (r = ut(t)
              ? this._rendererDataForPositionItem(t, i, o)
              : pt(t)
              ? this._rendererDataForProjectionBracketItem(t, e, i, o)
              : this._rendererDataForOrderItem(t, e, i, o)),
              null !== r && this._renderer.addItem(r);
          }
        }
        _createCallbacks(t, e = []) {
          const i = this._source,
            o = {};
          if (
            (!ut(t) &&
              t.isMovingEnabled() &&
              ((o.onMove = (e) => i.onMove(t.id(), e)),
              pt(t) || (o.onFinishMove = () => i.onFinishMove(t.id()))),
            t.hasContextMenu() && (o.onContextMenu = (e) => t.onContextMenu(e)),
            pt(t))
          )
            return o;
          ut(t) &&
            t.supportReverse() &&
            this._isReverseVisible() &&
            (o.onReverse = () => t.onReverse()),
            t.supportClose() && this._isCloseVisible() && (o.onClose = () => t.onClose()),
            t.supportModify() && (o.onModify = () => t.onModify());
          const { takeProfit: r, stopLoss: s } = le(e);
          return (
            r &&
              ((o.onMoveProjectionTP = (t) => i.onMove(r.id(), t)),
              (o.onFinishMoveTP = () => i.modifyAllItems(r.id()))),
            s &&
              ((o.onMoveProjectionSL = (t) => i.onMove(s.id(), t)),
              (o.onFinishMoveSL = () => i.modifyAllItems(s.id()))),
            o
          );
        }
        _isNoData() {
          const t = this._source.tradedItems();
          return void 0 === t.main && void 0 === t.stopLimit && 0 === t.brackets.length;
        }
        _rendererDataForPositionItem(t, e, i) {
          if (!this._showPositionProperty.value()) return null;
          const o = Kt(t, this._source, () => this._chartModel.isDark()),
            s = o.reverse,
            a = this._isHoveredSource() || this._isSelectedSource(),
            l = this._isHoveredItemPart(t, 1),
            n = this._isHoveredItemPart(t, 2),
            d = this._isHoveredItemPart(t, 3),
            { takeProfit: c, stopLoss: h } = le(this._source.tradedItems().projection.brackets),
            u = c && null === c.price() && this._isHoveredItem(c),
            _ = h && null === h.price() && this._isHoveredItem(h),
            p = this._isHoveredItem(t) || u || _ ? o.pointShadowColor : void 0,
            m = this._isHoveredItemWithButtons(t) || this._isSelectedSource(),
            b = {
              type: Q.Position,
              borderBackgroundColor:
                o.borderStyle === $.LineStyle.Solid ? 'transparent' : o.borderBackgroundColor,
              borderColor: o.borderColor,
              borderStyle: o.borderStyle,
              bodyAlignment: this._source.horizontalAlignment(),
              y: e,
              id: t.id(),
              disabled: this._source.isBlocked(),
              callbacks: this._createCallbacks(t, this._projectionBracketsForItem(t)),
              rightPadding: this._rightPadding(),
              ...this._renderDataForTPSLButtons(t),
              line: {
                drawOnTop: a,
                thickness: this._source.lineWidth(),
                style: o.lineStyle,
                color: o.lineColor,
                extend: this._source.isLineExtended(),
              },
              qty: {
                title: ue,
                text: ne(t.qtyText()),
                minTextWidth: this._minQtyWidth(),
                textColor: o.qty.textColor,
                backgroundColor: o.qty.backgroundColor,
                dividerColor: o.qty.dividerColor,
                active: { visible: l, backgroundColor: o.qty.activeColor },
              },
              text: {
                text: this._isHideTextMode() ? '' : t.textByPl(),
                textColor: t.plTextColor(),
                backgroundColor: o.text.backgroundColor,
                dividerColor: o.text.dividerColor,
              },
              point: {
                visible: a,
                backgroundColor: this._isSelectedItem(t)
                  ? i
                  : (0, r.ensureDefined)(o.pointBackgroundColor),
                borderStyle: o.lineStyle,
                borderColor: i,
                shadowColor: p,
              },
            };
          return (
            this._isCloseVisible() &&
              (b.close = {
                title: pe,
                backgroundColor: o.close.backgroundColor,
                iconColor: o.close.iconColor,
                active: { visible: n, backgroundColor: o.close.activeColor },
              }),
            this._source.isReverseVisible() &&
              this._isReverseVisible() &&
              (b.reverse = {
                visibility: m ? 1 : 0,
                title: _e,
                backgroundColor: s.backgroundColor,
                iconColor: s.iconColor,
                active: { visible: d, backgroundColor: s.activeColor },
              }),
            b
          );
        }
        _rendererDataForOrderItem(t, e, i, o) {
          if (!this._showOrderProperty.value()) return null;
          const s = Ut(t, this._source, () => this._chartModel.isDark()),
            a = this._isHoveredSource() || this._isSelectedSource(),
            l = this._isHoveredItemPart(t, 1),
            n = this._isHoveredItemPart(t, 2),
            d = (0, Y.generateColor)(s.borderColor, 85),
            c = this._renderDataForTPSLButtons(t),
            { takeProfit: h, stopLoss: u } = le(this._source.tradedItems().projection.brackets),
            _ = t === this._itemWithButton(),
            p = _ && h && null === h.price() && this._isHoveredItem(h),
            m = _ && u && null === u.price() && this._isHoveredItem(u),
            b = this._isHoveredItem(t) || p || m ? e.pointShadowColor : void 0,
            f = {
              type: _ ? Q.WithBracketButtons : Q.Default,
              borderBackgroundColor:
                s.borderStyle === $.LineStyle.Solid ? 'transparent' : s.borderBackgroundColor,
              borderColor: s.borderColor,
              borderStyle: s.borderStyle,
              bodyAlignment: this._source.horizontalAlignment(),
              rightPadding: this._rightPadding(),
              y: i,
              id: t.id(),
              disabled: this._source.isBlocked(),
              callbacks: this._createCallbacks(t, this._projectionBracketsForItem(t)),
              ...c,
              line: {
                drawOnTop: a,
                thickness: this._source.lineWidth(),
                style: s.lineStyle,
                color: s.lineColor,
                extend: this._source.isLineExtended(),
              },
              qty: {
                title: ce,
                text: ne(t.qtyText()),
                minTextWidth: this._minQtyWidth(),
                textColor: s.qty.textColor,
                backgroundColor: s.qty.backgroundColor,
                dividerColor: s.qty.dividerColor,
                active: { visible: l, backgroundColor: d },
              },
              text: {
                text: this._isHideTextMode() ? '' : t.text(this._isShortenTextMode()),
                textColor: s.text.textColor,
                backgroundColor: s.text.backgroundColor,
                dividerColor: s.text.dividerColor,
              },
              point: {
                visible: a,
                backgroundColor: this._isSelectedItem(t)
                  ? o
                  : (0, r.ensureDefined)(e.pointBackgroundColor),
                borderStyle: e.lineStyle,
                borderColor: o,
                shadowColor: b,
              },
            };
          return (
            this._isCloseVisible() &&
              (f.close = {
                title: he,
                backgroundColor: s.close.backgroundColor,
                iconColor: s.close.iconColor,
                active: { visible: n, backgroundColor: d },
              }),
            f
          );
        }
        _rendererDataForProjectionBracketItem(t, e, i, o) {
          if (!this._showOrderProperty.value()) return null;
          const s = Ut(t, this._source, () => this._chartModel.isDark()),
            l = this._isHoveredSource() || this._isSelectedSource(),
            n = this._isHoveredItem(t) ? e.pointShadowColor : void 0,
            d = this._isHoveredItemPart(t, 6),
            c = (0, Y.generateColor)(s.borderColor, 85);
          return {
            type: Q.Projection,
            borderBackgroundColor:
              s.borderStyle === $.LineStyle.Solid ? 'transparent' : s.borderBackgroundColor,
            borderColor: s.borderColor,
            borderStyle: s.borderStyle,
            bodyAlignment: this._source.horizontalAlignment(),
            y: i,
            id: t.id(),
            disabled: this._source.isBlocked(),
            callbacks: this._createCallbacks(t),
            drawWithTPOffset: t.bracketType() === a.BracketType.TakeProfit,
            drawWithSLOffset:
              t.bracketType() === a.BracketType.StopLoss ||
              t.bracketType() === a.BracketType.TrailingStop,
            rightPadding: this._rightPadding(),
            line: {
              drawOnTop: l,
              thickness: this._source.lineWidth(),
              style: s.lineStyle,
              color: s.lineColor,
              extend: this._source.isLineExtended(),
            },
            text: {
              text: t.text(),
              textColor: s.text.textColor,
              backgroundColor: s.text.backgroundColor,
              dividerColor: s.text.dividerColor,
              active: { visible: d, backgroundColor: c },
            },
            point: {
              visible: l,
              backgroundColor: this._isSelectedItem(t)
                ? o
                : (0, r.ensureDefined)(e.pointBackgroundColor),
              borderStyle: e.lineStyle,
              borderColor: o,
              shadowColor: n,
            },
          };
        }
        _isHoveredItemWithButtons(t) {
          if (!t) return !1;
          const { takeProfit: e, stopLoss: i } = le(this._source.tradedItems().projection.brackets);
          return (
            this._isHoveredItem(t) ||
            Boolean(e && this._isHoveredItem(e)) ||
            Boolean(i && this._isHoveredItem(i))
          );
        }
        _isHoveredStopItemStopLimit() {
          var t;
          const e = this._source.tradedItems().main,
            i = null === (t = this._source.tradedItems()) || void 0 === t ? void 0 : t.stopLimit;
          return !!(e && i && mt(i)) && this._isHoveredItem(e);
        }
        _renderDataForTPSLButtons(t) {
          if (t !== this._itemWithButton()) return {};
          const e = { borderStyle: $.LineStyle.Solid },
            i = {},
            { takeProfit: o, stopLoss: r } = le(this._source.tradedItems().projection.brackets),
            s =
              this._isHoveredItemWithButtons(t) ||
              this._isHoveredStopItemStopLimit() ||
              this._isSelectedSource();
          if (o) {
            const t = null === o.price(),
              r = this._isHoveredItemPart(o, 4),
              a = Ut(o, this._source, () => this._chartModel.isDark(), e),
              l = (0, Y.generateColor)(a.borderColor, 85);
            i.tp = {
              id: o.id(),
              visibility: t && s ? 1 : 0,
              text: o.text(),
              title: o.tooltip(),
              textColor: t ? a.text.buttonTextColor : a.text.textColor,
              backgroundColor: a.text.backgroundColor,
              borderColor: a.borderColor,
              borderStyle: a.borderStyle,
              active: { visible: r, backgroundColor: l },
            };
          }
          if (r) {
            const t = null === r.price(),
              o = this._isHoveredItemPart(r, 5),
              a = Ut(r, this._source, () => this._chartModel.isDark(), e),
              l = (0, Y.generateColor)(a.borderColor, 85);
            i.sl = {
              id: r.id(),
              visibility: t && s ? 1 : 0,
              text: r.text(),
              title: r.tooltip(),
              textColor: t ? a.text.buttonTextColor : a.text.textColor,
              backgroundColor: a.text.backgroundColor,
              borderColor: a.borderColor,
              borderStyle: a.borderStyle,
              active: { visible: o, backgroundColor: l },
            };
          }
          return i;
        }
        _itemWithButton() {
          const t = this._source.mainItem();
          if (void 0 !== t)
            return ut(t) ? t : 4 === t.type() ? this._source.tradedItems().stopLimit : t;
        }
        _projectionBracketsForItem(t) {
          return t !== this._itemWithButton() ? [] : this._source.tradedItems().projection.brackets;
        }
        _mainItemStyle() {
          const t = this._source.mainItem();
          return void 0 === t
            ? (function (t, e, i) {
                const o = i() ? Lt : jt,
                  r = t.isBuyDirection() ? o.sell : o.buy;
                return {
                  ...(e.isBlocked() ? r.disabled : r.normal),
                  lineStyle: t.isWorking() ? e.lineStyle() : $.LineStyle.Dotted,
                  borderStyle: t.isWorking() ? $.LineStyle.Solid : $.LineStyle.Dotted,
                  labelBorderVisible: !0,
                };
              })(this._source.tradedItems().brackets[0], this._source, () =>
                this._chartModel.isDark()
              )
            : ut(t)
            ? Kt(t, this._source, () => this._chartModel.isDark())
            : Ut(t, this._source, () => this._chartModel.isDark());
        }
      }
      var be = i(97752);
      class fe extends be.PriceAxisView {
        constructor(t, e, i, o, r) {
          super(),
            (this._model = t),
            (this._data = e),
            (this._source = i),
            (this._showProperty = o),
            (this._styleGetter = r);
        }
        itemId() {
          return this._data.id();
        }
        _updateRendererData(t, e, i) {
          if (((t.visible = !1), !this._showProperty.value())) return;
          const o = this._model.mainSeries(),
            r = o.priceScale(),
            s = o.firstValue();
          if (null === s) return;
          const a = this._data.price();
          if (null === a) return;
          const l = this._styleGetter();
          (i.background = l.qty.backgroundColor),
            (i.borderColor = l.labelBorderVisible ? l.borderColor : void 0),
            (i.borderStyle = l.labelBorderVisible ? l.borderStyle : void 0),
            (i.textColor = l.qty.textColor),
            (i.coordinate = r.priceToCoordinate(a, s)),
            (t.borderVisible = l.labelBorderVisible),
            (t.text = this._formatPrice(a)),
            (t.tickColor = l.labelTickColor),
            (t.visible = !0);
        }
        _formatPrice(t) {
          return this._source.priceScaleFormatter().format(t);
        }
      }
      var ye = i(5144);
      class ve extends ye.PriceLineAxisView {
        constructor(t, e, i, o, r, s, a) {
          super(),
            (this._chartModel = t),
            (this._data = e),
            (this._source = i),
            (this._showProperty = s),
            (this._height = o),
            (this._verticalPadding = r),
            (this._styleGetter = a);
        }
        itemId() {
          return this._data.id();
        }
        _value() {
          const t = this._chartModel.mainSeries(),
            e = t.firstValue(),
            i = this._data.price();
          if (null === i || null === e) return { noData: !0 };
          const o = t.priceScale().priceToCoordinate(i, e);
          return {
            noData: !1,
            floatCoordinate: o,
            coordinate: o,
            color: '',
            formattedPricePercentage: '',
            formattedPriceAbsolute: '',
            formattedPriceIndexedTo100: '',
            text: '',
            index: 0,
          };
        }
        _updateRendererData(t, e, i) {
          const o = this._styleGetter();
          (t.linestyle = o.lineStyle),
            (i.additionalPaddingTop = this._verticalPadding),
            (i.additionalPaddingBottom = this._verticalPadding),
            super._updateRendererData(t, e, i);
        }
        _priceLineColor(t) {
          return this._styleGetter().lineColor;
        }
        _lineWidth() {
          return this._source.lineWidth();
        }
        _lineStyle() {
          return this._styleGetter().lineStyle;
        }
        _backgroundAreaHeight() {
          return this._height;
        }
        _isVisible() {
          return this._showProperty.value();
        }
      }
      function Pe(t, e, i) {
        if (ut(i)) {
          const o = () => Kt(i, e, () => t.isDark());
          return {
            priceAxisView: new fe(t, i, e, e.showPositionProperty(), o),
            priceLineAxisView: new ve(t, i, e, 19, 0, e.showPositionProperty(), o),
          };
        }
        const o = () => Ut(i, e, () => t.isDark());
        return {
          priceAxisView: new fe(t, i, e, e.showOrderProperty(), o),
          priceLineAxisView: new ve(t, i, e, 17, 1, e.showOrderProperty(), o),
        };
      }
      class Ce {
        constructor(t, e) {
          (this._model = t), (this._source = e);
        }
        updateAllViews() {
          void 0 !== this._views.main &&
            (this._views.main.priceAxisView.update(), this._views.main.priceLineAxisView.update()),
            void 0 !== this._views.stopLimit &&
              (this._views.stopLimit.priceAxisView.update(),
              this._views.stopLimit.priceLineAxisView.update());
          for (const t of this._views.brackets)
            t.priceAxisView.update(), t.priceLineAxisView.update();
          for (const t of this._views.project.brackets)
            t.priceAxisView.update(), t.priceLineAxisView.update();
        }
        views(t, e) {
          const i = this._source.movingItem() || null,
            o = this._source.hoveredItem() || null,
            r = this._source.selectedItem() || null,
            s = null !== i ? i.id : null,
            a = null !== o ? o.id : null,
            l = null !== r ? r.id : null,
            n = [],
            d = [];
          let c = null,
            h = null,
            u = null,
            _ = null,
            p = null,
            m = null;
          const b = this._views.brackets.slice();
          b.push(...this._views.project.brackets),
            this._views.main && b.push(this._views.main),
            this._views.stopLimit && b.push(this._views.stopLimit);
          for (const t of b)
            t.priceAxisView.itemId() === s
              ? ((c = t.priceAxisView), (h = t.priceLineAxisView))
              : t.priceAxisView.itemId() === a
              ? ((u = t.priceAxisView), (_ = t.priceLineAxisView))
              : t.priceAxisView.itemId() === l
              ? ((p = t.priceAxisView), (m = t.priceLineAxisView))
              : (n.push(t.priceAxisView), d.push(t.priceLineAxisView));
          return (
            null !== p && null !== m && (n.push(p), d.push(m)),
            null !== u && null !== _ && (n.push(u), d.push(_)),
            null !== c && null !== h && (n.push(c), d.push(h)),
            [n, d]
          );
        }
        recreateViews() {
          const t = this._source.tradedItems(),
            e = t.projection.brackets
              .filter((t) => null !== t.price())
              .map((t) => Pe(this._model, this._source, t));
          (this._views = {
            brackets: t.brackets.map((t) => Pe(this._model, this._source, t)),
            project: { brackets: e },
          }),
            void 0 !== t.main && (this._views.main = Pe(this._model, this._source, t.main)),
            void 0 !== t.stopLimit &&
              (this._views.stopLimit = Pe(this._model, this._source, t.stopLimit));
        }
      }
      function ge(t) {
        return t instanceof xe;
      }
      class xe extends l.CustomSourceBase {
        constructor(t, e, i, o, r, s, a, l, n) {
          super(t, e),
            (this._symbol = null),
            (this._isActualSymbol = !1),
            (this._blockedData = null),
            (this._isBlocked = !1),
            (this._hadBeenModifiedAllItems = !1),
            (this._isDestroyed = !1),
            (this._resetProjBracketsTimeout = null),
            (this._mainSeries = e.mainSeries()),
            (this._properties = i),
            (this._globalVisibility = o),
            this._globalVisibility.subscribe(this.redraw.bind(this)),
            (this._callbacks = l),
            (this._pipValueTypeSpawn = r.spawn()),
            this._pipValueTypeSpawn.subscribe(this.redraw.bind(this)),
            (this._symbolDataProvider = a);
          const d = this._mainSeries.dataEvents();
          d.symbolResolved().subscribe(this, this._updateActualSymbolAndFormatter),
            d.symbolError().subscribe(this, this._updateActualSymbolAndFormatter),
            this._updateActualSymbolAndFormatter(),
            (this._paneView = new me(this._model, this, n)),
            (this._priceViewsGroup = new Ce(this._model, this)),
            (this._rawDataSpawn = s.spawn()),
            this._setData(this._rawDataSpawn.value(), !1),
            this._rawDataSpawn.subscribe(this._setData.bind(this)),
            this._properties.positionPL.visibility.subscribe(this, this.redraw),
            this._properties.positionPL.display.subscribe(this, () => {
              const t = this.tradedItems().main;
              void 0 !== t && ut(t) && t.displayPlChange(), this.redraw();
            }),
            this._callbacks.onDataUpdateRejected.subscribe(this, this._resetProjBracketsHandler),
            this._model.hoveredSourceChanged().subscribe(this, () => {
              if (!this._isActualSymbol) return;
              const t = this._model.hoveredSource();
              (null === t || (t !== this && t instanceof xe)) && this.redraw();
            });
        }
        destroy() {
          var t, e;
          this._properties.showOrders.destroy(),
            this._properties.showPositions.destroy(),
            this._properties.positionPL.visibility.unsubscribeAll(this),
            this._properties.positionPL.display.unsubscribeAll(this);
          const i = this._mainSeries.dataEvents();
          i.symbolResolved().unsubscribeAll(this),
            i.symbolError().unsubscribeAll(this),
            this._rawDataSpawn.destroy(),
            this._pipValueTypeSpawn.destroy(),
            null === (t = this._tradedItems.main) || void 0 === t || t.destroy(),
            null === (e = this._tradedItems.stopLimit) || void 0 === e || e.destroy(),
            this._tradedItems.brackets.forEach((t) => t.destroy()),
            this._tradedItems.projection.brackets.forEach((t) => t.destroy()),
            this._globalVisibility.unsubscribe(),
            this._callbacks.onDataUpdateRejected.unsubscribeAll(this),
            this._paneView.destroy(),
            (this._isDestroyed = !0);
        }
        isSelectionEnabled() {
          return !0;
        }
        priceScaleFormatter() {
          return this._mainSeries.formatter();
        }
        showPositionProperty() {
          return this._properties.showPositions;
        }
        showOrderProperty() {
          return this._properties.showOrders;
        }
        isReverseVisible() {
          return this._properties.showReverse.value();
        }
        lineWidth() {
          return this._properties.lineProperties.width.value();
        }
        lineStyle() {
          return this._properties.lineProperties.style.value();
        }
        isLineExtended() {
          return this._properties.lineProperties.extend.value();
        }
        isPositionPLVisible() {
          return this._properties.positionPL.visibility.value();
        }
        positionDisplayMode() {
          return this._properties.positionPL.display.value();
        }
        pipValueType() {
          return (0, r.ensureNotNull)(this._pipValueTypeSpawn).value();
        }
        horizontalAlignment() {
          return this._properties.horizontalAlignment.value();
        }
        isBlocked() {
          return this._isBlocked;
        }
        setIsBlocked(t) {
          (this._isBlocked = t), this.redraw();
        }
        tradedItems(t, e) {
          if (t) {
            const t = [];
            return (
              this._tradedItems.stopLimit &&
                !(null == e ? void 0 : e.exceptStopLimit) &&
                t.push(this._tradedItems.stopLimit),
              this._tradedItems.main &&
                !(null == e ? void 0 : e.exceptMain) &&
                t.push(this._tradedItems.main),
              (null == e ? void 0 : e.exceptBrackets) || t.push(...this._tradedItems.brackets),
              (null == e ? void 0 : e.exceptProjection) ||
                t.push(...this._tradedItems.projection.brackets),
              t
            );
          }
          return this._tradedItems;
        }
        mainItem() {
          return this._tradedItems.main;
        }
        findItem(t) {
          const e = this.tradedItems(!0).find((e) => e.id() === t);
          return (0, r.assert)(void 0 !== e, `Traded item with id ${t} is not found`), e;
        }
        findItemWithType(t, e) {
          const i = e === o.Position ? ut : _t;
          return this.tradedItems(!0, { exceptStopLimit: !0 }).find(
            (e) => i(e) && e.data().id === t
          );
        }
        movingItem() {
          const t = this._model.customSourceMovingHitTestData();
          return null === t || void 0 === t.activeItem ? null : t.activeItem;
        }
        hoveredItem() {
          const t = (this._model.hoveredSource() === this && this._model.lastHittestData()) || null;
          return null === t || void 0 === t.activeItem ? null : t.activeItem;
        }
        selectedItem() {
          const t =
            (this._model.selection().isSelected(this) && this._model.lastSelectedHittestData()) ||
            null;
          return null === t || void 0 === t.activeItem ? null : t.activeItem;
        }
        priceScale() {
          return this._mainSeries.priceScale();
        }
        updateAllViews() {
          this._paneView.update(), this._priceViewsGroup.updateAllViews();
        }
        updateViewsForPane(t) {
          this._isSourceShouldBeShownOnPane(t) && this.updateAllViews();
        }
        paneViews(t) {
          return this._isSourceShouldBeShownOnPane(t) ? [this._paneView] : [];
        }
        priceAxisViews(t, e) {
          if (!this._isSourceShouldBeShownOnPane(t)) return [];
          const [i, o] = this._priceViewsGroup.views(t, e);
          return t.findTargetPriceAxisViews(this, e, i, o);
        }
        redraw() {
          this.updateAllViews(), this._isSourceShouldBeShown() && this._model.updateSource(this);
        }
        syncData() {
          this._isDestroyed ||
            (null !== this._blockedData
              ? (this._setData(this._blockedData), (this._blockedData = null))
              : this._setData(this._rawDataSpawn.value()));
        }
        allItemsSupportMove(t) {
          if (void 0 === this._tradedItems.main) return !1;
          for (const t of this._tradedItems.projection.brackets) if (null !== t.price()) return !1;
          return !(t.length < 2) && t.every((t) => _t(t) && t.isMovingEnabled());
        }
        onMove(t, e) {
          const i = this.findItem(t),
            o = i.price(),
            s = this.tradedItems(!0);
          if (e.shiftKey && null !== i.price() && this.allItemsSupportMove(s)) {
            this._hadBeenModifiedAllItems = !0;
            const t = (0, r.ensureNotNull)(i.calcPriceDiff(e));
            s.forEach((e) => {
              pt(e) || e.applyPriceDiff(t);
            }),
              this._callbacks.hideChartHint();
          } else i.onMove(e), this._moveOtherProjectionBracketIfNeeded(i);
          null === o && null !== i.price() && this._priceViewsGroup.recreateViews(), this.redraw();
        }
        async onFinishMove(t) {
          if (this._hadBeenModifiedAllItems) return this.modifyAllItems(t);
          this.setIsBlocked(!0);
          const e = this.findItem(t);
          (0, r.assert)(_t(e), 'This item does not support move');
          const i = await e.onFinishMove('Move Order', 'single');
          return (
            this.setIsBlocked(!1),
            this.syncData(),
            this.redraw(),
            this.allItemsSupportMove(this.tradedItems(!0)) && this._callbacks.showChartHint(),
            i
          );
        }
        async modifyAllItems(t) {
          var e, i, o, s, l, n, d;
          this.setIsBlocked(!0);
          const { takeProfit: c, stopLoss: h } = le(this._tradedItems.projection.brackets),
            { takeProfit: u, stopLoss: _, trailingStop: p } = le(this._tradedItems.brackets),
            m = {
              limitPrice:
                null !==
                  (i =
                    null === (e = this._tradedItems.stopLimit) || void 0 === e
                      ? void 0
                      : e.price()) && void 0 !== i
                  ? i
                  : void 0,
              takeProfit:
                null !==
                  (s =
                    null !== (o = null == u ? void 0 : u.price()) && void 0 !== o
                      ? o
                      : null == c
                      ? void 0
                      : c.price()) && void 0 !== s
                  ? s
                  : void 0,
              stopLoss:
                null !==
                  (n =
                    null !== (l = null == _ ? void 0 : _.price()) && void 0 !== l
                      ? l
                      : null == h
                      ? void 0
                      : h.price()) && void 0 !== n
                  ? n
                  : void 0,
              trailingStop:
                null !== (d = null == p ? void 0 : p.price()) && void 0 !== d ? d : void 0,
            },
            b = (0, r.ensureDefined)(this._tradedItems.main),
            f = this.findItem(t);
          (0, r.assert)(_t(f), 'This item does not support move');
          const y = this._hadBeenModifiedAllItems ? 'Move Order' : 'Add bracket from button',
            v =
              'Move Order' === y
                ? 'group'
                : b.supportOnlyPairBrackets()
                ? 'both bracket'
                : f.bracketType() === a.BracketType.TakeProfit
                ? 'take profit'
                : 'stop loss',
            P = this._ticketFocus(f);
          let C = !1;
          return (
            ut(b)
              ? (C = await b.onModifyWithBracket('Chart Position', y, v, m, !1, P))
              : ((C = await b.onFinishMove(y, v, m, !1, P)),
                this.tradedItems(!0).forEach((t) => {
                  t.setInEdit(!1);
                })),
            C
              ? this._resetProjectionBracketByTimeout()
              : (null == c || c.setPrice(null), null == h || h.setPrice(null)),
            this.setIsBlocked(!1),
            this.syncData(),
            this.redraw(),
            (this._hadBeenModifiedAllItems = !1),
            C
          );
        }
        _resetProjectionBracketByTimeout() {
          this._clearResetProjBracketsTimeout(),
            (this._resetProjBracketsTimeout = setTimeout(
              () => this._resetProjBracketsHandler(),
              2e4
            ));
        }
        _resetProjBracketsHandler() {
          this._clearResetProjBracketsTimeout();
          const { takeProfit: t, stopLoss: e } = le(this._tradedItems.projection.brackets);
          null == t || t.setPrice(null), null == e || e.setPrice(null), this.redraw();
        }
        _clearResetProjBracketsTimeout() {
          null !== this._resetProjBracketsTimeout &&
            (clearTimeout(this._resetProjBracketsTimeout), (this._resetProjBracketsTimeout = null));
        }
        _ticketFocus(t) {
          if (!ut(t)) {
            if (null !== t.bracketType()) return 1 === t.type() ? 3 : 4;
            switch (t.type()) {
              case 4:
                return mt(t) ? 1 : 2;
              case 1:
                return 1;
              case 3:
                return 2;
            }
          }
          return 5;
        }
        _moveOtherProjectionBracketIfNeeded(t) {
          const e = this._tradedItems.main;
          if (
            !pt(t) ||
            void 0 === e ||
            !e.supportOnlyPairBrackets() ||
            this._tradedItems.projection.brackets.length < 2
          )
            return;
          const i = (0, r.ensureNotNull)(e.price()),
            o = (0, r.ensureNotNull)(t.price()) - i,
            s = this._tradedItems.projection.brackets.find((e) => e !== t);
          (0, r.ensureDefined)(s).setPrice(i - o);
        }
        _createMainItem(t) {
          var e, i;
          let o;
          if (0 === (null === (e = t.main) || void 0 === e ? void 0 : e.mainType))
            o = new B(
              t.main,
              this,
              this._mainSeries,
              this._symbolDataProvider,
              this._callbacks.exitTrackingMode
            );
          else if (1 === (null === (i = t.main) || void 0 === i ? void 0 : i.mainType)) {
            const e = (t) => Kt(t, this, () => this._model.isDark());
            o = new G(t.main, this, this._symbolDataProvider, this._callbacks.currencyGetter, e);
          }
          return o;
        }
        _createStopLimitItem(t, e) {
          let i;
          if (void 0 !== t.main && e instanceof B && 4 === e.type()) {
            const e = (0, s.merge)((0, s.clone)(t.main), {
              price: t.main.limitPrice,
              considerFilledQty: !1,
            });
            i = new ht(
              e,
              this,
              this._mainSeries,
              this._symbolDataProvider,
              this._callbacks.exitTrackingMode
            );
          }
          return i;
        }
        _createItems(t) {
          const e = this._createMainItem(t),
            i = this._createStopLimitItem(t, e);
          this._tradedItems = {
            main: e,
            stopLimit: i,
            brackets: t.brackets.map(
              (t, e) =>
                new B(
                  t,
                  this,
                  this._mainSeries,
                  this._symbolDataProvider,
                  this._callbacks.exitTrackingMode
                )
            ),
            projection: { brackets: [] },
          };
        }
        _updateItems(t) {
          if (void 0 !== this._tradedItems.main)
            if (void 0 !== t.main)
              if (this._tradedItems.main instanceof B) {
                if (0 !== t.main.mainType) throw new Error('Main item was order');
                this._tradedItems.main.setData(t.main),
                  void 0 !== this._tradedItems.stopLimit &&
                    (4 !== t.main.type
                      ? (this._tradedItems.main.setData(
                          (0, s.merge)(this._tradedItems.stopLimit.data(), {
                            type: t.main.type,
                            price: t.main.price,
                            callbacks: t.main.callbacks,
                          })
                        ),
                        this._tradedItems.stopLimit.destroy(),
                        delete this._tradedItems.stopLimit)
                      : this._tradedItems.stopLimit.setData(
                          (0, s.merge)((0, s.clone)(t.main), { price: t.main.limitPrice })
                        ));
              } else {
                if (1 !== t.main.mainType) throw new Error('Main item was order');
                this._tradedItems.main.setData(t.main);
              }
            else
              this._tradedItems.main.destroy(),
                delete this._tradedItems.main,
                this._tradedItems.stopLimit &&
                  (this._tradedItems.stopLimit.destroy(), delete this._tradedItems.stopLimit);
          else
            void 0 !== t.main &&
              ((this._tradedItems.main = this._createMainItem(t)),
              (this._tradedItems.stopLimit = this._createStopLimitItem(t, this._tradedItems.main)));
          this._updateBrackets(t.brackets);
        }
        _updateBrackets(t) {
          const e = [];
          this._tradedItems.brackets.forEach((i) => {
            const o = t.find((t) => t.id === i.data().id);
            o ? i.setData(o) : e.push(i);
          }),
            e.forEach((t) => {
              const e = this._tradedItems.brackets.findIndex((e) => e.data().id === t.data().id);
              -1 !== e &&
                (this._tradedItems.brackets[e].destroy(), this._tradedItems.brackets.splice(e, 1));
            }),
            t.length > this._tradedItems.brackets.length &&
              t.slice(this._tradedItems.brackets.length).forEach((t) => {
                this._tradedItems.brackets.push(
                  new B(
                    t,
                    this,
                    this._mainSeries,
                    this._symbolDataProvider,
                    this._callbacks.exitTrackingMode
                  )
                );
              });
        }
        _updateProjectionBracketsItems() {
          const t = this._tradedItems.main;
          if (void 0 === t || !t.supportBrackets()) return;
          const { takeProfit: e, stopLoss: i, trailingStop: o } = le(this._tradedItems.brackets),
            r = null != i ? i : o,
            {
              takeProfit: s,
              stopLoss: l,
              trailingStop: n,
            } = le(this._tradedItems.projection.brackets),
            d = null != l ? l : n;
          [
            [e, s],
            [r, d],
          ].forEach(([t, e]) => {
            if (t && e) {
              const t = this._tradedItems.projection.brackets.indexOf(e);
              this._tradedItems.projection.brackets[t].destroy(),
                this._tradedItems.projection.brackets.splice(t, 1);
            }
          });
          const c = t.data();
          if (!e && !s) {
            const t = {
              price: null,
              considerFilledQty: !1,
              supportModify: !1,
              supportMove: !0,
              supportCancel: !1,
              supportBrackets: !1,
              callbacks: {},
              id: 'Projection TakeProfit',
              symbol: c.symbol,
              type: 1,
              bracketType: a.BracketType.TakeProfit,
              side: -1 === c.side ? 1 : -1,
              qty: c.qty,
              status: 6,
            };
            this._tradedItems.projection.brackets.push(
              new ct(
                t,
                this,
                this._mainSeries,
                this._symbolDataProvider,
                this._callbacks.exitTrackingMode
              )
            );
          }
          if (!r && !d) {
            const t = {
              price: null,
              considerFilledQty: !1,
              supportModify: !1,
              supportMove: !0,
              supportCancel: !1,
              supportBrackets: !1,
              callbacks: {},
              id: 'Projection StopLoss',
              symbol: c.symbol,
              type: 3,
              bracketType: a.BracketType.StopLoss,
              side: -1 === c.side ? 1 : -1,
              qty: c.qty,
              status: 6,
            };
            this._tradedItems.projection.brackets.push(
              new ct(
                t,
                this,
                this._mainSeries,
                this._symbolDataProvider,
                this._callbacks.exitTrackingMode
              )
            );
          }
        }
        _setData(t, e = !0) {
          var i, o, r, s;
          const a =
            !((null === (i = this._tradedItems) || void 0 === i ? void 0 : i.main) instanceof G) &&
            1 === (null === (o = t.main) || void 0 === o ? void 0 : o.mainType);
          this.isBlocked()
            ? ((this._blockedData = t),
              this._tradedItems.main instanceof G &&
                void 0 !== t.main &&
                this._tradedItems.main.setData(t.main))
            : (e ? this._updateItems(t) : this._createItems(t),
              this._updateProjectionBracketsItems(),
              this._priceViewsGroup.recreateViews());
          const l =
            (null === (r = t.main) || void 0 === r ? void 0 : r.symbol) ||
            (null === (s = t.brackets[0]) || void 0 === s ? void 0 : s.symbol) ||
            null;
          l !== this._symbol
            ? ((this._symbol = l), this._updateActualSymbolAndFormatter())
            : a && this._updateItemBySymbol(),
            this.redraw();
        }
        _updateActualSymbolAndFormatter() {
          if (null === this._symbol) return;
          if (null === this._mainSeries.symbolInfo()) this._isActualSymbol = !1;
          else {
            const t =
              this._mainSeries.isConvertedToOtherCurrency() ||
              this._mainSeries.isConvertedToOtherUnit();
            this._isActualSymbol = !t && this._mainSeries.symbolSameAsCurrent(this._symbol);
          }
          this._updateItemBySymbol(), this.redraw();
        }
        _updateItemBySymbol() {
          null !== this._symbol && this._isActualSymbol
            ? this._tradedItems.main instanceof G &&
              (this._tradedItems.main.subscribeRealtime(),
              this._tradedItems.main.updateCurrency(this._symbol))
            : this._tradedItems.main instanceof G && this._tradedItems.main.clearRealtime();
        }
        _isSourceShouldBeShownOnPane(t) {
          return !!this._isSourceShouldBeShown() && t.containsMainSeries();
        }
        _isSourceShouldBeShown() {
          return (
            !!this._globalVisibility.value() &&
            !!this._isActualSymbol &&
            !(window.TradingView.printing && !n.enabled('snapshot_trading_drawings'))
          );
        }
      }
    },
    8289: (t, e, i) => {
      i.r(e), i.d(e, { TradedSourcesManager: () => m });
      var o = i(16282),
        r = i(90592),
        s = i(55023),
        a = i(14071),
        l = i(34258),
        n = i(57938),
        d = i(1573),
        c = i(421);
      class h {
        constructor() {
          (this._computedBorderPoint = new Map()), (this._invalidated = !0);
        }
        registerRenderer(t) {
          this._computedBorderPoint.set(t, null);
        }
        removeRenderer(t) {
          t && this._computedBorderPoint.delete(t), this.invalidateCache();
        }
        invalidateCache() {
          for (const t of this._computedBorderPoint.keys()) this._computedBorderPoint.set(t, null);
          this._invalidated = !0;
        }
        getBorderPoint(t) {
          const e = this._computedBorderPoint.get(t);
          return (0, o.assert)(null != e), e;
        }
        alignItems(t) {
          this._invalidated && (this._alignItemsHorizontaly(t), (this._invalidated = !1));
        }
        _alignItemsHorizontaly(t) {
          const e = this._computeRightmostAndLeftmostBorder(t);
          (0, o.assert)(void 0 !== e);
          const { rightmostBorder: i, leftmostBorder: r } = e;
          for (const t of this._computedBorderPoint.keys())
            this._computedBorderPoint.set(t, { rightmostBorder: i, leftmostBorder: r });
        }
        _computeRightmostAndLeftmostBorder(t) {
          const e = [...this._computedBorderPoint.keys()]
            .reduce((t, e) => [...t, ...e.itemRenderers()], [])
            .map((e) => e.rect(t));
          if (0 === e.length) return;
          let i = e[0].right,
            o = e[0].left;
          for (const t of e) t.right > i && (i = t.right), t.left < o && (o = t.left);
          return { rightmostBorder: i, leftmostBorder: o };
        }
      }
      const u = () => {},
        _ = () => {};
      const p = (0, a.getLogger)('Trading.Order');
      class m {
        constructor(t, e, i, o) {
          (this._tradedSourceData = new Map()),
            (this._ordersData = new Map()),
            (this._positionsData = new Map()),
            (this._positionsRealToParentIds = new Map()),
            (this._tradedSourceRenderersControllerMap = new WeakMap()),
            (this._ordersService = t),
            (this._positionsService = e),
            (this._chartWidgetCollection = i),
            (this._realtimeProvider = o.realtimeProvider),
            (this._brokerCommandsUIGetter = o.brokerCommandsUI),
            (this._trackEvent = o.trackEvent),
            (this._showTradedSources = o.showTradedSources),
            (this._pipValueType = o.pipValueType),
            this._addOrderItems(this._ordersService.activeOrders()),
            this._ordersService
              .activeOrdersUpdated()
              .subscribe(this, (t) => this._addOrderItems([t])),
            this._ordersService
              .activeOrdersRemoved()
              .subscribe(this, this._removeTradedSourceItems),
            this._addPositionItems(this._positionsService.positions()),
            this._positionsService
              .positionUpdate()
              .subscribe(this, (t) => this._addPositionItems([t])),
            this._positionsService
              .positionsRemoved()
              .subscribe(this, this._removeTradedSourceItems);
        }
        destroy() {
          this._ordersService.activeOrdersUpdated().unsubscribeAll(this),
            this._ordersService.activeOrdersRemoved().unsubscribeAll(this),
            this._ordersData.clear(),
            this._positionsService.positionUpdate().unsubscribeAll(this),
            this._positionsService.positionsRemoved().unsubscribeAll(this),
            this._positionsData.clear(),
            this._tradedSourceData.clear();
        }
        _getBrackets(t) {
          const e = [];
          if (!this._ordersData.has(t)) {
            const e = this._positionsRealToParentIds.get(t);
            void 0 !== e && (t = e);
          }
          return (
            this._ordersData.forEach((i) => {
              i.parentId === t &&
                e.push(
                  (0, r.merge)((0, r.clone)(i), { callbacks: this._createCallbacksForOrder(i) })
                );
            }),
            e
          );
        }
        _createTradedSourceData(t) {
          let e;
          const i = this._ordersData.get(t),
            o = this._positionsData.get(t);
          return (
            void 0 !== i
              ? (e = (0, r.merge)((0, r.clone)(i), {
                  mainType: 0,
                  callbacks: this._createCallbacksForOrder(i),
                }))
              : void 0 !== o &&
                (e = (0, r.merge)((0, r.clone)(o), {
                  mainType: 1,
                  callbacks: this._createCallbacksForPosition(),
                })),
            { main: e, brackets: this._getBrackets(t) }
          );
        }
        _recreateTradedSource(t) {
          const e = this._createTradedSourceData(t),
            i = this._tradedSourceData.get(t);
          if (void 0 !== i) i.setValue(e);
          else {
            const i = new s.WatchedObject(e);
            !(function (t, e, i, r, s, a, l) {
              const { realtimeProvider: p, pipValueType: m, currencyGetter: b } = a;
              s.addCustomSource(
                'traded' + t,
                (t, a) => {
                  const n = a.properties().childs().tradingProperties.childs(),
                    f = (0, d.createPrimitivePropertyFromGetterAndSubscription)(
                      a.isInReplay.bind(a),
                      a.onInReplayStateChanged()
                    ),
                    y = (0, d.combineProperty)((t, e) => e, f, n.showOrders),
                    v = (0, d.combineProperty)((t, e) => e, f, n.showPositions),
                    P = {
                      lineProperties: {
                        width: n.lineWidth,
                        style: n.lineStyle,
                        extend: n.extendLeft,
                      },
                      horizontalAlignment: n.horizontalAlignment,
                      showOrders: y,
                      showPositions: v,
                      showReverse: n.showReverse,
                      positionPL: n.positionPL.childs(),
                    };
                  l.has(a) || l.set(a, new h());
                  const C = (0, o.ensureDefined)(l.get(a));
                  return new c.TradedSource(
                    t,
                    a,
                    P,
                    r,
                    m,
                    e,
                    p,
                    {
                      exitTrackingMode: () => s.activeChartWidget.value().exitTrackingMode(),
                      currencyGetter: b,
                      onDataUpdateRejected: i,
                      showChartHint: u,
                      hideChartHint: _,
                    },
                    C
                  );
                },
                n.CustomSourceLayer.Topmost
              );
            })(
              t,
              i,
              this._ordersService.orderRejected(),
              this._showTradedSources,
              this._chartWidgetCollection,
              {
                realtimeProvider: this._realtimeProvider,
                pipValueType: this._pipValueType,
                currencyGetter: this._positionsService.getCurrency.bind(this._positionsService),
              },
              this._tradedSourceRenderersControllerMap
            ),
              this._tradedSourceData.set(t, i);
          }
        }
        async _findPositionRealIdByParentId(t) {
          const e = this._positionsData.get(t);
          let i;
          if (void 0 !== e) i = e.id;
          else if (((i = await this._positionsService.realIdFromBroker(t)), null === i)) {
            const e = this._currentRealPositionIdByParentId(t);
            return null !== e && this._positionsRealToParentIds.delete(e), null;
          }
          return this._positionsRealToParentIds.set(i, t), i;
        }
        _currentRealPositionIdByParentId(t) {
          for (const e of Array.from(this._positionsRealToParentIds.keys()))
            if (this._positionsRealToParentIds.get(e) === t) return e;
          return null;
        }
        async _findAndUpdateParentPosition(t, e = !1) {
          const i = this._currentRealPositionIdByParentId(t),
            o = await this._findPositionRealIdByParentId(t);
          if (
            (null !== i &&
              null === o &&
              this._tradedSourceData.has(i) &&
              this._recreateTradedSource(i),
            null === i && null !== o)
          ) {
            const e = this._tradedSourceData.get(t);
            void 0 !== e && void 0 === e.value().main && this._removeTradedSource(t);
          }
          (e && i === o) || this._recreateTradedSource(o || t);
        }
        _addOrderItems(t) {
          for (const e of t) {
            this._removeSourceIfChangedParent(e), this._ordersData.set(e.id, e);
            const t = void 0 !== e.parentId ? e.parentId : e.id;
            if (2 === e.parentType || 3 === e.parentType)
              return void this._findAndUpdateParentPosition(t);
            this._recreateTradedSource(t);
          }
        }
        _addPositionItems(t) {
          for (const e of t) {
            const t = e.id;
            this._positionsData.set(t, e), this._recreateTradedSource(t);
            this._ordersService
              .activeOrders()
              .filter((t) => 1 !== t.parentType && void 0 !== t.parentType && t.symbol === e.symbol)
              .forEach((t) => {
                this._findAndUpdateParentPosition(t.parentId, !0);
              });
          }
        }
        _removeSourceIfChangedParent(t) {
          const e = this._ordersData.get(t.id);
          void 0 === e ||
            (e.parentId === t.parentId && e.parentType === t.parentType) ||
            this._removeTradedSourceItems([e.id]);
        }
        _removeTradedSourceItems(t) {
          for (const e of t) {
            let t = e;
            if (!this._tradedSourceData.has(e))
              for (const i of this._tradedSourceData.keys()) {
                for (const r of (0, o.ensureDefined)(this._tradedSourceData.get(i)).value()
                  .brackets)
                  if (r.id === e) {
                    t = i;
                    break;
                  }
                if (t === i) break;
              }
            this._positionsData.delete(e), this._ordersData.delete(e);
            const i = this._createTradedSourceData(t);
            if (void 0 === i.main && 0 === i.brackets.length) this._removeTradedSource(t);
            else {
              const e = this._tradedSourceData.get(t);
              void 0 !== e && e.setValue(i);
            }
          }
        }
        _removeTradedSource(t) {
          var e, i;
          this._tradedSourceData.delete(t),
            (e = this._chartWidgetCollection),
            (i = t),
            e.removeCustomSource('traded' + i);
        }
        _createCallbacksForOrder(t) {
          const e = {};
          return (
            t.supportModify && (e.modifyOrder = this._modifyOrder.bind(this)),
            t.supportMove && (e.moveOrder = this._moveOrder.bind(this)),
            t.supportCancel && (e.cancelOrder = this._cancelOrder.bind(this)),
            e
          );
        }
        _createCallbacksForPosition() {
          return {
            reversePosition: this._reversePosition.bind(this),
            modifyPosition: this._modifyPosition.bind(this),
            closePosition: this._closePosition.bind(this),
          };
        }
        async _processingModifyOrder(t, e, i, r) {
          let s = !1;
          try {
            s = await (0, o.ensureNotNull)(this._brokerCommandsUIGetter()).modifyOrder(t, i, r);
          } catch (t) {
            // TEALSTREET
            if (t.toString() !== 'Error: Value is undefined') {
                p.logError('Try to modify order with error ' + (0, l.errorToString)(t));
            }
          }
          return s;
        }
        _modifyOrder(t, e, i, r, s) {
          this._trackEvent(t, 'Edit Order');
          const a = (0, o.ensureNotNull)(this._ordersService.find(e));
          return this._processingModifyOrder(i, a, s, r);
        }
        _moveOrder(t, e, i, r, s, a) {
          this._trackEvent(t, e, i);
          const l = (0, o.ensureNotNull)(this._ordersService.find(r));
          return this._processingModifyOrder(s, l, !0, a);
        }
        _cancelOrder(t, e) {
          return (
            this._trackEvent(t, 'Cancel Order'),
            (0, o.ensureNotNull)(this._brokerCommandsUIGetter()).cancelOrder(e)
          );
        }
        _reversePosition(t, e) {
          return (
            this._trackEvent(t, 'Reverse Position'),
            (0, o.ensureNotNull)(this._brokerCommandsUIGetter()).reversePosition(e)
          );
        }
        _modifyPosition(t, e, i, r, s = {}, a, l) {
          this._trackEvent(t, e, i);
          const n = (0, o.ensureNotNull)(this._brokerCommandsUIGetter());
          return this._positionsService.isDisplayModeTrades()
            ? (0, o.ensureDefined)(n.editTradeBrackets).call(n, r, s, a, l)
            : n.editPositionBrackets(r, s, a, l);
        }
        _closePosition(t, e) {
          this._trackEvent(t, 'Close Position');
          const i = (0, o.ensureNotNull)(this._brokerCommandsUIGetter());
          return this._positionsService.isDisplayModeTrades()
            ? i.closeTrade(e)
            : i.closePosition(e);
        }
      }
    },
    43304: (t, e, i) => {
      i.d(e, { drawArrow: () => r, drawHalfArrow: () => s });
      var o = i(40714);
      function r(t, e, i, r, s, a, l) {
        t.save(), (t.strokeStyle = r);
        const n = t.lineWidth % 2 ? 0.5 : 0;
        t.translate(e + n, i + n),
          s && t.scale(1, -1),
          (0, o.drawArrow)(t, 0, 0, 0, a, l),
          t.restore();
      }
      function s(t, e, i, o, r, s, a) {
        t.save(), (t.strokeStyle = o), (t.lineJoin = 'miter');
        const l = t.lineWidth % 2 ? 0.5 : 0,
          n = Math.round(s / 3);
        t.translate(e + l, i + l),
          r && t.scale(-1, -1),
          t.beginPath(),
          t.moveTo(0, s),
          t.lineTo(0, 0),
          t.lineTo(-a, n),
          t.stroke(),
          t.restore();
      }
    },
    42859: (t, e, i) => {
      i.r(e), i.d(e, { TradedItemsChartCollectionFacade: () => l });
      var o = i(16282),
        r = i(57938),
        s = i(49445),
        a = i(421);
      class l {
        constructor(t) {
          this._chartWidgetCollection = t;
        }
        dropHoveredItem() {
          this._activeWidgetChartModel().setHoveredSource(null, null);
        }
        setHoveredItem(t) {
          this._setItemState(t, (t, e) => {
            this._activeWidgetChartModel().setHoveredSource(t, e);
          });
        }
        setSelectedItem(t) {
          this._setItemState(t, (t, e) => {
            this._activeWidgetChartModel().selectionMacro((i) => {
              if (t) i.clearSelection(), i.addSourceToSelection(t, e);
              else {
                i.selection().customSources().find(a.isTradedSource) && i.clearSelection();
              }
            });
          });
        }
        _setItemState(t, e) {
          const { source: i, item: o } = this._findSourceAndItem(t.id, t.type);
          if (!i || !o) return void e(null, null);
          e(
            i,
            new s.HitTestResult(s.HitTestResult.CUSTOM, {
              activeItem: { id: o.id(), part: 6 },
            }).data()
          );
        }
        _activeWidgetChartModel() {
          return (0, o.ensureNotNull)(this._chartWidgetCollection.activeChartWidget.value())
            .model()
            .model();
        }
        _findSourceAndItem(t, e) {
          for (const i of this._activeWidgetChartModel().customSources(r.CustomSourceLayer.Topmost))
            if ((0, a.isTradedSource)(i)) {
              const o = i.findItemWithType(t, e);
              if (o) return { source: i, item: o };
            }
          return {};
        }
      }
    },
    37: (t, e, i) => {
      i.r(e), i.d(e, { BidAsk: () => m });
      var o = i(16282),
        r = i(90592),
        s = i(25712),
        a = i(6225),
        l = i(5144);
      class n extends l.PriceLineAxisView {
        constructor(t, e, i) {
          super(), (this._model = t), (this._source = e), (this._priceType = i);
        }
        _value() {
          const t = this._model.mainSeries(),
            e = t.priceScale(),
            i = t.firstValue();
          if (null === i) return { noData: !0 };
          const o = this._source.getPrice(this._priceType);
          if (null === o) return { noData: !0 };
          const r = e.priceToCoordinate(o, i);
          return {
            noData: !1,
            floatCoordinate: r,
            coordinate: r,
            color: '',
            formattedPricePercentage: '',
            formattedPriceAbsolute: '',
            formattedPriceIndexedTo100: '',
            text: '',
            index: 0,
          };
        }
        _priceLineColor(t) {
          const e = this._source.properties().childs();
          return 0 === this._priceType ? e.bidLineColor.value() : e.askLineColor.value();
        }
        _lineWidth() {
          return this._source.properties().childs().lineWidth.value();
        }
        _lineStyle() {
          return this._source.properties().childs().lineStyle.value();
        }
        _isVisible() {
          return this._source.properties().childs().visible.value();
        }
      }
      var d = i(74245),
        c = i(97752);
      class h extends c.PriceAxisView {
        constructor(t, e, i) {
          super(), (this._model = t), (this._source = e), (this._priceType = i);
        }
        _updateRendererData(t, e, i) {
          if (
            ((t.visible = !1),
            (e.visible = !1),
            !this._model.properties().childs().scalesProperties.childs().showBidAskLabels.value())
          )
            return;
          const o = this._model.mainSeries(),
            r = o.priceScale(),
            s = o.firstValue();
          if (null === s) return;
          const a = this._source.getPrice(this._priceType);
          if (null === a) return;
          (t.visible = !0),
            (e.visible = !0),
            (t.text = r.formatPriceAbsolute(a)),
            (e.text = 0 === this._priceType ? (0, d.t)('Bid') : (0, d.t)('Ask')),
            (i.coordinate = r.priceToCoordinate(a, s));
          const l = this._source.properties().childs();
          i.background = 0 === this._priceType ? l.bidLineColor.value() : l.askLineColor.value();
        }
      }
      var u = i(87921),
        _ = i(49445);
      class p extends u.HorizontalLinePaneView {
        constructor(t, e, i, o) {
          super(), (this._model = t), (this._source = e), (this._priceType = i);
          const r = { doubleClickHandler: o, doubleTapHandler: o };
          this._lineRenderer.setHitTest(new _.HitTestResult(_.HitTestResult.REGULAR, r));
        }
        _updateImpl() {
          const t = this._lineRendererData;
          t.visible = !1;
          const e = this._source.properties().childs();
          if (!e.visible.value()) return;
          const i = this._model.mainSeries(),
            o = i.priceScale(),
            r = i.firstValue();
          if (null === r) return;
          const s = this._source.getPrice(this._priceType);
          null !== s &&
            ((t.visible = !0),
            (t.y = o.priceToCoordinate(s, r)),
            (t.linestyle = e.lineStyle.value()),
            (t.linewidth = e.lineWidth.value()),
            (t.color = 0 === this._priceType ? e.bidLineColor.value() : e.askLineColor.value()));
        }
      }
      class m extends a.CustomSourceBase {
        constructor(t, e, i, o) {
          super(t, e),
            (this._ask = null),
            (this._bid = null),
            (this._symbol = null),
            (this._realtimeProvider = i),
            (this._bidLinesPaneView = new p(e, this, 0, o)),
            (this._askLinesPaneView = new p(e, this, 1, o)),
            (this._bidPriceAxisView = new h(e, this, 0)),
            (this._askPriceAxisView = new h(e, this, 1)),
            (this._regularPriceAxisViews = [this._bidPriceAxisView, this._askPriceAxisView]),
            (this._bidLabelPaneView = new s.PanePriceAxisView(
              this._bidPriceAxisView,
              e.mainSeries(),
              e
            )),
            (this._askLabelPaneView = new s.PanePriceAxisView(
              this._askPriceAxisView,
              e.mainSeries(),
              e
            )),
            (this._bidPriceLineAxisView = new n(e, this, 0)),
            (this._askPriceLineAxisView = new n(e, this, 1)),
            (this._externalPriceAxisViews = [
              this._bidPriceLineAxisView,
              this._askPriceLineAxisView,
            ]),
            (this._updateRealtimeDataHandler = this._updateRealtimeData.bind(this));
          const r = e.mainSeries().dataEvents();
          r.symbolResolved().subscribe(this, this._createTradedSymbol),
            r.symbolError().subscribe(this, this._createTradedSymbol),
            this._createTradedSymbol();
        }
        destroy() {
          const t = this._model.mainSeries().dataEvents();
          t.symbolResolved().unsubscribeAll(this),
            t.symbolError().unsubscribeAll(this),
            this._clearTradedSymbol();
        }
        paneViews(t) {
          return this._isMainSourcePane(t) ? [this._bidLinesPaneView, this._askLinesPaneView] : [];
        }
        labelPaneViews(t) {
          return this._isMainSourcePane(t) ? [this._bidLabelPaneView, this._askLabelPaneView] : [];
        }
        priceAxisViews(t, e) {
          return this._isMainSourcePane(t)
            ? t.findTargetPriceAxisViews(
                this,
                e,
                this._regularPriceAxisViews,
                this._externalPriceAxisViews
              )
            : [];
        }
        priceScale() {
          return this._model.mainSeries().priceScale();
        }
        updateAllViews() {
          this._bidLinesPaneView.update(),
            this._askLinesPaneView.update(),
            this._bidPriceAxisView.update(),
            this._askPriceAxisView.update(),
            this._bidPriceLineAxisView.update(),
            this._askPriceLineAxisView.update(),
            this._bidLabelPaneView.update(),
            this._askLabelPaneView.update();
        }
        getPrice(t) {
          return 1 === t ? this._ask : this._bid;
        }
        properties() {
          return this._model.mainSeries().properties().childs().bidAsk;
        }
        _createTradedSymbol() {
          const t = (function (t) {
            if (t.isConvertedToOtherCurrency() || t.isConvertedToOtherUnit()) return null;
            const e = t.symbolInfo();
            return null === e ? t.proSymbol() : e.pro_name || e.full_name || e.name || null;
          })(this._model.mainSeries());
          t !== this._symbol &&
            (this._clearTradedSymbol(), null !== t && this._initTradedSymbol(t));
        }
        _initTradedSymbol(t) {
          (this._symbol = t),
            this._realtimeProvider.subscribeRealtime(this._symbol, this._updateRealtimeDataHandler);
        }
        _clearTradedSymbol() {
          (this._ask = null),
            (this._bid = null),
            null !== this._symbol &&
              (this._realtimeProvider.unsubscribeRealtime(
                (0, o.ensureNotNull)(this._symbol),
                this._updateRealtimeDataHandler
              ),
              (this._symbol = null));
        }
        _updateRealtimeData(t, e, i) {
          const o = e.ask,
            s = e.bid;
          o === s
            ? ((this._ask = null), (this._bid = null))
            : ((0, r.isNumber)(o) && (this._ask = o), (0, r.isNumber)(s) && (this._bid = s)),
            (this._model.mainSeries().properties().childs().bidAsk.childs().visible.value() ||
              this._model
                .properties()
                .childs()
                .scalesProperties.childs()
                .showBidAskLabels.value()) &&
              (this.updateAllViews(), this._model.updateSource(this));
        }
        _isMainSourcePane(t) {
          return this._model.paneForSource(this._model.mainSeries()) === t;
        }
      }
    },
  },
]);
