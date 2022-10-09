// 通过修改config_json变量，修改页面加载的数据
var config_json = {
    // 网站图标替换文件 img/icon.jpg
    "index": {
        // 标题可以修改成 xx非官方页
        "title": "网站标题 VTB主页模板",
        // B站主页的跳转设置，修改为vtb本人的uid即可
        "bili_uid": "3709626"
    },
    // 首页
    "homepage": {
        "carousel-item_div": [
            // json数组形式加载 轮播图
            {
                "name": "首页 VTB昵称",
                "introduction": "首页 VTB简介，当然想写其他的也可以<br>前面这个是换行，下面那个是图片的路径",
                "bg_img": "img/人物大图.png"
            },
            {
                "name": "首页 大字部分，可以做为标题",
                "introduction": "首页 随便写描述<br>如果要追加轮播图，则复制整个{name...}内容，用,分隔",
                "bg_img": "img/设定图.png"
            }
        ]  
    },
    // 关于页面
    "about": {
        // 可以嵌入html代码
        "introductionCH": "关于 页面的描述部分，自行补充 <br>前面这个是换行",
        "introductionJP": "日文版",
        "introductionEN": "英文版"
    },
    // dd视频 dd切片页
    "ddVideo": {
        "video_data": [
            // json数组形式加载 b站视频
            {
                "up" : "昵称",
                "title" : "视频标题",
                "src" : "来到视频页，鼠标悬浮“转发”，点击“嵌入代码”，复制里面的src，可参考下面的形式"
            },
            {
                "up" : "Love丶伊卡洛斯",
                "title" : "【天降之物】2021 天使们の生日会",
                "src" : "//player.bilibili.com/player.html?aid=677502359&bvid=BV1Rm4y1X785&cid=465692454&page=1"
            }
        ]
    },
    // 表情包
    "emoticon": {
        "introduction": "表情包 页面，imgData填入图片文件名，图片必须存放在项目img/emoticon路径下，不然无法识别，注意了哈",
        "imgData": [
            // 图片需要挨个追加
            "1.png", 
            "2.png"
        ]
    },
    // 群友语录页面
    "groupQuotations": {
        "introduction": "群友语录 页面，quotations内写入语录，每个都是单独分块，随机颜色",
        "quotations": [
            "初见，可爱，单推，结婚 ———— 昵称",
            "xxx ———— 昵称",
            "xxx ———— 昵称",
        ]
    },
    // 特殊情报 页面
    "information": {
        "introduction": "情报 页面，由于内容自由度过高，请自行修改information.html文件",
        // fieldset标签分块显示内容，以数组显示添加数据
        "fieldset": [
            {
                // 外框的大标题 做为目录 导航用
                "title": "配信情报",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        // 卡片头部小标题
                        "header": "配信时间和地点",
                        // 卡片身体内容
                        "body": "中国时间几点开始，几点下播。"
                    },
                    {
                        "header": "生日和周年庆",
                        // <br>是换行标签
                        "body": "生日：0月0日（阳历）<br>周年庆：0月0日（阳历）<br><h1>h1标题字标签</h1>"
                    },
                    {
                        "header": "舰长达成",
                        "body": "x月x日（10舰长）<br>x月x日（50舰长）<br>x月x日（100舰长）"
                    },
                ]
            },
            {
                // 外框的大标题 做为目录 导航用
                "title": "吃喝相关",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        // 卡片头部小标题
                        "header": "喜欢的食物",
                        // 卡片身体内容
                        "body": "喜欢吃dd"
                    },
                    {
                        // 卡片头部小标题
                        "header": "喜欢的饮品",
                        // 卡片身体内容
                        "body": "白开水"
                    }
                ]
            },
            {
                // 外框的大标题 做为目录 导航用
                "title": "注意事项",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        "header": "雷区",
                        "body": "不应该做的某些事<br>多喝热水"
                    }
                ]
            },
            {
                // 外框的大标题 做为目录 导航用
                "title": "其他平台账号",
                // 分块卡片的内容填充，以数组显示添加数据，可以嵌入html代码
                "card": [
                    {
                        "header": "油管",
                        "body": "<a href='https://www.baidu.com' target='_blank'>比如插入个链接，注意单双引号，可以这样转义字符\"这样就可以了\"</a>"
                    },
                    {
                        "header": "推特",
                        "body": "<a href='https://www.baidu.com' target='_blank'>自由发挥</a>"
                    }
                ]
            }
        ]
    },
    // 直播封面 页面
    "liveCover": {
        "introduction": "直播封面 页面，img_num填写图片数量，图片必须存放在项目img/live_cover路径下且是png格式的图片（命名从1依次加1，倒排），不然无法识别。当然你也可以改源码为表情包页面的形式",
        // 这里的实现方式是for循环，所以只需要数字，如果命名不一样或者格式不一样，可以修改源码为 表情包的形式加载
        "img_num": 2
    },
    // 特典页面
    "privilege": {
        // 描述可以嵌入html代码
        "introductionCH": "特典 页面，captain_img填写舰长群图片路径，此处写相关的特典描述，因为特典一般不公开，所以可以做个大的预览图放着",
        "introductionJP": "特典 页面，日文版",
        "introductionEN": "特典 页面，英文版",
        "captain_img": "img/group/captain.png"
    },
    // QQ群页面
    "qqGroup": {
        "introductionCH": "<h1>QQ群 页面</h1><br>captain_img填写舰长群图片路径，fans_img则是粉丝群",
        "introductionJP": "日文版",
        "introductionEN": "英文版",
        "captain_img": "img/group/captain.png",
        "fans_img": "img/group/fans.png"
    }
};