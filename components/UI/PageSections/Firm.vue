<template>
  <!-- Our Firm section -->
  <div id="firm" class="bg-[#1F2732] text-white space-y-20 lg:py-20 py-10 lg:px-20 px-4">
    <!-- Section title and sub-title -->
    <div class="flex flex-col items-center justify-center gap-4">
      <span
        class="lg:text-[30px] pt-serif-bold text-[14px] lg:leading-[38.82px] text-center !font-normal"
      >
        Our Firm
      </span>

      <div class="flex gap-4 items-center">
        <p
          class="font-bold text-lg lg:text-[60px] md:text-3xl text-center lg:leading-[93.17px] pt-serif-bold"
        >
          Meet our Attorneys
        </p>
      </div>

      <div
        class="lg:text-[28px] text-[14px] lg:leading-[46.8px] leading-[24.92px] w-[80%] text-center font-medium"
      >
        The personnel of H.O.D LEGAL are drawn from a pool of seasoned human capital to
        meet the demanding responsibilities that accompany our varied services. Our
        workforce comprises adept professionals who bring their expertise to bear in
        different facets of legal practice.
      </div>
    </div>
    <div
      class="overflow-hidden hide-scrollbar flex flex-row w-full gap-10 mt-4 overflow-x-auto"
    >
      <NuxtMarquee :speed="100" pauseOnClick pauseOnHover>
        <div
          v-for="i in services"
          :key="i"
          class="rounded-[0px] flex flex-col lg:gap-[27px] ml-3 relative overflow-hidden"
        >
          <div class="h-full">
            <div
              class="col-span-2 h-full md:col-span-1 flex flex-col gap-[1px] justify-between"
            >
              <div class="flex flex-col gap-[15px]">
                <div class="flex flex-col gap-[10px]">
                  <div class="flex justify-between">
                    <div class="flex w-[376px] object-cover h-[451px] rounded-full">
                      <img
                        :src="i.icons"
                        class="w-[376px] object-cover h-[451px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <h4
                    class="!font-normal text-[24px] leading-[31.06px] pt-serif-bold text-text-black-100"
                  >
                    {{ i.name }}
                  </h4>
                </div>
              </div>
              <div class="flex flex-col justify-between gap-2 h-full">
                <div class="flex flex-col gap-[5px]">
                  <p
                    class="leading-[23px] text-[#A70314] text-[14px] lg:text-[16px] font-normal"
                  >
                    {{ i.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtMarquee>
    </div>
    <div class="flex justify-center w-full items-center">
      <UIButton
        @click="$router.push('/attorneys')"
        class="text-white text-[22px] !bg-transparent !px-[72px]"
        >Meet The Team</UIButton
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ArrowScope from "@/components/UI/Icon/ArrowScope.vue";
import HumbleiconsBulb from "@/components/UI/Icon/HumbleiconsBulb.vue";
import ValuesIcon from "@/components/UI/Icon/ValuesIcon.vue";
import GAMALIEL_WORLY from "@/assets/img/GAMALIEL_WORLY.jpeg";
import HAROLD_UKU from "@/assets/img/HAROLD_UKU.jpeg";
import SARAH_HAROLD_UKU from "@/assets/img/SARAH_HAROLD_UKU.jpeg";
import UZEZI_AMAWHE from "@/assets/img/UZEZI_AMAWHE.jpeg";
import IKOPEMUGH_NENGIM from "@/assets/img/IKOPEMUGH_NENGIM.jpeg";
import FRANCIS_NWABUNWANNE from "@/assets/img/FRANCIS_NWABUNWANNE.jpeg";
import DAVID_OKOROGBA from "@/assets/img/DAVID_OKOROGBA.jpeg";

const services = ref([
  {
    icons: HAROLD_UKU,
    title: " Partner ",
    name: "HAROLD UKU",
  },
  {
    icons: UZEZI_AMAWHE,
    title: " Partner ",
    name: "UZEZI AMAWHE",
  },
  {
    icons: GAMALIEL_WORLY,
    title: " Partner ",
    name: "GAMALIEL WORLU",
  },
  {
    icons: SARAH_HAROLD_UKU,
    title: "Of Counsel ",
    name: "SARAH HAROLD UKU",
  },
  {
    icons: FRANCIS_NWABUNWANNE,
    title: "Of Counsel ",
    name: "FRANCIS NWABUNWANNE",
  },
  {
    icons: IKOPEMUGH_NENGIM,
    title: "Of Counsel ",
    name: "IKPOEMUGH NENGIM",
  },
  {
    icons: DAVID_OKOROGBA,
    title: "Of Counsel ",
    name: "DAVID OKOROGBA",
  },
]);
</script>
