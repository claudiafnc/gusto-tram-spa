import { createStore } from "vuex";

export default createStore({
  state: {
    reviews: [], // array che memorizza le recensioni
  },
  mutations: {
    ADD_REVIEW(state, review) {
      state.reviews.push(review); // la mutation aggiunge la recensione allo stato
    },
  },
  actions: {
    addReview({ commit }, review) {
      commit("ADD_REVIEW", review); // l'action chiama la mutation ADD_REVIEW
    },
  },
  getters: {
    allReviews(state) {
      return state.reviews; // il getter restituisce tutte le recensioni
    },
  },
});
