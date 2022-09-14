<template>
  <Header />
  <router-view></router-view>
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
