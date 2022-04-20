<template>
  <div>
    <Navbar></Navbar>
    <div class="flex">
      <div class="grid grid-cols-12 gap-1.5 w-full p-2 mt-9">
        <div class="p-2 lg:col-start-3 lg:col-span-8">
          <div class="">
            <button type=" button" @click.prevent="addThread"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Add Thread
            </button>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-400 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Content
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Created By
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Created Date
                  </th>
                </tr>
              </thead>
              <Table v-for="thread in threadData" :key="thread.id" :thread="thread"></Table>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "../components/Table.vue";
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { threadStore } from "../stores/thread";
export default {
  components: {
    Table,
    Navbar
  },
  methods: {
    ...mapActions(threadStore, ['fetchThread']),
    addThread() {
      this.$router.push('/threads/add')
    }
  },
  mounted() {
    this.fetchThread();
  },
  computed: {
    ...mapState(threadStore, ['threadData'])
  }
}
</script>

<style>
</style>