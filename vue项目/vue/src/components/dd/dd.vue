<template>
    <div>
        <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonFooter,
          'swipe': Swipe,
        'swipe-item': SwipeItem
    }
}
</script>
<style scoped>

</style>