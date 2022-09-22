<template>
  <div class="flex-grow-1">
    <h4>{{ poll.title }}</h4>
    <span>{{ poll.total_votes }} votes</span>
  </div>
  <div class="align-self-center">
    <router-link :to="`/poll/${poll.id}`" class="btn btn-primary btn-sm me-2"
      >View Poll</router-link
    >
    <button
      class="btn btn-danger btn-sm"
      @click="handleDeletePoll(poll.id)"
      v-if="poll.status === 'ended'"
    >
      Delete Poll
    </button>
  </div>
</template>

<script>
import { deletePollData } from "../services/pollSevice";
export default {
  name: "PollItem",
  props: {
    poll: Object,
  },
  methods: {
    async handleDeletePoll(id) {
      await deletePollData(id);
      this.$emit("handle-delete", id);
    },
  },
  emits: ["handle-delete"],
};
</script>

<style></style>
