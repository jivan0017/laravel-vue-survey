<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      {{ ' ' }}
      <router-link :to="{ name: 'Register'}" class="font-medium text-indigo-600 hover:text-indigo-500">
        Register for free
      </router-link>
    </p>
  </div>
  <form class="mt-8 space-y-6" @submit="login">
    <div
      v-if="errorMessage"
      class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded transition-all duration-700 ease-in-out;">
        {{ errorMessage }}
        <span
          @click="errorMessage=''"
          class="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-700 ease-in-out; cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
    </div>
    <input type="hidden" name="remember" value="true" />
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Email address"
          v-model="user.email"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required=""
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          v-model="user.remember"
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
        </span>
        Sign in
      </button>
    </div>
  </form>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import store from '../../store';

const user = {
  email: '',
  password: '',
  remember: false,
};

let errorMessage = ref('');
const router = useRouter();

function login(event) {
  event.preventDefault();
  store
    .dispatch('login', user)
    .then((res) => {
      console.log("res >>> ", res)
      router.push({
        name: 'Dashboard'
      });
    })
    .catch(err => {
      console.log("res >>> err", err)
      errorMessage.value = err.response.data.error;
    });
}

</script>
