<template>
    <div>
        <ul class="footer">
            <li>
             <router-link to="/movie/MovieList">首页</router-link>
                </li>
            <li> <router-link to="/Sc/SCList">商城</router-link> 
                </li>
            <li><router-link to="/dd/ddList">到店</router-link>
                </li>
            <li> <router-link to="/gwc/gwcList">购物车</router-link>
                </li>
            <li> <router-link to="/my/myList">我的</router-link>
                </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* .footer .router-link-active .a{
    display: block;
}
.footer .router-link-active .b{
    display: none;
}
.b{
    display: block;
}
.a{
    display: none;
} */
.footer{
    width: 100%;
    height: 0.8rem;
    background:#000;
    position: fixed;
    bottom:0;
    line-height: 0.8rem;
    display:flex;
    justify-content: space-evenly; 
}

/* .footer li:nth-of-type(1) a{
    display: block;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    /* background: url("@/static/img/img1.jpg");} */
 .footer li{
     color: #fff;
     font-size: 12px;
 }
.footer li a{ color:#fff; outline:none;  border:none;  }
.footer li .router-link-active {
    color: red;
}
/* .footer1 li a.router-link-active{color: #fff; } */
</style>