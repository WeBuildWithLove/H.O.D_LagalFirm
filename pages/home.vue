<template>
  <header class="bg-brand flex flex-col md:flex-row justify-between">
    <img
      src="../assets/svg/JusticeStatus.svg"
      alt="Status of Liberty"
      class="hidden md:block"
    />
    <div
      class="text-white items-center justify-center flex flex-col md:pace-y-4 space-y-7"
    >
      <p class="text-sm md:text-4xl">Since 2011</p>
      <div class="space-y-4 md:space-y-7">
        <div class="bg-white">
          <Divider direction="horizontal" width="2px" />
        </div>
        <p class="font-bold text-base md:text-5xl">
          BARRISTERS • SOLICITORS & CONSULTANTS
        </p>
        <div class="bg-white">
          <Divider direction="horizontal" width="2px" />
        </div>
        <p class="text-center">
          H.O.D LEGAL is a full service law firm that was established to offer a
          broad range of legal service to its clients
        </p>
        <div class="flex items-center justify-center">
          <Button class="bg-card border-card"
            >GET A FREE CONSULTATION TODAY</Button
          >
        </div>
      </div>
    </div>
    <img src="../assets/svg/AboutProfile.svg" />
  </header>
</template>
<script setup>
import Divider from "../components/UI/Divider/index.vue";
import Button from "../components/UI/Button/index.vue";
</script>
