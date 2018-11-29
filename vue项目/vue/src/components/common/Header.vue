<template>
<div class="header">
    <ul>
        <li><input type="text"  placeholder="5LUX.COM">
        <div class="img"></div>
        </li>
       <div class="img1"></div>
    </ul>
         
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
 ul{
     overflow: hidden;
     width: 100%;
     height: 0.7rem;
     background: rgba(0,0,0,0.16);
     opacity: .8;
     position: fixed;
     top:0px;
     z-index: 99;
 }
 ul li input{
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
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAEM+/QO+AcGAwn1D/kKMAAACYSURBVBjTYwACcevdu80FGCCALXo3EIRBOIzau8FAEcwT3b3bwsXDevdWsFrt3ZpAklN7twJI1+5dYEGp3dvAChWh2kFKq3dPgJg2e3cBA4P1ZqhFzLsNGBh274DyOHZvAPK2QHks+Hmo+lDNRLUP1S3o7kT4YSOy/3ZvEoD6HeZ7RLgIASURYcaoDZREAKAkEg8oyYAiCQDnr0zCoGOvDwAAAABJRU5ErkJggg==");
    background-size: cover;
    border: none;
 }
 .img1{
    width: 22px;
    height: 22px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAv4BA789gIJ8Q348wr3BQisJoTQAAATJJREFUOMuNlduOxCAMQ0mAXuhlzv9/7a7KdLIr6BC/VFhuMK5RQwdrjHEPHsxauHBMI+mqAFmkAOX1fWwGedkO27e5ifSy1QbLsziT57/rCc4nrZLm/8wJ86OJ5kTyZOQktyd+Gi1MvWP044a1JbXvYyd12IgEN92y66SqC0Ub3OxuBhIjmHO5qpNJ0qKyhU8oMI08Z7ZP8PGim29irCL3mvqxm0Yaq5S7W6m+Ap3BwD3Qttih8WHsfnfk4Lg2kKO5pcZCfCenYYjE+X4O77FNhDgWL9VrrN4HUMRiHmGC+k4eKW3khjjEaz2ZsAUHuK5+dsRcZc7kbgOzU6yIN7la0lpQb3bqSq6WtBbUA4hWUEdJraCOklrM45JKgNMnLixhgU0dEIhhTjixXH8wceE3hx9LbBNhHZzz6AAAAABJRU5ErkJggg==");
    background-size: 22px 22px;
    background-repeat: no-repeat;
    /* margin-right: 17px; */
   position: absolute;
   right:14%;top:15%;
 }
</style>
