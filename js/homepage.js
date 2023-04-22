var main_div = document.getElementById("carousel-item_div");

for(var i = 0; i < config_json["homepage"]["carousel-item_div"].length; i++) {
    // 创建第一个div元素
    var div1 = document.createElement("div");

    // 创建第一个info_div元素
    var info_div1 = document.createElement("div");
    info_div1.setAttribute("id", "info_div");

    // 创建第一个name元素
    var p1 = document.createElement("p");
    p1.setAttribute("id", "name");
    p1.innerHTML = config_json["homepage"]["carousel-item_div"][i]["name"];

    // 创建第一个introduction元素
    var p2 = document.createElement("p");
    p2.setAttribute("id", "introduction");
    p2.innerHTML = config_json["homepage"]["carousel-item_div"][i]["introduction"];

    // 将p1和p2添加到info_div1中
    info_div1.appendChild(p1);
    info_div1.appendChild(p2);

    // 创建第一个bg_div元素
    var bg_div1 = document.createElement("div");
    bg_div1.setAttribute("id", "bg_div");

    // 创建第一个bg_img元素
    var img1 = document.createElement("img");
    img1.setAttribute("id", "bg_img");
    img1.setAttribute("src", config_json["homepage"]["carousel-item_div"][i]["bg_img"]);

    // 将img1添加到bg_div1中
    bg_div1.appendChild(img1);

    // 将info_div1和bg_div1添加到div1中
    div1.appendChild(info_div1);
    div1.appendChild(bg_div1);

    main_div.appendChild(div1);
}
