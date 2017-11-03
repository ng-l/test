<template>
    <div id="search">
        <div class="search-form">
            <form method="get">
                <input type="text" class="search-word" name="search" placeholder="搜索歌曲、歌手、专辑">
                <i class="u-svg u-svg-srch"></i>
            </form>
        </div>
        <div class="search-hot">
            <h4>热门搜索</h4>
            <ul>
                <li><a href="/detail/1">111111</a></li>
                <li><a href="/detail/2">222222</a></li>
                <li><a href="/detail/3">333333</a></li>
                <li><a href="/detail/4">444444</a></li>
                <li><a href="/detail/5">555555</a></li>
                <li><a href="/detail/6">666666</a></li>
                <li><a href="/detail/7">777777</a></li>
                <li><a href="/detail/8">888888</a></li>
                <li><a href="/detail/9">999999</a></li>
                <li><a href="/detail/10">1000000</a></li>
            </ul>
        </div>
        <div class="search-record">
            <ul>
                <li><i class="u-svg u-svg-histy"></i><a href="#">1<i class="u-svg u-svg-close"></i></a></li>
                <li><i class="u-svg u-svg-histy"></i><a href="#">2<i class="u-svg u-svg-close"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<style>

    #search{
        text-align: left;
    }
    
    /*form*/
    #search input:active, input:focus{
        outline: none;
    }
    .search-form{
        position: relative;
        width: 100%;
        height: 61px;
        border: 1px solid #f4f5f7;
        border-width: 1px 0;
        background: #fafbfd;
    }
    .search-form form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding: 0 10px;
    }
    .search-word{
        width: 100%;
        height: 30px;
        background: #e8e9e9;
        font-size: 15px;
        border: 0;
        border-radius: 15px;
        padding-left: 30px;
    }
    .search-word::placeholder{
        color: #c2c2c2;
        font-size: 15px;
    }
    .search-form .u-svg-srch {
        position: absolute;
        left: 0;
        top: 9px;
        margin: 0 20px;
        vertical-align: middle;
    }
    .u-svg-srch {
        width: 13px;
        height: 13px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
    }
    .u-svg {
        display: inline-block;
        vertical-align: middle;
        background-position: 0 0;
        background-size: contain;
        background-repeat: no-repeat;
    }

    /*hot search*/
    .search-hot{
        padding: 10px;
    }
    .search-hot h4{
        font-size: 12px;
        font-weight:normal;
        text-align: left;
        padding: 5px 0;
    }
    .search-hot ul{
        text-align: left;
    }
    .search-hot li{
        display: inline-block;
        text-align: left;
        padding: 8px 12px;
        font-size: 15px;
        border: 1px solid #ebecf0;
        border-radius: 20px;
        margin: 5px;
        margin-left: 0;
    }
    .search-hot a{
        color: #2d2d2d;
    }

    /*search record*/
    .search-record a{
        display: block;
        height: 100%;
        line-height: 45px;
        color: #2d2d2d;
        flex: 1;
        border-bottom: 1px solid #f4f5f7;
        position: relative;
    }
    .search-record li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
    }
    .search-record .u-svg {
        display: inline-block;
        vertical-align: middle;
        background-position: 0 0;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 10px;
    }
    .u-svg-histy {
        width: 15px;
        height: 15px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJtMTUgMzBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTUgMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOGMtNy4xOCAwLTEzIDUuODItMTMgMTNzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzLTUuODItMTMtMTMtMTNtNyAxNmgtOGMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTEwYzAtLjU1My40NDgtMSAxLTFzMSAuNDQ3IDEgMXY5aDdjLjU1MyAwIDEgLjQ0NyAxIDFzLS40NDcgMS0xIDEiLz48L3N2Zz4=);
    }
    .u-svg-close {
        width: 12px;
        height: 12px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJtMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdjLjM4MS4zODEuMzgxLjk5OCAwIDEuMzc5cy0uOTk4LjM4MS0xLjM3OCAwbC0xMC4zMzgtMTAuMzM4LTEwLjMzOCAxMC4zMzhjLS4zOC4zODEtLjk5Ny4zODEtMS4zNzggMHMtLjM4MS0uOTk4IDAtMS4zNzlsMTAuMzM4LTEwLjMzNy0xMC4zMzgtMTAuMzM4Yy0uMzgxLS4zOC0uMzgxLS45OTcgMC0xLjM3OHMuOTk4LS4zODEgMS4zNzggMGwxMC4zMzggMTAuMzM4IDEwLjMzOC0xMC4zMzhjLjM4LS4zODEuOTk3LS4zODEgMS4zNzggMHMuMzgxLjk5OCAwIDEuMzc4bC0xMC4zMzggMTAuMzM4Ii8+PC9zdmc+);
    }
    
</style>