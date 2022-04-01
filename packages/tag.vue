<template>
  <transition name="lch-zoom-in-center">
    <div class="lch__tag" :class="'lch__tag--'+color">
      <span class="lch__tag--desc"><slot></slot></span>
      <i class="lch-icon-close2 lch__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LchTag',
  props: {
    closable: Boolean,
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      isclosed: false
    }
  },
  methods: {
    hiddenTag () {
      this.isclosed = true
      this.$emit('close')
    }
  }
}
</script>
