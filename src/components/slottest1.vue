<template>
  <div class="item" @click="buslick">
    <slot name="slot1">ssss</slot>
    <slot name="slot2">ssss</slot>
     <slot name="slot3">ssss</slot>
  </div>
</template>

<script>
export default {
  props: {
    slotval: [String,Number]
  },
  methods:{
    buslick () {
      alert("this.index");hahaha
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
