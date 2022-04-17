<template>
  <i class="iconfont" :class="type"></i>
</template>
<script>
export default {
  name: 'Rust_Icon',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
