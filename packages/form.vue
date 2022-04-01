<template>
  <div class="lch-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LchForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '120px'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
