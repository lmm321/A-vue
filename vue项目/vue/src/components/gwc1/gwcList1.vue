<template>
    <div class="zh">
    <!-- <h2>MovieDetail: {{this.$route.params.fzId}}</h2> -->
    <!-- <! url1公网api -->
       <ul class="header">
           <li ><router-link to="/">
               <img src="http://m.5lux.com/static/img/backWhiteBg@3x.png" alt=""></router-link>
               <h4>购物袋(4)</h4>
           </li>
       </ul>
       <!-- 购物车 -->
       <div class="gw">
       <ul class="sp">
           <li>
            <input type="checkbox">全选
           </li>
           <li>商品</li>
           <li>名称</li>
           <li>购物价</li>
           <li>操作</li>
       </ul>   
       <ul class="gwc">
           <li >
               <div class="gw_gwc"><input type="checkbox" name="" id=""></div>
               <div class="gw_gwc"><img :src="list[index-1].img1" alt=""></div>
               <div class="gw_gwc"><p>{{list[index-1].p3}}</p></div>
               <div class="gw_gwc"><p class="sprice">{{list[index-1].p5}}</p></div>
                <div class="gw_gwc"><h5>移除购物车</h5></div>
           </li>
       </ul>
    </div>
    </div>
</template>
<script>
import Axios from "axios"
export default {
    data(){
        return{
            // mm:[],
            // nn:[],
            list:[],
            index:0,
        }
    },
    mounted(){
    let url1 ="/static/data/fs.json"
    Axios.get(url1).then(res=>{
    this.list=res.data.data.img;
       this.index=this.$route.params.fzId;
         console.log(this.list);
        //  console.log(this.nn);
    }).catch((res)=>{
            alert("被杀vdhasd");
    })
    }
}
</script>
<style scoped>
.zh{
    width: 100%;
    height: auto;
    position: relative;
    bottom:0px;
}
.header{
    position: fixed;
    z-index: 10;
    /* overflow: hidden; */
    height: 44px;
    top: 0;
    left: 0;
    width: 100%;
    background-size: cover;
}
.header li{
    display: flex;
    height: 44px;
    position: relative;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: \\9ED1\4F53;
    font-size: 16px;
    color: #333;
}
.header li::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    content: " ";
}
.header li img{
    width: 22px;
    height: 22px;
    background-size: 22px 22px;
    background-repeat: no-repeat;
    position: absolute;
    left: 15px;
    top: 11px;
    z-index: 2;
    padding-top: 1%;
}
.header li h4{
    flex: 1;
    height: 16px;
    position: relative;
    font-size: 16px;
    text-align: center;
}
.gw{
    width: 100%;
    height: auto;
    position: relative;
    top:44px;
}
.sp{
    width: 100%;
    height: 35px;
    line-height: 35px;
    background: #EBEAEA;
    text-align: center;
}
.sp li{
    float: left;
    width: 20%;
}
/* 购物车 */
.gwc{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /* border: 1px solid #ccc; */
}

.gw_gwc{
    width: 20%;
    float: left;
    /* border: 1px solid #ccc; */
}
.gw_gwc:nth-of-type(1){
    width: 15%;
}
.gw_gwc:nth-of-type(2){
    width: 25%;
}
.gwc p{
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gwc img{
    width: 70%;
    height: 70px;
    /* border: 1px solid #ccc; */
    background-size: cover;
}
.gwc h5{
   color: red;
   font-size: 12px;
}
</style>