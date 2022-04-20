<template>
  <div class="rounded-lg w-full bg-[#7AEAEA]">
    <div class="flex  border-t py-0 px-4"><span class="font-bold mt-3 text-lg">Rock On</span>
      <div class="flex ml-3">
        <router-link to="/"
          class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500">
          <span class="text-sm">Forum</span>
        </router-link>
        <router-link to="concerts"
          class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
          <span class="text-sm">Concert</span>
        </router-link>
        <router-link to="news"
          class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
          <span class="text-sm">News</span>
        </router-link><button></button>
      </div>
      <div class="p-2 ml-auto flex-shrink-0 flex">
        <router-link to="login"
          class="shadow-sm text-white rounded-md bg-blue-400 hover:bg-blue-500 flex items-center px-5 py-2 transition-colors duration-150 ml-3.5">
          <span class="text-sm">Sign In</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
</style>