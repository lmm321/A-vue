<template>
    <div class="banner">
      <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
            <swipe-item class="slide6"></swipe-item>
            <swipe-item class="slide7"></swipe-item>
        </swipe>
        <!-- 上新 -->
        <ul class="Sc">
        <li class="sx" v-for="sc in ScList" :key="sc.id">
            <img :src="sc.sx1" alt="">
            <p>{{sc.title}}</p>
            </li>    
        </ul> 
        <ul class="c1">
            <li  class="c1_li" v-for="c1 in c1" :key="c1.id">
                <img :src="c1.c1" alt=""> 
                
            </li>
        </ul>
        <!-- 新人特区 -->
        <ul class="xr">
            <li class="xr_li" v-for="xr in xr" :key="xr.id">
               <img :src="xr.xr" alt="">
            </li>
        </ul>
        <!-- 时尚管家 -->
        <ul class="ss">
            <li class="ss_li" v-for="ss in c1" :key="ss.id">
                <img :src="ss.ss" alt=""></li>
        </ul>
        <!-- 买手快报 -->
        <ul class="ms">
            <li v-for="mskb in mskb" :key="mskb.id">
                <img :src="mskb.ms" alt="">
                <span></span>
            </li>
        </ul>
        <!-- 歌蕾 -->
        <ul class="gelei">
            <li v-for="gl in Gl" :key="gl.id">
                <img :src="gl.img" alt="">
                <p>{{gl.title}}</p>
                <span>{{gl.sprice}}</span>
            </li>
        </ul>
        <!-- 口红 -->
       <ul class="kh">
           <li v-for="kh in KL" :key="kh.id">
               <img :src="kh.img" alt="">
               <div class="kh1">
               <h4>{{kh.title1}}</h4>
               <p>{{kh.title}}</p>
          </div> </li>
       </ul>
<!-- 口红继续篇 -->
   <ul class="gelei">
            <li v-for="kh in Gl" :key="kh.id">
                <img :src="kh.img1" alt="">
                <p>{{kh.title1}}</p>
                <span>{{kh.sprice1}}</span>
            </li>
        </ul>
        <!-- 衣服 -->
       <ul class="kh">
           <li v-for="kh in KL" :key="kh.id">
               <img :src="kh.img1" alt="">
               <div class="kh1">
               <h4>{{kh.title2}}</h4>
               <p>{{kh.title3}}</p>
          </div> </li>
       </ul>
<!-- 衣服继续篇-->
   <ul class="gelei">
            <li v-for="kh in Gl" :key="kh.id">
                <img :src="kh.img2" alt="">
                <p>{{kh.title2}}</p>
                <span>{{kh.sprice2}}</span>
            </li>
        </ul>
        <!-- 男鞋 -->
       <ul class="kh">
           <li v-for="kh in KL" :key="kh.id">
               <img :src="kh.img2" alt="">
               <div class="kh1">
               <h4>{{kh.title4}}</h4>
               <p>{{kh.title3}}</p>
          </div> </li>
       </ul>
<!-- 男鞋继续篇-->
   <ul class="gelei">
            <li v-for="nx in Gl" :key="nx.id">
                <img :src="nx.img3" alt="">
                <p>{{nx.title3}}</p>
                <span>{{nx.sprice3}}</span>
            </li>
        </ul>
        <!-- 男表 -->
          <ul class="kh">
           <li v-for="kh in KL" :key="kh.id">
               <img :src="kh.img3" alt="">
               <div class="kh1">
               <h4>{{kh.title6}}</h4>
               <p>{{kh.title7}}</p>
          </div> </li>
       </ul>
<!-- 男鞋继续篇-->
   <ul class="gelei   nx">
            <li v-for="nx in Gl" :key="nx.id">
                <img :src="nx.img4" alt="">
                <p>{{nx.title4}}</p>
                <span>{{nx.sprice4}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Axios from "axios";
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {
      components: {
        'swipe': Swipe,
        'swipe-item': SwipeItem
    },
    data(){
        return{
         ScList:[],
         c1:[],
         xr:[],
         mskb:[],
         Gl:[],
         KL:[],
        }
    },
    methods:{
        loaDate(){
            let url1="/static/data/swipe.json";
            Axios.get(url1).then(res=>{
                this.ScList=res.data.data.swipe;
                this.c1=res.data.data.c1;
                this.xr=res.data.data.xr;
                this.mskb=res.data.data.mskb;
                this.Gl=res.data.data.gl;
                this.KL=res.data.data.kh;
                console.log(res);
            }).catch(()=>{
                alert("输出错误！");
            })
        }
    },
    mounted(){
        this.loaDate();
    }
}

</script>
<style scoped>
.banner{
    width: 100%;
    /* height: 4350px;  */
      overflow: auto;
}
.my-swipe {
  height: 400px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
    /* width: 100%;
    height: 200px; */
  background-image: url('http://img550.5lux.com.cn/2018/11/21/qr/154280581691_750x825.jpg');
   background-size: 100%;
}

.slide2 {
  background-image: url('http://img550.5lux.com.cn/2018/11/20/uv/154269577334_750x825.jpg');
 background-size: 100%;
}

.slide3 {
  background-image: url('http://img550.5lux.com.cn/2018/11/19/fg/154259626212_750x825.jpg');
  background-size: 100%;
}
.slide4 {
  background-image: url('http://img550.5lux.com.cn/2018/11/16/rs/154236493020_750x825.jpg');
  background-size: 100%;
}
.slide5 {
  background-image: url('http://img550.5lux.com.cn/2018/11/14/lm/154218767840_750x825.jpg');
  background-size: 100%;
}
.slide6 {
  background-image: url('http://img550.5lux.com.cn/2018/11/11/ab/154190270715_750x825.jpg');
  background-size: 100%;
}
.slide7 {
  background-image: url('http://img550.5lux.com.cn/2018/11/11/st/154188598735_750x825.jpg');
  background-size: 100%;
}
/* // 上新 */
.Sc{float: left;
    width: 100%;
    height: 80px;
    /* line-height: 80px; */
    background: #fff;
    /* padding: 1%; */
}
.Sc .sx{
    width: 16%;
    height: 80px;   
    float: left;
    margin-left: 3%;
    text-align: center;
}
.Sc img{
    width: 25px;
    height:25px;
    background-repeat: no-repeat; 
    background-size: 100%;
    margin-top: 20%;
    margin-bottom: 5%;
}
.Sc p{
    font-size: 12px;
    color: #7e8c8d;
    text-decoration: none;
    text-align: center;
}
/* /xiangnaier */
.c1{
    /* margin-bottom: 3px; */
    width: 100%;
    overflow: hidden;
}
.c1 .c1_li{
    float: left;
    width: calc(50% - 3.5px);
    margin-bottom: 7px;
    margin-left: 3px;
}
.c1 .c1_li img{
    width: 100%;
    vertical-align: top;
}
/* xinren */
.xr{
    width: 100%;
    /* margin-bottom: 10px; */
    position: relative;
}
.xr .xr_li img{
    margin-bottom: 2%;
}

/* 时尚管家 */
.ss{
    padding: 10px 3.5px;
    background: #fff;
}

.ss_li{
    padding: 0 3.5px;
    float: left;
    width: calc(25% - 7px);
    margin-bottom: 10px;
}
/* 买手快报 */
.ms{
    margin-bottom: 10px;
    position: relative;
    margin-top: 10px;
}
.ms span{
    position: absolute;
    bottom: 0;
    z-index: 0;
    content: " ";
    box-sizing: border-box;
    border: 9px solid transparent;
    border-bottom-color: #fff;
    display: inline-block;
    left: 50%;
    margin-left: -9px;
}
/* 歌蕾 */
.gelei{
    padding: 20px 10px 15px;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    /* margin-bottom: px; */
}
.nx{
    margin-bottom: 15%;
}
.gelei  li{
    width: 150px;
    height: 183px;
    padding: 0 10px;
    padding: 0 3.5px;
    -ms-flex: 0 0 130px;
    flex: 0 0 130px;
}
.gelei li img{
    width: 130px;
    height: 130px;
}
.gelei li p{
    font-family: Aria;
    color: #333;
    padding: 10px 0 5px;
    font-size: 13px;
    text-overflow: ellipsis;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
}
.gelei li span{
    font-size: 12px;
    text-align: center;
}
::-webkit-scrollbar{
    display: none;
}
/* 口红 */
.kh{
width: 100%;
/* height: 430px; */
display: block;
position: relative;

}
.kh1{
    text-align: left;
    padding: 18px 20px 20px;
    background: #fff;
    border-bottom: 1px solid #E5E5E5;
}
.kh li img{
    width: 100%;
    vertical-align: top;
}
.kh li h4{
    font-family: \\9ED1\4F53;
    font-weight: 700;
    display: block;
    font-size: 14px;
    color: #333;
    height: 18px;
    line-height: 18px;
    padding-bottom: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.kh li p{
    font-family: \\9ED1\4F53;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    height: 34px;
    line-height: 18px;
}
</style>


