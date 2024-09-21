<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- Toggle button per il menu in modalità mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul
          class="navbar-nav d-flex w-100 justify-content-between align-items-center"
        >
          <!-- Menu sinistro -->
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'menu' }" class="nav-link"
              >MEN&Ugrave;</router-link
            >
          </li>

          <!-- Logo centrale -->
          <li class="nav-item mx-auto">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
              <img
                src="@/assets/images/logo-slurp.png"
                alt="logo"
                width="110"
                height="95"
              />
            </router-link>
          </li>

          <!-- Menu destro -->
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'prenota' }"
              class="nav-link btn cta-prenota-navbar"
              >PRENOTA</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #800000 !important;
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
}

.nav-link {
  color: #f2e8c6;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: underline;
  color: #f2e8c6;
}

.navbar-toggler-icon {
  filter: invert(100%);
}

.navbar-toggler {
  border-color: #f2e8c6;
}

.navbar-toggler:focus {
  outline: none;
  box-shadow: none;
}

.cta-prenota-navbar {
  background-color: #f2e8c6 !important; 
  color: #800000 !important; 
  font-family: "New Amsterdam", sans-serif !important;
  font-weight: 400;
  font-style: normal;
  font-size: 32px !important;
  width: 200px !important;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
}



.navbar-nav {
  width: 100%;
}

.navbar-nav li {
  flex: 1; /* Ogni elemento del menu occupa lo stesso spazio */
  text-align: center;
}

.navbar-brand {
  display: block;
}

@media only screen and (max-width: 992px) {
  img {
    display: none;
  }
}
</style>

<script>
export default {};
</script>
