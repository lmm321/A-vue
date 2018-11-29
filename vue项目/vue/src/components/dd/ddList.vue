<template>
    <div class="main">
      <ul class="header">
          <li v-for="header in Header" :key="header.id">
            <img :src="header.img" alt="">
              <p>{{header.title}}</p>
          </li>
      </ul>
      <!-- 轮播图 -->
      <div class="banner">
           <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
<!-- 评估 -->
        <ul class="pg">
            <li v-for="pg in Pg" :key="pg.id">
                <img :src="pg.img" alt=""></li>
               
        </ul>
      
<!-- 资讯头条 -->
  <ul class="m_ul2">  <div class="zx1"></div> 
        <li class="ul2_li1">
          </li>
          <span></span>
          <li class="ul2_li2"><p>
        
              希腊一个美到天际，胜似人间天堂的居住地！
             <br/>条条道路通罗马，加拿大各省移民攻略！
             <br/>你以为嫁给了王子就获得了国籍？
             <br/>希腊一个美到天际，胜似人间天堂的居住地！
              </p>
        </li>
    </ul>
    <!-- 国旗 -->
    <ul class="gq">
        <div class="gq_li">
        <li v-for="img in Img" :key="img.id">
            <img class="img1" :src="img.img" alt="">
            <div class="img2_p">
            <img class="img2" :src="img.img1" alt="">
            <p>{{img.title}}</p>
       </div> </li>
    </div></ul>
    <!-- 移民 -->
    <div class="Ym">
    <ul class="ym">
        <li v-for="ym in Header" :key="ym.id">
            <h3>{{ym.ym}}</h3>
            <p>{{ym.ym1}}</p>
            <span>{{ym.ym2}}</span>
        </li>
    </ul>
    <ul class="ym1">
        <li v-for="ym1 in Pg" :key="ym1.id">
            <img :src="ym1.img1" alt="">
                <h4>{{ym1.title1}}</h4>
                <p>{{ym1.sprice}}</p>
        </li>
    </ul>
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
            Header:[],
            Pg:[],
            Img:[],
        }
    },
    methods:{
        loaDate(){
           let url1="/static/data/dd.json";
            Axios.get(url1).then(res=>{
                this.Header=res.data.data.dd;
                this.Pg=res.data.data.pg;
                this.Img=res.data.data.img;
                console.log(res);
            }).catch((res)=>{
                alert("输出失败！");
            })
        }
    },
    mounted(){
            this.loaDate();
    }
}
</script>
<style scoped>
.main{
    width: 100%;
    height: 2000px;
    overflow: auto;
}
.header{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    background: rgba(0,0,0,.5);
    position: fixed;
    z-index: 999;
}
.header li p{
    z-index: 1;
    margin-left: -50px;
    color: #fff;
    text-align: center;
}
.header li img{
    display: block;
    width: 22px;
    height: 22px;
    background-size: 22px 22px;
    background-repeat: no-repeat;
    padding: 11px 15px;
    background-position: 15px 11px;
    left: 0;
    top: 0;
    z-index: 2;
    position: fixed;
}
/* 轮播图 */
/* .banner{
width: 100%;
    /* height: 4350px;  */
/* overflow: auto;
} */ 
.my-swipe {
  height: 320px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  background-size: cover;
}

.slide1 {
    /* width: 100%;
    height: 200px; */
  background: url('http://img550.5lux.com.cn/2018/09/28/fg/153811548316_750x560.jpg') center center;
   background-size: 100%;
}

.slide2 {
  background: url('http://img550.5lux.com.cn/2018/11/11/gh/154188598723_750x560.jpg') center center;
 background-size: 100%;
}

.slide3 {
  background: url('http://img550.5lux.com.cn/2018/11/11/st/154190270654_750x560.jpg') center center;
  background-size: 100%;
}
/* 评估 */
/* .pg{
    height: 85px;
    margin: 0 6px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    overflow-x: scroll;
    overflow-scrolling: touch;
    z-index: 99;
} */
.pg li{
    /* position: absolute; */
    height: 100%;
    width: 123%;
    top: 0;   
}
.pg li img{
    float: left;
    height: 100%;
    width: 20%;
    font-size: 12px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center 32%;

}
/* 咨询 */
.m_ul2{
     position: relative;
    padding: 18px 15px;
    height: 30px;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 10px solid #f2f2f2;
}
.m_ul2 .ul2_li1{
    width: 32px;
    height: 30px;
    background-image: url("data:image/png;base64,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");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    float: left;
}
.m_ul2 span{
    width: 1px;
    height: 30px;
    background: #999;
    margin: 0 15px;   
}
.m_ul2 .ul2_li2{
    font-size: 12px;
    color: #333;
    line-height: 18px;
    text-align: left;
    height: 30px;
    width: 70%;
    position: relative;
     overflow: hidden;
}
.ul2_li2 p{
   width: 100%;
   display: inline-block;
   height: 30px;
   line-height: 30px;
   transition: 1s all;
   animation: mm 2s linear infinite;
}
@keyframes mm{
    0%{position: absolute;
        top:5%;
    }
    50%{
        position: absolute;
        top:-50%;
    }
    100%{
         position: absolute;
        top:-100%;
    }
}
.zx1{
    position: absolute;
    width: 100%;
    height: 10px;
    background: #f2f2f2;
 top:0px;left:-1%;
    z-index: 99;
}
/* 国旗 */
.gq{
    width: 100%;
    background: #f2f2f2;
    /* margin: 15px; */
    overflow: hidden;
    overflow-x: scroll;
}
.gq_li{
    width: 400%;
}
::-webkit-scrollbar{
    display: none;
}
.gq li{
    float: left;
    margin-right: 10px;
    width: 130px;
    height: 141px;
    background: #fff;
}
.gq li .img1{
    width: 130px;
    height: 98px;
    margin-right: 5px;
}
.gq li .img2_p{
    height: 44px;
    padding: 10px;
    box-sizing: border-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.gq li .img2{
    width: 30px;
    height: 24px;
    background-size: 100% 100%;
}
.gq li .img2{
        font-size: 12px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
/* 移民 */

.ym{
    padding: 0 20px;
    position: relative;
    height: 82px;
    margin-bottom: 3%;
}
.ym li h3{
    font-size: 18px;
    font-weight: 700;
    padding: 25px 0 10px;
}
.ym li p{
   font-size: 12px;
   color: #999;
}
.ym li span{
    position: absolute;
    right: 20px;
    top: 25px;
    font-size: 14px;
    color: #999;
}
.ym1{
    padding: 0 20px;
    border-bottom: 10px solid #f2f2f2;
}
.ym1 img{
    width: 100%;
    height: 251px;
    padding-top: 10px;
}
.ym1 h4{
    font-size: 18px;
    line-height: 24px;
    color: #333;
    padding-top: 19px;
    font-weight: 700;
}
.ym1 p{
    font-size: 16px;
    color: #999;
    padding: 20px 0;
}
</style>


