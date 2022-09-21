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
    async handleSignInWithGoogle(e) {
      e.preventDefault();
      try {
        const result = await signInWithGoogle();
        console.log(result);
        this.$router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
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
