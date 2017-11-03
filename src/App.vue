<template>
    <div id="app">
        <header>
            <h1><img src="./assets/logo.png"> <div class="download"><a href="http://localhost:8080/#/hhh">下载APP</a></div></h1>
            <div id="tab-list">
                <ul>
                    <li><a href="http://localhost:8080/#/">推荐音乐</a></li>
                    <li><a href="http://localhost:8080/#/hot">热歌榜</a></li>
                    <li><a href="http://localhost:8080/#/search">搜索</a></li>
                </ul>
            </div>
        </header>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>


<style>
    /*public style*/
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    ul,li{
        list-style-type:none;
    }
    a{
        text-decoration: none;
    }

    /*private style*/
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
        padding-top: 115px;
    }
    header{
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    h1{
        padding: 17px 11px;
        background: #ce342d;
        color: #fff;
        display: flex;
        justify-content: space-between;
    }
    h1 img{
        height: 26px;
        margin-top: 3px;
    }
    .download{
        width: 80px;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255, .5);
    }
    .download a{
        color: #fff;
        text-decoration: none;
    }
    #tab-list ul{
        display: flex;
        justify-content: space-between;
    }
    #tab-list li{
        flex:1;
    }
    #tab-list li a{
        display: inline-block;
        padding: 13px 5px;
        font-size: 17px;
        font-weight: bold;
        color: #2d2d2d;
        text-shadow: 1px 0 rgba(0,0,0,.2);
    }
    #tab-list .act a{
        color: #cd322c;
        border-bottom: 2px solid #cd322c;
    }
</style>
