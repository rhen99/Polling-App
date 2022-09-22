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
import { getPollData, updatePollVotesData } from "../services/pollSevice";
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
  async created() {
    this.poll = await getPollData(this.$route.params.id);
    if (localStorage.getItem(this.poll.id)) {
      this.isVoted = true;
      this.voted = localStorage.getItem(this.poll.id);
    }
  },
  methods: {
    async handleVote(id, e) {
      e.preventDefault();

      try {
        const updatedOptions = this.poll.options.map((option) =>
          option.id === id ? { ...option, votes: option.votes + 1 } : option
        );

        const updatedPoll = {
          ...this.poll,
          options: updatedOptions,
          total_votes: this.poll.total_votes + 1,
        };
        await updatePollVotesData(this.poll.id, updatedPoll);

        this.poll = updatedPoll;

        this.isVoted = true;
        this.voted = id;
        localStorage.setItem(this.poll.id, id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.hasVoted {
  background-color: hsl(224, 87%, 90%) !important;
}
</style>
