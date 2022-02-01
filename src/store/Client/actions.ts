import { ActionContext, ActionTree } from "vuex";

import { RootState } from "..";
import { State } from "./state";

export enum ActionsType {}

// EX:
// [ActionsType.test]: (
//   ctx: ActionContext<State, RootState>
// ) => Promise<void>;

export type Actions = {};

export const actions: ActionTree<State, RootState> & Actions = {};
