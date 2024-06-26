<template>
  <div
    ref="otpCont"
    class="flex flex-row w-full lg:justify-center items-center justify-between gap-2 lg:gap-[12px]"
  >
    <input
      :type="type"
      :class="error ? 'border-b-[#DA5252]' : ' border-b-[#254035AB]'"
      class="border-b-[2px] lg:w-[60px] lg:h-[66px] h-[55px] w-full text-black text-[20px] password-input text-center flex flex-row outline-none p-4 py-1.5"
      v-for="(el, ind) in digits"
      :key="el + ind"
      v-model="digits[ind]"
      :autofocus="ind === 0"
      maxlength="1"
      @input="handleInput($event, ind)"
      @paste="handlePaste($event, ind)"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  modelValue: String,
  type: String,
  error: Boolean,

  digitCount: {
    type: Number,
    required: true,
  },
});

const digits = reactive([]);

if (props.modelValue && props.modelValue.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.modelValue.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const otpCont = ref(null);

const emit = defineEmits(["update:modelValue"]);

const handleInput = function (event, index) {
  const input = event.target.value;

  if (input.length === 1 && new RegExp("^([0-9])$").test(input)) {
    digits[index] = input;

    if (index !== props.digitCount - 1) {
      otpCont.value.children[index + 1].focus();
    } else {
      // Emit the entered digits on each input
      emit("update:modelValue", digits.join(""));
    }
  }
};
const handlePaste = function (event, index) {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text");
  const sanitizedText = pastedText
    .replace(/[^\d]/g, "")
    .slice(0, props.digitCount - index);

  for (let i = 0; i < sanitizedText.length; i++) {
    digits[index + i] = sanitizedText.charAt(i);
  }

  emit("update:modelValue", digits.join(""));

  // Move focus to the next input box if available
  if (index + sanitizedText.length < props.digitCount) {
    otpCont.value.children[index + sanitizedText.length].focus();
  }
};
</script>
<style scoped>
.digit-box {
  height: 4rem;
  width: 2rem;
  border: 2px solid black;
  display: inline-block;
  /* border-radius: 5px; */
  margin: 5px;
  padding: 15px;
  font-size: 3rem;
  color: black;
}

.digit-box:focus {
  outline: 3px solid black;
}
.password-input::part(eye)::before {
  /* change the default password eye from . to * */
  content: "*";
}
.password-input::part(eye)::after {
  /* change the default password eye from . to * */
  content: "*";
}
input[type="password"] {
  -webkit-text-security: square !important;
}
</style>
