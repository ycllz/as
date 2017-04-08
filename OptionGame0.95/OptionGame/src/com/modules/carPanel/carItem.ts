/**
 * 租车行车辆信息item
 * */
class carItem extends eui.Component{
    private carId:number;
    private carIco:eui.Image;
    private carTime:eui.Label;
    private carPrice:eui.Label;
    private carResult:eui.Image;

    private btn_watch:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.carItemSkin;

        this.btn_watch.touchEnabled = true;
        btns.initScaleBtn1(this.btn_watch);
        this.btn_watch.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchItem,this);

         //移除item时释放这上面监听的事件
        // this.btn_watch.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage, this);
    }
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:carItemVo):void{ 
        this.carId = vo.trade - 1;

        RES.getResAsync(vo.getImgUrl(), this.onLoadOverIcon, this);
        this.carTime.text = vo.carTime;
        this.carPrice.text = vo.getPrice();
        RES.getResAsync(vo.getResult(), this.onLoadOverResult, this);
    }

    private onLoadOverIcon(data, key){
        this.carIco.texture = data;
    }
    private onLoadOverResult(data, key){
        this.carResult.texture = data;
    }

    /**
     * 查看按钮被点击时，弹出车辆详细信息面板
     * ------------------------------------------------------------------------*/
    private onTouchItem(){
        // CarRentalPanel.carContPanel.y = 0;  
        btns.inScalePanel(CarRentalPanel.carContPanel,0,0);
        CarRentalPanel.carContPanel.setDate(CarRentalPanel.Cvo[this.carId]);
    }

    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    private removeFromStage(){
        this.btn_watch.touchEnabled = false;
        if(this.btn_watch.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
            this.btn_watch.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchItem,this);
            // this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.removeFromStage,this);
        }  
    }
}