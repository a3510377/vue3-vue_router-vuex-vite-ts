import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

import clientModule from "./Client";
import RootStateTypes, { AllStateTypes } from "./types";

export enum Modules {
  CLIENT = "client",
}

const store = createStore({
  modules: {
    [Modules.CLIENT]: clientModule,
  },
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store");
export type RootState = typeof key;
export default store;

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
