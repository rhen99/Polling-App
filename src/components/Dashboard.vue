<template>
  <template v-if="!isLoading">
    <div class="row">
      <div class="col">
        <h1>List of Polls</h1>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createPollModal"
        >
          Create A Poll
        </button>
        <CreatePollModal @create-poll="createPoll" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col" v-if="polls.length > 0">
        <PollList :polls="polls" @delete-poll="deletePoll" />
      </div>

      <div class="col text-center" v-else>
        <div class="card">
          <div class="card-body">You have no polls found.</div>
        </div>
      </div>
    </div>
  </template>
  <div class="row" v-else>
    <div class="col text-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import PollList from "./PollList.vue";
import CreatePollModal from "./CreatePollModal.vue";
import { getPollsData } from "../services/pollSevice";
export default {
  name: "Dashboard",
  components: {
    PollList,
    CreatePollModal,
  },
  data() {
    return {
      polls: [],
      isLoading: true,
    };
  },
  methods: {
    createPoll(newPoll) {
      this.polls = [newPoll, ...this.polls];
    },
    deletePoll(id) {
      this.polls = this.polls.filter((poll) => poll.id !== id);
    },
  },
  async created() {
    this.polls = await getPollsData();
    this.isLoading = false;
  },
};
</script>

<style></style>
