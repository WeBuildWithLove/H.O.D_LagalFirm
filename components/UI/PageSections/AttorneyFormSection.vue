<template>
  <div id="attorneyFormSection" class="">
    <div
      :style="{
        backgroundImage: `url(${image})`,
      }"
      class="flex w-full object-cover justify-center items-start h-auto py-20 lg:py-40"
    >
      <div class="bg-[#1F2732] container min-h-[349px] w-full p-4">
        <div class="flex flex-col justify-between py-10 lg:px-40 gap-4">
          <div class="flex lg:flex-row flex-col gap-4 w-full">
            <UIInputAuthInput
              :error="false"
              type="text"
              label="Full Name *"
              placeholder="Full Name *"
              required
            >
            </UIInputAuthInput>
            <UIInputAuthInput
              label="Email Address *"
              placeholder="Email Address *"
              :error="false"
              type="email"
              required
            >
            </UIInputAuthInput>
          </div>
          <div class="flex lg:flex-row flex-col gap-4 w-full">
            <UIInputAuthInput
              label="Phone Number *"
              placeholder="Phone Number *"
              :error="false"
              type="tel"
              required
            >
            </UIInputAuthInput>
            <UIInputAuthInput
              label="Subject *"
              placeholder="Subject *"
              :error="false"
              type="text"
              required
            >
            </UIInputAuthInput>
          </div>
          <div
            class="w-full font-light font-Satoshi400 text-[18px] outline-none bg-transparent text-[#D7D7D7] border-b-[#3A4553] !py-2 border-b-[1px] opacity-[0.8029] text-sm"
          >
            <a-textarea
              class="!w-full text-[18px] text-[#D7D7D7] font-medium placeholder:text-[#D7D7D7]"
              :bordered="false"
              required
              :auto-size="{ minRows: 5, maxRows: 5 }"
              placeholder="Your Message *"
            >
            </a-textarea>
          </div>

          <div class="flex justify-center">
            <UIButton class="text-[#1F2732] bg-white text-[22px] !px-[45px]">
              Get An Appoinment
            </UIButton>

            <!-- <button
              class="p-[15px_48px_15px_48px] bg-[#011C2A] lg:w-auto w-full font-medium text-white text-[16px] leading-[16px] rounded-[5px]"
            >
              Get An Appoinment
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import image from "@/assets/img/Photo2.png";
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
