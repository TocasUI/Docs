import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: require('./components/homepage.vue')
    },
    {
        path: '*',
        redirect: '/'
    }]
})

router.afterEach((to, from, next) => {
    // 類似 Async 的概念，沒有 setTimeout 的話 HightlightJS 無法替元素上色。
    setTimeout(() => {
        // 脫逸 <code> 裡面的 HTML。
        document.querySelectorAll('code.hljs').forEach((el) => {
            el.innerText = el.innerHTML
        })

        // 呼叫 HightlightJS 來將剛才脫逸的 <code> 區塊全部上色。
        hljs.initHighlighting.called = false
        hljs.initHighlighting()
    }, 1)
})

export default router