<template>
  <div id="header">
    <nav class="flex flex-wrap items-center justify-between p-4">
      <div class="flex flex-shrink-0 mr-6">
        <router-link href="/" :to="{ name: 'Home' }">
          <a class="text-xl text-indigo-600 font-semibold font-heading" href="#">Crunchy</a>
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500" v-on:click="menuClick = !menuClick">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto" :class="{ hidden: !menuClick }">
        <div class="lg:mx-auto py-3">
          <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Tag, category, name" />
        </div>
        <div>
          <router-link v-if="!isLogged" href="/login" :to="{ name: 'Login' }">
            <a class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">Login </a>
          </router-link>
          <router-link v-if="isLogged" href="/meme/create" :to="{ name: 'CreateMeme' }">
            <a class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">Create meme</a>
          </router-link>
        </div>
      </div>
    </nav>
    <hr />
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      menuClick: false,
      isLogged: localStorage.token
    };
  },
};
</script>
