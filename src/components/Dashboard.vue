<template>
  <div class="row">
    <div class="col">
      <h1>List of Polls</h1>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <PollList />
    </div>
  </div>
</template>

<script>
import PollList from "./PollList.vue";
export default {
  name: "Dashboard",
  components: {
    PollList,
  },
};
</script>

<style></style>
