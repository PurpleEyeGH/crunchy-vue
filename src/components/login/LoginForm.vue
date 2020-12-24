<template>
  <div id="login-form">
    <form>
      <div class="mb-4">
        <input v-model="formData.email" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Email" />
      </div>
      <div class="mb-4">
        <input v-model="formData.password" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Password" />
      </div>
      <div class="flex -mx-1 mb-4">
        <button v-on:click.prevent="submitForm" class="inline-block w-1/2 py-4 px-8 mx-1 leading-none text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded">Sign in</button>
        <button class="inline-block w-1/2 py-4 px-8 mx-1 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">Sign up</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log("GOOD, go to $emit");
      this.$emit("submit-form-ok", this.formData);
    },
  },
};
</script>
