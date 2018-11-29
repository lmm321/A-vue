<template>
    <div>
        <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>
<script>
import CommonFooter from '../common/Footer'
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
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

