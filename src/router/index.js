//该文件用于创建路由器
import VueRouter from 'vue-router'
//引入组件
//管理员页面
import UserManagement from '../pages/admin/UserManagement'
import BusinessManagement from '../pages/admin/BusinessManagement'
import CommodityManagement from '../pages/admin/CommodityManagement'
//用户页面
import Test1 from '../pages/user/test1'
import Test2 from '../pages/user/test2'
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        // {path:'/',redirect:'/UserManagement'},
        {
            name:'UserManagement',
            path:'/UserManagement',
            component:UserManagement
        },
        {
            name:'BusinessManagement',
            path:'/BusinessManagement',
            component:BusinessManagement,
        },
        {
            name:'CommodityManagement',
            path:'/CommodityManagement',
            component:CommodityManagement,
        },
        {
            name:'test1',
            path:'/test1',
            component:Test1
        },
        {
            name:'test2',
            path:'/test2',
            component:Test2
        },
    ]
})