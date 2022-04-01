<template>
  <div class="lch-form-item">
    <label
      :style="labelStyle"
      class="lch-form-item__label"
    >
      {{label}}
    </label>
    <div class="lch-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LchFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lch-form-item {
  margin-bottom: 25px;
  &__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
