/**
 * 车辆购买面板
 */
class carBuyPanel extends eui.Component{
    private btnCar1:eui.Image;
    private btnCar2:eui.Image;
    private btnCar3:eui.Image;
    private btnCar4:eui.Image;
    private btnCar5:eui.Image;

    private btnBorder1:eui.Image;
    private btnBorder2:eui.Image;
    private btnBorder3:eui.Image;
    private btnBorder4:eui.Image;
    private btnBorder5:eui.Image;

    private btn_game:eui.Image;         //进入游戏按钮

    private btnCar:Array<eui.Image> = [];
    private btnBorder:Array<eui.Image> = [];
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.carBuySkin;

        this.btnCar.push(this.btnCar1);
        this.btnCar.push(this.btnCar2);
        this.btnCar.push(this.btnCar3);
        this.btnCar.push(this.btnCar4);
        this.btnCar.push(this.btnCar5);

        this.btnBorder.push(this.btnBorder1);
        this.btnBorder.push(this.btnBorder2);
        this.btnBorder.push(this.btnBorder3);
        this.btnBorder.push(this.btnBorder4);
        this.btnBorder.push(this.btnBorder5);

        for(let i = 0;i<this.btnBorder.length;i++){
            this.btnBorder[i].visible = false;
        }
        this.btnBorder[0].visible = true;

        //添加监听事件
        for(let i:number = 0;i<this.btnBorder.length;i++){
            this.btnCar[i].touchEnabled = true;
            this.btnCar[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
            this.btnCar[i].texture = RES.getRes("carIco"+(i+1)+"_png");
        }

        this.btn_game.touchEnabled = true;
        btns.initScaleBtn1(this.btn_game);
        this.btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);
    }

    /**
     * 确认购买按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtn(e: egret.TouchEvent){
        this.y = -700;
        btns.inScalePanel(CarRentalPanel.carResultPanel,0,0);
        // CarRentalPanel.carResultPanel.y = 0;
    }

    /**
     * 选项卡触摸事件，更改点中五辆车的选中状态
     * ------------------------------------------------------------------------*/
    private onTouchTab(e: egret.TouchEvent){
        var id:number = this.btnCar.indexOf(e.target);
        for(let i = 0;i<this.btnBorder.length;i++){
            this.btnBorder[i].visible = false;
        }
        this.btnBorder[id].visible = true;
    }
}