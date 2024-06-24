<template>
  <div class="bg-white text-brand space-y-20 lg:py-20 py-10 lg:px-20 px-4">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="flex gap-4 items-center">
        <UIIconLeftPointer class="lg:w-[100px] w-[30%]" />
        <p
          class="font-bold text-lg md:text-[60px] text-center lg:leading-[93.17px] pt-serif-bold"
        >
          CORE IDEOLOGY
        </p>
        <UIIconRightPointer class="lg:w-[100px] w-[30%]" />
      </div>

      <div class="lg:text-[28px] text-[14px] lg:leading-[50.4px] text-center font-medium">
        H.O.D. Legal isn't just about navigating the complexities of commercial disputes
        and corporate law. We are driven by a core ideology that serves as our compass in
        every courtroom, boardroom, and negotiation.
      </div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 container gap-8 lg:gap-[70px]">
      <div
        v-for="item in services"
        :key="item.name"
        class="flex flex-col bg-[#A70314] lg:p-10 p-6 lg:h-[390px] rounded-[5px] gap-2"
      >
        <div class="flex gap-[10px] lg:min-h-[230px] flex-col">
          <p
            class="text-[14px] text-[#FFFFFF] pt-serif-bold lg:text-[35px] leading-[40.11px]"
          >
            {{ item.title }}
          </p>
          <p class="text-[14px] lg:text-[20px] leading-[28px] text-white">
            {{ item.name }}
          </p>
        </div>
        <hr />
        <div class="py-2"><component :is="item.icons" /></div>
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
    name: `To be a Nigerian Firm of Choice for the provision of world-class legal  and business advisory services.`,
  },
  {
    icons: ArrowScope,
    title: "Our Mission ",
    name: `To Clearly Understand the demands of our clients and approach every of their legal need with a good balance of human empathy and business efficiency.`,
  },
  {
    icons: ValuesIcon,
    title: "Our Values ",
    name:
      "Our Core Values are Reliability, Trustworthiness, Business Efficiency, Transparency.",
  },
]);
</script>
