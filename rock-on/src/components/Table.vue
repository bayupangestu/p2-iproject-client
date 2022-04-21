<template>

  <tbody>
    <tr class="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        <a @click.prevent="detail(thread.id)" class="cursor-pointer text-bold underline" :thread="thread">{{
          thread.title
        }}</a>
      </th>
      <td class="px-6 py-4">
        {{ thread.content }}
      </td>
      <td class="px-6 py-4">
        {{ thread.user.username }}
      </td>
      <td class="px-6 py-4">
        {{ thread.createdAt.slice(0, 10) }}
      </td>
    </tr>
  </tbody>

</template>

<script>
import { mapActions } from "pinia"
import { threadStore } from "../stores/thread"

export default {
  name: 'table',
  props: ['thread'],
  data() {
    return {
      token: localStorage.getItem('access_token')
    }
  },
  methods: {
    ...mapActions(threadStore, ["fetchThread"]),
    detail(id) {
      this.$router.push(`/threads/${id}`)
    }
  }
}
</script>

<style>
</style>