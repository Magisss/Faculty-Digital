<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCharacterStore } from "../stores/character";


// import ProfileView from "../views/ProfileView.vue";
export default {
  components: {
    // CharacterCard,
    // ProfileView,
  },
  data() {
    return {
      visions: ["Pyro", "Electro", "Hydro", "Cryo", "Anemo"],
      currentPage: "/home",
    };
  },
  computed: {
    ...mapState(useCharacterStore, ["characters"]),
  },
  methods: {
    ...mapActions(useCharacterStore, ["fetchCharacters", "filterCharacters"]),
    filterCharactersButton(vision) {
      this.filterCharacters(vision);
    },
  },
  created() {
    // this.fetchCharacters();
  },
};
</script>


  <template>
  <section id="character-section">
    <div class="container-fluid row justify-content-center">
      <div class="justify-content-center">
        <div class="col-12">
          <h1 class="text-center mt-5 mb-5" style="color: #03e9f4">
            HOME PAGE
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  padding: 20px;
}

h1.mt-5 {
  padding-top: 50px;
  font-weight: bold;
}

#character-section {
  background-image: linear-gradient(to bottom right, #1e1e66, #1e1873);
  padding-bottom: 50px;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #050801;
  font-family: "Raleway", sans-serif;
}

button {
  padding: 25px 30px;
  background-color: #050801;
  color: #03e9f4;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 200px #03e9f4;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

/* button {
  display: inline-block;
  background-color: #9792c04a;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 120px;
  margin: 10px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

button:hover {
  background-color: #3600f8;
} */

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image img {
  height: 150px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
}
</style>
