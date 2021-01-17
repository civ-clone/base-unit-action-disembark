import { TransportRegistry } from '@civ-clone/core-unit-transport/TransportRegistry';
import Move from '@civ-clone/base-unit-action-move/Move';
export declare class Disembark extends Move {
  perform(transportRegistry?: TransportRegistry): boolean;
}
export default Disembark;
