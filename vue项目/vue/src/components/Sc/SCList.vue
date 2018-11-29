<template>
    <div> 
      
    <div class="banner">
         <ul class="tb">
        <li><input type="text"  placeholder="5LUX.COM">
        <div class="img"></div>
        </li>
       <div class="img1"></div>
    </ul>
      <ul class="lb">
        <li><router-link to="/Sc/SCList">首页</router-link></li>
        <li><router-link to="/fs/fsList">服装</router-link></li>
        <li><router-link to="/xb/xbList">箱包</router-link></li>
        <li><router-link to="/wb/wbList">腕表</router-link></li>
        <li><router-link to="/xx/xxList">鞋靴</router-link></li>
      </ul>
      <div class="main">
           <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
            <swipe-item class="slide6"></swipe-item>
            <swipe-item class="slide7"></swipe-item>
        </swipe>
        <!-- 分类 -->
        <div class="fl"></div>
        <!-- 动画-->
        <div class="ddh">
        <div class="dh">
          <dl v-for="dh in Dh" :key="dh.id">
            <dt>  
              <img :src="dh.img" alt=""></dt>
              <div class="dd">
            <dd>{{dh.title}} </dd><span>{{dh.p}}</span>
            <dd>{{dh.lj}}</dd>
          </div></dl>
        </div>
        </div>
          <div  class="bb" v-for="bb in Bb" :key="bb.id">
            <img :src="bb.img"  alt="">
            <p>{{bb.title}}</p>
            </div> 
<!-- 波比 -->
<div class="BB">
<ul class="Bb">
  <li v-for="bb in BB" :key="bb.id">
    <img :src="bb.img" alt="" srcset="">
    <p>{{bb.title}}</p>
  </li>
</ul>
</div>
<!-- 查看旗靓点 -->
<ul class="ck">
  <li v-for="bb in Bb" :key="bb.id">
    <p>{{bb.title1}}</p>
  </li>
</ul>
<!-- 全部旗靓点 -->
<div class="hs">
<ul class="qb">
  <li v-for="qb in BB" :key="qb.id">
    <img class="img2" :src="qb.img1" alt="">
    <h4>{{qb.title1}}</h4>
    <img class="qb_img" :src="qb.img2" alt="">
  </li>
</ul>
   </div>

   <!-- 时尚指南 -->
   <ul class="shang">
     <li v-for="ss in Bb" :key="ss.id" >
       <h4>{{ss.title2}}</h4>
       <p>{{ss.title3}}</p>
       <img :src="ss.img1" alt="">
     </li>
   </ul>
   <!-- 歌蕾 -->
    <ul class="gelei">
            <li v-for="gl in Dh" :key="gl.id">
                <img :src="gl.img1" alt="">
                <p>{{gl.title1}}</p>
                <span>{{gl.sprice}}</span>
            </li>
        </ul>
        <!-- 饰品 -->
   <ul class="shang">
     <li v-for="ss in Bb" :key="ss.id" >
       <img :src="ss.img2" alt="">
     </li>
   </ul>
   <!-- 歌蕾 -->
    <ul class="gelei">
            <li v-for="gl in Dh" :key="gl.id">
                <img :src="gl.img2" alt="">
                <p>{{gl.title2}}</p>
                <span>{{gl.sprice1}}</span>
            </li>
        </ul>
        <!-- 女鞋 -->
   <ul class="shang">
     <li v-for="ss in Bb" :key="ss.id" >
       <img :src="ss.img3" alt="">
     </li>
   </ul>
   <!-- 歌蕾 -->
    <ul class="gelei">
            <li v-for="gl in Dh" :key="gl.id">
                <img :src="gl.img3" alt="">
                <p>{{gl.title3}}</p>
                <span>{{gl.sprice2}}</span>
            </li>
        </ul>
      </div>
      </div>
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
        Dh:[],
        Bb:[],
        BB:[],
      }
    },
    methods:{
      loaDate(){
        let url1="/static/data/Sc.json"
        Axios.get(url1).then(res=>{
          this.Dh=res.data.data.Sc;
          this.Bb=res.data.data.bb;
          this.BB=res.data.data.Sg;
          console.log(res);
        }).catch(()=>{
          alert("传输·错误！");
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
      /* margin-bottom:30%; */
      margin-bottom: 10%;
}
/* 头部 */
 .tb{
     overflow: hidden;
     width: 100%;
     height: 0.7rem;
     background: #000;
     opacity: .8;
     position: fixed;
     top:0px;
     z-index: 99;
 }
 .tb li input{
     width: 60%;
     height: 25px;
    position: relative;
    margin:  2% 5%;
    /* padding: 6px 70px; */
    padding-left: 10%;
    border-radius: 5px;
    background: hsla(0,0%,100%,.5);
    float: left;
    border: none;
    color: #000;
    border: #fff;
    text-align: left;
 }
.img{
    position: absolute;
    top:27%;left:10%;
    width: 13px;
    height: 13px;
    border: 1px solid #ccc;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAEM+/QO+AcGAwn1D/kKMAAACYSURBVBjTYwACcevdu80FGCCALXo3EIRBOIzau8FAEcwT3b3bwsXDevdWsFrt3ZpAklN7twJI1+5dYEGp3dvAChWh2kFKq3dPgJg2e3cBA4P1ZqhFzLsNGBh274DyOHZvAPK2QHks+Hmo+lDNRLUP1S3o7kT4YSOy/3ZvEoD6HeZ7RLgIASURYcaoDZREAKAkEg8oyYAiCQDnr0zCoGOvDwAAAABJRU5ErkJggg==") ;
    background-size: cover;
    border: none;
 }
 .img1{
    width: 22px;
    height: 22px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAv4BA789gIJ8Q348wr3BQisJoTQAAATJJREFUOMuNlduOxCAMQ0mAXuhlzv9/7a7KdLIr6BC/VFhuMK5RQwdrjHEPHsxauHBMI+mqAFmkAOX1fWwGedkO27e5ifSy1QbLsziT57/rCc4nrZLm/8wJ86OJ5kTyZOQktyd+Gi1MvWP044a1JbXvYyd12IgEN92y66SqC0Ub3OxuBhIjmHO5qpNJ0qKyhU8oMI08Z7ZP8PGim29irCL3mvqxm0Yaq5S7W6m+Ap3BwD3Qttih8WHsfnfk4Lg2kKO5pcZCfCenYYjE+X4O77FNhDgWL9VrrN4HUMRiHmGC+k4eKW3khjjEaz2ZsAUHuK5+dsRcZc7kbgOzU6yIN7la0lpQb3bqSq6WtBbUA4hWUEdJraCOklrM45JKgNMnLixhgU0dEIhhTjixXH8wceE3hx9LbBNhHZzz6AAAAABJRU5ErkJggg==") ;
    background-size: 22px 22px;
    background-repeat: no-repeat;
    /* margin-right: 17px; */
   position: absolute;
   right:14%;top:15%;
 }
 /* 列表 */
.lb{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #fff;
    position: fixed;
    top:0.7rem; 
    display: flex;
    justify-content: space-around;
    z-index: 999;
}
.lb li{
  float: left;
}
.lb li a{
    color: #9A9A9A;
}
.lb .router-link-active {
  color: #000;
}
/* 轮播图 */
.main{
  width: 100%;
  /* height: 3000px; */
  overflow: auto;
  margin-top:1.4rem ;
}
.my-swipe {
  height: 300px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
    /* width: 100%;
    height: 200px; */
  background: url('http://img550.5lux.com.cn/2018/11/21/qr/154280581691_750x825.jpg') center center;
   background-size: 100%;
}

.slide2 {
  background: url('http://img550.5lux.com.cn/2018/11/20/uv/154269577334_750x825.jpg') center center;
 background-size: 100%;
}

.slide3 {
  background: url('http://img550.5lux.com.cn/2018/11/19/fg/154259626212_750x825.jpg') center center;
  background-size: 100%;
}
.slide4 {
  background: url('http://img550.5lux.com.cn/2018/11/16/rs/154236493020_750x825.jpg') center center;
  background-size: 100%;
}
.slide5 {
  background: url('http://img550.5lux.com.cn/2018/11/14/lm/154218767840_750x825.jpg') center center;
  background-size: 100%;
}
.slide6 {
  background: url('http://img550.5lux.com.cn/2018/11/11/ab/154190270715_750x825.jpg') center center;
  background-size: 100%;
}
.slide7 {
  background: url('http://img550.5lux.com.cn/2018/11/11/st/154188598735_750x825.jpg') center center ;
  background-size: 100%;
}
/* 分类 */
.fl{
    position: relative;
    height: 0;
    padding-bottom: 21.333333333333336%;
    background-image: url("data:image/png;base64,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");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
/* 动画 */
.ddh{
  width: 100%;
  height: 160px;overflow-x:auto; 
}
::-webkit-scrollbar{
  display: none;
}
.dh{
  
   width: 400%;
   height: 120px;
}
.dh dl{
  float: left;
    height: 2.373333333333334rem;
    border: .013333333333333rem solid #e5e5e5;
    background: #fff;   
   /* width: 306.923px; */
    /* transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg); */
    z-index: 1;
    transition-duration: 0ms;
    /* margin: 2%; */
    margin-left: 1%;
    border-radius: .106666666666667rem;
}
.dh dt{
    width: 1.5rem;
    height: 2.4rem;  float: left;
}
.dh dt img{
  width: 70px;
  height: 110px;
  padding: 5%;
}
.dd{
  width: 3.1rem;
  height: 2rem;
  float: right; font-size: 18px;
}
.dh dd{
    float: right;
    color: #333;
    text-align: left;
    width: 3.1rem;
    height: .5rem;
    margin-top: .133333333333333rem;
    overflow: hidden;
}
.dh dd:nth-of-type(2){
     /* display: flex; */
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin: 0rem 0 .24rem;
    color: #f33;
    /* margin-right: .133333333333333rem; */
}
.dh dd:nth-of-type(3){
    /* display: flex;
    text-align: center;
    -ms-flex-pack: start;
    justify-content: flex-start; */
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: .426666666666667rem;
    /* padding: 0 .133333333333333rem; */
    background: linear-gradient(90deg,#f857a6,#ff5858);
    color: #fff;
}
/* 波比布朗 */

.bb{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    /* overflow: hidden; */
    z-index: 1;
}
.bb p{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 67.5px;
  /*   padding-top: 2.5px; */
    font-size: 24px;
    color: #fff;
    text-align: center;
    background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),to(rgba(0,0,0,.7)));
}
/* 波比 */
.Bb{
  display: flex;
  width: 90%;
  height: 150px;
  margin: 0px auto;
}
.Bb li{
    margin-right: 6px;
    width: 121px;
    height: 121px;
   position: relative;
   text-align: center;
}
.Bb li img{
    position: relative;
    width: 100%;
    height:100%;
}
.Bb p{
    position: absolute;
    left: 0;
    bottom: 0;
    /* top:130%; */
    font-size: 13px;
    color: #fff;
    width: 100%;
    z-index: 999;
    padding-bottom: 5px;
    padding-top: 32px;
    background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),
    to(rgba(0,0,0,.7)));
}
/* 查看 */
.ck{
    height: 39px;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 10px;
}
.ck li{
    width: 135px;
    height: 24px;
    background: #333;
    text-align: center;
    line-height: 24px;
    border-radius: 5px;
}
.ck li p{
    color: #fff;
    font-size: 14px;
}
/* 全部旗靓店 */
.hs{
  width: 100%;
  /* height: 780px; */
  background: #CDCDCD;
}
.qb{
    width: 100%;
    height: auto;
    /* padding-bottom: 56.266666666666%; */
    position: relative;
    margin-bottom: 5px;
}
.qb li{
  position: relative;
  margin-bottom: 2%;
  text-align: center;
  }
.qb li .img2{
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 59px;
    height: 59px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.qb h4{
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;  
    padding-left: 32%; 
    background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),to(rgba(0,0,0,.7)));
}
/* 时尚指南 */
.shang{
    /* margin-bottom: 10px; */
    background: #fff;
}
.shang li{
    color: #333;
}
.shang li h4{
    font-size: 16px;
    font-weight: 700;
    padding: 8px 0 5px;
    text-align: center;
}
.shang li p{
    font-size: 13px;
    /* padding-bottom: 8px; */
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
}
/* 包包 */
.gelei{
    /* padding: 20px 10px 5px; */
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    /* margin-bottom: px; */
}
/* .nx{
    margin-bottom: 15%;
} */
.gelei  li{
    width: 130px;
    height: 183px;
    padding: 0 10px;
    padding: 0 3.5px;
    -ms-flex: 0 0 130px;
    flex: 0 0 130px;
}
.gelei li img{
    width: 90px;
    height: 110px;
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
</style>