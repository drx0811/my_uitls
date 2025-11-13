<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
    <title>大屏</title>
    <meta name="decorator" content="default"/>
    <style type="text/css">
        [v-cloak] {display: none }
        img { max-width: none; }
        select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input{    margin-bottom:0px;}
    </style>
    <script type="text/javascript" src="${ctxStatic}/jquery/jquery.leoTextAnimate.js"></script>
    <script type="text/javascript" src="${ctxStatic}/echarts/echarts.min-5.4.0.js"></script>
    <script type="text/javascript" src="${ctxStatic}/vue/vue.dev.js"></script>
    <script type="text/javascript" src="${ctxStatic}/echarts/jsencrypt.min.js"></script>
    <script type="text/javascript" src="${ctxStatic}/echarts/jsWebControl-1.0.0.min.js"></script>
</head>
<body style="background: #f7f7f7;">
<style>
    :root {	--num: 5; --num2: 10;  --s: 1s; --time:1 }
    .icon-th-list{ display: none; }
    html,body,#app{ width: 100%; height: 100%; overflow: hidden; background:#cccccc; }
    #app{ background: 100% 100% / 200% 100% no-repeat url("${ctxStatic}/images/show_bg2.png"); padding: 4.4% 3% 2.5% 0.5%; box-sizing: border-box; }
    .container{ width: 100% ; height: 100%; display: flex; flex-direction: column; position: relative; }
    .container_mask{ width: 100%; height: 100%; position: absolute; top: 0; left: 0; background: transparent; z-index: 9999; cursor: pointer; }
    .title{ flex:1;  display: flex; }
    .title_left{ flex:2;  display: flex; }
    .title_right{ flex:3; display: flex; margin-right: 0.6%; }
    .items{ flex:1; display: flex; }
    .items:last-child{ margin-left: 1.5%; }
    .item{ flex:1; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative; padding-left: 24px; display: flex; flex-direction: column; justify-content: center; line-height: 1.8vh; font-size: 1.4vh; color: white; }
    .item:last-child{ margin-left: 1.5%; }
    .item::after{ content:''; width: 4px; height: 68%; position: absolute; top: 0; bottom: 0; left: 8px; margin: auto 0; background: #4285F4; border-radius: 1px; }
    .body{ flex:16; margin-top: 0.6%; display: flex; }
    .left{ flex:3; margin-right: 0.6%; border-radius: 5px; box-sizing: border-box; padding-top: 30px; display: flex; flex-direction: column; background: rgba(255,255,255,0.1); position: relative; }
    .right{ flex:2; display: flex; flex-direction: column;  }
    .line{ flex:1; display: flex;  }
    .line:first-child{ margin-bottom: 1.5%; }
    .video_card{ overflow: hidden; flex:1; border-radius: 5px; box-sizing: border-box; padding-top: 30px; background: rgba(255,255,255,0.1); position: relative; display: flex; flex-direction: column; }
    .video_card:first-child{ margin-right: 1.5%; }
    .card_title{ width: 100%; height: 30px; line-height: 30px; box-sizing: border-box; font-size: 1.3vh; position: absolute; top: 0; left: 0; color: white; padding-left: 22px; }
    .card_title::after{ width: 9px; height: 9px; border-radius: 2px; content: ''; background: #4285F4; position: absolute; top: 0; bottom: 0; left: 7px; margin: auto 0;  }
    .up{ flex: 7; margin:0 1% 1% 1%; background: rgba(1,21,113,0.6); border-radius: 5px; display: flex; overflow: hidden; }
    .down{ flex: 3; margin:0 1% 1% 1%; display: flex; }
    .down_video{ flex:1; margin-right: 1%; background: rgba(1,21,113,0.6); border-radius: 5px; display:flex; flex-direction: column;  }
    .down_video:last-child{ margin-right: 0; }
    .down_video_box{ flex: 1; border-radius: 5px 5px 0 0; background: black; }
    .down_video_title{ height: 24px; line-height: 24px; background: #4285F4; color: white; border-radius:  0 0 5px 5px; padding-left: 5%; }
    .line_video{ flex: 3; background: black; margin: 0 3% 3% 3%; border-radius: 3px; box-sizing: border-box; position: relative; }
    .video_info{ flex: 2; color: white; font-size: 12px; margin: 0 3% 3% 3%; box-sizing: border-box; overflow: hidden; }
    .video_info_box{ width: 100%; height: 200%;  }
    .video_info_item,.video_info_item2{ font-size: 9px; line-height: 9px;  box-sizing: border-box; padding-left: 10px; width: 100%; height:10%; overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis; }
    .video_info_item::before, .video_info_item2::before{ content: ""; display: block; height: 20%; }
    .video_info_item span,.video_info_item2 span{ display: inline-block; }
    .video_info_item span:nth-child(1){ width: 75px; }
    .video_info_item span:nth-child(2){ width: 72px; }
    .video_info_item span:nth-child(3){ width: 56px; }
    .video_info2{ flex: 2; color: white; font-size: 12px; margin: 0 2% 3% 2%; box-sizing: border-box; overflow: hidden; }
    .video_info_item2 {padding-left: 0px; text-overflow:inherit;display: flex; height: 5%;}
    .video_info_item2 span:nth-child(1){ width: 20px;display: inline-block;text-align: center; }
    .video_info_item2 span:nth-child(n+2){ flex: 1;display: inline-block;text-align: center;overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis;  max-width: 100px;}
    .video_info_item2 span:nth-child(5){ flex:1.5;}
    .video_info_item1{ font-size: 9px; line-height: 9px;  box-sizing: border-box; display: flex; width: 100%; height:10%; overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis; }
    .video_info_item1::before{ content: ""; display: block; height: 20%; }
    .video_info_item1 span:nth-child(n+2){ flex: 1;display: inline-block;text-align: center; }
    .video_info_item1 span:nth-child(1){display: inline-block;width: 20px; text-align: center; }
    .half_video_box{ display: flex; flex-direction: column; }
    .half_video{ flex:1; }
    .half_info{ height: 34px; background: #4285F4; border-radius:  0 0 2px 2px; color: white; font-size: 12px; line-height: 14px;box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; }
    .half_line{ display: flex; justify-content: space-between; transform: scale(0.9); }
    .half_line .hColor{ font-weight: bold; }
    .card_title span{ display: inline-block; font-size: 12px; background: #4285F4; height: 12px; transform: scale(0.8); line-height: 12px; padding: 4px 10px; border-radius: 3px; }
    .card_title span:first-child{ margin-left: 15px; }
    .card_label{ width: 68%; height: 30px; position: absolute; top: 0; right: 0; box-sizing: border-box; }
    .lable_status{ height: 20px; margin: 5px 2px; float: left; }
    .label_img{ float: right; box-sizing: border-box; padding-left: 26px; height: 24px; line-height: 24px; flex: 1; margin: 3px 5px 0 5px; color: white; display: flex; justify-content: center; font-size: 16px; }
    .label_img1{ background: center / 100% 100% no-repeat url("${ctxStatic}/images/label04.png"); }
    .label_img2{ background: center / 100% 100% no-repeat url("${ctxStatic}/images/label03.png"); }
    .label_img3{ background: center / 100% 100% no-repeat url("${ctxStatic}/images/label01.png"); }
    .label_img>div{ transform: scale(0.8); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
    .col_name{ flex: 1; color: white; display: flex; flex-direction: column; justify-content: space-around; }
    .col_name_item{ text-align: center; }
    .col_area{ flex: 24; display: flex; flex-direction: column;justify-content: space-around; position: relative; }
    .col_area_item{ flex: 1; box-sizing: border-box; border-bottom: 1px solid rgba(255,255,255,.3); position:relative;  }
    .col_area_item:last-child{ border-bottom: none; }
    .col_road{ flex: 2; background: rgba(12,40,136,.8); position: relative; color: rgba(255,255,255,.4); }
    .col_road::before{ content: ''; width: 0px; height: 100%; border-left: 1px dashed rgba(255,255,255,.3); position: absolute; top: 0; left: 4px; }
    .col_road::after{ content: ''; width: 0px; height: 100%; border-left: 1px dashed rgba(255,255,255,.3); position: absolute; top: 0; right: 4px; }
    .col_road_name{ width: 13px;height: 100px; position: absolute; top: 0; left: 0; bottom: 0; right: 0; margin: auto auto; }
    .car_box1{ width: 30%; height: 24%; position: absolute; top: 10%; left: 7px; background: center / 100% 100% url("${ctxStatic}/images/car_img.png"); }
    .car_box2{ width: 30%; height: 24%; position: absolute; bottom: 10%; right: 7px; background: center / 100% 100% url("${ctxStatic}/images/car_img.png"); }
    .rawCar{ z-index: 999; width: 1.2px; height: 100%; position: absolute; top: 0; left: 20%; background: #F7B500; }
    .zgz{ width: 20px; height: 20px; position: absolute; top: 200px; left: -2.5px; background: center / 100% 100% url("${ctxStatic}/images/goz.png") }
    .image_roll{ height: 32%; width: 1.8%; content: url("${ctxStatic}/images/steel01.png"); position: absolute; bottom: 0; left: 0; }
    .image_roll1{ height: 32%; width: 1.8%; content: url("${ctxStatic}/images/steel05.png"); position: absolute; bottom: 0; left: 0; }
    .image_roll2{ height: 32%; width: 1.8%; content: url("${ctxStatic}/images/steel04.png"); position: absolute; bottom: 0; left: 0; }
    .image_roll3{ height: 32%; width: 1.8%; content: url("${ctxStatic}/images/steel02.png"); position: absolute; bottom: 0; left: 0; }
    .footer{ width: 100%; height: 2.5vw; position: absolute; bottom: 0; left: 0; background: 78% 54% / 111% 130% no-repeat url("${ctxStatic}/images/line_bottom_r.png"); }
    .icon_bottom{ position: absolute; top: 22%; left: 25.5%; width: 7%; }
    .icon_bottom:nth-child(2){ top: 22%; width: 7%; left: 73.5%; }
    .head{ width: 100%; height: 4.4vw; box-sizing:border-box; display: flex; align-items: flex-end; position: absolute; top: 0; left: 0; padding: 0 3% 0 0.5%; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/lineR.png"); }
    .head_left{ flex: 2; display: flex; justify-content: center; align-items: center; margin-left: 0.6%; height: 56%; background: 0 -20% / 45% 60% no-repeat url("${ctxStatic}/images/arr_right.png") , 100% -20% / 45% 60% no-repeat url("${ctxStatic}/images/arr_left.png"); }
    .head_right{ flex: 3;  height: 56%; display: flex; align-items: center; background: 100% -20% / 38% 60% no-repeat url("${ctxStatic}/images/arr_left.png"); }
    .head_title{ margin: 0 20px; color: #4285F4; font-size: 1vw; font-weight: bolder; }
    .dot_right{ display: flex; margin-left: 10%; position: absolute; top: -20%; left: 2%; }
    .trleft{ flex: 10;display: flex;justify-content: center;align-items: center; position: relative; }
    .m_left,.m_right{ display: flex; }
    .mkl{ width: 3px; height: 12px; margin: 0 5px; background:rgba(66,133,244,0.2); border-radius: 5px; transform: rotateZ(36deg); }
    .mkr{ width: 3px; height: 12px; margin: 0 5px; background:rgba(66,133,244,0.2); border-radius: 5px; transform: rotateZ(-36deg); }
    .bsize{ width: 5px; height: 24px; transform: rotateZ(45deg); }
    .right_video{ width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
    .move_title{ height: 18px;font-size: 10px; line-height: 18px; margin: 0 2%; border-radius: 2px; color: white; display: flex; background: linear-gradient(180deg, rgba(66,133,244,0.38) 0%, rgba(20,54,151,0.38) 100%); }
    .move_title span:nth-child(n+2){ flex: 1;display: inline-block;text-align: center; }
    .move_title span:nth-child(1){display: inline-block;width: 20px; text-align: center;  max-width: 100px; }
    .move_title2 span:last-child{flex: 1.5;}
    .col_red{ color: red; }
    .opaticy_0{ opacity: 0; }
    .info_rb{ background: rgba(66,133,244,0.3) linear-gradient(180deg, #143697 0%, #011571 99%); }
    .info_rt{ border-radius: 4px;position: relative; background: linear-gradient(305deg, rgba(66,133,244,0) 0%, rgba(119,187,250,0.3) 100%); }
    .roll_text_box{ width: 80%; height: 5%; position: absolute; top:9%; left: 0; transform: translateX(-50%); display: flex; align-items: center; overflow: hidden; }
    #roll_text{ font-size: 28px; color: white; font-family: "Eras Bold ITC"; white-space: nowrap; }
    .logo{ width: 15%; height: 7%; position: absolute; top: 0; left: 0; background: 100% 0% / 200% 100% no-repeat url("${ctxStatic}/images/logo05.png"); }
    .slideBox{ animation: move calc(var(--num) * var(--s)) steps(var(--num)) infinite; }
    .slideBox2{ animation: move calc(var(--num2) * var(--s)) steps(var(--num2)) infinite; }
    .slideItem{ animation: ItemMove calc(var(--s)) infinite; }
    .dot1{ animation: dot1 calc(var(--time) * 1s) linear infinite; }
    .dot2{ animation: dot2 calc(var(--time) * 1s) linear infinite; }
    .dot3{ animation: dot3 calc(var(--time) * 1s) linear infinite; }
    .dot4{ animation: dot4 calc(var(--time) * 1s) linear infinite; }
    @keyframes move {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, -50%);
        }
    }
    @keyframes ItemMove {
        0% {
            transform: translate(0, 0);
        }
        100%  {
            transform: translate(0, -100%);
        }
    }
    @keyframes dot1{
        0%{
            background:rgba(66,133,244,0.1);
        }
        25%{
            background:rgba(66,133,244,1);
        }
        50%{
            background:rgba(66,133,244,0.75);
        }
        75%{
            background:rgba(66,133,244,0.35);
        }
        100%{
            background:rgba(66,133,244,0.1);
        }
    }
    @keyframes dot2{
        0%{
            background:rgba(66,133,244,0.35);
        }
        25%{
            background:rgba(66,133,244,0.1);
        }
        50%{
            background:rgba(66,133,244,1);
        }
        75%{
            background:rgba(66,133,244,0.75);
        }
        100%{
            background:rgba(66,133,244,0.35);
        }
    }
    @keyframes dot3{
        0%{
            background:rgba(66,133,244,0.75);
        }
        25%{
            background:rgba(66,133,244,0.35);
        }
        50%{
            background:rgba(66,133,244,0.1);
        }
        75%{
            background:rgba(66,133,244,1);
        }
        100%{
            background:rgba(66,133,244,0.75);
        }
    }
    @keyframes dot4{
        0%{
            background:rgba(66,133,244,1);
        }
        25%{
            background:rgba(66,133,244,0.75);
        }
        50%{
            background:rgba(66,133,244,0.35);
        }
        75%{
            background:rgba(66,133,244,0.1);
        }
        100%{
            background:rgba(66,133,244,1);
        }
    }
    .full_screen{ width:20px; height: 20px;  position: absolute; top: 4%; right: 1%; z-index: 999; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/isfull.png"); cursor: pointer; }
    .not_full{ background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/notfull.png"); }
    .car_moni{ flex: 1;margin-top: 30px;display: flex; color: white;padding: 0 0.7%; }
    .car_moni>div{ flex: 1;border-radius: 2px; border-left: 1px solid #032894;background: linear-gradient(180deg, #4285F4 0%, #143697 100%); font-size: 12px; display: flex;justify-content: center; align-items: center; }
    .car_info{ flex: 1; display: flex; border-radius: 3px; border: 1px solid rgba(21, 55, 152, 0.9); background: linear-gradient(270deg, rgba(238,48,48,0.58) 0%, rgba(125,174,255,0) 100%); }
    .node_info{ flex: 1;border-radius: 2px; border-left: 1px solid #032894; }
    .car_node1{ font-size: 10px; display: flex; justify-content: center; align-items: center; color: white; background: 42% 70% / 60% 28% no-repeat url('${ctxStatic}/images/huoch.png'); }
    .car_node{ display: flex; flex-direction: column; font-size: 0px; color: white; padding: 0.4% 0;  }
    .car_node>div{ flex: 1;  font-size: 9px; line-height: 10px; display: flex; justify-content: center; align-items: center; }
    .good_view{ flex: 1; position: relative; background: #011571; }
    .map_top{ width: 200%; height: 100%; background: linear-gradient(#3F80ED 1px, transparent 1px),linear-gradient(90deg,#3F80ED 1px, transparent 1px);background-size: 2.5% 8%; transform-origin: top;transform: rotateX(-90deg) translateX(-25%); }
    .map{ width: 200%; height: 100%; background: linear-gradient(#3F80ED 1px, transparent 1px),linear-gradient(90deg,#3F80ED 1px, transparent 1px);background-size: 2.5% 10%; transform-origin:  0 100% 0;transform: rotateX(60deg) translateX(-25%); }
    .good_mask{ width: 100%; height: 100%; position: absolute; top: 0; left: 0; transform-style: preserve-3d; perspective: 200px; overflow: hidden; }
    .row_box{ width: 100% ; border-top: 1px solid #3F80ED;  height: 12px; position: absolute; bottom: 0; left: 0; background: linear-gradient(to left,#3F80ED 1px, transparent 1px); background-size: 5% 10%; }
    .trape1{ width:60%;height:36%;position:absolute; bottom:12%;left:20%;background:linear-gradient(transparent,#4987f0);clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%); }
    .circle1{width:42%;height:12%;box-sizing: border-box;border:1px solid #3F80ED;background:#4987f0;position:absolute;bottom:6%;left:29%;border-radius:50%; }
    .trape2{ width:40%;height:28%;position:absolute; bottom:12%;left:30%;z-index: 1; background:linear-gradient(transparent,#4184f3);clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%); }
    .circle2{ width:28%;height:9%;box-sizing: border-box;border:1px solid #3F80ED;z-index: 2; background:#4184f3;position:absolute;bottom:8%;left:36%;border-radius:50%; }
    .trape3{ width:20%;height:18%;position:absolute; bottom:14%;left:40%;z-index: 4; background:linear-gradient(transparent,#5e9bfd);clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%); }
    .circle3{ width:14%;height:5%;box-sizing: border-box;z-index: 3; background:#5e9bfd;position:absolute;bottom:11%;left:43%;border-radius:50%; }
    .ladingCode{ width: 20%; height: 15%; color: white; font-size: 9px; display: flex; justify-content: center; align-items: center; position: absolute; top: 30%; left: 40%; border-radius: 50%; background: linear-gradient(120deg,#61a6e1,#65a4e8,#4185f3); }
    .circle4{ width: 200%; height: 200%; position: absolute; top: -50%; left: -50%; border:1px solid #82ccf6; background:radial-gradient(transparent 50%, #5084e2,#82ccf6); border-radius: 50%; }
    .circle5{ width: 300%; height: 300%; position: absolute; top: -100%; left: -100%; border: 1px solid #82ccf6; background:radial-gradient(transparent 55%, #5084e2,#82ccf6); border-radius: 50%; }
    .circle6{ width:100%; height:100%; position: absolute; top: -156%; left: 0%;color: white; font-size: 9px; display: flex; justify-content: center; align-items: center; border: 1px solid #82ccf6; background:radial-gradient(transparent 15%, #5084e2,#82ccf6); border-radius: 50%;  }
    .good_info{ width: 38%; height: 56%; position: absolute; top: 0; left: 0; display: flex;flex-direction: column;  }
    .crane_img{ width:5px; height: 30%; background: #FCECC8;position:absolute; top:0; left: 50%; z-index: 9; }
    .crane_gou{ width: 40px; height: 40px; position: absolute; bottom: -30px; left: -14px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/crane.png"); }
    .roll_img{ width: 5%; height: 13%; border-radius: 50%; position: absolute; bottom: 0; left: 0; }
    .roll_front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; bottom: 0; left: 0; background: radial-gradient(#4b8be9 20% ,#70b3fa 30%);z-index: 1; }
    .roll_back{ width: 100%; height: 100%; border-radius: 50%; background: #4c8df1; position: absolute; top: -3%; left: 10%; }
    .current_roll .roll_front{ background: radial-gradient(#efa355 20% ,#fcc781 30%); }
    .current_roll .roll_back{ background: #f7b158; }
    .seleted_roll>span{ background: linear-gradient(#fcecc8 10px ,transparent 9px); color: #0A246A; }

</style>
<div id="app" v-cloak>
    <div class="full_screen" v-show="!isFull" @click="onFullScreen()"></div>
    <div class="logo"></div>
    <div class="roll_text_box" id="roll_text_box">
        <span id="roll_text"></span>
    </div>
    <div class="head">
        <div class="head_right">
            <div style="flex: 3;"></div>
            <div class="trleft">
                <div class="m_left" >
                    <div class="mkl dot2"></div>
                    <div class="mkl dot3"></div>
                    <div class="mkl dot4"></div>
                    <div class="mkl dot1"></div>
                </div>
                <div class="head_title">货物监控中心</div>
                <div class="m_right">
                    <div class="mkr dot1"></div>
                    <div class="mkr dot4"></div>
                    <div class="mkr dot3"></div>
                    <div class="mkr dot2"></div>
                </div>
                <div class="dot_right">
                    <div class="mkr bsize dot1 "></div>
                    <div class="mkr bsize dot4 "></div>
                    <div class="mkr bsize dot3 "></div>
                    <div class="mkr bsize dot2 "></div>
                </div>
            </div>
        </div>
        <div class="head_left">
            <div class="m_left">
                <div class="mkl dot2"></div>
                <div class="mkl dot3"></div>
                <div class="mkl dot4"></div>
                <div class="mkl dot1"></div>
            </div>
            <div class="head_title">风控中心</div>
            <div class="m_right">
                <div class="mkr dot1"></div>
                <div class="mkr dot4"></div>
                <div class="mkr dot3"></div>
                <div class="mkr dot2"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="container_mask" ></div>
        <div class="title">
            <div class="title_right"></div>
            <div class="title_left">
                <div class="items">
                    <div class="item" style="opacity: 0;">
                        <div>库存量</div>
                        <div><span class="number"></span> 吨</div>
                    </div>
                    <div class="item">
                        <div>累计出库量</div>
                        <div><span class="number roll2">{{outNum}}</span> 吨</div>
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <div>累计吞吐量</div>
                        <div><span class="number roll1">{{throughNum}}</span> 吨</div>
                    </div>
                    <div class="item">
                        <div>累计加工量</div>
                        <div><span class="number roll0">{{processNum}}</span> 吨</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="left" style="padding-top: 0;background: transparent;flex: 7;">
                <div class="line" style="background: rgba(21,55,152,0.9);border-radius: 5px;margin-bottom: 1%;flex-direction: column;position: relative;">
                    <div class="card_title">
                        车辆监测
                    </div>
                    <div class="car_moni">
                        <div>车辆</div>
                        <div>入园识别</div>
                        <div>入园过磅</div>
                        <div>车辆叫号</div>
                        <div>计量数据</div>
                        <div>出园复镑</div>
                        <div>结算金额</div>
                        <div>出园识别</div>
                    </div>
                    <div style="flex: 8;display: flex;flex-direction: column;margin: 0 0.7% 1% 0.7%;">
                        <div class="car_info"  v-for="(item,i) in carMonitor" :key="i">
                            <div class="node_info car_node1" >{{item.carPlateNo || ""}}</div>
                            <div class="node_info car_node">
                                <div>{{item.inBarrierDate ? item.inBarrierDate.slice(5) : ""}}</div>
                                <div>{{item.inBarrierName || ""}}</div>
                                <div></div>
                            </div>
                            <div class="node_info car_node">
                                <div>{{item.inWeighBridgeTime ? item.inWeighBridgeTime.slice(5) : ""}}</div>
                                <div>{{item.inWeighBridgeWeight ? item.inWeighBridgeWeight + "吨" : ""}}</div>
                                <div>{{item.inWeighBridgeName || ""}}</div>
                            </div>
                            <div class="node_info car_node">
                                <div>{{item.platformCallTime ? item.platformCallTime.slice(5) : ""}}</div>
                                <div>{{item.platformName || ""}}</div>
                                <div></div>
                            </div>
                            <div class="node_info car_node">
                                <div>{{item.craneDate ? item.craneDate.slice(5) : ""}}</div>
                                <div>{{item.craneWeight ? item.craneWeight + "吨" : ""}}</div>
                                <div></div>
                            </div>
                            <div class="node_info car_node">
                                <div>{{item.outWeighBridgeTime ? item.outWeighBridgeTime.slice(5) : ""}}</div>
                                <div>{{item.outWeighBridgeWeight ? item.outWeighBridgeWeight + "吨" : ""}}</div>
                                <div>{{item.outWeighBridgeName || ""}}</div>
                            </div>
                            <div class="node_info car_node">
                                <div>{{item.accountTime ? item.accountTime.slice(5) : ""}}</div>
                                <div>{{item.accountMoney ? item.accountMoney + "元" : ""}}</div>
                                <div></div>
                            </div>
                            <div class="node_info car_node">
                                <div>{{item.outBarrierDate ? item.outBarrierDate.slice(5) : ""}}</div>
                                <div>{{item.outBarrierName || ""}}</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line">
                    <div class="video_card" style="flex: 8;margin-right: 1%;background: rgba(66,133,244,0.3);">
                        <div class="card_title">
                            货物监测
                        </div>
                        <div class="good_view">
                            <div class="crane_img">
                                <div class="crane_gou"></div>
                            </div>
                            <div class="good_info">
                                <div class="move_title">
                                    <span>序</span>
                                    <span>车牌号</span>
                                    <span>类型</span>
                                    <span>卷号</span>
                                    <span>位置</span>
                                </div>
                                <div class="video_info" style="flex: 1">
                                    <div class="video_info_box slideBox" v-if="lastSendDetail.length">
                                        <div :class=" i<1 ? 'video_info_item1 slideItem seleted_roll':'video_info_item1 slideItem' " v-for="(val,i) in lastSendDetail">
                                            <span>{{i+1}}</span>
                                            <span>{{val.carPlateNo || ''}}</span>
                                            <span>出库</span>
                                            <span>{{val.packageNo || '' }}</span>
                                            <span>{{val.warehousePlaceName || '' }}</span>
                                        </div>
                                        <div :class=" i<1 ? 'video_info_item1 slideItem seleted_roll':'video_info_item1 slideItem' " v-for="(val,i) in lastSendDetail">
                                            <span>{{i+1}}</span>
                                            <span>{{val.carPlateNo || ''}}</span>
                                            <span>出库</span>
                                            <span>{{val.packageNo || '' }}</span>
                                            <span>{{val.warehousePlaceName || '' }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row_box"></div>
                            <div class="good_mask" style="bottom: 12px;top: auto">
                                <div class="map"></div>
                            </div>
                            <div class="good_mask">
                                <div class="map_top"></div>
                            </div>
                            <div class="good_mask" style="bottom: 12px;top: auto">
                                <div :class=" val.data.packageNo==currentRoll.packageNo  ? 'roll_img current_roll':'roll_img' "
                                     :style=" 'left:' + val.colP + '%;bottom:'+ val.layP +'%;' "
                                     v-for="(val,i) in rollList">
                                    <div class="roll_front"></div>
                                    <div class="roll_back"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video_card" style="flex: 3;background: rgba(66,133,244,0.3);">
                        <div class="card_title">
                            计量监测
                        </div>
                        <div class="line_video" style="display: flex;flex-direction: column;">
                            <div style="flex: 19;" id="out_video"></div>
                            <div class="half_info" style="flex: 8;background: #FF8888; color: white;">
                                <div class="half_line">
                                    <div>
                                        <span>车牌号:</span>
                                        <span class="hColor" id="outCarPlateNo2"></span>
                                    </div>
                                    <div>
                                        <span>单号:</span>
                                        <span class="hColor" id="outBillCode2" style="display: inline-block; min-width: 80px;"></span>
                                    </div>
                                </div>
                                <div class="half_line">
                                    <div>
                                        <span>毛重:</span>
                                        <span class="hColor" id="outRoughWeight2"></span>
                                    </div>
                                    <div>
                                        <span>皮重:</span>
                                        <span class="hColor" id="outTareWeight2"></span>
                                    </div>
                                    <div>
                                        <span>净重:</span>
                                        <span class="hColor" id="outRealWeight2" style="display: inline-block; min-width: 40px;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="move_title" style="font-size: 8px;">
                            <span>序</span>
                            <span>车牌号</span>
                            <span>类型</span>
                            <span>地磅净重</span>
                            <span>吊磅重量</span>
                            <span>状态</span>
                        </div>
                        <div class="video_info" style="flex: 3;">
                            <div class="video_info_box slideBox" v-if="measureMonitor.length">
                                <div class="video_info_item1 slideItem" v-for="(val,i) in measureMonitor">
                                    <span>{{i+1}}</span>
                                    <span>{{val.carPlateNo || ''}}</span>
                                    <span>{{val.taskType ? val.taskType.slice(0,2) : '' }}</span>
                                    <span>{{val.netWeight ? val.netWeight+'吨' :'' }}</span>
                                    <span>{{val.craneWeight ? val.craneWeight+'吨' :'' }}</span>
                                    <span>{{val.statusDesc||''}}</span>
                                </div>
                                <div class="video_info_item1 slideItem" v-for="(val,i) in measureMonitor">
                                    <span>{{i+1}}</span>
                                    <span>{{val.carPlateNo || ''}}</span>
                                    <span>{{val.taskType ? val.taskType.slice(0,2) : '' }}</span>
                                    <span>{{val.netWeight ? val.netWeight+'吨' :'' }}</span>
                                    <span>{{val.craneWeight ? val.craneWeight+'吨' :'' }}</span>
                                    <span>{{val.statusDesc||''}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right" style="flex: 4;">
                <div class="line info_rt">
                    <div class="card_title"> 换单监测 </div>
                    <div class="cleft" style="flex: 2;display: flex; flex-direction: column;padding-top: 30px;">
                        <div class="move_title move_title2">
                            <span>序</span>
                            <span>车牌号</span>
                            <span>卷号</span>
                            <span>作业类型</span>
                            <span>作业月台/位置</span>
                        </div>
                        <div class="video_info2" style="flex: 2;">
                            <div class="video_info_box slideBox2" v-if="lastEnterOutputTask.length">
                                <div class="video_info_item2 slideItem" v-for="(val, i) in lastEnterOutputTask">
                                    <span>{{i+1}}</span>
                                    <span>{{val.carPlateNo || ''}}</span>
                                    <span>{{val.packageNos || ''}}</span>
                                    <span>{{val.taskType ||''}}</span>
                                    <span>{{(val.platformName + '/' + val.locations) ||''}}</span>
                                </div>
                                <div class="video_info_item2 slideItem" v-for="(val, i) in lastEnterOutputTask">
                                    <span>{{i+1}}</span>
                                    <span>{{val.carPlateNo || ''}}</span>
                                    <span>{{val.packageNos || ''}}</span>
                                    <span>{{val.taskType ||''}}</span>
                                    <span>{{(val.platformName + '/' + val.locations) ||''}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cright" style="flex: 2; min-width: 200px; position: relative;">
                        <div class="trape1"></div>
                        <div class="circle1"></div>
                        <div class="trape2"></div>
                        <div class="circle2"></div>
                        <div class="trape3"></div>
                        <div class="circle3"></div>
                        <div class="ladingCode">
                            电提单
                            <div class="circle4"></div>
                            <div class="circle5"></div>
                            <div class="circle6">短信</div>
                            <div class="circle6" style="top: 156%;">车牌号</div>
                            <div class="circle6" style="top: 76%;left: -136%;">证件号</div>
                            <div class="circle6" style="top: -76%;left: -136%;">高拍仪</div>
                            <div class="circle6" style="top: 76%;left: 136%;">纸提单</div>
                            <div class="circle6" style="top: -76%;left: 136%;">终端机</div>
                        </div>
                    </div>
                </div>
                <div class="line">
                    <div class="video_card info_rb">
                        <div class="card_title">
                            签章风险监测
                        </div>
                        <div class="move_title">
                            <span>序</span>
                            <span>业务单据</span>
                            <span>签章名称</span>
                            <span>时间</span>
                            <span>申请人</span>
                        </div>
                        <div class="video_info" style="flex: 3;">
                            <div class="video_info_box slideBox" v-if="signLog.length">
                                <div class="video_info_item1 slideItem" v-for="(val,i) in signLog">
                                    <span>{{i+1}}</span>
                                    <span>{{val.billCode || ''}}</span>
                                    <span>{{val.signName ? val.signName.slice(0,5)+'...' : '' }}</span>
                                    <span>{{val.createDate ? val.createDate.slice(11,16) : '' }}</span>
                                    <span>{{val.createName||''}}</span>
                                </div>
                                <div class="video_info_item1 slideItem" v-for="(val,i) in signLog">
                                    <span>{{i+1}}</span>
                                    <span>{{val.billCode || ''}}</span>
                                    <span>{{val.signName ? val.signName.slice(0,5)+'...' : '' }}</span>
                                    <span>{{val.createDate ? val.createDate.slice(11,16) : '' }}</span>
                                    <span>{{val.createName||''}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="line_video" style="background:0 0 / 100% 100% no-repeat url('${ctxStatic}/images/signrisk2.png'); "></div>
                    </div>
                    <div class="video_card info_rb">
                        <div class="card_title ">
                            结算监测
                        </div>
                        <div class="move_title">
                            <span>序</span>
                            <span>车牌号</span>
                            <span>结算量</span>
                            <span>金额</span>
                            <span>状态</span>
                            <span>结算方式</span>
                        </div>
                        <div class="video_info" style="flex: 3;">
                            <div class="video_info_box slideBox" v-if="carSettlement.length">
                                <div class="video_info_item1 slideItem" v-for="(val,i) in carSettlement">
                                    <span>{{i+1}}</span>
                                    <span>{{val.carPlateNo || ''}}</span>
                                    <span>{{val.hangWeight ? val.hangWeight+'吨' : '' }}</span>
                                    <span>{{val.accountMoney ? val.accountMoney+'元' : '' }}</span>
                                    <span>已结算</span>
                                    <span>{{val.paymentModeDesc || ''}}</span>
                                </div>
                                <div class="video_info_item1 slideItem" v-for="(val,i) in carSettlement">
                                    <span>{{i+1}}</span>
                                    <span>{{val.carPlateNo || ''}}</span>
                                    <span>{{val.hangWeight ? val.hangWeight+'吨' : '' }}</span>
                                    <span>{{val.accountMoney ? val.accountMoney+'元' : '' }}</span>
                                    <span>已结算</span>
                                    <span>{{val.paymentModeDesc || ''}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="line_video" style="background:0 0 / 100% 100% no-repeat url('${ctxStatic}/images/settle.png'); "></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <img src="${ctxStatic}/images/icon_bottom3.png" alt="" class="icon_bottom">
        <img src="${ctxStatic}/images/icon_bottom4.png" alt="" class="icon_bottom">
    </div>
</div>
<script type="text/javascript">
    let myDocument = window.document;
    try {
        myDocument = window.parent.document;
    } catch(e) {
        console.log('同源策略报错');
        myDocument = window.document;
    }
    let appVue = new Vue({
        el: '#app',
        data: {
            outNum: 0,
            throughNum: 0,
            processNum: 0,
            outBarrier:[],
            outBridge:[],
            platLeft:[],
            platRight:[],
            signLog:[],
            carMonitor:[],
            lastSendDetail:[],
            carSettlement:[],
            measureMonitor:[],
            lastEnterOutputTask:[],
            showAreaName:'室外A区',
            areaNum:0,
            axisx: 0,
            axisy: 0,
            currentRoll:null,
            rollList:[],
            isFull:false,
            areaInfo:[
                {
                    name:'室外A区',
                    relationId:'4a459',
                    list:['426fa905d1ea49b5a2cb7197e208d021','0ff287e0ae094be795579a3f2996089f','e48ecc5e28e44fd4a6b1c2afd05cb7aa']
                },
                {
                    name:'室外B区',
                    relationId:'4d807',
                    list:['5bfd98cc0bb2468b9c36d6891fecf904','e48ecc5e28e44fd4a6b1c2afd05cb7aa','1c25d516d7644afca8bd3ddf684899b4']
                },
                {
                    name:'C',
                    relationId:'4d805',
                    list:['3aa477cbdbd04aa9bb03769bf97f47ce','22ac7c421ffd4ef4bb3241a53744fa99','450771ae78da4ab0b1034628532746f9']
                },
                {
                    name:'D',
                    relationId:'4d804',
                    list:['3c8048db25e64713a4db39e98b81c52a','22ac7c421ffd4ef4bb3241a53744fa99','450771ae78da4ab0b1034628532746f9']
                },
            ]
        },
        methods:{
            getLastSendDetail(){
                let self = this
                $.post("${ctx}/showCenter/getCarMonitor", {}, function(res){
                console.log('res :>> ', res);
                    self.carMonitor = res||[]
                });
                $.post("${ctx}/showCenter/getLastSendDetail", {}, function(res){
                    self.lastSendDetail = res||[]
                    if(self.lastSendDetail.length>0){
                        self.currentRoll = self.lastSendDetail[0]
                        self.getRowRoll(self.currentRoll);
                    }
                });
                $.post("${ctx}/showCenter/getLastCarSettlement", {}, function(res){
                    self.carSettlement = res||[]
                });
                $.post("${ctx}/showCenter/measureMonitor", {}, function(res){
                    self.measureMonitor = res || []
                });
                $.post("${ctx}/showCenter/getLastEnterOutputTask", {}, function(res){
                    self.lastEnterOutputTask = res || []
                });
                $.post("${ctx}/showCenter/signLogList", {}, function(res){
                    self.signLog = res || []
                });
            },
            getRowRoll(roll){
                let self = this
                let row = roll.location.replace(/排\S*/,'排');
                let list = []
                $.post("${ctx}/showCenter/showInventoryByQu", { qu:'4' }, function(res){
                    let data = res || []
                    for(let i=0;i<data.length;i++){
                        if( row==data[i].location.replace(/排\S*/,'排') ) {
                            let vent = self.inToLocation(data[i])
                            if(vent.col<=20){
                                list.push(vent)
                            }
                        }
                    }
                    self.rollList = list
                    console.log('----------------------------list')
                    console.log(list)
                });
            },
            inToLocation(material){ //转换成位置
                let obj = {}
                let loc = material.location
                obj.row = loc.search(/排/)>-1 ? parseInt(loc.match(/[\d]+(?=排)/)?loc.match(/[\d]+(?=排)/)[0]:1) : 1;
                obj.col = loc.search(/列/)>-1 ? parseInt(loc.match(/[\d]+(?=列)/)?loc.match(/[\d]+(?=列)/)[0]:1) : 1;
                obj.lay = loc.search(/层/)>-1 ? parseInt(loc.match(/[\d]+(?=层)/)?loc.match(/[\d]+(?=层)/)[0]:1) : 1;
                obj.y = 28*(parseInt(obj.lay-1));
                obj.x = 0.8*(parseFloat(obj.lay)-1) + 1.4*(parseFloat(obj.col)-1);
                obj.area = material.location.match(/[A-z]+(?=区)/)[0];
                obj.data = JSON.parse(JSON.stringify(material));
                obj.colP = 2.5*(parseFloat(obj.lay)-1) + 5*(parseFloat(obj.col)-1);
                obj.layP = 11.5*(parseInt(obj.lay-1))
                return obj;
            },
            // onClickMask(){
            //     let self = this
            //     self.firstVideo = !self.firstVideo;
            //     self.togglePageVideo(self.firstVideo)
            // },
            getRollClass(val){
                if(val.data.inventoryLockStatus=='1'){
                    return 'image_roll1'
                }
                if(val.data.inventoryLockStatus=='2'){
                    return 'image_roll2'
                }
                if(val.data.inventoryLockStatus=='3'){
                    return 'image_roll3'
                }
                return 'image_roll'
            },
            //全屏
            onFullScreen(){
                if(!this.isFull){
                    this.isFull = true
                    setTimeout(()=>{
                        fullScreen(document.getElementById('app'))
                    })
                }
            },
            //获取总量数据
            getTopData(){
                let self = this ;
                $.post("${ctx}/showCenter/getTopDataInfoDay", {}, function(res){
                    self.outNum = parseInt(res['累计出库数']) || '0'
                    self.throughNum = parseInt(res['累计吞吐量']) || '0'
                    self.processNum = parseInt(res['累计加工量']) || '0'
                });
            },
            getRowCarLoc(list){
                let self = this
                let relationId = self.areaInfo[self.areaNum].relationId
                let rowCar = {};
                let axisy=0 , axisx=0;
                for(let i=0;i<list.length;i++){
                    if(relationId&&list[i].tagId==relationId){
                        rowCar = list[i]
                        break;
                    }
                }
                console.log(rowCar.fenceName)
                if(rowCar){
                    if(self.areaNum%2==0){
                        rowCar.axisy = parseFloat(rowCar.axisy) - 42
                    }else{
                        rowCar.axisy = parseFloat(rowCar.axisy) - 9
                    }
                    if(self.areaNum>=2){
                        rowCar.axisx = parseFloat(rowCar.axisx) - 169
                    }else{
                        rowCar.axisx = parseFloat(rowCar.axisx) - 314
                    }
                    axisx = parseFloat(((parseFloat(rowCar.axisx) / 148) * 100).toFixed(3))
                    axisy = parseFloat(((parseFloat(rowCar.axisy) / 39) * 100).toFixed(3))
                    if(axisy>96){
                        axisy = 96
                    }
                    if(axisx>99){
                        axisx=99
                    }
                }
                self.axisx = axisx
                self.axisy = axisy
            },
            togglePageVideo(key){
                if(key){
                    areaPlay8.removePlugin();
                    setTimeout(()=>{
                       areaPlay1 = new VideoPlay('down_video_box1','426fa905d1ea49b5a2cb7197e208d021')
                       areaPlay2 = new VideoPlay('down_video_box2','0ff287e0ae094be795579a3f2996089f')
                       areaPlay3 = new VideoPlay('down_video_box3','e48ecc5e28e44fd4a6b1c2afd05cb7aa')
                       areaPlay4 = new VideoPlay('line_video1','d416ab9999f842bfbcff9c76e6219313')
                       areaPlay5 = new VideoPlay('line_video2','fc06706437b34bbcb65ed9655306cfee')
                       areaPlay6 = new VideoPlay('line_video3','23760263412947cb803fa679a412b400')
                       areaPlay7 = new VideoPlay('line_video4','316f6d8367b749bcbd64d8013482c6a1')
                   },300)
                }else{
                    areaPlay1.removePlugin();
                    areaPlay2.removePlugin();
                    areaPlay3.removePlugin();
                    areaPlay4.removePlugin();
                    areaPlay5.removePlugin();
                    areaPlay6.removePlugin();
                    areaPlay7.removePlugin();
                    setTimeout(()=>{
                        areaPlay8 = new VideoPlay('out_video','43e7f65791dc47c0bddb9a546567d12f')
                    },300)
                }
            },
        },
        mounted(){
            this.getLastSendDetail();
            this.getTopData();
            this.isFull = isFullScreen()
            setInterval(()=>{
                this.getTopData();
                this.getLastSendDetail
            },1000*60*5)
        }
    })
    //顶部数字循环滚动
    let numScroll = 0;
    setInterval(()=>{
        $('.roll'+numScroll).leoTextAnimate({
            delay: 0, //延时出现时间
            autorun: true,
            fixed:[',',':','.','-','~'," "],
            start:'0',
        });
        numScroll = (numScroll+1)%3;
    },2000)
    /*
    * 文字滚动部分
    */
    let rollTimer = 0;
    let old = 0;
    var areaPlay = null;
    $(window).load(function () {
        webSocketClient();
        getRollText(true);
        areaPlay = new VideoPlay('out_video','43e7f65791dc47c0bddb9a546567d12f')
        setInterval(()=>{
            getRollText(false);
        },1000*60*5)
    });
    function getRollText(key){
        $.post("${ctx}/showCenter/getShowCenterMsg", {}, function(res){
            $('#roll_text').text(res)
            if(key){
                startRoll();
            }
        });
    }
    function startRoll(){
        var stopPos = "-"+$("#roll_text").width();
        var pos = 0;
        rollTimer = setInterval(function () {
            if(pos == parseInt(stopPos)){
                pos = $("#roll_text_box").width();
            }
            pos = pos-1;
            $("#roll_text").css("margin-left",pos)
        }, 30);
    }
    setInterval(()=>{
        let d = new Date()
        let times = d.getTime()
        let n= times%300000  //每隔5分钟重置一次
        if(n<50){
            if((times-old)>1000){
                clearInterval(rollTimer);
                startRoll();
            }
            old = times
        }
    },30)
    /*
    * 全屏部分
    */
    function fullScreen(element){
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
    function exitFullScreen() {
        var exitMethod = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullScreen;
        if (exitMethod) {
            exitMethod.call(document);
        } else if (typeof window.ActiveXObject !== "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
    function isFullScreen() {
        // 可视区域的高度
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        return screen.height == clientHeight
    }
    // 回来页面时刷新页面
    let hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' : null;
    let visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    let onVisibilityChange = function(){
        if (!document[hiddenProperty]) {
            // 页面激活
            location.reload();
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    window.addEventListener('resize',()=>{
        location.reload();
    })
    /*
    * 地磅部分
    */
    var socket;
    function webSocketClient(){
        if(typeof(WebSocket) == "undefined") {
            console.log("您的浏览器不支持WebSocket");
        }else{
            var socketUrl="wss://www.jdzt168.com/tsWebSocket/weighBridgeWebSocket"
            if(socket!=null){
                socket.close();
                socket=null;
            }
            socket = new WebSocket(socketUrl);
            //打开事件
            socket.onopen = function() {
                console.log("地磅websocket已打开");
            };
            //获得消息事件
            socket.onmessage = function(msg) {
                let obj = JSON.parse(msg.data);
                console.log(obj)
                if(obj.deviceID != null && obj.deviceID !== ''){//稳定
                    if(obj.deviceID==='01004'){
                        $("#outCarPlateNo").text(obj.carPlateNo||'');     //车号
                        $("#outBillCode").text(obj.billCode||'');     //任务单号
                        $("#outRoughWeight").text(obj.roughWeight ? obj.roughWeight+'吨' : '');    //毛重
                        $("#outTareWeight").text(obj.tareWeight ? obj.tareWeight+'吨' : '');    //皮重
                        $("#outRealWeight").text(obj.realWeight ? obj.realWeight+'吨' : '');   //净重
                    }
                    if(obj.deviceID==='01003'){
                        $("#outCarPlateNo2").text(obj.carPlateNo||'');     //车号
                        $("#outBillCode2").text(obj.billCode||'');     //任务单号
                        $("#outRoughWeight2").text(obj.roughWeight ? obj.roughWeight+'吨' : '');    //毛重
                        $("#outTareWeight2").text(obj.tareWeight ? obj.tareWeight+'吨' : '');    //皮重
                        $("#outRealWeight2").text(obj.realWeight ? obj.realWeight+'吨' : '');   //净重
                    }
                    if(obj.deviceID==='01001'){
                        $("#inCarPlateNo").text(obj.carPlateNo||'');     //车号
                        $("#inBillCode").text(obj.billCode||'');     //任务单号
                        $("#inRoughWeight").text(obj.roughWeight ? obj.roughWeight+'吨' : '');    //毛重
                        $("#inTareWeight").text(obj.tareWeight ? obj.tareWeight+'吨' : '');    //皮重
                        $("#inRealWeight").text(obj.realWeight ? obj.realWeight+'吨' : '');   //净重
                    }
                }
            };
            //关闭事件
            socket.onclose = function() {
                console.log("地磅websocket已关闭");
            };
            //发生了错误事件
            socket.onerror = function() {
                console.log("地磅websocket发生了错误");
            }
        }
    }
    class VideoPlay {
        constructor(id,code){
            this.id = id;
            this.code = code;
            this.initCount = 0;
            this.pubKey = '';
            this.oWebControl = null;
            this.domWidth = document.getElementById(id).offsetWidth;
            this.domHeight = document.getElementById(id).offsetHeight+1;
            this.left = 0;
            this.top = 0;
            let iframe = $('.curholder>iframe',myDocument)[0];
            if(iframe){
                this.left = iframe.getBoundingClientRect().left
                this.top = iframe.getBoundingClientRect().top
            }else {
                // 那么说明还是要做偏移
                if (window !== window.top) {
                    this.left = 137;
                    this.top = 72;
                }
            }
            this.initPlugin()
            this.addEvent()
        }
        isClean(){
            console.log('------------------------------------id')
            console.log(this.id)
        }
        initPlugin(){
            this.oWebControl = new WebControl({
                szPluginContainer: this.id,                         // 指定容器id
                iServicePortStart: 15900,                           // 指定起止端口号，建议使用该值
                iServicePortEnd: 15909,
                szClassId:"23BF3B0A-2C56-4D97-9C03-0CB103AA8F11",   // 用于IE10使用ActiveX的clsid
                cbConnectSuccess:  () => {                     // 创建WebControl实例成功
                    this.isClean();
                    this.oWebControl.JS_StartService("window", {         // WebControl实例创建成功后需要启动服务
                        dllPath: "./VideoPluginConnect.dll"         // 值"./VideoPluginConnect.dll"写死
                    }).then( ()=> {                           // 启动插件服务成功
                        this.isClean();
                        this.oWebControl.JS_SetWindowControlCallback({   // 设置消息回调
                            cbIntegrationCallBack: ()=>{}
                        });
                        this.oWebControl.JS_CreateWnd(this.id, this.domWidth , this.domHeight ).then( ()=> { //JS_CreateWnd创建视频播放窗口，宽高可设定
                            this.oWebControl.JS_SetDocOffset({
                                left: this.left,
                                top: this.top,
                            });  // 更新插件窗口位置
                            this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
                            this.isClean();
                            this.init();  // 创建播放实例成功后初始化
                        });
                    },  () => { // 启动插件服务失败
                    });
                },
                cbConnectError: () => { // 创建WebControl实例失败
                    this.oWebControl = null;
                    $("#"+this.id).html("插件未启动，正在尝试启动，请稍候...");
                    this.oWebControl.JS_WakeUp("VideoWebPlugin://"); // 程序未启动时执行error函数，采用wakeup来启动程序
                    this.initCount ++;
                    if (this.initCount < 3) {
                        setTimeout( () => {
                            this.initPlugin();
                        }, 3000)
                    } else {
                        $("#"+this.id).html("插件启动失败，请检查插件是否安装！");
                    }
                },
                cbConnectClose: (bNormalClose) => {
                    // 异常断开：bNormalClose = false
                    // JS_Disconnect正常断开：bNormalClose = true
                    console.log("cbConnectClose");
                    this.oWebControl = null;
                }
            });
        }
        //初始化
        init(){
            this.getPubKey(() => {
                ////////////////////////////////// 请自行修改以下变量值	////////////////////////////////////
                let appkey = "27265789";                           //综合安防管理平台提供的appkey，必填
                let secret = this.setEncrypt("b1wybeJMF2IpYW6ykT57");   //综合安防管理平台提供的secret，必填
                let ip = "10.124.204.18";                           //综合安防管理平台IP地址，必填
                let playMode = 0;                                  //初始播放模式：0-预览，1-回放
                let port = 443;                                    //综合安防管理平台端口，若启用HTTPS协议，默认443
                let snapDir = "D:\\SnapDir";                       //抓图存储路径
                let videoDir = "D:\\VideoDir";                     //紧急录像或录像剪辑存储路径
                let layout = "1x1";                                //playMode指定模式的布局
                let enableHTTPS = 1;                               //是否启用HTTPS协议与综合安防管理平台交互，这里总是填1
                let encryptedFields = 'secret';					   //加密字段，默认加密领域为secret
                let showToolbar = 0;                               //是否显示工具栏，0-不显示，非0-显示
                let showSmart = 0;                                 //是否显示智能信息（如配置移动侦测后画面上的线框），0-不显示，非0-显示
                let buttonIDs = "";  //自定义工具条按钮
                ////////////////////////////////// 请自行修改以上变量值	////////////////////////////////////
                this.oWebControl.JS_RequestInterface({
                    funcName: "init",
                    argument: JSON.stringify({
                        appkey: appkey,                            //API网关提供的appkey
                        secret: secret,                            //API网关提供的secret
                        ip: ip,                                    //API网关IP地址
                        playMode: playMode,                        //播放模式（决定显示预览还是回放界面）
                        port: port,                                //端口
                        snapDir: snapDir,                          //抓图存储路径
                        videoDir: videoDir,                        //紧急录像或录像剪辑存储路径
                        layout: layout,                            //布局
                        enableHTTPS: enableHTTPS,                  //是否启用HTTPS协议
                        encryptedFields: encryptedFields,          //加密字段
                        showToolbar: showToolbar,                  //是否显示工具栏
                        showSmart: showSmart,                      //是否显示智能信息
                        buttonIDs: buttonIDs                       //自定义工具条按钮
                    })
                }).then( (oData) => {
                    this.oWebControl.JS_Resize( this.domWidth , this.domHeight );  // 初始化后resize一次，规避firefox下首次显示窗口后插件窗口未与DIV窗口重合问题
                    this.isClean();
                    this.startPreview();
                });
            });
        }
        //开始播放
        startPreview(newCode){
            let cameraIndexCode  = this.code     //获取输入的监控点编号值，必填
            if(newCode){
                cameraIndexCode  = newCode
            }
            let streamMode = 0;                                     //主子码流标识：0-主码流，1-子码流
            let transMode = 1;                                      //传输协议：0-UDP，1-TCP
            let gpuMode = 0;                                        //是否启用GPU硬解，0-不启用，1-启用
            let wndId = -1;                                         //播放窗口序号（在2x2以上布局下可指定播放窗口）
            cameraIndexCode = cameraIndexCode.replace(/(^\s*)/g, "");
            cameraIndexCode = cameraIndexCode.replace(/(\s*$)/g, "");
            this.oWebControl.JS_RequestInterface({
                funcName: "startPreview",
                argument: JSON.stringify({
                    cameraIndexCode:cameraIndexCode,                //监控点编号
                    streamMode: streamMode,                         //主子码流标识
                    transMode: transMode,                           //传输协议
                    gpuMode: gpuMode,                               //是否开启GPU硬解
                    wndId:wndId                                     //可指定播放窗口
                })
            })
        }
        removePlugin(){
            if (this.oWebControl != null){
                this.oWebControl.JS_HideWnd();   // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
                this.oWebControl.JS_Disconnect().then(function(){  // 断开与插件服务连接成功
                },() => {});// 断开与插件服务连接失败
            }
        }
        //获取公钥
        getPubKey (callback) {
            this.oWebControl.JS_RequestInterface({
                funcName: "getRSAPubKey",
                argument: JSON.stringify({
                    keyLength: 1024
                })
            }).then( (oData) => {
                if (oData.responseMsg.data) {
                    this.pubKey = oData.responseMsg.data;
                    callback()
                }
            })
        }
        // RSA加密
        setEncrypt (value) {
            let encrypt = new JSEncrypt();
            encrypt.setPublicKey(this.pubKey);
            return encrypt.encrypt(value);
        }
        addEvent(){
            // 监听标签关闭事件
            $(window).unload( () => {
                if (this.oWebControl != null){
                    this.oWebControl.JS_HideWnd();   // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
                    this.oWebControl.JS_Disconnect().then(function(){  // 断开与插件服务连接成功
                    },() => {});// 断开与插件服务连接失败
                }
            });
            // 监听resize事件
            $(window).resize( () => {
                if (this.oWebControl != null) {
                    this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
                    this.setWndCover()
                }
            });
            // 监听滚动条scroll事件
            $(window).scroll( () => {
                if (this.oWebControl != null) {
                    this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
                    this.setWndCover()
                }
            });
            //监听页面隐藏/显示事件
            let app = $('.curholder',myDocument)[0];
            if(app){
                let observer = new MutationObserver((mutations) => {
                    if(app.style.display=='none'){
                        if (this.oWebControl != null){
                            this.oWebControl.JS_HideWnd();   // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
                            this.oWebControl.JS_Disconnect().then(function(){  // 断开与插件服务连接成功
                            },() => {});// 断开与插件服务连接失败
                        }
                    }else{
                        this.initPlugin();
                    }
                });
                observer.observe(app, { attributes:true });
            }
            let app2 = $('#jerichotab',myDocument)[0];
            if(app2){
                let observer2 = new MutationObserver((mutations) => {
                    if(app2.style.display=='none'){
                        if (this.oWebControl != null){
                            this.oWebControl.JS_HideWnd();   // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
                            this.oWebControl.JS_Disconnect().then(function(){  // 断开与插件服务连接成功
                            },() => {});// 断开与插件服务连接失败
                        }
                    }
                });
                observer2.observe(app2, { attributes:true });
            }
        }
        setWndCover() {
            let iWidth = $(window).width();
            let iHeight = $(window).height();
            let oDivRect = $("#"+this.id).get(0).getBoundingClientRect();
            let width = this.domWidth;
            let height = this.domHeight;

            let iCoverLeft = (oDivRect.left < 0) ? Math.abs(oDivRect.left): 0;
            let iCoverTop = (oDivRect.top < 0) ? Math.abs(oDivRect.top): 0;
            let iCoverRight = (oDivRect.right - iWidth > 0) ? Math.round(oDivRect.right - iWidth) : 0;
            let iCoverBottom = (oDivRect.bottom - iHeight > 0) ? Math.round(oDivRect.bottom - iHeight) : 0;

            iCoverLeft = (iCoverLeft > width) ? width : iCoverLeft;
            iCoverTop = (iCoverTop > height) ? height : iCoverTop;
            iCoverRight = (iCoverRight > width) ? width : iCoverRight;
            iCoverBottom = (iCoverBottom > height) ? height : iCoverBottom;

            this.oWebControl.JS_RepairPartWindow(0, 0, width+1, height);    // 多1个像素点防止还原后边界缺失一个像素条
            if (iCoverLeft != 0) {
                this.oWebControl.JS_CuttingPartWindow(0, 0, iCoverLeft, height);
            }
            if (iCoverTop != 0) {
                this.oWebControl.JS_CuttingPartWindow(0, 0, width+1, iCoverTop+1);    // 多剪掉一个像素条，防止出现剪掉一部分窗口后出现一个像素条
            }
            if (iCoverRight != 0) {
                this.oWebControl.JS_CuttingPartWindow(width - iCoverRight, 0, iCoverRight, height);
            }
            if (iCoverBottom != 0) {
                this.oWebControl.JS_CuttingPartWindow(0, height - iCoverBottom, width, iCoverBottom);
            }
        }
    }
</script>
</body>
</html>