<template>
  <div id="notfoundpage">
    <section class="py-12 px-4">
      <div class="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-left">
        <div class="w-full lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
          <h2 class="text-4xl mb-4 font-semibold font-heading">Page not found</h2>
          <p class="mb-6 text-gray-400">Dunder Mifflin is the place where all the paper enthusiastic met one day and started selling supplies with true love.</p>
          <router-link href="/" :to="{ name: 'Home' }">
            <a class="text-lg text-indigo-600 hover:underline">Go to the homepage »</a>
          </router-link>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <img src="@/assets/broken.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>
