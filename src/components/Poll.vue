<template>
  <div class="row">
    <div class="col">
      <h1>{{ poll.title }}</h1>
      <p>
        {{ poll.description }}
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action"
          v-for="option in poll.options"
          :class="{ hasVoted: voted == option.id, disabled: isVoted }"
          @click="handleVote(option.id, $event)"
          :key="option.id"
        >
          <PollOption :option="option" :totalVotes="poll.total_votes" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PollOption from "./PollOption.vue";
export default {
  name: "Poll",
  components: {
    PollOption,
  },
  data() {
    return {
      voted: null,
      isVoted: false,
      poll: {},
    };
  },
  created() {},
  methods: {
    handleVote(id, e) {
      e.preventDefault();
      this.isVoted = true;
      this.voted = id;
      localStorage.setItem("vote", id);
    },
  },
};
</script>

<style scoped>
.hasVoted {
  background-color: hsl(224, 87%, 90%) !important;
}
</style>
