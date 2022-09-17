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
export default {
  name: "Dashboard",
  components: {
    PollList,
    CreatePollModal,
  },
  data() {
    return {
      polls: [
        {
          id: 0,
          title: "Poll 1",
          description: "Poll Description",
          total_votes: 120,
          options: [
            {
              id: 0,
              text: "Option 1",
              votes: 40,
            },
            {
              id: 1,
              text: "Option 2",
              votes: 40,
            },
            {
              id: 2,
              text: "Option 3",
              votes: 40,
            },
          ],
        },
        {
          id: 1,
          title: "Poll 2",
          description: "Poll Description",
          total_votes: 0,
          options: [
            {
              id: 0,
              text: "Option 1",
              votes: 0,
            },
            {
              id: 1,
              text: "Option 2",
              votes: 0,
            },
            {
              id: 2,
              text: "Option 3",
              votes: 0,
            },
          ],
        },
        {
          id: 2,
          title: "Poll 3",
          description: "Poll Description",
          total_votes: 0,
          options: [
            {
              id: 0,
              text: "Option 1",
              votes: 0,
            },
            {
              id: 1,
              text: "Option 2",
              votes: 0,
            },
            {
              id: 2,
              text: "Option 3",
              votes: 0,
            },
          ],
        },
      ],
    };
  },
  methods: {
    createPoll(newPoll) {
      this.polls = [newPoll, ...this.polls];
    },
  },
};
</script>

<style></style>
