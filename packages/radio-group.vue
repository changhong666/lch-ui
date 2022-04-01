<template>
  <div class="lch-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LchRadioGroup',
  provide () {
    return {
      // provide radioGroup it self
      radioGroup: this
    }
  },
  props: {
    value: {
      type: null
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
