import Vue from "vue";
import Vuex from "vuex";
import JSONParseSafely from "@/utils/JSONParseSafely";

Vue.use(Vuex);
const initTickets = {
  1: {
    b: "1",
    bin: "041240003437",
    p: "1",
    created: new Date(),
  },
};

export default new Vuex.Store({
  state: {
    tickets: JSONParseSafely(localStorage.getItem("tickets"), {
      ...initTickets,
    }),
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
