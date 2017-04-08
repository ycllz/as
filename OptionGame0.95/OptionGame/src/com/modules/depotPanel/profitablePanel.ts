/**
 * 盈利页面面板
 */
class profitablePanel extends eui.Component{
    private btn:eui.Image;
    public initMovie:egret.tween.TweenGroup;

    private halo0:eui.Image;
    private halo1:eui.Image;

    private textBg:eui.Image;
    private smallStar:eui.Image;
    private star:eui.Image;

    private goldIco:eui.Image;

    private text0:eui.Image;
    private text1:eui.Image;

    private contText:eui.Label;
    private priceText:eui.Label;

    // private btn:eui.Image;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.profitablePanelSkin;

        this.btn.touchEnabled = true;
        btns.initScaleBtn1(this.btn);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);
    }

     /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtn(e: egret.TouchEvent){
        // console.log("关闭盈利界面");
        this.y = -700;
    }

    public setType(type:number){
        if(type == 0){
            this.star.visible = false;
            this.text0.texture = RES.getRes("touzishibai_png");
            this.text0.visible = true;
            this.text1.visible = false;
            this.halo0.visible = true;
            this.halo1.visible = false;

            this.goldIco.visible = false;

            this.textBg.texture = RES.getRes("shibaiBotton_png");
            this.smallStar.texture = RES.getRes("smallStar1_png");

            this.contText.text = "损失购货成本";
            this.priceText.textColor = 0xff2c2c;
        }else if(type == 1){
            this.star.visible = true;
            this.text0.visible = false;
            this.text1.visible = true;
            this.halo0.visible = false;
            this.halo1.visible = true;

            this.goldIco.visible = true;

            this.textBg.texture = RES.getRes("huoliBotton_png");
            this.smallStar.texture = RES.getRes("smallStar_png");

            this.contText.text = "连本带利收益";
            this.priceText.textColor = 0xFFF000;
        }else{
            this.star.visible = false;
            this.text0.texture = RES.getRes("xiushi_png");
            this.text0.visible = true;
            this.text1.visible = false;
            this.halo0.visible = true;
            this.halo1.visible = false;

            this.goldIco.visible = false;

            this.textBg.texture = RES.getRes("shibaiBotton_png");
            this.smallStar.texture = RES.getRes("smallStar1_png");

            this.contText.text = "获得购货成本";
            this.priceText.textColor = 0xFFF000;
        }
    }

    public dispose(){
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

}