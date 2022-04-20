<template>
  <div>
    <Navbar></Navbar>
    <div class="flex">
      <div class="grid grid-cols-12 gap-1.5 w-full p-2 mt-9">
        <div class="p-2 lg:col-start-3 lg:col-span-8">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="h-9 dark:bg-gray-500">Forum Category</div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Post
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total User
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Last Thread
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">
                    Sliver
                  </td>
                  <td class="px-6 py-4">
                    Laptop
                  </td>
                  <td class="px-6 py-4">
                    $2999
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">
                    White
                  </td>
                  <td class="px-6 py-4">
                    Laptop PC
                  </td>
                  <td class="px-6 py-4">
                    $1999
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { userStore } from "../stores/user";
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(userStore, ['fetchThread']),
  },
  mounted() {
    this.fetchThread();
  },
  computed: {
    ...mapState(userStore, ['threadData'])
  }
}
</script>

<style>
</style>