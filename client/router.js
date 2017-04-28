import Vue    from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Docs
import elements   from 'docs/elements'
import button     from 'docs/elements/button'
import divider    from 'docs/elements/divider'
import header     from 'docs/elements/header'
import input      from 'docs/elements/input'
import label      from 'docs/elements/label'
import list       from 'docs/elements/list'
import loader     from 'docs/elements/loader'
import quote      from 'docs/elements/quote'
import segment    from 'docs/elements/segment'
import slate      from 'docs/elements/slate'
import step       from 'docs/elements/step'
import breadcrumb from 'docs/collections/breadcrumb'
import form       from 'docs/collections/form'

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: (resolve) => require(['views/index'], resolve)
    }, {
        path: '/elements',
        component: (resolve) => require(['views/list'], resolve),
        meta: elements
    }, {
        path: '/elements/divider',
        component: (resolve) => require(['views/single'], resolve),
        meta: divider
    }, {
        path: '/elements/button',
        component: (resolve) => require(['views/single'], resolve),
        meta: button
    }, {
        path: '/elements/header',
        component: (resolve) => require(['views/single'], resolve),
        meta: header
    }, {
        path: '/elements/input',
        component: (resolve) => require(['views/single'], resolve),
        meta: input
    }, {
        path: '/elements/label',
        component: (resolve) => require(['views/single'], resolve),
        meta: label
    }, {
        path: '/elements/list',
        component: (resolve) => require(['views/single'], resolve),
        meta: list
    }, {
        path: '/elements/loader',
        component: (resolve) => require(['views/single'], resolve),
        meta: loader
    }, {
        path: '/elements/quote',
        component: (resolve) => require(['views/single'], resolve),
        meta: quote
    }, {
        path: '/elements/segment',
        component: (resolve) => require(['views/single'], resolve),
        meta: segment
    }, {
        path: '/elements/slate',
        component: (resolve) => require(['views/single'], resolve),
        meta: slate
    }, {
        path: '/elements/step',
        component: (resolve) => require(['views/single'], resolve),
        meta: step
    }, {
        path: '/collections/breadcrumb',
        component: (resolve) => require(['views/single'], resolve),
        meta: breadcrumb
    }, {
        path: '/collections/form',
        component: (resolve) => require(['views/single'], resolve),
        meta: form
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