<template>
  <div class="container mx-auto p-8 flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-4">Contact Me</h1>

    <!-- Phone -->
    <div class="contact-bubble mb-4">
      <a href="tel:+1234567890" class="text-blue-500">+1 (234) 567-890</a>
    </div>

    <!-- Email -->
    <div class="contact-bubble mb-4">
      <a href="mailto:billysimmons577@gmail.com" class="text-green-500"
        >youremail@example.com</a
      >
    </div>

    <!-- LinkedIn -->
    <div class="contact-bubble mb-4">
      <a
        href="https://www.linkedin.com/in/yourlinkedin"
        target="_blank"
        class="text-gray-500"
        >LinkedIn</a
      >
    </div>

    <!-- GitHub -->
    <div class="contact-bubble mb-4">
      <a
        href="https://github.com/yourgithub"
        target="_blank"
        class="text-gray-700"
        >GitHub</a
      >
    </div>
  </div>
</template>

<style scoped>
.contact-bubble {
  background-color: #e5e7eb;
  padding: 10px 20px;
  border-radius: 999px;
  display: inline-block;
  text-align: center;
  margin-right: 10px; /* Add space between bubbles */
}
</style>

<script setup></script>
