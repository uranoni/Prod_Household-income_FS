import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    total: 0,
    list: []
  },
  mutations: {
    addTotal(state, payload) {
      console.log(payload);
      state.total = state.total * 1 + payload * 1;
    },
    addHomeList(state, payload) {
      state.total = state.total * 1 - payload.money * 1;
      state.list.push(payload);
      console.log(state.list);
    }
  },
  actions: {}
});
