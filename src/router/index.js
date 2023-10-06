// src/routes/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Contact from "../views/ContactView.vue";
import WILAnalysis from "../views/WILAnalysis.vue";
import WILSkills from "../views/WILSkills.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/wil-analysis", component: WILAnalysis },
  { path: "/wil-skills", component: WILSkills },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
