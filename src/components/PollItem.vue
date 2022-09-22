<template>
  <div class="flex-grow-1">
    <h4>{{ poll.title }}</h4>
    <span>{{ poll.total_votes }} votes</span>
  </div>
  <div class="align-self-center">
    <router-link :to="`/poll/${poll.id}`" class="btn btn-primary btn-sm me-2"
      >View Poll</router-link
    >
    <button class="btn btn-danger btn-sm" v-if="poll.status === 'ended'">
      Delete Poll
    </button>
  </div>
</template>

<script>
export default {
  name: "PollItem",
  props: {
    poll: Object,
  },
};
</script>

<style></style>
