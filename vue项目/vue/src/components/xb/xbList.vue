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
      <!-- banner -->
      <ul class="ul1">
          <li v-for="img in Img" :key="img.id">
              <img :src="img.img1" alt=""></li>
      </ul>
      <!-- 综合 -->
      <ul class="zh">
          <li v-for="zh in ZH" :key="zh.id">
              <p>{{zh.title}}</p>
          </li>
      </ul>
      <!-- 服装 -->
      <ul class="fz">
          <li @click="mm(fz.id)"  v-for="fz in Fz" :key="fz.id">
              <img :src="fz.img1" alt="">
              <div class="img_zh">
              <h4>{{fz.p3}}</h4>
              <p class="p">{{fz.p4}}</p>
              <p class="p1">{{fz.p5}}</p>
         </div> </li>
      </ul>
    </div>
    </div>
</template>
<script>
import Axios from "axios"
export default {
      data(){
        return{
         Img:[],
         ZH:[],
         Fz:[],
        }
    },
    methods:{
        loaDate(){
            let url1="/static/data/fs.json";
            Axios.get(url1).then(res=>{
                 this.Img=res.data.data.fs;
                 this.ZH=res.data.data.zh;
                 this.Fz=res.data.data.img;
              console.log(res);
            }).catch((res)=>{
                alert("报错!");
            })
        },
         mm(fzId){
      this.$router.push('/xq1/xqList1/' + fzId);
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
  border: none;
}
.lb li a{
    color: #9A9A9A;
}
.lb .router-link-active {
  color: #000;
}
/* banner */
.ul1{
    width: 100%;
    margin-top: 1.4rem;
}
.ul1 li{
    width: 100%;
    height: 100%;
}
/* 综合 */
.zh{
    display: flex;
    left: 0;
    width: 100%;
    height: 39px;
    background-color: #fff;
    z-index: 3;
    position: relative;
    font-size: 0;
}
.zh li{
    height: 100%;
    -ms-flex: 1;
    flex: 1;
}
.zh li p{
    height: 100%;
    line-height: 39px;
    font-family: \\9ED1\4F53;
    font-size: 14px;
    color: #9b885f;
    text-align: center;
}
/* 服装 */
.fz{
    width: 100%;
    height: auto;
}
.fz li{
    overflow: hidden;
    background: #fff;
    display: inline-block;
    width: calc(50% - 1px);
    float: left;
}
.fz li img{
    /* height: 150px; */
    display: -ms-flexbox;
    display: flex;
    /* padding-bottom: 100%; */
    position: relative;
}
.img_zh{
    margin: 20px 15px 30px;
    text-align: center;
    font-weight: 400;
}
.fz li h4{
    font-size: 13px;
    /* height: 13px; */
    color: #333;
    padding-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipisi;
    white-space: nowrap;
}
.fz li .p{
    font-size: 12px;
    /* height: 12px; */
    color: #999;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipisi;
    white-space: nowrap;
}
.fz li .p1{
    font-size: 12px;
    color: #9b885f;
}
</style>


