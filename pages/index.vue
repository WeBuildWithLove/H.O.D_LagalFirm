<template>
  <LayoutNavBar />
  <UIPageSectionsHome />
  <UIPageSectionsAbout />
  <UIPageSectionsServices />
  <UIPageSectionsIdeology />
  <UIPageSectionsFirm />
  <UIPageSectionsOperation />
  <UIPageSectionsAttorneyFormSection />
  <LayoutFooter />
</template>
<script setup lang="ts">
useHead({
  title: "H.O.D LEGAL | Harbour of Dynamic Legal Service Providers",
  meta: [{ name: "description", content: `` }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "" }],
});
useSeoMeta({
  title: "H.O.D LEGAL | Harbour of Dynamic Legal Service Providers",
  ogTitle: "H.O.D LEGAL | Harbour of Dynamic Legal Service Providers",
  description: ``,
  ogDescription: ``,
});
</script>
