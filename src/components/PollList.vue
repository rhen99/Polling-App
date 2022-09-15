<template>
  <ul class="list-group">
    <PollItem />
    <PollItem />
    <PollItem />
    <PollItem />
  </ul>
</template>

<script>
import PollItem from "./PollItem.vue";
export default {
  name: "PollList",
  components: {
    PollItem,
  },
};
</script>

<style></style>
