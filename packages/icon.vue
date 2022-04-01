<template>
  <i :class="'lch-icon-' + name"></i>
</template>

<script>
export default {
  name: 'LchIcon',
  props: {
    name: String
  }
}
</script>
