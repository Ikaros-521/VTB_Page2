window.onload = function() {
    console.log("welcome");
    sessionStorage.setItem("language", "ch");
    document.title = config_json["index"]["title"];
    document.getElementById("b_homepage").href = "https://space.bilibili.com/" + config_json["index"]["bili_uid"];
}

// 语言切换
function language_change(language_val) {
    var a_tag = document.getElementsByTagName("a");
    var len = a_tag.length - 3;
    var language_index = 0;

    // 中 日 英，顶部导航栏的文字描述
    var arr = [
        ["首页", "B站主页", "QQ群", "表情包", "特殊情报", "特典", "群友语录", "dd视频", "直播封面", "辅助程序", "关于", "Language"],
        ["トップページ", "bilibili", "QQぐん", "表情パック", "じょうほう", "特典", "語録", "ddビデオ", "配信カバー枚", "ほじょプログラム", "について", "Language"],
        ["HomePage", "bilibili", "QQ Group", "Emoticon", "Information", "Privilege", "GroupQuotations", "CaptainVideo", "LiveCover", "AuxiliaryProgram", "About", "Language"],
    ];

    if(language_val == "ch") {
        language_index = 0;
        sessionStorage.setItem("language", "ch");
    } else if(language_val == "jp") {
        language_index = 1;
        sessionStorage.setItem("language", "jp");
    } else if(language_val == "en") {
        language_index = 2;
        sessionStorage.setItem("language", "en");
    } else {
        language_index = 2;
        sessionStorage.setItem("language", "en");
    }

    for(var i = 0; i < len; i++) {
        a_tag[i].innerText = arr[language_index][i];
    }
}