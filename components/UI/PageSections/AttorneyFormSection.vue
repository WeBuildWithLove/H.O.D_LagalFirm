<!-- 
+  This is a form section for attorneys that allows users to submit their
+  contact information and a message. The form is styled with Ant Design
+  components and has a background image. The form takes in information
+  for the user's name, email, phone number, subject, and message. The
+  form also has a submit button. The form is styled with CSS and has a
+  background image.
+-->
<template>
  <div id="attorneyFormSection" class="">
    <div
      :style="{
        backgroundImage: `url(${image})`,
      }"
      class="flex w-full object-cover justify-center items-start h-auto py-20 lg:py-40"
    >
      <div class="bg-[#1F2732] container min-h-[349px] w-full p-4">
        <form
          class="flex flex-col justify-between py-10 lg:px-40 gap-4"
          @submit.prevent="submitForm"
        >
          <div class="flex lg:flex-row flex-col gap-4 w-full">
            <UIInputAuthInput
              :error="false"
              type="text"
              label="Full Name *"
              placeholder="Full Name *"
              v-model="formData.name"
              id="name"
              required
            >
            </UIInputAuthInput>
            <UIInputAuthInput
              label="Email Address *"
              placeholder="Email Address *"
              :error="false"
              type="email"
              id="email"
              v-model="formData.email"
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
              v-model="formData.number"
              id="number"
              required
            >
            </UIInputAuthInput>
            <UIInputAuthInput
              label="Subject *"
              placeholder="Subject *"
              :error="false"
              type="text"
              v-model="formData.subject"
              id="subject"
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
              v-model:value="formData.message"
              id="message"
            >
            </a-textarea>
          </div>

          <div class="flex justify-center">
            <UIButton
              class="text-[#1F2732] !bg-white text-[22px] !px-[45px]"
              :disabled="loading"
              type="submit"
            >
              <looping-rhombuses-spinner
                v-if="loading"
                :animation-duration="2500"
                :rhombus-size="15"
                color="#A70314"
              />
              <span v-if="!loading"> Get An Appointment</span>
            </UIButton>
          </div>
        </form>
      </div>
    </div>
    <!-- <div>
      <div class="text-center py-[200px]">
        <p
          class="text-[61.429px] leading-[23px] text-brand my-2 font-EBGaramond500"
        >
          Thank You
        </p>
        <p
          class="text-[18px] leading-[23px] text-[#254035] my-6 font-Satoshi400"
        >
          Your message has been sent successfully, I will response soon.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { LoopingRhombusesSpinner } from "epic-spinners";
import image from "@/assets/img/Photo2.png";
import { reactive, ref, watch } from "vue";
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
const toast = useToast();

const emit = defineEmits(["closeModal", "formSubmitted"]);
const props = defineProps(["formData"]);
const loading = ref(false);

const formData = reactive({
  message: "",
  subject: "",
  name: "",
  email: "",
  number: "",
});

const validateForm = () => {
  return (
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.number.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== ""
  );
};

const submitForm = async (e) => {
  loading.value = true;
  if (!validateForm()) {
    loading.value = false;
    return;
  }

  let payload = {
    name: formData.name,
    from_name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    number: formData.number,
  };

  try {
    await emailjs.send(
      "service_sny8vos",
      "template_pc4p1hw",
      payload,
      "_2ou0UdP2XI1uozR4"
    );

    console.log(payload);
    loading.value = false;
    // Reset form fields after successful submission
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
    changeScreen(0, 1);
    toast.success("Thank you for contacting H.O.D Legal. We will respond shortly.", {
      timeout: 4000,
    });
    emit("formSubmitted", payload);
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};

watch(props.formData, (newData) => {
  if (newData) {
    Object.assign(formData, newData);
  }
});
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
