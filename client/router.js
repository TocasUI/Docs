import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: require('views/homepage.vue')
    }, {
        path: '/elements',
        component: require('views/elements.vue')
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.afterEach((to, from, next) => {
    // 類似 Async 的概念，沒有 setTimeout 的話 HightlightJS 無法替元素上色。
    setTimeout(() => {
        document.querySelectorAll('[html-code]').forEach((el) => {
            var html = html_beautify(el.innerHTML),
                code = document.createElement("code")

            code.className = "hljs html"
            code.innerText = html

            el.innerHTML = ""
            el.appendChild(code)

            //el.innerText = html_beautify(el.innerHTML)
        })

        // 脫逸 <code> 裡面的 HTML。
        //document.querySelectorAll('code.hljs:not(.escaped)').forEach((el) => {
        //    el.innerText = html_beautify(el.innerHTML)
        //})

        // 呼叫 HightlightJS 來將剛才脫逸的 <code> 區塊全部上色。
        hljs.initHighlighting.called = false
        hljs.initHighlighting()
    }, 1)
})

export default router