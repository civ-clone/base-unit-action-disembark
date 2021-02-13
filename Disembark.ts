import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import { ITransport } from '@civ-clone/core-unit-transport/Transport';
import Move from '@civ-clone/base-unit-action-move/Move';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export class Disembark extends Move {
  #transport: ITransport;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    transport: ITransport,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this.#transport = transport;
  }

  perform(): boolean {
    if (!super.perform()) {
      return false;
    }

    this.unit().moves().set(0);

    this.#transport.unload(this.unit());

    return true;
  }
}

export default Disembark;
