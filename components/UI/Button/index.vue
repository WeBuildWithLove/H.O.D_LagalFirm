<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    @click="$emit('click')"
    class="py-2 px-4 rounded-lg border border-[#E7E7E7]focus:outline-none focus:ring"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "auto",
    },
    color: {
      type: String,
      default: "black",
    },
    backgroundColor: {
      type: String,
      default: "blue-500",
    },
  },
  computed: {
    buttonClass() {
      return `bg-${this.backgroundColor} text-${this.color}`;
    },
    buttonStyle() {
      return {
        width: this.width,
      };
    },
  },
};
</script>
