<script>
import { mapActions, mapState } from "pinia";
import { useCharacterStore } from "../stores/character";

export default {
  data() {
    return {
      email: "",
      password: "",
      image: `https://img.freepik.com/free-vector/welcome-word-flat-cartoon-people-characters_81522-4207.jpg?size=626&ext=jpg&uid=R95636908&ga=GA1.1.1713092973.1676787510&semt=sph`,
    };
  },
  computed: {},
  methods: {
    ...mapActions(useCharacterStore, [
      "loginHandler",
      "handleCredentialResponse",
    ]),
    callback() {
      this.handleCredentialResponse();
    },
  },
};
</script>

<template>
  <section class="text-center text-lg-start" id="login-section">
    <div class="card mb-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img
            :src="image"
            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
          />
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">
            <form
              id="login-form"
              @submit.prevent="loginHandler({ email, password })"
            >
              <h6 class="h6 mb-3 display-5">Log in to your account</h6>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="login-email"
                  class="form-control"
                  v-model="email"
                />
                <label class="form-label" for="login-email"
                  >Email address</label
                >
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="login-password"
                  class="form-control"
                  v-model="password"
                />
                <label class="form-label" for="login-password">Password</label>
              </div>
              <!-- Submit button -->
              <button
                style="margin: 10px"
                type="submit"
                class="btn btn-lg btn-primary rounded-pill w-100 p-2"
              >
                Sign in
              </button>
              <router-link to="/register"
                ><button
                  style="margin: 10px"
                  type="button"
                  class="btn btn-lg btn-primary rounded-pill w-100 p-2"
                >
                  Register
                </button></router-link
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.row.g-0.d-flex.align-items-center {
  margin: 20px;
}
</style>