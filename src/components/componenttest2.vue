<template>
  <div class="item" @click="buslick" v-once>
    <p >动态组件component222222</p>
  </div>
</template>

<script>
export default {
  props: {
    slotval: [String,Number]
  },
  methods:{
    buslick () {
      // alert("this.index")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  color:aqua;
}
</style>
