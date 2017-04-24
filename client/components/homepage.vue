<style lang="sass" module>
.menu
    font-size: 16px !important

.donators
    margin-top: 2em

    strong
        display: block
        margin-bottom: 2em

.use
    width: 100%
    max-width: 340px

    textarea
        white-space: nowrap
        line-height: 1.45em !important
</style>

<template>
    <div>
        <!-- 導航選單 -->
        <div class="ts pure basic menu" :class="$style.menu">
            <div class="ts narrow container">
                <router-link class="item" to="/getting-started">Tocas UI</router-link>
                <router-link class="item" to="/getting-started">從這開始</router-link>
                <router-link class="item" to="/getting-started">一般元素</router-link>
                <router-link class="item" to="/getting-started">聚合型</router-link>
                <router-link class="item" to="/getting-started">模塊</router-link>
                <router-link class="item" to="/getting-started">視圖型</router-link>
                <router-link class="item" to="/getting-started">響應式</router-link>

                <!-- 右側選單 -->
                <div class="right menu">
                    <router-link class="item" to="/getting-started">GitHub</router-link>
                </div>
                <!-- / 右側選單 -->
            </div>
        </div>
        <!-- / 導航選單 -->

        <!-- 主要板岩 -->
        <div class="ts slate">
            <div class="ts center aligned header">
                Tocas UI
                <div class="sub header">這裡迎來新世界</div>
            </div>

            <!-- 快速使用 -->
            <strong>現在開始試用！</strong>
            <div class="ts top attached fluid input" :class="$style.use">
                <textarea rows="2"><link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/latest/dist/tocas.css">
<script src="//cdn.rawgit.com/TeaMeow/TocasUI/latest/dist/tocas.js"></script></textarea>
            </div>
            <!-- / 快速使用 -->
        </div>
        <!-- / 主要板岩 -->

        <!-- 友情贊助 -->
        <div :class="$style.donators">
            <div class="ts center aligned narrow container">
                <strong>本網站由以下贊助者提供</strong>
                <div class="ts three column stackable grid">
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/Sciuridae_Li.jpg">
                            Sciuridae Li
                    </div>
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/Mac_Taylor.jpg">
                            Mac Taylor
                    </div>
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/李政皇.jpg">
                            李政皇
                    </div>
                </div>
                <div class="ts four column stackable grid">
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/Yan-K.jpg">
                            Yan-K
                    </div>
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/Fan_Kangtai.jpg">
                            Fan Kangtai
                    </div>
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/SpaceTimeHalf.jpg">
                            SpaceTimeHalf
                    </div>
                    <div class="center aligned column">
                        <img class="ts mini rounded spaced image" src="~images/donators/Sean_Wei.jpg">
                            Sean Wei
                    </div>
                </div>
            </div>
            <a href="https://patreon.com/yamiodymel" target="_blank">成為贊助者</a>
        </div>
        <!-- / 友情贊助 -->

        <!-- 簡介大綱 -->
        <div class="ts container">
            <div class="ts relaxed grid">
                <!-- 更有意義 -->
                <div class="eight wide column">
                    <div class="ts header">更有意義</div>
                    <p>Tocas UI 以更有意義的方式來命名類別名稱，</p>
                    <p>就像是你直接稱呼這個元素一樣地親切。</p>
                    <p>程式已經夠枯燥乏味了，別再讓人生也繼續枯燥下去。</p>
                </div>
                <div class="eight wide column">
                    <div class="ts header">HTML</div>
                    <pre class="ts padded segment"><code class="hljs html"><div class="ts fluid buttons">
    <button class="ts button">卡莉絲</button>
    <button class="ts button">亞凡芽</button>
    <button class="ts warning button">橙希</button>
</div></code></pre>
                    <div class="ts fluid buttons">
                        <button class="ts button">卡莉絲</button>
                        <button class="ts button">亞凡芽</button>
                        <button class="ts warning button">橙希</button>
                    </div>
                </div>
                <!-- / 更有意義 -->

                <!-- 分隔線 -->
                <div class="sixteen wide column">
                    <div class="ts section divider"></div>
                </div>
                <!-- / 分隔線 -->

                <!-- 更具結構性 -->
                <div class="sixteen wide column">
                    <div class="ts header">更具結構性</div>
                    <p>很多框架都是為了達到特殊外觀，</p>
                    <p>而新增了很多不必要的 HTML 結構，但在這裡將有所改善。</p>
                    <p>下列是一個簡單的導航欄選單，並與傳統 Bootstrap 4 比較。</p>
                </div>
                <div class="eight wide column">
                    <div class="ts header">Tocas UI</div>
                    <pre class="ts padded segment"><code class="hljs html"><nav class="ts menu">
    <a class="header item">商標</a>
    <a class="active item">首頁</a>
    <a class="item">特色</a>
    <a class="item">價格</a>
    <a class="item">關於</a>
</nav></code></pre>
                </div>
                <div class="eight wide column">
                    <div class="ts header">Bootstrap 4</div>
                    <pre class="ts padded segment"><code class="hljs html"><nav class="navbar navbar-light bg-faded">
    <a class="navbar-brand">商標</a>
    <ul class="nav navbar-nav">
        <li class="nav-item active">
            <a class="nav-link">首頁</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">特色</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">價格</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">關於</a>
        </li>
    </ul>
</nav></code></pre>
                </div>
                <!-- / 更具結構性 -->
            </div>
        </div>
        <!-- / 簡介大綱 -->
    </div>
</template>

<script>
export default {
    name: 'Homepage'
}
</script>