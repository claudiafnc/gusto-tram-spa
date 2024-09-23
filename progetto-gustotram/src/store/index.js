import { createStore } from "vuex";

export default createStore({
  state: {
    prenotazioni: [], // Qui viene memorizzata la lista delle prenotazioni
  },
  mutations: {
    ADD_PRENOTAZIONE(state, prenotazione) {
      // Aggiunge una nuova prenotazione della lista delle prenotazioni nello stato
      state.prenotazioni.push(prenotazione);
    },
    CONFIRM_PRENOTAZIONE(state, index) {
      // Imposta come confermata la prenotazione
      if (state.prenotazioni[index]) {
        state.prenotazioni[index].confermata = true;
      }
    },
    DELETE_PRENOTAZIONE(state, index) {
      // Elimina la prenotazione dalla lista
      if (state.prenotazioni[index]) {
        state.prenotazioni.splice(index, 1);
      }
    },
  },
  actions: {
    addPrenotazione({ commit }, prenotazione) {
      commit("ADD_PRENOTAZIONE", prenotazione); // Chiama la mutazione ADD_PRENOTAZIONE
    },
    confirmPrenotazione({ commit }, index) {
      commit("CONFIRM_PRENOTAZIONE", index); // Chiama la mutazione CONFIRM_PRENOTAZIONE
    },
    deletePrenotazione({ commit }, index) {
      commit("DELETE_PRENOTAZIONE", index); // Chiama la mutazione DELETE_PRENOTAZIONE
    },
  },
  getters: {
    prenotazioni: (state) => state.prenotazioni, // Getter per restituire la lista delle prenotazioni
  },
});
