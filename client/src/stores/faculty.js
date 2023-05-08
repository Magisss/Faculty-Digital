
import { defineStore } from 'pinia'
import Axios from 'axios'
import Swal from 'sweetalert2'

export const useFacultyStore = defineStore('faculty', {
  state: () => ({
    incomes: [],
    months: [],
    values: "",
    currentPage: '',
    isLogin: false,
    qr: '',
    loading: false,
    // baseUrl: "http://localhost:3000"
    baseUrl: "https://faculty-digital-production.up.railway.app"
  }),
  getters: {
    getMonths: (state) => {
      return Array.from(state.months);
    },
    getIncomes: (state) => {
      return Array.from(state.incomes);
    },
  },
  actions: {
    async fetchIncomes() {
      try {
        const { data } = await Axios({
          url: this.baseUrl + '/income',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        });

        let tempArrMonths = []
        let tempArrIncomes = []
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          tempArrMonths.push(element.month);
          tempArrIncomes.push(element.value);
        }
        this.months = [...tempArrMonths]
        this.incomes = [...tempArrIncomes]

        this.currentPage = '/home';
      } catch (error) {
        console.log(error);
      }
    },


    async loginHandler(login) {
      try {
        let { data } = await Axios({
          url: this.baseUrl + '/users/login',
          method: 'POST',
          data: {
            email: login.email,
            password: login.password
          }
        })
        localStorage.access_token = data.access_token
        this.router.push('/home')
        this.isLogin = true
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    async registerHandler(register) {
      try {
        let { data } = await Axios({
          url: this.baseUrl + "/users/register",
          method: "POST",
          data: {
            email: register.email,
            password: register.password,
          },
        })

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Success",
            showConfirmButton: false,
            timer: 1500,
          });

          register.email = "";
          register.password = "";
          this.router.push('/login')

      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },

    async logoutHandler() {
      try {
        localStorage.clear()
        this.router.push('/login')
        this.isLogin = false

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },

  },
})

