<template>
  <div class="flex flex-col">
    <div
      v-for="item in services"
      :key="item"
      class="background bg-right-bottom bg-contain bg-no-repeat py-20"
      :class="item.bgWhite ? 'bg-[#ffffff2f]' : ' bg-[#1F2732] text-white'"
      :style="{
        backgroundImage: `url(${BG})`,
      }"
    >
      <div
        :class="item.bgWhite ? 'lg:flex-row' : ' lg:flex-row-reverse'"
        class="flex container flex-col mb-2 gap-[30px]"
      >
        <div class="lg:w-[494px] object-contain">
          <img :src="item.icons" alt="" class="lg:w-[494px] object-cover" />
        </div>
        <div class="flex flex-col lg:gap-5 gao-3 w-full">
          <div class="flex flex-col lg:gap-[14px]">
            <h4
              :class="item.bgWhite ? 'text-[#222222]' : '  text-white'"
              class="!font-normal text-[40px] lg:text-[55px] leading-[48px] pt-serif-bold text-[#222222]"
            >
              {{ item.name }}
            </h4>
            <p
              class="lg:leading-[23px] uppercase text-[#A70314] text-[20px] lg:text-[30px] font-normal"
            >
              {{ item.title }}
            </p>
          </div>
          <p
            v-for="list in item.memo?.slice(0, 2)"
            :key="list"
            v-html="list.text"
            class="text-[20px] font-normal text-justify leading-[27px]"
          ></p>
        </div>
      </div>
      <p
        v-for="list in item.memo?.slice(2, 4)"
        :key="list"
        v-html="list.text"
        class="text-[20px] font-normal container text-justify !mb-5 leading-[27px]"
      ></p>
      <div class="flex lg:flex-row container flex-col justify-between">
        <div v-if="item.memberships.length !== 0" class="">
          <h4
            class="!font-normal text-[30px] lg:text-[40px] leading-[55px] pt-serif-bold text-[#A70314]"
          >
            Memberships
          </h4>
          <div class="flex flex-col gap-3">
            <p
              v-for="(list, index) in item.memberships"
              :key="list"
              v-html="list.item"
              :class="
                index === item.memberships.length - 1
                  ? 'pb-4'
                  : 'pb-4 border-b-[2px] border-b-[#3A4553]'
              "
              class="lg:text-[20px] text-[16px] font-normal leading-[27px]"
            ></p>
          </div>
        </div>
        <div v-if="item.education.length !== 0" class="justify-end">
          <h4
            class="!font-normal text-[30px] lg:text-[40px] leading-[55px] pt-serif-bold text-[#A70314]"
          >
            Education
          </h4>
          <div class="flex flex-col gap-3">
            <p
              v-for="(list, index) in item.education"
              :key="list"
              v-html="list.item"
              :class="
                index === item.education.length - 1
                  ? 'pb-4'
                  : 'pb-4 border-b-[2px] border-b-[#3A4553]'
              "
              class="lg:text-[20px] text-[16px] font-normal leading-[27px]"
            ></p>
          </div>
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
import BG from "@/assets/img/bg.png";
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
    bgWhite: true,
    memo: [
      {
        text: `<b class="!font-extrabold">Harold Uku</b> is the Founding Partner of the Firm. He heads the Firm’s Corporate/Commercial and Transactions Department. He obtained his Bachelor-of-Laws Degree in 2013 from the Rivers State University, Port Harcourt, proceeded to the Nigerian Law School, Lagos immediately thereafter and was called to the Nigerian Bar in 2014.`,
      },
      {
        text:
          "Harold began his legal career as a State Counsel with the Kwara State Ministry of Justice where he gained first-hand experience with criminal trials and proceedings and offered pro bono legal representation to several indigent prison inmates.",
      },
      {
        text: `He thereafter joined the law firm of S. A. Alali & Co. (LivingSpring Chambers), Port Harcourt and subsequently went on to join Tsedaqah Attorneys (Port Harcourt and Lagos) as an Associate and worked for over three years, rising to the position of Senior Associate. In a bid to further broaden his commercial practice experience, he took up employment with a non-banking financial institution as the Manager, Legal and Regulatory Compliance before setting up <b class="!font-extrabold">H.O.D LEGAL.</b>`,
      },
      {
        text:
          "With about a decade experience in active private and in-house corporate legal practice, he is skilled in commercial disputes resolution such as litigation, arbitration and mediation and advises clients on a wide variety of corporate and transactional legal issues. His practice interests cut across construction law, projects and infrastructure, entertainment and intellectual property law, taxation and emerging tech. Harold’s attention to details and his devotion to helping clients resolve complex legal issues make him a go-to attorney. In his spare time, he enjoys playing chess with family and friends. He is a tech enthusiast, a lover of good music, Hip-Hop aficionado and Google Local Guide.",
      },
    ],

    memberships: [
      { item: `Member, Nigerian Bar Association (NBA)` },
      {
        item: `Associate Member, Institute of Chartered <br/> Mediators and Conciliators (ICMC) `,
      },
      {
        item: `Member, Nigerian Bar Association <br/> Section on Business Law (NBA-SBL)`,
      },
      {
        item: `Associate Member, Chartered Institute of <br/> Arbitrators (UK), Nigeria Branch (CIArb)`,
      },
      {
        item: `Student Member, Chartered Institute of <br/> Taxation of Nigeria (CITN)`,
      },
      {
        item: `Member, Fintech Association of Nigeria (FinTechNGR)`,
      },
    ],
    education: [
      {
        item: `BL - Nigerian Law School, Lagos`,
      },
      {
        item: `LL.B - Rivers State University, Port Harcourt`,
      },
    ],
  },
  {
    icons: UZEZI_AMAWHE,
    title: " Partner ",
    name: "UZEZI AMAWHE",
    bgWhite: false,
    memo: [
      {
        text: `<b class="!font-extrabold">UZEZI AMAWHE</b> is a Partner of the Firm. He leads the Real Estate/Property Law and Business Law Practice Groups of the Firm. He obtained his LL.B (Hons) from the Delta State University and proceeded to the Nigerian Law School (Lagos Campus) and was called to the Nigerian Bar in 2017.`,
      },
      {
        text: `Uzezi has over six years’ experience in active legal practice, having previously been the principal partner of <b class="!font-extrabold">ZELLIOUS LEGAL.</b> <br><br>He is a skilled Corporate law practitioner in a vast sphere of law practice which includes negotiation, property management laws, family law, tax, banking and finance law, Fintech law, Data Protection and Data Privacy, Tech law, Sport and Entertainment Law.<br><br> Outside his legal practice he enjoys singing, learning, working out, Volunteering for humanitarian work, listening to music and travelling.`,
      },
    ],
    memberships: [
      {
        item: `Member, Nigerian Bar Association (NBA)`,
      },
      {
        item: ` Member, NBA Section on Business Law’s <br/> Travel, Tourism and Hospitality Committee`,
      },
      {
        item: `Member, NBA Section on Business Law’s <br/> Intellectual Property Law Committee`,
      },
    ],
    education: [
      {
        item: `BL - Nigerian Law School, Lagos`,
      },
      {
        item: `LL.B - Delta State University`,
      },
    ],
  },
  {
    icons: GAMALIEL_WORLY,
    title: " Partner ",
    name: "GAMALIEL WORLU",
    bgWhite: true,

    memo: [
      {
        text: `<b class="!font-extrabold">GAMALIEL WORLU </b>is a Partner of the Firm. He heads the Dispute Resolution Practice Group. After obtaining his LL.B (Hons) from the Rivers State University, he proceeded to the Nigerian Law School and was called to the Nigerian Bar in 2015.`,
      },
      {
        text: `Before joining the firm, he was the founder and Principal Solicitor of ELIKOR LP. With over eight years in active private legal practice, Gamaliel is an adept and astute litigator and is directly in charge of and responsible for coordinating the Firm’s dispute resolution practice which includes debt recovery, insolvency, receivership, family law, tax litigation, banking law including loan syndication, debentures and debt instruments.<br> <br> Whenever he is not resolving knotty legal issues for Clients, Gamaliel enjoys reading, taking walks, working out, volunteering for humanitarian works, listening to music and travelling.`,
      },
    ],
    memberships: [
      {
        item: `Member, Nigerian Bar Association (NBA)`,
      },
      {
        item: `Ad-Hoc Member, NBA Lagos Branch 2019 Electoral Committee`,
      },
    ],
    education: [
      { item: `BL - Nigerian Law School, Lagos` },
      {
        item: `LL.B - Rivers State University, Port Harcourt`,
      },
    ],
  },

  {
    icons: SARAH_HAROLD_UKU,
    title: "Of Counsel ",
    name: "SARAH HAROLD UKU",
    bgWhite: false,
    memo: [
      {
        text: `<b class="!font-extrabold">SARAH HAROLD UKU</b>  is an Of Counsel and a Capital Market, Company Secretarial & Corporate Governance Consultant with Firm. She currently heads the Legal and Compliance Department of Gresham Asser Management Limited, a Securities and Exchange Commission (SEC) regulated company and player in the capital Market space. She is a people-centric and detail-oriented lawyer, dedicated to improving policies and procedures in all business areas and equally ensuring that business transactions/operations are conducted within the acceptable limits of the law and applicable industry regulations and standards.`,
      },
      {
        text:
          " With a firm background in courtroom practice and advocacy, alternative dispute resolution and corporate governance, Sarah has also gained cognate experience in the field of corporate/commercial practice. She has provided legal advice to individuals and corporate organizations on a wide range of regulatory compliance issues while interfacing with regulatory agencies on behalf of clients. In the course of her career, Sarah has represented both local and foreign clients in disputes relating, but not limited, to contracts, employment, debt recovery claims at both trial and appellate courts. Sarah also has experience in company secretarial work and legal due diligence and has qualified as a chartered secretary from the Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN).",
      },
      {
        text:
          "She is a graduate of the Rivers State University, Port Harcourt where she obtained her Bachelor of Laws (LL.B) degree and an alumnus of the Nigerian Law School, Lagos campus where she obtained her B.L and was thereafter called to the Nigerian Bar.",
      },
      {
        text:
          "She is a member of the Nigeria Bar Association (NBA); Nigeria Bar Association Section on Business Law (NBA-SBL); Nigerian Bar Association Section on Legal Practice (NBA-SLP), Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN), Student Member of the Chartered Institute of Personnel Management (CIPM) and Women in Successful Career (WISCAR).",
      },
    ],
    memberships: [],
    education: [],
  },
  {
    icons: IKOPEMUGH_NENGIM,
    title: "Of Counsel ",
    name: "IKPOEMUGH NENGIM",
    bgWhite: true,
    memo: [
      {
        text:
          "NENGIM IKPOEMUGH Royal is an Of Counsel with H.O.D LEGAL. He is an astute transactional lawyer with over 10 years cumulative experience in legal services. He specializes in corporate/commercial transactions, dispute resolutions compliance, risk management, claims management, data protection law, employment law, inheritance & succession law, amongst other diverse areas of law.",
      },
    ],
    memberships: [
      {
        item: `Nigeria Bar Association`,
      },
      {
        item: `Compliance Institute of Nigeria`,
      },
    ],
    education: [
      { item: ` BL - Nigerian Law School(Abuja)  ` },
      { item: ` LL.M - Rivers State University` },
      { item: ` LL.M - Rivers State University` },
    ],
  },

  {
    icons: FRANCIS_NWABUNWANNE,
    title: "Of Counsel ",
    name: "FRANCIS NWABUNWANNE",
    bgWhite: false,
    memo: [
      {
        text:
          "Francis Nwabunwanne is an Of Counsel of the Firm. He is a Real Estate Expert. He obtained his LL.B (HONS) from the prestigious Nnamdi Azikiwe University and proceeded to the Nigeria Law School (Lagos Campus) and was called to the Nigerian Bar in 2017.",
      },
      {
        text:
          "Francis has had over six years experience in active legal practice ranging from corporate, Real Estate, Investment and Dispute Resolution. He is a skilled Property Manager and a Real Estate Practitioner and  has experience in a vast sphere of law practice which includes, taxation, banking and finance law, Alternative Disputes Resolution, Fintech law, and Entertainment law. ",
      },
    ],
    memberships: [
      {
        item: `Nigeria Bar Association (NBA)`,
      },
    ],
    education: [
      { item: ` BL - Nigerian Law School` },
      { item: ` LL.B - Nnamdi Azikiwe University  ` },
      { item: ` LL.M - (in view) ` },
    ],
  },
  {
    icons: DAVID_OKOROGBA,
    title: "Of Counsel ",
    name: "DAVID OKOROGBA",
    bgWhite: true,

    memo: [
      {
        text:
          "David is an Of Counsel and an Energy, Mergers and Acquisitions Consultant with the Firm. He is a triply qualified legal counsel licensed to practice law in Nigeria and the provinces of Ontario & Alberta, Canada and has more than a decade of extensive experience in corporate and commercial practice and deal structuring, energy, public procurement and mergers and acquisition.",
      },
      {
        text:
          "He commenced his practice in a leading full-service commercial law firm where he advised a number of domestic and international clients on commercial transactions, regulatory services and commercial disputes resolution-including Nigeria’s central bank, asset management corporation and the federal revenue service.",
      },
      {
        text:
          "Following a successful practice, David joined one of the big four global  consulting firms where he advised on high-profile projects involving international oil companies, Nigeria’s national oil company and leading indigenous energy firms- most recently advising on the legal, commercial, regulatory and fiscal aspects of Nigeria’s petroleum Industry Act and the establishment of an embedded power project in Nigeria by a Brentwood Institution. ",
      },
      {
        text:
          "He Possesses an LL.M in International Commercial Law from the University Of Dundee, United Kingdom and advises on procurement and commercial contracts for a highly ranked Canadian university. ",
      },
    ],
    memberships: [],
    education: [],
  },
]);
</script>
<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
}
</style>
