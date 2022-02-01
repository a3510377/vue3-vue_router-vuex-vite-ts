import { GetterTree } from "vuex";

import { RootState } from "..";
import { State } from "./state";

export enum GetterType {}

export type Getters = {};

export const getters: GetterTree<State, RootState> & Getters = {};
