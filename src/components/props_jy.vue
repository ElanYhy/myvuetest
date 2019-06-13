<template>
  <div  @click="tdoliclick">{{content_jy}}</div>
</template>

<script>
export default {
  props: {
    // 'content_jy':String
    // 'content_jy':[String,Number]
    'content_jy':{
        type: String, //属性类型
        required: true, //该属性是否必须
        default:'def', //默认值
        validator: function (value){ //复杂校验器
          return value.length > 5
        }
    }
    },
  methods:{
    tdoliclick () {
      // alert(this.index)
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
