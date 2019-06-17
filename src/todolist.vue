<template>
  <div id="app">
    <input class="item" type="text" v-model="inval">
    <textarea name="" id="" cols="30" rows="10" v-model="inval"></textarea>
    <button @click="subtn">submit</button>
    <ul>
      <li is="todo1" v-for="(item,index) in list" :key="index" :tdval="item" 
      :index="index" @del="delli"></li>
    </ul>
    <!-- 样式绑定 -->
    <!-- 绑定class -->
    <div :class="{style_color:sc,style_size:ss}" @click="changestyle">
      hahaha
    </div>
    <div :class="[sc1,ss1]" @click="changestyle1">
      hehehe
    </div>
    <!-- 直接绑定样式style -->
    <div :style="[style1,{fontSize:'90px'}]" @click="changestyle2">
        1111111111111111111
    </div>
    <!-- v-if v-else-if v-else   注：v-else，v-else-if 必须紧跟在带 v-if 或者 v-else-if 的元素之后-->
    <div class="vifelse">
      <span v-if="vif==='a'">aaa</span>
      <span v-else-if="vif==='b'">bbb</span>
      <span v-else-if="vif==='c'">ccc</span>
      <span v-else>other</span>
    </div>
    <!-- 列表渲染  
    改变数组的同时概念视图的方法：使用变异方法、改变数组引用、使用app.$set()或者Vue.set()
    改变对象的同时概念视图的方法：改变对象的引用、使用app.$set()或者Vue.set()
    -->
    <ul>
      <li v-for = "item of ulis" :key="item.id">{{item.text}}---{{item.id}}</li>
    </ul>
    <!-- computed 计算属性 当依赖的值变化时才会重新计算  get set    set方法不好使用-->
    <div>
      firstname: <input type="text" v-model="firstname">
      lastname: <input type="text" v-model="lastname">
      {{fullname}}
    </div>
    <!-- 表单绑定 -->
    <!-- 单选 -->
    <div>
      单选your choice:{{radio1}}
      <input id="r1" type="radio" v-model="radio1" value="1">
      <label for="r1">11</label>
      <input id="r2" type="radio" v-model="radio1" value="2">
      <label for="r2">22</label>
    </div>
    <!-- 多选 -->
    <div>
      多选your choice:{{checkbox1}}
      <input id="mr1" type="checkbox" v-model="checkbox1" value="1">
      <label for="mr1">11</label>
      <input id="mr2" type="checkbox" v-model="checkbox1" value="2">
      <label for="mr2">22</label>
    </div>
    <!-- is的使用 -->
    <!-- <div>
      <table>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div> -->
    <!-- ref -->
    <div>
      <div ref="zero" @click="zeroclick">99999999</div>
      <tc ref="one"  @change1="tcchange"></tc>
      <tc ref="two"  @change1="tcchange"></tc>
      <div>{{total}}</div>
    </div>
    <!-- 组件props参数校验 -->
    <div>
      <pjy :content_jy="p_jy"></pjy>
    </div>
    <!-- 给组件绑定原生事件 -->
    <div>
      <ys @click.native="ysclick"></ys>
    </div>
    <!-- 非父子组件传值bus/观察者模式                       *********已淘汰********-->
    <div>
      属性（不绑定）
      <bv bval="b1" ></bv>
      <bv bval="b2"></bv>

      属性绑定
      <bv :bval="b1" ></bv>
      <bv :bval="b2"></bv>
    </div>
    <!-- 插槽slot -->
    <div>
      <slott>
        <p slot="slot1">slot11111111</p>
        <p slot="slot2">slot22222222</p>
      </slott>
    </div>
    <!-- 作用域插槽 slot-scope  -->
    <div>
      <sslott>
        <template slot-scope="props">
          <h1>{{props.prop}}</h1>
        </template>
      </sslott>
    </div>
    <!-- 动态组件component 与v-once    对于v-once当你需要渲染大量静态内容时，
                                      极少数的情况下它会给你带来便利，
                                      除非你非常留意渲染变慢了，不然它完全是没有必要的 -->
    <div>
      <component :is="cttype">

      </component>
      <button @click="cttbtnclick">动态组件component</button>
    </div>
  </div>
</template>
<script>
import ToDoItem from './components/ToDoItem.vue'
import test_com from './components/test_com.vue'
import props_jy from './components/props_jy.vue'
import yuansheng from './components/yuansheng.vue'
import bus_value from './components/bus_value.vue'
import slottest from './components/slottest.vue'
import scope_slottest from './components/scope_slottest.vue'
import componenttest1 from './components/componenttest1.vue'
import componenttest2 from './components/componenttest2.vue'
export default{
  name: "todo",
  components: {
    "todo1": ToDoItem,
    "tc": test_com,
    "pjy": props_jy,
    "ys": yuansheng,
    "bv": bus_value,
    "slott": slottest,
    "sslott": scope_slottest,
    "ct1":  componenttest1,
    "ct2":  componenttest2
  },
    data () {
      return{
        b1:"b11",
        b2:"b22",
        list:[],
        inval:"",
        sc:true,
        ss:true,
        sc1:'',
        ss1:"ss1",
        style1: {
          color:"green"
        },
        vif:'b',
        ulis:[{
            id:'01',
            text:'a'
          },{
            id:'02',
            text:'b'
          },{
            id:'03',
            text:'c'
          }],
          firstname:"",
          lastname:"",
          radio1:"",
          checkbox1:[],
          total: 0,
          p_jy: "hahahssssssssss",
          cttype: "ct1"
      }
    },
    computed:{
      /*nnn
      绝大多数情况下，我们只会用默认的getter 方法来读取一个计算属性，在业务中很少用到setter,所以在声明一个计算属性时，可以直接使用默认的写法，不必将getter 和setter 都声明。
      */
      // fullname () {
      //   return this.firstname+" "+this.lastname;
      // }
        fullname: {
          get () {
            return this.firstname+" "+this.lastname;
          },
          set (fname) {
            var arr =fname.split(" ");
            this.firstname = arr[0];
            this.lastname = arr[1];
            alert(this.firstname+this.lastname)
          }
        }
    },
    methods: {
      subtn (){
        this.list.push(this.inval);
        this.inval=''
      },
      delli (index){
        this.list.splice(index,1)
      },
      changestyle () {
        this.sc = !this.sc;
        this.ss = !this.ss;
      },
      changestyle1 () {
        this.sc1 = this.sc1 === "" ? "style_color" :"";
      },
      changestyle2 () {
        this.style1.color =  this.style1.color === "red" ? "black" :"red";
      },
      zeroclick () {
        alert(this.$refs.zero.innerHTML);
      },
      tcchange () {
        this.total = this.$refs.one.num + this.$refs.two.num;
      },
      ysclick () {
        alert("ssssss1")
      },
      cttbtnclick () {
        this.cttype = this.cttype==="ct1" ? "ct2" : "ct1";
      }
    }
  }
</script>

<style>
.style_color{
  color: red;
}
.style_size{
  font-size: 50px;
}
</style>