<template>
  <div class="flex-grow-1">
    <h4>{{ poll.title }}</h4>
    <span>{{ poll.total_votes }} votes</span>
  </div>
  <div class="align-self-center">
    <router-link :to="`/poll/${poll.id}`" class="btn btn-primary btn-sm"
      >View Poll</router-link
    >
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
