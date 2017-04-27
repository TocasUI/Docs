import Vue    from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Docs
import elements from 'docs/elements.yml'
import button  from 'docs/elements/button.yml'

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: (resolve) => require(['views/index'], resolve)
    }, {
        path: '/elements',
        component: (resolve) => require(['views/list'], resolve),
        meta: elements
    },{
        path: '/elements/button',
        component: (resolve) => require(['views/single'], resolve),
        meta: button
    }, {
        path: '*',
        redirect: '/'
    }]
})

//
router.afterEach((to, from, next) => {
    // 類似 Async 的概念，沒有 setTimeout 的話 HightlightJS 無法替元素上色。
    setTimeout(() => {
        document.querySelectorAll('[html-code]').forEach((el) => {

            var text       = el.innerHTML,
                unescaped  = new DOMParser().parseFromString(text, 'text/html').documentElement.textContent,
                beautified = html_beautify(unescaped),
                code       = document.createElement('code')

            code.className = 'hljs html'
            code.innerText = beautified

            el.innerHTML = ''
            el.appendChild(code)
        })

        // 呼叫 HightlightJS 來將剛才脫逸的 <code> 區塊全部上色。
        hljs.initHighlighting.called = false
        hljs.initHighlighting()

        document.querySelectorAll('[html-code]').forEach((el) => {
            el.innerHTML = el.innerHTML.replace(/\[\[(.*?)\]\]/g, '<mark>$1</mark>')
            el.innerHTML = el.innerHTML.replace(/\{{(.*?)}}/g, (match, first) => {
                return `<a href="#">${first}</a>`
            })
        })
    }, 1)
})

export default router