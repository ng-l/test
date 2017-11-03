<template>
    <div id="result">
        <div class="search-form">
            <form method="get">
                <input type="text" class="search-word" name="search" placeholder="搜索歌曲、歌手、专辑">
                <i class="u-svg u-svg-srch"></i>
            </form>
        </div>
        <div class="search-result">
            <ul class="result-list">
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
                <li>
                    <h3>All Falls Down</h3>
                    <p><i class="u-hmsprt sghot"></i>Alan Walker / Noah Cyrus / Digital Farm Animals</p>
                    <div class="play"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>

    #result{
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

    .result-list{
        padding-left: 10px;
    }
    .result-list li{
        font-size: 12px;
        color: #857d7d;
        padding: 10px 0;
        border-bottom: 1px solid #f6f5f7;
        position: relative;
    }
    .result-list h3{
        color: #2d2d2d;
        font-size: 17px;
        padding-bottom: 5px;
    }
    .result-list .play{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;
        background-size: 166px 97px;
        background-position: -24px 0;
        width: 22px;
        height: 22px;
    }
    .result-list .sghot {
        display: inline-block;
        width: 12px;
        height: 8px;
        margin-right: 4px;
    }
    .u-hmsprt {
        background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
        background-size: 166px 97px;
    }
</style>