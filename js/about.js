window.onload = function () {
    var language = sessionStorage.getItem("language");
    var introduction = document.getElementById("introduction");

    if(language == "ch") {
        introduction.innerHTML = config_json["about"]["introductionCH"];
    } else if(language == "jp") {
        introduction.innerHTML = config_json["about"]["introductionJP"];
    } else {
        introduction.innerHTML = config_json["about"]["introductionEN"];
    }
}