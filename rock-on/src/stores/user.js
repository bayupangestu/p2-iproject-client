import { defineStore } from "pinia";
import axios from "axios";

let base_url = "http://localhost:3000";
export const userStore = defineStore({
  id: "counter",
  state: () => ({
    threadData: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    registerAction(regisData) {
      return axios({
        method: "POST",
        url: `${base_url}/register`,
        data: {
          username: regisData.username,
          email: regisData.email,
          password: regisData.password,
          bio: regisData.bio,
          imageUrl: regisData.imageUrl,
        },
      });
    },
    loginAction(loginData) {
      return axios({
        method: "POST",
        url: `${base_url}/login`,
        data: {
          email: loginData.email,
          password: loginData.password,
        },
      });
    },
    async fetchThread() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${base_url}/thread`,
        });
        this.threadData = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
