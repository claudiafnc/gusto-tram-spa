<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img
          v-bind:src="require('@/assets/images/' + aboutCover)"
          alt="tram"
          class="img-fluid w-100 about-cover"
        />
      </div>
      <div class="col">
        <h1>ABOUT</h1>
        <p class="sezione-testo">
          Benvenuti da Slurp! Da oltre 10 anni, Slurp è il luogo in cui il gusto
          si incontra con l'innovazione, nel cuore di Torino. Offriamo
          un'esperienza culinaria unica che unisce tradizione e modernità,
          grazie a un menù (in versione classica e vegetariana) ricco di piatti
          gourmet e una selezione di oltre 50 vini al calice.
        </p>
        <div class="row justify-content-center mt-3 gx-6">
          <div class="col-md-4 col-sm-12">
            <h2>DA DOVE PARTE</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5635.891851437801!2d7.689!3d45.066608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d64fefa6645%3A0xb30be4bce64f7480!2sCarlina%20Nord%20Ristocolor!5e0!3m2!1sit!2sus!4v1727123352617!5m2!1sit!2sus"
              width="100%"
              allowfullscreen=""
            >
            </iframe>
            <p class="testo-via">Carlina Nord Ristocolor, 1557</p>
          </div>
          <div class="col-md-4 col-sm-12 testo-contatti">
            <h2>CONTATTI</h2>
            <p><span class="testo-via">tel :</span> +39 011 4548554</p>
            <p>
              <span class="testo-via">e-mail :</span>
              ceneinmovimento@slurptorino.com
            </p>
            <p>Via Massena 26, 10128, Torino (TO)</p>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-md-4 col-sm-12 mt-3">
            <h3>Lascia una recensione</h3>
            <form @submit.prevent="creaRecensione" class="testo-form">
              <div class="mb-3">
                <label for="nomeRecensione" class="form-label">Nome:</label>
                <input
                  type="text"
                  v-model="nomeRecensione"
                  class="form-control"
                  id="nomeRecensione"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="recensione" class="form-label"
                  >Parlaci della tua esperienza:</label
                >
                <textarea
                  v-model="recensione"
                  class="form-control"
                  id="recensione"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn invia-cta">Invia</button>
            </form>
          </div>
          <div class="col-md-4 col-sm-12 mt-3 testo-form">
            <h3>Dicono di noi</h3>
            <div v-if="reviews.length > 0">
              <div
                v-for="(review, index) in reviews"
                :key="index"
                class="review-item"
              >
                <p>
                  <span class="testo-via">{{ review.nome }}</span> dice:
                </p>
                <p>{{ review.testo }}</p>
              </div>
            </div>
            <p v-else style="text-align: center">
              Nessuna recensione inserita.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      aboutCover: "about.jpg",
      nomeRecensione: "",
      recensione: "",
    };
  },
  computed: {
    ...mapGetters(["allReviews"]), // Collega il getter per ottenere le recensioni
    reviews() {
      return this.allReviews; // Restituisce tutte le recensioni dallo stato
    },
  },
  methods: {
    ...mapActions(["addReview"]), // Collega l'azione per aggiungere una recensione
    creaRecensione() {
      // Crea una nuova recensione
      const nuovaRecensione = {
        nome: this.nomeRecensione,
        testo: this.recensione,
      };
      this.addReview(nuovaRecensione); // Aggiunge la recensione allo stato
      this.nomeRecensione = ""; // Resetta il campo nome
      this.recensione = ""; // Resetta il campo recensione
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1em !important;
}

h2 {
  text-align: center;
  margin-bottom: 1em;
}
.about-cover {
  height: 300px;
  object-fit: cover;
  object-position: 50% 88%;
}
.sezione-testo {
  margin: 0 auto;
  width: 50%;
  text-align: center;
}

h3 {
  margin-top: 1em !important;
  color: #800000 !important;
}

.testo-form,
.testo-contatti {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 18px;
  color: #1a1a1a !important;
}

.testo-via {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px !important;
  text-align: center;
  margin-top: 0.5em;
  color: #982b1c;
}

.invia-cta {
  background-color: #982b1c !important;
  color: #f2e8c6 !important;
  font-family: "New Amsterdam", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 24px !important;
  margin-top: 1em;
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.invia-cta:hover {
  background-color: rgba(82, 13, 11, 0.9) !important;
}

@media only screen and (max-width: 768px) {
  .sezione-testo {
    width: 80%;
  }
}
</style>
