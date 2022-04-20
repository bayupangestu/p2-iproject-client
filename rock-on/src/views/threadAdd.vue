<template>
  <Navbar></Navbar>
  <div>
    <FormThread></FormThread>
  </div>
</template>

<script>
import FormThread from '@/components/FormThread.vue';
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'form-thread',
  components: {
    Navbar,
    FormThread
  },
}
</script>

<style>
</style>