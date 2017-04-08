/**
 * 邮件界面
 */
class emailPanel extends eui.Component{
    public btn_close:eui.Image;
    private btnClose:ButtonX;

    private content:eui.Group;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.emailPanelSkin;
        
    }

    public createChildren(){
        super.createChildren();

        if(!this.btnClose){
            this.btnClose = new ButtonX();
            this.btnClose.setSkinUseImage(this.btn_close);//this.btn_close 这个皮肤使用完会被 ButtonX 里面自动 removeChild，清出显示列表
        }
        this.addChild(this.btnClose);
    }

    public addEvents(){
        this.removeEvents();
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchEmailClose,this);
    }

    private removeEvents(){
        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchEmailClose,this);
    }
    /**
     * 添加一个item对象到邮箱中
     * 参数说明：
     *      itm：    添加到邮箱中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    private addItem(itm:emailItem,x:number,y:number){
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    }

    public setTab(){
        //初始化邮箱
        for(let i = 0;i<MainPanel.Evo.length;i++){
            let k = new emailItem();
            let x:number = 0;
            let y:number = 98*i;
            this.addItem(k,x,y);
            k.setDate(MainPanel.Evo[i]);
        }
    }

    private onTouchEmailClose(){
        this.dispose();
    }

    public dispose(){
        this.removeEvents();
        if(this.parent){
            this.parent.removeChild(this);
        }
    }


  
}