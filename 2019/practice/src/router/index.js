import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const route = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: '首页',
        component: () =>
            import ('../components/Index.vue')
    }, {
        path: '/01',
        name: 'mavon-editor',
        component: () =>
            import ('../components/01.vue')
    }, {
        path: '/02',
        name: 'highlight',
        component: () =>
            import ('../components/02.vue')
    }, {
        path: '/03',
        name: 'ECMAScript6',
        component: () =>
            import ('../components/03.vue')
    }, {
        path: '/04',
        name: '字符串的新增方法',
        component: () =>
            import ('../components/04.vue')
    }, {
        path: '/05',
        name: '正则的扩展',
        component: () =>
            import ('../components/05.vue')
    }, {
        path: '/06',
        name: '数值的扩展',
        component: () =>
            import ('../components/06.vue')
    }, {
        path: '/07',
        name: '函数的扩展',
        component: () =>
            import ('../components/07.vue')
    }]
})

export default route