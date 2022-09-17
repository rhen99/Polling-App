<template>
  <div
    class="modal fade"
    id="createPollModal"
    tabindex="-1"
    aria-labelledby="createPollModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createPollModalLabel">Create a poll</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="title" class="form-label">Poll Title</label>
              <input
                type="text"
                v-model="title"
                class="form-control"
                id="title"
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label"
                >Poll Description</label
              >
              <textarea
                class="form-control"
                id="description"
                rows="3"
                v-model="description"
              ></textarea>
            </div>
            <form @submit="addOption">
              <div class="d-flex mb-3">
                <div class="flex-grow-1 pe-2">
                  <label for="option" class="form-label">Option Text</label>
                  <input
                    type="text"
                    class="form-control"
                    id="option"
                    v-model="optionText"
                  />
                </div>
                <div class="align-self-end">
                  <button class="btn btn-primary">Add Option</button>
                </div>
              </div>
              <div class="mb-3">
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="(option, index) in pollOptions"
                    :key="index"
                  >
                    {{ option.text }}
                  </li>
                </ul>
              </div>
            </form>
            <button type="submit" class="btn btn-primary">Create Poll</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePollModal",
  data() {
    return {
      title: "",
      description: "",
      optionText: "",
      pollOptions: [],
      errorMessage: "",
    };
  },
  methods: {
    addOption(e) {
      e.preventDefault();
      if (this.optionText !== "") {
        this.pollOptions.push({ text: this.optionText });
        this.optionText = "";
      }
    },
  },
};
</script>

<style></style>
