// To parse this data:
//
//   const Convert = require("./file");
//
//   const orderBooks = Convert.toOrderBooks(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
function toOrderBooks(json) {
  return cast(JSON.parse(json), r("OrderBooks"));
}

function orderBooksToJson(value) {
  return JSON.stringify(uncast(value, r("OrderBooks")), null, 2);
}

function invalidValue(typ, val, key = "") {
  if (key) {
    throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ) {
  if (typ.jsonToJS === undefined) {
    const map = {};
    typ.props.forEach((p) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ) {
  if (typ.jsToJSON === undefined) {
    const map = {};
    typ.props.forEach((p) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val, typ, getProps, key = "") {
  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs, val) {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val) {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(props, additional, val) {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast(val, typ) {
  return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps);
}

function a(typ) {
  return { arrayItems: typ };
}

function u(...typs) {
  return { unionMembers: typs };
}

function o(props, additional) {
  return { props, additional };
}

function m(additional) {
  return { props: [], additional };
}

function r(name) {
  return { ref: name };
}

const typeMap = {
  OrderBooks: o(
    [
      { json: "data", js: "data", typ: a(r("Datum")) },
      { json: "message", js: "message", typ: "" },
      { json: "status", js: "status", typ: 0 },
    ],
    false
  ),
  Datum: o(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "kodeSaham", js: "kodeSaham", typ: "" },
      { json: "namaSaham", js: "namaSaham", typ: "" },
      { json: "hargaTerakhir", js: "hargaTerakhir", typ: 3.14 },
      { json: "changes", js: "changes", typ: 0 },
      { json: "changePersen", js: "changePersen", typ: 3.14 },
      { json: "priceClose", js: "priceClose", typ: 3.14 },
      { json: "priceOpen", js: "priceOpen", typ: 3.14 },
      { json: "priceHigh", js: "priceHigh", typ: 3.14 },
      { json: "priceLow", js: "priceLow", typ: 3.14 },
      { json: "foreignSale", js: "foreignSale", typ: 3.14 },
      { json: "domesticBuy", js: "domesticBuy", typ: 3.14 },
      { json: "orderbook", js: "orderbook", typ: a(r("Orderbook")) },
    ],
    false
  ),
  Orderbook: o(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "bidOffer", js: "bidOffer", typ: 0 },
      { json: "lotOffer", js: "lotOffer", typ: 0 },
      { json: "offerOrder", js: "offerOrder", typ: 0 },
      { json: "bidOrder", js: "bidOrder", typ: 0 },
      { json: "bidPrice", js: "bidPrice", typ: 3.14 },
      { json: "lotPrice", js: "lotPrice", typ: 0 },
    ],
    false
  ),
};

module.exports = {
  orderBooksToJson: orderBooksToJson,
  toOrderBooks: toOrderBooks,
};
