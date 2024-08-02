<!--
+This is the Services section of the homepage. It contains a description of the legal services
+provided by H.O.D Legal. The list of services is displayed in a grid layout. Each service
+is represented by an icon and a name.
+-->
<template>
  <div id="services" class="bg-brand text-white space-y-20 lg:py-20 py-10 lg:px-20 px-4">
    <div class="flex flex-col items-center container justify-center gap-8">
      <div class="flex gap-4 items-center">
        <UIIconLeftPointer class="lg:w-[100px] w-[30%]" />
        <p
          class="font-bold text-lg lg:text-[40px] md:text-3xl text-center lg:leading-[93.17px] leading-normal pt-serif-bold"
        >
          SERVICES AND PRACTICE AREAS
        </p>
        <UIIconRightPointer class="lg:w-[100px] w-[30%]" />
      </div>

      <div class="lg:text-[28px] text-[14px] lg:leading-[38px] text-center font-medium flex flex-col  gap-2">
        <p>   H.O.D LEGAL specializes primarily in commercial disputes resolution and corporate
        law practice. Whether we are representing clients in the courtroom, boardroom,
        negotiations, giving opinions on thorny legal issues, helping our clients obtain
        necessary regulatory permits/licenses or interfacing with government MDAs on their
        behalf, we are always guided by genuine concern for our clients interests.</p>
    <p>To this
        end, our service delivery is detail-oriented, always taking into account the
        ever-changing laws and existing business realities in the industries where our
        clients operate.
      </p> 
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <div v-for="item in services" :key="item.name" class="flex gap-2">
        <div><UIIconServiceIcon /></div>
        <p class="text-[14px] lg:text-[25px]">
          {{ item.name }}
        </p>
      </div>
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
