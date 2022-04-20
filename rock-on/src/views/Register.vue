<template>
  <Navbar></Navbar>
  <section id="registerPage">
    <div class="mx-auto flex min-h-screen w-full items-center justify-center">
      <form @submit.prevent="registerMethod"
        class="space-y-6 p-4 w-96 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-[#465269] dark:border-gray-700"
        action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">Register</h5>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
            Username</label>
          <input type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="username" />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="text" name="email" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com" v-model="email" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
            password</label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="password" />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Bio</label>
          <textarea type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="bio"></textarea>
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Display picture</label>
          <input type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            v-model="imageUrl" />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
          </div>
        </div>
        <button type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#A8C4FB] dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-500">
          Register Account
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import { mapActions } from "pinia"
import { userStore } from '@/stores/user'
import Navbar from "../components/Navbar.vue"
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      bio: "",
      imageUrl: "",
    };
  },
  methods: {
    ...mapActions(userStore, ["registerAction"]),
    async registerMethod() {
      try {
        const data = await this.registerAction({
          username: this.username,
          email: this.email,
          password: this.password,
          bio: this.bio,
          imageUrl: this.imageUrl,
        });
        this.$router.push("/login");
      }
      catch (err) {
        console.log(err);
      }
    }
  },
  components: { Navbar }
}
</script>

<style>
</style>