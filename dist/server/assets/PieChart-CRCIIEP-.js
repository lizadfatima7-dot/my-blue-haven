import { S as reactExports, w as getDefaultExportFromCjs } from "./server-a5t9Epnm.js";
import { c5 as withPath, Q as constant, bD as svgPropertiesAndEvents, al as isNumber, bK as upperFirst, U as createSelector, aw as pickAxisType, av as pickAxisId, ar as itemAxisPredicate, a_ as selectBaseAxis, M as combineGraphicalItemsSettings, K as combineGraphicalItemsData, b1 as selectChartDataAndAlwaysIgnoreIndexes, H as combineDisplayedData, A as combineAppliedValues, aa as getValueByDataKey, aU as selectAllErrorBarSettings, b2 as selectChartDataSliceIgnoringIndexes, I as combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, b7 as selectDomainDefinition, b8 as selectDomainFromUserPreference, b5 as selectChartLayout, O as combineNumericalDomain, bg as selectStackOffsetType, B as combineAxisDomain, bc as selectRenderableAxisSettings, bb as selectRealScaleType, N as combineNiceTicks, E as combineAxisDomainWithNiceTicks, F as combineCheckedDomain, a8 as getTooltipNameProp, b6 as selectChartOffsetInternal, aM as resolveDefaultProps, bN as useAnimationId, a9 as getTransitionVal, J as JavascriptAnimate, aO as roundTemplateLiteral, ae as interpolate, j as Layer, f as Curve, bO as useAppDispatch, bx as setActiveMouseOverItemIndex, at as mouseLeaveItem, bw as setActiveClickItemIndex, h as DefaultZIndexes, bF as svgPropertiesNoEvents, l as RegisterGraphicalItemId, r as SetPolarGraphicalItem, V as findAllByType, bP as useAppSelector, s as SetPolarLegendPayload, Z as ZIndexLayer, t as SetTooltipEntrySettings, W as get, as as mathSign, P as PolarLabelListContextProvider, aT as selectActiveTooltipIndex, aR as selectActiveTooltipDataKey, aS as selectActiveTooltipGraphicalItemId, D as DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, g as DATA_ITEM_INDEX_ATTRIBUTE_NAME, w as adaptEventsOfChild, L as LabelListFromLabelProp, a2 as getMaxRadius, a4 as getPercentValue, ax as polarToCartesian, bG as svgPropertiesNoEventsFromUnknown, T as Text, ao as isStacked, aj as isNullish, aq as isWellBehavedNumber, a5 as getStackSeriesIdentifier, bU as useChartWidth, bR as useChartHeight, bZ as useOffsetInternal, bV as useIsPanorama, aV as selectAxisPropsNeededForCartesianGridTicksGenerator, an as isPositiveNumber, c4 as warn, a1 as getCoordinatesOfGrid, a7 as getTicksOfAxis, aW as selectAxisViewBox, b3 as selectChartDataWithIndexesIfNotInPanoramaPosition3, bo as selectXAxisIdFromGraphicalItemId, aX as selectAxisWithScale, bs as selectYAxisIdFromGraphicalItemId, bi as selectTicksOfGraphicalItem, Y as getBandSizeOfAxis, bn as selectUnfilteredCartesianItems, be as selectRootMaxBarSize, aZ as selectBarGap, aY as selectBarCategoryGap, bf as selectStackGroups, bd as selectRootBarSize, a$ as selectCartesianAxisSize, a3 as getNormalizedStackId, ay as propsAreEqual, q as SetLegendPayload, S as SetCartesianGraphicalItem, au as noop, bY as useNeedsClip, bS as useChartLayout, i as GraphicalItemClipPath, _ as getBaseValueOfBar, bH as truncateByDomain, $ as getCateCoordinateOfBar, c as CartesianLabelListContextProvider, ai as isNan, ac as implicitYAxis, bQ as useCartesianChartLayout, y as addYAxis, aD as replaceYAxis, aB as removeYAxis, bv as selectYAxisSize, bt as selectYAxisPosition, bh as selectTicksOfAxis, bu as selectYAxisSettingsNoDefaults, ah as isLabelContentAFunction, bJ as updateYAxisWidth, X as getAxisTypeBasedOnLayout, C as CartesianChart, z as arrayTooltipSearcher, bI as updatePolarOptions, k as RechartsStoreProvider, e as ChartDataContextProvider, o as ReportMainChartProps, n as ReportEventSettings, m as ReportChartProps, d as CategoricalChart, ad as initialEventSettingsState } from "./CartesianChart-BVFDP17C.js";
import { f as clsx } from "./router-CjVt23mV.js";
import { S as Sector, R as Rectangle, g as getClassNameFromUnknown, b as getTicks, d as defaultCartesianAxisProps, a as axisPropsAreEqual, C as CartesianAxis } from "./XAxis-D3ua-Rjg.js";
const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const pi = Math.PI;
const tau = 2 * pi;
const symbolCircle = {
  draw(context, size) {
    const r = sqrt(size / pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau);
  }
};
const symbolCross = {
  draw(context, size) {
    const r = sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};
const tan30 = sqrt(1 / 3);
const tan30_2 = tan30 * 2;
const symbolDiamond = {
  draw(context, size) {
    const y = sqrt(size / tan30_2);
    const x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};
const symbolSquare = {
  draw(context, size) {
    const w = sqrt(size);
    const x = -w / 2;
    context.rect(x, x, w, w);
  }
};
const ka = 0.8908130915292852;
const kr = sin(pi / 10) / sin(7 * pi / 10);
const kx = sin(tau / 10) * kr;
const ky = -cos(tau / 10) * kr;
const symbolStar = {
  draw(context, size) {
    const r = sqrt(size * ka);
    const x = kx * r;
    const y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (let i = 1; i < 5; ++i) {
      const a2 = tau * i / 5;
      const c2 = cos(a2);
      const s2 = sin(a2);
      context.lineTo(s2 * r, -c2 * r);
      context.lineTo(c2 * x - s2 * y, s2 * x + c2 * y);
    }
    context.closePath();
  }
};
const sqrt3 = sqrt(3);
const symbolTriangle = {
  draw(context, size) {
    const y = -sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};
const c = -0.5;
const s = sqrt(3) / 2;
const k = 1 / sqrt(12);
const a = (k / 2 + 1) * 3;
const symbolWye = {
  draw(context, size) {
    const r = sqrt(size / a);
    const x0 = r / 2, y0 = r * k;
    const x1 = x0, y1 = r * k + r;
    const x2 = -x1, y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};
function Symbol$1(type, size) {
  let context = null, path = withPath(symbol);
  type = typeof type === "function" ? type : constant(type || symbolCircle);
  size = typeof size === "function" ? size : constant(size === void 0 ? 64 : +size);
  function symbol() {
    let buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}
var _excluded$8 = ["type", "size", "sizeType"];
function _extends$8() {
  return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$8.apply(null, arguments);
}
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
      _defineProperty$a(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$a(e, r, t) {
  return (r = _toPropertyKey$a(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$a(t) {
  var i = _toPrimitive$a(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$a(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$8(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$8(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$8(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var symbolFactories = {
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = (type) => {
  var name = "symbol".concat(upperFirst(type));
  return symbolFactories[name] || symbolCircle;
};
var calculateAreaSize = (size, sizeType, type) => {
  if (sizeType === "area") {
    return size;
  }
  switch (type) {
    case "cross":
      return 5 * size * size / 9;
    case "diamond":
      return 0.5 * size * size / Math.sqrt(3);
    case "square":
      return size * size;
    case "star": {
      var angle = 18 * RADIAN;
      return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * size * size / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;
    default:
      return Math.PI * size * size / 4;
  }
};
var registerSymbol = (key, factory) => {
  symbolFactories["symbol".concat(upperFirst(key))] = factory;
};
var Symbols = (_ref) => {
  var {
    type = "circle",
    size = 64,
    sizeType = "area"
  } = _ref, rest = _objectWithoutProperties$8(_ref, _excluded$8);
  var props = _objectSpread$a(_objectSpread$a({}, rest), {}, {
    type,
    size,
    sizeType
  });
  var realType = "circle";
  if (typeof type === "string") {
    realType = type;
  }
  var getPath = () => {
    var symbolFactory = getSymbolFactory(realType);
    var symbol = Symbol$1().type(symbolFactory).size(calculateAreaSize(size, sizeType, realType));
    var s2 = symbol();
    if (s2 === null) {
      return void 0;
    }
    return s2;
  };
  var {
    className,
    cx,
    cy
  } = props;
  var filteredProps = svgPropertiesAndEvents(props);
  if (isNumber(cx) && isNumber(cy) && isNumber(size)) {
    return /* @__PURE__ */ reactExports.createElement("path", _extends$8({}, filteredProps, {
      className: clsx("recharts-symbols", className),
      transform: "translate(".concat(cx, ", ").concat(cy, ")"),
      d: getPath()
    }));
  }
  return null;
};
Symbols.registerSymbol = registerSymbol;
var Cell = (_props) => null;
Cell.displayName = "Cell";
var selectUnfilteredPolarItems = (state) => state.graphicalItems.polarItems;
var selectAxisPredicate = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
var selectPolarItemsSettings = createSelector([selectUnfilteredPolarItems, selectBaseAxis, selectAxisPredicate], combineGraphicalItemsSettings);
var selectPolarGraphicalItemsData = createSelector([selectPolarItemsSettings], combineGraphicalItemsData);
var selectPolarDisplayedData = createSelector([selectPolarGraphicalItemsData, selectChartDataAndAlwaysIgnoreIndexes], combineDisplayedData);
var selectPolarAppliedValues = createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings], combineAppliedValues);
createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings], (data, axisSettings, items) => {
  if (items.length > 0) {
    return data.flatMap((entry) => {
      return items.flatMap((item) => {
        var _axisSettings$dataKey;
        var valueByDataKey = getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey);
        return {
          value: valueByDataKey,
          errorDomain: []
          // polar charts do not have error bars
        };
      });
    }).filter(Boolean);
  }
  if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) {
    return data.map((item) => ({
      value: getValueByDataKey(item, axisSettings.dataKey),
      errorDomain: []
    }));
  }
  return data.map((entry) => ({
    value: entry,
    errorDomain: []
  }));
});
var unsupportedInPolarChart = () => void 0;
var selectDomainOfAllPolarAppliedNumericalValues = createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings, selectAllErrorBarSettings, pickAxisType, selectChartDataSliceIgnoringIndexes], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues);
var selectPolarNumericalDomain = createSelector([selectBaseAxis, selectDomainDefinition, selectDomainFromUserPreference, unsupportedInPolarChart, selectDomainOfAllPolarAppliedNumericalValues, unsupportedInPolarChart, selectChartLayout, pickAxisType], combineNumericalDomain);
var selectPolarAxisDomain = createSelector([selectBaseAxis, selectChartLayout, selectPolarDisplayedData, selectPolarAppliedValues, selectStackOffsetType, pickAxisType, selectPolarNumericalDomain], combineAxisDomain);
var selectPolarNiceTicks = createSelector([selectPolarAxisDomain, selectRenderableAxisSettings, selectRealScaleType], combineNiceTicks);
var selectPolarAxisDomainIncludingNiceTicks = createSelector([selectBaseAxis, selectPolarAxisDomain, selectPolarNiceTicks, pickAxisType], combineAxisDomainWithNiceTicks);
createSelector([selectRealScaleType, selectPolarAxisDomainIncludingNiceTicks], combineCheckedDomain);
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
      _defineProperty$9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$9(e, r, t) {
  return (r = _toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$9(t) {
  var i = _toPrimitive$9(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$9(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var pickId = (_state, id) => id;
var selectSynchronisedPieSettings = createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "pie").find((item) => item.id === id));
var emptyArray = [];
var pickCells$1 = (_state, _id, cells) => {
  if ((cells === null || cells === void 0 ? void 0 : cells.length) === 0) {
    return emptyArray;
  }
  return cells;
};
var selectDisplayedData = createSelector([selectChartDataAndAlwaysIgnoreIndexes, selectSynchronisedPieSettings, pickCells$1], (_ref, pieSettings, cells) => {
  var {
    chartData
  } = _ref;
  if (pieSettings == null) {
    return void 0;
  }
  var displayedData;
  if ((pieSettings === null || pieSettings === void 0 ? void 0 : pieSettings.data) != null && pieSettings.data.length > 0) {
    displayedData = pieSettings.data;
  } else {
    displayedData = chartData;
  }
  if ((!displayedData || !displayedData.length) && cells != null) {
    displayedData = cells.map((cell) => _objectSpread$9(_objectSpread$9({}, pieSettings.presentationProps), cell.props));
  }
  if (displayedData == null) {
    return void 0;
  }
  return displayedData;
});
var selectPieLegend = createSelector([selectDisplayedData, selectSynchronisedPieSettings, pickCells$1], (displayedData, pieSettings, cells) => {
  if (displayedData == null || pieSettings == null) {
    return void 0;
  }
  return displayedData.map((entry, i) => {
    var _cells$i;
    var name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
    var color;
    if (cells !== null && cells !== void 0 && (_cells$i = cells[i]) !== null && _cells$i !== void 0 && (_cells$i = _cells$i.props) !== null && _cells$i !== void 0 && _cells$i.fill) {
      color = cells[i].props.fill;
    } else if (typeof entry === "object" && entry != null && "fill" in entry) {
      color = entry.fill;
    } else {
      color = pieSettings.fill;
    }
    return {
      value: getTooltipNameProp(name, pieSettings.dataKey),
      color,
      // @ts-expect-error Legend payload.payload says it wants objects but our data can be unknown
      payload: entry,
      type: pieSettings.legendType
    };
  });
});
var selectPieSectors = createSelector([selectDisplayedData, selectSynchronisedPieSettings, pickCells$1, selectChartOffsetInternal], (displayedData, pieSettings, cells, offset) => {
  if (pieSettings == null || displayedData == null) {
    return void 0;
  }
  return computePieSectors({
    offset,
    pieSettings,
    displayedData,
    cells
  });
});
var isPlainObject$2 = {};
var hasRequiredIsPlainObject$1;
function requireIsPlainObject$1() {
  if (hasRequiredIsPlainObject$1) return isPlainObject$2;
  hasRequiredIsPlainObject$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function isPlainObject2(object) {
      if (typeof object !== "object") {
        return false;
      }
      if (object == null) {
        return false;
      }
      if (Object.getPrototypeOf(object) === null) {
        return true;
      }
      if (Object.prototype.toString.call(object) !== "[object Object]") {
        const tag = object[Symbol.toStringTag];
        if (tag == null) {
          return false;
        }
        const isTagReadonly = !Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)?.writable;
        if (isTagReadonly) {
          return false;
        }
        return object.toString() === `[object ${tag}]`;
      }
      let proto = object;
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }
      return Object.getPrototypeOf(object) === proto;
    }
    exports.isPlainObject = isPlainObject2;
  })(isPlainObject$2);
  return isPlainObject$2;
}
var isPlainObject$1;
var hasRequiredIsPlainObject;
function requireIsPlainObject() {
  if (hasRequiredIsPlainObject) return isPlainObject$1;
  hasRequiredIsPlainObject = 1;
  isPlainObject$1 = requireIsPlainObject$1().isPlainObject;
  return isPlainObject$1;
}
var isPlainObjectExports = /* @__PURE__ */ requireIsPlainObject();
const isPlainObject = /* @__PURE__ */ getDefaultExportFromCjs(isPlainObjectExports);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function(r2) {
      _defineProperty$8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$8(e, r, t) {
  return (r = _toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$8(t) {
  var i = _toPrimitive$8(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$8(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends$7() {
  return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$7.apply(null, arguments);
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var getTrapezoidPath = (x, y, upperWidth, lowerWidth, height) => {
  var widthGap = upperWidth - lowerWidth;
  var path;
  path = roundTemplateLiteral(_templateObject || (_templateObject = _taggedTemplateLiteral(["M ", ",", ""])), x, y);
  path += roundTemplateLiteral(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["L ", ",", ""])), x + upperWidth, y);
  path += roundTemplateLiteral(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["L ", ",", ""])), x + upperWidth - widthGap / 2, y + height);
  path += roundTemplateLiteral(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["L ", ",", ""])), x + upperWidth - widthGap / 2 - lowerWidth, y + height);
  path += roundTemplateLiteral(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["L ", ",", " Z"])), x, y);
  return path;
};
var defaultTrapezoidProps = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
var Trapezoid = (outsideProps) => {
  var trapezoidProps = resolveDefaultProps(outsideProps, defaultTrapezoidProps);
  var {
    x,
    y,
    upperWidth,
    lowerWidth,
    height,
    className
  } = trapezoidProps;
  var {
    animationEasing,
    animationDuration,
    animationBegin,
    isUpdateAnimationActive
  } = trapezoidProps;
  var pathRef = reactExports.useRef(null);
  var [totalLength, setTotalLength] = reactExports.useState(-1);
  var prevUpperWidthRef = reactExports.useRef(upperWidth);
  var prevLowerWidthRef = reactExports.useRef(lowerWidth);
  var prevHeightRef = reactExports.useRef(height);
  var prevXRef = reactExports.useRef(x);
  var prevYRef = reactExports.useRef(y);
  var animationId = useAnimationId(outsideProps, "trapezoid-");
  reactExports.useEffect(() => {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (_unused) {
      }
    }
  }, []);
  if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
    return null;
  }
  var layerClass = clsx("recharts-trapezoid", className);
  if (!isUpdateAnimationActive) {
    return /* @__PURE__ */ reactExports.createElement("g", null, /* @__PURE__ */ reactExports.createElement("path", _extends$7({}, svgPropertiesAndEvents(trapezoidProps), {
      className: layerClass,
      d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
    })));
  }
  var prevUpperWidth = prevUpperWidthRef.current;
  var prevLowerWidth = prevLowerWidthRef.current;
  var prevHeight = prevHeightRef.current;
  var prevX = prevXRef.current;
  var prevY = prevYRef.current;
  var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
  var to = "".concat(totalLength, "px ").concat(totalLength, "px");
  var transition = getTransitionVal(["strokeDasharray"], animationDuration, animationEasing);
  return /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    key: animationId,
    canBegin: totalLength > 0,
    duration: animationDuration,
    easing: animationEasing,
    isActive: isUpdateAnimationActive,
    begin: animationBegin
  }, (t) => {
    var currUpperWidth = interpolate(prevUpperWidth, upperWidth, t);
    var currLowerWidth = interpolate(prevLowerWidth, lowerWidth, t);
    var currHeight = interpolate(prevHeight, height, t);
    var currX = interpolate(prevX, x, t);
    var currY = interpolate(prevY, y, t);
    if (pathRef.current) {
      prevUpperWidthRef.current = currUpperWidth;
      prevLowerWidthRef.current = currLowerWidth;
      prevHeightRef.current = currHeight;
      prevXRef.current = currX;
      prevYRef.current = currY;
    }
    var animationStyle = t > 0 ? {
      transition,
      strokeDasharray: to
    } : {
      strokeDasharray: from
    };
    return /* @__PURE__ */ reactExports.createElement("path", _extends$7({}, svgPropertiesAndEvents(trapezoidProps), {
      className: layerClass,
      d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
      ref: pathRef,
      style: _objectSpread$8(_objectSpread$8({}, animationStyle), trapezoidProps.style)
    }));
  });
};
var _excluded$7 = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function _objectWithoutProperties$7(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$7(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$7(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$7(e, r, t) {
  return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$7(t) {
  var i = _toPrimitive$7(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$7(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function defaultPropTransformer(option, props) {
  return _objectSpread$7(_objectSpread$7({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
  return shapeType === "symbols";
}
function ShapeSelector(_ref) {
  var {
    shapeType,
    elementProps
  } = _ref;
  switch (shapeType) {
    case "rectangle":
      return /* @__PURE__ */ reactExports.createElement(Rectangle, elementProps);
    case "trapezoid":
      return /* @__PURE__ */ reactExports.createElement(Trapezoid, elementProps);
    case "sector":
      return /* @__PURE__ */ reactExports.createElement(Sector, elementProps);
    case "symbols":
      if (isSymbolsProps(shapeType)) {
        return /* @__PURE__ */ reactExports.createElement(Symbols, elementProps);
      }
      break;
    case "curve":
      return /* @__PURE__ */ reactExports.createElement(Curve, elementProps);
    default:
      return null;
  }
}
function getPropsFromShapeOption(option) {
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    return option.props;
  }
  return option;
}
function Shape(_ref2) {
  var {
    option,
    shapeType,
    activeClassName = "recharts-active-shape",
    inActiveClassName = "recharts-shape"
  } = _ref2, props = _objectWithoutProperties$7(_ref2, _excluded$7);
  var shape;
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    shape = /* @__PURE__ */ reactExports.cloneElement(option, _objectSpread$7(_objectSpread$7({}, props), getPropsFromShapeOption(option)));
  } else if (typeof option === "function") {
    shape = option(props, props.index);
  } else if (isPlainObject(option) && typeof option !== "boolean") {
    var nextProps = defaultPropTransformer(option, props);
    shape = /* @__PURE__ */ reactExports.createElement(ShapeSelector, {
      shapeType,
      elementProps: nextProps
    });
  } else {
    var elementProps = props;
    shape = /* @__PURE__ */ reactExports.createElement(ShapeSelector, {
      shapeType,
      elementProps
    });
  }
  if (props.isActive) {
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      className: activeClassName
    }, shape);
  }
  return /* @__PURE__ */ reactExports.createElement(Layer, {
    className: inActiveClassName
  }, shape);
}
var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey, graphicalItemId) => {
  var dispatch = useAppDispatch();
  return (data, index) => (event) => {
    onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
    dispatch(setActiveMouseOverItemIndex({
      activeIndex: String(index),
      activeDataKey: dataKey,
      activeCoordinate: data.tooltipPosition,
      activeGraphicalItemId: graphicalItemId
    }));
  };
};
var useMouseLeaveItemDispatch = (onMouseLeaveFromProps) => {
  var dispatch = useAppDispatch();
  return (data, index) => (event) => {
    onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
    dispatch(mouseLeaveItem());
  };
};
var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey, graphicalItemId) => {
  var dispatch = useAppDispatch();
  return (data, index) => (event) => {
    onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
    dispatch(setActiveClickItemIndex({
      activeIndex: String(index),
      activeDataKey: dataKey,
      activeCoordinate: data.tooltipPosition,
      activeGraphicalItemId: graphicalItemId
    }));
  };
};
var _excluded$6 = ["key"], _excluded2$3 = ["onMouseEnter", "onClick", "onMouseLeave"], _excluded3$3 = ["id"], _excluded4$2 = ["id"];
function _extends$6() {
  return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$6.apply(null, arguments);
}
function _objectWithoutProperties$6(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$6(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$6(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
      _defineProperty$6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$6(e, r, t) {
  return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$6(t) {
  var i = _toPrimitive$6(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$6(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function SetPiePayloadLegend(props) {
  var cells = reactExports.useMemo(() => findAllByType(props.children, Cell), [props.children]);
  var legendPayload = useAppSelector((state) => selectPieLegend(state, props.id, cells));
  if (legendPayload == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(SetPolarLegendPayload, {
    legendPayload
  });
}
function getActiveShapeFill(activeShape) {
  if (activeShape == null || typeof activeShape === "boolean" || typeof activeShape === "function") {
    return void 0;
  }
  if (/* @__PURE__ */ reactExports.isValidElement(activeShape)) {
    var _activeShape$props;
    var _fill = (_activeShape$props = activeShape.props) === null || _activeShape$props === void 0 ? void 0 : _activeShape$props.fill;
    return typeof _fill === "string" ? _fill : void 0;
  }
  var {
    fill
  } = activeShape;
  return typeof fill === "string" ? fill : void 0;
}
var SetPieTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    nameKey,
    sectors,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    tooltipType,
    id,
    activeShape
  } = _ref;
  var activeShapeFill = getActiveShapeFill(activeShape);
  var tooltipDataDefinedOnItem = sectors.map((sector) => {
    var sectorTooltipPayload = sector.tooltipPayload;
    if (activeShapeFill == null || sectorTooltipPayload == null) {
      return sectorTooltipPayload;
    }
    return sectorTooltipPayload.map((item) => _objectSpread$6(_objectSpread$6({}, item), {}, {
      color: activeShapeFill,
      fill: activeShapeFill
    }));
  });
  var tooltipEntrySettings = {
    dataDefinedOnItem: tooltipDataDefinedOnItem,
    getPosition: (index) => {
      var _sectors$Number;
      return (_sectors$Number = sectors[Number(index)]) === null || _sectors$Number === void 0 ? void 0 : _sectors$Number.tooltipPosition;
    },
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit: "",
      // why doesn't Pie support unit?
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
var getTextAnchor = (x, cx) => {
  if (x > cx) {
    return "start";
  }
  if (x < cx) {
    return "end";
  }
  return "middle";
};
var getOuterRadius = (dataPoint, outerRadius, maxPieRadius) => {
  if (typeof outerRadius === "function") {
    return getPercentValue(outerRadius(dataPoint), maxPieRadius, maxPieRadius * 0.8);
  }
  return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * 0.8);
};
var parseCoordinateOfPie = (pieSettings, offset, dataPoint) => {
  var {
    top,
    left,
    width,
    height
  } = offset;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(pieSettings.cx, width, width / 2);
  var cy = top + getPercentValue(pieSettings.cy, height, height / 2);
  var innerRadius = getPercentValue(pieSettings.innerRadius, maxPieRadius, 0);
  var outerRadius = getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius);
  var maxRadius = pieSettings.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx,
    cy,
    innerRadius,
    outerRadius,
    maxRadius
  };
};
var parseDeltaAngle = (startAngle, endAngle) => {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};
var renderLabelLineItem = (option, props) => {
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    return /* @__PURE__ */ reactExports.cloneElement(option, props);
  }
  if (typeof option === "function") {
    return option(props);
  }
  var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
  var {
    key
  } = props, otherProps = _objectWithoutProperties$6(props, _excluded$6);
  return /* @__PURE__ */ reactExports.createElement(Curve, _extends$6({}, otherProps, {
    type: "linear",
    className
  }));
};
var renderLabelItem = (option, props, value) => {
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    return /* @__PURE__ */ reactExports.cloneElement(option, props);
  }
  var label = value;
  if (typeof option === "function") {
    label = option(props);
    if (/* @__PURE__ */ reactExports.isValidElement(label)) {
      return label;
    }
  }
  var className = clsx("recharts-pie-label-text", getClassNameFromUnknown(option));
  return /* @__PURE__ */ reactExports.createElement(Text, _extends$6({}, props, {
    alignmentBaseline: "middle",
    className
  }), label);
};
function PieLabels(_ref2) {
  var {
    sectors,
    props,
    showLabels
  } = _ref2;
  var {
    label,
    labelLine,
    dataKey
  } = props;
  if (!showLabels || !label || !sectors) {
    return null;
  }
  var pieProps = svgPropertiesNoEvents(props);
  var customLabelProps = svgPropertiesNoEventsFromUnknown(label);
  var customLabelLineProps = svgPropertiesNoEventsFromUnknown(labelLine);
  var offsetRadius = typeof label === "object" && "offsetRadius" in label && typeof label.offsetRadius === "number" && label.offsetRadius || 20;
  var labels = sectors.map((entry, i) => {
    var midAngle = (entry.startAngle + entry.endAngle) / 2;
    var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
    var labelProps = _objectSpread$6(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, pieProps), entry), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, customLabelProps), {}, {
      index: i,
      textAnchor: getTextAnchor(endPoint.x, entry.cx)
    }, endPoint);
    var lineProps = _objectSpread$6(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, pieProps), entry), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: entry.fill
    }, customLabelLineProps), {}, {
      index: i,
      points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      key: "line"
    });
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex: DefaultZIndexes.label,
      key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
    }, /* @__PURE__ */ reactExports.createElement(Layer, null, labelLine && renderLabelLineItem(labelLine, lineProps), renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))));
  });
  return /* @__PURE__ */ reactExports.createElement(Layer, {
    className: "recharts-pie-labels"
  }, labels);
}
function PieLabelList(_ref3) {
  var {
    sectors,
    props,
    showLabels
  } = _ref3;
  var {
    label
  } = props;
  if (typeof label === "object" && label != null && "position" in label) {
    return /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
      label
    });
  }
  return /* @__PURE__ */ reactExports.createElement(PieLabels, {
    sectors,
    props,
    showLabels
  });
}
function PieSectors(props) {
  var {
    sectors,
    activeShape,
    inactiveShape: inactiveShapeProp,
    allOtherPieProps,
    shape,
    id
  } = props;
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  var activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
  var {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps
  } = allOtherPieProps, restOfAllOtherProps = _objectWithoutProperties$6(allOtherPieProps, _excluded2$3);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey, id);
  if (sectors == null || sectors.length === 0) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, sectors.map((entry, i) => {
    if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
    var graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;
    var isActive = String(i) === activeIndex && (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) && graphicalItemMatches;
    var inactiveShape = activeIndex ? inactiveShapeProp : null;
    var sectorOptions = activeShape && isActive ? activeShape : inactiveShape;
    var sectorProps = _objectSpread$6(_objectSpread$6({}, entry), {}, {
      stroke: entry.stroke,
      tabIndex: -1,
      [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
      [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: id
    });
    return /* @__PURE__ */ reactExports.createElement(Layer, _extends$6({
      key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i),
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
      onMouseEnter: onMouseEnterFromContext(entry, i),
      onMouseLeave: onMouseLeaveFromContext(entry, i),
      onClick: onClickFromContext(entry, i)
    }), /* @__PURE__ */ reactExports.createElement(Shape, _extends$6({
      option: shape !== null && shape !== void 0 ? shape : sectorOptions,
      index: i,
      shapeType: "sector",
      isActive
    }, sectorProps)));
  }));
}
function computePieSectors(_ref4) {
  var _pieSettings$paddingA;
  var {
    pieSettings,
    displayedData,
    cells,
    offset
  } = _ref4;
  var {
    cornerRadius,
    startAngle,
    endAngle,
    dataKey,
    nameKey,
    tooltipType
  } = pieSettings;
  var minAngle = Math.abs(pieSettings.minAngle);
  var deltaAngle = parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var paddingAngle = displayedData.length <= 1 ? 0 : (_pieSettings$paddingA = pieSettings.paddingAngle) !== null && _pieSettings$paddingA !== void 0 ? _pieSettings$paddingA : 0;
  var notZeroItemCount = displayedData.filter((entry) => getValueByDataKey(entry, dataKey, 0) !== 0).length;
  var totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var sum = displayedData.reduce((result, entry) => {
    var val = getValueByDataKey(entry, dataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var needsMinAngleAdjustment = minAngle > 0 && sum > 0 && displayedData.some((entry) => {
    var val = getValueByDataKey(entry, dataKey, 0);
    var percent = (isNumber(val) ? val : 0) / sum;
    return val !== 0 && percent * absDeltaAngle < minAngle;
  });
  var effectiveMinAngle = needsMinAngleAdjustment ? minAngle : 0;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * effectiveMinAngle - totalPaddingAngle;
  var sectors;
  if (sum > 0) {
    var prev;
    sectors = displayedData.map((entry, i) => {
      var val = getValueByDataKey(entry, dataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle;
      var entryWithCellInfo = _objectSpread$6(_objectSpread$6({}, entry), cells && cells[i] && cells[i].props);
      var sectorColor = entryWithCellInfo != null && "fill" in entryWithCellInfo && typeof entryWithCellInfo.fill === "string" ? entryWithCellInfo.fill : pieSettings.fill;
      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }
      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? effectiveMinAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name,
        value: val,
        payload: entryWithCellInfo,
        dataKey,
        type: tooltipType,
        color: sectorColor,
        fill: sectorColor,
        graphicalItemId: pieSettings.id
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread$6(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, pieSettings.presentationProps), {}, {
        percent,
        cornerRadius: typeof cornerRadius === "string" ? parseFloat(cornerRadius) : cornerRadius,
        name,
        tooltipPayload,
        midAngle,
        middleRadius,
        tooltipPosition
      }, entryWithCellInfo), coordinate), {}, {
        value: val,
        dataKey,
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entryWithCellInfo,
        paddingAngle: val !== 0 ? mathSign(deltaAngle) * paddingAngle : 0
      });
      return prev;
    });
  }
  return sectors;
}
function PieLabelListProvider(_ref5) {
  var {
    showLabels,
    sectors,
    children
  } = _ref5;
  var labelListEntries = reactExports.useMemo(() => {
    if (!showLabels || !sectors) {
      return [];
    }
    return sectors.map((entry) => ({
      value: entry.value,
      payload: entry.payload,
      clockWise: false,
      parentViewBox: void 0,
      viewBox: {
        cx: entry.cx,
        cy: entry.cy,
        innerRadius: entry.innerRadius,
        outerRadius: entry.outerRadius,
        startAngle: entry.startAngle,
        endAngle: entry.endAngle,
        clockWise: false
      },
      fill: entry.fill
    }));
  }, [sectors, showLabels]);
  return /* @__PURE__ */ reactExports.createElement(PolarLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function SectorsWithAnimation(_ref6) {
  var {
    props,
    previousSectorsRef,
    id
  } = _ref6;
  var {
    sectors,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    activeShape,
    inactiveShape,
    onAnimationStart,
    onAnimationEnd
  } = props;
  var animationId = useAnimationId(props, "recharts-pie-");
  var prevSectors = previousSectorsRef.current;
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  return /* @__PURE__ */ reactExports.createElement(PieLabelListProvider, {
    showLabels: !isAnimating,
    sectors
  }, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationStart: handleAnimationStart,
    onAnimationEnd: handleAnimationEnd,
    key: animationId
  }, (t) => {
    var _first$startAngle;
    var stepData = [];
    var first = sectors && sectors[0];
    var curAngle = (_first$startAngle = first === null || first === void 0 ? void 0 : first.startAngle) !== null && _first$startAngle !== void 0 ? _first$startAngle : 0;
    sectors === null || sectors === void 0 || sectors.forEach((entry, index) => {
      var prev = prevSectors && prevSectors[index];
      var paddingAngle = index > 0 ? get(entry, "paddingAngle", 0) : 0;
      if (prev) {
        var angle = interpolate(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle, t);
        var latest = _objectSpread$6(_objectSpread$6({}, entry), {}, {
          startAngle: curAngle + paddingAngle,
          endAngle: curAngle + angle + paddingAngle
        });
        stepData.push(latest);
        curAngle = latest.endAngle;
      } else {
        var {
          endAngle,
          startAngle
        } = entry;
        var deltaAngle = interpolate(0, endAngle - startAngle, t);
        var _latest = _objectSpread$6(_objectSpread$6({}, entry), {}, {
          startAngle: curAngle + paddingAngle,
          endAngle: curAngle + deltaAngle + paddingAngle
        });
        stepData.push(_latest);
        curAngle = _latest.endAngle;
      }
    });
    previousSectorsRef.current = stepData;
    return /* @__PURE__ */ reactExports.createElement(Layer, null, /* @__PURE__ */ reactExports.createElement(PieSectors, {
      sectors: stepData,
      activeShape,
      inactiveShape,
      allOtherPieProps: props,
      shape: props.shape,
      id
    }));
  }), /* @__PURE__ */ reactExports.createElement(PieLabelList, {
    showLabels: !isAnimating,
    sectors,
    props
  }), props.children);
}
var defaultPieProps = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: false,
  innerRadius: 0,
  isAnimationActive: "auto",
  label: false,
  labelLine: true,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff",
  zIndex: DefaultZIndexes.area
};
function PieImpl(props) {
  var {
    id
  } = props, propsWithoutId = _objectWithoutProperties$6(props, _excluded3$3);
  var {
    hide,
    className,
    rootTabIndex
  } = props;
  var cells = reactExports.useMemo(() => findAllByType(props.children, Cell), [props.children]);
  var sectors = useAppSelector((state) => selectPieSectors(state, id, cells));
  var previousSectorsRef = reactExports.useRef(null);
  var layerClass = clsx("recharts-pie", className);
  if (hide || sectors == null) {
    previousSectorsRef.current = null;
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      tabIndex: rootTabIndex,
      className: layerClass
    });
  }
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(SetPieTooltipEntrySettings, {
    dataKey: props.dataKey,
    nameKey: props.nameKey,
    sectors,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    tooltipType: props.tooltipType,
    id,
    activeShape: props.activeShape
  }), /* @__PURE__ */ reactExports.createElement(Layer, {
    tabIndex: rootTabIndex,
    className: layerClass
  }, /* @__PURE__ */ reactExports.createElement(SectorsWithAnimation, {
    props: _objectSpread$6(_objectSpread$6({}, propsWithoutId), {}, {
      sectors
    }),
    previousSectorsRef,
    id
  })));
}
function PieFn(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultPieProps);
  var {
    id: externalId
  } = props, propsWithoutId = _objectWithoutProperties$6(props, _excluded4$2);
  var presentationProps = svgPropertiesNoEvents(propsWithoutId);
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: externalId,
    type: "pie"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetPolarGraphicalItem, {
    type: "pie",
    id,
    data: propsWithoutId.data,
    dataKey: propsWithoutId.dataKey,
    hide: propsWithoutId.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: propsWithoutId.name,
    nameKey: propsWithoutId.nameKey,
    tooltipType: propsWithoutId.tooltipType,
    legendType: propsWithoutId.legendType,
    fill: propsWithoutId.fill,
    cx: propsWithoutId.cx,
    cy: propsWithoutId.cy,
    startAngle: propsWithoutId.startAngle,
    endAngle: propsWithoutId.endAngle,
    paddingAngle: propsWithoutId.paddingAngle,
    minAngle: propsWithoutId.minAngle,
    innerRadius: propsWithoutId.innerRadius,
    outerRadius: propsWithoutId.outerRadius,
    cornerRadius: propsWithoutId.cornerRadius,
    presentationProps,
    maxRadius: props.maxRadius
  }), /* @__PURE__ */ reactExports.createElement(SetPiePayloadLegend, _extends$6({}, propsWithoutId, {
    id
  })), /* @__PURE__ */ reactExports.createElement(PieImpl, _extends$6({}, propsWithoutId, {
    id
  }))));
}
var Pie = PieFn;
Pie.displayName = "Pie";
var getBarSize = (globalSize, totalSize, selfSize) => {
  var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
  if (isNullish(barSize)) {
    return void 0;
  }
  return getPercentValue(barSize, totalSize, 0);
};
var combineBarSizeList = (allBars, globalSize, totalSize) => {
  var initialValue = {};
  var stackedBars = allBars.filter(isStacked);
  var unstackedBars = allBars.filter((b) => b.stackId == null);
  var groupByStack = stackedBars.reduce((acc, bar) => {
    var s2 = acc[bar.stackId];
    if (s2 == null) {
      s2 = [];
    }
    s2.push(bar);
    acc[bar.stackId] = s2;
    return acc;
  }, initialValue);
  var stackedSizeList = Object.entries(groupByStack).map((_ref) => {
    var _bars$;
    var [stackId, bars] = _ref;
    var dataKeys = bars.map((b) => b.dataKey);
    var barSize = getBarSize(globalSize, totalSize, (_bars$ = bars[0]) === null || _bars$ === void 0 ? void 0 : _bars$.barSize);
    return {
      stackId,
      dataKeys,
      barSize
    };
  });
  var unstackedSizeList = unstackedBars.map((b) => {
    var dataKeys = [b.dataKey].filter((dk) => dk != null);
    var barSize = getBarSize(globalSize, totalSize, b.barSize);
    return {
      stackId: void 0,
      dataKeys,
      barSize
    };
  });
  return [...stackedSizeList, ...unstackedSizeList];
};
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$5(e, r, t) {
  return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
  var i = _toPrimitive$5(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$5(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
  var _sizeList$;
  var len = sizeList.length;
  if (len < 1) {
    return void 0;
  }
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  var initialValue = [];
  if (isWellBehavedNumber((_sizeList$ = sizeList[0]) === null || _sizeList$ === void 0 ? void 0 : _sizeList$.barSize)) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce((res, entry) => {
      var _entry$barSize;
      var newPosition = {
        stackId: entry.stackId,
        dataKeys: entry.dataKeys,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
        }
      };
      var newRes = [...res, newPosition];
      prev = newPosition.position;
      return newRes;
    }, initialValue);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce((res, entry, i) => [...res, {
      stackId: entry.stackId,
      dataKeys: entry.dataKeys,
      position: {
        offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
        size
      }
    }], initialValue);
  }
  return result;
}
var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
  var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
  if (barBandSize !== bandSize && allBarPositions != null) {
    allBarPositions = allBarPositions.map((pos) => _objectSpread$5(_objectSpread$5({}, pos), {}, {
      position: _objectSpread$5(_objectSpread$5({}, pos.position), {}, {
        offset: pos.position.offset - barBandSize / 2
      })
    }));
  }
  return allBarPositions;
};
var combineStackedData = (stackGroups, barSettings) => {
  var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
  if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) {
    return void 0;
  }
  var {
    stackId
  } = barSettings;
  if (stackId == null) {
    return void 0;
  }
  var stackGroup = stackGroups[stackId];
  if (!stackGroup) {
    return void 0;
  }
  var {
    stackedData
  } = stackGroup;
  if (!stackedData) {
    return void 0;
  }
  return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
};
var combineBarPosition = (allBarPositions, barSettings) => {
  if (allBarPositions == null || barSettings == null) {
    return void 0;
  }
  var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
  if (position == null) {
    return void 0;
  }
  return position.position;
};
function getZIndexFromUnknown(input, defaultZIndex) {
  if (input && typeof input === "object" && "zIndex" in input && typeof input.zIndex === "number" && isWellBehavedNumber(input.zIndex)) {
    return input.zIndex;
  }
  return defaultZIndex;
}
var _excluded$5 = ["x1", "y1", "x2", "y2", "key"], _excluded2$2 = ["offset"], _excluded3$2 = ["xAxisId", "yAxisId"], _excluded4$1 = ["xAxisId", "yAxisId"];
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$4(e, r, t) {
  return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$4(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
}
function _objectWithoutProperties$5(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$5(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$5(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var Background = (props) => {
  var {
    fill
  } = props;
  if (!fill || fill === "none") {
    return null;
  }
  var {
    fillOpacity,
    x,
    y,
    width,
    height,
    ry
  } = props;
  return /* @__PURE__ */ reactExports.createElement("rect", {
    x,
    y,
    ry,
    width,
    height,
    stroke: "none",
    fill,
    fillOpacity,
    className: "recharts-cartesian-grid-bg"
  });
};
function LineItem(_ref) {
  var {
    option,
    lineItemProps
  } = _ref;
  var lineItem;
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    lineItem = /* @__PURE__ */ reactExports.cloneElement(option, lineItemProps);
  } else if (typeof option === "function") {
    lineItem = option(lineItemProps);
  } else {
    var _svgPropertiesNoEvent;
    var {
      x1,
      y1,
      x2,
      y2,
      key
    } = lineItemProps, others = _objectWithoutProperties$5(lineItemProps, _excluded$5);
    var _ref2 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(others)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, {
      offset: __
    } = _ref2, restOfFilteredProps = _objectWithoutProperties$5(_ref2, _excluded2$2);
    lineItem = /* @__PURE__ */ reactExports.createElement("line", _extends$5({}, restOfFilteredProps, {
      x1,
      y1,
      x2,
      y2,
      fill: "none",
      key
    }));
  }
  return lineItem;
}
function HorizontalGridLines(props) {
  var {
    x,
    width,
    horizontal = true,
    horizontalPoints
  } = props;
  if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
    return null;
  }
  var {
    xAxisId,
    yAxisId
  } = props, otherLineItemProps = _objectWithoutProperties$5(props, _excluded3$2);
  var items = horizontalPoints.map((entry, i) => {
    var lineItemProps = _objectSpread$4(_objectSpread$4({}, otherLineItemProps), {}, {
      x1: x,
      y1: entry,
      x2: x + width,
      y2: entry,
      key: "line-".concat(i),
      index: i
    });
    return /* @__PURE__ */ reactExports.createElement(LineItem, {
      key: "line-".concat(i),
      option: horizontal,
      lineItemProps
    });
  });
  return /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, items);
}
function VerticalGridLines(props) {
  var {
    y,
    height,
    vertical = true,
    verticalPoints
  } = props;
  if (!vertical || !verticalPoints || !verticalPoints.length) {
    return null;
  }
  var {
    xAxisId,
    yAxisId
  } = props, otherLineItemProps = _objectWithoutProperties$5(props, _excluded4$1);
  var items = verticalPoints.map((entry, i) => {
    var lineItemProps = _objectSpread$4(_objectSpread$4({}, otherLineItemProps), {}, {
      x1: entry,
      y1: y,
      x2: entry,
      y2: y + height,
      key: "line-".concat(i),
      index: i
    });
    return /* @__PURE__ */ reactExports.createElement(LineItem, {
      option: vertical,
      lineItemProps,
      key: "line-".concat(i)
    });
  });
  return /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, items);
}
function HorizontalStripes(props) {
  var {
    horizontalFill,
    fillOpacity,
    x,
    y,
    width,
    height,
    horizontalPoints,
    horizontal = true
  } = props;
  if (!horizontal || !horizontalFill || !horizontalFill.length || horizontalPoints == null) {
    return null;
  }
  var roundedSortedHorizontalPoints = horizontalPoints.map((e) => Math.round(e + y - y)).sort((a2, b) => a2 - b);
  if (y !== roundedSortedHorizontalPoints[0]) {
    roundedSortedHorizontalPoints.unshift(0);
  }
  var items = roundedSortedHorizontalPoints.map((entry, i) => {
    var nextPoint = roundedSortedHorizontalPoints[i + 1];
    var lastStripe = nextPoint == null;
    var lineHeight = lastStripe ? y + height - entry : nextPoint - entry;
    if (lineHeight <= 0) {
      return null;
    }
    var colorIndex = i % horizontalFill.length;
    return /* @__PURE__ */ reactExports.createElement("rect", {
      key: "react-".concat(i),
      y: entry,
      x,
      height: lineHeight,
      width,
      stroke: "none",
      fill: horizontalFill[colorIndex],
      fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, items);
}
function VerticalStripes(props) {
  var {
    vertical = true,
    verticalFill,
    fillOpacity,
    x,
    y,
    width,
    height,
    verticalPoints
  } = props;
  if (!vertical || !verticalFill || !verticalFill.length) {
    return null;
  }
  var roundedSortedVerticalPoints = verticalPoints.map((e) => Math.round(e + x - x)).sort((a2, b) => a2 - b);
  if (x !== roundedSortedVerticalPoints[0]) {
    roundedSortedVerticalPoints.unshift(0);
  }
  var items = roundedSortedVerticalPoints.map((entry, i) => {
    var nextPoint = roundedSortedVerticalPoints[i + 1];
    var lastStripe = nextPoint == null;
    var lineWidth = lastStripe ? x + width - entry : nextPoint - entry;
    if (lineWidth <= 0) {
      return null;
    }
    var colorIndex = i % verticalFill.length;
    return /* @__PURE__ */ reactExports.createElement("rect", {
      key: "react-".concat(i),
      x: entry,
      y,
      width: lineWidth,
      height,
      stroke: "none",
      fill: verticalFill[colorIndex],
      fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, items);
}
var defaultVerticalCoordinatesGenerator = (_ref3, syncWithTicks) => {
  var {
    xAxis,
    width,
    height,
    offset
  } = _ref3;
  return getCoordinatesOfGrid(getTicks(_objectSpread$4(_objectSpread$4(_objectSpread$4({}, defaultCartesianAxisProps), xAxis), {}, {
    ticks: getTicksOfAxis(xAxis),
    viewBox: {
      x: 0,
      y: 0,
      width,
      height
    }
  })), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = (_ref4, syncWithTicks) => {
  var {
    yAxis,
    width,
    height,
    offset
  } = _ref4;
  return getCoordinatesOfGrid(getTicks(_objectSpread$4(_objectSpread$4(_objectSpread$4({}, defaultCartesianAxisProps), yAxis), {}, {
    ticks: getTicksOfAxis(yAxis),
    viewBox: {
      x: 0,
      y: 0,
      width,
      height
    }
  })), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultCartesianGridProps = {
  horizontal: true,
  vertical: true,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0,
  syncWithTicks: false,
  zIndex: DefaultZIndexes.grid
};
function CartesianGrid(props) {
  var chartWidth = useChartWidth();
  var chartHeight = useChartHeight();
  var offset = useOffsetInternal();
  var propsIncludingDefaults = _objectSpread$4(_objectSpread$4({}, resolveDefaultProps(props, defaultCartesianGridProps)), {}, {
    x: isNumber(props.x) ? props.x : offset.left,
    y: isNumber(props.y) ? props.y : offset.top,
    width: isNumber(props.width) ? props.width : offset.width,
    height: isNumber(props.height) ? props.height : offset.height
  });
  var {
    xAxisId,
    yAxisId,
    x,
    y,
    width,
    height,
    syncWithTicks,
    horizontalValues,
    verticalValues
  } = propsIncludingDefaults;
  var isPanorama = useIsPanorama();
  var xAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "xAxis", xAxisId, isPanorama));
  var yAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "yAxis", yAxisId, isPanorama));
  if (!isPositiveNumber(width) || !isPositiveNumber(height) || !isNumber(x) || !isNumber(y)) {
    return null;
  }
  var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
  var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
  var {
    horizontalPoints,
    verticalPoints
  } = propsIncludingDefaults;
  if ((!horizontalPoints || !horizontalPoints.length) && typeof horizontalCoordinatesGenerator === "function") {
    var isHorizontalValues = horizontalValues && horizontalValues.length;
    var generatorResult = horizontalCoordinatesGenerator({
      yAxis: yAxis ? _objectSpread$4(_objectSpread$4({}, yAxis), {}, {
        ticks: isHorizontalValues ? horizontalValues : yAxis.ticks
      }) : void 0,
      width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
      height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
      offset
    }, isHorizontalValues ? true : syncWithTicks);
    warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof generatorResult, "]"));
    if (Array.isArray(generatorResult)) {
      horizontalPoints = generatorResult;
    }
  }
  if ((!verticalPoints || !verticalPoints.length) && typeof verticalCoordinatesGenerator === "function") {
    var isVerticalValues = verticalValues && verticalValues.length;
    var _generatorResult = verticalCoordinatesGenerator({
      xAxis: xAxis ? _objectSpread$4(_objectSpread$4({}, xAxis), {}, {
        ticks: isVerticalValues ? verticalValues : xAxis.ticks
      }) : void 0,
      width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
      height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
      offset
    }, isVerticalValues ? true : syncWithTicks);
    warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _generatorResult, "]"));
    if (Array.isArray(_generatorResult)) {
      verticalPoints = _generatorResult;
    }
  }
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: propsIncludingDefaults.zIndex
  }, /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ reactExports.createElement(Background, {
    fill: propsIncludingDefaults.fill,
    fillOpacity: propsIncludingDefaults.fillOpacity,
    x: propsIncludingDefaults.x,
    y: propsIncludingDefaults.y,
    width: propsIncludingDefaults.width,
    height: propsIncludingDefaults.height,
    ry: propsIncludingDefaults.ry
  }), /* @__PURE__ */ reactExports.createElement(HorizontalStripes, _extends$5({}, propsIncludingDefaults, {
    horizontalPoints
  })), /* @__PURE__ */ reactExports.createElement(VerticalStripes, _extends$5({}, propsIncludingDefaults, {
    verticalPoints
  })), /* @__PURE__ */ reactExports.createElement(HorizontalGridLines, _extends$5({}, propsIncludingDefaults, {
    offset,
    horizontalPoints,
    xAxis,
    yAxis
  })), /* @__PURE__ */ reactExports.createElement(VerticalGridLines, _extends$5({}, propsIncludingDefaults, {
    offset,
    verticalPoints,
    xAxis,
    yAxis
  }))));
}
CartesianGrid.displayName = "CartesianGrid";
var _excluded$4 = ["children"];
function _objectWithoutProperties$4(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$4(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$4(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var initialContextState = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
};
var ErrorBarContext = /* @__PURE__ */ reactExports.createContext(initialContextState);
function SetErrorBarContext(props) {
  var {
    children
  } = props, rest = _objectWithoutProperties$4(props, _excluded$4);
  return /* @__PURE__ */ reactExports.createElement(ErrorBarContext.Provider, {
    value: rest
  }, children);
}
var prefix = "Invariant failed";
function invariant(condition, message) {
  {
    throw new Error(prefix);
  }
}
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
function BarRectangle(props) {
  return /* @__PURE__ */ reactExports.createElement(Shape, _extends$4({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, props));
}
var minPointSizeCallback = function minPointSizeCallback2(minPointSize) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (value, index) => {
    if (isNumber(minPointSize)) return minPointSize;
    var isValueNumberOrNil = isNumber(value) || isNullish(value);
    if (isValueNumberOrNil) {
      return minPointSize(value, index);
    }
    !isValueNumberOrNil ? invariant() : void 0;
    return defaultValue;
  };
};
var pickIsPanorama = (_state, _id, isPanorama) => isPanorama;
var pickBarId = (_state, id) => id;
var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
var pickCells = (_state, _id, _isPanorama, cells) => cells;
var selectAllVisibleBars = createSelector([selectChartLayout, selectUnfilteredCartesianItems, selectXAxisIdFromGraphicalItemId, selectYAxisIdFromGraphicalItemId, pickIsPanorama], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
  if (layout === "horizontal") {
    return i.xAxisId === xAxisId;
  }
  return i.yAxisId === yAxisId;
}).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
var selectBarStackGroups = (state, id, isPanorama) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  if (layout === "horizontal") {
    return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
  }
  return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
};
var selectBarCartesianAxisSize = (state, id) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  if (layout === "horizontal") {
    return selectCartesianAxisSize(state, "xAxis", xAxisId);
  }
  return selectCartesianAxisSize(state, "yAxis", yAxisId);
};
var selectBarSizeList = createSelector([selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize], combineBarSizeList);
var selectBarBandSize = (state, id, isPanorama) => {
  var _ref, _getBandSizeOfAxis;
  var barSettings = selectSynchronisedBarSettings(state, id);
  if (barSettings == null) {
    return 0;
  }
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return 0;
  }
  var layout = selectChartLayout(state);
  var globalMaxBarSize = selectRootMaxBarSize(state);
  var {
    maxBarSize: childMaxBarSize
  } = barSettings;
  var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  var axis, ticks;
  if (layout === "horizontal") {
    axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  }
  return (_ref = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref !== void 0 ? _ref : 0;
};
var selectAxisBandSize = (state, id, isPanorama) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  var axis, ticks;
  if (layout === "horizontal") {
    axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks);
};
var selectAllBarPositions = createSelector([selectBarSizeList, selectRootMaxBarSize, selectBarGap, selectBarCategoryGap, selectBarBandSize, selectAxisBandSize, selectMaxBarSize], combineAllBarPositions);
var selectXAxisWithScale = (state, id, isPanorama) => {
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return void 0;
  }
  return selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisWithScale = (state, id, isPanorama) => {
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return void 0;
  }
  return selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
};
var selectXAxisTicks = (state, id, isPanorama) => {
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return void 0;
  }
  return selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisTicks = (state, id, isPanorama) => {
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return void 0;
  }
  return selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
};
var selectBarPosition = createSelector([selectAllBarPositions, selectSynchronisedBarSettings], combineBarPosition);
var selectStackedDataOfItem = createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData);
var selectBarRectangles = createSelector([selectChartOffsetInternal, selectAxisViewBox, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks, selectBarPosition, selectChartLayout, selectChartDataWithIndexesIfNotInPanoramaPosition3, selectAxisBandSize, selectStackedDataOfItem, selectSynchronisedBarSettings, pickCells], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref2, bandSize, stackedData, barSettings, cells) => {
  var {
    chartData,
    dataStartIndex,
    dataEndIndex
  } = _ref2;
  if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) {
    return void 0;
  }
  var {
    data
  } = barSettings;
  var displayedData;
  if (data != null && data.length > 0) {
    displayedData = data;
  } else {
    displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
  }
  if (displayedData == null) {
    return void 0;
  }
  return computeBarRectangles({
    layout,
    barSettings,
    pos,
    parentViewBox: axisViewBox,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    displayedData,
    offset,
    cells,
    dataStartIndex
  });
});
var _excluded$3 = ["index"];
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
function _objectWithoutProperties$3(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$3(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$3(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var BarStackContext = /* @__PURE__ */ reactExports.createContext(void 0);
var useStackId = (childStackId) => {
  var stackSettings = reactExports.useContext(BarStackContext);
  if (stackSettings != null) {
    return stackSettings.stackId;
  }
  if (childStackId == null) {
    return void 0;
  }
  return getNormalizedStackId(childStackId);
};
var getClipPathId = (stackId, index) => {
  return "recharts-bar-stack-clip-path-".concat(stackId, "-").concat(index);
};
var useBarStackClipPathUrl = (index) => {
  var barStackContext = reactExports.useContext(BarStackContext);
  if (barStackContext == null) {
    return void 0;
  }
  var {
    stackId
  } = barStackContext;
  return "url(#".concat(getClipPathId(stackId, index), ")");
};
var BarStackClipLayer = (_ref) => {
  var {
    index
  } = _ref, rest = _objectWithoutProperties$3(_ref, _excluded$3);
  var clipPathUrl = useBarStackClipPathUrl(index);
  return /* @__PURE__ */ reactExports.createElement(Layer, _extends$3({
    className: "recharts-bar-stack-layer",
    clipPath: clipPathUrl
  }, rest));
};
var _excluded$2 = ["onMouseEnter", "onMouseLeave", "onClick"], _excluded2$1 = ["value", "background", "tooltipPosition"], _excluded3$1 = ["id"], _excluded4 = ["onMouseEnter", "onClick", "onMouseLeave"];
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(e, r, t) {
  return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$2(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$2(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$2(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var computeLegendPayloadFromBarData = (props) => {
  var {
    dataKey,
    name,
    fill,
    legendType,
    hide
  } = props;
  return [{
    inactive: hide,
    dataKey,
    type: legendType,
    color: fill,
    value: getTooltipNameProp(name, dataKey),
    payload: props
  }];
};
var SetBarTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id
  } = _ref;
  var tooltipEntrySettings = {
    dataDefinedOnItem: void 0,
    getPosition: noop,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey: void 0,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit,
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
function BarBackground(props) {
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var {
    data,
    dataKey,
    background: backgroundFromProps,
    allOtherBarProps
  } = props;
  var {
    onMouseEnter: onMouseEnterFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    onClick: onItemClickFromProps
  } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties$2(allOtherBarProps, _excluded$2);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, allOtherBarProps.id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, allOtherBarProps.id);
  if (!backgroundFromProps || data == null) {
    return null;
  }
  var backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground)
  }, data.map((entry, i) => {
    var {
      value,
      background: backgroundFromDataEntry,
      tooltipPosition
    } = entry, rest = _objectWithoutProperties$2(entry, _excluded2$1);
    if (!backgroundFromDataEntry) {
      return null;
    }
    var onMouseEnter = onMouseEnterFromContext(entry, i);
    var onMouseLeave = onMouseLeaveFromContext(entry, i);
    var onClick = onClickFromContext(entry, i);
    var barRectangleProps = _objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3({
      option: backgroundFromProps,
      isActive: String(i) === activeIndex
    }, rest), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
      onMouseEnter,
      onMouseLeave,
      onClick,
      dataKey,
      index: i,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$2({
      key: "background-bar-".concat(i)
    }, barRectangleProps));
  }));
}
function BarLabelListProvider(_ref2) {
  var {
    showLabels,
    children,
    rects
  } = _ref2;
  var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
    var viewBox = {
      x: entry.x,
      y: entry.y,
      width: entry.width,
      lowerWidth: entry.width,
      upperWidth: entry.width,
      height: entry.height
    };
    return _objectSpread$3(_objectSpread$3({}, viewBox), {}, {
      value: entry.value,
      payload: entry.payload,
      parentViewBox: entry.parentViewBox,
      viewBox,
      fill: entry.fill
    });
  });
  return /* @__PURE__ */ reactExports.createElement(CartesianLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function BarRectangleWithActiveState(props) {
  var {
    shape,
    activeBar,
    baseProps,
    entry,
    index,
    dataKey
  } = props;
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  var isActive = activeBar && String(entry.originalDataIndex) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
  var [stayInLayer, setStayInLayer] = reactExports.useState(false);
  var [hasMountedActive, setHasMountedActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var rafId;
    if (isActive) {
      setStayInLayer(true);
      rafId = requestAnimationFrame(() => {
        setHasMountedActive(true);
      });
    } else {
      setHasMountedActive(false);
    }
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isActive]);
  var handleTransitionEnd = reactExports.useCallback(() => {
    if (!isActive) {
      setStayInLayer(false);
    }
  }, [isActive]);
  var isVisuallyActive = isActive && hasMountedActive;
  var shouldRenderInLayer = isActive || stayInLayer;
  var option;
  if (isActive) {
    if (activeBar === true) {
      option = shape;
    } else {
      option = activeBar;
    }
  } else {
    option = shape;
  }
  var content = /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$2({}, baseProps, {
    name: String(baseProps.name)
  }, entry, {
    isActive: isVisuallyActive,
    option,
    index,
    dataKey,
    onTransitionEnd: handleTransitionEnd
  }));
  if (shouldRenderInLayer) {
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex: DefaultZIndexes.activeBar
    }, /* @__PURE__ */ reactExports.createElement(BarStackClipLayer, {
      index: entry.originalDataIndex
    }, content));
  }
  return content;
}
function BarRectangleNeverActive(props) {
  var {
    shape,
    baseProps,
    entry,
    index,
    dataKey
  } = props;
  return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$2({}, baseProps, {
    name: String(baseProps.name)
  }, entry, {
    isActive: false,
    option: shape,
    index,
    dataKey
  }));
}
function BarRectangles(_ref3) {
  var _svgPropertiesNoEvent;
  var {
    data,
    props
  } = _ref3;
  var _ref4 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(props)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, {
    id
  } = _ref4, baseProps = _objectWithoutProperties$2(_ref4, _excluded3$1);
  var {
    shape,
    dataKey,
    activeBar
  } = props;
  var {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps
  } = props, restOfAllOtherProps = _objectWithoutProperties$2(props, _excluded4);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
  if (!data) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, data.map((entry, i) => {
    return /* @__PURE__ */ reactExports.createElement(BarStackClipLayer, _extends$2({
      index: entry.originalDataIndex,
      key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i),
      className: "recharts-bar-rectangle"
    }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
      onMouseEnter: onMouseEnterFromContext(entry, i),
      onMouseLeave: onMouseLeaveFromContext(entry, i),
      onClick: onClickFromContext(entry, i)
    }), activeBar ? /* @__PURE__ */ reactExports.createElement(BarRectangleWithActiveState, {
      shape,
      activeBar,
      baseProps,
      entry,
      index: i,
      dataKey
    }) : (
      /*
       * If the `activeBar` prop is falsy, then let's call the variant without hooks.
       * Using the `selectActiveTooltipIndex` selector is usually fast
       * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
       * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
       * So let's just skip the hooks altogether. That way, React can skip rendering the component,
       * and can skip the tree reconciliation for its children too.
       * Because we can't call hooks conditionally, we need to have a separate component for that.
       */
      /* @__PURE__ */ reactExports.createElement(BarRectangleNeverActive, {
        shape,
        baseProps,
        entry,
        index: i,
        dataKey
      })
    ));
  }));
}
function RectanglesWithAnimation(_ref5) {
  var {
    props,
    previousRectanglesRef
  } = _ref5;
  var {
    data,
    layout,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart
  } = props;
  var prevData = previousRectanglesRef.current;
  var animationId = useAnimationId(props, "recharts-bar-");
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var showLabels = !isAnimating;
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  return /* @__PURE__ */ reactExports.createElement(BarLabelListProvider, {
    showLabels,
    rects: data
  }, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationEnd: handleAnimationEnd,
    onAnimationStart: handleAnimationStart,
    key: animationId
  }, (t) => {
    var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
      var prev = prevData && prevData[index];
      if (prev) {
        return _objectSpread$3(_objectSpread$3({}, entry), {}, {
          x: interpolate(prev.x, entry.x, t),
          y: interpolate(prev.y, entry.y, t),
          width: interpolate(prev.width, entry.width, t),
          height: interpolate(prev.height, entry.height, t)
        });
      }
      if (layout === "horizontal") {
        var height = interpolate(0, entry.height, t);
        var y = interpolate(entry.stackedBarStart, entry.y, t);
        return _objectSpread$3(_objectSpread$3({}, entry), {}, {
          y,
          height
        });
      }
      var w = interpolate(0, entry.width, t);
      var x = interpolate(entry.stackedBarStart, entry.x, t);
      return _objectSpread$3(_objectSpread$3({}, entry), {}, {
        width: w,
        x
      });
    });
    if (t > 0) {
      previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
    }
    if (stepData == null) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(Layer, null, /* @__PURE__ */ reactExports.createElement(BarRectangles, {
      props,
      data: stepData
    }));
  }), /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
    label: props.label
  }), props.children);
}
function RenderRectangles(props) {
  var previousRectanglesRef = reactExports.useRef(null);
  return /* @__PURE__ */ reactExports.createElement(RectanglesWithAnimation, {
    previousRectanglesRef,
    props
  });
}
var defaultMinPointSize = 0;
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
  var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
  return {
    x: dataPoint.x,
    y: dataPoint.y,
    value,
    // getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint, dataKey)
  };
};
class BarWithState extends reactExports.PureComponent {
  render() {
    var {
      hide,
      data,
      dataKey,
      className,
      xAxisId,
      yAxisId,
      needClip,
      background,
      id
    } = this.props;
    if (hide || data == null) {
      return null;
    }
    var layerClass = clsx("recharts-bar", className);
    var clipPathId = id;
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      className: layerClass,
      id
    }, needClip && /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement(GraphicalItemClipPath, {
      clipPathId,
      xAxisId,
      yAxisId
    })), /* @__PURE__ */ reactExports.createElement(Layer, {
      className: "recharts-bar-rectangles",
      clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
    }, /* @__PURE__ */ reactExports.createElement(BarBackground, {
      data,
      dataKey,
      background,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ reactExports.createElement(RenderRectangles, this.props)));
  }
}
var defaultBarProps = {
  activeBar: false,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: false,
  hide: false,
  isAnimationActive: "auto",
  label: false,
  legendType: "rect",
  minPointSize: defaultMinPointSize,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.bar
};
function BarImpl(props) {
  var {
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive
  } = props;
  var {
    needClip
  } = useNeedsClip(xAxisId, yAxisId);
  var layout = useChartLayout();
  var isPanorama = useIsPanorama();
  var cells = findAllByType(props.children, Cell);
  var rects = useAppSelector((state) => selectBarRectangles(state, props.id, isPanorama, cells));
  if (layout !== "vertical" && layout !== "horizontal") {
    return null;
  }
  var errorBarOffset;
  var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
  if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) {
    errorBarOffset = 0;
  } else {
    errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
  }
  return /* @__PURE__ */ reactExports.createElement(SetErrorBarContext, {
    xAxisId,
    yAxisId,
    data: rects,
    dataPointFormatter: errorBarDataPointFormatter,
    errorBarOffset
  }, /* @__PURE__ */ reactExports.createElement(BarWithState, _extends$2({}, props, {
    layout,
    needClip,
    data: rects,
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive
  })));
}
function computeBarRectangles(_ref6) {
  var {
    layout,
    barSettings: {
      dataKey,
      minPointSize: minPointSizeProp,
      hasCustomShape
    },
    pos,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    displayedData,
    offset,
    cells,
    parentViewBox,
    dataStartIndex
  } = _ref6;
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var stackedBarStart = numericAxis.scale.map(baseValue);
  return displayedData.map((entry, index) => {
    var value, x, y, width, height, background;
    if (stackedData) {
      var untruncatedValue = stackedData[index + dataStartIndex];
      if (untruncatedValue == null) {
        return null;
      }
      value = truncateByDomain(untruncatedValue, stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
    if (layout === "horizontal") {
      var _ref7;
      var baseValueScale = yAxis.scale.map(value[0]);
      var currentValueScale = yAxis.scale.map(value[1]);
      if (baseValueScale == null || currentValueScale == null) {
        return null;
      }
      x = getCateCoordinateOfBar({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      y = (_ref7 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref7 !== void 0 ? _ref7 : void 0;
      width = pos.size;
      var computedHeight = baseValueScale - currentValueScale;
      height = isNan(computedHeight) ? 0 : computedHeight;
      background = {
        x,
        y: offset.top,
        width,
        height: offset.height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y -= delta;
        height += delta;
      }
    } else {
      var _baseValueScale = xAxis.scale.map(value[0]);
      var _currentValueScale = xAxis.scale.map(value[1]);
      if (_baseValueScale == null || _currentValueScale == null) {
        return null;
      }
      x = _baseValueScale;
      y = getCateCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      width = _currentValueScale - _baseValueScale;
      height = pos.size;
      background = {
        x: offset.left,
        y,
        width: offset.width,
        height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }
    if (x == null || y == null || width == null || height == null || !hasCustomShape && (width === 0 || height === 0)) {
      return null;
    }
    var barRectangleItem = _objectSpread$3(_objectSpread$3({}, entry), {}, {
      stackedBarStart,
      x,
      y,
      width,
      height,
      value: stackedData ? value : value[1],
      payload: entry,
      background,
      tooltipPosition: {
        x: x + width / 2,
        y: y + height / 2
      },
      parentViewBox,
      originalDataIndex: index
    }, cells && cells[index] && cells[index].props);
    return barRectangleItem;
  }).filter(Boolean);
}
function BarFn(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultBarProps);
  var stackId = useStackId(props.stackId);
  var isPanorama = useIsPanorama();
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: props.id,
    type: "bar"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetLegendPayload, {
    legendPayload: computeLegendPayloadFromBarData(props)
  }), /* @__PURE__ */ reactExports.createElement(SetBarTooltipEntrySettings, {
    dataKey: props.dataKey,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    unit: props.unit,
    tooltipType: props.tooltipType,
    id
  }), /* @__PURE__ */ reactExports.createElement(SetCartesianGraphicalItem, {
    type: "bar",
    id,
    data: void 0,
    xAxisId: props.xAxisId,
    yAxisId: props.yAxisId,
    zAxisId: 0,
    dataKey: props.dataKey,
    stackId,
    hide: props.hide,
    barSize: props.barSize,
    minPointSize: props.minPointSize,
    maxBarSize: props.maxBarSize,
    isPanorama,
    hasCustomShape: props.shape != null
  }), /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(BarImpl, _extends$2({}, props, {
    id
  })))));
}
var Bar = /* @__PURE__ */ reactExports.memo(BarFn, propsAreEqual);
Bar.displayName = "Bar";
var _excluded$1 = ["type"], _excluded2 = ["dangerouslySetInnerHTML", "ticks", "scale"], _excluded3 = ["id", "scale"];
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function SetYAxisSettings(props) {
  var dispatch = useAppDispatch();
  var prevSettingsRef = reactExports.useRef(null);
  var layout = useCartesianChartLayout();
  var {
    type: typeFromProps
  } = props, restProps = _objectWithoutProperties$1(props, _excluded$1);
  var evaluatedType = getAxisTypeBasedOnLayout(layout, "yAxis", typeFromProps);
  var settings = reactExports.useMemo(() => {
    if (evaluatedType == null) {
      return void 0;
    }
    return _objectSpread$2(_objectSpread$2({}, restProps), {}, {
      type: evaluatedType
    });
  }, [evaluatedType, restProps]);
  reactExports.useLayoutEffect(() => {
    if (settings == null) {
      return;
    }
    if (prevSettingsRef.current === null) {
      dispatch(addYAxis(settings));
    } else if (prevSettingsRef.current !== settings) {
      dispatch(replaceYAxis({
        prev: prevSettingsRef.current,
        next: settings
      }));
    }
    prevSettingsRef.current = settings;
  }, [settings, dispatch]);
  reactExports.useLayoutEffect(() => {
    return () => {
      if (prevSettingsRef.current) {
        dispatch(removeYAxis(prevSettingsRef.current));
        prevSettingsRef.current = null;
      }
    };
  }, [dispatch]);
  return null;
}
function YAxisImpl(props) {
  var {
    yAxisId,
    className,
    width,
    label
  } = props;
  var cartesianAxisRef = reactExports.useRef(null);
  var labelRef = reactExports.useRef(null);
  var viewBox = useAppSelector(selectAxisViewBox);
  var isPanorama = useIsPanorama();
  var dispatch = useAppDispatch();
  var axisType = "yAxis";
  var axisSize = useAppSelector((state) => selectYAxisSize(state, yAxisId));
  var position = useAppSelector((state) => selectYAxisPosition(state, yAxisId));
  var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));
  var synchronizedSettings = useAppSelector((state) => selectYAxisSettingsNoDefaults(state, yAxisId));
  reactExports.useLayoutEffect(() => {
    if (width !== "auto" || !axisSize || isLabelContentAFunction(label) || /* @__PURE__ */ reactExports.isValidElement(label) || synchronizedSettings == null) {
      return;
    }
    var axisComponent = cartesianAxisRef.current;
    if (!axisComponent) {
      return;
    }
    var updatedYAxisWidth = axisComponent.getCalculatedWidth();
    if (Math.round(axisSize.width) !== Math.round(updatedYAxisWidth)) {
      dispatch(updateYAxisWidth({
        id: yAxisId,
        width: updatedYAxisWidth
      }));
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    cartesianTickItems,
    axisSize,
    dispatch,
    label,
    yAxisId,
    width,
    synchronizedSettings
  ]);
  if (axisSize == null || position == null || synchronizedSettings == null) {
    return null;
  }
  var {
    dangerouslySetInnerHTML,
    ticks,
    scale: del
  } = props, allOtherProps = _objectWithoutProperties$1(props, _excluded2);
  var {
    id,
    scale: del2
  } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties$1(synchronizedSettings, _excluded3);
  return /* @__PURE__ */ reactExports.createElement(CartesianAxis, _extends$1({}, allOtherProps, restSynchronizedSettings, {
    ref: cartesianAxisRef,
    labelRef,
    x: position.x,
    y: position.y,
    tickTextProps: width === "auto" ? {
      width: void 0
    } : {
      width
    },
    width: axisSize.width,
    height: axisSize.height,
    className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
    viewBox,
    ticks: cartesianTickItems,
    axisType,
    axisId: yAxisId
  }));
}
var yAxisDefaultProps = {
  allowDataOverflow: implicitYAxis.allowDataOverflow,
  allowDecimals: implicitYAxis.allowDecimals,
  allowDuplicatedCategory: implicitYAxis.allowDuplicatedCategory,
  angle: implicitYAxis.angle,
  axisLine: defaultCartesianAxisProps.axisLine,
  hide: false,
  includeHidden: implicitYAxis.includeHidden,
  interval: implicitYAxis.interval,
  label: false,
  minTickGap: implicitYAxis.minTickGap,
  mirror: implicitYAxis.mirror,
  orientation: implicitYAxis.orientation,
  padding: implicitYAxis.padding,
  reversed: implicitYAxis.reversed,
  scale: implicitYAxis.scale,
  tick: implicitYAxis.tick,
  tickCount: implicitYAxis.tickCount,
  tickLine: defaultCartesianAxisProps.tickLine,
  tickSize: defaultCartesianAxisProps.tickSize,
  type: implicitYAxis.type,
  niceTicks: implicitYAxis.niceTicks,
  width: implicitYAxis.width,
  yAxisId: 0
};
var YAxisSettingsDispatcher = (outsideProps) => {
  var props = resolveDefaultProps(outsideProps, yAxisDefaultProps);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetYAxisSettings, {
    interval: props.interval,
    id: props.yAxisId,
    scale: props.scale,
    type: props.type,
    domain: props.domain,
    allowDataOverflow: props.allowDataOverflow,
    dataKey: props.dataKey,
    allowDuplicatedCategory: props.allowDuplicatedCategory,
    allowDecimals: props.allowDecimals,
    tickCount: props.tickCount,
    padding: props.padding,
    includeHidden: props.includeHidden,
    reversed: props.reversed,
    ticks: props.ticks,
    width: props.width,
    orientation: props.orientation,
    mirror: props.mirror,
    hide: props.hide,
    unit: props.unit,
    name: props.name,
    angle: props.angle,
    minTickGap: props.minTickGap,
    tick: props.tick,
    tickFormatter: props.tickFormatter,
    niceTicks: props.niceTicks
  }), /* @__PURE__ */ reactExports.createElement(YAxisImpl, props));
};
var YAxis = /* @__PURE__ */ reactExports.memo(YAxisSettingsDispatcher, axisPropsAreEqual);
YAxis.displayName = "YAxis";
var allowedTooltipTypes$1 = ["axis", "item"];
var BarChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  return /* @__PURE__ */ reactExports.createElement(CartesianChart, {
    chartName: "BarChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: allowedTooltipTypes$1,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: props,
    ref
  });
});
function ReportPolarOptions(props) {
  var dispatch = useAppDispatch();
  reactExports.useEffect(() => {
    dispatch(updatePolarOptions(props));
  }, [dispatch, props]);
  return null;
}
var _excluded = ["layout"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var defaultMargin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
};
var defaultPolarChartProps = _objectSpread$1({
  accessibilityLayer: true,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: defaultMargin,
  reverseStackOrder: false,
  syncMethod: "index",
  layout: "radial",
  responsive: false,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, initialEventSettingsState);
var PolarChart = /* @__PURE__ */ reactExports.forwardRef(function PolarChart2(props, ref) {
  var _polarChartProps$id;
  var polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultPolarChartProps);
  var {
    layout
  } = polarChartProps, otherCategoricalProps = _objectWithoutProperties(polarChartProps, _excluded);
  var {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher
  } = props;
  var options = {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ reactExports.createElement(RechartsStoreProvider, {
    preloadedState: {
      options
    },
    reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
  }, /* @__PURE__ */ reactExports.createElement(ChartDataContextProvider, {
    chartData: polarChartProps.data
  }), /* @__PURE__ */ reactExports.createElement(ReportMainChartProps, {
    layout,
    margin: polarChartProps.margin
  }), /* @__PURE__ */ reactExports.createElement(ReportEventSettings, {
    throttleDelay: polarChartProps.throttleDelay,
    throttledEvents: polarChartProps.throttledEvents
  }), /* @__PURE__ */ reactExports.createElement(ReportChartProps, {
    baseValue: void 0,
    accessibilityLayer: polarChartProps.accessibilityLayer,
    barCategoryGap: polarChartProps.barCategoryGap,
    maxBarSize: polarChartProps.maxBarSize,
    stackOffset: polarChartProps.stackOffset,
    barGap: polarChartProps.barGap,
    barSize: polarChartProps.barSize,
    syncId: polarChartProps.syncId,
    syncMethod: polarChartProps.syncMethod,
    className: polarChartProps.className,
    reverseStackOrder: polarChartProps.reverseStackOrder
  }), /* @__PURE__ */ reactExports.createElement(ReportPolarOptions, {
    cx: polarChartProps.cx,
    cy: polarChartProps.cy,
    startAngle: polarChartProps.startAngle,
    endAngle: polarChartProps.endAngle,
    innerRadius: polarChartProps.innerRadius,
    outerRadius: polarChartProps.outerRadius
  }), /* @__PURE__ */ reactExports.createElement(CategoricalChart, _extends({}, otherCategoricalProps, {
    ref
  })));
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var allowedTooltipTypes = ["item"];
var defaultPieChartProps = _objectSpread(_objectSpread({}, defaultPolarChartProps), {}, {
  layout: "centric",
  startAngle: 0,
  endAngle: 360
});
var PieChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
  return /* @__PURE__ */ reactExports.createElement(PolarChart, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: allowedTooltipTypes,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: propsWithDefaults,
    ref
  });
});
export {
  Bar as B,
  CartesianGrid as C,
  Pie as P,
  SetErrorBarContext as S,
  YAxis as Y,
  BarChart as a,
  Cell as b,
  PieChart as c,
  Shape as d,
  Symbols as e
};
