import Vue  from 'vue'
import Vuex from 'vuex'
import highlight   from 'client/highlight'

Vue.use(Vuex)

state =
    renderTime: 0
    docs      : {}

mutations =
    # SET_DOCS 會替換文件內容，並且在替換後執行部分函式。
    SET_DOCS: (state, {docs, fullPath}) ->
        # 替換目前的文件內容。
        state.docs = docs

        # 在文件讀取完之後執行上色。
        highlight()

        # 如果有錨點的話跳到該錨點。
        if typeof fullPath isnt 'undefined' and fullPath.indexOf('#') isnt -1
            setTimeout () ->
                id = fullPath.substring(fullPath.indexOf('#') + 1)
                document.querySelector('.pusher').scrollTop = document.querySelector("##{id}").getBoundingClientRect().top
            , 1

actions =
    # LOAD_DOCS 會依照傳入的路徑讀取相對應的文件內容。
    LOAD_DOCS: ({commit}, {path, fullPath, fromPath}) ->
        # 如果目標網址和現在網址一樣，則離開避免重複渲染和讀取。
        if fromPath is path
            return
            
        #  r 會將目前的文件內容替換成最新讀取的內容。
        r = (docs) -> commit 'SET_DOCS', {docs, fullPath}

        # 移除現有的文件內容，這樣才會出現讀取進度指示器。
        commit 'SET_DOCS', {docs: {}}

        # 依照路徑決定要讀取的文件內容。
        switch path
            when '/elements/'
                require ['docs/elements'], r
            when '/elements/button/'
                require ['docs/elements/button'], r
            when '/elements/header/'
                require ['docs/elements/header'], r
            when '/elements/input/'
                require ['docs/elements/input'], r
            when '/elements/image/'
                require ['docs/elements/image'], r
            when '/elements/label/'
                require ['docs/elements/label'], r
            when '/elements/list/'
                require ['docs/elements/list'], r
            when '/elements/loader/'
                require ['docs/elements/loader'], r
            when '/elements/quote/'
                require ['docs/elements/quote'], r
            when '/elements/segment/'
                require ['docs/elements/segment'], r
            when '/elements/slate/'
                require ['docs/elements/slate'], r
            when '/elements/step/'
                require ['docs/elements/step'], r
            when '/elements/container/'
                require ['docs/elements/container'], r
            when '/elements/icon/'
                require ['docs/elements/icon'], r

            when '/collections/breadcrumb/'
                require ['docs/collections/breadcrumb'], r
            when '/collections/form/'
                require ['docs/collections/form'], r
            when '/collections/grid/'
                require ['docs/collections/grid'], r
            when '/collections/menu/'
                require ['docs/collections/menu'], r
            when '/collections/message/'
                require ['docs/collections/message'], r
            when '/collections/message/javascript/'
                require ['docs/collections/message-js'], r
            when '/collections/table/'
                require ['docs/collections/table'], r
            when '/collections/table/javascript/'
                require ['docs/collections/table-js'], r

            when '/modules/accordion/'
                require ['docs/modules/accordion'], r
            when '/modules/calendar/'
                require ['docs/modules/calendar'], r
            when '/modules/checkbox/'
                require ['docs/modules/checkbox'], r
            when '/modules/checkbox/javascript/'
                require ['docs/modules/checkbox-js'], r
            when '/modules/dimmer/'
                require ['docs/modules/dimmer'], r
            when '/modules/dropdown/'
                require ['docs/modules/dropdown'], r
            when '/modules/dropdown/javascript/'
                require ['docs/modules/dropdown-js'], r
            when '/modules/modal/'
                require ['docs/modules/modal'], r
            when '/modules/modal/javascript/'
                require ['docs/modules/modal-js'], r
            when '/modules/popup/'
                require ['docs/modules/popup'], r
            when '/modules/popup/javascript/'
                require ['docs/modules/popup-js'], r
            when '/modules/progress/'
                require ['docs/modules/progress'], r
            when '/modules/slider/'
                require ['docs/modules/slider'], r
            when '/modules/sidebar/'
                require ['docs/modules/sidebar'], r
            when '/modules/embed/'
                require ['docs/modules/embed'], r
            when '/modules/snackbar/'
                require ['docs/modules/snackbar'], r
            when '/modules/tab/'
                require ['docs/modules/tab'], r
            when '/modules/contextmenu/'
                require ['docs/modules/contextmenu'], r

            when '/views/speeches/'
                require ['docs/views/speeches'], r
            when '/views/card/'
                require ['docs/views/card'], r
            when '/views/items/'
                require ['docs/views/items'], r
            when '/views/statistic/'
                require ['docs/views/statistic'], r
            when '/views/comment/'
                require ['docs/views/comment'], r
            when '/views/feed/'
                require ['docs/views/feed'], r

            when '/rwd/'
                require ['docs/pages/responsive'], r
            when '/about/'
                require ['docs/pages/about'], r
            when '/typography/'
                require ['docs/pages/typography'], r
            when '/getting-started/'
                require ['docs/pages/getting-started'], r
            when '/components/'
                require ['docs/pages/components'], r

            when '/collections/'
                require ['docs/collections'], r
            when '/modules/'
                require ['docs/modules'], r
            when '/views/'
                require ['docs/views'], r
            when '/starts/'
                require ['docs/starts'], r
            when '/examples/'
                require ['docs/examples'], r
            when '/elements/'
                require ['docs/elements'], r

store = new Vuex.Store {
    state
    mutations
    actions
}

export default store