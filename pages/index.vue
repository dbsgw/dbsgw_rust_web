<template>
  <div class="name">
    <div class="age">

    </div>
    <Tutorial/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    // this.$axios.$get("/5555dada", (con) => {
    //   console.log(con)
    // })
    console.log(111)
  },
  // async asyncData({$axios}) {
  //   let data = await $axios.get('/4545xxxxx');
  //   if (data.code == 200) {
  //     return data
  //   } else {
  //     return {}
  //   }
  // }
}
</script>

<style lang="scss">
.name {
  .age {
    background-color: $color-theme;
    width: 100px;
    height: 100px;
  }
}
</style>
