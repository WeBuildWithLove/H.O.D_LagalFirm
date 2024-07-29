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

      <div
        class="lg:text-[28px] text-[14px] lg:leading-[38px] text-center font-medium flex flex-col justify-center gap-2"
      >
        <p>
          H.O.D LEGAL specializes primarily in commercial disputes resolution and
          corporate law practice. Whether we are representing clients in the courtroom,
          boardroom, negotiations, giving opinions on thorny legal issues, helping our
          clients obtain necessary regulatory permits/licenses or interfacing with
          government MDAs on their behalf, we are always guided by genuine concern for our
          clients interests.
        </p>
        <p>
          To this end, our service delivery is detail-oriented, always taking into account
          the ever-changing laws and existing business realities in the industries where
          our clients operate.
        </p>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <div v-for="item in services" :key="item.name" class="flex gap-2">
        <div><component :is="item.icon"></component></div>
        <p class="text-[14px] lg:text-[25px]">
          {{ item.name }}
        </p>
      </div>
      <!-- <UIIconServiceIcon /> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import BusinessIcon from "../Icon/BusinessIcon.vue";
import ClarityEmployee from "../Icon/ClarityEmployee.vue";
import CompanyIcon from "../Icon/CompanyIcon.vue";
import Group from "../Icon/Group.vue";
import HouseUser from "../Icon/HouseUser.vue";
import MarketeqTax from "../Icon/MarketeqTax.vue";
import OutlineDataFile from "../Icon/OutlineDataFile.vue";
import OutlineSport from "../Icon/OutlineSport.vue";
import PeopleArrows from "../Icon/PeopleArrows.vue";
import ThunderOutline from "../Icon/ThunderOutline.vue";
import TrademarkCircle from "../Icon/TrademarkCircle.vue";
import ContrastBank from "../Icon/ContrastBank.vue";
const services = ref([
  {
    icon: PeopleArrows,
    name: `Disputes Resolution ( Civil and Criminal Litigation; Arbitration;
             Mediation)`,
  },
  {
    icon: HouseUser,
    name: `Real Estate And Property Law (Acquisition; Transfer; Construction; Due
           Diligence; Finance)`,
  },
  { icon: CompanyIcon, name: "Company Secreterial and Corporate Governance" },
  { icon: TrademarkCircle, name: "Taxation Law" },
  { icon: OutlineSport, name: "Sports & Entertainment Law" },
  { icon: MarketeqTax, name: "Capital Market and Securities" },
  {
    icon: Group,
    name: "Intellectual Property law (Patents; Designs; Trademarks; Copyrights)",
  },
  { icon: ThunderOutline, name: "Energy & Natural Resources (Oil & Gas; Electricity)" },
  { icon: ContrastBank, name: "Banking, Finance & Insurance" },
  { icon: ClarityEmployee, name: "Employment and Labour Law" },
  { icon: BusinessIcon, name: "Business Recovery and Insolvency" },
  { icon: OutlineDataFile, name: "Data Protection and Privacy" },
  { icon: null, name: "Transportation and Logistics (Maritime; Aviation; Road & Rail)" },
  { icon: null, name: "Regulatory Compliance and Government Relations" },
]);
</script>
