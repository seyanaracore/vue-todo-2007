<template>
  <svg
    width="10"
    height="11"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="check-arrow"
  >
    <path
      stroke=""
      d="M1 5L5 10.5L9.5 1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/constants.scss";

.check-arrow > path {
  stroke: $blueColor;
}
</style>
