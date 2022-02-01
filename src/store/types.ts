import { Modules } from ".";
import { State as ClientStateTypes } from "./client/state";

export default interface RootStateTypes {}

export interface AllStateTypes extends RootStateTypes {
  [Modules.CLIENT]: ClientStateTypes;
}
