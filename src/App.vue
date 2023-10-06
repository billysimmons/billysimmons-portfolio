<!-- 
  App.vue
  NOTES:
    Pages:
      - About me page (home page) (about me statement including aread of study and career aspirations (200-300 words))
      - Work Experience (Critical analysis of WIL, evidence of technical and transferable skills, outline of placement deliverable and evidfence of decision making, , holistic experience artefact)
      - Contact
 -->
<template>
  <div id="app" class="">
    <!-- Top Nav Bar -->
    <TabBar />
    <!-- Main Content (routerview) -->
    <router-view></router-view>
  </div>
  <!-- Footer Bar -->
</template>

<script setup>
import TabBar from "@/components/TabBar.vue";
</script>

<style>
#app {
  padding-left: 7%;
  padding-right: 7%;
}
</style>
