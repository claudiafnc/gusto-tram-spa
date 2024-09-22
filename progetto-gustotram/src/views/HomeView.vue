<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>CENE IN MOVIMENTO</h1>
        <p class="sezione-testo">
          Lasciati incantare dalla magia della città mentre gusti i piatti
          tipici piemontesi, preparati con cura e passione. Ogni boccone è un
          viaggio nei sapori autentici del Piemonte, accompagnato da vini
          pregiati e da panorami mozzafiato. Un'avventura culinaria che ti
          resterà nel cuore.
        </p>
        <div>
          <h2>L'EXPERIENCE</h2>
          <p class="testo-base">
            Salta a bordo di Gusto Tram e lasciati trasportare in un viaggio
            gastronomico senza eguali. Scopri l’emozione di cenare in movimento,
            mentre il tram attraversa le strade torinesi, offrendo una vista in
            continua evoluzione della città. Vivi la gioia di un’esperienza
            culinaria interattiva, dove ogni dettaglio, dalla selezione dei
            piatti al servizio elegante, è pensato per sorprendere e deliziare.
          </p>
          <router-link :to="{ name: 'prenota' }"
            ><button type="button" class="btn cta-prenota">
              PRENOTA
            </button></router-link
          >
        </div>
      </div>
      <div class="col-md-6">
        <img
          v-bind:src="require('@/assets/images/' + copertina)"
          alt="tram"
          class="img-fluid img-tram-home"
        />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <h3>SFOGLIA LA GALLERY</h3>
      <div class="col-12 col-md-8">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" :class="{ active: index === 0 }">
              <img v-bind:src="require('@/assets/images/' + image)" class="d-block w-100" v-bind:alt="'immagine carosello ' + (index + 1)" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <h3>CONSULTA I MEN&Ugrave;</h3>
      <div class="col col-md-4">
        <div class="card" style="margin: 3em auto">
          <img v-bind:src="require('@/assets/images/' + cardImages[0])" class="card-img-top" alt="menu classico" />
          <div class="card-body">
            <h5 class="card-title titolo-card">Men&Ugrave; classico</h5>
            <p class="card-text">
              Scopri il nostro Menù Classico, un viaggio attraverso i piatti
              tradizionali piemontesi preparati con ingredienti locali. Assapora
              le autentiche ricette che celebrano la cucina regionale ad ogni
              morso.
            </p>
            <router-link :to="{ name: 'menuClassico' }" class="btn cta-prenota"
              >SCOPRI IL MEN&Ugrave; CLASSICO</router-link
            >
            <!--mettere il link-->
          </div>
        </div>
      </div>
      <div class="col col-md-4">
        <div class="card" style="margin: 3em auto">
        <img v-bind:src="require('@/assets/images/' + cardImages[1])" class="card-img-top" alt="menu classico" />
          <div class="card-body">
            <h5 class="card-title titolo-card">Men&Ugrave; vegetariano</h5>
            <p class="card-text">
              Scopri il nostro Menù Vegano, una selezione creativa e vibrante di
              piatti senza ingredienti animali, che esaltano i sapori naturali
              del Piemonte. Un'opzione gustosa e sostenibile per tutti i palati.
            </p>
            <router-link :to="{ name: 'menuVeg' }" class="btn cta-prenota"
              >SCOPRI IL MEN&Ugrave; VEGETARIANO</router-link
            >
            <!--mettere il link-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Nome dinamico dell'immagine principale
      copertina: 'tram-disegno.png',
      
      // Array per le immagini del carosello
      carouselImages: ['carosello-1.jpg', 'carosello-2.jpg', 'carosello-3.jpg'],
      
      // Array per le immagini delle card
      cardImages: ['menu.jpg', 'menu-veg.jpg']
    };
  }
};
</script>

<style>
h1 {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 52px !important;
  color: #800000 !important;
  margin-top: 2em !important;
  text-align: left;
}

.sezione-testo {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 16px !important;
  color: #1a1a1a !important;
  text-align: left;
}

.testo-base {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-style: normal;
  font-size: 14px !important;
  color: #1a1a1a !important;
  text-align: left;
}

.img-tram-home {
  margin-top: 2em;
}

.cta-prenota {
  background-color: #982b1c !important;
  color: #f2e8c6 !important;
  font-family: "New Amsterdam", sans-serif !important;
  font-weight: 500;
  font-style: normal;
  font-size: 24px !important;
  margin-top: 2em;
  padding-left: 1.5em !important;
  padding-right:1.5em !important;
  transition: background-color 0.3s ease, color 0.3s ease !important; 
}

.cta-prenota:hover {
  background-color: rgba(82, 13, 11, 0.9) !important; /* Colore di sfondo più scuro con trasparenza alta */
}

h2 {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 36px !important;
  color: #982b1c !important;
  margin-top: 2em !important;
  text-align: left;
}

h3 {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px !important;
  color: #982b1c !important;
  margin-top: 4em !important;
  text-align: center;
}

.carousel {
  margin-top: 2em;
}

.titolo-card {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 28px !important;
  color: #982b1c !important;
}
</style>
