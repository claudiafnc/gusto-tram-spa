import { createStore } from "vuex";

export default createStore({
  state: {
    reviews: [], // Array per memorizzare le recensioni
  },
  mutations: {
    ADD_REVIEW(state, review) {
      state.reviews.push(review); // Aggiunge la recensione allo stato
    },
  },
  actions: {
    addReview({ commit }, review) {
      commit("ADD_REVIEW", review); // Committa la mutazione ADD_REVIEW
    },
  },
  getters: {
    allReviews(state) {
      return state.reviews; // Restituisce tutte le recensioni
    },
  },
});
