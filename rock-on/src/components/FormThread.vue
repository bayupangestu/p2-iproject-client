<template>
  <div class="mx-auto flex min-h-screen w-full items-center justify-center">
    <form @submit.prevent="addThreadMethod"
      class="space-y-6 p-4 w-96 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-[#465269] dark:border-gray-700"
      action="#">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">Add / Update Thread</h5>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title Thread</label>
        <input type="text" name="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          v-model="title" />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Content</label>
        <textarea type="text" name="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          v-model="content" />
      </div>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
        <input type="text" name="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          v-model="imageUrl" />
      </div>
      <div class="flex items-start">
        <div class="flex items-start">
        </div>
      </div>
      <button type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#A8C4FB] dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-500">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "pinia"
import { threadStore } from "@/stores/thread"
export default {
  name: 'form-thread',
  data() {
    return {
      title: '',
      content: '',
      imageUrl: '',
      userId: +localStorage.getItem('id')
    }
  },
  methods: {
    ...mapActions(threadStore, ['addThreadAction']),
    async addThreadMethod() {
      await this.addThreadAction({
        title: this.title,
        content: this.content,
        imageUrl: this.imageUrl,
        userId: this.userId
      })
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>