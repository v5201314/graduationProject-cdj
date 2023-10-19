//该文件用于创建路由器
import VueRouter from 'vue-router'
//引入组件
import UserManagement from '../pages/admin/UserManagement'
import BusinessManagement from '../pages/admin/BusinessManagement'
import CommodityManagement from '../pages/admin/CommodityManagement'
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
    ]
})