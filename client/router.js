import Vue    from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Docs
import elements    from 'docs/elements'
import button      from 'docs/elements/button'
import divider     from 'docs/elements/divider'
import header      from 'docs/elements/header'
import input       from 'docs/elements/input'
import image       from 'docs/elements/image'
import label       from 'docs/elements/label'
import list        from 'docs/elements/list'
import loader      from 'docs/elements/loader'
import quote       from 'docs/elements/quote'
import segment     from 'docs/elements/segment'
import slate       from 'docs/elements/slate'
import step        from 'docs/elements/step'
import collections from 'docs/collections'
import breadcrumb  from 'docs/collections/breadcrumb'
import form        from 'docs/collections/form'
import grid        from 'docs/collections/grid'
import menu        from 'docs/collections/menu'
import message     from 'docs/collections/message'
import messageJS   from 'docs/collections/message-js'
import table       from 'docs/collections/table'
import tableJS     from 'docs/collections/table-js'
import modules     from 'docs/modules'
import accordion   from 'docs/modules/accordion'
import calendar    from 'docs/modules/calendar'
import checkbox    from 'docs/modules/checkbox'
import checkboxJS  from 'docs/modules/checkbox-js'
import dimmer      from 'docs/modules/dimmer'
import dropdown    from 'docs/modules/dropdown'
import dropdownJS  from 'docs/modules/dropdown-js'
import modal       from 'docs/modules/modal'
import modalJS     from 'docs/modules/modal-js'
import popup       from 'docs/modules/popup'
import popupJS     from 'docs/modules/popup-js'
import progress    from 'docs/modules/progress'
import slider      from 'docs/modules/slider'
import embed       from 'docs/modules/embed'
import sidebar     from 'docs/modules/sidebar'
import snackbar    from 'docs/modules/snackbar'
import tab         from 'docs/modules/tab'
import views       from 'docs/views'
import speeches    from 'docs/views/speeches'
import card        from 'docs/views/card'
import items       from 'docs/views/items'
import statistic   from 'docs/views/statistic'

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
        path: '/elements/image',
        component: (resolve) => require(['views/single'], resolve),
        meta: image
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
        path: '/collections',
        component: (resolve) => require(['views/list'], resolve),
        meta: collections
    }, {
        path: '/collections/breadcrumb',
        component: (resolve) => require(['views/single'], resolve),
        meta: breadcrumb
    }, {
        path: '/collections/form',
        component: (resolve) => require(['views/single'], resolve),
        meta: form
    }, {
        path: '/collections/grid',
        component: (resolve) => require(['views/single'], resolve),
        meta: grid
    }, {
        path: '/collections/menu',
        component: (resolve) => require(['views/single'], resolve),
        meta: menu
    }, {
        path: '/collections/message',
        component: (resolve) => require(['views/single'], resolve),
        meta: message
    }, {
        path: '/collections/message/javascript',
        component: (resolve) => require(['views/single'], resolve),
        meta: messageJS
    }, {
        path: '/collections/table',
        component: (resolve) => require(['views/single'], resolve),
        meta: table
    }, {
        path: '/collections/table/javascript',
        component: (resolve) => require(['views/single'], resolve),
        meta: tableJS
    }, {
        path: '/modules',
        component: (resolve) => require(['views/list'], resolve),
        meta: modules
    }, {
        path: '/modules/accordion',
        component: (resolve) => require(['views/single'], resolve),
        meta: accordion
    }, {
        path: '/modules/calendar',
        component: (resolve) => require(['views/single'], resolve),
        meta: calendar
    }, {
        path: '/modules/checkbox',
        component: (resolve) => require(['views/single'], resolve),
        meta: checkbox
    }, {
        path: '/modules/checkbox/javascript',
        component: (resolve) => require(['views/single'], resolve),
        meta: checkboxJS
    }, {
        path: '/modules/dimmer',
        component: (resolve) => require(['views/single'], resolve),
        meta: dimmer
    }, {
        path: '/modules/dropdown',
        component: (resolve) => require(['views/single'], resolve),
        meta: dropdown
    }, {
        path: '/modules/dropdown/javascript',
        component: (resolve) => require(['views/single'], resolve),
        meta: dropdownJS
    }, {
        path: '/modules/modal',
        component: (resolve) => require(['views/single'], resolve),
        meta: modal
    }, {
        path: '/modules/modal/javascript',
        component: (resolve) => require(['views/single'], resolve),
        meta: modalJS
    }, {
        path: '/modules/popup',
        component: (resolve) => require(['views/single'], resolve),
        meta: popup
    }, {
        path: '/modules/popup/javascript',
        component: (resolve) => require(['views/single'], resolve),
        meta: popupJS
    }, {
        path: '/modules/progress',
        component: (resolve) => require(['views/single'], resolve),
        meta: progress
    }, {
        path: '/modules/slider',
        component: (resolve) => require(['views/single'], resolve),
        meta: slider
    }, {
        path: '/modules/sidebar',
        component: (resolve) => require(['views/single'], resolve),
        meta: sidebar
    }, {
        path: '/modules/embed',
        component: (resolve) => require(['views/single'], resolve),
        meta: embed
    }, {
        path: '/modules/snackbar',
        component: (resolve) => require(['views/single'], resolve),
        meta: snackbar
    }, {
        path: '/modules/tab',
        component: (resolve) => require(['views/single'], resolve),
        meta: tab
    }, {
        path: '/views',
        component: (resolve) => require(['views/list'], resolve),
        meta: views
    }, {
        path: '/views/speeches',
        component: (resolve) => require(['views/single'], resolve),
        meta: speeches
    }, {
        path: '/views/card',
        component: (resolve) => require(['views/single'], resolve),
        meta: card
    }, {
        path: '/views/items',
        component: (resolve) => require(['views/single'], resolve),
        meta: items
    }, {
        path: '/views/statistic',
        component: (resolve) => require(['views/single'], resolve),
        meta: statistic
    }, {
        path: '*',
        redirect: '/'
    }]
})

//
router.afterEach((to, from, next) => {
    // 類似 Async 的概念，沒有 setTimeout 的話 HightlightJS 無法替元素上色。
    setTimeout(() => {
        document.querySelectorAll('[html-code], [js-code]').forEach((el) => {
            var isJS       = el.getAttribute('js-code') == 'js-code',
                text       = el.innerHTML,
                unescaped  = new DOMParser().parseFromString(text, 'text/html').documentElement.textContent,
                code       = document.createElement('code')

            var beautified

            beautified = isJS ? js_beautify(unescaped) : html_beautify(unescaped)

            console.log(el, isJS)
            code.className = isJS ? 'hljs javascript' : 'hljs html'
            code.innerText = beautified

            el.innerHTML = ''
            el.appendChild(code)
        })

        // 呼叫 HightlightJS 來將剛才脫逸的 <code> 區塊全部上色。
        hljs.initHighlighting.called = false
        hljs.initHighlighting()

        // 將 <code> 裡面的 [[]] 和 {{}} 與 !--! 標籤替換掉。
        document.querySelectorAll('[html-code], [js-code]').forEach((el) => {
            // 標記程式碼。 - [[segment]]
            el.innerHTML = el.innerHTML.replace(/\[\[(.*?)\]\]/g, '<mark>$1</mark>')

            // 相關元件連結。 - {{segment}}
            el.innerHTML = el.innerHTML.replace(/{{(.*?)}}/g, (match, name) => {
                // 這裡的順序需要依照 yml 檔案排序，這樣才能對到正確的資訊。
                var els     = ['button', 'container', 'divider', 'header', 'icon', 'image', 'input', 'slate', 'label', 'list', 'loader', 'quote', 'segment', 'step'],
                    cos     = ['breadcrumb', 'form', 'grid', 'menu', 'message', 'table'],
                    mos     = ['accordion', 'calendar', 'checkbox', 'dimmer', 'dropdown', 'progress', 'slider', 'popup', 'modal', 'embed', 'sidebar', 'snackbar', 'tab', 'contextmenu', 'scrollspy'],
                    vis     = ['card', 'speeches', 'comment', 'feed', 'items', 'statistic'],
                    elIndex = els.indexOf(name),
                    coIndex = cos.indexOf(name),
                    moIndex = mos.indexOf(name),
                    viIndex = vis.indexOf(name)

                if (elIndex !== -1)
                    return `<a href="/elements/${name}" data-tooltip="${elements.items[elIndex].description}">${name}</a>`
                if (coIndex !== -1)
                    return `<a href="/collections/${name}" data-tooltip="${collections.items[coIndex].description}">${name}</a>`
                if (moIndex !== -1)
                    return `<a href="/modules/${name}" data-tooltip="${modules.items[moIndex].description}">${name}</a>`
                if (viIndex !== -1)
                    return `<a href="/views/${name}" data-tooltip="${views.items[viIndex].description}">${name}</a>`

                return `<a href="#">${name}</a>`
            })

            // 示範圖片標籤換成單純的假路徑，這樣看起來比較簡潔。 - !-16:9-!
            el.innerHTML = el.innerHTML.replace(/!-(.*?)-!/g, (match, first) => {
                switch(first) {
                    case '16:9'       : return 'image.png'
                    case '1:1'        : return 'image.png'
                    case '4:3'        : return 'image.png'
                    case 'user'       : return 'user.png'
                    case 'user2'      : return 'user.png'
                    case 'user3'      : return 'user.png'
                    case 'embed:karen': return 'youtube.png'
                    case 'embed:vimeo': return 'vimeo.png'
                }
            })
        })
    }, 1)
})

export default router