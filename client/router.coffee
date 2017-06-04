import Vue    from 'vue'
import Router from 'vue-router'
import store  from './store'

# 主要路由。
router = new Router
    mode  : 'history'
    routes: [
        # 首頁。
        path     : '/'
        component: (r) -> require ['views/index'], r
    ,
        # 單一頁面。
        path : '/elements/divider'
        alias: [
            # 一般元素。
            '/elements/button'
            '/elements/header'
            '/elements/input'
            '/elements/image'
            '/elements/label'
            '/elements/list'
            '/elements/loader'
            '/elements/quote'
            '/elements/segment'
            '/elements/slate'
            '/elements/step'
            '/elements/container'
            '/elements/icon'

            # 聚合型。
            '/collections/breadcrumb'
            '/collections/form'
            '/collections/grid'
            '/collections/menu'
            '/collections/message'
            '/collections/message/javascript'
            '/collections/table'
            '/collections/table/javascript'

            # 模塊。
            '/modules/accordion'
            '/modules/calendar'
            '/modules/checkbox'
            '/modules/checkbox/javascript'
            '/modules/dimmer'
            '/modules/dropdown'
            '/modules/dropdown/javascript'
            '/modules/modal'
            '/modules/modal/javascript'
            '/modules/popup'
            '/modules/popup/javascript'
            '/modules/progress'
            '/modules/slider'
            '/modules/sidebar'
            '/modules/sidebar/javascript'
            '/modules/embed'
            '/modules/embed/javascript'
            '/modules/snackbar'
            '/modules/snackbar/javascript'
            '/modules/tab'
            '/modules/tab/javascript'
            '/modules/contextmenu'

            # 視圖型。
            '/views/speeches'
            '/views/card'
            '/views/items'
            '/views/statistic'
            '/views/comment'
            '/views/feed'

            # 其他頁面。
            '/rwd'
            '/about'
            '/typography'
            '/getting-started'
            '/components'
        ]
        component: (r) -> require ['views/single'], r
    ,
        # 清單頁面。
        path : '/elements'
        alias: [
            '/collections'
            '/modules'
            '/views'
            '/starts'
            '/examples'
        ]
        component: (r) -> require ['views/list'], r
    ,
        # 遊樂場。
        path: '/try'
        component: (r) -> require ['views/try'], r
    ,
        # 將其他錯誤路徑轉跳至首頁。
        path    : '*'
        redirect: '/'
    ]

# 告訴 Vue.js 使用 Vue Router。
Vue.use Router

# 會在每次路由變更時所執行的函式。
router.afterEach (to, from, next) ->
    # 取得目前的路徑，並且在最後加上 / 後輟。
    fromPath = if from.path.substr(-1) isnt '/' then "#{from.path}/" else from.path
    path     = if to.path.substr(-1)   isnt '/' then "#{to.path}/"   else to.path
    fullPath = to.fullPath

    # 呼叫動態讀取文件函式。
    store.dispatch 'LOAD_DOCS', {path, fullPath, fromPath}

    # 如果沒有錨點的話則在每次頁面變更時跳到最上面。
    if to.fullPath.indexOf('#') is -1
        document.querySelector('.pusher').scrollTop = 0

# 輸出路由。
export default router