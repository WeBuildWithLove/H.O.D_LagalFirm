<<<<<<<<<<<<<< ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>> +
<!--
+  This is the about section of the page which provides information about the company H.O.D Legal.
+  It includes a section with a title and text about the company. It also includes two images
+  above and below the text section.
+-->
<template>
  <div id="about" class="lg:py-20 py-10 lg:px-20 px-4 container lg:!w-[80%] w-full">
    <div
      class="flex flex-col items-center justify-center space-y-3 md:space-y-76 font-medium text-2xl py-4"
    >
      <div class="flex gap-4 justify-center items-center">
        <UIIconLeftPointer class="lg:w-[100px] w-[30%]" />
        <!-- Title of the section -->
        <p
          class="font-bold text-lg text-center lg:leading-[93.17px] leading-[23.29px] lg:text-[72px] md:text-3xl"
        >
          About us
        </p>
        <UIIconRightPointer class="lg:w-[100px] w-[30%]" />
        <!-- <img src="@/assets/svg/RightPointer.svg" alt="red pointer" /> -->
      </div>
      <div class="text-center text-[#3A3A38] leading-9">
        <p
          class="lg:text-[25px] text-justify lg:leading-[40.4px] leading-[24.92px] text-[16px]"
        >
          <b class="text-card">H.O.D LEGAL </b> is a full service law firm that was
          established to offer a broad range of legal services to its clients. Through
          hard work, consistent dedication and disciplined professionalism, we have
          continued to grow as one of Nigeria’s most reliable legal advisors. We are a
          Harbour of Dynamic legal service providers built upon the core values of
          reliability, trustworthiness, business efficiency and transparency. With
          well-manned offices in Lagos and Port Harcourt, Nigeria and making the best use
          of technology, we are able to serve the needs of our clientele comprising of
          individuals, businesses (startups and established brands) and not-for-profits.
        </p>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col justify-center mt-10 gap-4">
      <img
        src="@/assets/img/StatueOfJustice.png"
        alt="Staue of Justice"
        class="lg:w-[358px] w-full object-cover"
      />
      <div class="flex flex-col h-full gap-4">
        <img
          src="@/assets/img/ScaleOfJustice.png"
          alt="scale of Justice"
          class="lg:h-[235px] lg:block hidden object-cover w-full"
        />
        <img
          src="@/assets/img/Partnership.png"
          alt="hands shaking"
          class="lg:h-[235px] lg:block hidden object-cover w-full"
        />
      </div>
      <img
        src="@/assets/img/Gavel.png"
        alt="Gavel"
        class="lg:w-[358px] w-full object-cover"
      />
    </div>
  </div>
</template>
