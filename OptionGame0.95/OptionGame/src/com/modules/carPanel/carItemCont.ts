/**
 * 租车行车辆详细信息item
 * */
class carItemCont extends eui.Component{
    private carId:number;
    private carIco:eui.Image;

    private carNum:eui.Label;
    private carPrice:eui.Label;

    private btn:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.carItemContSkin;

        this.btn.touchEnabled = true;
        btns.initScaleBtn1(this.btn);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchClose,this);

    }
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:carItemVo):void{ 
        this.carIco.texture = RES.getRes(vo.getImgUrl());
        this.carNum.text = vo.carNum;
        this.carPrice.text = vo.carPrice.toString();

    }

    /**
     * 点击确认按钮，隐藏当前面板
     * ------------------------------------------------------------------------*/
    private onTouchClose(){
        this.y = -700;
    }

}