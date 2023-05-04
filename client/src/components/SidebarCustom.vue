<script>
import { mapActions, mapWritableState } from "pinia";
import { useCharacterStore } from "../stores/character";

export default {
  name: "Sidebar",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useCharacterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCharacterStore, ["logoutHandler"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>


<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div class="bg-dark border-right" id="sidebar-wrapper">
      <div class="sidebar-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/720/720718.png"
          height="50"
          alt="Logo"
          loading="lazy"
        />
        <span class="sidebar-logo-text">Genshin Impeight</span>
      </div>
      <div class="sidebar-menu">
        <router-link v-if="isLogin" to="/home" class="sidebar-menu-item"
          >Home</router-link
        >
        <router-link v-if="isLogin" to="/profile" class="sidebar-menu-item"
          >Profile</router-link
        >
        <router-link v-if="isLogin" to="/favorite" class="sidebar-menu-item"
          >Favorites</router-link
        >
        <router-link v-if="!isLogin" to="/register" class="sidebar-menu-item"
          >Register</router-link
        >
        <router-link v-if="!isLogin" to="/login" class="sidebar-menu-item"
          >Login</router-link
        >
        <li v-if="isLogin">
          <a @click.prevent="logoutHandler" class="sidebar-menu-item">
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </li>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<style>
#sidebar-wrapper {
  width: 250px;
  height: 100vh;
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
}

#sidebar-wrapper .sidebar-logo {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
}

#sidebar-wrapper .sidebar-logo img {
  margin-right: 10px;
}

#sidebar-wrapper .sidebar-logo-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}

#sidebar-wrapper .sidebar-menu {
  padding: 20px;
}

#sidebar-wrapper .sidebar-menu-item {
  display: block;
  padding: 10px;
  margin-bottom: 5px;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.2s ease;
  background-color: #1a1a1a; /* warna background */
}

#sidebar-wrapper .sidebar-menu-item:hover {
  background-color: #007bff;
  color: #fff;
}

#page-content-wrapper {
  width: calc(100% - 250px);
  padding: 20px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  #sidebar-wrapper {
    width: 0;
  }
  #page-content-wrapper {
    width: 100%;
  }
}
</style>

