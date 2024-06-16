<template>
  <Nav class="w-full flex flex-col md:flex-row bg-brand md:bg-white text-light">
    <div class="flex justify-between items-center w-full md:w-auto">
      <img
        src="../../../assets/img/Logo.svg"
        alt="Logo"
        height="101.76px"
        width="95px"
        class="hidden md:flex"
      />
      <img
        src="../../../assets/img/MobileLogo.svg"
        alt="Logo"
        height="38px"
        width="123px"
        class="flex md:hidden"
      />

      <button class="md:hidden p-2" @click="toggleMenu">
        <img
          v-if="!isMenuOpen"
          src="../../../assets/svg/menu.svg"
          alt="Open Menu"
          class="h-8 w-8"
        />
        <img
          v-else
          src="../../../assets/svg/menu.svg"
          alt="Close Menu"
          class="h-8 w-8"
        />
      </button>
    </div>

    <div class="bg-card">
      <Divider direction="vertical" width="2px" />
    </div>
    <div class="w-full py-5">
      <div class="hidden md:flex justify-between px-2">
        <div class="flex gap-3.5">
          <div class="flex space-x-1">
            <img
              src="../../../assets/svg/Call.svg"
              alt="Call-Icon"
              height="16px"
              width="16px"
            />
            <p>+234 803 292 8072</p>
          </div>
          <div class="flex space-x-1">
            <img
              src="../../../assets/svg/Time.svg"
              alt="Time-Icon"
              height="16px"
              width="16px"
            />
            <p>MONDAY - FRIDAY - 7:30AM - 6:30PM</p>
          </div>
          <div class="flex space-x-1">
            <img
              src="../../../assets/svg/Contact.svg"
              alt="Email-Icon"
              height="16px"
              width="16px"
            />
            <p>contact@hodlegal.org</p>
          </div>
        </div>
        <div>BARRISTERS | SOLICITORS | CORPATE CONSULTANTS</div>
      </div>
      <div class="my-3 bg-card md:flex hidden">
        <Divider direction="horizontal" width="2px" />
      </div>
      <div
        :class="`flex-col md:flex-row items-center w-full md:w-auto md:flex ${isMenuOpen ? 'flex' : 'hidden'}`"
      >
        <div
          class="flex flex-col md:flex-row justify-between items-left w-full md:px-2 text-white md:text-[#3A3A38]"
        >
          <div class="flex flex-col md:flex-row md:gap-4 px-4">
            <div class="flex space-x-4 items-center my-2 md:my-0">
              <img
                src="../../../assets/svg/NavbarPointer.svg"
                height="29px"
                width="29px"
              />

              <p>HOME</p>
            </div>
            <div class="flex space-x-4 items-center my-2 md:my-0">
              <img
                src="../../../assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              />
              <img
                src="../../../assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>ABOUT</p>
            </div>
            <div class="flex space-x-4 items-center my-2 md:my-0">
              <img
                src="../../../assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              />
              <img
                src="../../../assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>SERVICES</p>
            </div>
            <div class="flex space-x-4 items-center my-2 md:my-0">
              <img
                src="../../../assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              />
              <img
                src="../../../assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>OUR IDEOLOGYS</p>
            </div>
            <div class="flex space-x-4 items-center my-2 md:my-0">
              <img
                src="../../../assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              />
              <img
                src="../../../assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>OUR FIRM</p>
            </div>
            <div class="flex space-x-4 items-center my-2 md:my-0">
              <img
                src="../../../assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              />
              <img
                src="../../../assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              />
              <p>CONTACT</p>
            </div>
          </div>
          <Button class="text-light md:flex hidden">FREE CONSULTATION</Button>
        </div>
      </div>
    </div>
  </Nav>
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
