<template>
  <div class="item" @click="buslick">{{bval}}</div>
</template>

<script>
export default {
  props: {
    bval: [String,Number]
  },
  methods:{
    buslick () {
      alert("子组件触发"+this.bval)
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
