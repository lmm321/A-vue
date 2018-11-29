<template>
    <div class="dl">
       <ul class="header">
           <li v-for="dl in DL" :key="dl.id">
              <router-link to="/"><img :src="dl.img1" alt=""></router-link> 
               <h4>{{dl.dl}}</h4>
           </li>
             <div class="login">
           <ul>
               <li><input type="text" placeholder="请输入邮箱/手机号"></li>
               <li><input type="text" placeholder="请输入密码"></li>
               <li><input type="submit" value="登录"></li>
             <div class="wj">
                   <p class="p1"><router-link to="/zc/zcList">忘记密码？</router-link></p>
                   <p class="p2"><router-link to="/yhzc/yhzcList">立即注册</router-link></p>
               </div>
           </ul>
       </div>
       </ul>
       <!-- 登陆 -->
     
    </div>
</template>
<script>
import Axios from "axios"
export default {
    data(){
        return{
            DL:[],  
        }
    },
    methods:{
        loaDate(){
               
    let url1='/static/data/dd.json';
    Axios.get(url1).then(res=>{
        this.DL=res.data.data.dd;
        console.log(res);
    }).catch((res)=>{
        alert("先把说不定");
    })
     }
    },
    mounted(){
        this.loaDate();
    }
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
    background: url("https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3894802135,1461457732&fm=173&app=25&f=JPEG?w=640&h=533&s=F170A97715036343545D88DE010080B3") center center;
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
    padding-top: 22.8%;
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
    background-color: rgba(255,255,255,.5);
}
.login ul li input placeholder{
    color: #ccc;
}
.login ul li:nth-of-type(3){
    margin: 0 40px;
    margin-top: 8%;
    height: 40px;
    background: #000;
    border-radius: 4px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
.login ul li:nth-of-type(3) input{
    font-size: 15px;
    color: #fff;
}
.login ul li::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e5e5e5;
    content: " ";
}
.wj p{
    margin: 20px 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    display: block;
    height: 50px;
    color: #333;
}
.wj p a{
     color: #000;
     font-size: 15px;
    text-decoration: none;
}
.wj .p1{
       float: left;
}
.wj .p2{
    float: right;
}
</style>