//该文件用于创建路由器
import VueRouter from 'vue-router'
//引入store
import store from '@/store';
/**引入组件 */
//管理员页面
import AdminApp from "../components/AdminXp/AdminApp";
//管理员页面的路由组件
import UserManagement from '../pages/admin/UserManagement'
import BusinessManagement from '../pages/admin/BusinessManagement'
import CommodityManagement from '../pages/admin/CommodityManagement'
import OrdersManagement from '../pages/admin/OrdersManagement'
//登录和注册页面
import LoginPage from "../components/login/LoginPage.vue";
//商家管理页面
import BusinessApp from "../components/BusinessXp/BusinessApp.vue";
//用户页面
import UserAppVue from '../components/UserXp/UserApp.vue';
//用户页面的路由组件
import CommodityList from '../pages/user/CommodityList'
import SearchCommodity from '@/pages/user/SearchCommodity'
import CommodityDetail from '@/pages/user/CommodityDetail'
import Test2 from '../pages/user/test2'
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        //管理员页面的路由配置
        {
            path: '/admin',
            component: AdminApp,
            meta: { title: '管理员页面', isAuth: true },
            children: [
                { path: '/', redirect: '/UserManagement' },
                {
                    name: 'UserManagement',
                    path: '/UserManagement',
                    component: UserManagement
                },
                {
                    name: 'BusinessManagement',
                    path: '/BusinessManagement',
                    component: BusinessManagement,
                },
                {
                    name: 'CommodityManagement',
                    path: '/CommodityManagement',
                    component: CommodityManagement,
                },
                {
                    name: 'OrdersManagement',
                    path: '/OrdersManagement',
                    component: OrdersManagement,
                },
            ]

        },
        //登录界面的路由配置
        {
            name: 'login',
            path: '/login',
            component: LoginPage,
            meta:{title:'注册与登录',isAuth:true},
        },
        //用户界面的路由配置
        {
            path: '/index',
            component: UserAppVue,
            meta:{title:'CDJ系统主页',isAuth:true},
            children:[
                { path: '/', redirect: '/commodityList' },
                {
                    name: 'commodityList',
                    path: '/commodityList',
                    component: CommodityList
                },
                {
                    name: 'searchCommodity',
                    path: '/searchCommodity',
                    component: SearchCommodity
                },
                {
                    name: 'commodityDetail',
                    path: '/commodityDetail',
                    component: CommodityDetail,
                    props:true,
                },
            ]
        },
        //商家界面的路由配置
        {
            name: 'business',
            path: '/business',
            component: BusinessApp
        },

       
    ]
})


//全局的前置路由守卫
router.beforeEach((to,from,next)=>{
    document.title=to.meta.title||'余生学习' //改变网页的title
    if(from.name==='commodityList'){
        store.commit('changeCarouselIsShow')
    }
    //根据用户的权限决定他能进入的页面
    if(to.name==='business'){
        //判断权限类型
        if(store.state.userInfo.permissions===2){
            next()
        }

    }else if(to.name==='UserManagement'||to.name==='BusinessManagement'||to.name==='CommodityManagement'||to.name==='OrdersManagement'){
      
         //判断权限类型
         if(store.state.userInfo.permissions===3){
            next()
        }
    }else{
        next()
    }
})
//全局后置路由守卫————初始化的时候调用、每次切换路由之后被调用
router.afterEach((to)=>{
    if(to.name==='commodityList'){
        store.commit('changeCarouselIsShow')
    }

})

export default router