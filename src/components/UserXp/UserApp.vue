<template>
  <div class="wrapper">
   <UserHeader></UserHeader>
   <MainSearchVue></MainSearchVue>
   <CarouselMapVue :v-if="$store.state.carouselIsShow"></CarouselMapVue>
   <router-view></router-view>
   <userFooterVue></userFooterVue>
  </div>
</template>

<script>
import CarouselMapVue from './carouselMap/CarouselMap.vue'
import userFooterVue from './footer/UserFooter.vue'
import UserHeader from './header/UserHeader.vue'
import MainSearchVue from './mainSearch/MainSearch.vue'

export default {
    name:'UserApp',
    components:{
        UserHeader,
        CarouselMapVue,
        MainSearchVue,
        userFooterVue
    }

}
</script>

<style>
.wrapper{
    width: 85vw;
    min-width: 800px;
    min-height:100px;
    margin: 0 auto;
    
}
</style>