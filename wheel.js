/* 
无缝轮播图
wins String 元素的选择器 要放入轮播图的窗口 //选择器
opts json 实现轮播图的各种选项
    img 数组 要包含轮播图图片的数组
    links 数组 图片链接地址
    imgColor 图片的颜色，用于全屏的颜色拼接
    imgSize 数组 第一个参数代表宽 第二个参数代表高 
    btnColor String 按钮的颜色
    btnActive String 获得焦点的按钮的颜色
    btnPos :数组 第一个参数代表的是x位置 y位置

    一个函数中 实现了多种功能
    面向对象的方式 当做一个对象->

*/
function wheel(wins, opts,runOpts) {
    /* 参数初始化 */
    var wins = document.querySelector(wins);
    if (!(wins && wins.nodeType == 1)) {
        console.error("窗口元素有误");
        return;
    }
    opts.imgs.push(opts.imgs[0])
    opts.links.push(opts.links[0])
    opts.imgColor.push(opts.imgColor[0])



    var imgLength = opts.imgs.length;
    // console.log(imgLength);
    if (imgLength == 0) {
        console.error("没有传入相应的轮播图");
        return;

    }
    var imgSize = opts.imgSize
    if (!(imgSize instanceof Array)) {
        console.error("请传入合法的尺寸类型");
    }
    if (imgSize.length == 0) {
        imgSize[0] = document.documentElement.clientWidth;
        imgSize[1] = 400
    }

        if (imgSize.some(function (val) {
            return val == 0;
        })) {
            for (var i = 0; i < 2; i++) {
                if (imgSize[i] == 0) {
                    imgSize[i] = 500


                }
            }

        }

    var btnColor=opts.btnColor||"green";
    var btnActive=opts.btnActive||"red";
    var btnPos=opts.btnPos||["center","20"];

    var time=runOpts.time||5000;
    var runStyle="";
    if(runOpts.runStyle=="linner"||runOpts.runStyle){
        runStyle=Tween,Linear;
    }else if(runOpts)

    /* html结构和样式 */
    // 1.win样式 
    wins.style.cssText="width:100%;height:"+imgSize[1]+"px;position:relative;";

    // 2.添加容器

    var box=document.createElement("div");
    box.style.cssText="width:"+imgLength*100+"%;height:100%;border:1px solid red"
    wins.appendChild(box);
    // 创建每一个轮播图

    for(i=0;i<imgLength;i++){

    

    var divList=document.createElement("div");
    divList.style.cssText=`float:left;width:${100/imgLength}%;height: 100%;
    background:${opts.imgColor[i]}`

    var link=document.createElement("a");
    link.href=opts.links[i];
    link.style.cssText="width:"+imgSize[i]+"px;height:"+imgSize[1]+"px;display:block;margin:auto;background:url("+opts.imgs[i]+") no-repeat 0 0"


    divList.appendChild(link)


    box.appendChild(divList);
    }

    // 创建按钮

var btnBox=document.createElement("div")
btnBox.style.cssText="width:300px;height:20px;position:absolute;left:0;right:0;margin:auto;bottom:"+btnBox[1]+"px;border:1px solid #000";

for(i=0;i<imgLength-1;i++){
    if(i==0){
        var bgcolor=btnActive;
    }else{
        var bgcolor=btnColor
    }
    var bgcolor=i==0?btnActive:btnColor;
    var btn=document.createElement("div");
    btn.style.cssText="width:10px;height:10px;background:"+btnColor+";border-radius:50%;margin 0 10px;cursor:pointer"
    btnBox.appendChild(btn);
}

wins.appendChild(btnBox);



}

// 创建按钮

// var btnBox=document.createElement("div")
// btnBox.style.cssText="width:300px;height:20px;position:absolute;left:0;right:0;margin:auto;bottom:"+btnBox[1]+"px;border:1px solid #000";

// for(i=0;i<imgLength-1;i++){
//     if(i==0){
//         var bgcolor=btna
//     }
//     var btn=document.createElement("div");
//     btn.style.cssText="width:10px;height:10px;background:"+btnColor+";border-radius:50%;margin 0 10px;cursor:pointer"
//     btnBox.appendChild(btn);
// }

// wins.appendChild(btnBox);


// // 进行轮播






