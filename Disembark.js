"use strict";
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
var _transport;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disembark = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Move_1 = require("@civ-clone/base-unit-action-move/Move");
class Disembark extends Move_1.default {
    constructor(from, to, unit, transport, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        _transport.set(this, void 0);
        __classPrivateFieldSet(this, _transport, transport);
    }
    perform() {
        if (!super.perform()) {
            return false;
        }
        this.unit().moves().set(0);
        __classPrivateFieldGet(this, _transport).unload(this.unit());
        return true;
    }
}
exports.Disembark = Disembark;
_transport = new WeakMap();
exports.default = Disembark;
//# sourceMappingURL=Disembark.js.map