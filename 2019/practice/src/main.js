import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index'

Vue.config.productionTip = false

import hljs from 'highlight.js';

Vue.directive('highlight', function(el) {
    let blocks = el.querySelectorAll('pre code');
    setTimeout(blocks.forEach((block) => {
        hljs.highlightBlock(block)
    }), 200);
})

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import './common/font/font.css'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')