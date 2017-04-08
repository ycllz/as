/**
 * 商会界面
 */
class commercePanel extends eui.Component{
    private tab1:eui.Image;
    private tab2:eui.Image;
    private vtab1:eui.Image;
    private vtab2:eui.Image;
    private ico1:eui.Image;
    private ico2:eui.Image;

    private tab:Array<eui.Image> = [];
    private vtab:Array<eui.Image> = [];

    public btn_close:eui.Image;

    private tabNum = 0;
    private content:eui.Group;

    public constructor() {
        super();
        this.skinName = skins.commercePanelSkin;
    }

    public createChildren(){
        super.createChildren();

        this.btn_close.touchEnabled = true;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);
        
        this.tab.push(this.tab1);
        this.tab.push(this.tab2);
        //添加监听事件
        for(let i:number = 0;i<2;i++){
            this.tab[i].touchEnabled = true;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
        }

        this.vtab.push(this.vtab1);
        this.vtab.push(this.vtab2);
        //添加监听事件
        for(let i:number = 0;i<2;i++){
            this.vtab[i].touchEnabled = true;
            btns.initScaleBtn1(this.vtab[i]);
            this.vtab[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchVTab,this);
        }
        this.addAllItem();

    }

    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    public addItem(itm:commerceItem,x:number,y:number){
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    }

    public addAllItem(){
        this.content.removeChildren();

        for(let i = 0;i<MainPanel.Comvo.length;i++){
            let item = new commerceItem();
            let x = 0;
            let y = 66 * i;
            this.addItem(item,x,y);
            item.setDate(MainPanel.Comvo[i]);
        }
    }

     /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    private onTouchTab(e: egret.TouchEvent){
        var id:number = this.tab.indexOf(e.target);
        this.setTab(id);
    }

    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    private onTouchVTab(e: egret.TouchEvent){
        var id:number = this.vtab.indexOf(e.target);
        this.setVTab(id);
    }

     /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下列表中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~1
     * ------------------------------------------------------------------------*/
    public setTab(num:number){
        this.tab[0].texture = RES.getRes("tab_zonglan_"+(num==0?1:0)+"_png");
        this.tab[1].texture = RES.getRes("tab_gaikuo_"+(num==1?1:0)+"_png");

        if(num != this.tabNum){
            this.tabNum = num;
            this.swapChildren(this.tab1,this.tab2);
        }
        this.addAllItem();
    }

    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下列表中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~1
     * ------------------------------------------------------------------------*/
    public setVTab(num:number){
        this.vtab[0].texture = RES.getRes("tab_coutDiamond_"+(num==0?1:0)+"_png");
        this.vtab[1].texture = RES.getRes("tab_coutGold_"+(num==1?1:0)+"_png");
        
        this.ico1.texture = RES.getRes(num==0?"zuanshi_png":"gold_png");
        this.ico2.texture = RES.getRes(num==0?"zuanshi_png":"gold_png");
    }

     /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtn(e: egret.TouchEvent){
        this.y = -700;
    }

    public dispose(){

    }
}