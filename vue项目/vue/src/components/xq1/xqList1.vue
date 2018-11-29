<template>
    <div class="xqy">
         <!-- <h2>MovieDetail: {{this.$route.params.fzId}}</h2>  -->
       <ul class="xq">
        <li>
            <div class="fixed">
           <router-link to="/">
               <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAQlBMVEUAAAAAAADV1dUAAAAAAAC/v7+JiYn8/PwAAAAAAAAAAAAAAAAAAAAAAACfn59AQED4+Pjv7+/q6uqxsbHk5OT///+rnOa1AAAAFXRSTlMzAJkLJIBZ8h4TKRAaFmZA5sy/c7OHwwx5AAABiklEQVRYw93Z71KDMBAE8G3vivkDVKu8/6satTYjMoSE22mn+wC/4QOQ3C0O5UjsVXGLah/lUA5KrFcsRr3sooeAlYShlRaHYpw00KLYFJUC3QJnvIZ2qIrbTEdUJ26jHRriNtAS0JQgJVrQHFmnPXbEL9JZtrMxkw1tGMrZntMCg8gSLYCtnelgQ4f/tINR3JyOMEuc0TDMX9pZ0i7Txbfj/e1U+ZZkWrGW0zRNVbRmWoryK6oiN1pL8ktXR+svLdYyIFfamctwV9peBn7ogSBj+KYDQUb4ooUhA5JoT5HhE60UGZpojowEC0mGIJLkBPckOcFKkqFQksx7ZuCJ5OlybMm4Lp+nHTnfi8Z4bM6I583HpQPA+B5Hkw99ke5Mfk/EnyrxKCAeYLxjl3hZIF5xiBcz3nWSeAnmXd2JAwdxTOINd8SRlDdIE8d/3tKCt2ohLoh4ay3uMo6/QrS1hb2u5S+ZDW3PW+jzagheeUKrfHhF1f3rtepS8FGqzO0F7KPVxgZlN6ui/wSAlyLINQRF+gAAAABJRU5ErkJggg==" alt=""></router-link> 
           <img class="img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAnxDP72Agv4BAcDDfUK+PVRQ0ZgAAAcNJREFUSMftlUl2wyAQRA1iBg33P22gkGkJ9B5pJ0vXxsbN7xHw66s/KAZhs3ZteovRe7GIEJ9JGdLRZPXVpC1ZUpAjuwIlLS1GXO6WtPbsjt+34L1fXd0dqiVUX27NprBhsd9ZkX9STrYSy/oQsOCbacU5BUvHLubWu4QIyCjFW++WOx3aMrrc7Bqi7FnX4lW+xjRD86VytZem+UYrBbbXli2GPCWJT0gZ8onVIJla4qbkB39ZQvu2O1DPO5VqzHtKyzksew+TA6TXoxZ0s27RNb7otrjjcM+whttKSRS8DLUJIZ9heebtK6VQ+FyUt6+5CbhQDLYk6s7CAFsO7Dp4+xiWm40fwBoJc2XLfJFw4sPpvAIYGVMmQ++RBS4ccDjoC0MUECl4HuupVMHut6VLZA5m1YECI7RiHJGorrdX1qdqLnrc5LUBjKO99Q129I7ML+Pwvog5PW6kQn7X8kD/Aj2tZ6wmtqPnme/EsmnRsQO9SSZLNMx8ljY8n1S59eyoHTS/JBqGWoe7MB8FtKpx4FFNWdoJevTHpKkSrFk0sZHxLC9Ec1m6JsSyaeE9HSsuDYFl07ayFixbWlgr9Ourf9MPN0AgcSwvGDoAAAAASUVORK5CYII=" alt="">
           </div>
            <img  class="img3" :src="list[index-1].img1" alt="">
            <h2>{{list[index-1].p3}}</h2>
            <h3>{{list[index-1].p5}}</h3>
            <p>1-3个工作日 第五大道自营发货</p>
        </li>
    </ul> 
    <!-- 列表 -->
  <ul class="lb">
    <li>
        <span class="left">分期付款</span>
       <span class="center"> 分期12期，每期仅需 ￥7.7</span>
        <span class="more"></span>
    </li>
    <li>
        <div class="low">
            <span class="right">折扣</span>
            <span class="center1">全网商品支持商通卡线下支付</span>
        </div>
          <div class="low">
            <span class="right">满赠</span>
            <span class="center1">订单满9999元送价值1199元时尚管家服务</span>
        </div>
    </li>
  </ul>
   <ul class="jr">
       <li>
           
           <input @click="mm( a )"  type="button" value="加入购物车">
           <input type="button" value="立即购买">
       </li>
   </ul>

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
            a:0,
        }
    },
    methods:{
        mm(num){
            console.log("传进来的参数"+num)
            this.$router.push('/gwc1/gwcList1/' + num);
        }
    },
    mounted(){ 
        this.a= this.$route.params.fzId
    let url1 ="/static/data/fs.json"
    Axios.get(url1).then(res=>{
    this.list=res.data.data.img;
       this.index=this.$route.params.fzId;
         console.log(this.list);
        //  console.log(this.nn);
    }).catch((res)=>{
            alert("被杀vdhasd");
    })
    },

}
</script>
<style scoped>
.xqy{
    height: auto;
    width: 100%;
    text-align: center;
    background: #f2f2f2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.xq{
    position: relative;
    z-index: 2;
    background: #fff;
    height: auto;
    /* border-bottom: 1px solid #fff; */
    box-sizing: border-box;
    margin-bottom: 5%;
}
.xq .fixed{
    position: relative;
    height: 44px;
}
.xq .fixed .img1{
    left: 13px;
    display: inline-block;
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 5;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    top: 7px;
}
.img2{
    right: 13px;
    background-color: #ccc;
    border-radius: 15px;
    background-position: 50%;
    background-size: 25px 25px;
    display: inline-block;
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 5;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    top: 7px;
}
.img3{
    display: block;
    width: 100%;
    height: 400px;
    background: #000;
    /* border: 1px solid #ccc; */
}
.xq h2{
    /* margin: 0 15px; */
    /* padding: 20px 0 5px; */
    width: 95%;
    height: 34px;
    /* border: 1px solid #ccc; */
    background: #fff;
    font-size: 0;
    font-size: 24px;
    margin-right: 5px;
    color: #9b885f;
    text-align: left;  
    margin-bottom: 10px;
}
.xq h3{
    line-height: 21px;
    font-size: 15px;
    text-align: left; 
    /* padding: 15px 25px 10px 30px; */
}
.xq p{
    font-size: 10px;
    height: 21px;
    line-height: 21px;
    color: #999;
    text-align: left;
}
.lb{
    background: #fff;
    margin-bottom: 10px;
    padding: 1%;
}
.lb li{
    /* margin-left: 15px; */
    position: relative;
    text-align: left;
    padding: 7.5px 0;
    display: flex;
    padding: 14.5px 0;
    overflow: hidden;
    -ms-flex-align: center;
    align-items: center;
    line-height: 14px;
}
.lb li .left{
    height: 14px;
    border-radius: 2px;
    font-size: 11px;
    color: #fff;
    border: 1px solid #9b885f;
    background-color: #9b885f;
    vertical-align: middle;
    /* padding: 0 5px; */
    box-sizing: border-box;
    /* margin-right: 10px; */
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.center{
    font-size: 13px;
    height: 14px;
    color: #333;
    display: inline-block;
    width: 70%;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAHlBMV…hoAtGWM2dOBlLlQADidgABiJ4JBDiEcRiCw0pcDhwFgxkAADR8KKV/2b1WAAAAAElFTkSuQmCC);
    background-size: 22px 22px;
}
.more{
    position: absolute;
    display: inline-block;
    right: 17px;
    height: 22px;
    width: 22px;
    top: 3.5px;
    float: right;
    background-size: 22px 22px;
}
.low{
    /* margin-left: 15px; */
    position: relative;
    text-align: left;
    padding: 14.5px 0;
}
.low .right{
    height: 14px;
    border-radius: 2px;
    font-size: 11px;
    color: #fff;
    border: 1px solid #9b885f;
    background-color: #9b885f;
    vertical-align: middle;
    /* padding: 0 5px; */
    box-sizing: border-box;
    /* margin-right: 10px; */
    /* display: -ms-flexbox;
    display: flex; */
    -ms-flex-align: center;
    align-items: center;
}
.low::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e5e5e5;
    content: " ";
}
.low .center1{
    font-size: 13px;
    height: 14px;
    color: #333;
    display: inline-block;
    width: 70%;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.li3{
    width: 85%;
    padding-top: 10px;
    overflow: hidden;
    max-height: 46px;
    float: left;
}
.logo{
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAKlBMV…fiXhGINNC9EP8wTgDzbW+j+xc9PDDDCzM8EeGNHh8Y8YUJAOlbYxw8HVFJAAAAAElFTkSuQmCC);
    background-size: 15px 15px;
    background-repeat: no-repeat;
    vertical-align: middle;
}
.title{
    font-size: 12px;
    color: #666;
    display: inline-block;
    vertical-align: middle;
}
/* 加入 */
.jr{
    width: 100%;
    height: 80px;
    background: #fff;
}
.jr input{
    width: 20%;
    height: 40px;
    outline: none;
    border: none;
    margin: 5%;
    background: #000;
    color: #fff;
    /* padding: 20px;
 */}
 /* .jr input:nth-of-type(1){
     float: left;
 }
 .jr input:nth-of-type(2){
     float: right;
 } */
</style>   