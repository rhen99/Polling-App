<template>
  <a href="#" class="list-group-item list-group-item-action">
    <h6>Option Title</h6>
    <div class="progress" style="height: 30px">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "PollOption",
};
</script>

<style>
.voted {
  background-color: #d8d7d7;
}
</style>
