"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disembark = void 0;
const TransportRegistry_1 = require("@civ-clone/core-unit-transport/TransportRegistry");
const Move_1 = require("@civ-clone/base-unit-action-move/Move");
class Disembark extends Move_1.default {
    perform(transportRegistry = TransportRegistry_1.instance) {
        if (!super.perform()) {
            return false;
        }
        this.unit().moves().set(0);
        transportRegistry
            .getBy('unit', this.unit())
            .forEach((manifest) => {
            manifest.transport().unload(this.unit());
        });
        return true;
    }
}
exports.Disembark = Disembark;
exports.default = Disembark;
//# sourceMappingURL=Disembark.js.map