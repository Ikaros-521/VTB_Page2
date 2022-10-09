window.onload = function () {
    var language = sessionStorage.getItem("language");
    var introduction = document.getElementById("introduction");
    var captain_img = document.getElementById("captain_img");
    var fans_img = document.getElementById("fans_img");

    captain_img.src = config_json["qqGroup"]["captain_img"];
    fans_img.src = config_json["qqGroup"]["fans_img"];

    if(language == "ch") {
        introduction.innerHTML = config_json["qqGroup"]["introductionCH"];
    } else if(language == "jp") {
        introduction.innerHTML = config_json["qqGroup"]["introductionJP"];
    } else {
        introduction.innerHTML = config_json["qqGroup"]["introductionEN"];
    }
}