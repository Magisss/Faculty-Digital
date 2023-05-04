
import { defineStore } from 'pinia'
import Axios from 'axios'
import Swal from 'sweetalert2'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [],
    currentPage: '',
    isLogin: false,
    qr: '',
    loading: false,
    baseUrl: "http://localhost:3000"
    // baseUrl: "https://rubah-kebon-production-95a1.up.railway.app"
  }),
  getters: {

  },
  actions: {
    // async fetchCharacters() {
    //   try {
    //     const { data } = await Axios({
    //       url: this.baseUrl + '/characters',
    //       method: 'GET',
    //       headers: {
    //         access_token: localStorage.getItem("access_token"),
    //       }
    //     })
    //     console.log(data)
    //     this.characters = data
    //     this.currentPage = '/home'
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

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
        localStorage.userId = data.id
        localStorage.profilePic = data.profilePic
        this.router.push('/home')
        this.isLogin = true
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
    async registerHandler(register) {
      try {
        let { data } = Axios({
          url: this.baseUrl + "/users/register",
          method: "POST",
          data: {
            email: register.email,
            password: register.password,
          },
        })

        // console.log(data,"<<<<<<<<<<<<<<<<<,ini data cuy")
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Registration Success",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });

        // register.email = "";
        // register.password = "";
        // this.router.push('/login')

      } catch (err) {
        console.log(err);
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
        console.log(error)
      }
    },

  },
})

