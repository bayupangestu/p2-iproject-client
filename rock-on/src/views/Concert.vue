<template>
  <Navbar></Navbar>
  <div class="flex">
    <div class="grid grid-cols-3 gap-1.5 w-full p-2">
      <Card v-for="event in concertData" :key="event.id" :event="event"></Card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/CardConcert.vue";
import { apiStore } from "../stores/api";
import { mapState, mapActions } from "pinia";
export default {
  components: { Navbar, Card },
  methods: {
    ...mapActions(apiStore, ['fetchConcerts']),
  },
  mounted() {
    this.fetchConcerts();
  },
  computed: {
    ...mapState(apiStore, ['concertData'])
  }
}
</script>

<style>
</style>