import { defineStore } from "pinia";
import axios from "axios";

let base_url = "http://localhost:3000";
export const apiStore = defineStore({
  id: "api",
  state: () => ({
    newsData: [],
    concertData: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchConcerts() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${base_url}/api/concerts`,
        });
        this.concertData = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchNews() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${base_url}/api/news`,
        });
        this.newsData = data;
      } catch (err) {
        console.log(err);
      }
    },
    async payment() {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${base_url}/api/xendit`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        window.location = data.invoice_url;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
