<template>
  <div class="row mb-3">
    <div class="col text-end" v-if="poll.status === 'ongoing'">
      <button
        class="btn btn-danger"
        v-if="user && user.uid === poll.user_id"
        @click="handleStatus"
      >
        End Poll
      </button>
    </div>
    <div class="col" v-else>
      <div class="alert alert-success">
        This poll has ended with {{ poll.total_votes }} total votes
      </div>
    </div>
  </div>
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
          :class="{
            hasVoted: voted == option.id,
            disabled: isVoted || hasEnded,
          }"
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
import { getPollData, updatePollData } from "../services/pollSevice";
import { getCurrentUser } from "../services/authService";
export default {
  name: "Poll",
  components: {
    PollOption,
  },
  data() {
    return {
      voted: null,
      isVoted: false,
      hasEnded: false,
      poll: {},
      user: null,
    };
  },
  async created() {
    this.user = getCurrentUser();
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
        await updatePollData(this.poll.id, updatedPoll);

        this.poll = updatedPoll;

        this.isVoted = true;
        this.voted = id;
        localStorage.setItem(this.poll.id, id);
      } catch (error) {
        console.log(error);
      }
    },
    async handleStatus() {
      try {
        const updatedPoll = {
          ...this.poll,
          status: "ended",
        };
        await updatePollData(this.poll.id, updatedPoll);

        this.poll = updatedPoll;

        this.hasEnded = true;
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
