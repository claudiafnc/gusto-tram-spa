<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img
          v-bind:src="require('@/assets/images/' + menuCover)"
          alt="cibo"
          class="img-fluid w-100 menu-cover"
        />
      </div>
      <div class="row">
        <div class="col">
          <h1>MENÙ</h1>
          <p class="sezione-testo">
            Da Slurp, la cucina è un viaggio tra sapori autentici, tradizione e
            creatività. Ogni piatto è pensato per offrire un'esperienza unica,
            con ingredienti freschi e di qualità che esaltano la nostra passione
            per il buon cibo. Che tu sia un amante della cucina classica o
            preferisca piatti vegetariani, abbiamo creato due menù dedicati per
            soddisfare ogni palato.
          </p>
        </div>
      </div>
    </div>
    <div>
      <ul class="nav">
        <li class="nav-item">
          <router-link
            :to="{ name: 'menuClassico' }"
            class="nav-link"
            exact-active-class="active"
            >MEN&Ugrave; CLASSICO</router-link
          >
        </li>
        <li class="separatore" style="margin-left: 1em; margin-right: 1em">
          |
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'menuVeg' }"
            class="nav-link"
            exact-active-class="active"
            >MEN&Ugrave; VEGETARIANO</router-link
          >
        </li>
      </ul>
    </div>
    <div class="view-menu">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuCover: "menu-cover.jpg",
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1em !important;
}

.sezione-testo {
  margin: 0 auto;
  width: 50%;
  text-align: center;
}

ul {
  margin-top: 2em;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}
.separatore {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 42px;
  color: rgba(128, 0, 0, 0.5);
  text-decoration: none;
}
.nav-item,
.nav-link {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  color: rgba(128, 0, 0, 0.5);
  text-decoration: none;
}
.nav-item li:first-child {
  margin-right: 1em;
  text-align: right;
}
.nav-item li:last-child {
  margin-left: 1em;
  text-align: left;
}

.nav-link:hover,
.nav-link.active,
.nav-link:focus {
  color: #800000;
}

.menu-cover {
  height: 300px;
  object-fit: cover;
}

@media only screen and (max-width: 992px) {
  /* larghezza inferiore o uguale a 992 */
  ul {
    display: block;
    text-align: center;
  }

  .separatore {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .sezione-testo {
    width: 80%;
  }
}
</style>
