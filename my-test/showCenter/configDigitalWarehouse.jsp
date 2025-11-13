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
        /* .top{ flex:6; box-sizing: border-box; background: 0 0 / 50% 96% no-repeat url("${ctxStatic}/images/lineLc.png") , 100% 0 / 50% 96% no-repeat url("${ctxStatic}/images/lineRc.png") , 50% 36% / 25% 74% no-repeat url("${ctxStatic}/images/logo04.png"); }
        .title{ flex:6; box-sizing: border-box; display: flex; align-items: center; }
        .title_info{ flex: 1; background: #143697; position: relative; box-sizing: border-box; border-radius: 6px; height: 90%; margin: 0 4px; }
        .title_info::before{content: ''; width: 4px; height: 72%; background: #4285f4; position: absolute; top: 14%; left: 5%; border-radius: 1px; }
        .info{margin-left: 12%; display: flex; flex-direction: column; justify-content: center; height: 100%; color: white; }
        .info h6{ color: white; } */

        .content{flex:60; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; }
        .left{ flex:2; background: #143697; border-radius: 6px 6px 0 0; margin: 4px; overflow: hidden; }
        .right{ flex:7; background: #143697; border-radius: 6px; margin: 4px; color:white; display: flex; flex-direction: column; }
        .bottom{ flex:2; background: #143697; border-radius: 6px; margin: 4px; color:white; display: flex; flex-direction: column;overflow-y: scroll;}
        .bottom_btn{ flex:.5; background: #143697; border-radius: 6px; margin: 4px; color:white; display: flex;justify-content: center; align-items: center;   }
        .bottom_btn button {
            margin-left: 10px;
            border-radius: 3px;
            min-width: 80px;
            height: 28px;
            margin: 1px 7px 0 0;
            cursor: default;
        }
        .bottom_btn .confirm {
            border: #007bff 1px solid;
            background: #007bff;
            color: #ffffff;
           
        }
        .bottom_btn .cancel {
            border: #ccc 1px solid;
            color: #888;
            background: #fafafa;
        }
        .bottom  .searchui  {width: 100%;}
        .bottom  .searchui  tr td,.bottom  .searchui  tr th { text-align: center;} 
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

        .image_roll{ cursor: pointer; height: 33%; width: 3.5%; content: url("${ctxStatic}/images/normal-roll.svg"); position: absolute; bottom: 0; left: 0; }
        .image_roll1{ content: url("${ctxStatic}/images/yellow-roll.svg"); }
        .image_roll2{ content: url("${ctxStatic}/images/pro-roll.svg"); }
        .image_roll3{ content: url("${ctxStatic}/images/warn-roll.svg"); }

        .image_roll_out{ height: 35%; width: 1.34%; position: absolute; bottom: 0; left: 0; }

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

        /* 滚动条整体样式 */
        ::-webkit-scrollbar {
            width: 4px; /* 滚动条宽度 */
        }

        /* 滚动条轨道 */
        ::-webkit-scrollbar-track {
            background-color: #263238; /* 轨道背景色，暗色背景 */
        }

        /* 滚动条滑块 */
        ::-webkit-scrollbar-thumb {
            background-color: #c8d1eb; /* 滑块颜色，主色调 */
            border-radius: 3px; /* 滑块圆角 */
            border: 2px solid #1a2884; /* 滑块边框，辅助颜色 */
        }

        /* 滚动条滑块悬停样式 */
        ::-webkit-scrollbar-thumb:hover {
            background-color: #1a2884; /* 悬停时滑块颜色，更深的蓝色 */
            border: 2px solid #c8d1eb; /* 滑块边框，辅助颜色 */

        }

    </style>
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
     <div class="content">
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
            </div>
            <div class="show_body" style="overflow:auto">
                <div class="row_desc">
                    <div class="desc" v-for="val in showLeft" :row="val.row+'排'"></div>
                </div>
                <div class="line">
                    <div class="rows" v-for="val in showLeft" >
                        <img @click="onClickRoll($event,roll)"
                             :class="['image_roll',currentWare=='4'?'image_roll_out':'',getRollClass(roll),getActiveClass(roll.data) ? 'roll_active' : '']"
                             v-for="roll in val.list"
                             :style=" 'bottom:' + roll.y + '%;left:' + roll.x + '%;' + 'z-index:' + (roll.col+roll.lay) "/>
                    </div>
                </div>
                <div class="road" v-if="currentWare!='4'"></div>
                <div class="line" v-if="currentWare!='4'">
                    <div class="rows" v-for="val in showRight" >
                        <img @click="onClickRoll($event,roll)" :class="['image_roll',getRollClass(roll),getActiveClass(roll.data) ? 'roll_active' : '' ]" v-for="roll in val.list" :style=" 'bottom:' + roll.y + '%;left:' + roll.x + '%;' + 'z-index:' + (roll.col+roll.lay) "/>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <table class="searchui">
                <tr>
                    <th>序</th>
                    <th>捆包号</th>
                    <th>位置</th>
                </tr>
                <tr v-for="(item,i) in selectList" :key="item.id">
                    <td>{{i+1}}</td>
                    <td>{{item.packageNo}}</td>
                    <td>{{item.location}}</td>
                </tr>
            </table>
           
        </div>
        <div class="bottom_btn">
            <button class="button cancel" @click="goCancel">取消</button>
            <button class="button confirm" @click="goConfirm">确定</button>
        </div>
    </div>
</section>
<script type="text/javascript" src="${ctxStatic}/vue/vue.min.js"></script>
<script type="text/javascript" src="${ctxStatic}/echarts/jsencrypt.min.js"></script>
<script type="text/javascript" src="${ctxStatic}/echarts/jsWebControl-1.0.0.min.js"></script>
<script type="text/javascript" src="${ctxStatic}/swiper/swiper-bundle.min.js"></script>
<script type="text/javascript">
    let appVue = new Vue({
        el: '#app',
        data: {
            showLeft:[],
            showRight:[],
            currentWare:'4',
            currentWareValue:'室外库',
            currentTrack:'A',
            currentTrackValue:'A区',
            rowCarList:[],
            relationId:'',
            isFull:false,
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
            selectList: [],
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
                },{
                    text:'二跨',
                    id:'BH',
                    area:['B','H'],
                },{
                    text:'三跨',
                    id:'CJ',
                    area:['C','J'],
                },{
                    text:'四跨',
                    id:'DK',
                    area:['D','K'],
                },{
                    text:'五跨',
                    id:'EL',
                    area:['E','L'],
                },{
                    text:'六跨',
                    id:'FM',
                    area:['F','M'],
                }],
            outList:[
                {   text:'A区',
                    id:'A',
                    relationId:'4a459',
                },{
                    text:'B区',
                    id:'B',
                    relationId: '4d807',
                },{
                    text:'C区',
                    id:'C',
                    relationId: '4d805',
                },{
                    text:'D区',
                    id:'D',
                    relationId: '4d804',
                },{
                    text:'E区',
                    id:'E',
                    relationId: '4a2bb',
                },{
                    text:'F区',
                    id:'F',
                    relationId:'4d847',
                }],
        },
        computed:{},
        methods:{
            onWareChange:function (e,val){
                let self = this
                e.stopPropagation()
                self.warePover = false
                self.currentWare = val.id
                self.currentWareValue = val.name
                if(self.currentWare!='4'){
                    self.track = self.trackList;
                    self.currentTrack = 'AG';
                    self.currentTrackValue = '一跨'
                    self.getRelationId();
                    self.getInventory(self.currentWare,['A','G']);
                } else {
                    self.track = self.outList;
                    self.currentTrack = 'A';
                    self.currentTrackValue = 'A区'
                    self.getRelationId();
                    self.getInventory(self.currentWare,['A']);
                }
            },
            onAreaChange:function (e,val){
                let self = this
                e.stopPropagation()
                self.areaPover = false
                self.currentTrack = val.id
                self.currentTrackValue = val.text
                self.onCloseInfo()
                self.getRelationId()
                self.getInventory(this.currentWare,self.currentTrack.split(''))
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
                });
            },
            getRollClass(val){
                if(`${inventoryIdList}`.indexOf(val.data.id) !== -1){
                    return 'image_roll3'
                }
                return ''
            },
            getActiveClass(val) {
                return this.selectList.some(item => item.id == val.id)
            },
            onCloseInfo(){
                let self = this
                self.pageShow = false
                self.selRoll = {}
            },
            onClickRoll(e,roll){
                const { id, location, packageNo } = roll.data
                if(`${inventoryIdList}`.indexOf(id) === -1) return;
                let selectList = this.selectList;
                if(selectList.every(item => item.id !== id)) {
                    selectList.push({
                        id,
                        location,
                        packageNo
                    })
                }else {
                    selectList =  selectList.filter(item=> item.id !== id)
                }
                this.selectList = selectList
                console.log(' this.selectList :>> ',  this.selectList);
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
                let iframe = $($('#right>iframe',window.parent.document)[0]);
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
                    }else{
                        obj.ware = parseInt(obj.deviceName)+''
                        let inc = parseInt(obj.deviceName.match(/\d+/g)[1])
                        obj.track = self.trackList[inc-1].id
                    }
                    list.push(obj)
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
                    let maxRow = 0;
                    if(self.currentWare!='4'){
                        for(let i=0;i<list.length;i++){
                            let vent = self.inToLocation(list[i])
                            if(vent.area==area[0]){
                                self.showLeft.push(vent)
                                if(vent.row>maxRow){
                                    maxRow= vent.row
                                }
                            }else if(vent.area==area[1]){
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
                            if(vent.area==area[0]){
                                self.showLeft.push(vent)
                                if(vent.row>maxRow){
                                    maxRow= vent.row
                                }
                            }
                        }
                        self.showLeft = self.dealAreaList(maxRow,self.showLeft)
                        self.showRight = []
                    }
                });
            },
            dealAreaList(maxRow,list){
                let self = this
                let newList = []
                if(self.currentWare!='4'){
                    maxRow = 10
                }
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
            },
            inToLocation(material){ //转换成位置
                let obj = {}
                let loc = material.location
                obj.row = loc.search(/排/)>-1 ? parseInt(loc.match(/[\d]+(?=排)/)?loc.match(/[\d]+(?=排)/)[0]:1) : 1;
                obj.col = loc.search(/列/)>-1 ? parseInt(loc.match(/[\d]+(?=列)/)?loc.match(/[\d]+(?=列)/)[0]:1) : 1;
                obj.lay = loc.search(/层/)>-1 ? parseInt(loc.match(/[\d]+(?=层)/)?loc.match(/[\d]+(?=层)/)[0]:1) : 1;
                obj.y = 20*(parseInt(obj.lay-1));
                obj.x = 1.4*(parseFloat(obj.lay)-1) + 2.8*(parseFloat(obj.col)-1);
                if(this.currentWare=='4'){
                    obj.y = 30*(parseInt(obj.lay-1));
                    obj.x = 0.6*(parseFloat(obj.lay)-1) + 1.2*(parseFloat(obj.col)-1);
                }
                obj.area = material.location.match(/[A-z]+(?=区)/)[0]
                obj.data = JSON.parse(JSON.stringify(material))
                return obj;
            },
            // 返回前置页面
            goCancel() {
                window.history.back();
            },
            // 提交到前置页面
            goConfirm() {
                if (this.selectList.length == 0){
                    alertx("请选择一个库存后确认!");
                    return;
                }

                let packageNos = '';
                for(let i=0;i<this.selectList.length;i++) {
                    packageNos +=this.selectList[i].packageNo+',';
                }
                packageNos = packageNos.substring(0,packageNos.length-1);

                window.location.href="${ctx}/lading/proInternalLadingDetail/sendToTaskOrderList?packageNos="
                    +packageNos+"&carPlateNo="+"${carPlateNo}";
            }
        },
        mounted(){
            this.track = this.trackList;
            this.getInventoryAndSendInfo();
            this.getRowCar();
            this.getInventory(this.currentWare,['A','G']);
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
</script>
</div>
</body>
</html>