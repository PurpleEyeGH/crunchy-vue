<template>
  <div id="socialLogin">
    <div class="flex -mx-1 mb-4">
      <button v-on:click.prevent="facebookConnect" class="inline-block w-1/2 py-2 px-12 mx-3 rounded"><img src="@/assets/facebook.svg" /></button>
      <button class="inline-block w-1/2 py-2 px-12 mx-3 rounded"><img src="@/assets/google.svg" /></button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'SocialsLogin',
    methods: {
    facebookConnect() {
      axios.get("http://localhost:3000/auth/login/facebook").then((response) => (this.info = response.data));
    },
    googleConnect() {}
    }
}
</script>