<template>
  <header
    class="w-full sticky top-0 z-30 flex flex-col lg:flex-row shadow-md bg-brand lg:bg-white text-light"
  >
    <div class="flex justify-between items-center w-full lg:p-0 p-2 lg:w-auto">
      <NuxtLink to="/" class="">
        <img
          src="@/assets/img/roundLogo.jpeg"
          alt="Logo"
          height="101.76px"
          width="95px"
          class="hidden lg:flex"
        />
        <img
          src="@/assets/img/whiteLogo.png"
          alt="Logo"
          height="38px"
          width="123px"
          class="flex lg:hidden"
        />
      </NuxtLink>

      <button v-if="route.name !== 'attorneys'" class="lg:hidden p-2" @click="toggleMenu">
        <img
          v-if="!isMenuOpen"
          src="@/assets/svg/menu.svg"
          alt="Open Menu"
          class="h-8 w-8"
        />
        <img v-else src="@/assets/svg/menu.svg" alt="Close Menu" class="h-8 w-8" />
      </button>
      <NuxtLink v-else to="/" class="lg:hidden flex space-x-4 items-center my-2 lg:my-0">
        <img src="@/assets/svg/NavbarPointer.svg" height="29px" width="29px" />
        <p class="text-[16px] text-white lg:text-[#222222] font-medium">HOME</p>
      </NuxtLink>
    </div>

    <div class="bg-card">
      <UIDivider direction="vertical" width="2px" />
    </div>
    <div class="w-full lg:py-3">
      <div class="hidden lg:flex flex-wrap justify-between px-2">
        <div class="flex gap-3.5 px-4">
          <a href="tel: +234 803 292 8072" class="flex space-x-1">
            <img src="@/assets/svg/Call.svg" alt="Call-Icon" height="16px" width="16px" />
            <p>+234 803 292 8072</p>
          </a>
          <div class="flex space-x-1">
            <img src="@/assets/svg/Time.svg" alt="Time-Icon" height="16px" width="16px" />
            <p>MONDAY - FRIDAY - 8:00AM - 4:00PM</p>
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
        <div>BARRISTERS | SOLICITORS | CORPORATE CONSULTANTS</div>
      </div>
      <div class="my-3 bg-card lg:flex hidden">
        <UIDivider direction="horizontal" width="2px" />
      </div>
      <!-- animate__fadeInDown     :class="{
      '-translate-x-[100%]': !showNavBar,
      'translate-x-0': showNavBar,
    }"
-->
      <div
        :class="`flex-col lg:flex-row items-center  animate__animated w-full lg:w-auto lg:flex transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? 'animate__fadeInLeft -translate-x-[100%] animate__animated sticky z-20 lg:h-auto h-screen '
            : 'hidden '
        }`"
      >
        <div
          class="flex flex-col lg:flex-row lg:flex-wrap justify-between items-left w-full lg:px-2 text-white lg:text-[#3A3A38]"
        >
          <div class="flex flex-col lg:flex-row lg:gap-4 gap-7 px-4">
            <NuxtLink to="/" class="flex space-x-4 items-center my-2 lg:my-0">
              <img src="@/assets/svg/NavbarPointer.svg" height="29px" width="29px" />
              <p class="text-[16px] text-white lg:text-[#222222] font-medium">HOME</p>
            </NuxtLink>
            <a
              v-if="route.name === 'index'"
              href="#about"
              @click="toggleMenu"
              class="flex space-x-4 items-center my-2 lg:my-0"
            >
              <!-- <img
                src="@/assets/svg/BulletPoint.svg"
                height="16px"
                width="16px"
                class="hidden md:flex"
              /> -->
              <UIIconBulletPoint
                :class="{
                  ' !text-[#A70314] ': currentHash === '#about',
                }"
                class="text-white lg:text-[#001025]"
              />

              <!-- <img
                src="@/assets/svg/WhiteBulletPoint.svg"
                alt="Bulletpoint"
                height="16px"
                width="16px"
                class="flex md:hidden"
              /> -->
              <p
                :class="{
                  ' !text-[#A70314] ': currentHash === '#about',
                }"
                class="text-[16px] text-white lg:text-[#222222] font-medium"
              >
                ABOUT
              </p>
            </a>
            <a
              v-if="route.name === 'index'"
              @click="toggleMenu"
              href="#services"
              class="flex space-x-4 items-center my-2 lg:my-0"
            >
              <UIIconBulletPoint
                :class="{
                  ' !text-[#A70314] ': currentHash === '#services',
                }"
                class="text-white lg:text-[#001025]"
              />

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
              <p
                :class="{
                  ' !text-[#A70314] ': currentHash === '#services',
                }"
                class="text-[16px] text-white lg:text-[#222222] font-medium"
              >
                SERVICES
              </p>
            </a>
            <a
              v-if="route.name === 'index'"
              @click="toggleMenu"
              href="#ideology"
              class="flex space-x-4 items-center my-2 lg:my-0"
            >
              <UIIconBulletPoint
                :class="{
                  ' !text-[#A70314] ': currentHash === '#ideology',
                }"
                class="text-white lg:text-[#001025]"
              />

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
              <p
                :class="{
                  ' !text-[#A70314] ': currentHash === '#ideology',
                }"
                class="text-[16px] text-white lg:text-[#222222] font-medium"
              >
                CORE IDEOLOGY
              </p>
            </a>
            <a
              v-if="route.name === 'index'"
              @click="toggleMenu"
              href="#firm"
              class="flex space-x-4 items-center my-2 lg:my-0"
            >
              <UIIconBulletPoint
                :class="{
                  ' !text-[#A70314] ': currentHash === '#firm',
                }"
                class="text-white lg:text-[#001025]"
              />

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
              <p
                :class="{
                  ' !text-[#A70314] ': currentHash === '#firm',
                }"
                class="text-[16px] text-white lg:text-[#222222] font-medium"
              >
                OUR FIRM
              </p>
            </a>
            <a
              v-if="route.name === 'index'"
              @click="toggleMenu"
              href="#attorneyFormSection"
              class="flex space-x-4 items-center my-2 lg:my-0"
            >
              <UIIconBulletPoint
                :class="{
                  ' !text-[#A70314] ': currentHash === '#attorneyFormSection',
                }"
                class="text-white lg:text-[#001025]"
              />

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
              <p
                :class="{
                  ' !text-[#A70314] ': currentHash === '#attorneyFormSection',
                }"
                class="text-[16px] text-white lg:text-[#222222] font-medium"
              >
                CONTACT
              </p>
            </a>
          </div>
          <a
            href="#attorneyFormSection"
            class="text-light lg:flex hidden hover:bg-brand hover:text-white py-2 px-4 rounded-lg border border-[#E7E7E7]focus:outline-none focus:ring"
            >FREE CONSULTATION</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
// import Divider from "../../UI/Divider/index.vue";
// import Button from "../../UI/Button/index.vue";
const route = useRoute();

const router = useRouter();

const isMenuOpen = ref(false);
const currentHash = ref("");

const handleClick = (event) => {
  event.preventDefault();
  toggleMenu();
  if (typeof window !== "undefined") {
    window.location.hash = `#${props.targetHash}`;
  }
};

const updateHash = () => {
  if (typeof window !== "undefined") {
    currentHash.value = window.location.hash;
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentHash.value = window.location.hash;
    window.addEventListener("hashchange", updateHash);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("hashchange", updateHash);
  }
});

watch(currentHash, (newHash) => {
  console.log(`Hash changed to: ${newHash}`);
});
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
