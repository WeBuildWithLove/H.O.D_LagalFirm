<!-- src/components/InputDropdownComponent.vue -->
<template>
  <div class="form-group relative w-full">
    <label :class="['font-semibold', labelClasses]">{{ label }}</label>
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        :class="[
          'default-input-classes block w-full  border border-[#E9EAEC] mt-2 py-4 px-5 rounded-[10px] text-[#CCCCC] font-semibold text-[14px] focus:outline-none',
          inputClasses,
        ]"
        v-bind="$attrs"
        :value="selectedOption ? selectedOption.text : ''"
        readonly
      />
      <button type="button" @click="toggleDropdown" class="dropdown-button">
        <IconsDropdownIcon></IconsDropdownIcon>
      </button>
      <ul v-if="showDropdown" class="dropdown-menu">
        <li v-for="option in options" :key="option.value" @click="selectOption(option)">
          {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconsDropdownIcon from "@/components/Icons/DropdownIcon.vue";
export default {
  name: "InputDropdownComponent",
  components: {
    IconsDropdownIcon,
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    labelClasses: {
      type: String,
      default: "",
    },
    inputClasses: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showDropdown: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.$emit("input", option.value);
      this.showDropdown = false;
    },
  },
};
</script>

<style scoped>
.dropdown-button {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #e9ece9;
  border-radius: 10px;
  margin-top: 8px;
  z-index: 10;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
