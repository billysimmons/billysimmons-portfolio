<template>
  <nav class="bg-white border-gray-200">
    <div class="flex flex-wrap items-center justify-between p-4">
      <router-link to="/" class="flex items-center">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-black"
        >
          Billy Simmons Portfolio
        </span>
      </router-link>
      <div class="hidden w-full md:flex md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              :class="{ 'text-blue-700': $route.path === '/' }"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/wil-analysis"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              :class="{ 'text-blue-700': $route.path === '/experience' }"
            >
              WIL Analysis
            </router-link>
          </li>
          <li>
            <router-link
              to="/wil-skills"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              :class="{ 'text-blue-700': $route.path === '/experience' }"
            >
              WIL Skills
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              :class="{ 'text-blue-700': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
/* Add any custom styles for the dropdown here */
</style>
