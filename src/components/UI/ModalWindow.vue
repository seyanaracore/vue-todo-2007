<template>
  <div class="modal" @click="$emit('closeModal')">
    <form
      class="modal__window"
      @submit.prevent="newTodoAdd"
      @click="(e) => e.stopPropagation()"
    >
      <div class="modal__header-container">
        <h3 class="modal-header">{{ header }}</h3>
        <button
          type="button"
          class="close-modal-button"
          @click="$emit('closeModal')"
        >
          <img src="@/assets/close-icon.svg" />
        </button>
      </div>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.close-modal-button {
  border: none;
  background: none;
  padding: 0;
}
.modal {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__window {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  box-sizing: border-box;
  border: 1px solid #dde2e4;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background: white;
}
.modal-header {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  font-family: "MontserratBold";
}
.modal__header-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
}
</style>
