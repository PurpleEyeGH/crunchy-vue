<template>
  <div id="login">
    <section class="py-8">
      <div class="w-full max-w-sm mx-auto">
        <p class="mb-2 text-2xl text-gray-500 leading-relaxed py-4 px-4">Sign-in / Sign-up to your account</p>
        <hr />
        <div class="my-6"></div>
        <LoginForm v-on:submit-form-ok="login($event)"></LoginForm>
        <transition name="fade" mode="out-in" enter-active-class="animated animate__bounceIn" leave-active-class="animated animate__bounceOut">
          <p v-show="formError" class="text-lg text-center text-red-400 my-4">Problem with credentials</p>
        </transition>
        <transition name="fade" mode="out-in" enter-active-class="animated animate__bounceIn" leave-active-class="animated animate__bounceOut">
          <p v-show="successLogin" class="text-lg text-center text-green-400 my-4">Connected, redirect ..</p>
        </transition>
        <hr />
        <div class="my-4"></div>
        <p class="text-sm text-center text-gray-400">Or login with</p>
        <div class="my-2"></div>
        <SocialsLogin></SocialsLogin>
        <p class="text-sm text-center text-gray-400">Une baguette est facile à casser, dix baguettes sont dures comme fer.</p>
      </div>
    </section>
  </div>
</template>
<script>
import LoginForm from "@/components/login/LoginForm";
import SocialsLogin from "@/components/login/SocialsLogin";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      info: "",
      formError: false,
      successLogin: false,
    };
  },
  methods: {
    login(returnData) {
      axios
        .post("http://localhost:3000/auth/login", returnData)
        .then((res) => {
          if (res.data.access_token) {
            this.formError = false;
            this.successLogin = true;
            localStorage.token = res.data.access_token;
          } else {
            this.formError = true;
            this.successLogin = false;
          }
        })
        .catch((err) => {
          this.formError = true;
          this.successLogin = false;
          console.log(err.status);
        });
    },
  },
  components: {
    LoginForm,
    SocialsLogin,
  },
};
</script>
