/**
 * 仓库界面
 */
class depotPanel extends eui.Component{
    private tab1:eui.Image;
    private tab2:eui.Image;
    private tab3:eui.Image;
    private tab4:eui.Image;

    public btn_close:eui.Image;


    private percent:eui.Label;

    private content:eui.Group;

    private tab:Array<eui.Image> = [];

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.depotPanelSkin;

        
    }

    public createChildren(){
        super.createChildren();

        this.tab.push(this.tab1);
        this.tab.push(this.tab2);
        this.tab.push(this.tab3);
        this.tab.push(this.tab4);

        //添加监听事件
        for(let i:number = 0;i<4;i++){
            this.tab[i].touchEnabled = true;
            // this.tabLab[i].touchEnabled = false;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
        }
    }

    public test(){
        //初始化仓库数据
        for(let i = 0;i<Data.Dtrade.length;i++){
            let v = new depotItemVo();
            v.trade = Data.Dtrade[i];
            v.type = Data.Dtype[i];
            v.unit = Data.Dunit[i];
            v.num = Data.Dnum[i];
            v.currency = Data.Dcurrency[i];
            v.price = Data.Dprice[i];

            v.price2 = Data.Dprice2[i];
            v.price3 = Data.Dprice3[i];

            MainPanel.Dvo.push(v);

            let k = new depotItem();
            let x = (i%3)*310;
            let y = Math.floor(i/3)*116;
            k.setDate(v);
            this.addItem(k,x,y);
        }
    }

    public addEvents(){
        this.removeEvents();
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
    }
    public removeEvents(){
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
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
    public addItem(itm:depotItem,x:number,y:number){
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    }

    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下仓库中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~3
     * ------------------------------------------------------------------------*/
    public setTab(num:number){
        for(let i = 0;i<4;i++){
            this.tab[i].texture = RES.getRes("tab_"+i+"_0_png");
        }
        this.tab[num].texture = RES.getRes("tab_"+num+"_1_png");

        this.content.removeChildren();

        let item_num:number = 0;
        for(let i = 0;i<MainPanel.Dvo.length;i++){
            let v = MainPanel.Dvo[i];
            let k = new depotItem();
            let x = (item_num%3)*310;
            let y = Math.floor(item_num/3)*116;
            k.setDate(v);

            if(v.type == num || num == 0){
                this.addItem(k,x,y);
                item_num++;
            }
        }

        //test  测试数据
        this.test();
    }

    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    private onTouchTab(e: egret.TouchEvent){
        var id:number = this.tab.indexOf(e.target);
        this.setTab(id);
    }

    public dispose(){
        this.removeEvents();
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

}