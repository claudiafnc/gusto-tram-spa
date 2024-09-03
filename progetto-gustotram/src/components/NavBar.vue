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
        <ul class="navbar-nav">
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

        <!-- Logo al centro -->
        <a class="navbar-brand mx-auto" href="#">slurp</a>
        <!-- aggiungere immagine -->

        <!-- Menu destro -->
        <ul class="navbar-nav">
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

<script>
export default {};
</script>
