<template>
  <div class="row">
    <div class="col">
      <h1>Poll Title</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iste,
        autem dolor nesciunt necessitatibus quibusdam similique error totam.
        Expedita, incidunt? Ipsum architecto debitis corporis pariatur nesciunt
        aperiam commodi delectus officiis!
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="list-group">
        <PollOption />
        <PollOption />
        <PollOption />
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
};
</script>

<style></style>
