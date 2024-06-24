<template>
  <div
    :class="error ? 'border-b-[#DA5252]' : ' border-b-[#3A4553]'"
    class="w-full font-medium flex flex-col text-[#D7D7D7] outline-none overflow-hidden bg-transparent border-b-[1px] opacity-[0.8029] text-[18px]"
  >
    <!-- <Label v-if="label" :class="labelClasses">{{ label }}</Label> -->
    <!-- <div class="lg:pl-4 pl-2"><slot></slot></div> -->
    <input
      :class="error ? 'border-b-[#DA5252]' : ' border-b-[#3A4553]'"
      class="w-full text-[20px] bg-transparent font-medium placeholder:text-[#D7D7D7] text-[#D7D7D7] !pl-2 outline-none !p-3"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Label = defineAsyncComponent(() => import("./Label.vue"));
defineProps({
  modelValue: String | Number,
  type: String,
  placeholder: String,
  error: Boolean,
  errorsMsg: String,
  label: String,
  labelClasses: String,
  disabled: Boolean,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>
