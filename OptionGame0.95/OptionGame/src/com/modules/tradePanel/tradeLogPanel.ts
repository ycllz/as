/**
 * 贸易明细界面
 */
class tradeLogPanel extends eui.Component{
    private tab1:eui.Image;
    private tab2:eui.Image;

    public btn_close:eui.Image;
    private btnClose:ButtonX;


    private tab:Array<eui.Image> = [];

    private content:eui.Group;

    public static Tvo:Array<tradeItemVo> = [];

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.tradePanelSkin;
    }

    public createChildren(){
        super.createChildren();

        if(!this.btnClose){
            this.btnClose = new ButtonX();
            this.btnClose.setSkinUseImage(this.btn_close);//this.btn_close 这个皮肤使用完会被 ButtonX 里面自动 removeChild，清出显示列表
        }
        this.addChild(this.btnClose);

        this.tab.push(this.tab1);
        this.tab.push(this.tab2);
        //添加监听事件
        for(let i:number = 0;i<2;i++){
            this.tab[i].touchEnabled = true;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
        }
    }

    public addEvents(){
        this.removeEvents();
        
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
        
    }
    private removeEvents(){
        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
    }

    private onClose(){
        this.dispose();
    }

    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    public addTradeItem(itm:tradeItem,x:number,y:number){
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    }

    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    public addDiamondItem(itm:diamondItem,x:number,y:number){
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    }

    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下列表中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~1
     * ------------------------------------------------------------------------*/
    public setTab(num:number){
        for(let i = 0;i<2;i++){
            this.tab[i].texture = RES.getRes("tab_"+(i+4)+"_0_png");
        }
        this.tab[num].texture = RES.getRes("tab_"+(num+4)+"_1_png");

        this.content.removeChildren();

        if(num == 0){
            for(let i = 0;i<MainPanel.Tvo.length;i++){
                let v = MainPanel.Tvo[i];
                let k = new tradeItem();
                let x = 0;
                let y = i*98;
                k.setDate(v);
                this.addTradeItem(k,x,y);
            }
        }else{
            for(let i = 0;i<MainPanel.TDvo.length;i++){
                let v = MainPanel.TDvo[i];
                let k = new diamondItem();
                let x = 0;
                let y = i*98;
                k.setDate(v);
                this.addDiamondItem(k,x,y);
            }
        }
        
        
    }

    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    private onTouchTab(e: egret.TouchEvent){
        var id:number = this.tab.indexOf(e.target);
        this.setTab(id);
    }

    public dispose(){
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

  
}