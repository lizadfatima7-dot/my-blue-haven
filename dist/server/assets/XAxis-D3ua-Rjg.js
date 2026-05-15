import { e as commonjsGlobal, w as getDefaultExportFromCjs, S as reactExports } from "./server-a5t9Epnm.js";
import { f as clsx, r as reactDomExports } from "./router-CjVt23mV.js";
import { aF as requireIsArrayLike, aE as requireGet, aJ as requireIsObject, aH as requireIsEqualsSameValueZero, aG as requireIsDeepKey, aL as requireToPath, aI as requireIsIndex, aK as requireToKey, aj as isNullish, ak as isNumOrStr, bC as sortBy, al as isNumber, b$ as usePrefersReducedMotion, bD as svgPropertiesAndEvents, aM as resolveDefaultProps, bN as useAnimationId, a9 as getTransitionVal, J as JavascriptAnimate, aO as roundTemplateLiteral, ae as interpolate, aN as round, ax as polarToCartesian, a4 as getPercentValue, as as mathSign, R as RADIAN, am as isPolarCoordinate, bP as useAppSelector, bl as selectTooltipAxisTicks, bk as selectTooltipAxisScale, Y as getBandSizeOfAxis, bj as selectTooltipAxis, bZ as useOffsetInternal, bS as useChartLayout, bT as useChartName, bG as svgPropertiesNoEventsFromUnknown, Z as ZIndexLayer, h as DefaultZIndexes, f as Curve, bO as useAppDispatch, bB as setTooltipSettingsState, c3 as useViewBox, bL as useAccessibilityLayer, c1 as useTooltipEventType, c2 as useTooltipPortal, c0 as useTooltipChartSynchronisation, b9 as selectIsTooltipActive, bm as selectTooltipPayload, aP as selectActiveCoordinate, aQ as selectActiveLabel, G as Global, a6 as getStringSize, j as Layer, bF as svgPropertiesNoEvents, a as CartesianLabelContextProvider, b as CartesianLabelFromLabelProp, W as get, ap as isValidTextAnchor, w as adaptEventsOfChild, T as Text, au as noop, bA as setRenderedTicks, az as removeRenderedTicks, ay as propsAreEqual, bQ as useCartesianChartLayout, x as addXAxis, aC as replaceXAxis, aA as removeXAxis, ab as implicitXAxis, aW as selectAxisViewBox, bV as useIsPanorama, bh as selectTicksOfAxis, br as selectXAxisSize, bp as selectXAxisPosition, bq as selectXAxisSettingsNoDefaults, X as getAxisTypeBasedOnLayout } from "./CartesianChart-BVFDP17C.js";
var uniqBy$3 = {};
var uniqBy$2 = {};
var hasRequiredUniqBy$2;
function requireUniqBy$2() {
  if (hasRequiredUniqBy$2) return uniqBy$2;
  hasRequiredUniqBy$2 = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function uniqBy2(arr, mapper) {
      const map = /* @__PURE__ */ new Map();
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const key = mapper(item, i, arr);
        if (!map.has(key)) {
          map.set(key, item);
        }
      }
      return Array.from(map.values());
    }
    exports.uniqBy = uniqBy2;
  })(uniqBy$2);
  return uniqBy$2;
}
var ary = {};
var hasRequiredAry;
function requireAry() {
  if (hasRequiredAry) return ary;
  hasRequiredAry = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function ary2(func, n) {
      return function(...args) {
        return func.apply(this, args.slice(0, n));
      };
    }
    exports.ary = ary2;
  })(ary);
  return ary;
}
var identity = {};
var hasRequiredIdentity;
function requireIdentity() {
  if (hasRequiredIdentity) return identity;
  hasRequiredIdentity = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function identity2(x) {
      return x;
    }
    exports.identity = identity2;
  })(identity);
  return identity;
}
var isArrayLikeObject = {};
var isObjectLike = {};
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike;
  hasRequiredIsObjectLike = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function isObjectLike2(value) {
      return typeof value === "object" && value !== null;
    }
    exports.isObjectLike = isObjectLike2;
  })(isObjectLike);
  return isObjectLike;
}
var hasRequiredIsArrayLikeObject;
function requireIsArrayLikeObject() {
  if (hasRequiredIsArrayLikeObject) return isArrayLikeObject;
  hasRequiredIsArrayLikeObject = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const isArrayLike = /* @__PURE__ */ requireIsArrayLike();
    const isObjectLike2 = /* @__PURE__ */ requireIsObjectLike();
    function isArrayLikeObject2(value) {
      return isObjectLike2.isObjectLike(value) && isArrayLike.isArrayLike(value);
    }
    exports.isArrayLikeObject = isArrayLikeObject2;
  })(isArrayLikeObject);
  return isArrayLikeObject;
}
var iteratee = {};
var property = {};
var hasRequiredProperty;
function requireProperty() {
  if (hasRequiredProperty) return property;
  hasRequiredProperty = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const get2 = /* @__PURE__ */ requireGet();
    function property2(path) {
      return function(object) {
        return get2.get(object, path);
      };
    }
    exports.property = property2;
  })(property);
  return property;
}
var matches = {};
var isMatch = {};
var isMatchWith = {};
var isPrimitive = {};
var hasRequiredIsPrimitive;
function requireIsPrimitive() {
  if (hasRequiredIsPrimitive) return isPrimitive;
  hasRequiredIsPrimitive = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function isPrimitive2(value) {
      return value == null || typeof value !== "object" && typeof value !== "function";
    }
    exports.isPrimitive = isPrimitive2;
  })(isPrimitive);
  return isPrimitive;
}
var hasRequiredIsMatchWith;
function requireIsMatchWith() {
  if (hasRequiredIsMatchWith) return isMatchWith;
  hasRequiredIsMatchWith = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const isObject = /* @__PURE__ */ requireIsObject();
    const isPrimitive2 = /* @__PURE__ */ requireIsPrimitive();
    const isEqualsSameValueZero = /* @__PURE__ */ requireIsEqualsSameValueZero();
    function isMatchWith2(target, source, compare) {
      if (typeof compare !== "function") {
        return isMatchWith2(target, source, () => void 0);
      }
      return isMatchWithInternal(target, source, function doesMatch(objValue, srcValue, key, object, source2, stack) {
        const isEqual = compare(objValue, srcValue, key, object, source2, stack);
        if (isEqual !== void 0) {
          return Boolean(isEqual);
        }
        return isMatchWithInternal(objValue, srcValue, doesMatch, stack);
      }, /* @__PURE__ */ new Map());
    }
    function isMatchWithInternal(target, source, compare, stack) {
      if (source === target) {
        return true;
      }
      switch (typeof source) {
        case "object": {
          return isObjectMatch(target, source, compare, stack);
        }
        case "function": {
          const sourceKeys = Object.keys(source);
          if (sourceKeys.length > 0) {
            return isMatchWithInternal(target, { ...source }, compare, stack);
          }
          return isEqualsSameValueZero.isEqualsSameValueZero(target, source);
        }
        default: {
          if (!isObject.isObject(target)) {
            return isEqualsSameValueZero.isEqualsSameValueZero(target, source);
          }
          if (typeof source === "string") {
            return source === "";
          }
          return true;
        }
      }
    }
    function isObjectMatch(target, source, compare, stack) {
      if (source == null) {
        return true;
      }
      if (Array.isArray(source)) {
        return isArrayMatch(target, source, compare, stack);
      }
      if (source instanceof Map) {
        return isMapMatch(target, source, compare, stack);
      }
      if (source instanceof Set) {
        return isSetMatch(target, source, compare, stack);
      }
      const keys = Object.keys(source);
      if (target == null || isPrimitive2.isPrimitive(target)) {
        return keys.length === 0;
      }
      if (keys.length === 0) {
        return true;
      }
      if (stack?.has(source)) {
        return stack.get(source) === target;
      }
      stack?.set(source, target);
      try {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!isPrimitive2.isPrimitive(target) && !(key in target)) {
            return false;
          }
          if (source[key] === void 0 && target[key] !== void 0) {
            return false;
          }
          if (source[key] === null && target[key] !== null) {
            return false;
          }
          const isEqual = compare(target[key], source[key], key, target, source, stack);
          if (!isEqual) {
            return false;
          }
        }
        return true;
      } finally {
        stack?.delete(source);
      }
    }
    function isMapMatch(target, source, compare, stack) {
      if (source.size === 0) {
        return true;
      }
      if (!(target instanceof Map)) {
        return false;
      }
      for (const [key, sourceValue] of source.entries()) {
        const targetValue = target.get(key);
        const isEqual = compare(targetValue, sourceValue, key, target, source, stack);
        if (isEqual === false) {
          return false;
        }
      }
      return true;
    }
    function isArrayMatch(target, source, compare, stack) {
      if (source.length === 0) {
        return true;
      }
      if (!Array.isArray(target)) {
        return false;
      }
      const countedIndex = /* @__PURE__ */ new Set();
      for (let i = 0; i < source.length; i++) {
        const sourceItem = source[i];
        let found = false;
        for (let j = 0; j < target.length; j++) {
          if (countedIndex.has(j)) {
            continue;
          }
          const targetItem = target[j];
          let matches2 = false;
          const isEqual = compare(targetItem, sourceItem, i, target, source, stack);
          if (isEqual) {
            matches2 = true;
          }
          if (matches2) {
            countedIndex.add(j);
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }
    function isSetMatch(target, source, compare, stack) {
      if (source.size === 0) {
        return true;
      }
      if (!(target instanceof Set)) {
        return false;
      }
      return isArrayMatch([...target], [...source], compare, stack);
    }
    exports.isMatchWith = isMatchWith2;
    exports.isSetMatch = isSetMatch;
  })(isMatchWith);
  return isMatchWith;
}
var hasRequiredIsMatch;
function requireIsMatch() {
  if (hasRequiredIsMatch) return isMatch;
  hasRequiredIsMatch = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const isMatchWith2 = /* @__PURE__ */ requireIsMatchWith();
    function isMatch2(target, source) {
      return isMatchWith2.isMatchWith(target, source, () => void 0);
    }
    exports.isMatch = isMatch2;
  })(isMatch);
  return isMatch;
}
var cloneDeep$1 = {};
var cloneDeepWith$1 = {};
var getSymbols = {};
var hasRequiredGetSymbols;
function requireGetSymbols() {
  if (hasRequiredGetSymbols) return getSymbols;
  hasRequiredGetSymbols = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function getSymbols2(object) {
      return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
    }
    exports.getSymbols = getSymbols2;
  })(getSymbols);
  return getSymbols;
}
var getTag = {};
var hasRequiredGetTag;
function requireGetTag() {
  if (hasRequiredGetTag) return getTag;
  hasRequiredGetTag = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function getTag2(value) {
      if (value == null) {
        return value === void 0 ? "[object Undefined]" : "[object Null]";
      }
      return Object.prototype.toString.call(value);
    }
    exports.getTag = getTag2;
  })(getTag);
  return getTag;
}
var tags = {};
var hasRequiredTags;
function requireTags() {
  if (hasRequiredTags) return tags;
  hasRequiredTags = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const regexpTag = "[object RegExp]";
    const stringTag = "[object String]";
    const numberTag = "[object Number]";
    const booleanTag = "[object Boolean]";
    const argumentsTag = "[object Arguments]";
    const symbolTag = "[object Symbol]";
    const dateTag = "[object Date]";
    const mapTag = "[object Map]";
    const setTag = "[object Set]";
    const arrayTag = "[object Array]";
    const functionTag = "[object Function]";
    const arrayBufferTag = "[object ArrayBuffer]";
    const objectTag = "[object Object]";
    const errorTag = "[object Error]";
    const dataViewTag = "[object DataView]";
    const uint8ArrayTag = "[object Uint8Array]";
    const uint8ClampedArrayTag = "[object Uint8ClampedArray]";
    const uint16ArrayTag = "[object Uint16Array]";
    const uint32ArrayTag = "[object Uint32Array]";
    const bigUint64ArrayTag = "[object BigUint64Array]";
    const int8ArrayTag = "[object Int8Array]";
    const int16ArrayTag = "[object Int16Array]";
    const int32ArrayTag = "[object Int32Array]";
    const bigInt64ArrayTag = "[object BigInt64Array]";
    const float32ArrayTag = "[object Float32Array]";
    const float64ArrayTag = "[object Float64Array]";
    exports.argumentsTag = argumentsTag;
    exports.arrayBufferTag = arrayBufferTag;
    exports.arrayTag = arrayTag;
    exports.bigInt64ArrayTag = bigInt64ArrayTag;
    exports.bigUint64ArrayTag = bigUint64ArrayTag;
    exports.booleanTag = booleanTag;
    exports.dataViewTag = dataViewTag;
    exports.dateTag = dateTag;
    exports.errorTag = errorTag;
    exports.float32ArrayTag = float32ArrayTag;
    exports.float64ArrayTag = float64ArrayTag;
    exports.functionTag = functionTag;
    exports.int16ArrayTag = int16ArrayTag;
    exports.int32ArrayTag = int32ArrayTag;
    exports.int8ArrayTag = int8ArrayTag;
    exports.mapTag = mapTag;
    exports.numberTag = numberTag;
    exports.objectTag = objectTag;
    exports.regexpTag = regexpTag;
    exports.setTag = setTag;
    exports.stringTag = stringTag;
    exports.symbolTag = symbolTag;
    exports.uint16ArrayTag = uint16ArrayTag;
    exports.uint32ArrayTag = uint32ArrayTag;
    exports.uint8ArrayTag = uint8ArrayTag;
    exports.uint8ClampedArrayTag = uint8ClampedArrayTag;
  })(tags);
  return tags;
}
var isBuffer = {};
var globalThis$1 = {};
var hasRequiredGlobalThis;
function requireGlobalThis() {
  if (hasRequiredGlobalThis) return globalThis$1;
  hasRequiredGlobalThis = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const globalThis_ = typeof globalThis === "object" && globalThis || typeof window === "object" && window || typeof self === "object" && self || typeof commonjsGlobal === "object" && commonjsGlobal || /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
    exports.globalThis = globalThis_;
  })(globalThis$1);
  return globalThis$1;
}
var hasRequiredIsBuffer;
function requireIsBuffer() {
  if (hasRequiredIsBuffer) return isBuffer;
  hasRequiredIsBuffer = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const globalThis2 = /* @__PURE__ */ requireGlobalThis();
    function isBuffer2(x) {
      return typeof globalThis2.globalThis.Buffer !== "undefined" && globalThis2.globalThis.Buffer.isBuffer(x);
    }
    exports.isBuffer = isBuffer2;
  })(isBuffer);
  return isBuffer;
}
var isTypedArray = {};
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray;
  hasRequiredIsTypedArray = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function isTypedArray2(x) {
      return ArrayBuffer.isView(x) && !(x instanceof DataView);
    }
    exports.isTypedArray = isTypedArray2;
  })(isTypedArray);
  return isTypedArray;
}
var hasRequiredCloneDeepWith$1;
function requireCloneDeepWith$1() {
  if (hasRequiredCloneDeepWith$1) return cloneDeepWith$1;
  hasRequiredCloneDeepWith$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const getSymbols2 = /* @__PURE__ */ requireGetSymbols();
    const getTag2 = /* @__PURE__ */ requireGetTag();
    const tags2 = /* @__PURE__ */ requireTags();
    const isBuffer2 = /* @__PURE__ */ requireIsBuffer();
    const isPrimitive2 = /* @__PURE__ */ requireIsPrimitive();
    const isTypedArray2 = /* @__PURE__ */ requireIsTypedArray();
    function cloneDeepWith2(obj, cloneValue) {
      return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
    }
    function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
      const cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
      if (cloned !== void 0) {
        return cloned;
      }
      if (isPrimitive2.isPrimitive(valueToClone)) {
        return valueToClone;
      }
      if (stack.has(valueToClone)) {
        return stack.get(valueToClone);
      }
      if (Array.isArray(valueToClone)) {
        const result = new Array(valueToClone.length);
        stack.set(valueToClone, result);
        for (let i = 0; i < valueToClone.length; i++) {
          result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
        }
        if (Object.hasOwn(valueToClone, "index")) {
          result.index = valueToClone.index;
        }
        if (Object.hasOwn(valueToClone, "input")) {
          result.input = valueToClone.input;
        }
        return result;
      }
      if (valueToClone instanceof Date) {
        return new Date(valueToClone.getTime());
      }
      if (valueToClone instanceof RegExp) {
        const result = new RegExp(valueToClone.source, valueToClone.flags);
        result.lastIndex = valueToClone.lastIndex;
        return result;
      }
      if (valueToClone instanceof Map) {
        const result = /* @__PURE__ */ new Map();
        stack.set(valueToClone, result);
        for (const [key, value] of valueToClone) {
          result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
        }
        return result;
      }
      if (valueToClone instanceof Set) {
        const result = /* @__PURE__ */ new Set();
        stack.set(valueToClone, result);
        for (const value of valueToClone) {
          result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
        }
        return result;
      }
      if (isBuffer2.isBuffer(valueToClone)) {
        return valueToClone.subarray();
      }
      if (isTypedArray2.isTypedArray(valueToClone)) {
        const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
        stack.set(valueToClone, result);
        for (let i = 0; i < valueToClone.length; i++) {
          result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
        }
        return result;
      }
      if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
        return valueToClone.slice(0);
      }
      if (valueToClone instanceof DataView) {
        const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (typeof File !== "undefined" && valueToClone instanceof File) {
        const result = new File([valueToClone], valueToClone.name, {
          type: valueToClone.type
        });
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
        const result = new Blob([valueToClone], { type: valueToClone.type });
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (valueToClone instanceof Error) {
        const result = structuredClone(valueToClone);
        stack.set(valueToClone, result);
        result.message = valueToClone.message;
        result.name = valueToClone.name;
        result.stack = valueToClone.stack;
        result.cause = valueToClone.cause;
        result.constructor = valueToClone.constructor;
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (valueToClone instanceof Boolean) {
        const result = new Boolean(valueToClone.valueOf());
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (valueToClone instanceof Number) {
        const result = new Number(valueToClone.valueOf());
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (valueToClone instanceof String) {
        const result = new String(valueToClone.valueOf());
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
        const result = Object.create(Object.getPrototypeOf(valueToClone));
        stack.set(valueToClone, result);
        copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
        return result;
      }
      return valueToClone;
    }
    function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
      const keys = [...Object.keys(source), ...getSymbols2.getSymbols(source)];
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const descriptor = Object.getOwnPropertyDescriptor(target, key);
        if (descriptor == null || descriptor.writable) {
          target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
        }
      }
    }
    function isCloneableObject(object) {
      switch (getTag2.getTag(object)) {
        case tags2.argumentsTag:
        case tags2.arrayTag:
        case tags2.arrayBufferTag:
        case tags2.dataViewTag:
        case tags2.booleanTag:
        case tags2.dateTag:
        case tags2.float32ArrayTag:
        case tags2.float64ArrayTag:
        case tags2.int8ArrayTag:
        case tags2.int16ArrayTag:
        case tags2.int32ArrayTag:
        case tags2.mapTag:
        case tags2.numberTag:
        case tags2.objectTag:
        case tags2.regexpTag:
        case tags2.setTag:
        case tags2.stringTag:
        case tags2.symbolTag:
        case tags2.uint8ArrayTag:
        case tags2.uint8ClampedArrayTag:
        case tags2.uint16ArrayTag:
        case tags2.uint32ArrayTag: {
          return true;
        }
        default: {
          return false;
        }
      }
    }
    exports.cloneDeepWith = cloneDeepWith2;
    exports.cloneDeepWithImpl = cloneDeepWithImpl;
    exports.copyProperties = copyProperties;
  })(cloneDeepWith$1);
  return cloneDeepWith$1;
}
var hasRequiredCloneDeep$1;
function requireCloneDeep$1() {
  if (hasRequiredCloneDeep$1) return cloneDeep$1;
  hasRequiredCloneDeep$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const cloneDeepWith2 = /* @__PURE__ */ requireCloneDeepWith$1();
    function cloneDeep2(obj) {
      return cloneDeepWith2.cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
    }
    exports.cloneDeep = cloneDeep2;
  })(cloneDeep$1);
  return cloneDeep$1;
}
var hasRequiredMatches;
function requireMatches() {
  if (hasRequiredMatches) return matches;
  hasRequiredMatches = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const isMatch2 = /* @__PURE__ */ requireIsMatch();
    const cloneDeep2 = /* @__PURE__ */ requireCloneDeep$1();
    function matches2(source) {
      source = cloneDeep2.cloneDeep(source);
      return (target) => {
        return isMatch2.isMatch(target, source);
      };
    }
    exports.matches = matches2;
  })(matches);
  return matches;
}
var matchesProperty = {};
var cloneDeep = {};
var cloneDeepWith = {};
var hasRequiredCloneDeepWith;
function requireCloneDeepWith() {
  if (hasRequiredCloneDeepWith) return cloneDeepWith;
  hasRequiredCloneDeepWith = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const cloneDeepWith$12 = /* @__PURE__ */ requireCloneDeepWith$1();
    const getTag2 = /* @__PURE__ */ requireGetTag();
    const tags2 = /* @__PURE__ */ requireTags();
    function cloneDeepWith2(obj, customizer) {
      return cloneDeepWith$12.cloneDeepWith(obj, (value, key, object, stack) => {
        const cloned = customizer?.(value, key, object, stack);
        if (cloned !== void 0) {
          return cloned;
        }
        if (typeof obj !== "object") {
          return void 0;
        }
        if (getTag2.getTag(obj) === tags2.objectTag && typeof obj.constructor !== "function") {
          const result = {};
          stack.set(obj, result);
          cloneDeepWith$12.copyProperties(result, obj, object, stack);
          return result;
        }
        switch (Object.prototype.toString.call(obj)) {
          case tags2.numberTag:
          case tags2.stringTag:
          case tags2.booleanTag: {
            const result = new obj.constructor(obj?.valueOf());
            cloneDeepWith$12.copyProperties(result, obj);
            return result;
          }
          case tags2.argumentsTag: {
            const result = {};
            cloneDeepWith$12.copyProperties(result, obj);
            result.length = obj.length;
            result[Symbol.iterator] = obj[Symbol.iterator];
            return result;
          }
          default: {
            return void 0;
          }
        }
      });
    }
    exports.cloneDeepWith = cloneDeepWith2;
  })(cloneDeepWith);
  return cloneDeepWith;
}
var hasRequiredCloneDeep;
function requireCloneDeep() {
  if (hasRequiredCloneDeep) return cloneDeep;
  hasRequiredCloneDeep = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const cloneDeepWith2 = /* @__PURE__ */ requireCloneDeepWith();
    function cloneDeep2(obj) {
      return cloneDeepWith2.cloneDeepWith(obj);
    }
    exports.cloneDeep = cloneDeep2;
  })(cloneDeep);
  return cloneDeep;
}
var has = {};
var isArguments = {};
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments) return isArguments;
  hasRequiredIsArguments = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const getTag2 = /* @__PURE__ */ requireGetTag();
    function isArguments2(value) {
      return value !== null && typeof value === "object" && getTag2.getTag(value) === "[object Arguments]";
    }
    exports.isArguments = isArguments2;
  })(isArguments);
  return isArguments;
}
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const isDeepKey = /* @__PURE__ */ requireIsDeepKey();
    const isIndex = /* @__PURE__ */ requireIsIndex();
    const isArguments2 = /* @__PURE__ */ requireIsArguments();
    const toPath = /* @__PURE__ */ requireToPath();
    function has2(object, path) {
      let resolvedPath;
      if (Array.isArray(path)) {
        resolvedPath = path;
      } else if (typeof path === "string" && isDeepKey.isDeepKey(path) && object?.[path] == null) {
        resolvedPath = toPath.toPath(path);
      } else {
        resolvedPath = [path];
      }
      if (resolvedPath.length === 0) {
        return false;
      }
      let current = object;
      for (let i = 0; i < resolvedPath.length; i++) {
        const key = resolvedPath[i];
        if (current == null || !Object.hasOwn(current, key)) {
          const isSparseIndex = (Array.isArray(current) || isArguments2.isArguments(current)) && isIndex.isIndex(key) && key < current.length;
          if (!isSparseIndex) {
            return false;
          }
        }
        current = current[key];
      }
      return true;
    }
    exports.has = has2;
  })(has);
  return has;
}
var hasRequiredMatchesProperty;
function requireMatchesProperty() {
  if (hasRequiredMatchesProperty) return matchesProperty;
  hasRequiredMatchesProperty = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const isMatch2 = /* @__PURE__ */ requireIsMatch();
    const toKey = /* @__PURE__ */ requireToKey();
    const cloneDeep2 = /* @__PURE__ */ requireCloneDeep();
    const get2 = /* @__PURE__ */ requireGet();
    const has2 = /* @__PURE__ */ requireHas();
    function matchesProperty2(property2, source) {
      switch (typeof property2) {
        case "object": {
          if (Object.is(property2?.valueOf(), -0)) {
            property2 = "-0";
          }
          break;
        }
        case "number": {
          property2 = toKey.toKey(property2);
          break;
        }
      }
      source = cloneDeep2.cloneDeep(source);
      return function(target) {
        const result = get2.get(target, property2);
        if (result === void 0) {
          return has2.has(target, property2);
        }
        if (source === void 0) {
          return result === void 0;
        }
        return isMatch2.isMatch(result, source);
      };
    }
    exports.matchesProperty = matchesProperty2;
  })(matchesProperty);
  return matchesProperty;
}
var hasRequiredIteratee;
function requireIteratee() {
  if (hasRequiredIteratee) return iteratee;
  hasRequiredIteratee = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const identity2 = /* @__PURE__ */ requireIdentity();
    const property2 = /* @__PURE__ */ requireProperty();
    const matches2 = /* @__PURE__ */ requireMatches();
    const matchesProperty2 = /* @__PURE__ */ requireMatchesProperty();
    function iteratee2(value) {
      if (value == null) {
        return identity2.identity;
      }
      switch (typeof value) {
        case "function": {
          return value;
        }
        case "object": {
          if (Array.isArray(value) && value.length === 2) {
            return matchesProperty2.matchesProperty(value[0], value[1]);
          }
          return matches2.matches(value);
        }
        case "string":
        case "symbol":
        case "number": {
          return property2.property(value);
        }
      }
    }
    exports.iteratee = iteratee2;
  })(iteratee);
  return iteratee;
}
var hasRequiredUniqBy$1;
function requireUniqBy$1() {
  if (hasRequiredUniqBy$1) return uniqBy$3;
  hasRequiredUniqBy$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const uniqBy$12 = /* @__PURE__ */ requireUniqBy$2();
    const ary2 = /* @__PURE__ */ requireAry();
    const identity2 = /* @__PURE__ */ requireIdentity();
    const isArrayLikeObject2 = /* @__PURE__ */ requireIsArrayLikeObject();
    const iteratee2 = /* @__PURE__ */ requireIteratee();
    function uniqBy2(array, iteratee$1 = identity2.identity) {
      if (!isArrayLikeObject2.isArrayLikeObject(array)) {
        return [];
      }
      return uniqBy$12.uniqBy(Array.from(array), ary2.ary(iteratee2.iteratee(iteratee$1), 1));
    }
    exports.uniqBy = uniqBy2;
  })(uniqBy$3);
  return uniqBy$3;
}
var uniqBy$1;
var hasRequiredUniqBy;
function requireUniqBy() {
  if (hasRequiredUniqBy) return uniqBy$1;
  hasRequiredUniqBy = 1;
  uniqBy$1 = requireUniqBy$1().uniqBy;
  return uniqBy$1;
}
var uniqByExports = /* @__PURE__ */ requireUniqBy();
const uniqBy = /* @__PURE__ */ getDefaultExportFromCjs(uniqByExports);
function getUniqPayload(payload, option, defaultUniqBy2) {
  if (option === true) {
    return uniqBy(payload, defaultUniqBy2);
  }
  if (typeof option === "function") {
    return uniqBy(payload, option);
  }
  return payload;
}
var EPS = 1;
function useElementOffset() {
  var extraDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var [lastBoundingBox, setLastBoundingBox] = reactExports.useState({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  });
  var updateBoundingBox = reactExports.useCallback(
    (node) => {
      if (node != null) {
        var rect = node.getBoundingClientRect();
        var box = {
          height: rect.height,
          left: rect.left,
          top: rect.top,
          width: rect.width
        };
        if (Math.abs(box.height - lastBoundingBox.height) > EPS || Math.abs(box.left - lastBoundingBox.left) > EPS || Math.abs(box.top - lastBoundingBox.top) > EPS || Math.abs(box.width - lastBoundingBox.width) > EPS) {
          setLastBoundingBox({
            height: box.height,
            left: box.left,
            top: box.top,
            width: box.width
          });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastBoundingBox.width, lastBoundingBox.height, lastBoundingBox.top, lastBoundingBox.left, ...extraDependencies]
  );
  return [lastBoundingBox, updateBoundingBox];
}
function _extends$6() {
  return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$6.apply(null, arguments);
}
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
function defaultFormatter(value) {
  return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(" ~ ") : value;
}
var defaultDefaultTooltipContentProps = {
  separator: " : ",
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  },
  itemStyle: {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  },
  labelStyle: {},
  accessibilityLayer: false
};
function lodashLikeSortBy(array, itemSorter) {
  if (itemSorter == null) {
    return array;
  }
  return sortBy(array, itemSorter);
}
var DefaultTooltipContent = (props) => {
  var {
    separator = defaultDefaultTooltipContentProps.separator,
    contentStyle,
    itemStyle,
    labelStyle = defaultDefaultTooltipContentProps.labelStyle,
    payload,
    formatter,
    itemSorter,
    wrapperClassName,
    labelClassName,
    label,
    labelFormatter,
    accessibilityLayer = defaultDefaultTooltipContentProps.accessibilityLayer
  } = props;
  var renderContent2 = () => {
    if (payload && payload.length) {
      var listStyle = {
        padding: 0,
        margin: 0
      };
      var sortedPayload = lodashLikeSortBy(payload, itemSorter);
      var items = sortedPayload.map((entry, i) => {
        if (!entry || entry.type === "none") {
          return null;
        }
        var finalFormatter = entry.formatter || formatter || defaultFormatter;
        var {
          value,
          name
        } = entry;
        var finalValue = value;
        var finalName = name;
        if (finalFormatter) {
          var formatted = finalFormatter(value, name, entry, i, payload);
          if (Array.isArray(formatted)) {
            [finalValue, finalName] = formatted;
          } else if (formatted != null) {
            finalValue = formatted;
          } else {
            return null;
          }
        }
        var finalItemStyle = _objectSpread$9(_objectSpread$9({}, defaultDefaultTooltipContentProps.itemStyle), {}, {
          color: entry.color || defaultDefaultTooltipContentProps.itemStyle.color
        }, itemStyle);
        return /* @__PURE__ */ reactExports.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(i),
          style: finalItemStyle
        }, isNumOrStr(finalName) ? /* @__PURE__ */ reactExports.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, finalName) : null, isNumOrStr(finalName) ? /* @__PURE__ */ reactExports.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, separator) : null, /* @__PURE__ */ reactExports.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, finalValue), /* @__PURE__ */ reactExports.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, entry.unit || ""));
      });
      return /* @__PURE__ */ reactExports.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: listStyle
      }, items);
    }
    return null;
  };
  var finalStyle = _objectSpread$9(_objectSpread$9({}, defaultDefaultTooltipContentProps.contentStyle), contentStyle);
  var finalLabelStyle = _objectSpread$9({
    margin: 0
  }, labelStyle);
  var hasLabel = !isNullish(label);
  var finalLabel = hasLabel ? label : "";
  var wrapperCN = clsx("recharts-default-tooltip", wrapperClassName);
  var labelCN = clsx("recharts-tooltip-label", labelClassName);
  if (hasLabel && labelFormatter && payload !== void 0 && payload !== null) {
    finalLabel = labelFormatter(label, payload);
  }
  var accessibilityAttributes = accessibilityLayer ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ reactExports.createElement("div", _extends$6({
    className: wrapperCN,
    style: finalStyle
  }, accessibilityAttributes), /* @__PURE__ */ reactExports.createElement("p", {
    className: labelCN,
    style: finalLabelStyle
  }, /* @__PURE__ */ reactExports.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent2());
};
var CSS_CLASS_PREFIX = "recharts-tooltip-wrapper";
var TOOLTIP_HIDDEN = {
  visibility: "hidden"
};
function getTooltipCSSClassName(_ref) {
  var {
    coordinate,
    translateX,
    translateY
  } = _ref;
  return clsx(CSS_CLASS_PREFIX, {
    ["".concat(CSS_CLASS_PREFIX, "-right")]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x,
    ["".concat(CSS_CLASS_PREFIX, "-left")]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x,
    ["".concat(CSS_CLASS_PREFIX, "-bottom")]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y,
    ["".concat(CSS_CLASS_PREFIX, "-top")]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y
  });
}
function getTooltipTranslateXY(_ref2) {
  var {
    allowEscapeViewBox,
    coordinate,
    key,
    offset,
    position,
    reverseDirection,
    tooltipDimension,
    viewBox,
    viewBoxDimension
  } = _ref2;
  if (position && isNumber(position[key])) {
    return position[key];
  }
  var negative = coordinate[key] - tooltipDimension - (offset > 0 ? offset : 0);
  var positive = coordinate[key] + offset;
  if (allowEscapeViewBox[key]) {
    return reverseDirection[key] ? negative : positive;
  }
  var viewBoxKey = viewBox[key];
  if (viewBoxKey == null) {
    return 0;
  }
  if (reverseDirection[key]) {
    var _tooltipBoundary = negative;
    var _viewBoxBoundary = viewBoxKey;
    if (_tooltipBoundary < _viewBoxBoundary) {
      return Math.max(positive, viewBoxKey);
    }
    return Math.max(negative, viewBoxKey);
  }
  if (viewBoxDimension == null) {
    return 0;
  }
  var tooltipBoundary = positive + tooltipDimension;
  var viewBoxBoundary = viewBoxKey + viewBoxDimension;
  if (tooltipBoundary > viewBoxBoundary) {
    return Math.max(negative, viewBoxKey);
  }
  return Math.max(positive, viewBoxKey);
}
function getTransformStyle(_ref3) {
  var {
    translateX,
    translateY,
    useTranslate3d
  } = _ref3;
  return {
    transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
  };
}
function getTooltipTranslate(_ref4) {
  var {
    allowEscapeViewBox,
    coordinate,
    offsetTop,
    offsetLeft,
    position,
    reverseDirection,
    tooltipBox,
    useTranslate3d,
    viewBox
  } = _ref4;
  var cssProperties, translateX, translateY;
  if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
    translateX = getTooltipTranslateXY({
      allowEscapeViewBox,
      coordinate,
      key: "x",
      offset: offsetLeft,
      position,
      reverseDirection,
      tooltipDimension: tooltipBox.width,
      viewBox,
      viewBoxDimension: viewBox.width
    });
    translateY = getTooltipTranslateXY({
      allowEscapeViewBox,
      coordinate,
      key: "y",
      offset: offsetTop,
      position,
      reverseDirection,
      tooltipDimension: tooltipBox.height,
      viewBox,
      viewBoxDimension: viewBox.height
    });
    cssProperties = getTransformStyle({
      translateX,
      translateY,
      useTranslate3d
    });
  } else {
    cssProperties = TOOLTIP_HIDDEN;
  }
  return {
    cssProperties,
    cssClasses: getTooltipCSSClassName({
      translateX,
      translateY,
      coordinate
    })
  };
}
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
function resolveTransitionProperty(args) {
  if (args.prefersReducedMotion && args.isAnimationActive === "auto") {
    return void 0;
  }
  if (args.isAnimationActive && args.active) {
    return "transform ".concat(args.animationDuration, "ms ").concat(args.animationEasing);
  }
  return void 0;
}
function TooltipBoundingBoxImpl(props) {
  var _props$coordinate3, _props$coordinate4, _props$coordinate$x2, _props$coordinate5, _props$coordinate$y2, _props$coordinate6;
  var prefersReducedMotion = usePrefersReducedMotion();
  var [state, setState] = reactExports.useState(() => ({
    dismissed: false,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  reactExports.useEffect(() => {
    var handleKeyDown = (event) => {
      if (event.key === "Escape") {
        var _props$coordinate$x, _props$coordinate, _props$coordinate$y, _props$coordinate2;
        setState({
          dismissed: true,
          dismissedAtCoordinate: {
            x: (_props$coordinate$x = (_props$coordinate = props.coordinate) === null || _props$coordinate === void 0 ? void 0 : _props$coordinate.x) !== null && _props$coordinate$x !== void 0 ? _props$coordinate$x : 0,
            y: (_props$coordinate$y = (_props$coordinate2 = props.coordinate) === null || _props$coordinate2 === void 0 ? void 0 : _props$coordinate2.y) !== null && _props$coordinate$y !== void 0 ? _props$coordinate$y : 0
          }
        });
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [(_props$coordinate3 = props.coordinate) === null || _props$coordinate3 === void 0 ? void 0 : _props$coordinate3.x, (_props$coordinate4 = props.coordinate) === null || _props$coordinate4 === void 0 ? void 0 : _props$coordinate4.y]);
  if (state.dismissed && (((_props$coordinate$x2 = (_props$coordinate5 = props.coordinate) === null || _props$coordinate5 === void 0 ? void 0 : _props$coordinate5.x) !== null && _props$coordinate$x2 !== void 0 ? _props$coordinate$x2 : 0) !== state.dismissedAtCoordinate.x || ((_props$coordinate$y2 = (_props$coordinate6 = props.coordinate) === null || _props$coordinate6 === void 0 ? void 0 : _props$coordinate6.y) !== null && _props$coordinate$y2 !== void 0 ? _props$coordinate$y2 : 0) !== state.dismissedAtCoordinate.y)) {
    setState(_objectSpread$8(_objectSpread$8({}, state), {}, {
      dismissed: false
    }));
  }
  var {
    cssClasses,
    cssProperties
  } = getTooltipTranslate({
    allowEscapeViewBox: props.allowEscapeViewBox,
    coordinate: props.coordinate,
    offsetLeft: typeof props.offset === "number" ? props.offset : props.offset.x,
    offsetTop: typeof props.offset === "number" ? props.offset : props.offset.y,
    position: props.position,
    reverseDirection: props.reverseDirection,
    tooltipBox: {
      height: props.lastBoundingBox.height,
      width: props.lastBoundingBox.width
    },
    useTranslate3d: props.useTranslate3d,
    viewBox: props.viewBox
  });
  var positionStyle = props.hasPortalFromProps ? {} : _objectSpread$8(_objectSpread$8({
    transition: resolveTransitionProperty({
      prefersReducedMotion,
      isAnimationActive: props.isAnimationActive,
      active: props.active,
      animationDuration: props.animationDuration,
      animationEasing: props.animationEasing
    })
  }, cssProperties), {}, {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    left: 0
  });
  var outerStyle = _objectSpread$8(_objectSpread$8({}, positionStyle), {}, {
    visibility: !state.dismissed && props.active && props.hasPayload ? "visible" : "hidden"
  }, props.wrapperStyle);
  return /* @__PURE__ */ reactExports.createElement("div", {
    // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
    xmlns: "http://www.w3.org/1999/xhtml",
    tabIndex: -1,
    className: cssClasses,
    style: outerStyle,
    ref: props.innerRef
  }, props.children);
}
var TooltipBoundingBox = /* @__PURE__ */ reactExports.memo(TooltipBoundingBoxImpl);
var _excluded$4 = ["x", "y", "top", "left", "width", "height", "className"];
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
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
var getPath = (x, y, width, height, top, left) => {
  return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
};
var Cross = (_ref) => {
  var {
    x = 0,
    y = 0,
    top = 0,
    left = 0,
    width = 0,
    height = 0,
    className
  } = _ref, rest = _objectWithoutProperties$4(_ref, _excluded$4);
  var props = _objectSpread$7({
    x,
    y,
    top,
    left,
    width,
    height
  }, rest);
  if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("path", _extends$5({}, svgPropertiesAndEvents(props), {
    className: clsx("recharts-cross", className),
    d: getPath(x, y, width, height, top, left)
  }));
};
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
  var halfSize = tooltipAxisBandSize / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + 0.5,
    y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - halfSize,
    width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
    height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
  };
}
var _excluded$3 = ["radius"], _excluded2$2 = ["radius"];
var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8, _templateObject9, _templateObject0;
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
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
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
function _taggedTemplateLiteral$1(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var getRectanglePath = (x, y, width, height, radius) => {
  var roundedWidth = round(width);
  var roundedHeight = round(height);
  var maxRadius = Math.min(Math.abs(roundedWidth) / 2, Math.abs(roundedHeight) / 2);
  var ySign = roundedHeight >= 0 ? 1 : -1;
  var xSign = roundedWidth >= 0 ? 1 : -1;
  var clockWise = roundedHeight >= 0 && roundedWidth >= 0 || roundedHeight < 0 && roundedWidth < 0 ? 1 : 0;
  var path;
  if (maxRadius > 0 && Array.isArray(radius)) {
    var newRadius = [0, 0, 0, 0];
    for (var i = 0, len = 4; i < len; i++) {
      var _radius$i;
      var r = (_radius$i = radius[i]) !== null && _radius$i !== void 0 ? _radius$i : 0;
      newRadius[i] = r > maxRadius ? maxRadius : r;
    }
    path = roundTemplateLiteral(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$1(["M", ",", ""])), x, y + ySign * newRadius[0]);
    if (newRadius[0] > 0) {
      path += roundTemplateLiteral(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral$1(["A ", ",", ",0,0,", ",", ",", ""])), newRadius[0], newRadius[0], clockWise, x + xSign * newRadius[0], y);
    }
    path += roundTemplateLiteral(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral$1(["L ", ",", ""])), x + width - xSign * newRadius[1], y);
    if (newRadius[1] > 0) {
      path += roundTemplateLiteral(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral$1(["A ", ",", ",0,0,", ",\n        ", ",", ""])), newRadius[1], newRadius[1], clockWise, x + width, y + ySign * newRadius[1]);
    }
    path += roundTemplateLiteral(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral$1(["L ", ",", ""])), x + width, y + height - ySign * newRadius[2]);
    if (newRadius[2] > 0) {
      path += roundTemplateLiteral(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral$1(["A ", ",", ",0,0,", ",\n        ", ",", ""])), newRadius[2], newRadius[2], clockWise, x + width - xSign * newRadius[2], y + height);
    }
    path += roundTemplateLiteral(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral$1(["L ", ",", ""])), x + xSign * newRadius[3], y + height);
    if (newRadius[3] > 0) {
      path += roundTemplateLiteral(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral$1(["A ", ",", ",0,0,", ",\n        ", ",", ""])), newRadius[3], newRadius[3], clockWise, x, y + height - ySign * newRadius[3]);
    }
    path += "Z";
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);
    path = roundTemplateLiteral(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral$1(["M ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", "\n            L ", ",", "\n            A ", ",", ",0,0,", ",", ",", " Z"])), x, y + ySign * _newRadius, _newRadius, _newRadius, clockWise, x + xSign * _newRadius, y, x + width - xSign * _newRadius, y, _newRadius, _newRadius, clockWise, x + width, y + ySign * _newRadius, x + width, y + height - ySign * _newRadius, _newRadius, _newRadius, clockWise, x + width - xSign * _newRadius, y + height, x + xSign * _newRadius, y + height, _newRadius, _newRadius, clockWise, x, y + height - ySign * _newRadius);
  } else {
    path = roundTemplateLiteral(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral$1(["M ", ",", " h ", " v ", " h ", " Z"])), x, y, width, height, -width);
  }
  return path;
};
var defaultRectangleProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
var Rectangle = (rectangleProps) => {
  var props = resolveDefaultProps(rectangleProps, defaultRectangleProps);
  var pathRef = reactExports.useRef(null);
  var [totalLength, setTotalLength] = reactExports.useState(-1);
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
  var {
    x,
    y,
    width,
    height,
    radius,
    className
  } = props;
  var {
    animationEasing,
    animationDuration,
    animationBegin,
    isAnimationActive,
    isUpdateAnimationActive
  } = props;
  var prevWidthRef = reactExports.useRef(width);
  var prevHeightRef = reactExports.useRef(height);
  var prevXRef = reactExports.useRef(x);
  var prevYRef = reactExports.useRef(y);
  var animationIdInput = reactExports.useMemo(() => ({
    x,
    y,
    width,
    height,
    radius
  }), [x, y, width, height, radius]);
  var animationId = useAnimationId(animationIdInput, "rectangle-");
  if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
    return null;
  }
  var layerClass = clsx("recharts-rectangle", className);
  if (!isUpdateAnimationActive) {
    var _svgPropertiesAndEven = svgPropertiesAndEvents(props), {
      radius: _
    } = _svgPropertiesAndEven, otherPathProps = _objectWithoutProperties$3(_svgPropertiesAndEven, _excluded$3);
    return /* @__PURE__ */ reactExports.createElement("path", _extends$4({}, otherPathProps, {
      x: round(x),
      y: round(y),
      width: round(width),
      height: round(height),
      radius: typeof radius === "number" ? radius : void 0,
      className: layerClass,
      d: getRectanglePath(x, y, width, height, radius)
    }));
  }
  var prevWidth = prevWidthRef.current;
  var prevHeight = prevHeightRef.current;
  var prevX = prevXRef.current;
  var prevY = prevYRef.current;
  var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
  var to = "".concat(totalLength, "px ").concat(totalLength, "px");
  var transition = getTransitionVal(["strokeDasharray"], animationDuration, typeof animationEasing === "string" ? animationEasing : defaultRectangleProps.animationEasing);
  return /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    key: animationId,
    canBegin: totalLength > 0,
    duration: animationDuration,
    easing: animationEasing,
    isActive: isUpdateAnimationActive,
    begin: animationBegin
  }, (t) => {
    var currWidth = interpolate(prevWidth, width, t);
    var currHeight = interpolate(prevHeight, height, t);
    var currX = interpolate(prevX, x, t);
    var currY = interpolate(prevY, y, t);
    if (pathRef.current) {
      prevWidthRef.current = currWidth;
      prevHeightRef.current = currHeight;
      prevXRef.current = currX;
      prevYRef.current = currY;
    }
    var animationStyle;
    if (!isAnimationActive) {
      animationStyle = {
        strokeDasharray: to
      };
    } else if (t > 0) {
      animationStyle = {
        transition,
        strokeDasharray: to
      };
    } else {
      animationStyle = {
        strokeDasharray: from
      };
    }
    var _svgPropertiesAndEven2 = svgPropertiesAndEvents(props), {
      radius: _2
    } = _svgPropertiesAndEven2, otherPathProps2 = _objectWithoutProperties$3(_svgPropertiesAndEven2, _excluded2$2);
    return /* @__PURE__ */ reactExports.createElement("path", _extends$4({}, otherPathProps2, {
      radius: typeof radius === "number" ? radius : void 0,
      className: layerClass,
      d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
      ref: pathRef,
      style: _objectSpread$6(_objectSpread$6({}, animationStyle), props.style)
    }));
  });
};
function getRadialCursorPoints(activeCoordinate) {
  var {
    cx,
    cy,
    radius,
    startAngle,
    endAngle
  } = activeCoordinate;
  var startPoint = polarToCartesian(cx, cy, radius, startAngle);
  var endPoint = polarToCartesian(cx, cy, radius, endAngle);
  return {
    points: [startPoint, endPoint],
    cx,
    cy,
    radius,
    startAngle,
    endAngle
  };
}
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var getDeltaAngle = (startAngle, endAngle) => {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign * deltaAngle;
};
var getTangentCircle = (_ref) => {
  var {
    cx,
    cy,
    radius,
    angle,
    sign,
    isExternal,
    cornerRadius,
    cornerIsExternal
  } = _ref;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
  var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle);
  return {
    center,
    circleTangency,
    lineTangency,
    theta
  };
};
var getSectorPath = (_ref2) => {
  var {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle
  } = _ref2;
  var angle = getDeltaAngle(startAngle, endAngle);
  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path = roundTemplateLiteral(_templateObject || (_templateObject = _taggedTemplateLiteral(["M ", ",", "\n    A ", ",", ",0,\n    ", ",", ",\n    ", ",", "\n  "])), outerStartPoint.x, outerStartPoint.y, outerRadius, outerRadius, +(Math.abs(angle) > 180), +(startAngle > tempEndAngle), outerEndPoint.x, outerEndPoint.y);
  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += roundTemplateLiteral(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["L ", ",", "\n            A ", ",", ",0,\n            ", ",", ",\n            ", ",", " Z"])), innerEndPoint.x, innerEndPoint.y, innerRadius, innerRadius, +(Math.abs(angle) > 180), +(startAngle <= tempEndAngle), innerStartPoint.x, innerStartPoint.y);
  } else {
    path += roundTemplateLiteral(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["L ", ",", " Z"])), cx, cy);
  }
  return path;
};
var getSectorWithCorner = (_ref3) => {
  var {
    cx,
    cy,
    innerRadius,
    outerRadius,
    cornerRadius,
    forceCornerRadius,
    cornerIsExternal,
    startAngle,
    endAngle
  } = _ref3;
  var sign = mathSign(endAngle - startAngle);
  var {
    circleTangency: soct,
    lineTangency: solt,
    theta: sot
  } = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: startAngle,
    sign,
    cornerRadius,
    cornerIsExternal
  });
  var {
    circleTangency: eoct,
    lineTangency: eolt,
    theta: eot
  } = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign,
    cornerRadius,
    cornerIsExternal
  });
  var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return roundTemplateLiteral(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["M ", ",", "\n        a", ",", ",0,0,1,", ",0\n        a", ",", ",0,0,1,", ",0\n      "])), solt.x, solt.y, cornerRadius, cornerRadius, cornerRadius * 2, cornerRadius, cornerRadius, -cornerRadius * 2);
    }
    return getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  var path = roundTemplateLiteral(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["M ", ",", "\n    A", ",", ",0,0,", ",", ",", "\n    A", ",", ",0,", ",", ",", ",", "\n    A", ",", ",0,0,", ",", ",", "\n  "])), solt.x, solt.y, cornerRadius, cornerRadius, +(sign < 0), soct.x, soct.y, outerRadius, outerRadius, +(outerArcAngle > 180), +(sign < 0), eoct.x, eoct.y, cornerRadius, cornerRadius, +(sign < 0), eolt.x, eolt.y);
  if (innerRadius > 0) {
    var {
      circleTangency: sict,
      lineTangency: silt,
      theta: sit
    } = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: startAngle,
      sign,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    });
    var {
      circleTangency: eict,
      lineTangency: eilt,
      theta: eit
    } = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    });
    var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
    if (innerArcAngle < 0 && cornerRadius === 0) {
      return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
    }
    path += roundTemplateLiteral(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["L", ",", "\n      A", ",", ",0,0,", ",", ",", "\n      A", ",", ",0,", ",", ",", ",", "\n      A", ",", ",0,0,", ",", ",", "Z"])), eilt.x, eilt.y, cornerRadius, cornerRadius, +(sign < 0), eict.x, eict.y, innerRadius, innerRadius, +(innerArcAngle > 180), +(sign > 0), sict.x, sict.y, cornerRadius, cornerRadius, +(sign < 0), silt.x, silt.y);
  } else {
    path += roundTemplateLiteral(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["L", ",", "Z"])), cx, cy);
  }
  return path;
};
var defaultSectorProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};
var Sector = (sectorProps) => {
  var props = resolveDefaultProps(sectorProps, defaultSectorProps);
  var {
    cx,
    cy,
    innerRadius,
    outerRadius,
    cornerRadius,
    forceCornerRadius,
    cornerIsExternal,
    startAngle,
    endAngle,
    className
  } = props;
  if (outerRadius < innerRadius || startAngle === endAngle) {
    return null;
  }
  var layerClass = clsx("recharts-sector", className);
  var deltaRadius = outerRadius - innerRadius;
  var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
  var path;
  if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
    path = getSectorWithCorner({
      cx,
      cy,
      innerRadius,
      outerRadius,
      cornerRadius: Math.min(cr, deltaRadius / 2),
      forceCornerRadius,
      cornerIsExternal,
      startAngle,
      endAngle
    });
  } else {
    path = getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  return /* @__PURE__ */ reactExports.createElement("path", _extends$3({}, svgPropertiesAndEvents(props), {
    className: layerClass,
    d: path
  }));
};
function getCursorPoints(layout, activeCoordinate, offset) {
  if (layout === "horizontal") {
    return [{
      x: activeCoordinate.x,
      y: offset.top
    }, {
      x: activeCoordinate.x,
      y: offset.top + offset.height
    }];
  }
  if (layout === "vertical") {
    return [{
      x: offset.left,
      y: activeCoordinate.y
    }, {
      x: offset.left + offset.width,
      y: activeCoordinate.y
    }];
  }
  if (isPolarCoordinate(activeCoordinate)) {
    if (layout === "centric") {
      var {
        cx,
        cy,
        innerRadius,
        outerRadius,
        angle
      } = activeCoordinate;
      var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
      var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
      return [{
        x: innerPoint.x,
        y: innerPoint.y
      }, {
        x: outerPoint.x,
        y: outerPoint.y
      }];
    }
    return getRadialCursorPoints(activeCoordinate);
  }
  return void 0;
}
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
var useTooltipAxis = () => useAppSelector(selectTooltipAxis);
var useTooltipAxisBandSize = () => {
  var tooltipAxis = useTooltipAxis();
  var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
  var tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
  if (!tooltipAxis || !tooltipAxisScale) {
    return getBandSizeOfAxis(void 0, tooltipTicks);
  }
  return getBandSizeOfAxis(_objectSpread$5(_objectSpread$5({}, tooltipAxis), {}, {
    scale: tooltipAxisScale
  }), tooltipTicks);
};
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
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
function RenderCursor(_ref) {
  var {
    cursor,
    cursorComp,
    cursorProps
  } = _ref;
  if (/* @__PURE__ */ reactExports.isValidElement(cursor)) {
    return /* @__PURE__ */ reactExports.cloneElement(cursor, cursorProps);
  }
  return /* @__PURE__ */ reactExports.createElement(cursorComp, cursorProps);
}
function CursorInternal(props) {
  var _props$zIndex;
  var {
    coordinate,
    payload,
    index,
    offset,
    tooltipAxisBandSize,
    layout,
    cursor,
    tooltipEventType,
    chartName
  } = props;
  var activeCoordinate = coordinate;
  var activePayload = payload;
  var activeTooltipIndex = index;
  if (!cursor || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") {
    return null;
  }
  var restProps, cursorComp, preferredZIndex;
  if (chartName === "ScatterChart") {
    restProps = activeCoordinate;
    cursorComp = Cross;
    preferredZIndex = DefaultZIndexes.cursorLine;
  } else if (chartName === "BarChart") {
    restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
    cursorComp = Rectangle;
    preferredZIndex = DefaultZIndexes.cursorRectangle;
  } else if (layout === "radial" && isPolarCoordinate(activeCoordinate)) {
    var {
      cx,
      cy,
      radius,
      startAngle,
      endAngle
    } = getRadialCursorPoints(activeCoordinate);
    restProps = {
      cx,
      cy,
      startAngle,
      endAngle,
      innerRadius: radius,
      outerRadius: radius
    };
    cursorComp = Sector;
    preferredZIndex = DefaultZIndexes.cursorLine;
  } else {
    restProps = {
      points: getCursorPoints(layout, activeCoordinate, offset)
    };
    cursorComp = Curve;
    preferredZIndex = DefaultZIndexes.cursorLine;
  }
  var extraClassName = typeof cursor === "object" && "className" in cursor ? cursor.className : void 0;
  var cursorProps = _objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4({
    stroke: "#ccc",
    pointerEvents: "none"
  }, offset), restProps), svgPropertiesNoEventsFromUnknown(cursor)), {}, {
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: clsx("recharts-tooltip-cursor", extraClassName)
  });
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : preferredZIndex
  }, /* @__PURE__ */ reactExports.createElement(RenderCursor, {
    cursor,
    cursorComp,
    cursorProps
  }));
}
function Cursor(props) {
  var tooltipAxisBandSize = useTooltipAxisBandSize();
  var offset = useOffsetInternal();
  var layout = useChartLayout();
  var chartName = useChartName();
  if (tooltipAxisBandSize == null || offset == null || layout == null || chartName == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(CursorInternal, _extends$2({}, props, {
    offset,
    layout,
    tooltipAxisBandSize,
    chartName
  }));
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
function defaultUniqBy(entry) {
  return entry.dataKey;
}
function renderContent(content, props) {
  if (/* @__PURE__ */ reactExports.isValidElement(content)) {
    return /* @__PURE__ */ reactExports.cloneElement(content, props);
  }
  if (typeof content === "function") {
    return /* @__PURE__ */ reactExports.createElement(content, props);
  }
  return /* @__PURE__ */ reactExports.createElement(DefaultTooltipContent, props);
}
var emptyPayload = [];
var defaultTooltipProps = {
  allowEscapeViewBox: {
    x: false,
    y: false
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: true,
  filterNull: true,
  includeHidden: false,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: false,
    y: false
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: false,
  wrapperStyle: {}
};
function Tooltip(outsideProps) {
  var _useAppSelector, _ref;
  var props = resolveDefaultProps(outsideProps, defaultTooltipProps);
  var {
    active: activeFromProps,
    allowEscapeViewBox,
    animationDuration,
    animationEasing,
    content,
    filterNull,
    isAnimationActive,
    offset,
    payloadUniqBy,
    position,
    reverseDirection,
    useTranslate3d,
    wrapperStyle,
    cursor,
    shared,
    trigger,
    defaultIndex,
    portal: portalFromProps,
    axisId
  } = props;
  var dispatch = useAppDispatch();
  var defaultIndexAsString = typeof defaultIndex === "number" ? String(defaultIndex) : defaultIndex;
  reactExports.useEffect(() => {
    dispatch(setTooltipSettingsState({
      shared,
      trigger,
      axisId,
      active: activeFromProps,
      defaultIndex: defaultIndexAsString
    }));
  }, [dispatch, shared, trigger, axisId, activeFromProps, defaultIndexAsString]);
  var viewBox = useViewBox();
  var accessibilityLayer = useAccessibilityLayer();
  var tooltipEventType = useTooltipEventType(shared);
  var {
    activeIndex,
    isActive
  } = (_useAppSelector = useAppSelector((state) => selectIsTooltipActive(state, tooltipEventType, trigger, defaultIndexAsString))) !== null && _useAppSelector !== void 0 ? _useAppSelector : {};
  var payloadFromRedux = useAppSelector((state) => selectTooltipPayload(state, tooltipEventType, trigger, defaultIndexAsString));
  var labelFromRedux = useAppSelector((state) => selectActiveLabel(state, tooltipEventType, trigger, defaultIndexAsString));
  var coordinate = useAppSelector((state) => selectActiveCoordinate(state, tooltipEventType, trigger, defaultIndexAsString));
  var payload = payloadFromRedux;
  var tooltipPortalFromContext = useTooltipPortal();
  var finalIsActive = (_ref = activeFromProps !== null && activeFromProps !== void 0 ? activeFromProps : isActive) !== null && _ref !== void 0 ? _ref : false;
  var [lastBoundingBox, updateBoundingBox] = useElementOffset([payload, finalIsActive]);
  var finalLabel = tooltipEventType === "axis" ? labelFromRedux : void 0;
  useTooltipChartSynchronisation(tooltipEventType, trigger, coordinate, finalLabel, activeIndex, finalIsActive);
  var tooltipPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : tooltipPortalFromContext;
  if (tooltipPortal == null || viewBox == null || tooltipEventType == null) {
    return null;
  }
  var finalPayload = payload !== null && payload !== void 0 ? payload : emptyPayload;
  if (!finalIsActive) {
    finalPayload = emptyPayload;
  }
  if (filterNull && finalPayload.length) {
    finalPayload = getUniqPayload(finalPayload.filter((entry) => entry.value != null && (entry.hide !== true || props.includeHidden)), payloadUniqBy, defaultUniqBy);
  }
  var hasPayload = finalPayload.length > 0;
  var tooltipContentProps = _objectSpread$3(_objectSpread$3({}, props), {}, {
    payload: finalPayload,
    label: finalLabel,
    active: finalIsActive,
    activeIndex,
    coordinate,
    accessibilityLayer
  });
  var tooltipElement = /* @__PURE__ */ reactExports.createElement(TooltipBoundingBox, {
    allowEscapeViewBox,
    animationDuration,
    animationEasing,
    isAnimationActive,
    active: finalIsActive,
    coordinate,
    hasPayload,
    offset,
    position,
    reverseDirection,
    useTranslate3d,
    viewBox,
    wrapperStyle,
    lastBoundingBox,
    innerRef: updateBoundingBox,
    hasPortalFromProps: Boolean(portalFromProps)
  }, renderContent(content, tooltipContentProps));
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactDomExports.createPortal(tooltipElement, tooltipPortal), finalIsActive && /* @__PURE__ */ reactExports.createElement(Cursor, {
    cursor,
    tooltipEventType,
    coordinate,
    payload: finalPayload,
    index: activeIndex
  }));
}
function getClassNameFromUnknown(u) {
  if (u && typeof u === "object" && "className" in u && typeof u.className === "string") {
    return u.className;
  }
  return "";
}
function normalizeAngle(angle) {
  return (angle % 180 + 180) % 180;
}
var getAngledRectangleWidth = function getAngledRectangleWidth2(_ref4) {
  var {
    width,
    height
  } = _ref4;
  var angle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var normalizedAngle = normalizeAngle(angle);
  var angleRadians = normalizedAngle * Math.PI / 180;
  var angleThreshold = Math.atan(height / width);
  var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
  return Math.abs(angledWidth);
};
function getEveryNth(array, n) {
  if (n < 1) {
    return [];
  }
  if (n === 1) {
    return array;
  }
  var result = [];
  for (var i = 0; i < array.length; i += n) {
    var item = array[i];
    if (item !== void 0) {
      result.push(item);
    }
  }
  return result;
}
function getAngledTickWidth(contentSize, unitSize, angle) {
  var size = {
    width: contentSize.width + unitSize.width,
    height: contentSize.height + unitSize.height
  };
  return getAngledRectangleWidth(size, angle);
}
function getTickBoundaries(viewBox, sign, sizeKey) {
  var isWidth = sizeKey === "width";
  var {
    x,
    y,
    width,
    height
  } = viewBox;
  if (sign === 1) {
    return {
      start: isWidth ? x : y,
      end: isWidth ? x + width : y + height
    };
  }
  return {
    start: isWidth ? x + width : y + height,
    end: isWidth ? x : y
  };
}
function isVisible(sign, tickPosition, getSize, start, end) {
  if (sign * tickPosition < sign * start || sign * tickPosition > sign * end) {
    return false;
  }
  var size = getSize();
  return sign * (tickPosition - sign * size / 2 - start) >= 0 && sign * (tickPosition + sign * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks, interval) {
  return getEveryNth(ticks, interval + 1);
}
function getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
  var result = (ticks || []).slice();
  var {
    start: initialStart,
    end
  } = boundaries;
  var index = 0;
  var stepsize = 1;
  var start = initialStart;
  var _loop = function _loop2() {
    var entry = ticks === null || ticks === void 0 ? void 0 : ticks[index];
    if (entry === void 0) {
      return {
        v: getEveryNth(ticks, stepsize)
      };
    }
    var i = index;
    var size;
    var getSize = () => {
      if (size === void 0) {
        size = getTickSize(entry, i);
      }
      return size;
    };
    var tickCoord = entry.coordinate;
    var isShow = index === 0 || isVisible(sign, tickCoord, getSize, start, end);
    if (!isShow) {
      index = 0;
      start = initialStart;
      stepsize += 1;
    }
    if (isShow) {
      start = tickCoord + sign * (getSize() / 2 + minTickGap);
      index += stepsize;
    }
  }, _ret;
  while (stepsize <= result.length) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return [];
}
function getEquidistantPreserveEndTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
  var result = (ticks || []).slice();
  var len = result.length;
  if (len === 0) {
    return [];
  }
  var {
    start: initialStart,
    end
  } = boundaries;
  for (var stepsize = 1; stepsize <= len; stepsize++) {
    var offset = (len - 1) % stepsize;
    var start = initialStart;
    var ok = true;
    var _loop2 = function _loop22() {
      var entry = ticks[index];
      if (entry == null) {
        return 0;
      }
      var i = index;
      var size;
      var getSize = () => {
        if (size === void 0) {
          size = getTickSize(entry, i);
        }
        return size;
      };
      var tickCoord = entry.coordinate;
      var isShow = index === offset || isVisible(sign, tickCoord, getSize, start, end);
      if (!isShow) {
        ok = false;
        return 1;
      }
      if (isShow) {
        start = tickCoord + sign * (getSize() / 2 + minTickGap);
      }
    }, _ret2;
    for (var index = offset; index < len; index += stepsize) {
      _ret2 = _loop2();
      if (_ret2 === 0) continue;
      if (_ret2 === 1) break;
    }
    if (ok) {
      var finalTicks = [];
      for (var _index = offset; _index < len; _index += stepsize) {
        var tick = ticks[_index];
        if (tick != null) {
          finalTicks.push(tick);
        }
      }
      return finalTicks;
    }
  }
  return [];
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
function getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap) {
  var result = (ticks || []).slice();
  var len = result.length;
  var {
    start
  } = boundaries;
  var {
    end
  } = boundaries;
  var _loop = function _loop2(i2) {
    var initialEntry = result[i2];
    if (initialEntry == null) {
      return 1;
    }
    var entry = initialEntry;
    var size;
    var getSize = () => {
      if (size === void 0) {
        size = getTickSize(initialEntry, i2);
      }
      return size;
    };
    if (i2 === len - 1) {
      var gap = sign * (entry.coordinate + sign * getSize() / 2 - end);
      result[i2] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
        tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate
      });
    } else {
      result[i2] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    if (entry.tickCoord != null) {
      var isShow = isVisible(sign, entry.tickCoord, getSize, start, end);
      if (isShow) {
        end = entry.tickCoord - sign * (getSize() / 2 + minTickGap);
        result[i2] = _objectSpread$2(_objectSpread$2({}, entry), {}, {
          isShow: true
        });
      }
    }
  };
  for (var i = len - 1; i >= 0; i--) {
    if (_loop(i)) continue;
  }
  return result;
}
function getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, preserveEnd) {
  var result = (ticks || []).slice();
  var len = result.length;
  var {
    start,
    end
  } = boundaries;
  if (preserveEnd) {
    var tail = ticks[len - 1];
    if (tail != null) {
      var tailSize = getTickSize(tail, len - 1);
      var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
      result[len - 1] = tail = _objectSpread$2(_objectSpread$2({}, tail), {}, {
        tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate
      });
      if (tail.tickCoord != null) {
        var isTailShow = isVisible(sign, tail.tickCoord, () => tailSize, start, end);
        if (isTailShow) {
          end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
          result[len - 1] = _objectSpread$2(_objectSpread$2({}, tail), {}, {
            isShow: true
          });
        }
      }
    }
  }
  var count = preserveEnd ? len - 1 : len;
  var _loop2 = function _loop22(i2) {
    var initialEntry = result[i2];
    if (initialEntry == null) {
      return 1;
    }
    var entry = initialEntry;
    var size;
    var getSize = () => {
      if (size === void 0) {
        size = getTickSize(initialEntry, i2);
      }
      return size;
    };
    if (i2 === 0) {
      var gap = sign * (entry.coordinate - sign * getSize() / 2 - start);
      result[i2] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
        tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate
      });
    } else {
      result[i2] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    if (entry.tickCoord != null) {
      var isShow = isVisible(sign, entry.tickCoord, getSize, start, end);
      if (isShow) {
        start = entry.tickCoord + sign * (getSize() / 2 + minTickGap);
        result[i2] = _objectSpread$2(_objectSpread$2({}, entry), {}, {
          isShow: true
        });
      }
    }
  };
  for (var i = 0; i < count; i++) {
    if (_loop2(i)) continue;
  }
  return result;
}
function getTicks(props, fontSize, letterSpacing) {
  var {
    tick,
    ticks,
    viewBox,
    minTickGap,
    orientation,
    interval,
    tickFormatter,
    unit,
    angle
  } = props;
  if (!ticks || !ticks.length || !tick) {
    return [];
  }
  if (isNumber(interval) || Global.isSsr) {
    var _getNumberIntervalTic;
    return (_getNumberIntervalTic = getNumberIntervalTicks(ticks, isNumber(interval) ? interval : 0)) !== null && _getNumberIntervalTic !== void 0 ? _getNumberIntervalTic : [];
  }
  var candidates = [];
  var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
  var unitSize = unit && sizeKey === "width" ? getStringSize(unit, {
    fontSize,
    letterSpacing
  }) : {
    width: 0,
    height: 0
  };
  var getTickSize = (content, index) => {
    var value = typeof tickFormatter === "function" ? tickFormatter(content.value, index) : content.value;
    return sizeKey === "width" ? getAngledTickWidth(getStringSize(value, {
      fontSize,
      letterSpacing
    }), unitSize, angle) : getStringSize(value, {
      fontSize,
      letterSpacing
    })[sizeKey];
  };
  var tick0 = ticks[0];
  var tick1 = ticks[1];
  var sign = ticks.length >= 2 && tick0 != null && tick1 != null ? mathSign(tick1.coordinate - tick0.coordinate) : 1;
  var boundaries = getTickBoundaries(viewBox, sign, sizeKey);
  if (interval === "equidistantPreserveStart") {
    return getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap);
  }
  if (interval === "equidistantPreserveEnd") {
    return getEquidistantPreserveEndTicks(sign, boundaries, getTickSize, ticks, minTickGap);
  }
  if (interval === "preserveStart" || interval === "preserveStartEnd") {
    candidates = getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, interval === "preserveStartEnd");
  } else {
    candidates = getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap);
  }
  return candidates.filter((entry) => entry.isShow);
}
var getCalculatedYAxisWidth = (_ref) => {
  var {
    ticks,
    label,
    labelGapWithTick = 5,
    // Default gap between label and tick
    tickSize = 0,
    tickMargin = 0
  } = _ref;
  var maxTickWidth = 0;
  if (ticks) {
    Array.from(ticks).forEach((tickNode) => {
      if (tickNode) {
        var bbox = tickNode.getBoundingClientRect();
        if (bbox.width > maxTickWidth) {
          maxTickWidth = bbox.width;
        }
      }
    });
    var labelWidth = label ? label.getBoundingClientRect().width : 0;
    var tickWidth = tickSize + tickMargin;
    var updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (label ? labelGapWithTick : 0);
    return Math.round(updatedYAxisWidth);
  }
  return 0;
};
var _excluded$2 = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
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
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
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
var defaultCartesianAxisProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
  zIndex: DefaultZIndexes.axis
};
function AxisLine(axisLineProps) {
  var {
    x,
    y,
    width,
    height,
    orientation,
    mirror,
    axisLine,
    otherSvgProps
  } = axisLineProps;
  if (!axisLine) {
    return null;
  }
  var props = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, otherSvgProps), svgPropertiesNoEvents(axisLine)), {}, {
    fill: "none"
  });
  if (orientation === "top" || orientation === "bottom") {
    var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
    props = _objectSpread$1(_objectSpread$1({}, props), {}, {
      x1: x,
      y1: y + needHeight * height,
      x2: x + width,
      y2: y + needHeight * height
    });
  } else {
    var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
    props = _objectSpread$1(_objectSpread$1({}, props), {}, {
      x1: x + needWidth * width,
      y1: y,
      x2: x + needWidth * width,
      y2: y + height
    });
  }
  return /* @__PURE__ */ reactExports.createElement("line", _extends$1({}, props, {
    className: clsx("recharts-cartesian-axis-line", get(axisLine, "className"))
  }));
}
function getTickLineCoord(data, x, y, width, height, orientation, tickSize, mirror, tickMargin) {
  var x1, x2, y1, y2, tx, ty;
  var sign = mirror ? -1 : 1;
  var finalTickSize = data.tickSize || tickSize;
  var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;
  switch (orientation) {
    case "top":
      x1 = x2 = data.coordinate;
      y2 = y + +!mirror * height;
      y1 = y2 - sign * finalTickSize;
      ty = y1 - sign * tickMargin;
      tx = tickCoord;
      break;
    case "left":
      y1 = y2 = data.coordinate;
      x2 = x + +!mirror * width;
      x1 = x2 - sign * finalTickSize;
      tx = x1 - sign * tickMargin;
      ty = tickCoord;
      break;
    case "right":
      y1 = y2 = data.coordinate;
      x2 = x + +mirror * width;
      x1 = x2 + sign * finalTickSize;
      tx = x1 + sign * tickMargin;
      ty = tickCoord;
      break;
    default:
      x1 = x2 = data.coordinate;
      y2 = y + +mirror * height;
      y1 = y2 + sign * finalTickSize;
      ty = y1 + sign * tickMargin;
      tx = tickCoord;
      break;
  }
  return {
    line: {
      x1,
      y1,
      x2,
      y2
    },
    tick: {
      x: tx,
      y: ty
    }
  };
}
function getTickTextAnchor(orientation, mirror) {
  switch (orientation) {
    case "left":
      return mirror ? "start" : "end";
    case "right":
      return mirror ? "end" : "start";
    default:
      return "middle";
  }
}
function getTickVerticalAnchor(orientation, mirror) {
  switch (orientation) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return mirror ? "start" : "end";
    default:
      return mirror ? "end" : "start";
  }
}
function TickItem(props) {
  var {
    option,
    tickProps,
    value
  } = props;
  var tickItem;
  var combinedClassName = clsx(tickProps.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    tickItem = /* @__PURE__ */ reactExports.cloneElement(option, _objectSpread$1(_objectSpread$1({}, tickProps), {}, {
      className: combinedClassName
    }));
  } else if (typeof option === "function") {
    tickItem = option(_objectSpread$1(_objectSpread$1({}, tickProps), {}, {
      className: combinedClassName
    }));
  } else {
    var className = "recharts-cartesian-axis-tick-value";
    if (typeof option !== "boolean") {
      className = clsx(className, getClassNameFromUnknown(option));
    }
    tickItem = /* @__PURE__ */ reactExports.createElement(Text, _extends$1({}, tickProps, {
      className
    }), value);
  }
  return tickItem;
}
function RenderedTicksReporter(_ref) {
  var {
    ticks,
    axisType,
    axisId
  } = _ref;
  var dispatch = useAppDispatch();
  reactExports.useEffect(() => {
    if (axisId == null || axisType == null) {
      return noop;
    }
    var tickItems = ticks.map((tick) => ({
      value: tick.value,
      coordinate: tick.coordinate,
      offset: tick.offset,
      index: tick.index
    }));
    dispatch(setRenderedTicks({
      ticks: tickItems,
      axisId,
      axisType
    }));
    return () => {
      dispatch(removeRenderedTicks({
        axisId,
        axisType
      }));
    };
  }, [dispatch, ticks, axisId, axisType]);
  return null;
}
var Ticks = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var {
    ticks = [],
    tick,
    tickLine,
    stroke,
    tickFormatter,
    unit,
    padding,
    tickTextProps,
    orientation,
    mirror,
    x,
    y,
    width,
    height,
    tickSize,
    tickMargin,
    fontSize,
    letterSpacing,
    getTicksConfig,
    events,
    axisType,
    axisId
  } = props;
  var finalTicks = getTicks(_objectSpread$1(_objectSpread$1({}, getTicksConfig), {}, {
    ticks
  }), fontSize, letterSpacing);
  var axisProps = svgPropertiesNoEvents(getTicksConfig);
  var customTickProps = svgPropertiesNoEventsFromUnknown(tick);
  var textAnchor = isValidTextAnchor(axisProps.textAnchor) ? axisProps.textAnchor : getTickTextAnchor(orientation, mirror);
  var verticalAnchor = getTickVerticalAnchor(orientation, mirror);
  var tickLinePropsObject = {};
  if (typeof tickLine === "object") {
    tickLinePropsObject = tickLine;
  }
  var tickLineProps = _objectSpread$1(_objectSpread$1({}, axisProps), {}, {
    fill: "none"
  }, tickLinePropsObject);
  var tickLineCoords = finalTicks.map((entry) => _objectSpread$1({
    entry
  }, getTickLineCoord(entry, x, y, width, height, orientation, tickSize, mirror, tickMargin)));
  var tickLines = tickLineCoords.map((_ref2) => {
    var {
      entry,
      line: lineCoord
    } = _ref2;
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
    }, tickLine && /* @__PURE__ */ reactExports.createElement("line", _extends$1({}, tickLineProps, lineCoord, {
      className: clsx("recharts-cartesian-axis-tick-line", get(tickLine, "className"))
    })));
  });
  var tickLabels = tickLineCoords.map((_ref3, i) => {
    var _ref4, _tickTextProps$angle;
    var {
      entry,
      tick: tickCoord
    } = _ref3;
    var tickProps = _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({
      verticalAnchor
    }, axisProps), {}, {
      textAnchor,
      stroke: "none",
      fill: stroke
    }, tickCoord), {}, {
      index: i,
      payload: entry,
      visibleTicksCount: finalTicks.length,
      tickFormatter,
      padding
    }, tickTextProps), {}, {
      angle: (_ref4 = (_tickTextProps$angle = tickTextProps === null || tickTextProps === void 0 ? void 0 : tickTextProps.angle) !== null && _tickTextProps$angle !== void 0 ? _tickTextProps$angle : axisProps.angle) !== null && _ref4 !== void 0 ? _ref4 : 0
    });
    var finalTickProps = _objectSpread$1(_objectSpread$1({}, tickProps), customTickProps);
    return /* @__PURE__ */ reactExports.createElement(Layer, _extends$1({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
    }, adaptEventsOfChild(events, entry, i)), tick && /* @__PURE__ */ reactExports.createElement(TickItem, {
      option: tick,
      tickProps: finalTickProps,
      value: "".concat(typeof tickFormatter === "function" ? tickFormatter(entry.value, i) : entry.value).concat(unit || "")
    }));
  });
  return /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(axisType, "-ticks")
  }, /* @__PURE__ */ reactExports.createElement(RenderedTicksReporter, {
    ticks: finalTicks,
    axisId,
    axisType
  }), tickLabels.length > 0 && /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: DefaultZIndexes.label
  }, /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(axisType, "-tick-labels"),
    ref
  }, tickLabels)), tickLines.length > 0 && /* @__PURE__ */ reactExports.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(axisType, "-tick-lines")
  }, tickLines));
});
var CartesianAxisComponent = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var {
    axisLine,
    width,
    height,
    className,
    hide,
    ticks,
    axisType,
    axisId
  } = props, rest = _objectWithoutProperties$2(props, _excluded$2);
  var [fontSize, setFontSize] = reactExports.useState("");
  var [letterSpacing, setLetterSpacing] = reactExports.useState("");
  var tickRefs = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => ({
    getCalculatedWidth: () => {
      var _props$labelRef;
      return getCalculatedYAxisWidth({
        ticks: tickRefs.current,
        label: (_props$labelRef = props.labelRef) === null || _props$labelRef === void 0 ? void 0 : _props$labelRef.current,
        labelGapWithTick: 5,
        tickSize: props.tickSize,
        tickMargin: props.tickMargin
      });
    }
  }));
  var layerRef = reactExports.useCallback((el) => {
    if (el) {
      var tickNodes = el.getElementsByClassName("recharts-cartesian-axis-tick-value");
      tickRefs.current = tickNodes;
      var tick = tickNodes[0];
      if (tick) {
        var computedStyle = window.getComputedStyle(tick);
        var calculatedFontSize = computedStyle.fontSize;
        var calculatedLetterSpacing = computedStyle.letterSpacing;
        if (calculatedFontSize !== fontSize || calculatedLetterSpacing !== letterSpacing) {
          setFontSize(calculatedFontSize);
          setLetterSpacing(calculatedLetterSpacing);
        }
      }
    }
  }, [fontSize, letterSpacing]);
  if (hide) {
    return null;
  }
  if (width != null && width <= 0 || height != null && height <= 0) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(Layer, {
    className: clsx("recharts-cartesian-axis", className)
  }, /* @__PURE__ */ reactExports.createElement(AxisLine, {
    x: props.x,
    y: props.y,
    width,
    height,
    orientation: props.orientation,
    mirror: props.mirror,
    axisLine,
    otherSvgProps: svgPropertiesNoEvents(props)
  }), /* @__PURE__ */ reactExports.createElement(Ticks, {
    ref: layerRef,
    axisType,
    events: rest,
    fontSize,
    getTicksConfig: props,
    height: props.height,
    letterSpacing,
    mirror: props.mirror,
    orientation: props.orientation,
    padding: props.padding,
    stroke: props.stroke,
    tick: props.tick,
    tickFormatter: props.tickFormatter,
    tickLine: props.tickLine,
    tickMargin: props.tickMargin,
    tickSize: props.tickSize,
    tickTextProps: props.tickTextProps,
    ticks,
    unit: props.unit,
    width: props.width,
    x: props.x,
    y: props.y,
    axisId
  }), /* @__PURE__ */ reactExports.createElement(CartesianLabelContextProvider, {
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
    lowerWidth: props.width,
    upperWidth: props.width
  }, /* @__PURE__ */ reactExports.createElement(CartesianLabelFromLabelProp, {
    label: props.label,
    labelRef: props.labelRef
  }), props.children)));
});
var CartesianAxis = /* @__PURE__ */ reactExports.forwardRef((outsideProps, ref) => {
  var props = resolveDefaultProps(outsideProps, defaultCartesianAxisProps);
  return /* @__PURE__ */ reactExports.createElement(CartesianAxisComponent, _extends$1({}, props, {
    ref
  }));
});
CartesianAxis.displayName = "CartesianAxis";
var _excluded$1 = ["domain", "range"], _excluded2$1 = ["domain", "range"];
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
function shortArraysAreEqual(arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  }
  if (Array.isArray(arr1) && arr1.length === 2 && Array.isArray(arr2) && arr2.length === 2) {
    return arr1[0] === arr2[0] && arr1[1] === arr2[1];
  }
  return false;
}
function axisPropsAreEqual(prevProps, nextProps) {
  if (prevProps === nextProps) {
    return true;
  }
  var {
    domain: prevDomain,
    range: prevRange
  } = prevProps, prevRest = _objectWithoutProperties$1(prevProps, _excluded$1);
  var {
    domain: nextDomain,
    range: nextRange
  } = nextProps, nextRest = _objectWithoutProperties$1(nextProps, _excluded2$1);
  if (!shortArraysAreEqual(prevDomain, nextDomain)) {
    return false;
  }
  if (!shortArraysAreEqual(prevRange, nextRange)) {
    return false;
  }
  return propsAreEqual(prevRest, nextRest);
}
var _excluded = ["type"], _excluded2 = ["dangerouslySetInnerHTML", "ticks", "scale"], _excluded3 = ["id", "scale"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
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
function SetXAxisSettings(props) {
  var dispatch = useAppDispatch();
  var prevSettingsRef = reactExports.useRef(null);
  var layout = useCartesianChartLayout();
  var {
    type: typeFromProps
  } = props, restProps = _objectWithoutProperties(props, _excluded);
  var evaluatedType = getAxisTypeBasedOnLayout(layout, "xAxis", typeFromProps);
  var settings = reactExports.useMemo(() => {
    if (evaluatedType == null) {
      return void 0;
    }
    return _objectSpread(_objectSpread({}, restProps), {}, {
      type: evaluatedType
    });
  }, [restProps, evaluatedType]);
  reactExports.useLayoutEffect(() => {
    if (settings == null) {
      return;
    }
    if (prevSettingsRef.current === null) {
      dispatch(addXAxis(settings));
    } else if (prevSettingsRef.current !== settings) {
      dispatch(replaceXAxis({
        prev: prevSettingsRef.current,
        next: settings
      }));
    }
    prevSettingsRef.current = settings;
  }, [settings, dispatch]);
  reactExports.useLayoutEffect(() => {
    return () => {
      if (prevSettingsRef.current) {
        dispatch(removeXAxis(prevSettingsRef.current));
        prevSettingsRef.current = null;
      }
    };
  }, [dispatch]);
  return null;
}
var XAxisImpl = (props) => {
  var {
    xAxisId,
    className
  } = props;
  var viewBox = useAppSelector(selectAxisViewBox);
  var isPanorama = useIsPanorama();
  var axisType = "xAxis";
  var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, xAxisId, isPanorama));
  var axisSize = useAppSelector((state) => selectXAxisSize(state, xAxisId));
  var position = useAppSelector((state) => selectXAxisPosition(state, xAxisId));
  var synchronizedSettings = useAppSelector((state) => selectXAxisSettingsNoDefaults(state, xAxisId));
  if (axisSize == null || position == null || synchronizedSettings == null) {
    return null;
  }
  var {
    dangerouslySetInnerHTML,
    ticks,
    scale: del
  } = props, allOtherProps = _objectWithoutProperties(props, _excluded2);
  var {
    id,
    scale: del2
  } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties(synchronizedSettings, _excluded3);
  return /* @__PURE__ */ reactExports.createElement(CartesianAxis, _extends({}, allOtherProps, restSynchronizedSettings, {
    x: position.x,
    y: position.y,
    width: axisSize.width,
    height: axisSize.height,
    className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
    viewBox,
    ticks: cartesianTickItems,
    axisType,
    axisId: xAxisId
  }));
};
var xAxisDefaultProps = {
  allowDataOverflow: implicitXAxis.allowDataOverflow,
  allowDecimals: implicitXAxis.allowDecimals,
  allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
  angle: implicitXAxis.angle,
  axisLine: defaultCartesianAxisProps.axisLine,
  height: implicitXAxis.height,
  hide: false,
  includeHidden: implicitXAxis.includeHidden,
  interval: implicitXAxis.interval,
  label: false,
  minTickGap: implicitXAxis.minTickGap,
  mirror: implicitXAxis.mirror,
  orientation: implicitXAxis.orientation,
  padding: implicitXAxis.padding,
  reversed: implicitXAxis.reversed,
  scale: implicitXAxis.scale,
  tick: implicitXAxis.tick,
  tickCount: implicitXAxis.tickCount,
  tickLine: defaultCartesianAxisProps.tickLine,
  tickSize: defaultCartesianAxisProps.tickSize,
  type: implicitXAxis.type,
  niceTicks: implicitXAxis.niceTicks,
  xAxisId: 0
};
var XAxisSettingsDispatcher = (outsideProps) => {
  var props = resolveDefaultProps(outsideProps, xAxisDefaultProps);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetXAxisSettings, {
    allowDataOverflow: props.allowDataOverflow,
    allowDecimals: props.allowDecimals,
    allowDuplicatedCategory: props.allowDuplicatedCategory,
    angle: props.angle,
    dataKey: props.dataKey,
    domain: props.domain,
    height: props.height,
    hide: props.hide,
    id: props.xAxisId,
    includeHidden: props.includeHidden,
    interval: props.interval,
    minTickGap: props.minTickGap,
    mirror: props.mirror,
    name: props.name,
    orientation: props.orientation,
    padding: props.padding,
    reversed: props.reversed,
    scale: props.scale,
    tick: props.tick,
    tickCount: props.tickCount,
    tickFormatter: props.tickFormatter,
    ticks: props.ticks,
    type: props.type,
    unit: props.unit,
    niceTicks: props.niceTicks
  }), /* @__PURE__ */ reactExports.createElement(XAxisImpl, props));
};
var XAxis = /* @__PURE__ */ reactExports.memo(XAxisSettingsDispatcher, axisPropsAreEqual);
XAxis.displayName = "XAxis";
export {
  CartesianAxis as C,
  Rectangle as R,
  Sector as S,
  Tooltip as T,
  XAxis as X,
  axisPropsAreEqual as a,
  getTicks as b,
  getUniqPayload as c,
  defaultCartesianAxisProps as d,
  getClassNameFromUnknown as g,
  useElementOffset as u
};
