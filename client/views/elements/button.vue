<style lang="sass">
</style>

<template lang="pug">
    div
        //- 導航選單
        docs-navbar

        //- 文件板岩
        docs-slate
            template(slot="header") 按鈕
            template(slot="description") 一個重要的按鈕，我們將它視為核彈按鈕般，精心設計和呵護。

        docs-intro
            p 按鈕具有多種樣式和語意，請注意的是，語意和顏色不同，請不要為了要新增紅色按鈕，就建立一個「負面」按鈕。
            p 請務必遵循 CSS 樣式中的含意。

        //-
            種類

        docs-header
            template(slot="title") 種類
            template(slot="description") 一個按鈕具有多個不同的種類。

        //- 按鈕
        docs-example(mark="button")
            template(slot="title") 按鈕
            template(slot="description") 一個正常的按鈕。
            template(slot="code").
                <button class="ts button">按鈕</button>

        //- 基本語氣
        docs-example(mark="primary, warning, info, inverted")
            template(slot="title") 基本語氣
            template(slot="description") 用來讓一個按鈕擁有不同的意思，但卻不帶有肯定或否定語氣。
            template(slot="code").
                <button class="ts primary button">主要</button>
                <button class="ts warning button">警告</button>
                <button class="ts info button">資訊</button>
                <button class="ts inverted button">相反色</button>

        //- 肯定和否定
        docs-example(mark="positive, negative")
            template(slot="title") 肯定和否定
            template(slot="description") 讓按鈕帶有肯定或否定的意思。
            template(slot="code").
                <button class="ts positive button">肯定</button>
                <button class="ts negative button">否定</button>

        //- 偏見
        docs-example(mark="opinion, secondary opinion", remove="<br>")
            template(slot="title") 偏見
            template(slot="description") 讓按鈕以背景顏色作為基礎，並以此產生深、暗差異的偏見。
            template(slot="code").
                <button class="ts opinion button">偏見</button>
                <button class="ts secondary opinion button">次要偏見</button>
                <br>
                <div class="ts inverted info segment">
                    <button class="ts opinion button">偏見</button>
                    <button class="ts secondary opinion button">次要偏見</button>
                </div>
                <div class="ts inverted warning segment">
                    <button class="ts opinion button">偏見</button>
                    <button class="ts secondary opinion button">次要偏見</button>
                </div>

        //- 圖案
        docs-example(mark="secondary opinion, opinion", remove="<br>")
            template(slot="title") 圖案
            template(slot="description") 只顯示圖案的按鈕。
            template(slot="code").
                <button class="ts icon button">
                    <i class="icon heart"></i>
                </button>

        //- 基本
        docs-example(mark="basic")
            template(slot="title") 基本
            template(slot="description") 讓按鈕只帶有基本的架構。
            template(slot="code").
                <button class="ts positive basic button">確定</button>
                <button class="ts negative basic button">拒絕</button>
                <button class="ts basic button">知道</button>
                <button class="ts secondary basic button">取消</button>

        //- 標籤
        docs-example(mark="left labeled, labeled")
            template(slot="title") 標籤
            template(slot="description") 帶有標籤的按鈕。
            template(slot="code").
                <div class="ts left labeled button">
                    <div class="ts basic label">689</div>
                    <button class="ts button">加入募集</button>
                </div>
                <div class="ts labeled button">
                    <button class="ts button">加入募集</button>
                    <div class="ts basic label">689</div>
                </div>

        //- 標籤圖示
        docs-example(mark="right labeled icon, labeled icon")
            template(slot="title") 標籤圖示
            template(slot="description") 帶有標籤和圖示的按鈕。
            template(slot="code").
                <button class="ts labeled icon button">
                    <i class="star icon"></i>
                    星號
                </button>
                <button class="ts right labeled icon button">
                    加入最愛
                    <i class="heart icon"></i>
                </button>

        //-
            群組

        docs-header
            template(slot="title") 群組
            template(slot="description") 將多個按鈕組成一列，或是擁有同樣性質。

        //- 按鈕群組
        docs-example(mark="buttons", remove="<br><br>")
            template(slot="title") 按鈕群組
            template(slot="description") 按鈕可以組合成一個群組。
            template(slot="code").
                <div class="ts buttons">
                    <button class="ts warning button">橙希</button>
                    <button class="ts primary button">雨藍</button>
                    <button class="ts inverted button">卡莉絲</button>
                </div>
                <br><br>
                <div class="ts icon buttons">
                <button class="ts button"><i class="align left icon"></i></button>
                <button class="ts button"><i class="align center icon"></i></button>
                <button class="ts button active"><i class="align right icon"></i></button>
                <button class="ts button"><i class="align justify icon"></i></button>
                </div>

        //- 按鈕群組
        docs-example(mark="buttons", remove="<br><br>")
            template(slot="title") 按鈕群組
            template(slot="description") 按鈕可以組合成一個群組。
            template(slot="code").
                <div class="ts buttons">
                    <button class="ts warning button">橙希</button>
                    <button class="ts primary button">雨藍</button>
                    <button class="ts inverted button">卡莉絲</button>
                </div>
                <br><br>
                <div class="ts icon buttons">
                <button class="ts button"><i class="align left icon"></i></button>
                <button class="ts button"><i class="align center icon"></i></button>
                <button class="ts button active"><i class="align right icon"></i></button>
                <button class="ts button"><i class="align justify icon"></i></button>
                </div>


        //- 頁腳
        docs-footer
</template>

<script>
import DocsSlate from 'components/slate'
import DocsNavbar from 'components/navbar'
import DocsCards from 'components/cards'
import DocsFooter from 'components/footer'

export default {
    name: 'Elements',
    components: {
        DocsSlate,
        DocsNavbar,
        DocsCards,
        DocsFooter
    },
    data() {
        return {

        }
    }
}
</script>