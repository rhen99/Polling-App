<template>
  <div class="row">
    <div class="col">
      <div class="card mx-auto">
        <div class="card-body">
          <div class="d-grid gap-3 mt-3">
            <button @click="handleSignInWithGoogle" class="btn btn-primary">
              <i class="bi bi-google"></i> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithGoogle } from "../services/authService";
export default {
  name: "Home",
  methods: {
    handleSignInWithGoogle(e) {
      e.preventDefault();
      signInWithGoogle()
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
@media (min-width: 1100px) {
  .card {
    width: 60%;
  }
}
</style>
