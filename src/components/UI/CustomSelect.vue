<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  width: min-content;
  margin-right: 19px;
}

.custom-select .selected {
  cursor: pointer;
  user-select: none;
}

.custom-select:after {
  content: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%2316191D'/%3E%3C/svg%3E%0A");
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 5px;
}

.custom-select .items {
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  background-color: grey;
  top: -50%;
  width: fit-content;
  z-index: 1;
  border: 1px solid #00000045;
  padding: 6px;
}

.custom-select .items div {
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  padding: 0px 2px 1px;
  display: block;
  min-height: 1.2em;
}

.custom-select .items div:hover {
  background-color: $blueColor;
}

.selectHide {
  display: none;
}
</style>
