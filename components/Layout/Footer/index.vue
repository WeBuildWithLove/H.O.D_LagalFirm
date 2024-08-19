<template>
  <footer class="bg-card/100 text-white lg:pt-12 space-y-6 lg:space-y-32">
    <div class="flex flex-col items-center justify-center gap-6 lg:flex-row">
      <div>
        <img
          src="@/assets/svg/Footer/Pointer.svg"
          alt="pointer"
          class="hidden lg:block"
        />
      </div>
      <div class="w-[194px] md:w-[221px] h-[59px] md:h-28">
        <img src="@/assets/img/whiteLogo.png" alt="logo" />
      </div>
      <div>
        <img
          src="@/assets/svg/Footer/pointerRight.svg"
          alt="pointer"
          class="hidden lg:block"
        />
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between px-4 md:px-12 lg:px-40 space-y-8 lg:space-y-0 lg:space-x-8"
    >
      <!-- <div class="space-y-8">
        <div>
          <hr class="border-white" />
          <p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Quick Link</p>
          <hr class="border-white" />
        </div>
        <div
          class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-[#D7D7D7]"
        >
          <div class="flex flex-col">
            <NuxtLink to="/">Home</NuxtLink>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#ideology">Our Vision</a>
            <a href="#firm">Our Firm</a>
            <a href="#attorneyFormSection">Contact</a>
          </div>
          <div class="flex flex-col">
            <a href="#attorneyFormSection">Get an appointment</a>
            <a href="#operation">Our Operating standard</a>
          </div>
        </div>
      </div>
       -->
      <div class="space-y-8">
        <div>
          <hr class="border-white" />
          <p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Practice Area</p>
          <hr class="border-white" />
        </div>
        <div class="text-[#D7D7D7]">
          <p>Disputes Resolution</p>
          <p>Real Estate & property</p>
          <p>Corporate & Estate</p>
          <p>Banking, Finance & Insurance</p>
          <p>Taxation</p>
          <p>Capital Market & Securities</p>
          <p>Transportation & Logistics</p>
          <p>Regulatory Compliance & Government Relations</p>
          <p>Intellectual Property</p>
          <p>Energy & Natural Resources</p>
          <p>Sports & Entertainment</p>
          <p>Employment & Labour</p>
          <p>Business Recovert & Insolvency</p>
          <p>Data Protection & Privacy</p>
        </div>
      </div>
      <div class="space-y-8">
        <div>
          <hr class="border-white" />
          <p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Contact us</p>
          <hr class="border-white" />
        </div>
        <div class="space-y-5 text-[#D7D7D7]">
          <div>
            <p>(+234) 803 292 8072</p>
            <p>(+234) 810 286 0630</p>
            <p>(+234) 803 071 7860</p>
          </div>
          <div>
            <p>contact@hodlegal.org</p>
            <!-- <p>Website:WWW.Hodlegal.Org</p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-[327px] space-y-8">
        <div>
          <hr class="border-white" />
          <p class="font-pt-serif text-xl lg:text-2xl font-bold py-2">Find Us</p>
          <hr class="border-white" />
        </div>
        <div class="space-y-6 text-[#D7D7D7]">
          <p class="capitalize">
            <b>Lagos:</b> <br />
            Plot 1, Block 99, olori Muyibat Oyefusi street, off omorinre Johnson street,
            Lekki Phase 1, lagos state, Nigeria.
          </p>
          <p class="capitalize">
            <b>Port Harcourt:</b>
            <br />
            11B, Birabi Street G.R.A.,Port Harcourt, Nigeria.
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-12 bg-brand py-10 lg:px-24">
      <!-- <hr class="border-[#fff]" /> -->
      <div
        class="font-lato flex flex-col md:flex-row justify-between py-4 space-y-4 lg:space-y-0"
      >
        <div class="text-xs flex items-center gap-2 lg:text-xl">
          Copyright © <span class="text-[#fff]">H.O.D Legal </span> | Built by:
          <a href="https://wecr8t.xyz/" target="_blank" class="lg:w-[10%] w-[40%]">
            <UIIconWecr8tLogo class="w-[100%]" />
          </a>
        </div>

        <!-- <div
          class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 hidden md:flex"
        >
          <p class="text-[#A70314] text-xl">Follow:</p>
          <div class="flex space-x-6">
            <img
              src="../../../assets/svg/Footer/Instagram.svg"
              alt="instagram-icon"
              width="19px"
              height="19px"
            />
            <img
              src="../../../assets/svg/Footer/Facebook.svg"
              alt="Facebook-icon"
              width="19px"
              height="19px"
            />
            <img
              src="../../../assets/svg/Footer/Twiter.svg"
              alt="Twitter-icon"
              width="19px"
              height="19px"
            />
          </div> -->
        <!-- </div> -->
      </div>
      <!-- <hr class="border-[#fff]" /> -->
      <!-- <div
        class="flex justify-center space-x-4 lg:space-x-8 block md:hidden py-4"
      >
        <p class="text-[#A70314] text-xl">Follow:</p>
        <div class="flex space-x-6">
          <img
            src="../../../assets/svg/Footer/Instagram.svg"
            alt="instagram-icon"
            width="19px"
            height="19px"
          />
          <img
            src="../../../assets/svg/Footer/Facebook.svg"
            alt="Facebook-icon"
            width="19px"
            height="19px"
          />
          <img
            src="../../../assets/svg/Footer/Twiter.svg"
            alt="Twitter-icon"
            width="19px"
            height="19px"
          />
        </div>
      </div> -->
    </div>
  </footer>
</template>
