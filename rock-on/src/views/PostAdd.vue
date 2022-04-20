<template>
  <Navbar></Navbar>
  <div>
    <FormPost></FormPost>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FormPost from '@/components/FormPost.vue';
export default {
  name: 'add-post',
  components: {
    Navbar,
    FormPost
  },
  data() {
  }
}
</script>

<style>
</style>