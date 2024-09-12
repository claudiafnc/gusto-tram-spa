<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>PRENOTA</h1>
        <form @submit.prevent="creaPrenotazione">
          <!-- Nome e Cognome -->
          <div class="mb-3">
            <label for="nome" class="form-label">Nome e Cognome</label>
            <input type="text" v-model="nome" class="form-control" id="nome" required>
          </div>
          
          <!-- Numero di Ospiti -->
          <div class="mb-3">
            <label for="ospiti" class="form-label">Numero di Ospiti</label>
            <div class="d-flex align-items-center">
              <input type="number" v-model.number="ospiti" class="form-control me-2" id="ospiti" min="1" required style="width: 100px;">
              <button type="button" @click="decrementaOspiti" class="btn btn-outline-secondary">-</button>
              <button type="button" @click="incrementaOspiti" class="btn btn-outline-secondary ms-2">+</button>
            </div>
          </div>
          
          <!-- Menu Veg e Menu Classico -->
          <div class="mb-3 d-flex">
            <div class="me-3">
              <label for="menuVeg" class="form-label">Menu Veg</label>
              <div class="d-flex align-items-center">
                <input type="number" v-model.number="menuVeg" class="form-control me-2" id="menuVeg" min="0" required style="width: 100px;">
                <button type="button" @click="decrementaMenuVeg" class="btn btn-outline-secondary">-</button>
                <button type="button" @click="incrementaMenuVeg" class="btn btn-outline-secondary ms-2">+</button>
              </div>
            </div>
            <div>
              <label for="menuClassico" class="form-label">Menu Classico</label>
              <div class="d-flex align-items-center">
                <input type="number" v-model.number="menuClassico" class="form-control me-2" id="menuClassico" min="0" required style="width: 100px;">
                <button type="button" @click="decrementaMenuClassico" class="btn btn-outline-secondary">-</button>
                <button type="button" @click="incrementaMenuClassico" class="btn btn-outline-secondary ms-2">+</button>
              </div>
            </div>
          </div>
          
          <!-- Data e Slot Orario -->
          <div class="mb-3 d-flex">
            <div class="me-3">
              <label for="data" class="form-label">Data</label>
              <input type="date" v-model="data" class="form-control" id="data" required>
            </div>
            <div>
              <label for="slotOrario" class="form-label">Slot Orario</label>
              <div class="d-flex align-items-center">
                <select v-model="slotOrario" class="form-control" id="slotOrario" required style="width: 100px;">
                  <option value="13:00">13:00</option>
                  <option value="19:00">19:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Numero di Telefono -->
          <div class="mb-3">
            <label for="telefono" class="form-label">Numero di Telefono</label>
            <input type="tel" v-model="telefono" class="form-control" id="telefono" required style="width: 200px;" pattern="[0-9]*">
          </div>
          
          <!-- Note Aggiuntive -->
          <div class="mb-3">
            <label for="note" class="form-label">Note Aggiuntive</label>
            <textarea v-model="note" class="form-control" id="note" rows="3"></textarea>
          </div>
          
          <!-- Pulsanti Azione -->
          <div class="mb-3">
            <button type="submit" class="btn prenotazione-cta">Crea Prenotazione</button>
            <button type="button" @click="annullaPrenotazione" class="btn prenotazione-cta-light ms-2">Annulla</button>
          </div>
        </form>

        <div class="mt-4" id="prenotazioni-section">
          <h2>Le tue prenotazioni</h2>
          <!-- Verifica se ci sono prenotazioni -->
          <div v-if="prenotazioni.length === 0">
            <p class="no-prenotazione">Nessuna prenotazione</p>
          </div>
          <div v-else>
            <div v-for="(prenotazione, index) in prenotazioni" :key="index" class="card mb-3">
              <div class="card-body">
                <!-- Icona di eliminazione -->
                <button v-if="prenotazione.confermata" @click="eliminaPrenotazione(index)" class="btn btn-link btn-delete">
                  <i class="fas fa-trash-alt"></i>
                </button>

                <h5 class="card-title">{{ prenotazione.nome }}</h5>
                <p class="card-text">Posti: {{ prenotazione.posti }}</p>
                <p class="card-text">Menu Veg: {{ prenotazione.menuVeg }}</p>
                <p class="card-text">Menu Classico: {{ prenotazione.menuClassico }}</p>
                <p class="card-text">Data: {{ prenotazione.data }}</p>
                <p class="card-text">Slot Orario: {{ prenotazione.slotOrario }}</p>
                <p class="card-text">Numero di Telefono: {{ prenotazione.telefono }}</p>
                <p class="card-text">Note Aggiuntive: {{ prenotazione.note }}</p>
                <div class="d-flex pulsanti-conferma">
                  <button v-if="!prenotazione.confermata" @click="confermaPrenotazione(index)" class="btn me-2 prenotazione-cta">
                    Conferma
                  </button>
                  <button v-if="!prenotazione.confermata" @click="eliminaPrenotazione(index)" class="btn prenotazione-cta-light">
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
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      nome: '',
      ospiti: 1,
      menuVeg: 0,
      menuClassico: 0,
      data: '',
      slotOrario: '13:00',
      telefono: '',
      note: ''
    };
  },
  computed: {
    ...mapState(['prenotazioni'])
  },
  methods: {
    ...mapActions(['addPrenotazione', 'confirmPrenotazione', 'deletePrenotazione']),
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
        confermata: false
      };
      this.addPrenotazione(nuovaPrenotazione);
      // Resetta i campi del form
      this.nome = '';
      this.ospiti = 1;
      this.menuVeg = 0;
      this.menuClassico = 0;
      this.data = '';
      this.slotOrario = '13:00';
      this.telefono = '';
      this.note = '';
      // Scrolla verso la sezione delle prenotazioni
      this.$nextTick(() => {
        const section = document.getElementById('prenotazioni-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    confermaPrenotazione(index) {
      this.confirmPrenotazione(index);
    },
    eliminaPrenotazione(index) {
      this.deletePrenotazione(index);
    },
    annullaPrenotazione() {
      // Resetta i campi del form
      this.nome = '';
      this.ospiti = 1;
      this.menuVeg = 0;
      this.menuClassico = 0;
      this.data = '';
      this.slotOrario = '13:00';
      this.telefono = '';
      this.note = '';
    },
    incrementaOspiti() {
      this.ospiti++;
    },
    decrementaOspiti() {
      if (this.ospiti > 1) this.ospiti--;
    },
    incrementaMenuVeg() {
      this.menuVeg++;
    },
    decrementaMenuVeg() {
      if (this.menuVeg > 0) this.menuVeg--;
    },
    incrementaMenuClassico() {
      this.menuClassico++;
    },
    decrementaMenuClassico() {
      if (this.menuClassico > 0) this.menuClassico--;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 80%;
}
h1 {
  text-align: center;
}

.mb-3, .no-prenotazione, .card-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 18px;
  color: #1a1a1a !important;
}

.prenotazione-cta {
  background-color: #982b1c !important; /* Colore di sfondo originale */
  color: #f2e8c6 !important; /* Colore del testo */
  font-family: "New Amsterdam", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 24px !important;
  margin-top: 1em;
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
  border: none; /* Rimuove il bordo predefinito del pulsante */
  border-radius: 5px; /* Aggiunge bordi arrotondati */
  transition: background-color 0.3s ease, color 0.3s ease; /* Aggiunge una transizione morbida per entrambi i colori */
}

.prenotazione-cta:hover {
  background-color: rgba(82, 13, 11, 0.9) !important; /* Colore di sfondo più scuro con trasparenza alta */
}

.prenotazione-cta-light {
  background-color: #f2e8c6 !important; /* Colore di sfondo originale chiaro */
  color: #982b1c !important; /* Colore del testo originale scuro */
  font-family: "New Amsterdam", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 24px !important;
  margin-top: 1em;
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
  border: none; /* Rimuove il bordo predefinito del pulsante */
  border-radius: 5px; /* Aggiunge bordi arrotondati */
  transition: background-color 0.3s ease, color 0.3s ease; /* Aggiunge una transizione morbida per entrambi i colori */
}

.prenotazione-cta-light:hover {
  background-color: rgba(152, 43, 28, 0.8) !important; /* Colore di sfondo scuro con trasparenza alta durante l'hover */
  color: #f2e8c6 !important; /* Colore del testo chiaro durante l'hover */
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
  color: #800000; /* Colore del cestino all'hover */
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