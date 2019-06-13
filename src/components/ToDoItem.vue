<template>
  <li class="item" @click="tdoliclick">{{tdval}}</li>
</template>

<script>
export default {
  props: ['tdval', 'index'],
  methods:{
    tdoliclick () {
      // alert(this.index)
      this.$emit('del', this.index);
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
