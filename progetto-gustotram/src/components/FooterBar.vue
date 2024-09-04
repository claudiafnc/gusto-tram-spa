<template>
<footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link px-2 text-muted"
              >HOME</router-link
            ></li>
      <li class="nav-item"><router-link :to="{ name: 'menu' }" class="nav-link px-2 text-muted"
              >MENU</router-link
            ></li>
      <li class="nav-item"><router-link :to="{ name: 'about' }" class="nav-link px-2 text-muted"
              >ABOUT</router-link
            ></li>
      <li class="nav-item"><router-link :to="{ name: 'prenota' }" class="nav-link px-2 text-muted"
              >PRENOTA</router-link
            ></li>
    </ul>
    <p class="text-center text-muted">© Copyright - SLURP! SRL</p>
  </footer>
</template>

<script>
export default {};
</script>
