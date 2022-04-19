<template>
  <!-- NAVBAR -->
  <div class="rounded-lg w-full bg-[#7AEAEA]">
    <div class="flex  border-t py-0 px-4"><span class="font-bold mt-3 text-lg">Rock On</span>
      <div class="flex ml-3"><button
          class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500"><span
            class="text-sm">Home</span></button><button
          class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5"><span
            class="text-sm">Concert</span></button><button
          class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5"><span
            class="text-sm">News</span></button><button></button></div>
      <div class="p-2 ml-auto flex-shrink-0 flex"><button
          class="shadow-sm text-white rounded-md bg-blue-400 hover:bg-blue-500 flex items-center px-5 py-2 transition-colors duration-150 ml-3.5"><span
            class="text-sm">Sign In</span></button></div>
    </div>
  </div>
  <!-- TABLE -->
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
  <!-- CARD -->
  <div class="flex">
    <div class="grid grid-cols-12 gap-1.5 w-full p-2">
      <div class="p-2 col-span-5 col-start-2">
        <div class="p-2 bg-white h-56 rounded-xl shadow-xl flex flex-col items-center">
          <div class="p-2 rounded-full bg-gray-500 h-12 w-12 bg-center bg-cover"
            style="background-image:url(https://images.unsplash.com/photo-1617791116959-f09c8987a947?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1259&amp;q=80)">
          </div><span class="block font-bold text-lg">Azamuddin M</span>
          <div class="h-3 rounded mt-2 bg-gray-200 w-full">
          </div>
          <div class="h-3 rounded mt-2 bg-gray-200 w-1/2">
          </div><button
            class="rounded p-2 shadow-sm flex items-center justify-center space-x-1 mt-auto w-full bg-yellow-300 text-gray-900 hover:bg-yellow-400"><svg
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                fill="currentColor"></path>
            </svg><span>Add to project</span></button>
        </div>
      </div>
      <div class="p-2 col-span-5">
        <div class="p-2 bg-white h-56 rounded-xl shadow-xl flex flex-col items-center">
          <div class="p-2 rounded-full bg-gray-500 h-12 w-12 bg-center bg-cover"
            style="background-image:url(https://images.unsplash.com/photo-1617791116959-f09c8987a947?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1259&amp;q=80)">
          </div><span class="block font-bold text-lg">Azamuddin M</span>
          <div class="h-3 rounded mt-2 bg-gray-200 w-full">
          </div>
          <div class="h-3 rounded mt-2 bg-gray-200 w-1/2">
          </div><button
            class="rounded p-2 shadow-sm flex items-center justify-center space-x-1 mt-auto w-full bg-yellow-300 text-gray-900 hover:bg-yellow-400"><svg
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                fill="currentColor"></path>
            </svg><span>Add to project</span></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
</style>
