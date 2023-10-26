//该文件用于创建路由器
import VueRouter from 'vue-router'
/**引入组件 */
//管理员页面
import AdminApp from "../components/AdminXp/AdminApp";
//管理员页面的路由组件
import UserManagement from '../pages/admin/UserManagement'
import BusinessManagement from '../pages/admin/BusinessManagement'
import CommodityManagement from '../pages/admin/CommodityManagement'
//登录和注册页面
import LoginPage from "../components/login/LoginPage.vue";
//商家管理页面
import BusinessApp from "../components/BusinessXp/BusinessApp.vue";
//用户页面
import UserAppVue from '../components/UserXp/UserApp.vue';
//用户页面的路由组件
import Test1 from '../pages/user/test1'
import Test2 from '../pages/user/test2'
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        //管理员页面的路由配置
        {
            name: 'admin',
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
            name: 'index',
            path: '/index',
            component: UserAppVue,
            meta:{title:'CDJ系统主页',isAuth:true},
            children:[
                {
                    name: 'test1',
                    path: '/test1',
                    component: Test1
                },
                {
                    name: 'test2',
                    path: '/test2',
                    component: Test2
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


//全局的后置路由守卫
router.beforeEach((to,from,next)=>{
    document.title=to.meta.title||'余生学习' //改变网页的title
    next()
})

export default router