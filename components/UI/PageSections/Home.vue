<template>
  <section
    class="bg-brand relative flex flex-col overflow-hidden md:flex-row lg:min-h-[550px] min-h-[440px] lg:py-20 py-10 lg:px-20 px-4 justify-center"
  >
    <div class="absolute -bottom-2 left-0">
      <img
        src="@/assets/svg/JusticeStatus.svg"
        alt="Status of Liberty"
        class="opacity-40"
      />
    </div>
    <div
      class="text-white items-center justify-center z-10 flex flex-col md:pace-y-4 space-y-7"
    >
      <p class="text-sm md:text-4xl">Since 2020</p>
      <div class="space-y-4 md:space-y-7">
        <div class="bg-white">
          <Divider direction="horizontal" width="2px" />
        </div>
        <p
          class="font-bold text-base text-center lg:leading-[77.64px] leading-[23.29px] pt-serif-bold md:text-5xl"
        >
          BARRISTERS • SOLICITORS • CORPORATE CONSULTANTS
        </p>
        <div class="bg-white">
          <Divider direction="horizontal" width="2px" />
        </div>

        <div class="flex items-center justify-center">
          <!-- <a
            href="#attorneyFormSection"
            class="bg-card border-card py-2 px-4 rounded-lg border !text-white focus:outline-none focus:ring text-center"
            >GET A FREE CONSULTATION TODAY</a
          > -->
          <a
            href="https://wa.me/2348032928072?text=Hello%20I%20would%20like%20to%20schedule%20a%20consultation"
            target="_blank"
            class="bg-card border-card py-2 px-4 rounded-lg border !text-white focus:outline-none focus:ring text-center"
          >
            GET A FREE CONSULTATION TODAY
          </a>
        </div>
      </div>
    </div>
    <div class="lg:absolute -bottom-2 hidden lg:h-auto h-[311px] right-0">
      <img src="@/assets/svg/AboutProfile.svg" />
    </div>
  </section>
</template>
<script setup>
import Divider from "@/components/UI/Divider/index.vue";
import Button from "@/components/UI/Button/index.vue";
</script>
