window.onload = function () {
    // var language = sessionStorage.getItem("language");
    
    // 生成目录
    var navigation = document.getElementById("navigation");
    for(var i = 0; i < config_json["information"]["fieldset"].length; i++) {
        var dd = document.createElement("dd");
        var a = document.createElement("a");
        a.href = "#fieldset" + i;
        a.innerText = config_json["information"]["fieldset"][i]["title"];

        dd.appendChild(a);
        navigation.appendChild(dd);
    }

    // 生成fieldset
    for(var i = 0; i < config_json["information"]["fieldset"].length; i++) {
        var fieldset = document.createElement("fieldset");
        var legend = document.createElement("legend");
        var box = document.createElement("div");

        fieldset.className = "layui-elem-field";
        fieldset.id = "fieldset" + i;

        legend.innerText = config_json["information"]["fieldset"][i]["title"];

        box.className = "layui-field-box";

        for(var j = 0; j < config_json["information"]["fieldset"][i]["card"].length; j++) {
            var card = document.createElement("div");
            var card_header = document.createElement("div");
            var card_body = document.createElement("div");

            card.className = "layui-card";

            card_header.className = "layui-card-header"
            card_header.innerHTML = config_json["information"]["fieldset"][i]["card"][j]["header"];

            card_body.className = "layui-card-body";
            card_body.innerHTML = config_json["information"]["fieldset"][i]["card"][j]["body"];

            card.appendChild(card_header);
            card.appendChild(card_body);
            box.appendChild(card);
        }
        
        fieldset.appendChild(legend);
        fieldset.appendChild(box);
        document.body.appendChild(fieldset);
    }
}