<template>
  <div :class="dividerClass" :style="dividerStyle"></div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "horizontal", 
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
    width: {
      type: String,
      default: "1px",
    },
    color: {
      type: String,
      default: "card",
    },
  },
  computed: {
    dividerClass() {
      return this.direction === "horizontal" ? "w-full" : "h-full";
    },
    dividerStyle() {
      return {
        backgroundColor: this.color.includes("-")
          ? `var(--tw-color-${this.color.replace("-", "-")})`
          : this.color,
        width: this.direction === "horizontal" ? "100%" : this.width,
        height: this.direction === "horizontal" ? this.width : "100%",
      };
    },
  },
};
</script>
