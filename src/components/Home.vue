<template>
  <div class="row">
    <div class="col">
      <div class="card mx-auto">
        <div class="card-body">
          <div class="d-grid gap-3 mt-3">
            <button class="btn btn-primary">
              <i class="bi bi-google"></i> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
@media (min-width: 1100px) {
  .card {
    width: 60%;
  }
}
</style>
