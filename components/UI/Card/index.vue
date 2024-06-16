<template>
  <div :class="cardClass" class="rounded overflow-hidden bg-card text-normal">
    <div :class="contentClass" class="p-4">
      <h2 :class="titleClass" class="font-bold mb-2">{{ title }}</h2>
      <p class="mb-4">{{ content }}</p>
    </div>
    <hr class="border-gray-300 mb-4" />
    <img v-if="image" :src="image" alt="Card Image" class="w-full" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Card Title",
    },
    content: {
      type: String,
      default: "Card content",
    },
    image: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
      default: "white",
    },
    textColor: {
      type: String,
      default: "black",
    },
  },
  computed: {
    cardClass() {
      return `bg-${this.backgroundColor}`;
    },
    contentClass() {
      return `text-${this.textColor}`;
    },
    titleClass() {
      return `text-${this.textColor}`;
    },
  },
};
</script>
