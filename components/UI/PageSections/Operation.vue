<!-- 
+  This component is responsible for displaying the operating standards of the firm.
+  It displays an image of a businessman, a title, an icon representing standards,
+  a description of the standards, and a button to toggle the visibility of more details.
+-->
<template>
  <div id="operation" class="">
    <div class="flex w-full object-cover h-[156px] lg:h-[551px] rounded-full">
      <img
        src="@/assets/img/businessman-male-lawyer-judge-consult-having-team-meeting-with-client.png"
        class="w-[100%] object-cover h-[156px] lg:h-[551px]"
        alt=""
      />
    </div>
    <div class="flex flex-col items-center justify-center py-20 gap-4">
      <div class="flex gap-4 items-center">
        <p
          class="font-bold text-lg lg:text-[60px] md:text-3xl text-center lg:leading-[93.17px] pt-serif-bold"
        >
          Our Operating Standards
        </p>
      </div>
      <div><UIIconStandardsIcon /></div>

      <div
        :class="showMore ? 'text-justify' : ' text-center'"
        class="lg:text-[28px] text-[14px] flex flex-col gap-4 lg:leading-[46.8px] w-[80%] font-medium"
      >
        <p>
          We will provide our services to you and your business with reasonable care in
          accordance with the high professional standards expected of us and in a timely
          manner. The nature and content of any service carried out will necessarily
          reflect the specific scope and limitations of our engagement, the amount and
          accuracy of information provided to us and the timeline within which the
          service/advice is required.
        </p>
        <p v-if="showMore || showAll">
          If general advice is provided, the applicability of this will depend on the
          particular circumstances in which it is to be used by you (of which we might not
          be aware) and should be weighed accordingly. In relation to any particular
          transaction, specific advice should always be sought and all material
          information provided to us. In order to enable us fulfil our responsibilities to
          you and your company, you agree on request, to provide us with complete,
          accurate and timely information to carry out any obligations ascribed to or
          undertaken or within you and your business’ control.
        </p>
        <p v-if="showMore || showAll">
          If general advice is provided, the applicability of this will depend on the
          particular circumstances in which it is to be used by you (of which we might not
          be aware) and should be weighed accordingly. In relation to any particular
          transaction, specific advice should always be sought and all material
          information provided to us. In order to enable us fulfil our responsibilities to
          you and your company, you agree on request, to provide us with complete,
          accurate and timely information to carry out any obligations ascribed to or
          undertaken or within you and your business’ control.
        </p>
        <p v-if="showMore || showAll">
          Where we receive confidential information, we would take such steps as we, in
          good faith think, fit to preserve confidential information from unauthorized
          disclosure or other use. To ensure we give satisfactory services to clients, we
          insist that our staff meet certain standard with regards to clients’ care. Our
          standards include:
        </p>
        <ul v-if="showMore || showAll" class="list-disc ml-6">
          <li>
            Extend to all clients a high standard of courtesy and respect at all times.
          </li>
          <li>
            Clients receive copies of all relevant and pertinent correspondences as
            requested.
          </li>
          <li>
            Correspondences received from any party are generally to be dealt with as soon
            as possible and not later than 3 working days from the date of its receipt.
          </li>
          <li>Report to our Clients regularly as to progress of their matters.</li>
        </ul>
      </div>
      <div>
        <button
          @click="toggleShowMore"
          class="bg-card border-card py-2 rounded-lg !px-[72px] focus:ringrounded-lg border !text-white focus:outline-none focus:ring text-center"
        >
          {{ showMore ? "View Less" : "View More" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const showMore = ref(false);
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>
<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(15, 14, 14, 0.504);
  /* background: linear-gradient(
       from 270deg at 50% 50%,
       rgba(15, 14, 14, 0.526) 184.15632963180542deg,
       rgba(13, 11, 11, 0.33) 270.5531358718872deg,
       rgba(13, 11, 11, 0.626) 353.79907608032227deg
     ),
     lightgray 50%;*/
}
</style>
