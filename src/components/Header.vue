<template>
  <nav class="navbar navbar-dark bg-green navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Polling App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul v-if="isLoggedIn" class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuthState } from "../services/authService";
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    console.log(getAuthState());
  },
};
</script>
