import Vue    from 'vue'
import Router from 'vue-router'
import store  from './store'

Vue.use(Router)

// Docs
import elements    from 'docs/elements'
import collections from 'docs/collections'
import modules     from 'docs/modules'
import views       from 'docs/views'
import starts      from 'docs/starts'
import examples    from 'docs/examples'

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
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/button',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/header',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/input',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/image',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/label',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/list',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/loader',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/quote',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/segment',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/slate',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/step',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/container',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/elements/icon',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections',
        component: (resolve) => require(['views/list'], resolve),
        meta: collections
    }, {
        path: '/collections/breadcrumb',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/form',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/grid',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/menu',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/message',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/message/javascript',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/table',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/collections/table/javascript',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules',
        component: (resolve) => require(['views/list'], resolve),
        meta: modules
    }, {
        path: '/modules/accordion',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/calendar',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/checkbox',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/checkbox/javascript',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/dimmer',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/dropdown',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/dropdown/javascript',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/modal',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/modal/javascript',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/popup',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/popup/javascript',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/progress',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/slider',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/sidebar',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/embed',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/snackbar',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/tab',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/modules/contextmenu',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/views',
        component: (resolve) => require(['views/list'], resolve),
        meta: views
    }, {
        path: '/views/speeches',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/views/card',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/views/items',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/views/statistic',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/views/comment',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/views/feed',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/rwd',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/try',
        component: (resolve) => require(['views/try'], resolve)
    }, {
        path: '/about',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/starts',
        component: (resolve) => require(['views/list'], resolve),
        meta: starts
    }, {
        path: '/getting-started',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/components',
        component: (resolve) => require(['views/single'], resolve)
    }, {
        path: '/examples',
        component: (resolve) => require(['views/list'], resolve),
        meta: examples
    }, {
        path: '*',
        redirect: '/'
    }]
})

//
router.afterEach((to, from, next) => {
    window.RENDER_STARTED_TIME = new Date().getTime()
})

export default router