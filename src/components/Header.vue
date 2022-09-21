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
            <router-link to="/dashboard" class="nav-link"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="handleLogOut" href="#"
              >Log Out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { logOut } from "../services/authService";
export default {
  name: "Header",
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    async handleLogOut() {
      try {
        await logOut();
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
