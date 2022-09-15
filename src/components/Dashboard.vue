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
      <CreatePollModal />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <PollList />
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
};
</script>

<style></style>
