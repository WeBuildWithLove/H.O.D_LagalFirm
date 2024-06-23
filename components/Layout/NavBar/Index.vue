<template>
  <header class="w-full sticky top-0 z-30 flex flex-col  lg:flex-row bg-brand lg:bg-white text-light">
    <div class="flex justify-between items-center w-full lg:p-0 p-2 lg:w-auto">
      <img
        src="@/assets/img/Logo.svg"
        alt="Logo"
        height="101.76px"
        width="95px"
        class="hidden lg:flex"
      />
      <img
        src="@/assets/img/MobileLogo.svg"
        alt="Logo"
        height="38px"
        width="123px"
        class="flex lg:hidden"
      />

      <button class="lg:hidden p-2" @click="toggleMenu">
        <img
          v-if="!isMenuOpen"
          src="@/assets/svg/menu.svg"
          alt="Open Menu"
          class="h-8 w-8"
        />
        <img
          v-else
          src="@/assets/svg/menu.svg"
          alt="Close Menu"
          class="h-8 w-8"
        />
      </button>
    </div>

    <div class="bg-card">
      <UIDivider direction="vertical" width="2px" />
    </div>
    <div class="w-full py-3">
      <div class="hidden lg:flex justify-between px-2">
        <div class="flex gap-3.5 px-4">
          <a href="tel: +234 803 292 8072" class="flex space-x-1">
            <img
              src="@/assets/svg/Call.svg"
              alt="Call-Icon"
              height="16px"
              width="16px"
            />
            <p>+234 803 292 8072</p>
          </a>
          <div class="flex space-x-1">
            <img
              src="@/assets/svg/Time.svg"
              alt="Time-Icon"
              height="16px"
              width="16px"
            />
            <p>MONDAY - FRIDAY - 7:30AM - 6:30PM</p>
          </div>
          <a href="mailto:contact@hodlegal.org " class="flex space-x-1">
            <img
              src="@/assets/svg/Contact.svg"
              alt="Email-Icon"
              height="16px"
              width="16px"
            />
            <p>contact@hodlegal.org</p>
          </a>
        </div>
        <div>BARRISTERS | SOLICITORS | CORPATE CONSULTANTS</div>
      </div>
      <div class="my-3 bg-card lg:flex hidden">
        <UIDivider direction="horizontal" width="2px" />
      </div>
      <div
        :class="`flex-col lg:flex-row items-center w-full lg:w-auto lg:flex ${isMenuOpen ? 'flex sticky z-20' : 'hidden'}`"
      >
        <div
          class="flex flex-col lg:flex-row justify-between items-left w-full lg:px-2 text-white lg:text-[#3A3A38]"
        >
          <div class="flex flex-col lg:flex-row lg:gap-4 px-4">
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
              <img
                src="@/assets/svg/NavbarPointer.svg"
                height="29px"
                width="29px"
              />
              <p class="text-[16px]">HOME</p>
            </NuxtLink>
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
              <!-- <img
                src="@/assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              /> -->
              <UIIconBulletPoint class="text-white lg:text-[#001025]"/>

              <img
                src="@/assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>ABOUT</p>
            </NuxtLink>
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
            <UIIconBulletPoint class="text-white lg:text-[#001025]"/>

              <!-- <img
                src="@/assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              /> -->
              <img
                src="@/assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>SERVICES</p>
            </NuxtLink>
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
            <UIIconBulletPoint class="text-white lg:text-[#001025]"/>

              <!-- <img
                src="@/assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              /> -->
              <img
                src="@/assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>OUR IDEOLOGYS</p>
            </NuxtLink>
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
            <UIIconBulletPoint class="text-white lg:text-[#001025]"/>

              <!-- <img
                src="@/assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              /> -->
              <img
                src="@/assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>OUR FIRM</p>
            </NuxtLink>
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
            <UIIconBulletPoint class="text-white lg:text-[#001025]"/>

              <!-- <img
                src="@/assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              /> -->
              <!-- <img
                src="@/assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              /> -->
              <p>CONTACT</p>
            </NuxtLink>
          </div>
          <UIButton class="text-light lg:flex hidden">FREE CONSULTATION</UIButton>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import Divider from "../../UI/Divider/index.vue";
import Button from "../../UI/Button/index.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
