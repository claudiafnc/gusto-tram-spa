<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <h1>PRENOTA</h1>
        <form @submit.prevent="creaPrenotazione">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome e Cognome</label>
            <input
              type="text"
              v-model="nome"
              class="form-control"
              id="nome"
              required
            />
          </div>

          <div class="mb-3">
            <label for="ospiti" class="form-label">Numero di Ospiti</label>
            <div class="d-flex align-items-center">
              <input
                type="number"
                v-model.number="ospiti"
                class="form-control me-2"
                id="ospiti"
                min="1"
                required
                style="width: 100px"
              />
              <button
                type="button"
                @click="decrementaOspiti"
                class="btn btn-outline-secondary"
              >
                -
              </button>
              <button
                type="button"
                @click="incrementaOspiti"
                class="btn btn-outline-secondary ms-2"
              >
                +
              </button>
            </div>
          </div>

          <div class="mb-3">
            <label for="menuVeg" class="form-label">Menu Vegetariano</label>
            <div class="d-flex align-items-center">
              <input
                type="number"
                v-model.number="menuVeg"
                class="form-control me-2"
                id="menuVeg"
                min="0"
                required
                style="width: 100px"
              />
              <button
                type="button"
                @click="decrementaMenuVeg"
                class="btn btn-outline-secondary"
              >
                -
              </button>
              <button
                type="button"
                @click="incrementaMenuVeg"
                class="btn btn-outline-secondary ms-2"
              >
                +
              </button>
            </div>
          </div>

          <div class="mb-3">
            <label for="menuClassico" class="form-label">Menu Classico</label>
            <div class="d-flex align-items-center">
              <input
                type="number"
                v-model.number="menuClassico"
                class="form-control me-2"
                id="menuClassico"
                min="0"
                required
                style="width: 100px"
              />
              <button
                type="button"
                @click="decrementaMenuClassico"
                class="btn btn-outline-secondary"
              >
                -
              </button>
              <button
                type="button"
                @click="incrementaMenuClassico"
                class="btn btn-outline-secondary ms-2"
              >
                +
              </button>
            </div>
          </div>

          <div class="mb-3 d-flex">
            <div class="me-3">
              <label for="data" class="form-label">Data</label>
              <input
                type="date"
                v-model="data"
                class="form-control"
                id="data"
                required
              />
            </div>
            <div>
              <label for="slotOrario" class="form-label">Slot Orario</label>
              <select
                v-model="slotOrario"
                class="form-control"
                id="slotOrario"
                required
                style="width: 100px"
              >
                <option value="13:00">13:00</option>
                <option value="19:00">19:00</option>
                <option value="21:00">21:00</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="telefono" class="form-label">Numero di Telefono</label>
            <input
              type="tel"
              v-model="telefono"
              class="form-control"
              id="telefono"
              required
              style="width: 200px"
              pattern="[0-9]*"
            />
          </div>

          <div class="mb-3">
            <label for="note" class="form-label">Note Aggiuntive</label>
            <textarea
              v-model="note"
              class="form-control"
              id="note"
              rows="3"
            ></textarea>
          </div>

          <div class="mb-3">
            <button type="submit" class="btn prenotazione-cta">
              Crea Prenotazione
            </button>
            <button
              type="button"
              @click="annullaPrenotazione"
              class="btn prenotazione-cta-light ms-2"
            >
              Annulla
            </button>
          </div>
        </form>

        <div class="mt-4" id="prenotazioni-section">
          <h2>Riepilogo delle tue prenotazioni</h2>
          <div v-if="prenotazioni.length === 0">
            <p class="no-prenotazione">-- Nessuna prenotazione --</p>
          </div>
          <div v-else>
            <div
              v-for="(prenotazione, index) in prenotazioni.slice().reverse()"
              :key="index"
              class="card mb-3"
            >
              <div class="card-body">
                <h5 class="card-title">{{ prenotazione.nome }}</h5>
                <p class="card-text">Posti: {{ prenotazione.posti }}</p>
                <p class="card-text">
                  Menu Vegetariano: {{ prenotazione.menuVeg }}
                </p>
                <p class="card-text">
                  Menu Classico: {{ prenotazione.menuClassico }}
                </p>
                <p class="card-text">Data: {{ prenotazione.data }}</p>
                <p class="card-text">
                  Slot Orario: {{ prenotazione.slotOrario }}
                </p>
                <p class="card-text">
                  Numero di Telefono: {{ prenotazione.telefono }}
                </p>
                <p class="card-text">
                  Note Aggiuntive: {{ prenotazione.note }}
                </p>
                <div class="d-flex pulsanti-conferma">
                  <button
                    v-if="!prenotazione.confermata"
                    @click="
                      confermaPrenotazione(prenotazioni.length - 1 - index) // nel v-for index è invertito, occorre invertirlo nuovamente, e per farlo lo si sottrae dall'indice massimo (length-1)
                    "
                    class="btn me-2 prenotazione-cta"
                  >
                    Conferma
                  </button>
                  <button
                    v-if="!prenotazione.confermata"
                    @click="
                      eliminaPrenotazione(prenotazioni.length - 1 - index) // come sopra
                    "
                    class="btn prenotazione-cta-light"
                  >
                    Elimina
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Importa axios

export default {
  data() {
    return {
      nome: "",
      ospiti: 1,
      menuVeg: 0,
      menuClassico: 0,
      data: "",
      slotOrario: "13:00",
      telefono: "",
      note: "",
      prenotazioni: [],
    };
  },

  created() {
    // Effettua la richiesta GET al json-server locale
    axios
      .get("http://localhost:3000/prenotazioni")
      .then((response) => {
        this.prenotazioni = response.data;
      })
      .catch((error) => {
        console.error("Errore nel caricamento delle prenotazioni:", error);
      });
  },
  methods: {
    // crea oggetto prenotazione, aggiunge alla lista locale e invia al server
    creaPrenotazione() {
      const nuovaPrenotazione = {
        nome: this.nome,
        posti: this.ospiti,
        menuVeg: this.menuVeg,
        menuClassico: this.menuClassico,
        data: this.data,
        slotOrario: this.slotOrario,
        telefono: this.telefono,
        note: this.note,
        confermata: false,
      };

      // Invia la nuova prenotazione al server
      axios
        .post("http://localhost:3000/prenotazioni", nuovaPrenotazione)
        .then((response) => {
          // Resetta i campi del form
          this.nome = "";
          this.ospiti = 1;
          this.menuVeg = 0;
          this.menuClassico = 0;
          this.data = "";
          this.slotOrario = "13:00";
          this.telefono = "";
          this.note = "";

          // Aggiungi la nuova prenotazione alla lista locale
          this.prenotazioni.push(response.data);

          // Scrolla verso la sezione delle prenotazioni
          this.$nextTick(() => {
            const section = document.getElementById("prenotazioni-section");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          });
        })
        .catch((error) => {
          console.error("Errore nella creazione della prenotazione:", error);
        });
    },
    confermaPrenotazione(index) {
      const prenotazione = this.prenotazioni[index];

      // Aggiorna il server con la conferma
      axios
        .patch(`http://localhost:3000/prenotazioni/${prenotazione.id}`, {
          confermata: true,
        })
        .then(() => {
          this.prenotazioni[index].confermata = true;
        })
        .catch((error) => {
          console.error("Errore nella conferma della prenotazione:", error);
        });
    },
    eliminaPrenotazione(index) {
      const prenotazione = this.prenotazioni[index];

      // Elimina dal server
      axios
        .delete(`http://localhost:3000/prenotazioni/${prenotazione.id}`)
        .then(() => {
          this.prenotazioni.splice(index, 1);
        })
        .catch((error) => {
          console.error("Errore nell'eliminazione della prenotazione:", error);
        });
    },
    annullaPrenotazione() {
      this.nome = "";
      this.ospiti = 1;
      this.menuVeg = 0;
      this.menuClassico = 0;
      this.data = "";
      this.slotOrario = "13:00";
      this.telefono = "";
      this.note = "";
    },
    incrementaOspiti() {
      this.ospiti++;
    },
    decrementaOspiti() {
      if (this.ospiti > 1) this.ospiti--;
    },
    incrementaMenuVeg() {
      if (this.menuVeg + this.menuClassico < this.ospiti) this.menuVeg++;
    },
    decrementaMenuVeg() {
      if (this.menuVeg > 0) this.menuVeg--;
    },
    incrementaMenuClassico() {
      if (this.menuVeg + this.menuClassico < this.ospiti) this.menuClassico++;
    },
    decrementaMenuClassico() {
      if (this.menuClassico > 0) this.menuClassico--;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 80%;
}
h1 {
  text-align: center;
}
.mb-3,
.no-prenotazione,
.card-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 18px;
  color: #1a1a1a !important;
}
.prenotazione-cta {
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
.prenotazione-cta:hover {
  background-color: rgba(82, 13, 11, 0.9) !important;
}
.prenotazione-cta-light {
  background-color: #f2e8c6 !important;
  color: #982b1c !important;
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
.prenotazione-cta-light:hover {
  background-color: rgba(152, 43, 28, 0.8) !important;
  color: #f2e8c6 !important;
}
.no-prenotazione {
  color: #6c757d;
}
.card {
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.btn-delete {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #dc3545;
  transition: color 0.3s ease;
}
.btn-delete:hover {
  color: #800000;
}
.pulsanti-conferma {
  display: inline;
}

@media only screen and (max-width: 528px) {
  .prenotazione-cta-light {
    margin-left: 0 !important;
  }
}
</style>
