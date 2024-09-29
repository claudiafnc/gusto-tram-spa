<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavBar></NavBar>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
        <!-- view -->
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <FooterBar></FooterBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style></style>
