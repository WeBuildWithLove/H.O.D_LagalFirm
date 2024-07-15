<template>
  <div id="services" class="bg-brand text-white space-y-20 lg:py-20 py-10 lg:px-20 px-4">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="flex gap-4 items-center">
        <UIIconLeftPointer class="lg:w-[100px] w-[30%]" />
        <p
          class="font-bold text-lg md:text-[60px] text-center lg:leading-[93.17px] pt-serif-bold"
        >
          SERVICES AND PRACTICE AREAS
        </p>
        <UIIconRightPointer class="lg:w-[100px] w-[30%]" />
      </div>

      <!-- <div class="flex space-x-4">
        <img src="@/assets/svg/LeftPointer.svg" alt="pointer" />
        <p class="font-bold text-4xl pt-serif-font">
          SERVICES AND PRACTICE AREAS
        </p>
        <img src="@/assets/svg/RightPointer.svg" alt="pointer" />
      </div> -->
      <div class="lg:text-[28px] text-[14px] lg:leading-[50.4px] text-center font-medium">
        H.O.D LEGAL specializes primarily in commercial disputes resolution and corporate
        law practice. Whether we are representing clients in the courtroom, boardroom,
        negotiations, giving opinions on thorny legal issues, helping our clients obtain
        necessary regulatory permits/licenses or interfacing with government MDAs on
        their behalf, we are always guided by genuine concern for our clients interests.To this end, our service delivery is detail-oriented, always taking into account the ever-changing laws and existing business realities in the industries where our clients operate.
      </div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
      <!-- <div class="space-y-14"> -->
      <div v-for="item in services" :key="item.name" class="flex gap-2">
        <div><UIIconServiceIcon /></div>
        <p class="text-[14px] lg:text-[25px]">
          {{ item.name }}
        </p>
      </div>
      <!-- <div class="flex items-center space-x-2">
        <UIIconServiceIcon />
        <p>Taxation Law</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Intellectual Property law ( Patents; Designs; Trademarks’ Copyrights)</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Employment And Labour Law .</p>
      </div> -->
      <!-- </div> -->
      <!-- <div class="space-y-14"> -->
      <!-- <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>
          Real Estate And Property law ( Acquisition; Transfer; Construction; Due
          Diligence; Finance)
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Sports & Entertainment Law.</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Energy & Natural Resources (Oil & Gas; Electricity)</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Business Recovery and Insolvency.</p>
      </div> -->
      <!-- </div> -->
      <!-- <div class="space-y-14"> -->
      <!-- <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Company Secreterial and Corporate Governance.</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Capital Market and securities.</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Banking, Finance & Insurance.</p>
      </div>
      <div class="flex items-center space-x-2">
        <img src="@/assets/svg/ServiceIcon.svg" alt="Bullet list icon" />
        <p>Data Protection and Privacy.</p>
      </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const services = ref([
  {
    name: `Disputes Resolution ( Civil and Criminal Litigation; Arbitration;
            Mediation)`,
  },
  {
    name: `Real Estate And Property Law (Acquisition; Transfer; Construction; Due
          Diligence; Finance)`,
  },
  { name: "Company Secreterial and Corporate Governance" },
  { name: "Taxation Law" },
  { name: "Sports & Entertainment Law" },
  { name: "Capital Market and Securities" },
  { name: "Intellectual Property law (Patents; Designs; Trademarks; Copyrights)" },
  { name: "Energy & Natural Resources (Oil & Gas; Electricity)" },
  { name: "Banking, Finance & Insurance" },
  { name: "Employment and Labour Law" },
  { name: "Business Recovery and Insolvency" },
  { name: "Data Protection and Privacy" },
  { name: "Transportation and Logistics (Maritime; Aviation; Road & Rail)" },
  { name: "Regulatory Compliance and Government Relations" },
]);
</script>

