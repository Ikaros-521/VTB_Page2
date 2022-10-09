window.onload = function () {
    var language = sessionStorage.getItem("language");
    var introduction = document.getElementById("introduction");
    var captain_img = document.getElementById("captain_img");

    captain_img.src = config_json["privilege"]["captain_img"];

    if(language == "ch") {
        introduction.innerHTML = config_json["privilege"]["introductionCH"];
    } else if(language == "jp") {
        introduction.innerHTML = config_json["privilege"]["introductionJP"];
    } else {
        introduction.innerHTML = config_json["privilege"]["introductionEN"];
    }
}