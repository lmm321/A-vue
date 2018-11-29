<template>
        <div class="dl">
       <ul class="header">
           <li ><router-link to="/my/myList">
               <img src="http://m.5lux.com/static/img/backWhiteBg@3x.png" alt=""></router-link>
               <h4>登录第五大道</h4>
           </li>
              <div class="login">
           <ul>
               <li><input type="text" placeholder="请输入手机号/邮箱"></li>
               <li><input type="text" placeholder="请输入验证码">
               <p @click="loaDate" class="p" v-show="show">获取验证码</p>
             <p class="p1" v-show="show1">发送{{count}}s</p> </li>
           </ul>
              </div>
       </ul>
    </div>
</template>
<script>
import Axios from "axios"
export default {
      data(){
        return{
            DL:[],
            show:true,
            show1:false,
            count:'',  
            timer:null,
        }
    },
    methods:{
    loaDate(){
        this.show=false;
        this.show1=true;    
    // let url1='/static/data/dd.json';
    // Axios.get(url1).then(res=>{
    //     this.DL=res.data.data.dd;
    //     console.log(res);
    // }).catch((res)=>{
    //     alert("先把说不定");
    // })
    const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show1 = true;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.show1 = false;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
     }
           }, 
}
</script>
<style scoped>
.dl{
    height: auto;
    width: 100%;
    text-align: center;
    background: #f2f2f2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1000px;
}
.header{
    position: fixed;
    bottom: 0;
    z-index: 10;
    /* overflow: hidden; */
    top: 0;
    left: 0;
    background: url("https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3894802135,1461457732&fm=173&app=25&f=JPEG?w=640&h=533&s=F170A97715036343545D88DE010080B3")center center;
    /* background:url("../src/assets/img/img.jpg"); */
    /* height: 45px; */
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
}
.header li h4{
    flex: 1;
    height: 16px;
    position: relative;
    font-size: 16px;
}
/* 登陆 */
.login{
    width: 100%;
    height: 500px;
    border-top: 1px solid transparent;
    box-sizing: border-box;
    padding-top: 12.8%;
    z-index: 99;
}
.login ul li{
    margin: 0 40px;
    height: 40px;
    position: relative;
     outline: none;
}
.login ul li input{
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 16px;
    color: #666;
    border: none;
    background: rgba(255,255,255,.5);
}
.login ul li input placeholder{
    color: #ccc;
}
.login ul li .p{
    width: 30%;
    border-left: 0.5px solid #ccc;
    height: 20px;
    line-height: 20px;
    position: absolute;
    right: 2%;
    padding-left: 2%;
    color: #CCB27F;
    background: rgba(255,255,255,.5);
}
.p1{
    width: 30%;
    height: 40px;
    /* position: absolute;
    right: 10%; */
    /* top:-10%; */
    color: #000;
    /* background:#fff; */
  background: rgba(255,255,255,.5);
    /* border: 1px solid #ccc; */
}
</style>

