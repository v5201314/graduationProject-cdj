<template>
  <div class="wrapper">
   <UserHeader></UserHeader>
   <MainSearchVue></MainSearchVue>
   <CarouselMapVue></CarouselMapVue>
   <router-view></router-view>
  </div>
</template>

<script>
import CarouselMapVue from './carouselMap/CarouselMap.vue'
import UserHeader from './header/UserHeader.vue'
import MainSearchVue from './mainSearch/MainSearch.vue'

export default {
    name:'UserApp',
    components:{
        UserHeader,
        CarouselMapVue,
        MainSearchVue
    }

}
</script>

<style>
.wrapper{
    width: 1200px;
    min-height:100px;
    margin: 0 auto;
    
}
</style>