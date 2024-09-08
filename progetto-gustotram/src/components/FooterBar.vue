<template>
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link px-2 text-muted"
          >HOME</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'menu' }" class="nav-link px-2 text-muted"
          >MEN&Ugrave</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about' }" class="nav-link px-2 text-muted"
          >ABOUT</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'prenota' }" class="nav-link px-2 text-muted"
          >PRENOTA</router-link
        >
      </li>
    </ul>
    <p class="text-center text-muted testo-copyright">
      © Copyright - SLURP! SRL
    </p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #800000 !important;
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
}
.nav-link {
  color: #f2e8c6;
}
.nav-item {
  margin-right: 30px;
  margin-left: 30px;
}
.testo-copyright {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 450;
}

.text-muted {
  color: rgb(253, 239, 211) !important;
}
</style>

<script>
export default {};
</script>
