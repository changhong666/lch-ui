<template>
  <div class="lch-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LchCheckboxGroup',
  provide () {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      // get an array
      type: Array
    }
  }
}
</script>
