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
	<link rel="stylesheet" href="${ctxStatic}/bootstrap/bsie/css/animate.css">
	<script type="text/javascript" src="${ctxStatic}/jquery/jquery.leoTextAnimate.js"></script>
	<script type="text/javascript" src="${ctxStatic}/echarts/echarts.min-5.4.0.js"></script>
	<script type="text/javascript" src="${ctxStatic}/vue/vue.dev.js"></script>
	<script type="text/javascript" src="${ctxStatic}/echarts/jsencrypt.min.js"></script>
	<script type="text/javascript" src="${ctxStatic}/echarts/jsWebControl-1.0.0.min.js"></script>
</head>
<body style="background: #f7f7f7;">
<style>
	:root {	--num: 3;  --s: 1s; --time:1 }
	.icon-th-list{ display: none; }
	html,body,#app{ width: 100%; height: 100%; overflow: hidden; background:#cccccc; }
	#app{ background: 0% 0% / 200% 100% no-repeat url("${ctxStatic}/images/show_bg2.png"); padding: 4.4% 0.5% 2.5% 3%; box-sizing: border-box; position: relative; }
	.container{ width: 100% ; height: 100%; display: flex; flex-direction: column; }
	.title{ flex:1;  display: flex; }
	.title_left{ flex:2; margin-right: 0.6%; display: flex; }
	.title_right{ flex:3; display: flex; }
	.items{ flex:1; display: flex; }
	.items:last-child{ margin-left: 1.5%; }
	.item{ flex:1; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative; padding-left: 24px; display: flex; flex-direction: column; justify-content: center; line-height: 1.8vh; font-size: 1.4vh; color: white; }
	.item:last-child{ margin-left: 1.5%; }
	.item::after{ content:''; width: 4px; height: 68%; position: absolute; top: 0; bottom: 0; left: 8px; margin: auto 0; background: #4285F4; border-radius: 1px; }
	/*.item .number{ font-size: 16px; font-weight: bold; }*/
	/*.TextAnimate>span>i{ box-sizing: border-box; border-radius: 1px; border: 1px solid rgb(77, 208, 225); padding: 0px 1px 0px 1px; margin: 0 1px; font-weight: bold; }*/
	.body{ flex:16; margin-top: 0.6%; display: flex; }
	.left{ flex:2; margin-right: 0.6%; display: flex; flex-direction: column; }
	.right{ flex:3; display: flex; flex-direction: column; }
	.line{ flex:1; margin-bottom: 1.5%; display: flex; }
	.line:last-child{ margin-bottom: 0; }
	.card{ flex:1; background: rgba(255,255,255,0.1); border-radius: 5px; position: relative; }
	.card:last-child{ margin-left: 1.5%; }
	.card_title{ width: 100%; height: 30px; line-height: 30px; box-sizing: border-box; font-size: 1.3vh; position: absolute; top: 0; left: 0; color: white; padding-left: 22px; }
	.card_title::after{ width: 9px; height: 9px; border-radius: 2px; content: ''; background: #4285F4; position: absolute; top: 0; bottom: 0; left: 7px; margin: auto 0;  }
	.navs{ min-width: 36%; height: 24px;line-height: 24px; float: right; margin: 3px 9px 0 0; display: flex; }
	.btn{ flex:1; background: white; border: none; color: #666666; padding: 0; }
	.btn span{ display: inline-block; transform: scale(0.92); }
	.left_btn{ border-radius: 5px 0 0 5px; }
	.right_btn{ border-radius: 0 5px 5px 0; }
	.active_btn{ background: #4285F4; color: white; transform: scale(1.03); font-weight: bold; }
	.echarts{ position: absolute; height: 100%; width: 100%; top: 0; left: 0; }
	.up{ flex:50; background: rgba(255,255,255,0.1); margin-bottom: 1%; border-radius: 5px; display: flex; box-sizing: border-box; overflow: hidden; }
	.plat{ flex:2; position: relative; }
	.plat_video{ flex:1; border-radius: 4px; display: flex; flex-direction: column; overflow:hidden; padding: 1.2%; }
	.platform_name{ height: 32px; line-height: 30px; background: #4285F4; text-align: center; padding-left: 15px; color: white; border-radius: 0 0 4px 4px; }
	.platform_name span{ display: inline-block; margin-right: 5px; }
	.platform_name span:first-child{ font-size: 16px; }
	.platform_video{ flex:1; background: black; border-radius: 4px 4px 0 0; }
	.plat_title div{ transform: scale(0.8); display: inline-block; float: right; line-height: 30px; padding-left: 12px; font-size: 16px; margin-right: 2px; color: rgba(255,255,255,0.8); position: relative; }
	.plat_title div::after{ content: ''; width: 14px; height: 14px; background: pink; box-sizing: border-box; border-radius: 2px; position: absolute; top: 0; left: -10px; bottom: 0; margin: auto 0; border:none; }
	.plat_title div:nth-child(2)::after{ background: transparent; border: 1px solid rgba(255,255,255,0.3); }
	.plat_title div:nth-child(3)::after{ background: #FDB963; }
	.plat_title div:nth-child(4)::after{ background: #66CC66; }
	.plat_title div:nth-child(5)::after{ background: #4285F4; }
	.plat_title div:nth-child(6)::after{ background: rgb(239, 83, 80); }
	.plat_box{ height: calc(100% - 30px); margin-top: 30px; display: flex;flex-direction: column; box-sizing: border-box; padding: 0 0 1.6% 1.5%; }
	.plat_line{ flex: 1; display: flex; justify-content: space-around; }
	.plat_line:last-child{ margin-top: 2%; }
	.plat_info{ width: 15%; border:1px solid rgba(255,255,255,0.4); overflow: hidden; box-sizing: border-box; padding-top: 0.5%; color: white; border-radius: 4px; display: flex; flex-direction: column;align-items: center;font-size: 12px;line-height: 16px; }
	/*.name,.carNum{ transform: scale(0.8); }*/
	.carNum{ font-size: 12px; }
	.carName{ background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/car_empty.png"); width: 90%; text-align: center; height:24px;  }
	.carName.busy{ background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/car_busy.png"); }
	.carName div{ font-size: 13px; display: inline-block; width: 120%; line-height: 23px; margin-left: -10%; }
	.carShow{ flex: 1; width: 92%; display: flex; flex-wrap: wrap; box-sizing: border-box; padding: 2% 3%; }
	.car_img{ width: 18%; height: 48%; background: 0 0 / 100% 100% url("${ctxStatic}/images/car.png");margin: 0 1%; }
	.task_busy{ background: rgb(239, 83, 80); border: none; }
	.task_normal{ background: #4285F4; border: none; }
	.task_easy{ background: #66CC66; border: none; }
	.down{ flex:102; background: rgba(255,255,255,0.1); border-radius: 5px; display: flex; overflow: hidden; }
	.down_nav{ flex: 1; position: relative; }
	.down_show{ flex:3; position: relative; }
	.park_cars{ height: calc(100% - 30px); margin-top: 30px; position: relative; }
	.park_line{ width: 3px; height: 98%; display: flex;flex-direction: column;justify-content: space-around; background: linear-gradient(180deg, rgba(255,255,255,0.41) 0%, #FFFFFF 52%, rgba(255,255,255,0.25) 100%); position: absolute; top: 0; left: 20px;  }
	.pot{ width: 5px;height: 5px; border-radius: 50%;background: #04ABFF;margin-left: -1px; position: relative; z-index: 3; }
	.pot::after{ content: ''; width: 11px;height: 11px; border-radius: 50%; background: rgba(4,171,255,0.6);position: absolute; top:-3px;left: -3px;z-index: 2;}
	.pot::before{ content: ''; width: 17px;height: 17px; border-radius: 50%; background: rgba(4,171,255,0.2);position: absolute; top:-6.2px;left: -6.2px;z-index: 1;}
	.pot1{ width: 5px;height: 5px; border-radius: 50%;background: rgba(0,230,118,1);margin-left: -1px; position: relative; z-index: 3; }
	.pot1::after{ content: ''; width: 11px;height: 11px; border-radius: 50%; background: rgba(0,230,118,0.6);position: absolute; top:-3px;left: -3px;z-index: 2;}
	.pot1::before{ content: ''; width: 17px;height: 17px; border-radius: 50%; background: rgba(0,230,118,0.2);position: absolute; top:-6.2px;left: -6.2px;z-index: 1;}
	.park_car{ width:calc(100% - 36px); height: 98%; position: absolute; top: 0; right: 0; z-index: 2; display: flex;justify-content: space-around;flex-direction: column; }
	.car_box{ width: 100%;flex: 1; margin: 2px 0; display: flex; align-items: center; overflow: hidden; color: white; font-size: 12px; line-height: 12px; background: rgba(128, 203, 196,0.3); border-radius: 4px; }
	.info_left{ flex: 1;padding-left: 6px; }
	.info_left div{ overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis; }
	.info_left div:nth-child(1){ font-size: 13px; font-weight: bold; }
	.info_left div:nth-child(3){ font-size: 12px; color: #FF9800; transform: scale(0.8); }
	.info_right{ flex:3; position: relative; height: 90%; overflow: hidden; }
	.three_box{ width: 100%; height: 200% ;}
	.three_box div{ transform: scale(0.85); height: calc(100% / 6); overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis; }
	.three_box div:nth-child(3n+1){ color: #4285F4; }
	.down_body{ width: 100%; height: calc(100% - 30px); margin-top: 30px; position: relative; }
	.imgs,.infos{ width: 100%; height: 100%; position: absolute; top: 0;left: 0; }
	.mark{ width: 100%; height: 100%; background: center / 100% 160% no-repeat url("${ctxStatic}/images/pop_bg.png"); opacity: 0.99; }
	.show_img{ position: absolute; top: 0; left: 0; opacity: 0; }
	.icon_zn_01_dz{ top: 64%; left: 67.8%; width: 12%; height: 18%; }
	.icon_zn_02_zdj{ top: 70.5%; left: 63%; width: 2.5%; height: 8%; }
	.icon_zn_03_db{ top: 43.5%; left: 73.3%; width: 21%; height: 30%; }
	.icon_zn_04_ydp{ top: 32%; left:94.7%; width: 4%; height: 9.6%; }
	.icon_zn_06_szyt{ top: 21%; left:60.5%; width: 14%; height: 11%; }
	.icon_zn_07_hc{ top: 14.5%; left:46.5%; width: 16%; height: 33%; }
	.icon_zn_08_zndb{ top: 40%; left:43%; width: 7%; height: 11%; }
	.icon_zn_09_db{ top: 10%; left:27.7%; width: 19%; height: 20%; }
	.icon_zn_10_zzzd{ top: 22%; left: 22%; width: 2.5%; height: 7%; }
	.icon_calc{ top: 26%; left:79.5%; width: 5%; height: 8%; }
	.icon_dlzy{ top: 33%; left:78%; width: 15%; height: 17%; }
	.icon_zn_11_ma{ top: 47%; left:61.5%; width: 11%; height: 13%; }
	.icon_zn_12_ma{ top: 25%; left:34%; width: 11%; height: 14%; }
	.icon_zn_13_scr{ top: 11.2%; left:60%; width: 3%; height: 8%; }
	.icon_zn_14_do{ top: 25%; left:13%; width: 8%; height: 10%; }
	.icon_zn_15_dir{ top: 6%; left:52%; width: 41%; height: 32%; }
	.dp_title{ width: 24%; height: 14%; display: flex; justify-content: center; align-items: center; color: #B3E5FC; font-size: 1.4vw; font-weight: bolder; position: absolute; top: 40%; left:30%; background: rgba(178, 235, 242,0.05); border-radius: 4px; }
	.dp_info{ opacity: 0; width: 42%; height: 25%;  position: absolute;  background: center / 100% 100% url("${ctxStatic}/images/pop_yewu_zndb1.png"); display: flex; justify-content: center; align-items: center; }
	.dp_info_box{ width: 93%; height: 89%; background: rgba(1,1,79,0.5); display: flex; flex-direction: column; }
	.left_down{ left: 2%; bottom: 4%; }
	.left_up{ left: 2%; top: 2%; }
	.right_up{ top: 2%; right: 2%; }
	.right_down{ bottom: 4%; right: 2%; }
	.item_title{ color: white; font-size: 1.3vh; padding-left: 10px; }
	.item_body{ flex: 1; display: flex; overflow: hidden; }
	.dp_img{ flex: 2; clip-path: circle(40% at center); background: 100% 100% / 98% 96% no-repeat url("${ctxStatic}/images/icon_zn__00_img.png");  }
	.dp_img_info{ flex: 5; overflow: hidden; color: white; padding-left:10px; height: 90%; }
	.footer{ width: 100%; height: 2.5vw; position: absolute; bottom: 0; left: 0; background: 30% 54% / 110% 130% no-repeat url("${ctxStatic}/images/line_bottom.png"); }
	.icon_bottom{ position: absolute; top: 22%; left: 18.5%; width: 7%; }
	.icon_bottom:nth-child(2){ top: 22%; width: 7%; left: 65.5%; }
	.head{ width: 100%; height: 4.4vw; box-sizing:border-box; display: flex; align-items: flex-end; position: absolute; top: 0; left: 0; padding: 0 0.5% 0 3%; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/lineL.png"); }
	.head_left{ flex: 2; display: flex; justify-content: center; align-items: center; margin-right: 0.6%; height: 56%; background: 0 -20% / 45% 60% no-repeat url("${ctxStatic}/images/arr_right.png") , 100% -20% / 45% 60% no-repeat url("${ctxStatic}/images/arr_left.png"); }
	.head_right{ flex: 3;  height: 56%; display: flex; align-items: center; background: 0 -20% / 40% 60% no-repeat url("${ctxStatic}/images/arr_right.png"); }
	.head_title{ margin: 0 20px; color: #4285F4; font-size: 1vw; font-weight: bolder; }
	.dot_right{ display: flex; margin-left: 10%; position: absolute; top: -20%; right: 12%; }
	.trleft{ flex: 10;display: flex;justify-content: center;align-items: center; position: relative; }
	.m_left,.m_right{ display: flex; }
	.mkl{ width: 3px; height: 12px; margin: 0 5px; background:rgba(66,133,244,0.2); border-radius: 5px; transform: rotateZ(36deg); }
	.mkr{ width: 3px; height: 12px; margin: 0 5px; background:rgba(66,133,244,0.2); border-radius: 5px; transform: rotateZ(-36deg); }
	.bsize{ width: 5px; height: 24px; transform: rotateZ(-45deg); }
	.info_item{ height: calc(100% / 6); display: flex; align-items: center; font-size: 12px; overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis; }
	.item_box{ width: 100%; height: 200%; }
	.hide_echart{ opacity: 0;  z-index: -2; }
	.opaticy_0{ opacity: 0; }
	.opaticy_1{ opacity: 1;}
	.color_red{ color: red; }
	.table_item{ display:flex; height: calc(100% / 8); }
	.table_item>div{ flex: 1;font-size: 12px; text-align: center; border-bottom: 1px solid rgba(66, 133, 244, 0.4); border-left: 1px solid rgba(66, 133, 244, 0.4); }
	.table_box{ border-right: 1px solid rgba(66, 133, 244, 0.4); border-top: 1px solid rgba(66, 133, 244, 0.4); }
	.three_box div span:nth-child(1){ display: inline-block; width: 75px; }
	.status_desc{ font-size: 12px;color: #FDB963; overflow: hidden; white-space: nowrap;text-overflow: ellipsis; -o-text-overflow: ellipsis; }
	.dp_info_echart{ width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
	.logo{ width: 15%; height: 7%; position: absolute; top: 0; right: 0; background: 0% 0% / 200% 100% no-repeat url("${ctxStatic}/images/logo05.png"); }
	.step_anma1{ animation: anma 0.9s linear 1s 3 forwards; }
	.step_anma2{ animation: anma1 0.9s linear 1s 3 forwards; }
	.slideBox{ animation: move calc(var(--num) * var(--s)) steps(var(--num)) infinite; }
	.slideBox1{ animation: move 4s steps(4) infinite; }
	.slideItem{ animation: ItemMove calc(var(--s)) infinite; }
	.dot1{ animation: dot1 calc(var(--time) * 1s) linear infinite; }
	.dot2{ animation: dot2 calc(var(--time) * 1s) linear infinite; }
	.dot3{ animation: dot3 calc(var(--time) * 1s) linear infinite; }
	.dot4{ animation: dot4 calc(var(--time) * 1s) linear infinite; }
	.shina{ animation: shina 2s linear infinite; }
	.shina1{ animation: shina 2s linear 1s infinite; }
	.bounceInLeftzt{ animation: bounceInLeft; animation-duration: 3s; animation-delay: 0s; animation-fill-mode: forwards;  }
	.bounceInRightzt{ animation: bounceInRight; animation-duration: 3s; animation-delay: 0s; animation-fill-mode: forwards;  }
	.bounceInUpzt{ animation: bounceInUp; animation-duration: 2s; animation-delay: 1s; animation-fill-mode: forwards;  }
	.bounceInDownzt{ animation: bounceInDown; animation-duration: 2s; animation-delay: 1s; animation-fill-mode: forwards;  }
	.bounceOutzt{ animation: bounceOut; animation-duration: 2s; animation-delay: 2s; animation-fill-mode: forwards;  }
	.rubberBandzt{ animation: heartBeat; animation-duration: 2s; }
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
	@keyframes anma{
		0%{
			opacity: 1;
			transform: scale(1);
		}
		50%{
			opacity: 0.8;
			transform: scale(1.4);
		}
		100%{
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes anma1{
		0%{
			opacity: 1;
			transform: scale(1);
		}
		50%{
			opacity: 0.8;
			transform: scale(1.4);
		}
		100%{
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes shina {
		0%{
			opacity: 0.4;
			transform: scale(1);
		}
		50%{
			opacity: 1;
			transform: scale(1.2);
		}
		100%{
			opacity: 0.4;
			transform: scale(1);
		}
	}
	.roll_text_box{ width: 80%; height: 5%; position: absolute; top:9%; right: 0; transform: translateX(50%); display: flex; align-items: center; overflow: hidden; }
	#roll_text{ font-size: 28px; color: white; font-family: "Eras Bold ITC"; white-space: nowrap; }
	.full_screen{ width:20px; height: 20px;  position: absolute; top: 4%; left: 1%; z-index: 999; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/isfull.png"); cursor: pointer; }
	.not_full{ background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/notfull.png"); }
	video{ width: calc(100% - 10px); height: 100%; margin-left: 10px; }
</style>
<div id="app">
	<div class="full_screen" @click="onFullScreen()"></div>
	<div class="logo"></div>
	<div class="roll_text_box" id="roll_text_box">
		<span id="roll_text"></span>
	</div>
	<div class="head">
		<div class="head_left">
			<div class="m_left">
				<div class="mkl dot2"></div>
				<div class="mkl dot3"></div>
				<div class="mkl dot4"></div>
				<div class="mkl dot1"></div>
			</div>
			<div class="head_title">园区总览</div>
			<div class="m_right">
				<div class="mkr dot1"></div>
				<div class="mkr dot4"></div>
				<div class="mkr dot3"></div>
				<div class="mkr dot2"></div>
			</div>
		</div>
		<div class="head_right">
			<div class="trleft">
				<div class="m_left" >
					<div class="mkl dot2"></div>
					<div class="mkl dot3"></div>
					<div class="mkl dot4"></div>
					<div class="mkl dot1"></div>
				</div>
				<div class="head_title">调度中心</div>
				<div class="m_right">
					<div class="mkr dot1"></div>
					<div class="mkr dot4"></div>
					<div class="mkr dot3"></div>
					<div class="mkr dot2"></div>
				</div>
				<div class="dot_right">
					<div class="mkr bsize dot2 "></div>
					<div class="mkr bsize dot3 "></div>
					<div class="mkr bsize dot4 "></div>
					<div class="mkr bsize dot1 "></div>
				</div>
			</div>
			<div style="flex: 3;"></div>
		</div>
	</div>
	<div class="container">
		<div class="title">
			<div class="title_left">
				<div class="items">
					<div class="item">
						<div>库存量</div>
						<div><span class="number roll0">{{inventoryNum}}</span> 吨</div>
					</div>
					<div class="item">
						<div>客户数</div>
						<div><span class="number roll1">{{customerNum}}</span> 家</div>
					</div>
				</div>
				<div class="items">
					<div class="item">
						<div>当日出库量</div>
						<div><span class="number roll2">{{todayOutNUm}}</span> 吨</div>
					</div>
					<div class="item">
						<div>当日入库量</div>
						<div><span class="number roll3">{{todayInNum}}</span> 吨</div>
					</div>
				</div>
			</div>
			<div class="title_right">
				<div class="items" style="flex: 1;">
					<div class="item">
						<div>当日加工量</div>
						<div><span class="number roll4">{{todayProcessNum}}</span> 吨</div>
					</div>
					<div class="item" style="opacity: 0;">
						<div>库存量</div>
						<div>123,456.00 吨</div>
					</div>
				</div>
				<div class="items" style="flex: 2;"></div>
			</div>
		</div>
		<div class="body">
			<div class="left">
				<div class="line">
					<div class="card">
						<div class="card_title">
							库存分析
						</div>
						<div class="navs">
							<button class="btn left_btn" :class="{ active_btn:btnFlag1 }">
								<span>库存占比</span>
							</button>
							<button class="btn right_btn" :class="{ active_btn:!btnFlag1 }">
								<span>库存趋势</span>
							</button>
						</div>
						<div class="echarts" id="inventory_analyse" :class="{ hide_echart:!btnFlag1 }"></div>
						<div class="echarts" id="inventory_trend" :class="{ hide_echart:btnFlag1 }"></div>
					</div>
					<div class="card">
						<div class="card_title">
							出入库分析
						</div>
						<div class="echarts" id="in_out_analyse"></div>
					</div>
				</div>
				<div class="line">
					<div class="card">
						<div class="card_title">
							吞吐量分析
						</div>
						<div class="echarts" id="throughput_analyse"></div>
					</div>
					<div class="card" >
						<div class="card_title">
							加工分析
						</div>
						<div class="echarts" id="process_analyse"></div>
					</div>
				</div>
				<div class="line">
					<div class="card" >
						<div class="card_title">
							结算分析
						</div>
						<div class="echarts" id="settlement_analyse"></div>
					</div>
					<div class="card" >
						<div class="card_title">
							客户分析
						</div>
						<div class="navs">
							<button class="btn left_btn" :class="{ active_btn:btnFlag2 }">
								<span>库存分析</span>
							</button>
							<button class="btn right_btn" :class="{ active_btn:!btnFlag2 }">
								<span>周转率分析</span>
							</button>
						</div>
						<div class="echarts" id="customer_analyse" :class="{ hide_echart:!btnFlag2 }" ></div>
						<div class="echarts" id="customer_rate" :class="{ hide_echart:btnFlag2 }"></div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="up">
					<div class="plat">
						<div class="card_title plat_title">
							<span>调度中心</span>
							<div class="status">无作业</div>
							<div class="status">正在作业</div>
							<div class="status">作业畅通</div>
							<div class="status">作业正常</div>
							<div class="status">作业繁忙</div>
						</div>
						<div class="plat_box">
							<div class="plat_line">
								<div class="plat_info" :class="platStatus(plat)" v-for="plat in platformList1" :key="plat.id">
									<div class="name">{{plat.platformName||''}}</div>
									<div class="carNum" :class="{opaticy_0: !plat.proWorkTaskDetailList.length }">
										{{ plat.proWorkTaskDetailList.length }}
										辆
									</div>
									<div class="carName" :class="{opaticy_0: !plat.carPlateNo&&!plat.proWorkTaskDetailList.length , busy:plat.carPlateNo }" >
										<div>{{plat.carPlateNo||''}}</div>
									</div>
									<div class="carShow">
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>0) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>1) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>2) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>3) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>4) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>5) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>6) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>7) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>8) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>9) }"></div>
									</div>
								</div>
							</div>
							<div class="plat_line">
								<div class="plat_info" :class="platStatus(plat)" v-for="plat in platformList2" :key="plat.id">
									<div class="name">{{plat.platformName||''}}</div>
									<div class="carNum" :class="{opaticy_0: !plat.proWorkTaskDetailList.length }">
										{{ plat.proWorkTaskDetailList.length }}
										辆车
									</div>
									<div class="carName" :class="{opaticy_0: !plat.carPlateNo&&!plat.proWorkTaskDetailList.length , busy:plat.carPlateNo }" >
										<div>{{plat.carPlateNo||''}}</div>
									</div>
									<div class="carShow">
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>0) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>1) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>2) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>3) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>4) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>5) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>6) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>7) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>8) }"></div>
										<div class="car_img" :class="{ opaticy_0 : !(plat.proWorkTaskDetailList.length>9) }"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="plat_video">
						<div id="platform_video" class="platform_video"></div>
						<div class="platform_name">
							<span id="platName">一库月台1</span>
						</div>
					</div>
				</div>
				<div class="down">
					<div class="down_nav">
						<div class="card_title">
							园区车辆分布
						</div>
						<div class="park_cars">
							<div class="park_line">
								<div class="pot shina"></div>
								<div class="pot1 shina1"></div>
								<div class="pot shina"></div>
								<div class="pot1 shina1"></div>
								<div class="pot shina"></div>
								<div class="pot1 shina1"></div>
								<div class="pot shina"></div>
								<div class="pot1 shina1"></div>
							</div>
							<div class="park_car">
								<div class="car_box">
									<div class="info_left">
										<div>01</div>
										<div>待审核</div>
										<div>{{carNums[1]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode2.length">
											<div v-for="val in carNode2" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode2" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>02</div>
										<div>待入园</div>
										<div>{{carNums[0]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode1.length">
											<div v-for="val in carNode1" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode1" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>03</div>
										<div>待叫号</div>
										<div>{{carNums[2]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode3.length">
											<div v-for="val in carNode3" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode3" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>04</div>
										<div>作业中</div>
										<div>{{carNums[3]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode4.length">
											<div v-for="val in carNode4" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode4" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>05</div>
										<div>待复磅</div>
										<div>{{carNums[4]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode5.length">
											<div v-for="val in carNode5" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode5" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>06</div>
										<div>待付款</div>
										<div>{{carNums[5]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode6.length">
											<div v-for="val in carNode6" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode6" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>07</div>
										<div>待打单</div>
										<div>{{carNums[6]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode7.length">
											<div v-for="val in carNode7" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode7" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="car_box">
									<div class="info_left">
										<div>08</div>
										<div>待出园</div>
										<div>{{carNums[7]||0}}辆车</div>
									</div>
									<div class="info_right">
										<div class="three_box slideBox" v-if="carNode8.length">
											<div v-for="val in carNode8" class="slideItem">
												<span>{{(val)}}</span>
											</div>
											<div v-for="val in carNode8" class="slideItem">
												<span>{{(val)}}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="down_show">
						<div class="card_title">
							宣传片
						</div>
						<div class="down_body">
							<video autoplay loop muted controls>
								<source src="${ctxStatic}/images/video2.mp4" type="video/mp4">
								该浏览器不支持视频播放
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<img src="${ctxStatic}/images/icon_bottom1.png" alt="" class="icon_bottom">
		<img src="${ctxStatic}/images/icon_bottom2.png" alt="" class="icon_bottom">
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
			btnFlag1:true,
			btnFlag2:true,
			inventoryNum:'0',
			customerNum:'0',
			todayInNum:'0',
			todayOutNUm:'0',
			todayProcessNum:'0',
			platformList1:[],
			platformList2:[],
			intTimerF:0,
			intIncF:0,
			intTimerS:0,
			intIncS:0,
			proTimer:0,
			proInc:0,
			setTimer:0,
			setInc:0,
			thrTimer:0,
			thrInc:0,
			inoTimer:0,
			inoInc:0,
			turTimer:0,
			turInc:0,
			topDataTimer:0,
			carInfoTimer:0,
			carNode1:[],
			carNode2:[],
			carNode3:[],
			carNode4:[],
			carNode5:[],
			carNode6:[],
			carNode7:[],
			carNode8:[],
			carNums:[],
			isFull:false,
			platVideos:[],
			platVideoFlag:false,
			videoName:'',
			timer1: null,
		},
		methods:{
			//全屏1
			onFullScreen(){
				let iframe = $('.curholder>iframe',myDocument)[0];
				if(iframe){
					window.open(location.href,'_top');
				}else{
					fullScreen(document.getElementById('app'))
				}
			},
			//库存占比
			getIntentory(){
				let self = this ;
				let myChart = echarts.init(document.getElementById('inventory_analyse'));
				clearInterval(self.intTimerF)
				clearInterval(self.intTimerS)
				let colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
				let option = {
					grid: {
						bottom: '2%',
						top: '25%',
						containLabel: true
					},
					color:colorList,
					tooltip: {
						trigger: 'item',
						formatter: function(optionItem){
							return optionItem.seriesName+ "<br />" + optionItem.name+"&nbsp;&nbsp;&nbsp;&nbsp;" + optionItem.percent + '%';
						}
					},
					series: [
						{
							type: 'pie',
							name:'Access',
							radius: ['15%','60%'],
							center: ['50%','58%'],
							selectedMode: true,
							selectedOffset:18,
							label: {
								color: '#ffffff',
								fontSize: 12,
								lineHeight: 12,
								formatter: function (params){
									let str = params.name + '\n' + params.percent + '%'
									// if(str.length>8){
									// 	str = str.slice(0,parseInt(str.length/2)-2) + '\n' + str.slice(parseInt(str.length/2)-2)
									// }
									return str;
								},
							},
							labelLine:{
								length:20,
								length2:16,
							},
							data: [
								{ value: 1048, name: 'Search' },
								{ value: 735, name: 'Direct' },
								{ value: 580, name: 'Email' },
								{ value: 484, name: 'Union' },
								{ value: 300, name: 'Video' }
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 0,
									shadowOffsetX: 0,
								}
							}
						}
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getInventoryAnalyze", { choose:'1' }, function(res){
					option.series[0].data = []
					let len = res[0].brandNames.length>5 ? 5: res[0].brandNames.length
					for(let i=0;i<len;i++){
						let obj = {}
						obj.value= res[0].percentList[i]
						obj.name = res[0].brandNames[i]
						option.series[0].data.push(obj)
					}
					// 其他
					// 使用 slice 方法获取除前五个元素之外的元素
				let restOfArray = Array.isArray(res[0].percentList)? res[0].percentList.slice(5) : [];
				// 使用 reduce 方法计算累加和
				let sum = restOfArray.reduce(function (acc, currentValue) {
						return acc + currentValue;
				}, 0);
				option.series[0].data.push({name:"其他", value: sum})
					myChart.setOption(option);
					self.intTimerF = setInterval(()=>{
						myChart.dispatchAction({
							type: 'unselect',
							seriesName:"Access",
							dataIndex:self.intIncF,
						})
						self.intIncF = (self.intIncF+1)%len
						myChart.dispatchAction({
							type: 'select',
							seriesName:'Access',
							dataIndex:self.intIncF,
						});
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//库存趋势
			getIntentoryDay(){
				let self = this ;
				let myChart = echarts.init(document.getElementById('inventory_trend'));
				clearInterval(self.intTimerS);
				clearInterval(self.intTimerF);
				let option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						top:'25%',
						left: '2%',
						right: '2%',
						bottom: '2%',
						containLabel: true
					},
					xAxis: [
						{
							type: 'category',
							data: [
								// 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
							],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								textStyle: {
									fontSize: 12,
									color: '#ffffff',
								}
							},
						}
					],
					yAxis: [
						{
							type: 'value',
							name:'吨',
							nameGap: 6,
							nameTextStyle: {
								fontSize: 12,
								color: '#ffffff',
							},
							axisLabel: {
								textStyle: {
									fontSize: 12,
									color: '#ffffff',
								}
							},
							splitLine: {
								show: true,
								lineStyle: {
									color: 'rgba(255,255,255,0.5)'
								}
							},
						}
					],
					series: [
						{
							name: 'Direct',
							type: 'bar',
							barWidth: '45%',
							itemStyle: {
								color: '#00E5FF'
							},
							label: {
								show: true,
								color: '#ffffff',
								fontSize:12,
								position:'top',
								formatter: (params) => {
									return parseInt(params.value) + '吨';
								},
							},
							data: [
								// 10, 52, 200, 334, 390, 330, 220
							]
						}
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getInventoryAnalyze", { choose:'2' }, function(res){
					option.xAxis[0].data=[]
					option.series[0].data=[]
					option.xAxis[0].data = self.getPart(self.intIncS,self.getFull(res[0].dayList,res[0].weightList).days)
					option.series[0].data = self.getPart(self.intIncS,self.getFull(res[0].dayList,res[0].weightList).list)
					myChart.setOption(option);
					self.intTimerS = setInterval(()=>{
						self.intIncS = (self.intIncS+1)%7
						option.xAxis[0].data = self.getPart(self.intIncS,self.getFull(res[0].dayList,res[0].weightList).days)
						option.series[0].data = self.getPart(self.intIncS,self.getFull(res[0].dayList,res[0].weightList).list)
						myChart.setOption(option);
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//库存分析
			getCustomer(){
				let self = this;
				let myChart = echarts.init(document.getElementById('customer_analyse'));
				let option = {
					radar: {
						name: {
							textStyle: {
								color: '#ffffff',
								fontSize: 12,
							},
						},
						nameGap: 5,
						radius:'60%',
						center: ['50%', '56%'],
						indicator: [
							{ name: 'A', max: 120 },
							{ name: 'B', max: 120 },
							{ name: 'C', max: 120 },
							{ name: 'D', max: 120 },
							{ name: 'E', max: 120 },
							{ name: 'F', max: 120 }
						],
						splitArea: {
							areaStyle: {
								color: [
									'rgba(1, 183, 216, 0.1)', 'rgba(1, 183, 216, 0.2)',
									'rgba(1, 183, 216, 0.4)', 'rgba(1, 183, 216, 0.6)',
									'rgba(1, 183, 216, 0.8)', 'rgba(1, 183, 216, 1)'
								].reverse()
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								width: 1,
								color: 'rgba(5, 213, 255, .3)',
							},
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(5, 213, 255, .3)',
							},
						},
						axisName: {
							fontSize: 12,
							lineHeight: 14,
							color:'#ffffff',
							formatter: (params) => {
								if(params.length>6){
									let len = parseInt(params.length/2)
									params = params.slice(0,len)+'\n'+params.slice(len)
								}
								return params;
							},
						}
					},
					series: [
						{
							type: 'radar',
							data: [
								{
									value: [80, 30, 78, 92, 88, 65],
								},
							],
							lineStyle: {
								width: 2,
								color: '#05D5FF',
							},
							symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
							symbolSize: 8, // 拐点的大小
							itemStyle: {
								normal: {
									color: '#05D5FF',
								},
							},
							areaStyle: {
								normal: {
									color: '#05D5FF',
									opacity: 0.5,
									shadowColor: 'rgba(14,122,191,0.15)',
									shadowBlur: 30,
									shadowOffsetY: 20
								},
							},
							label: {
								normal: {
									show: true,
									formatter: (params) => {
										return params.value + ' %';
									},
									color: '#ffffff',
									fontSize:12,
								},
							},
							labelLayout:{
								hideOverlap: true,
							}
						}
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getInventoryByOwner", { choose:'1' }, function(res){
					option.radar.indicator =[]
					let len = res.ownerNames.length>5 ? 5 : res.ownerNames.length;
					for(let i=0;i<len;i++){
						option.radar.indicator.push({ name:res.ownerNames[i],max:120 })
					}
					option.series[0].data[0].value = []
					for(let j=0;j<len;j++){
						option.series[0].data[0].value.push(res.percentList[j])
					}
					myChart.setOption(option);
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//客户周转率
			getTurnRate(){
				let self = this ;
				let myChart = echarts.init(document.getElementById('customer_rate'));
				let colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
				clearInterval(self.turTimer)
				let option = {
					grid: {
						bottom: '2%',
						top: '25%',
						containLabel: true
					},
					color:colorList,
					tooltip: {
						trigger: 'item',
					},
					series: [
						{
							name:'Access',
							type: 'pie',
							selectedMode: true,
							selectedOffset:14,
							radius: ['15%','60%'],
							center: ['50%','58%'],
							label: {
								color: '#ffffff',
								fontSize: 13,
								lineHeight: 14,
								formatter: function (params){
									let str = params.name + '\n' + params.percent + '%'
									return str;
								},
							},
							labelLine:{
								length:18,
								length2:12,
							},
							data: [
								{ value: 1048, name: 'Search' },
								{ value: 735, name: 'Direct' },
								{ value: 580, name: 'Email' },
								{ value: 484, name: 'Union' },
								{ value: 300, name: 'Video' }
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 0,
									shadowOffsetX: 0,
								}
							}
						}
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getInventoryByOwner", { choose:'2' }, function(res){
					option.series[0].data = []
					if(!res.names){
						return;
					}
					let len = res.names.length>5 ? 5 : res.names.length;
					for(let i=0;i<len;i++){
						let obj = {}
						obj.value= res.turnRates[i]
						obj.name = res.names[i]
						option.series[0].data.push(obj)
					}
					myChart.setOption(option);
					self.turTimer = setInterval(()=>{
						myChart.dispatchAction({
							type: 'unselect',
							seriesName:"Access",
							dataIndex:self.turInc,
						})
						self.turInc = (self.turInc+1)%len
						myChart.dispatchAction({
							type: 'select',
							seriesName:'Access',
							dataIndex:self.turInc,
						});
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//加工分析
			getProcess(){
				let self = this;
				let myChart = echarts.init(document.getElementById('process_analyse'));
				clearInterval(self.proTimer);
				let option = {
					legend: {
						icon: 'circle',
						orient: 'horizontal',
						top: '10%',
						right: '5%',
						itemHeight: 12,
						textStyle: {
							color:'#ffffff',
							fontSize: 12,
							lineHeight: 12,
						}
					},
					tooltip: {
						trigger: 'axis'
					},
					grid: {
						top: '20%',
						left: '2%',
						right: '8%',
						bottom: '2%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						axisLabel: {
							fontSize: 14,
							textStyle: {
								color: '#ffffff'
							}
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: 'rgba(255,255,255, 0.5)'
							}
						},
						data: ['11-1','11-2','11-3','11-4','11-5','11-6','11-7'],
					},
					yAxis: {
						type: 'value',
						name:'吨',
						nameGap: 6,
						nameTextStyle: {
							fontSize: 14,
							color: '#ffffff',
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(66, 133, 244, 0.2)'
							}
						},
						axisLabel: {
							fontSize: 13,
							textStyle: {
								color: '#ffffff'
							}
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: 'rgba(66, 133, 244, 0.2)'
							}
						},
					},
					series: [
						{
							name: '加工总量',
							type: 'line',
							smooth: true,
							symbol: 'circle',
							symbolSize: 7,
							lineStyle: {
								color: "#64B5F6"
							},
							itemStyle: {
								normal: {
									color:'#ffffff',
								}
							},
							areaStyle: {
								color: 'rgba(255,255,255, 0.06)',
							},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getWorkTrendAnalyze", {}, function(res){
					option.xAxis.data = []
					option.series[0].data = []
					option.xAxis.data = self.getPart(self.proInc,self.getFull(res.dayList,res.weightList,10).days,7)
					option.series[0].data = self.getPart(self.proInc,self.getFull(res.dayList,res.weightList,10).list,7)
					myChart.setOption(option);
					self.proTimer = setInterval(()=>{
						self.proInc = (self.proInc+1)%10
						option.xAxis.data = self.getPart(self.proInc,self.getFull(res.dayList,res.weightList,10).days,7)
						option.series[0].data = self.getPart(self.proInc,self.getFull(res.dayList,res.weightList,10).list,7)
						myChart.setOption(option);
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//结算分析
			getSettlement(){
				let self = this;
				let myChart = echarts.init(document.getElementById('settlement_analyse'));
				clearInterval(self.setTimer);
				let option = {
					grid: {
						left: '3%',
						right: '12%',
						bottom: '-10%',
						top: '12%',
						containLabel: true
					},
					xAxis: [{
						show: false,
					}],
					yAxis: [{
						splitLine: {
							show: false,
							lineStyle:{
								color:'rgba(66, 133, 244, 0.2)',
							}
						},
						axisLine: {
							show: false
						},
						axisTick:{
							show:false
						},
						type: 'category',
						inverse: true,
						data: ['2022-11-1','2022-11-2','2022-11-3','2022-11-4','2022-11-5','2022-11-6','2022-11-7'],
						axisLabel: {
							color: '#ffffff',
							fontSize: 13,
						}
					}],
					series: [{
						type: 'bar',
						barWidth: 16, // 柱子宽度
						label: {
							show: true,
							position: 'right', // 位置
							color: '#ffffff',
							fontSize: 14,
							offset: [0, 1],
							verticalAlign: "middle",
							formatter: '{c}元',
						}, // 柱子上方的数值
						itemStyle: {
							barBorderRadius: [5,5,5,5],
							color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
								offset: 0,
								color: '#B3E5FC',
							}, {
								offset: 1,
								color: '#4FC3F7',
							}], false), // 渐变
						},
						data: [34,340,780,453,280,234,240]
					}, ]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/settlementAnalysis", {}, function(res){
					let resList = res.propList ||[]
					let day = resList.map((e)=>{
						return e.settlementDateStr.replace(/^\d+[--]/,'')
					})
					let list = resList.map((e)=>{
						return parseFloat(e.totalMoneyAndWeight)
					})
					option.yAxis[0].data = []
					option.series[0].data = []
					option.yAxis[0].data = self.getPart(self.setInc,self.getFull(day,list).days)
					option.series[0].data = self.getPart(self.setInc,self.getFull(day,list).list)
					myChart.setOption(option);
					self.setTimer = setInterval(()=>{
						self.setInc = (self.setInc+1)%7
						option.yAxis[0].data = self.getPart(self.setInc,self.getFull(day,list).days)
						option.series[0].data = self.getPart(self.setInc,self.getFull(day,list).list)
						myChart.setOption(option);
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//吞吐量分析
			getThroughput(){
				let self = this;
				let myChart = echarts.init(document.getElementById('throughput_analyse'));
				clearInterval(self.thrTimer)
				let option = {
					legend: {
						icon: 'circle',
						orient: 'horizontal',
						top: '5%',
						right: '5%',
						itemHeight: 10,
						textStyle: {
							color:'#ffffff',
							fontSize: 12,
							lineHeight: 12,
						}
					},
					grid: {
						left: '3%',
						right: '8%',
						bottom: '-10%',
						top: '12%',
						containLabel: true
					},
					xAxis: [{
						show: false,
					}],
					yAxis: [{
						splitLine: {
							show: false,
							lineStyle:{
								color:'#c6dafc'
							}
						},
						axisLine: {
							show: false
						},
						axisTick:{
							show:false
						},
						type: 'category',
						inverse: true,
						data: ['2022-11-1','2022-11-2','2022-11-3','2022-11-4','2022-11-5','2022-11-6','2022-11-7'],
						axisLabel: {
							color: '#ffffff',
							fontSize: 13,
							margin: 18,
						}
					}],
					series: [
						{
							type: 'bar',
							barWidth: 16, // 柱子宽度
							name: '出库量',
							stack: 'total',
							label: {
								show: true,
								color: '#ffffff',
								fontSize: 10,
								offset:[0,1],
								formatter: '{c}吨',
							}, // 柱子上方的数值
							itemStyle: {
								barBorderRadius: [5,0,0,5],
								color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
									offset: 0,
									color: '#a8fafa',
								}, {
									offset: 1,
									color: '#67cd67',
								}], false), // 渐变
							},
							data: [360,560,320,300,280,430,330]
						},
						{
							type: 'bar',
							name: '入库量',
							barWidth: 16, // 柱子宽度
							stack: 'total',
							label: {
								show: true,
								color: '#ffffff',
								fontSize: 10,
								offset:[0,1],
								formatter: '{c}吨',
							}, // 柱子上方的数值
							itemStyle: {
								barBorderRadius: [0,5,5,0],
								color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
									offset: 0,
									color: '#76b9fa',
								}, {
									offset: 1,
									color: '#4285f4',
								}], false), // 渐变
							},
							data: [36,56,32,30,28,43,33]
						},
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getThruputTrendAnalyze", {}, function(res){
					option.yAxis[0].data = []
					option.series[0].data = []
					option.series[1].data = []
					option.yAxis[0].data = self.getPart(self.thrInc,self.getFull(res.dayList,res.enterWeightList).days)
					option.series[0].data = self.getPart(self.thrInc,self.getFull(res.dayList,res.outputWeightList).list)
					option.series[1].data = self.getPart(self.thrInc,self.getFull(res.dayList,res.enterWeightList).list)
					option.series[0].data = option.series[0].data.map((e)=>{return parseInt(e)})
					option.series[1].data = option.series[1].data.map((e)=>{return parseInt(e)})
					myChart.setOption(option);
					self.thrTimer = setInterval(()=>{
						self.thrInc = (self.thrInc+1)%7
						option.yAxis[0].data = self.getPart(self.thrInc,self.getFull(res.dayList,res.enterWeightList).days)
						option.series[0].data = self.getPart(self.thrInc,self.getFull(res.dayList,res.outputWeightList).list)
						option.series[1].data = self.getPart(self.thrInc,self.getFull(res.dayList,res.enterWeightList).list)
						option.series[0].data = option.series[0].data.map((e)=>{return parseInt(e)})
						option.series[1].data = option.series[1].data.map((e)=>{return parseInt(e)})
						myChart.setOption(option);
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//出入库分析
			getInOutAnalyse(){
				let self = this ;
				let myChart = echarts.init(document.getElementById('in_out_analyse'));
				clearInterval(self.inoTimer)
				let option = {
					legend: {
						icon: 'circle',
						orient: 'horizontal',
						top: '10%',
						itemHeight: 10,
						textStyle: {
							color:'#ffffff',
							fontSize: 12,
							lineHeight: 12,
						}
					},
					tooltip: {
						trigger: 'item',
						axisPointer: {
							type: 'shadow'
						},
						formatter:function (params){
							let str = params.seriesName + ' ' + params.value + ' 吨'
							return str
						}
					},
					grid: {
						left: '2%',
						right: '4%',
						bottom: '1%',
						top:'22%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['2012','2013','2014','2015','2016','2017','2018'],
						axisLabel: {
							textStyle: {
								fontSize: 14,
								color: '#ffffff',
							}
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: 'rgba(66, 133, 244, 0.2)'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(66, 133, 244, 0.2)'
							}
						},
					},
					yAxis: [
						{
							type: 'value',
							name:'吨',
							nameGap: 6,
							nameTextStyle: {
								fontSize: 13,
								color: '#ffffff',
							},
							axisLine: {
								show: false,
								lineStyle: {
									color: '#ff0000'
								}
							},
							splitLine: {
								show: true,
								lineStyle: {
									color: 'rgba(66, 133, 244, 0.2)'
								}
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								fontSize: 12,
								textStyle: {
									color: '#ffffff'
								}
							},
							axisLine: {
								show:false,
								lineStyle: {
									color: '#cdd5e2'
								}
							},
						}
					],
					series: [
						{
							name: '出库量',
							type: 'bar',
							barWidth: '18',
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#C8E6C9'
									}, {
										offset: 1,
										color: '#81C784'
									}]),
									barBorderRadius: 6,
								},
							},
							data: [400, 400, 300, 300, 300, 400, 400, 400]
						},
						{
							name: '入库量',
							type: 'bar',
							barWidth: '18',
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#75b9f9'
									}, {
										offset: 1,
										color: '#4386f4'
									}]),
									barBorderRadius: 6,
								},
							},
							data: [500, 500, 400, 400, 400, 500, 500],
						},
					]
				};
				myChart.clear()
				$.post("${ctx}/showCenter/getThruputTrendAnalyze", {}, function(res){
					option.xAxis.data = []
					option.series[0].data = []
					option.series[1].data = []
					option.xAxis.data = self.getPart(self.inoInc,self.getFull(res.dayList,res.enterWeightList).days)
					option.series[0].data = self.getPart(self.inoInc,self.getFull(res.dayList,res.outputWeightList).list)
					option.series[1].data = self.getPart(self.inoInc,self.getFull(res.dayList,res.enterWeightList).list)
					myChart.setOption(option);
					self.inoTimer = setInterval(()=>{
						self.inoInc = (self.inoInc+1)%7
						option.xAxis.data = self.getPart(self.inoInc,self.getFull(res.dayList,res.enterWeightList).days)
						option.series[0].data = self.getPart(self.inoInc,self.getFull(res.dayList,res.outputWeightList).list)
						option.series[1].data = self.getPart(self.inoInc,self.getFull(res.dayList,res.enterWeightList).list)
						myChart.setOption(option);
					},2000)
					window.addEventListener('resize',()=>{
						myChart.resize()
					})
				});
			},
			//获取总量数据
			getTopData(){
				let self = this ;
				clearInterval(self.topDataTimer)
				$.post("${ctx}/showCenter/getTopDataInfoMin", {}, function(res){
					self.inventoryNum = parseInt(res['库存量']) || '0'
					self.todayInNum = parseInt(res['当日入库数']) || '0'
					self.todayOutNUm = parseInt(res['当日出库数']) || '0'
					self.todayProcessNum = parseInt(res['当日加工数']) || '0'
					//顶部数字循环滚动
					let numScroll = 0;
					self.topDataTimer = setInterval(()=>{
						$('.roll'+numScroll).leoTextAnimate({
							delay: 0, //延时出现时间
							autorun: true,
							fixed:[',',':','.','-','~'," "],
							start:'0',
						});
						numScroll = (numScroll+1)%5;
					},1000)
				});
				$.post("${ctx}/showCenter/getTopDataInfoDay", {}, function(res){
					self.customerNum = parseInt(res['客户数']) || '0'
				});
			},
			//获取月台调度信息
			getPlatInfo(ware){
				let self = this ;
				$.post("${ctx}/showCenter/getCraneInfo", {}, function(res){
					let list = res.platformList || []
					self.platformList1=[]
					self.platformList2=[]
					if(list.length>0){
						let list1=[],list3=[],list4=[];
						if(!self.platVideoFlag){
							self.platVideoFlag = true
							self.startPlatVideo()
						}
						for(let i=0;i<list.length;i++){
							if(!list[i].proWorkTaskDetailList){
								list[i].proWorkTaskDetailList=[]
							}
							let key = 0
							if(list[i].platformName.search('室外')>-1){
								key = 4
							}else{
								key = parseInt(list[i].platformName)
							}
							switch (key){
								case 1:
									list1.push(list[i])
									break;
								case 3:
									list3.push(list[i])
									break;
								case 4:
									list4.push(list[i])
									break;
							}
						}
						switch (ware){
							case 1:
								self.platformList1 = Object.freeze(list1.slice(0,6))
								self.platformList2 = Object.freeze(list1.slice(6,12))
								break;
							case 2:
								self.platformList1 = Object.freeze(list3.slice(0,6))
								self.platformList2 = []
								break;
							case 3:
								self.platformList1 = Object.freeze(list4.slice(0,6))
								self.platformList2 = Object.freeze(list4.slice(6,12))
								break;
						}
					}
				});
			},
			startPlatVideo(){
				let self = this
				self.platVideos = [
					{ indexCode:'d769384167fc4704b36e70f1111e6d6b', platformName:'1库月台1' },
					{ indexCode:'5ba543396bc14ebb83ff16eb7288aaa7', platformName:'3库月台' },
					{ indexCode:'5bfd98cc0bb2468b9c36d6891fecf904', platformName:'室外月台' },
				]
				let platCount = 0;
				let length = self.platVideos.length
				let video = new VideoPlay('platform_video',self.platVideos[0].indexCode)
				self.videoName = self.platVideos[0].platformName
				setInterval(()=>{
					platCount = (platCount+1)%length;
					video.startPreview(self.platVideos[platCount].indexCode,self.platVideos[platCount].platformName)
				},30000)
			},
			getFull(days,list,len){
				let nDays = [], nList = [];
				if(!len){
					len = 6
				}
				for(let i=len;i>=0;i--){
					let t = new Date(Date.now() - i*86400000)
					let str = t.getMonth()+1+'-'+t.getDate()
					nDays.push(str)
					let key = false
					for(let j=0;j<days.length;j++){
						if(parseInt(days[j].replace(/^\d+[--]/,''))==parseInt(str.replace(/^\d+[--]/,''))){
							key = true
							nList.push(parseFloat(list[j]))
							break
						}
					}
					if(!key)nList.push(0)
				}
				return {
					days:nDays,
					list:nList
				}
			},
			getPart(inc,list,length){
				let n = 5
				if(length){
					n = length
				}
				let newList = []
				let len = inc + n - 1
				if(len>list.length-1){
					len = list.length-1
				}
				for(let i=inc;i<=len;i++){
					newList.push(list[i])
				}
				if(newList.length<n){
					len = n - newList.length
					for(let j=0;j<len;j++){
						newList.push(list[j])
					}
				}
				return newList
			},
			platStatus(plat){
				if(!plat.carPlateNo&&!plat.proWorkTaskDetailList.length){
					return ''
				}
				if(plat.proWorkTaskDetailList.length<=2){
					return 'task_easy'
				}
				if(plat.proWorkTaskDetailList.length<=5){
					return 'task_normal'
				}
				return 'task_busy'
			},
			//获取节点车辆信息
			getNodeInfo(){
				let self = this ;
				clearInterval(self.carInfoTimer)
				$.post("${ctx}/showCenter/getCarInfo", {}, function(res){
					self.carNode1 = res['待入园'] || []
					self.carNode2 = res['换单待审核'] || []
					self.carNode3 = res['待叫号'] || []
					self.carNode4 = res['作业中'] || []
					self.carNode5 = res['待复磅'] || []
					self.carNode6 = res['待付款'] || []
					self.carNode7 = res['待打单'] || []
					self.carNode8 = res['待出园'] || []
					self.carNums = []
					for(let i=1;i<=8;i++){
						let list = []
						self.carNums.push( self['carNode'+i].length>=1 ? self['carNode'+i][0].workNumTotal : 0)
						for(let j=0;j<self['carNode'+i].length;j++){
							let inc = Math.floor(j/2)
							if(!list[inc]){
								list[inc] = ''
							}else{
								list[inc] += ' '
							}
							list[inc] += self['carNode'+i][j].carPlateNo
						}
						if(list.length<3){
							for(let k=list.length;k<3;k++){
								list.push('')
							}
						}
						self['carNode'+i] = Object.freeze(list);
					}
					let inc = 0;
					self.carInfoTimer =  setInterval(()=>{
						$('.car_box').removeClass('rubberBandzt');
						$($('.car_box')[inc]).addClass('rubberBandzt');
						inc = (inc+1)%8;
					},3000)
				});
			},
			fillEnd(str,len){
				let elen = len-str.length;
				let nlen = str.length + elen + elen;
				str = str.toString().padEnd(nlen,'\xa0')
				return str
			},
		},
		mounted() {
			this.getPlatInfo(1);
			this.getTopData();
			this.getCustomer();
			this.getIntentory();
			this.getProcess();
			this.getSettlement();
			this.getInOutAnalyse();
			this.getThroughput();
			this.getNodeInfo();

			// 清除旧定时器，避免多次触发
			if (this.nodeInfoTimer) {
				clearInterval(this.nodeInfoTimer);
			}

			this.intTimerF = null;
			this.intTimerS = null;
			this.turTimer = null;
			this.timer1 = null;

			// 23 秒循环逻辑
			this.intTimerF = setInterval(() => {
				clearInterval(this.intTimerF);
				clearInterval(this.intTimerS);
				this.intIncF = 0;
				this.intIncS = 0;
				if (this.btnFlag1) {
					this.getIntentoryDay();
				} else {
					this.getIntentory();
				}
				this.btnFlag1 = !this.btnFlag1;

				clearInterval(this.turTimer);
				if (this.btnFlag2) {
					this.getTurnRate();
				} else {
					this.getCustomer();
				}
				this.btnFlag2 = !this.btnFlag2;
			}, 23 * 1000);

			// 月台调度循环显示（每 30s）
			let platScroll = 2;
			setInterval(() => {
				this.getPlatInfo(platScroll);
				platScroll = (platScroll % 3) + 1;
			}, 30000);

			// 5 分钟执行一次数据刷新
			this.timer1 = setInterval(() => {
				this.getTopData();
				this.getProcess();
				this.getSettlement();
				this.getInOutAnalyse();
				this.getThroughput();
			}, 1000 * 60 * 5);

			// 10 秒执行一次 getNodeInfo（加上 clearInterval 以防止重复创建定时器）
			this.nodeInfoTimer = setInterval(() => {
				this.getNodeInfo();
			}, 1000 * 10);
		},
		beforeDestroy(){
			// 清空定时器
			clearInterval(this.timer1)
		},
	})
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
	/*
	* 视频部分
	*/
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
		initPlugin(){
			this.oWebControl = new WebControl({
				szPluginContainer: this.id,                         // 指定容器id
				iServicePortStart: 15900,                           // 指定起止端口号，建议使用该值
				iServicePortEnd: 15909,
				szClassId:"23BF3B0A-2C56-4D97-9C03-0CB103AA8F11",   // 用于IE10使用ActiveX的clsid
				cbConnectSuccess:  () => {                     // 创建WebControl实例成功
					this.oWebControl.JS_StartService("window", {         // WebControl实例创建成功后需要启动服务
						dllPath: "./VideoPluginConnect.dll"         // 值"./VideoPluginConnect.dll"写死
					}).then( ()=> {                           // 启动插件服务成功
						this.oWebControl.JS_SetWindowControlCallback({   // 设置消息回调
							cbIntegrationCallBack: ()=>{}
						});
						this.oWebControl.JS_CreateWnd(this.id, this.domWidth , this.domHeight ).then( ()=> { //JS_CreateWnd创建视频播放窗口，宽高可设定
							this.oWebControl.JS_SetDocOffset({
								left: this.left,
								top: this.top,
							});  // 更新插件窗口位置
							this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
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
				var appkey = "27265789";                           //综合安防管理平台提供的appkey，必填
				var secret = this.setEncrypt("b1wybeJMF2IpYW6ykT57");   //综合安防管理平台提供的secret，必填
				var ip = "10.124.204.18";                           //综合安防管理平台IP地址，必填
				var playMode = 0;                                  //初始播放模式：0-预览，1-回放
				var port = 443;                              //综合安防管理平台端口，若启用HTTPS协议，默认443
				var snapDir = "D:\\SnapDir";                       //抓图存储路径
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
					this.startPreview();
				});
			});
		}
		//开始播放
		startPreview(code,name){
			let cameraIndexCode  = this.code     //获取输入的监控点编号值，必填
			if(code){
				cameraIndexCode = code
			}
			if(name){
				$('#platName').html(name)
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
		unLoad(callback){
			if (this.oWebControl != null){
				this.oWebControl.JS_HideWnd();   // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
				this.oWebControl.JS_Disconnect().then(function(){  // 断开与插件服务连接成功
					callback();
				},() => {});// 断开与插件服务连接失败
			}
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
				if(this.oWebControl != null){
					let iframe = $('#right>iframe',myDocument)[0];
					if(iframe){
						this.left = iframe.getBoundingClientRect().left
						this.top = iframe.getBoundingClientRect().top
					}
					this.oWebControl.JS_SetDocOffset({
						left: this.left,
						top: this.top,
					});  // 更新插件窗口位置
					this.domWidth = document.getElementById(this.id).offsetWidth;
					this.domHeight = document.getElementById(this.id).offsetHeight+1;
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
			//监听浏览器被拖动事件
			// let screenX = window.screenX;
			// setInterval(()=>{
			// 	let newX = window.screenX
			// 	if(newX!=screenX){
			// 		screenX = newX
			// 		if (this.oWebControl != null) {
			// 			this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
			// 			this.setWndCover()
			// 		}
			// 	}
			// },200)
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