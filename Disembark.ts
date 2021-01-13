import {
  TransportRegistry,
  instance as transportRegistryInstance,
} from '@civ-clone/core-unit-transport/TransportRegistry';
import Move from '@civ-clone/base-unit-action-move/Move';
import TransportManifest from '@civ-clone/core-unit-transport/TransportManifest';

export class Disembark extends Move {
  perform(
    transportRegistry: TransportRegistry = transportRegistryInstance
  ): boolean {
    if (!super.perform()) {
      return false;
    }

    this.unit().moves().set(0);

    transportRegistry
      .getBy('unit', this.unit())
      .forEach((manifest: TransportManifest): void => {
        manifest.transport().unload(this.unit());
      });

    return true;
  }
}

export default Disembark;
