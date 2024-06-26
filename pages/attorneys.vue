<template>
  <LayoutNavBar />
  <UIAttorneysHome />
  <UIAttorneysDetails />
  <UIPageSectionsAttorneyFormSection />
</template>
<script setup lang="ts">
useHead({
  title: "HOD_LagalFirm - Home",
  meta: [{ name: "description", content: `` }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "" }],
});
useSeoMeta({
  title: "HOD_LagalFirm",
  ogTitle: "HOD_LagalFirm",
  description: ``,
  ogDescription: ``,
});
</script>
