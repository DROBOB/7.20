function wheel(wins, opts, runOpts) {
    // 初始化参数
    this.init(wins,opts,runOpts);
    // 获取窗口
    this.getWin();
    // 创建盒子
    this.createDiv();
    // 创建轮播列表
    this.createList();
    // 创建按钮
    this.createBtn();
    // 自动轮播
    // this.autoRun();
    // 点击播放
    // this.clickRun();

}

wheel.prototype = {
    init(wins, opts, runOpts) {
        this.opts = opts;
        this.run=this.run;
        var wins = document.querySelector(wins);
        if (!(wins && wins.nodeType == 1)) {
            console.error("窗口元素不正确");
            return;
        }
        opts.imgs.push(opts.imgs[0])
        opts.links.push(opts.links[0])
        opts.imgColor.push(opts.imgColor[0])



        var imgLength = opts.imgs.length;
        // console.log(imgLength);
        if (this.imgLength == 0) {
            console.error("没有传入相应的轮播图");
            return;

        }
        this.imgSize = opts.imgSize
        if (!(this.imgSize instanceof Array)) {
            console.error("请传入合法的尺寸类型");
        }
        if (imgSize.length == 0) {
            this.imgSize[0] = document.documentElement.clientWidth;
            this.imgSize[1] = 400
        }

        if (this.imgSize.some(function (val) {
            return val == 0;
        })) {
            for (var i = 0; i < 2; i++) {
                if (this.imgSize[i] == 0) {
                    this.imgSize[i] = 500


                }
            }

        }

        this.btnColor = opts.btnColor || "green";
        this.btnActive = opts.btnActive || "red";
        this.btnPos = opts.btnPos || ["center", "20"];

        var time = runOpts.time || 5000;
        var runStyle = "";
        if (runOpts.runStyle == "linner" || runOpts.runStyle) {
            runStyle = Tween, Linear;
        } else if (runOpts)

            /* html结构和样式 */
            // 1.win样式 
            wins.style.cssText = "width:100%;height:" + imgSize[1] + "px;position:relative;";

        // 2.添加容器

        var box = document.createElement("div");
        box.style.cssText = "width:" + imgLength * 100 + "%;height:100%;border:1px solid red"
        wins.appendChild(box);
        // 创建每一个轮播图

        for (i = 0; i < imgLength; i++) {



            var divList = document.createElement("div");
            divList.style.cssText = `float:left;width:${100 / imgLength}%;height: 100%;
        background:${opts.imgColor[i]}`

            var link = document.createElement("a");
            link.href = opts.links[i];
            link.style.cssText = "width:" + imgSize[i] + "px;height:" + imgSize[1] + "px;display:block;margin:auto;background:url(" + opts.imgs[i] + ") no-repeat 0 0"


            divList.appendChild(link)


            box.appendChild(divList);
        }
    },

    getWin() {
        this.style.cssText = "width:100%;height:" + imgSize[1] + "px;position:relative;";

    },
    createDiv() {
        this.box = document.createElement("div");
        this.box.style.cssText = "width:" + imgLength * 100 + "%;height:100%;border:1px solid red"
        this.wins.appendChild(box);

    },
    createList() {
        for (i = 0; i < imgLength; i++) {
            var divList = document.createElement("div");
            divList.style.cssText = `float:left;width:${100 / imgLength}%;height: 100%;
            background:${opts.imgColor[i]}`

            var link = document.createElement("a");
            link.href = this.opts.links[i];
            link.style.cssText = "width:" + imgSize[i] + "px;height:" + this.imgSize[1] + "px;display:block;margin:auto;background:url(" + this.opts.imgs[i] + ") no-repeat 0 0"


            divList.appendChild(link)


            this.box.appendChild(divList);
        }

    },
    createBtns() {
        var btnBox = document.createElement("div")
        btnBox.style.cssText = "width:300px;height:20px;position:absolute;left:0;right:0;margin:auto;bottom:" + btnBox[1] + "px;border:1px solid #000";

        for (i = 0; i < this.imgLength - 1; i++) {
            if (i == 0) {
                var bgcolor = btnActive;
            } else {
                var bgcolor = btnColor
            }
            var bgcolor = i == 0 ? tjis.btnActive : btnColor;
            var btn = document.createElement("div");
            btn.style.cssText = "width:10px;height:10px;background:" + btnColor + ";border-radius:50%;margin 0 10px;cursor:pointer"
            btnBox.appendChild(btn);
        }

        wins.appendChild(btnBox);
    }

}