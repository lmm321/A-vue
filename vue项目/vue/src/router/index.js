import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import  SC from '@/components/Sc/SC'
import SCList from '@/components/Sc/SCList'
import  fs from '@/components/fs/fs'
import fsList from '@/components/fs/fsList'
import  xb from '@/components/xb/xb'
import xbList from '@/components/xb/xbList'
import  wb from '@/components/wb/wb'
import wbList from '@/components/wb/wbList'
import  xx from '@/components/xx/xx'
import xxList from '@/components/xx/xxList'
import  dd from '@/components/dd/dd'
import ddList from '@/components/dd/ddList'
import  my from '@/components/my/my'
import myList from '@/components/my/myList'
import  zc from '@/components/zc/zc'
import zcList from '@/components/zc/zcList'
import  yhzc from '@/components/yhzc/yhzc'
import yhzcList from '@/components/yhzc/yhzcList'
import  gwc from '@/components/gwc/gwc'
import gwcList from '@/components/gwc/gwcList'
// 详情
import  xq from '@/components/xq/xq'
import xqList from '@/components/xq/xqList'
// 详情1
import  xq1 from '@/components/xq1/xq1'
import xqList1 from '@/components/xq1/xqList1'
import  gwc1 from '@/components/gwc1/gwc1'
import gwcList1 from '@/components/gwc1/gwcList1'
import  xq2 from '@/components/xq2/xq2'
import xqList2 from '@/components/xq2/xqList2'
import  gwc2 from '@/components/gwc2/gwc2'
import gwcList2 from '@/components/gwc2/gwcList2'
import  xq3 from '@/components/xq3/xq3'
import xqList3 from '@/components/xq3/xqList3'
import  gwc3 from '@/components/gwc3/gwc3'
import gwcList3 from '@/components/gwc3/gwcList3'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'movie/MovieList'
    },{
      path:'/movie',
      name:'Movie',
      component:Movie,
      children:[{
        path:'movieList',
        name:'MovieList',
        component:MovieList,
      }],
    },{
      path:'/Sc',
      name:'SC',
      component:SC,
      children:[{
        path:'SCList',
        name:'SCList',
        component:SCList,
      }]
    },{
      path:'/fs',
      name:'fs',
      component:fs,
      redirect:'/fs/fsList',
    children:[{
      path:'fsList',
      name:'fsList',
      component:fsList,
    }]
  },{
    path:'/xb',
    name:'xb',
    component:xb,
    redirect:'/xb/xbList',
  children:[{
    path:'xbList',
    name:'xbList',
    component:xbList,
  }]
},{
  path:'/wb',
  name:'wb',
  component:wb,
  redirect:'/wb/wbList',
children:[{
  path:'wbList',
  name:'wbList',
  component:wbList,
}]
},{
  path:'/xx',
  name:'xx',
  component:xx,
  redirect:'/xx/xxList',
children:[{
  path:'xxList',
  name:'xxList',
  component:xxList,
}]
},
,{
  path:'/dd',
  name:'dd',
  component:dd,
  redirect:'/dd/ddList',
children:[{
  path:'ddList',
  name:'ddList',
  component:ddList,
}]
},{
  path:'/my',
  name:'my',
  component:my,
  redirect:'/my/myList',
  children:[{
  path:'myList',
  name:'myList',
  component:myList,
  }]
},{
  path:'/zc',
  name:'zc',
  component:zc,
  redirect:'/zc/zc',
  children:[{
    path:'zcList',
    name:'zcList',
    component:zcList,
  }]
},
{
  path:'/yhzc',
  name:'yhzc',
  component:yhzc,
  redirect:'/yhzc/yhzc',
  children:[{
    path:'yhzcList',
    name:'yhzcList',
    component:yhzcList,
  }]
},{
  path:'/gwc',
  name:'gwc',
  component:gwc,
  redirect:'/gwc/gwcList',
  children:[{
    path:'gwcList/:fzId',
    name:'gwcList',
    component:gwcList,
  }]
},{
  path:'/xq',
  name:'xq',
  component:xq,
  redirect:'/xq/xqList',
  children:[{
    path:'xqList/:fzId',
    name:'xqList',
    component:xqList,
  }]
},{
  path:'/xq1',
  name:'xq1',
  component:xq1,
  redirect:'/xq1/xqList1',
  children:[{
    path:'xqList1/:fzId',
    name:'xqList1',
    component:xqList1,
  }]
},{
  path:'/gwc1',
  name:'gwc1',
  component:gwc1,
  redirect:'/gwc1/gwcList1',
  children:[{
    path:'gwcList1/:fzId',
    name:'gwcList1',
    component:gwcList1,
  }]
},{
  path:'/xq2',
  name:'xq2',
  component:xq2,
  redirect:'/xq2/xqList2',
  children:[{
    path:'xqList2/:fzId',
    name:'xqList2',
    component:xqList2,
  }]
},{
  path:'/gwc2',
  name:'gwc2',
  component:gwc2,
  redirect:'/gwc2/gwcList2',
  children:[{
    path:'gwcList2/:fzId',
    name:'gwcList2',
    component:gwcList2,
  }]
},{
  path:'/xq3',
  name:'xq3',
  component:xq3,
  redirect:'/xq3/xqList3',
  children:[{
    path:'xqList3/:fzId',
    name:'xqList3',
    component:xqList3,
  }]
},{
  path:'/gwc3',
  name:'gwc3',
  component:gwc3,
  redirect:'/gwc3/gwcList3',
  children:[{
    path:'gwcList3/:fzId',
    name:'gwcList3',
    component:gwcList3,
  }]
},
]
})
