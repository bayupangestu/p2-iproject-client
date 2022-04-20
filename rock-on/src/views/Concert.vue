<template>
  <Navbar></Navbar>
  <div class="flex">
    <div class="grid grid-cols-12 gap-1.5 w-full p-2">
      <div class="p-2 col-span-5 col-start-2">
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
export default {
  components: { Navbar, Card }
}
</script>

<style>
</style>