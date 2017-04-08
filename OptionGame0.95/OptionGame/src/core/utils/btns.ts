module btns{

    export class BtnRoundRect extends egret.Sprite{

        private btn_id:number;//
        private numColorNormal:number;
        private numColorClick:number;
        private tfTxBtn:egret.TextField;
        private nPadding :number = 10;

        constructor(strTxBtn:string,numColorNormal:number=0x288328,numColorClick:number=0x1C5B1C){//numWidthBtn:number=120,numHeightBtn:number=60,
            super();
            //this.width = numWidthBtn;
            //this.height = numHeightBtn;
            this.numColorClick = numColorClick;
            this.numColorNormal = numColorNormal;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchSelf,this);
            this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchSelf,this);
            this.touchEnabled = true;

            var tfTxBtn:egret.TextField = new egret.TextField;
            btns.setProps(tfTxBtn,{
                size:20,x:this.nPadding,y:this.nPadding//bold:true,
            });
            this.addChild(tfTxBtn);
            this.tfTxBtn = tfTxBtn;
            this.SetLabel(strTxBtn);
        }
        public SetBtnID(btn_id:number):void
        {
            this.btn_id = btn_id;
        }
        public GetBtnID():number
        {
            return this.btn_id;
        }
        private touchSelf(evt:egret.TouchEvent){
            this.drawSelf(evt.type==egret.TouchEvent.TOUCH_BEGIN?this.numColorClick:this.numColorNormal);
        }
        private drawSelf(numColor:number){
            this.graphics.clear();
            this.graphics.beginFill(numColor);
            this.graphics.drawRoundRect(0,0,this.width,this.height,this.height/3,this.height/3);
            this.graphics.endFill();
        }
        public SetLabel(str:string){
            this.tfTxBtn.text = str;
            this.width = this.tfTxBtn.width + this.nPadding*2;
            this.height = this.tfTxBtn.height + this.nPadding*2;
            this.drawSelf(this.numColorNormal);
        }
    }
    
    export class BtnBmBm extends egret.DisplayObjectContainer{

        private bmBgBtn:egret.Bitmap;
        private bmTxBtn:egret.Bitmap;
        constructor(nameTextureBg:string,nameTextureTx:string,propsBg?:any,propsTx?:any){
            super();
            var bmBgBtn :egret.Bitmap = new egret.Bitmap(RES.getRes(nameTextureBg));
            btns.setProps(bmBgBtn,{x:bmBgBtn.width/2,y:bmBgBtn.height/2},[0.5,0.5]);
            var bmTxBtn :egret.Bitmap = new egret.Bitmap(RES.getRes(nameTextureTx));
            btns.setProps(bmTxBtn,{x:bmBgBtn.x,y:bmBgBtn.y},[0.5,0.5]);
            btns.addChildren(this,[bmBgBtn,bmTxBtn]);

            if(propsTx) btns.setProps(bmTxBtn,propsTx);
            if(propsBg) btns.setProps(bmBgBtn,propsBg);
            this.bmBgBtn = bmBgBtn;
            this.bmTxBtn = bmTxBtn;
        }
        public ctrlTouch(canTouch){
            this.touchEnabled = canTouch;
            this.alpha = canTouch ? 1 : 0.5;
        }
        public updateBtn(nameTextureBg:string,nameTextureTx:string){
            this.bmBgBtn.texture = RES.getRes(nameTextureBg);
            this.bmTxBtn.texture = RES.getRes(nameTextureTx);
        }

    }
    export class BtnBmTf extends egret.DisplayObjectContainer{

        private bgBtn:egret.Bitmap;
        private txBtn:egret.TextField;

        constructor(nameTextureBg:string,txTf:string,propsBg?:any,propsTx?:any){
            super();
            var bgBtn = new egret.Bitmap(RES.getRes(nameTextureBg));
            if(propsBg) btns.setProps(bgBtn,propsBg,[0.5,0.5]);
            btns.setProps(bgBtn,{x:bgBtn.width/2,y:bgBtn.height/2,name:'bg_btn'},[0.5,0.5]);
            if(propsBg) btns.setProps(bgBtn,propsBg,[0.5,0.5]);

            var txBtn = new egret.TextField();
            btns.setProps(txBtn,{text:txTf,x:bgBtn.width/2,y:bgBtn.height/2,name:'tx_btn'},[0.5,0.5]);
            if(propsTx)
                btns.setProps(txBtn,propsTx);

            btns.addChildren(this,[bgBtn,txBtn]);
            this.txBtn = txBtn;
            this.bgBtn = bgBtn;
        }
        public modifyPropsTx(props:any,arrAnchor?:Array<number>){
            btns.setProps(this.txBtn,props,arrAnchor);
        }
        public modifyPropsBgBtn(props:any,arrAnchor?:Array<number>){
            btns.setProps(this.bgBtn,props,arrAnchor);
        }

    }
    export function initFloatBtn(obj:any,nYOffset:number=5){
        obj.touchEnabled = true;
        var numYOrigin:number = obj.y;
        //触摸动作开始
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(evt:egret.TouchEvent)=>{
            if(evt.target!=obj) return;
            twScaleButton(obj,'down');
        },this);
        //触摸动作结束
        obj.addEventListener(egret.TouchEvent.TOUCH_END,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'up');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'up');
        },this);
        
        function twScaleButton(obj:any,wayTw:string){
            var yPos = wayTw=='down'?numYOrigin+nYOffset:numYOrigin;
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                .to({y:yPos},60,egret.Ease.bounceOut);
        }
    }
    export function initScaleBtn(obj:any,funEnd?:Function,scopeEnd?:any){
        obj.touchEnabled = true;
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(evt:egret.TouchEvent)=>{
            if(evt.target!=obj) return;
            twScaleButton(obj,'small');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_END,(evt:egret.TouchEvent)=>{
            if(evt.target!=obj) return;
            twScaleButton(obj,'big');
            if(funEnd)
                funEnd.call(scopeEnd)
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_MOVE,(evt:egret.TouchEvent)=>{
            if(evt.target!=obj) return;
            twScaleButton(obj,'big');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
        },this);
        function twScaleButton(obj:any,wayTw:string){
            var scaleFactor = wayTw=='small'?0.9:1;
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                .to({scaleX:scaleFactor,scaleY:scaleFactor},60,egret.Ease.bounceOut);
        }
    }


    /**
     * 按钮点击时缩放效果
     * 注意：使用此函数后若需要使用碰撞，注意锚点改变，不能直接获取x，y值
     * 不要在界面切换时会调用的函数中使用，避免切换界面多次调用
     */
     export function initScaleBtn1(obj:any,funEnd?:Function,scopeEnd?:any){
         let time = 0;
        obj.touchEnabled = true;
        
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'small');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_END,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
            if(funEnd)
                funEnd.call(scopeEnd)
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_MOVE,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
        },this);
        function twScaleButton(obj:any,wayTw:string){
            var scaleFactor = wayTw=='small'?0.93:1;

            if(time == 0){
                // obj.x = obj.x + Math.floor(obj.width*0.5);
                // obj.y = obj.y + obj.height;
                // obj.anchorOffsetX = Math.floor(obj.width*0.5);
                // obj.anchorOffsetY = obj.height;
                time ++;
            }
           
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                    .to({scaleX:scaleFactor,scaleY:scaleFactor},60,egret.Ease.bounceOut);
            
        }
    }

    /**
     * 按钮点击时缩放效果
     * 注意：使用此函数后若需要使用碰撞，注意锚点改变，不能直接获取x，y值
     * 不要在界面切换时会调用的函数中使用，避免切换界面多次调用
     */
     export function initScaleBtn2(obj:any,funEnd?:Function,scopeEnd?:any){
         let time = 0;
        obj.touchEnabled = true;
        
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'small');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_END,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
            if(funEnd)
                funEnd.call(scopeEnd)
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_MOVE,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
        },this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,(evt:egret.TouchEvent)=>{
            // if(evt.target!=obj) return;
            twScaleButton(obj,'big');
        },this);
        function twScaleButton(obj:any,wayTw:string){
            var scaleFactor = wayTw=='small'?0.93:1;

            if(time == 0){
                obj.x = obj.x + Math.floor(obj.width*0.5);
                obj.y = obj.y + Math.floor(obj.height*0.5);
                obj.anchorOffsetX = Math.floor(obj.width*0.5);
                obj.anchorOffsetY = Math.floor(obj.height*0.5);
                time ++;
            }
           
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                    .to({scaleX:scaleFactor,scaleY:scaleFactor},60,egret.Ease.bounceOut);
            
        }
    }

    /**
     * 面板切换时由上方向下运动
     */
    export function inScalePanel2(obj:any,x:number,y:number){
        obj.anchorOffsetX = obj.width/2;
        obj.anchorOffsetY = obj.height/2;

        obj.x = -1500;
        obj.y = y + obj.height/2;

        egret.Tween.get(obj).to({x:(x + obj.width/2)},120,egret.Ease.bounceOut);
    }

    /**
     * 面板切换时由上方向下运动
     */
    export function inScalePanel3(obj:any,x:number,y:number){
        obj.anchorOffsetX = obj.width/2;
        obj.anchorOffsetY = obj.height/2;

        obj.x = x + obj.width/2;
        obj.y = -700;

        egret.Tween.get(obj).to({y:(y + obj.height/2)},120,egret.Ease.bounceOut);
    }


     /**
     * 面板切换时由无到有
     */
    export function inScalePanel(obj:any,x:number,y:number){
        obj.anchorOffsetX = obj.width/2;
        obj.anchorOffsetY = obj.height/2;

        obj.x = x + obj.width/2;
        obj.y = y + obj.height/2;
        obj.alpha = 0;
        egret.Tween.get(obj).to({alpha:1},200,egret.Ease.bounceOut);
    }

    /**
     * 面板切换时由大到小效果
     */
    export function inScalePanel1(obj:any,x:number,y:number){
        // console.log("面板大小"+obj.height);
        obj.anchorOffsetX = obj.width/2;
        obj.anchorOffsetY = obj.height/2;

        obj.x = x + obj.width/2;
        obj.y = y + obj.height/2;
        obj.scaleX = 1.2;
        obj.scaleY = 1.2;
        egret.Tween.get(obj).to({scaleX:1,scaleY:1},120,egret.Ease.bounceOut);
    }
    
    /**
     * 处理对象类 ******************************************************************************************************
     */
    export function setProps(obj:any, objProperty:Object, objAnchor?:Array<number>) {
        for (var i in objProperty) {
            obj[i] = objProperty[i];
        }
        if (objAnchor) {
            obj.anchorOffsetX = obj.width * objAnchor[0];
            obj.anchorOffsetY = obj.height * objAnchor[1];
        }
    }

    export function addChildren(container:any, arr:Array<egret.DisplayObject>) {
        for (var i in arr) {
            container.addChild(arr[i]);
        }
    }
}