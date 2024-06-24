<template>
  <button
    class="btn-brand place-self-center !rounded-[8px] !text-[16px] font-medium text-[#000000] leading-[16px]"
    @click="click"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
</script>
