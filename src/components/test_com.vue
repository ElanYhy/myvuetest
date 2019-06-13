<template>
  <div  @click="tcclick">{{num}}</div>
</template>

<script>
export default {
  // props: ['tdval', 'index'],
  data () {
    return{
      num: 0
    }
  },
  methods:{
    tcclick () {
      // alert(this.index)
      this.num ++;
      this.$emit('change1');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
