import Vue from "vue";
import Vuex from "vuex";
import JSONParseSafely from "@/utils/JSONParseSafely";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tickets: JSONParseSafely(localStorage.getItem("tickets"), {}),
  },
  mutations: {
    SAVE_NEW_TICKET(state, { payload }) {
      state.tickets[payload.b + ""] = {
        ...payload,
        created: new Date(),
      };
      localStorage.setItem("tickets", JSON.stringify(state.tickets));
    },
  },
  actions: {},
  modules: {},
});
