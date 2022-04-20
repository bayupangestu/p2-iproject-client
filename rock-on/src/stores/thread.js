import { defineStore } from "pinia";
import axios from "axios";

let base_url = "http://localhost:3000";
export const threadStore = defineStore({
  id: "counter",
  state: () => ({
    threadData: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchThread() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${base_url}/threads`,
        });
        this.threadData = data;
      } catch (err) {
        console.log(err);
      }
    },
    addThreadAction(threadData) {
      return axios({
        method: "POST",
        url: `${base_url}/threads`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          title: threadData.title,
          content: threadData.content,
          imageUrl: threadData.imageUrl,
          userId: threadData.userId,
        },
      });
    },
    addPostAction(postData) {
      return axios({
        method: "POST",
        url: `${base_url}/threads/${postData.threadId}/posts`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          title: postData.title,
          body: postData.body,
          userId: postData.userId,
          threadId: postData.threadId,
        },
      });
    },
  },
});
