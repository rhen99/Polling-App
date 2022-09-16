<template>
  <ul class="list-group">
    <li class="list-group-item d-flex" v-for="poll in polls" :key="poll.id">
      <PollItem :poll="poll" />
    </li>
  </ul>
</template>

<script>
import PollItem from "./PollItem.vue";
export default {
  name: "PollList",
  components: {
    PollItem,
  },
  props: {
    polls: Array,
  },
};
</script>

<style></style>
