<script>
import { mapActions } from "pinia";
import { useCharacterStore } from "../stores/character";
export default {
  data() {
    return {
      email: "",
      password: "",
      image:
        "https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-133556.jpg?size=626&ext=jpg&uid=R95636908&ga=GA1.2.1713092973.1676787510&semt=ais",
    };
  },
  computed: {},
  methods: {
    ...mapActions(useCharacterStore, ["registerHandler"]),
  },
};
</script>


<template>
  <section class="text-center text-lg-start" id="register-section">
    <!-- Jumbotron -->
    <div class="container py-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div
            class="card cascading-right"
            style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
            "
          >
            <div class="card-body p-5 shadow-5 text-center">
              <h2 class="fw-bold mb-5">Register Here</h2>
              <form
                id="register-form"
                @submit.prevent="
                  registerHandler({
                    email,
                    password
                  })
                "
              >
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="register-email"
                    class="form-control"
                    v-model="email"
                  />
                  <label class="form-label" for="register-email"
                    >Email address</label
                  >
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="register-password"
                    class="form-control"
                    v-model="password"
                  />
                  <label class="form-label" for="register-password"
                    >Password</label
                  >
                </div>

                <!-- Submit button -->
                <button
                  style="margin: 20px"
                  type="submit"
                  class="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>
                <router-link to="/home"
                  ><button
                    style="margin: 20px"
                    type="click"
                    class="btn btn-primary btn-block mb-4"
                  >
                    Cancel
                  </button></router-link
                >
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <img :src="image" class="w-100 rounded-4 shadow-4" alt="" />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  section {
    background-color: #fbfbfb;
  }
}
</style>
