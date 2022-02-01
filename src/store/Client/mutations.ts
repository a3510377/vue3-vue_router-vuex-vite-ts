import { State } from "./state";

export enum MutationsTypes {}

// EX:
// [MutationsTypes.getBotInfo]: (state: S, data?: State["botInfo"]) => void;

export type Mutations<S = State> = {};

export const mutations: Mutations<State> & Mutations = {};
