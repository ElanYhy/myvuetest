<template>
  <div class="item" @click="buslick">
    <ul>
      <slot v-for="item of list" :prop=item>ssss</slot>
    </ul>
    
  </div>
</template>

<script>
export default {
  props: {
    slotval: [String,Number]
  },
  data () {
    return {
      list:[1,2,3]
      }
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
