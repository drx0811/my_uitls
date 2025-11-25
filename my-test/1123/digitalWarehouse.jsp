<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
  <title>展示首页</title>
  <meta name="decorator" content="default"/>
  <link rel="stylesheet" href="${ctxStatic}/swiper/swiper-bundle.min.css">
  <style type="text/css">
    [v-cloak] {display: none }
    ul,li{padding: 0; margin-left: 0;list-style: none;}
    html,body,#app{ height: 100%; overflow: hidden; }
    select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input{    margin-bottom:0px;}
    #app{ background: #011571; position: relative; display: flex; flex-direction: column; }
    .top{ flex:6; box-sizing: border-box; background: 0 0 / 50% 96% no-repeat url("${ctxStatic}/images/lineLc.png") , 100% 0 / 50% 96% no-repeat url("${ctxStatic}/images/lineRc.png") , 50% 36% / 25% 74% no-repeat url("${ctxStatic}/images/logo04.png"); }
    .title{ flex:6; box-sizing: border-box; display: flex; align-items: center; }
    .title_info{ flex: 1; background: #143697; position: relative; box-sizing: border-box; border-radius: 6px; height: 90%; margin: 0 4px; }
    .title_info::before{content: ''; width: 4px; height: 72%; background: #4285f4; position: absolute; top: 14%; left: 5%; border-radius: 1px; }
    .info{margin-left: 12%; display: flex; flex-direction: column; justify-content: center; height: 100%; color: white; }
    .info h6{ color: white; }

    .content{flex:60; box-sizing: border-box; display: flex; overflow: hidden; }
    .left{ flex:2; background: #143697; border-radius: 6px 6px 0 0; margin: 4px; overflow: hidden; }
    .right{ flex:8; background: #143697; border-radius: 6px; margin: 4px; color:white; display: flex; flex-direction: column; }
    .show_title{ height: 42px;box-sizing:border-box; position: relative;display: flex; align-items: center; justify-content: space-between;}
    .task_info{ position: relative; padding-left: 36px;font-size: 16px; font-weight: bold; }
    .task_info::before{ content: ""; width: 18px; height: 18px; border-radius: 2px; background: #4285f4; position: absolute; top: 0; left: 12px; }
    .show_body{ flex: 1; background: #011571; border-radius: 4px; margin:0 6px 6px 6px; display: flex; position: relative; }
    .row_desc{ width: 43px; display: flex; flex-direction: column; }
    .road{ flex: 3;  background: #0c2888; position: relative; }
    .road::before{content:''; height: 100%; width: 0px; border-left: 1px dashed rgba(255,255,255,.3); position:absolute; top:0; left: 4px;}
    .road::after{content:''; height: 100%; width: 0px; border-left: 1px dashed rgba(255,255,255,.3); position:absolute; top:0; right: 4px;}
    .line{ flex: 30;display: flex; flex-direction: column; position: relative; }
    .rows{ flex:1; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .desc{flex: 1; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .desc::before{ content:attr(row); width: 40px; height: 20px; color: white; position: absolute; left: 10px; bottom: 3px; }

    <%--.image_roll{ cursor: pointer; height: 33%; width: 3.5%; content: url("${ctxStatic}/images/normal-roll.svg"); position: absolute; bottom: 0; left: 0; }--%>
    <%--.image_roll1{ content: url("${ctxStatic}/images/yellow-roll.svg"); }--%>
    <%--.image_roll2{ content: url("${ctxStatic}/images/pro-roll.svg"); }--%>
    <%--.image_roll3{ content: url("${ctxStatic}/images/warn-roll.svg"); }--%>
    <%--.image_roll4{ content: url("${ctxStatic}/images/out-roll.svg"); }--%>
    <%--.image_roll_out_new{ height: 10%; width: 0.8%; position: absolute; bottom: 0; left: 0; }--%>
    <%--.image_roll_out_new_3{ height: 33%; width: 1.7%; position: absolute; bottom: 0; left: 0; }--%>


    .row_desc_new{ width: 30px; display: flex; flex-direction: column; }
    .road_new{ flex: 2;  background: #0c2888; position: relative; }
    .road_new::before{content:''; height: 100%; width: 0px; border-left: 1px dashed rgba(255,255,255,.3); position:absolute; top:0; left: 4px;}
    .road_new::after{content:''; height: 100%; width: 0px; border-left: 1px dashed rgba(255,255,255,.3); position:absolute; top:0; right: 4px;}
    .line_new{ flex: 30;display: flex; flex-direction: column; position: relative; }
    .rows_new{ flex:1; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .rows_new_3{ flex:1; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .rows_new_high{ flex:3; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .desc_new{flex: 1; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .desc_new_high{flex: 3; position: relative; border-bottom: 1px solid rgba(255,255,255,.1); }
    .desc_new::before{ content:attr(row); width: 40px; height: 20px; color: white; position: absolute; left: 3px; bottom: 3px;font-size: 14px; }
    .desc_new_high::before{ content:attr(row); width: 40px; height: 20px; color: white; position: absolute; left: 3px; bottom: 3px;font-size: 14px;  }
    .rowCar_new{ width: 1px; height: 100%; position: absolute; top: 0; left: -4px; z-index: 999; background: #00ffff; font-weight: 500;}
    .gou_new{ width: 10px; height: 8px; position: absolute;background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/goz3.png");z-index: 1000000000000; }
    .gou_info_new{  width: 180px; height: 20px; line-height: 20px; font-size: 12px; color: #00ffff; position: absolute; top:-12px; left: 10px;z-index: 1000000000000; background: transparent; }


    .image_roll_new{
      cursor: pointer;
      width: 1.0%;
      content: url("${ctxStatic}/images/normal-roll.svg");
      position: absolute; bottom: 0; left: 0;
    }
    .rows_new_3 .image_roll_new{
      cursor: pointer;
      width: 1.9%;
      position: absolute; bottom: 0; left: 0;
    }
    .rows_new_high .image_roll_new{
      cursor: pointer;
      width: 1.0%;
      content: url("${ctxStatic}/images/row34/normal-roll.png");
      position: absolute; bottom: 0; left: 0;
    }


    .image_roll1_new{ content: url("${ctxStatic}/images/yellow-roll.svg"); }
    .rows_new_high .image_roll1_new{ content: url("${ctxStatic}/images/row34/yellow-roll.png"); }
    .image_roll2_new{ content: url("${ctxStatic}/images/pro-roll.svg"); }
    .rows_new_high .image_roll2_new{ content: url("${ctxStatic}/images/row34/pro-roll.png"); }
    .image_roll3_new{ content: url("${ctxStatic}/images/warn-roll.svg"); }
    .rows_new_high .image_roll3_new{ content: url("${ctxStatic}/images/row34/warn-roll.png"); }
    .image_roll4_new{ content: url("${ctxStatic}/images/out-roll.svg"); }
    .rows_new_high .image_roll4_new{ content: url("${ctxStatic}/images/row34/out-roll.png"); }
    .roll_active_new{ content: url("${ctxStatic}/images/out-roll.svg"); }
    .rows_new_high .roll_active_new{ content: url("${ctxStatic}/images/row34/out-roll.png"); }
    .image_roll_out_new{
      width: 1.0%;
      position: absolute; bottom: 0; left: 0;
    }
    .rows_new_3 .image_roll_out_new{
      width: 1.9%;
      position: absolute; bottom: 0; left: 0;
    }

    .image_roll_out_new_3{
      width: 1.0%;
      position: absolute; bottom: 0; left: 0;
    }
    .rows_new_3 .image_roll_out_new_3{
      width: 1.9%;
      position: absolute; bottom: 0; left: 0;
    }



    .image_roll_out{ height: 35%; width: 1.34%; position: absolute; bottom: 0; left: 0; }
    .card{ width: 100px; height: 32px; background: #0bbbee; border-radius: 20px; margin-right: 10px; color: white; display: flex; align-items: center; }
    .icon{ width: 28px; height: 28px; border-radius: 50%; background: pink; margin-left: 2px; }
    .icon_info{ line-height: 14px; font-size: 12px; }
    .strack{ display: flex; align-items: center; }
    .chuku{ background: 50% 50%/ 60% 60% no-repeat url("${ctxStatic}/images/chuku.png"); }
    .pro{ background: 50% 50%/ 70% 70% no-repeat url("${ctxStatic}/images/jiagong.png"); }
    .zhiya{ background: 50% 50%/ 56% 56% no-repeat url("${ctxStatic}/images/zhiya.png"); }
    .normal{ width: 24px; height: 24px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/normal-roll.svg");margin-right: 6px; }
    .out2{ width: 24px; height: 24px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/out-roll.svg");margin-right: 6px; }
    .warn{ width: 24px; height: 24px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/warn-roll.svg");margin-right: 6px; }
    .outroll{ width: 24px; height: 24px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/yellow-roll.svg");margin-right: 30px; }
    .proroll{ width: 24px; height: 24px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/pro-roll.svg");margin-right: 6px; }
    .camera{ width: 24px; height: 24px; border-radius: 50%; background: 50% 50% / 80% 80% no-repeat url("${ctxStatic}/images/camera.png") , linear-gradient(#f7b502,#fad266);margin-right: 8px; }

    .nav_info{ box-sizing: border-box; padding: 2px; overflow:hidden; height: calc(40% - 42px); }
    .nav_info > div{ flex: 1; border-radius: 2px; font-size: 12px; color: white; margin: 0 0px 2px 0px; background: #011571; }
    .left_info{ height: 8%; background: #011571; display: flex; box-sizing: border-box; padding: 2px; color: white; margin: 0 2px; border-radius: 2px; }
    .left_info_title{ position: relative; font-weight: bold; flex: 1; display: flex; flex-direction: column; justify-content: center; line-height: 18px; padding-left: 12%; }
    .left_info_title::after{ content: ''; display: inline-block; height: 72%; width: 2px; background: #4285f4; position: absolute; top: 0; bottom: 0; left: 16%; margin: auto 0; }

    .vodeo{ flex:2; background: black;border-radius: 2px; }
    .video_title{ height: 42px; box-sizing:border-box; position: relative; display: flex; align-items: center; color: white; }
    .task_title{ position: relative; padding-left: 36px;font-size: 16px; font-weight: bold; }
    .task_title::before{ content: ""; width: 18px; height: 18px; border-radius: 2px; background: #4285f4; position: absolute; top: 0; left: 12px; }
    .select{ width: 100px; margin-left: 10px; }
    .rowCar{ width: 3px; height: 100%; position: absolute; top: 0; left: -4px; z-index: 999; background: #00ffff; }
    .rowCar .gou{ width: 30px; height: 24px; position: absolute;top: 0; left: -3.5px; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/goz3.png"); }
    .track_camera{ position: absolute; z-index: 9999; cursor: pointer; width: 20px; height: 20px; border-radius: 50%; background: 50% 50% / 80% 80% no-repeat url("${ctxStatic}/images/camera.png") , linear-gradient(#f7b502,#fad266); }

    .select2-container .select2-choice{ background: #4285f4; color: white; border: 1px solid #4285f4; box-shadow: none; }
    .select2-container .select2-choice .select2-arrow{ background: #4285f4; }
    .select2-drop-active { color: white; background: #4285f4; border: 1px solid #4285f4; }
    .full_screen{ width:20px; height: 20px;  position: absolute; top: 4%; right: 1%; background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/isfull.png"); cursor: pointer; }
    .not_full{ background: 0 0 / 100% 100% no-repeat url("${ctxStatic}/images/notfull.png"); }
    .roll_active{ content: url("${ctxStatic}/images/out-roll.svg"); }
    .gou_info{  width: 180px; height: 20px; line-height: 20px; font-size: 12px; color: white; position: absolute; top:-12px; left: 10px; background: transparent; }
    .roll_info{ padding-right: 5px; font-size: 12px; width: 180px; height: 90px; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 999; background: rgba(0,0,0,0.7); color: white; border-radius: 4px; display: flex; flex-direction: column; justify-content: center; }
    .rlabel{ display: inline-block; margin-left: 8px; text-align: right; margin-right: 5px; }
    .close_info{ width: 18px; height: 18px;  color: red; border-radius: 50%; font-size: 16px; line-height: 15px; text-align: center; position: absolute; top: -5px; right: -5px; background: white; cursor: pointer; }

    .custom_select2{ cursor: pointer; width: 100px; height: 28px; line-height: 28px; box-sizing: border-box; padding-left: 8px; margin-left: 10px; color: white; background: #4285f4; border-radius: 2px; position: relative; z-index: 100; }
    .drop_close{ width: 0px; height: 0px; position: absolute; top: 11px; right: 8px;   border-top: 6px solid #666666; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 5px solid transparent;  }
    .drop_open{ width: 0px; height: 0px; position: absolute; top: 6px; right: 8px;  border-top: 5px solid transparent; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 6px solid #666666;  }
    .select_mask{ width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 99; }
    .drop_list{ box-sizing: border-box;padding: 4px; width: 100px; min-height: 28px; position: absolute; top: 26px; left: 0; background: #4285f4; border-radius: 0 0 2px 2px; }
    .drop_list>div{ line-height: 24px; font-size: 12px; box-sizing: border-box; padding-left: 6px; }
    .drop_list>div:hover,.seleced2_selected{ background: #dbedff; color: #333333; }


  </style>
<%--  <script type="text/javascript" src="${ctxStatic}/D.js"></script>--%>
</head>
<body id="body">
<section id="app">
  <div class="roll_info" v-if="pageShow" :style=" 'left:' + pageX + 'px;top:'+ pageY +'px;' ">
    <div style="padding-left: 8px;">{{selRoll.materialDesc}}</div>
    <div><span class="rlabel">捆包号:</span><span>{{selRoll.packageNo}}</span></div>
    <div><span class="rlabel">位置:</span><span>{{selRoll.location}}</span></div>
    <div class="close_info" @click="onCloseInfo()">x</div>
  </div>
  <div :class="['full_screen',isFull ? 'not_full' : '' ]" id="fullbtn" @click="onFullScreen()"></div>
  <div class="top"></div>
  <div class="title">
    <div class="title_info">
      <div class="info">
        <h6>库存数</h6>
        <div><span id="invetory"></span> 吨</div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>客户数</h6>
        <div><span id="custom"></span> 家</div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>当日入库量</h6>
        <div><span id="enter"></span> 吨</div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>质押指标（总数）</h6>
        <div><span id="pledge"></span></div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>待出库指标（总数）</h6>
        <div><span id="send"></span></div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>待加工指标（总数）</h6>
        <div><span id="process"></span></div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>当日出库量</h6>
        <div><span id="outer"></span> 吨</div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>当日吞吐量</h6>
        <div><span id="totaler"></span> 吨</div>
      </div>
    </div>
    <div class="title_info">
      <div class="info">
        <h6>当日结算量</h6>
        <div><span id="settler"></span> 元</div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="left">
      <div class="video_title">
        <div class="task_title">作业任务</div>
      </div>
      <div class="left_info">
        <div class="left_info_title">
          <div>库存:</div>
          <div id="inventoryNum">0 件</div>
        </div>
        <div class="left_info_title">
          <div>待出库:</div>
          <div id="sendNum">0 件</div>
        </div>
      </div>
      <div class="nav_info" >
        <div class="swiper-container" style="height: 100%;box-sizing: border-box;overflow: hidden">
          <div class="swiper-container" style="height: 100%">
            <div class="swiper-wrapper" style="line-height: 12px;" >
              <div class="swiper-slide" v-for="(val,index) in taskTimeList"
                   style="display: flex; align-items: center;padding-left: 20px;box-sizing: border-box;border-bottom: 1px solid rgba(255,255,255,.1); ">
                {{val||''}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vodeo" id="video1" style="height: 26%; margin-bottom: 0px;"></div>
      <div class="vodeo" id="video2" style="height: 26%;"></div>
    </div>
    <div class="right">
      <div class="show_title">
        <div style="display: flex;align-items: center;">
          <div class="task_info">作业动态</div>
          <div class="select_mask" v-show="warePover||areaPover" @click="onSelMask"></div>
          <div class="custom_select2" @click="onWareClick">
            <span>{{currentWareValue}}</span>
            <div class="drop_close" v-show="!warePover"></div>
            <div class="drop_open" v-show="warePover"></div>
            <div class="drop_list" v-show="warePover">
              <div v-for="val in wareList" @click="onWareChange($event,val)" :class="currentWare==val.id ? 'seleced2_selected':'' ">{{val.name}}</div>
            </div>
          </div>
          <div class="custom_select2" @click="onAreaClick">
            <span>{{currentTrackValue}}</span>
            <div class="drop_close" v-show="!areaPover"></div>
            <div class="drop_open" v-show="areaPover"></div>
            <div class="drop_list" v-show="areaPover">
              <div v-for="val in trackList" @click="onAreaChange($event,val)"  v-show="currentWare=='3'" :class="currentTrack==val.id ? 'seleced2_selected':'' ">{{val.text}}</div>
              <div v-for="val in outList" @click="onAreaChange($event,val)" v-show="currentWare=='4'" :class="currentTrack==val.id ? 'seleced2_selected':'' ">{{val.text}}</div>
            </div>
          </div>
        </div>
        <div class="strack">
          <div class="camera"></div>
          <div class="normal"></div>
          <div class="out2"></div>
          <div class="warn"></div>
          <div class="proroll"></div>
          <div class="outroll"></div>
          <div class="card" style="background: #fec469;">
            <div class="icon pro"></div>
            <div class="icon_info">
              <div>锁货中</div>
              <div><span>{{totalIssueNum}}</span>件</div>
            </div>
          </div>
          <div class="card" style="background: #ed6255;">
            <div class="icon pro"></div>
            <div class="icon_info">
              <div>期货</div>
              <div><span>{{totalTimeNum}}</span>件</div>
            </div>
          </div>
          <div class="card" style="background: #3e7430;">
            <div class="icon pro"></div>
            <div class="icon_info">
              <div>加工中</div>
              <div><span>{{totalProNum}}</span>件</div>
            </div>
          </div>
          <div class="card" style="background: #3974e1;">
            <div class="icon chuku"></div>
            <div class="icon_info">
              <div>出库中</div>
              <div><span id="receivingNum">{{totalOutNum}}</span>件</div>
            </div>
          </div>
        </div>
      </div>
      <div class="show_body">
        <div class="track_camera" v-if="currentWare!=4" @click="onPlayVideo(1)" style="top:5px; left: 15px; "></div>
        <div class="track_camera" v-if="currentWare!=4" @click="onPlayVideo(2)" style="bottom:0px; right: -4px; "></div>
        <div class="track_camera" v-if="currentWare==4" @click="onPlayVideo(1)" style="top:0; left: 30%; "></div>
        <div class="track_camera" v-if="currentWare==4" @click="onPlayVideo(2)" style="bottom:0; left: 90%; "></div>
        <div class="row_desc_new">
          <div :class="['desc_new',((val.row ==1||val.row ==2) && currentWare=='4')?'desc_new_high':'']" v-for="val in showLeft" :row="val.row+'排'"></div>
        </div>
        <div id="carBoxId" class="line_new">
          <div  v-if="Object.keys(rowCarInfo).length === 0" class="rowCar_new" :style=" 'left:' + 0 + '%;' " ></div>
          <div v-else>
            <div v-for="item in Object.keys(rowCarInfo)" :key="item" class="rowCar_new" :style=" 'left:' + rowCarInfo[item].axisx + '%;' " ></div>
          </div>

          <div v-if="currentWare=='4'" :class="['rows_new',((val.row ==1||val.row ==2) && currentWare=='4')?'rows_new_high':'']" v-for="val in showLeft">
            <div v-for="item in Object.keys(rowCarInfo)" :key="item" class="gou_new" v-if="val.row == rowCarInfo[item]._rowId" :style=" 'left:' + rowCarInfo[item].axisx + '%;bottom:' + rowCarInfo[item].axisy + '%;' ">
              <div  class="gou_info_new">{{rowCarInfo[item].fenceName||'暂无位置'}}</div>
            </div>
            <img :id="roll.location" @click="onClickRoll($event,roll)"
                 :class="['image_roll_new',currentWare=='4'?'image_roll_out_new':'',getRollClass(roll),selRoll.packageNo==roll.data.packageNo ? 'roll_active_new' : '']"
                 v-for="roll in val.list"
                 :style=" 'bottom:' + roll.y + '%;left:' + roll.x + '%;' + 'z-index:' + (roll.lay) "/>
          </div>
          <div v-if="currentWare!='4'" class="rows_new rows_new_3" v-for="val in showLeft">
            <img :id="roll.location" @click="onClickRoll($event,roll)"
                 :class="['image_roll_new','image_roll_out_new_3',getRollClass(roll),selRoll.packageNo==roll.data.packageNo ? 'roll_active_new' : '']"
                 v-for="roll in val.list"
                 :style=" 'bottom:' + roll.y + '%;left:' + roll.x + '%;' + 'z-index:' + (roll.col+roll.lay)  "/>
          </div>
        </div>
        <div class="road_new" v-if="currentWare!='4'"></div>
        <div class="line_new" v-if="currentWare!='4'">
          <div class="rows_new rows_new_3" v-for="val in showRight">
            <img :id="roll.location" @click="onClickRoll($event,roll)"
                 :class="['image_roll_new','image_roll_out_new_3',getRollClass(roll),selRoll.packageNo==roll.data.packageNo ? 'roll_active_new' : '' ]"
                 v-for="roll in val.list"
                 :style=" 'bottom:' + roll.y + '%;left:' + roll.x + '%;' + 'z-index:' + (roll.col+roll.lay) "/>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<script type="text/javascript" src="${ctxStatic}/vue/vue.min.js"></script>
<script type="text/javascript" src="${ctxStatic}/echarts/jsencrypt.min.js"></script>
<script type="text/javascript" src="${ctxStatic}/echarts/jsWebControl-1.0.0.min.js"></script>
<script type="text/javascript" src="${ctxStatic}/swiper/swiper-bundle.min.js"></script>
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
      showLeft:[],
      showRight:[],
      currentWare:'3',
      currentWareValue:'室内库3',
      currentTrack:'AG',
      currentTrackValue:'一跨',
      rowCarList:[],
      relationId:'',
      isFull:false,
      mySwiper:null,
      axisy:0,
      axisx:0,
      rowCarInfo:{},
      oldInfo:null,
      selRoll:{},
      track:[],
      pageShow:false,
      pageX:0,
      pageY:0,
      taskTimeList:[],
      areaPover:false,
      warePover:false,
      video1: null,
      video2: null,
      wareList:[
        {
          id:'3',
          name:'室内库3'
        },
        {
          id:'4',
          name:'室外库'
        }
      ],
      trackList:[
        {   text:'一跨',
          id:'AG',
          area:['A','G'],
          // camera:['4fa67d6946804935ba04da5847d72b65','c0e24ef47d714db5b2ae47ebc92512ee'],
          camera:['4fa67d6946804935ba04da5847d72b65','1c38c3ebb0554132bb34adae5678ea60'],
        },{
          text:'二跨',
          id:'BH',
          area:['B','H'],
          // camera:['b4356dd89398427a91468f011630cb44','a1ca4f1fe100479d8c441f693ae2e51e'],
          camera:['b4356dd89398427a91468f011630cb44','a4564fdfc43d41b7aeaedeb73a1c9105'],
        },{
          text:'三跨',
          id:'CJ',
          area:['C','J'],
          // camera:['dd6791aaa49e478683eee633bb15d21f','8af5b2091389421097cdcbc1470f1720'],
          camera:['dd6791aaa49e478683eee633bb15d21f','8051eb56172d42d498c87e32d2968f0b'],
        },{
          text:'四跨',
          id:'DK',
          area:['D','K'],
          // camera:['89c36b5fb1f44f38998ec298b5366d26','711a4c66ced44749a9e7ff76785623ce'],
          camera:['89c36b5fb1f44f38998ec298b5366d26','8b9c4867f933404e91d29b928e952faa'],
        },{
          text:'五跨',
          id:'EL',
          area:['E','L'],
          // camera:['ffaaa8fa0f63438caa78d45a44254f87','08680d8ee21040119d7b687b1f477819'],
          camera:['ffaaa8fa0f63438caa78d45a44254f87','5abb26fa3ca9484e8e11d3c1c055b492'],
        },{
          text:'六跨',
          id:'FM',
          area:['F','M'],
          // camera:['08ae604e686e468bad1c4b47c0c313de','f45797ad4016482eb1c81b09b867d0f0'],
          camera:['08ae604e686e468bad1c4b47c0c313de','5cb37dcc6c674692a05abd6852e5aa2d'],
        }
      ],
      outList:[
        {   text:'A区',
          id:'A',
          relationId:'4a459',
          camera:['d665129d3ca14d5288e25bf42cc4fa97','8217b224234c4ae9b45a8f7141debbc1']
        },{
          text:'B区',
          id:'B',
          relationId: '4d8ec',
          camera:['f60874dc6e0e4d899799ceb4972b3b55','1c25d516d7644afca8bd3ddf684899b4']
        },{
          text:'C区',
          id:'C',
          relationId: '4d805',
          camera:['5a2df711745947119ad7a374e7de9261','a7328bcc327e4f6f8b84c3829f7e8c0b']
        },{
          text:'D区',
          id:'D',
          relationId: '4d804',
          camera:['450771ae78da4ab0b1034628532746f9','22ac7c421ffd4ef4bb3241a53744fa99']
        },{
          text:'E区',
          id:'E',
          relationId: '4a2bb',
          camera:['1735c15e1d314b1eac583369461b89b4','3de7e21865924755ab7746436f4ff7be']
        },{
          text:'F区',
          id:'F',
          relationId:'4d847',
          camera:['c3f439e02c4e437a87390502d4b81a23','0ca8fe5732124bc998b929c6a86bb70e']
        }],
    },
    computed:{
      totalOutNum(){
        let self = this
        let num = 0
        let iventList = [...self.showLeft,...self.showRight]
        for(let i=0;i<iventList.length;i++){
          let list = iventList[i].list || []
          for(let j=0;j<list.length;j++){
            if(list[j].data.type=='02'){
              num = num + 1
            }
          }
        }
        return num;
      },
      totalProNum(){
        let self = this
        let num = 0
        let iventList = [...self.showLeft,...self.showRight]
        for(let i=0;i<iventList.length;i++){
          let list = iventList[i].list || []
          for(let j=0;j<list.length;j++){
            if(list[j].data.type=='04'){
              num = num + 1
            }
          }
        }
        return num;
      },
      totalIssueNum(){
        let self = this
        let num = 0
        let iventList = [...self.showLeft,...self.showRight]
        for(let i=0;i<iventList.length;i++){
          let list = iventList[i].list || []
          for(let j=0;j<list.length;j++){
            if(list[j].data.type=='03'){
              num = num + 1
            }
          }
        }
        return num;
      },
      totalTimeNum(){
        let self = this
        let num = 0
        let iventList = [...self.showLeft,...self.showRight]
        for(let i=0;i<iventList.length;i++){
          let list = iventList[i].list || []
          for(let j=0;j<list.length;j++){
            if(list[j].data.type=='01'){
              num = num + 1
            }
          }
        }
        return num;
      },
    },
    methods:{
      onWareChange:function (e,val){
        let self = this
        e.stopPropagation()
        self.warePover = false
        self.currentWare = val.id
        self.currentWareValue = val.name
        if(self.currentWare!='4'){
          self.video1.startPreview(self.trackList[0].camera[0])
          self.video2.startPreview(self.trackList[0].camera[1])
          self.track = self.trackList;
          self.currentTrack = 'AG';
          self.currentTrackValue = '一跨'
          self.getRelationId();
          self.getInventory(self.currentWare,['A','G']);
        } else {
          self.video1.startPreview(self.outList[0].camera[0])
          self.video2.startPreview(self.outList[0].camera[1])
          self.track = self.outList;
          self.currentTrack = 'A';
          self.currentTrackValue = 'A区'
          self.getRelationId();
          // self.getInventory(self.currentWare,['A']);
          self.getInventory('A',['A']);
        }
      },
      onAreaChange:function (e,val){
        let self = this
        self.video1.startPreview(val.camera[0])
        self.video2.startPreview(val.camera[1])
        e.stopPropagation()
        self.areaPover = false
        self.currentTrack = val.id
        self.currentTrackValue = val.text
        self.onCloseInfo()
        self.getRelationId()
        let _qu = this.currentWare === '4'?val.id:this.currentWare;
        self.getInventory(_qu,self.currentTrack.split(''))
      },
      onSelMask:function(){
        let self = this
        self.warePover = false
        self.areaPover = false
      },
      onWareClick:function(){
        let self = this
        self.areaPover = false
        if(self.warePover){
          self.warePover = false
        }else{
          self.warePover = true
        }
      },
      onAreaClick:function(){
        let self = this
        self.warePover = false
        if(self.areaPover){
          self.areaPover = false
        }else{
          self.areaPover = true
        }
      },
      getInventoryAndSendInfo:function(){
        let self = this
        $.post("${ctx}/showCenter/getInventoryAndSendInfo", {warehouseId:'2'}, function(data){
          $('#sendNum').text((data.sendNum||0)+' 件');
          $('#inventoryNum').text((data.inventoryNum||0)+' 件');
          let list = []
          for(let i=0;i<data.data.length;i++){
            let text = ''
            if(data.data[i].carPlateNo){
              text += (data.data[i].carPlateNo + ' ')
            }
            if(data.data[i].ladingCode){
              text += (data.data[i].ladingCode + ' ')
            }
            if(data.data[i].packageNo){
              text += (data.data[i].packageNo + ' ')
            }
            text += ' 出库'
            list.push(text)
          }
          self.taskTimeList = list
          if(self.taskTimeList.length>=6){
            self.getSwiper();
          }else{
            self.getSwiper(true);
          }
        });
      },
      getRollClass(val){
        // 01 期货 红色
        // 02 待出库 蓝色
        // 03 锁货 黄色
        // 04 加工  绿色
        // 灰色是正常现货卷
        if(val.data&&val.data.type=='01'){
          return 'image_roll3_new'
        }
        if(val.data&&val.data.type=='02'){
          return 'image_roll2_new'
        }
        if(val.data&&val.data.type=='03'){
          return 'image_roll1_new'
        }
        if(val.data&&val.data.type=='04'){
          return 'image_roll4_new'
        }
        // return 'image_roll3_new'
        return 'image_roll_new'
      },
      // getRollClass(val){
      //     if(val.data.inventoryLockStatus=='1'){
      //         return 'image_roll1'
      //     }
      //     if(val.data.inventoryLockStatus=='2'){
      //         return 'image_roll2'
      //     }
      //     if(val.data.inventoryLockStatus=='3'){
      //         return 'image_roll3'
      //     }
      //     return ''
      // },
      onCloseInfo(){
        let self = this
        self.pageShow = false
        self.selRoll = {}
      },
      onClickRoll(e,roll){
        let self = this
        self.pageShow = true
        self.selRoll = roll.data
        self.pageX = e.pageX+8
        self.pageY = e.pageY+8
        if(self.pageY+90>$(document).height()){
          self.pageY = $(document).height() - 90
        }
        if(self.pageX+180>$(document).width()){
          self.pageX = $(document).width() - 180
        }
      },
      onFullScreen(){
        let iframe = $($('#right>iframe',myDocument)[0]);
        if(!this.isFull){
          iframe.addClass('full_screen_mode')
          this.isFull = true
          setTimeout(()=>{
            fullScreen(document.getElementById('app'))
          })
        }else{
          iframe.removeClass('full_screen_mode')
          setTimeout(()=>{
            exitFullScreen()
          })
          this.isFull = false
        }
      },
      getRelationId(){
        let self = this
        let relationId = '';
        let list = []
        for(let i=0;i<self.rowCarList.length;i++){
          let obj = JSON.parse(JSON.stringify(self.rowCarList[i]))
          if(obj.deviceName.search('室外')>-1){
            obj.ware = '4'
            obj.track = obj.deviceName.replace(/(\S+)(\w+$)/,'$2')
            list.push(obj)
          }else if(obj.deviceName.search('3库')>-1){
            obj.ware = parseInt(obj.deviceName)+''
            let inc = parseInt(obj.deviceName.match(/\d+/g)[1])
            obj.track = self.trackList[inc-1].id
            list.push(obj)
          }
        }
        if(self.currentWare=='4'){
          for(let j=0;j<self.outList.length;j++){
            if(self.currentTrack == self.outList[j].id){
              relationId = self.outList[j].relationId
            }
          }
        }
        for(let k=0;k<list.length;k++){
          if(list[k].ware==self.currentWare&&list[k].track==self.currentTrack){
            if(list[k].relationId){
              relationId =  list[k].relationId
            }
          }
        }
        console.log('relationId : '+ relationId)
        self.relationId = relationId
      },
      getRowCar(){
        let self = this
        $.post("${ctx}/showCenter/getRowCarList", {}, function(data){
          self.rowCarList = data || []
          self.getRelationId();
        });
      },
      getInventory(ware,area){
        let self = this;
        self.showLeft = []
        self.showRight = []
        $.post("${ctx}/showCenter/showInventoryByQu", { qu:ware }, function(res){
          let list = res || []
          // list = window.__json
          let maxRow = 0;
          if(self.currentWare!='4'){
            for(let i=0;i<list.length;i++){
              let vent = self.inToLocation(list[i])
              if(Array.isArray(area) && vent.area==area[0]){
                self.showLeft.push(vent)
                if(vent.row>maxRow){
                  maxRow= vent.row
                }
              }else if(Array.isArray(area) && vent.area==area[1]){
                self.showRight.push(vent)
                if(vent.row>maxRow){
                  maxRow= vent.row
                }
              }
            }
            self.showLeft = self.dealAreaList(maxRow,self.showLeft)
            self.showRight = self.dealAreaList(maxRow,self.showRight)
          }else{
            for(let i=0;i<list.length;i++){
              let vent = self.inToLocation(list[i])
              if(Array.isArray(area) && vent.area==area[0]){
                self.showLeft.push(vent)
                if(vent.row>maxRow){
                  maxRow= vent.row
                }
              }
            }
            const quList = ['A','C','E']
            if(Array.isArray(area) && quList.includes(area[0])){
              maxRow = 4
            }else {
              maxRow = 3
            }
            const _showLeft = self.dealAreaList(maxRow,self.showLeft)
            self.showLeft = _showLeft.sort((a,b)=>{
              return b.row-a.row
            })
            self.showRight = []
            console.log(self.showLeft,'drx--self.showLeft1')
            console.log(self.showRight,'drx--self.showRight1')
          }
          craneWebSocketClient();
        });
      },
      dealAreaList(maxRow,list){
        let self = this
        let newList = []
        if(self.currentWare!='4'){
          maxRow = 10
          for(let k=1;k<=maxRow;k++){
            let obj = { row:k,list:[] }
            for(let i=0;i<list.length;i++){
              if(list[i].row==k){
                obj.list.push(list[i])
              }
            }
            newList.push(obj)
          }
          return newList;
        }else {
          for(let k=0;k<=maxRow;k++){
            let obj = { row:k,list:[] }
            for(let i=0;i<list.length;i++){
              if(list[i].row==k){
                obj.list.push(list[i])
              }
            }
            newList.push(obj)
          }
          return newList;
        }

      },
      inToLocation(material){ //转换成位置
        let obj = {}
        if(material && material.columnId && material.columnId.indexOf('库')==-1){
          obj.row = material.rowId;
          obj.col = material.columnId;
          obj.lay = material.storeyNo;
          obj.bingId = material.bingId;
          obj.location = material.location;
          const row = material.rowId
          if(this.currentWare==='4'){
            const wregion = material.wregion;
            if(wregion === 'A'||wregion === 'C'||wregion === 'E'){
              if(row == '1'|| row == '2'){
                obj.x = -0.37*(parseInt(obj.lay-2)) + 1.45*(parseInt(obj.bingId-1));
                obj.y = 5.1*(parseFloat(obj.col)-1) + 3.1*(parseFloat(obj.lay)-1);
              }else if(row == '0'||row == '3'||row == '4'){
                obj.y = 11*(parseInt(obj.lay-1)) ;
                obj.x = 0.65*(parseFloat(obj.lay)-1) + 0.9*(parseFloat(obj.col)-1) + 7.1*(parseFloat(obj.bingId)-1);
              }
            }else{
              if(row == '1'|| row == '2'){
                obj.x = -0.37*(parseInt(obj.lay-2)) + 1.45*(parseInt(obj.bingId-1));
                obj.y = 5.1*(parseFloat(obj.col)-1) + 3.1*(parseFloat(obj.lay)-1);
              }else if(row == '0'||row == '3'||row == '4'){
                obj.y = 11*(parseInt(obj.lay-1)) ;
                obj.x = 0.65*(parseFloat(obj.lay)-1) + 0.9*(parseFloat(obj.col)-1) + 7.1*(parseFloat(obj.bingId)-1);
              }
            }
          }else{
            const _wregion = material.wregion;
            let  wregion_ = _wregion.match(/[A-Za-z]/g)
            if(wregion_){
              let wregion = wregion_[0]
              if(wregion === 'A'||wregion === 'B'||wregion === 'C'||wregion === 'D'||wregion === 'E'||wregion === 'F'){
                obj.y = 14*(parseInt(obj.lay-1)) ;
                obj.x = 99 - (0.7*(parseFloat(obj.lay)-1) + 1.5*(parseFloat(obj.col)-1) + 17*(parseFloat(obj.bingId)-1));
              }else{
                obj.y = 14*(parseInt(obj.lay-1)) ;
                obj.x = (0.7*(parseFloat(obj.lay)-1) + 1.5*(parseFloat(obj.col)-1) + 17*(parseFloat(obj.bingId)-1));
              }
            }
          }
          if(material.location && material.location.match(/[A-z]/)[0]){
            obj.area = material.location.match(/[A-z]/)[0]
          }
          obj.data = JSON.parse(JSON.stringify(material))
          return obj;
        }
        return obj
      },
      getTopInfo:function(){
        $.post("${ctx}/showCenter/getTopDataInfo", {warehouseId:'2'}, function(data){
          console.log('data :>> ', data);
          $('#invetory').text(parseFloat(data['库存量']) || '0')
          $('#custom').text(parseFloat(data['客户数']) || '0')
          $('#enter').text(parseFloat(data['当日入库数']) || '0')
          $('#pledge').text(parseFloat((data['dynamipledgeLockNum']) || '0') + " 件 / " + (parseFloat(data['dynamipledgeLockWeight']) || '0')+" 吨")
          $('#send').text(parseFloat((data['sendLockNum']) || '0')+ " 件 / " + (parseFloat(data['sendLockWeight']) || '0') + ' 吨')
          $('#process').text(parseFloat((data['processLockNum']) || '0')+ " 件 / " + (parseFloat(data['processLockWeight']) || '0')+ ' 吨')
          $('#outer').text(parseFloat(data['当日出库数']) || '0')
          $('#totaler').text(parseFloat(data['当日吞吐量']) || '0')
          $('#settler').text(parseFloat(data['当日结算']) || '0')
        });
      },
      getRowCarLoc(list){
        let self = this
        const currentWare = self.currentWare;
        const currentTrack = self.currentTrack;
        let _rowCar = {};
        if(currentWare ==='4'){
          const relationIdObj = {
            'A':['4a459','4d805','4a2bb'],
            'B':['4d807','4d804','4d847'],
            'C':['4a459','4d805','4a2bb'],
            'D':['4d807','4d804','4d847'],
            'E':['4a459','4d805','4a2bb'],
            'F':['4d807','4d804','4d847'],
          }
          const tagIds = relationIdObj[currentTrack]
          for(let i=0;i<list.length;i++){
            let axisy=0 , axisx=0;
            let rowCar = list[i];
            let layerName = rowCar.layerName;
            if(layerName!=='室外') {
              continue
            }
            let tagId = rowCar.tagId;
            let isNow = tagIds.indexOf(tagId)!==-1;
            if(!isNow){
              continue
            }
            const ZMre = /[A-Za-z]/
            let loc = rowCar.fenceName;
            if(!loc){
              continue
            }
            const ZMreList = loc.match(ZMre);
            if(!Array.isArray(ZMreList)){
              continue
            }
            const wregion = ZMreList[0];
            if(wregion !== currentTrack){
              continue
            }
            const fenceNameReg = /^[A-Za-z]\d+(?:-\d+){3}$/;
            if(fenceNameReg.test(loc)) {
              const re = /\d+/g;
              const infoList = loc.match(re);
              const row = parseFloat(infoList[0])
              const bingId = parseFloat(infoList[1])
              const columnId = parseFloat(infoList[2])
              const storeyNo = parseFloat(infoList[3]);
              if(wregion === 'A'||wregion === 'C'||wregion === 'E'){
                if(row == '1'|| row == '2'){
                  axisx = -0.37*(parseInt(storeyNo-2)) + 1.45*(parseInt(bingId-1));
                  axisy = 3.1*(parseFloat(storeyNo)-1) + 5.1*(parseFloat(columnId)-1);
                }else if(row == '0'||row == '3'||row == '4'){
                  axisy = 11*(parseInt(storeyNo-1)) ;
                  axisx = 0.65*(parseFloat(storeyNo)-1) + 0.9*(parseFloat(columnId)-1) + 7.1*(parseFloat(bingId)-1);
                }
              }else{
                if(row == '1'|| row == '2'){
                  axisx = -0.37*(parseInt(storeyNo-2)) + 1.45*(parseInt(bingId-1));
                  axisy = 3.1*(parseFloat(storeyNo)-1) + 5.1*(parseFloat(columnId)-1);
                }else if(row == '0'||row == '3'){
                  axisy = 11*(parseInt(storeyNo-1)) ;
                  axisx = 0.65*(parseFloat(storeyNo)-1) + 0.9*(parseFloat(columnId)-1) + 7.1*(parseFloat(bingId)-1);
                }
              }
              _rowCar[tagId] = Object.assign(rowCar,{
                _rowId:row,
                axisx:axisx,
                axisy:axisy,
              })
            }
          }
          self.rowCarInfo = _rowCar
        }else {
          self.rowCarInfo = _rowCar
        }
      },
      onPlayVideo(type){
        let self = this
        if(self.currentWare=='4'){
          for(let i =0;i<self.outList.length;i++){
            if(self.currentTrack==self.outList[i].id){
              let uuid = self.outList[i].camera[parseInt(type)-1]
              if(type==1){
                self.video1.startPreview(uuid)
              }else{
                self.video2.startPreview(uuid)
              }
            }
          }
        }else{
          for(let i =0;i<self.trackList.length;i++){
            if(self.currentTrack==self.trackList[i].id){
              let uuid = self.trackList[i].camera[parseInt(type)-1]
              if(type==1){
                self.video1.startPreview(uuid)
              }else{
                self.video2.startPreview(uuid)
              }
            }
          }
        }
      },
      getSwiper(key){
        let self = this
        setTimeout(()=>{
          if(key){
            self.mySwiper = new Swiper ('.swiper-container', {
              direction: 'vertical', // 垂直切换选项
              slidesPerView : 6,
              centerInsufficientSlides: true,
            })
          }else{
            self.mySwiper = new Swiper ('.swiper-container', {
              direction: 'vertical', // 垂直切换选项
              loop: true, // 循环模式选项
              slidesPerView : 6,
              autoplay:{
                delay:1500,
              },
            })
          }
        },1000)
      }
    },
    mounted(){
      this.track = this.trackList;
      this.getInventoryAndSendInfo();
      this.getTopInfo();
      this.getRowCar();
      this.getInventory(this.currentWare,['A','G']);
      craneWebSocketClient();
    }
  })
  function fullScreen(element){
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
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
  function isFullScreen(element) {
    return (
        element.fullscreen ||
        element.mozFullScreen ||
        element.webkitIsFullScreen ||
        element.webkitFullScreen ||
        element.msFullScreen
    );
  }
  // 行车定位websocket
  var craneWebSocket;
  function craneWebSocketClient(){
    if(typeof(WebSocket) == "undefined") {
      console.log("您的浏览器不支持WebSocket");
    }else{
      let socketUrl="wss://www.jdzt168.com/tsWebSocket/craneWebSocketNew";
      if(craneWebSocket!=null){
        craneWebSocket.close();
        craneWebSocket=null;
      }
      craneWebSocket = new WebSocket(socketUrl);
      //打开事件
      craneWebSocket.onopen = function() {
        console.log("行车websocket已打开");
      };
      //获得消息事件
      craneWebSocket.onmessage = function(msg) {
        let list = JSON.parse(msg.data);
        appVue.getRowCarLoc(list);
      };
      //关闭事件
      craneWebSocket.onclose = function() {
        console.log("行车websocket已关闭");
      };
      //发生了错误事件
      craneWebSocket.onerror = function() {
        console.log("行车websocket发生了错误");
      }
    }
  }

  $(window).load(function () {
    $('#right',myDocument).css('margin','-5px 0 0 -1px');
    appVue.video1 = new VideoPlay('video1','4fa67d6946804935ba04da5847d72b65');
    appVue.video2 = new VideoPlay('video2','c0e24ef47d714db5b2ae47ebc92512ee');
  });
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
      let iframe = $('#right>iframe',myDocument)[0];
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
        this.oWebControl && this.oWebControl.JS_RequestInterface({
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
    startPreview(code){
      let cameraIndexCode  = this.code;     //获取输入的监控点编号值，必填
      if(code){
        cameraIndexCode = code;
      }
      let streamMode = 0;                                     //主子码流标识：0-主码流，1-子码流
      let transMode = 1;                                      //传输协议：0-UDP，1-TCP
      let gpuMode = 0;                                        //是否启用GPU硬解，0-不启用，1-启用
      let wndId = -1;                                         //播放窗口序号（在2x2以上布局下可指定播放窗口）
      cameraIndexCode = cameraIndexCode.replace(/(^\s*)/g, "");
      cameraIndexCode = cameraIndexCode.replace(/(\s*$)/g, "");
      this.oWebControl && this.oWebControl.JS_RequestInterface({
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
      this.oWebControl && this.oWebControl.JS_RequestInterface({
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
    reSize(){
      this.domWidth = document.getElementById(this.id).offsetWidth;
      this.domHeight = document.getElementById(this.id).offsetHeight+1;
      this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
      this.setWndCover()
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
          let iframe = $('#right>iframe',myDocument)[0];
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
          this.domWidth = document.getElementById(this.id).offsetWidth;
          this.domHeight = document.getElementById(this.id).offsetHeight+1;
          this.oWebControl.JS_Resize(this.domWidth, this.domHeight);
          this.setWndCover()
        }
      });
      //监听页面隐藏/显示事件
      let app = $('#mainFrame',myDocument)[0];
      if(app){
        let observer = new MutationObserver((mutations) => {
          if(app.style.display=='none'){
            if (this.oWebControl != null){
              this.oWebControl.JS_HideWnd();   // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
              this.oWebControl.JS_Disconnect().then(function(){  // 断开与插件服务连接成功
              },() => {});// 断开与插件服务连接失败
            }
          }
          // else{
          //     this.initPlugin();
          // }
        });
        observer.observe(app, { attributes:true });
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
</div>
</body>
</html>
