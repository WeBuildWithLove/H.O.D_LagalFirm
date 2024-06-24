<template>
  <LayoutNavBar />
  <UIPageSectionsHome />
  <UIPageSectionsAbout />
  <UIPageSectionsServices />
  <UIPageSectionsIdeology />
</template>
<script setup lang="ts">
// import NavBar from "~/components/Layout/NavBar/Index.vue";
// import Home from "../pages/home.vue";
// import About from "../pages/about.vue";
// import Services from "../pages/services.vue"
useHead({
  title: "HOD_LagalFirm - Home",
  meta: [{ name: "description", content: `` }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
useSeoMeta({
  title: "HOD_LagalFirm",
  ogTitle: "HOD_LagalFirm",
  description: `Effortlessly summon your journey with our App.`,
  ogDescription: `Effortlessly summon your journey with our App.`,
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
});
</script>
