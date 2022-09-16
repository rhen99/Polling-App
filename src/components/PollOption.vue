<template>
  <h6>{{ option.text }}</h6>
  <div class="progress" style="height: 30px">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: `${getProgressPercentage}%` }"
      :aria-valuenow="getProgressPercentage"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {{ getProgressPercentage }}%
    </div>
  </div>
  <span>{{ option.votes }} votes</span>
</template>

<script>
export default {
  name: "PollOption",
  props: {
    option: Object,
    totalVotes: Number,
  },
  computed: {
    getProgressPercentage() {
      return Math.round((this.option.votes / this.totalVotes) * 100);
    },
  },
};
</script>

<style>
.voted {
  background-color: #d8d7d7;
}
</style>
