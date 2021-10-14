var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _date, _quantity, _valor;
export class Negociation {
    constructor(date, quantity, valor) {
        _date.set(this, void 0);
        _quantity.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _date, date);
        __classPrivateFieldSet(this, _quantity, quantity);
        __classPrivateFieldSet(this, _valor, valor);
    }
    get date() {
        return __classPrivateFieldGet(this, _date);
    }
    get quantity() {
        return __classPrivateFieldGet(this, _quantity);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantity) * __classPrivateFieldGet(this, _valor);
    }
}
_date = new WeakMap(), _quantity = new WeakMap(), _valor = new WeakMap();
