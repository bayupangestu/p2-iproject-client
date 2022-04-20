<template>
  <Navbar></Navbar>
  <div class="flex">
    <div class="grid grid-cols-3 gap-1.5 w-full p-2">
      <Card v-for="news in newsData" :key="news" :news="news"></Card>
    </div>
  </div>
</template>

<script>
import { apiStore } from "../stores/api";
import { mapState, mapActions } from "pinia";
import Navbar from "../components/Navbar.vue";
import Card from "../components/CardNews.vue";
export default {
  components: { Navbar, Card },
  methods: {
    ...mapActions(apiStore, ["fetchNews"]),
  },
  mounted() {
    this.fetchNews();
  },
  computed: {
    ...mapState(apiStore, ["newsData"])
  }
}
</script>

<style>
</style>