/**
 * 我的租车行详情面板
 */
class carPanel extends eui.Component{

    private content:eui.Group;
    private btn_close:eui.Image;            //关闭按钮
    private btn_buy:eui.Image;              //购买车辆按钮


    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.carPanelSkin;

        this.btn_close.touchEnabled = true;
        btns.initScaleBtn1(this.btn_close);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);

        this.btn_buy.touchEnabled = true;
        btns.initScaleBtn1(this.btn_buy);
        this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnBuy,this);
    }

    private onTouchBtnClose(){
        this.y = -700;
    }

    //点击购买车辆按钮
    private onTouchBtnBuy(){
        if(Data.GAMEID == 0){
            btns.inScalePanel(CarRentalPanel.mobilePanel,0,0);
        }else{
            btns.inScalePanel(CarRentalPanel.carBuyPanel,0,0);
        }
    }


    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    public addItem(itm:carItem,x:number,y:number){
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    }

    public dispose(){
        
    }

}