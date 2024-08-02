<template>
  <!-- Ideology Section -->
  <div id="ideology" class="bg-white text-brand space-y-20 lg:py-20 py-10 lg:px-20 px-4">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="flex gap-4 items-center">
        <UIIconLeftPointer class="lg:w-[100px] w-[30%]" />
        <p
          class="font-bold text-lg md:text-3xl lg:text-6xl text-center lg:leading-[93.17px] pt-serif-bold"
        >
          CORE IDEOLOGY
        </p>
        <UIIconRightPointer class="lg:w-[100px] w-[30%]" />
      </div>

      <div class="lg:text-[28px] text-[14px] lg:leading-[50.4px] leading-[24.92px] text-center font-medium">
        At H.O.D. Legal, we believe that the practice of law extends beyond navigating the
        complexities of commercial disputes and corporate law. Our core ideology serves as
        our compass in every courtroom, boardroom, and negotiation. We are committed to
        delivering exceptional legal services, guided by principles of integrity,
        excellence, and client-centric solutions. Our mission is to provide not only legal
        expertise but also strategic counsel that empowers our clients to achieve their
        goals.
      </div>
    </div>
    
    <!-- Grid of Services -->
    <div class="grid lg:grid-cols-3 grid-cols-1  gap-8 lg:gap-[70px] ">
      <div
        v-for="item in services"
        :key="item.name"
        class="flex flex-col bg-[#A70314] lg:p-3 p-6 xl:h-[390px] rounded-[5px] gap-2 w-full"
      >
        <div class="flex gap-[10px] lg:h-[300px] flex-col ">
          <p
            class="text-[14px] text-[#FFFFFF] pt-serif-bold lg:text-[35px] leading-[40.11px] "
          >
            {{ item.title }}
          </p>
          <p class="text-[14px] lg:text-[20px] leading-[28px] text-white">
            {{ item.name }}
          </p>
        </div>
        <hr />
        <div class="py-2 l">
          <component :is="item.icons" class="h-auto w-auto lg:!h-[80px] lg:!w-[80px]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ArrowScope from "@/components/UI/Icon/ArrowScope.vue";
import HumbleiconsBulb from "@/components/UI/Icon/HumbleiconsBulb.vue";
import ValuesIcon from "@/components/UI/Icon/ValuesIcon.vue";
const services = ref([
  {
    icons: HumbleiconsBulb,
    title: "Our Vision ",
    name: `To be a Nigerian firm of choice for the provision of world-class legal  and business advisory services.`,
  },
  {
    icons: ArrowScope,
    title: "Our Mission ",
    name: `To clearly understand the demands of our clients and approach every of their legal need with a good balance of human empathy and business efficiency.`,
  },
  {
    icons: ValuesIcon,
    title: "Our Values ",
    name:
      "Our Core Values are Reliability, Trustworthiness, Business Efficiency, Transparency.",
  },
]);
</script>

<<<<<<< d0466422-0697-42d3-9b0b-b972dd57d687 >>>>>>>
