<template>
  <ul class="list-group">
    <li class="list-group-item d-flex" v-for="poll in polls" :key="poll.id">
      <PollItem
        :poll="poll"
        @handle-delete="(id) => $emit('delete-poll', id)"
      />
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
  emits: ["delete-poll"],
};
</script>

<style></style>
