<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useFacultyStore } from "../stores/faculty";

export default {
  components: {},
  data() {
    return {
      flag: false,
      currentPage: "/home",
      options: {
        chart: {
          type: "bar",
        },
        series: [
          {
            name: "sales",
            data: [],
          },
        ],
        xaxis: {
          categories: [],
        },
      },
    };
  },
  computed: {
    ...mapState(useFacultyStore, ["getMonths", "getIncomes"]),
  },

  methods: {
    ...mapActions(useFacultyStore, ["fetchIncomes"]),
  },
  created() {
    this.fetchIncomes();
  },
  mounted() {
    setTimeout(() => {
      this.options.xaxis.categories = this.getMonths;
      this.options.series[0].data = this.getIncomes;
      var chart = new ApexCharts(
        document.querySelector("#chart"),
        this.options
      );
      chart.render();
    }, 200);
  },
};
</script>

<template>
  <section id="dashboard-section">
    <div class="container-fluid row justify-content-center">
      <div class="justify-content-center">
        <div class="col-12">
          <h1 class="text-center mt-5 mb-5" style="color: #03e9f4">
            Dashboard
          </h1>
          <div id="chart"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#dashboard-section {
  background-image: linear-gradient(to bottom right, #1e1e66, #1e1873);
  padding-bottom: 50px;
}

h1 {
  padding-top: 50px;
  font-weight: bold;
  color: #03e9f4;
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;
}

#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>
