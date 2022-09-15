<template>
  <Header />
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.bg-green {
  background-color: #009200;
}
</style>
