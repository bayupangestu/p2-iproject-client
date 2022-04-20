<template>
  <Navbar></Navbar>
  <div class="flex">
    <div class="grid grid-cols-12 gap-1.5 w-full p-2">
      <div class="p-2 md:col-start-2 md:col-span-2 border-slate-300 border-2">
        <p class="text-white">{{ dataThread.user.username }}</p>
      </div>
      <div class="p-2 md:col-span-7 md:col-start-4 border-slate-300 border-2">
        <p class="text-white">{{ dataThread.content }}</p>
      </div>
      <div class="fixed p-2 md:col-span-2">
        <button type="button" @click.prevent="addPostPage"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Add Post
        </button>
      </div>
    </div>
  </div>
  <div class="flex" v-for="post in dataThread.post" :key="post.id">
    <div class="grid grid-cols-12 gap-1.5 w-full p-2">
      <div class="">
        <img :src="dataThread.user.imageUrl" alt="image">
      </div>
      <div class="p-2 md:col-start-2 md:col-span-2 border-slate-300 border-2">
        <p class="text-white">{{ dataThread.user.username }}</p>
      </div>
      <div class="p-2 md:col-span-7 md:col-start-4 border-slate-300 border-2">
        <p class="text-white">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { threadStore } from "@/stores/thread";

import Navbar from "@/components/Navbar.vue"
export default {
  name: "detail-thread",
  data() {
    return {
      id: localStorage.getItem("id"),
      token: localStorage.getItem("access_token")
    };
  },
  methods: {
    ...mapActions(threadStore, ["fetchThread"]),
    addPostPage() {
      this.$router.push(`/threads/${this.dataThread.id}/posts/add`);
    }
  },
  components: { Navbar },
  mounted() {
    this.fetchThread();
    this.fetchPost();
  },
  computed: {
    ...mapState(threadStore, ["threadData"]),
    threadId() {
      return parseInt(this.$route.params.id)
    },
    dataThread() {
      return this.threadData.find(el => el.id === this.threadId)
    }
  }
}
</script>
