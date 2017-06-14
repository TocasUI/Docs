import elements    from 'docs/elements'
import collections from 'docs/collections'
import modules     from 'docs/modules'
import views       from 'docs/views'

export default ->
    # 類似 Async 的概念，沒有 setTimeout 的話 HightlightJS 無法替元素上色。
    setTimeout () ->
        document.querySelectorAll('[html-code], [js-code], [css-code]').forEach (el) ->
            isJS       = el.getAttribute('js-code')  isnt null
            isCSS      = el.getAttribute('css-code') isnt null
            text       = el.innerHTML
            unescaped  = new DOMParser().parseFromString(text, 'text/html').documentElement.textContent
            code       = document.createElement 'code'

            # 依照程式碼的種類決定如何清理、套用樣式。
            if isJS
                beautified     = js_beautify(unescaped)
                code.className = 'hljs javascript'
            else if isCSS
                beautified     = css_beautify(unescaped, {newline_between_rules: false, selector_separator_newline: false})
                code.className = 'hljs css'
            else
                beautified     = html_beautify(unescaped)
                code.className = 'hljs html'

            code.innerText = beautified

            el.innerHTML = ''
            el.appendChild code

            # 標記程式碼。 - [[segment]]
            el.innerHTML = el.innerHTML.replace /\[\[(.*?)\]\]/g, '<mark>$1</mark>'

            # 相關元件連結。 - {{segment}}
            el.innerHTML = el.innerHTML.replace /{{(.*?)}}/g, (match, name) ->
                # 這裡的順序需要依照 yml 檔案排序，這樣才能對到正確的資訊。
                els     = ['button', 'container', 'divider', 'header', 'icon', 'image', 'input', 'slate', 'label', 'list', 'loader', 'quote', 'segment', 'step']
                cos     = ['breadcrumb', 'form', 'grid', 'menu', 'message', 'table']
                mos     = ['accordion', 'calendar', 'checkbox', 'dimmer', 'dropdown', 'progress', 'slider', 'popup', 'modal', 'embed', 'sidebar', 'snackbar', 'tab', 'contextmenu', 'scrollspy']
                vis     = ['card', 'speeches', 'comment', 'feed', 'items', 'statistic']
                elIndex = els.indexOf name
                coIndex = cos.indexOf name
                moIndex = mos.indexOf name
                viIndex = vis.indexOf name

                if elIndex isnt -1
                    "<a href='/elements/#{name}' data-tooltip='#{elements.items[elIndex].description}'>#{name}</a>"
                else if coIndex isnt -1
                    "<a href='/collections/#{name}' data-tooltip='#{collections.items[coIndex].description}'>#{name}</a>"
                else if moIndex isnt -1
                    "<a href='/modules/#{name}' data-tooltip='#{modules.items[moIndex].description}'>#{name}</a>"
                else if viIndex isnt -1
                    "<a href='/views/#{name}' data-tooltip='#{views.items[viIndex].description}'>#{name}</a>"
                else
                    "<a href='#'>#{name}</a>"

            # 示範圖片標籤換成單純的假路徑，這樣看起來比較簡潔。 - !-16:9-!
            el.innerHTML = el.innerHTML.replace /!-(.*?)-!/g, (match, first) ->
                switch first
                    when '16:9'        then 'image.png'
                    when '1:1'         then 'image.png'
                    when '4:3'         then 'image.png'
                    when 'user'        then 'user.png'
                    when 'user2'       then 'user.png'
                    when 'user3'       then 'user.png'
                    when 'embed:karen' then 'youtube.png'
                    when 'embed:vimeo' then 'vimeo.png'

        # 呼叫 HightlightJS 來將剛才脫逸的 <code> 區塊全部上色。
        hljs.initHighlighting.called = false
        hljs.initHighlighting()
    , 1