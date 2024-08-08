<template>
  <section
    class="bg-brand relative flex flex-col overflow-hidden md:flex-row min-h-[550px] lg:py-20 py-10 lg:px-20 px-4 justify-center"
  >
    <div class="absolute hidden md:block -bottom-2 left-0">
      <img src="@/assets/svg/JusticeStatus.svg" alt="Status of Liberty" class=" " />
    </div>
    <div
      class="text-white items-center justify-center lg:w-[60%] z-10 flex flex-col md:pace-y-4 space-y-7"
    >
      <p class="text-sm md:text-4xl">Since 2020</p>
      <div class="space-y-4 md:space-y-7">
        <div class="bg-white">
          <Divider direction="horizontal" width="2px" />
        </div>
        <p class="font-bold text-base text-center pt-serif-bold md:text-5xl">
          Meet Our ATTORNEYS
        </p>
        <div class="bg-white">
          <Divider direction="horizontal" width="2px" />
        </div>
        <p class="text-center">
          The Personnel of H.O.D LEGAL are drawn from a pool of drawn from a pool of
          seasonal human capital to meet the demanding responsibilities that accompany our
          varied services. Our workforce comprises adept professionals who bring their
          expertise to bear in different facts of legal practice.
        </p>
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
