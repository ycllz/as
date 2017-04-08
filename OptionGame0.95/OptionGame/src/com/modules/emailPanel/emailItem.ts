/**
 * 邮件界面
 */
class emailItem extends eui.Component{
    private trade:number;
    private bg:eui.Image;
    private title:eui.Label;
    private time:eui.Label;

    private btn_watch:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.emailItemSkin;

        this.btn_watch.touchEnabled = true;
        btns.initScaleBtn1(this.btn_watch);
        this.btn_watch.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchItem,this);
    }  

     /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:EmailVo):void{ 
        this.trade = vo.EId - 1;
        this.bg.texture = RES.getRes("emailItemBg_"+vo.ERead+"_png");
        // console.log("emailItemBg_"+vo.ERead+"_png");
        this.title.text = vo.ETitle;
        this.time.text = vo.ETime;

        // this.tradeName.text = vo.getTradeName();
        // this.unit.text = vo.unit;
        // this.text.text = vo.getText();
        // this.price.text = vo.getPrice();

        // this.gold.texture = RES.getRes(vo.getImgUrl());
        // this.ico.texture = RES.getRes("ico_"+vo.type+"_png");
    }

     /**
     * 查看按钮被点击时，弹出车辆详细信息面板
     * ------------------------------------------------------------------------*/
    private onTouchItem(){
        // CarRentalPanel.carContPanel.y = 0;  
        // btns.inScalePanel(MainPanel.eCont,0,0);
        // MainPanel.eCont.setDate();

        EmailConfig.instance.vo = MainPanel.Evo[this.trade];
        EmailModule.instance.show(1)
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