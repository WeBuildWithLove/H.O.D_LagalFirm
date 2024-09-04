<template>
  <LayoutNavBar />
  <UIAttorneysHome />
  <UIAttorneysDetails />
  <UIPageSectionsAttorneyFormSection :formData="submittedData"  />
   <!-- <ModalComponent @formSubmitted="handleFormSubmitted" /> -->
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

const submittedData = ref(null);

const handleFormSubmitted = (payload: any) => {
  submittedData.value = payload;
};
</script>
