<template>
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
    <div class="col">
      <PollList :polls="polls" />
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
    };
  },
  methods: {
    createPoll(newPoll) {
      this.polls = [newPoll, ...this.polls];
    },
  },
  async created() {
    this.polls = await getPollsData();
  },
};
</script>

<style></style>
