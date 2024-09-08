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

      <!-- Contenuto del menu collassabile -->
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
        <!-- Menu sinistro -->
        <ul class="navbar-nav sinistra">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'menu' }" class="nav-link"
              >MENU</router-link
            >
          </li>
        </ul>

        <!-- Logo centrale, che rimanda alla home -->
        <router-link :to="{ name: 'home' }" class="navbar-brand mx-auto"
          ><img
            src="@/assets/images/logo-slurp.png"
            alt="logo"
            width="100"
            height="85"
        /></router-link>

        <!-- Menu destro -->
        <ul class="navbar-nav destra">
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'prenota' }" class="nav-link"
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
  color: #F2E8C6;
}

.nav-link:hover{
  text-decoration: underline;
}

.sinistra li:last-child {
  margin-left: 6em;
}

.destra li:first-child {
  margin-right: 6em;
}

@media only screen and (max-width: 992px) {
  .sinistra li:last-child {
    margin-left: 0;
  }

  .destra li:first-child {
    margin-right: 0;
  }

  img{
    display:none;
  }
}
</style>

<script>
export default {};
</script>
