<template>
  <div id="content">
      <h1>highlight</h1>
    <div v-highlight>
      <pre>
        <code>{{ code }}</code>
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: `
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const route = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        component: () =>
            import ('../App.vue')
    }, {
        path: '/01',
        name: 'let和const命令',
        component: () =>
            import ('../components/01.vue')
    }, {
        path: '/02',
        name: '变量的解构赋值',
        component: () =>
            import ('../components/02.vue')
    }, {
        path: '/03',
        name: '字符串的扩展',
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
      `
    };
  }
};
</script>