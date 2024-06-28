<template>
  <LayoutNavBar />
  <UIAttorneysHome />
  <UIAttorneysDetails />
  <UIPageSectionsAttorneyFormSection />
  <LayoutFooter />
</template>
<script setup lang="ts">
useHead({
  title: "HOD_LagalFirm - Attorney",
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
