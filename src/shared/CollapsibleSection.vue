<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <transition name="fade">
      <slot v-if="open">
        <p>Default content</p>
      </slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CollapsibleSection",
  data() {
    return {
      open: true
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>