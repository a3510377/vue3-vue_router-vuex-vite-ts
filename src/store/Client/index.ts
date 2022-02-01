import { Module } from "vuex";

import { RootState } from "..";
import { getters } from "./getter";
import { mutations } from "./mutations";
import { State, state } from "./state";
import { actions } from "./actions";

const authModule: Module<State, RootState> = {
  namespaced: true,
  mutations,
  getters,
  state,
  actions,
};

export default authModule;
