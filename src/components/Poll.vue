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
          :class="{ voted: voted == option.id, disabled: isVoted }"
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
      poll: {},
    };
  },
  created() {
    if (this.$route.params.id) {
      const index = parseInt(this.$route.params.id);
      this.poll = this.polls[index];
    }
    if (localStorage.getItem("vote")) {
      this.voted = localStorage.getItem("vote");
      this.isVoted = true;
    }
  },
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
.voted {
  background-color: hsl(224, 87%, 95%);
}
</style>
