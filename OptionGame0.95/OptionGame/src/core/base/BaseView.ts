/**
 *
 * @author xx 用于给单独一个需要动态加载资源的ui panel 继承使用， 调用 loadRes 方法 传入需要加载资源列表，
 *              重写 public init 方法, 还需要 调用 baseview 的 init 来清除 loading
 *
 *              然后在子类 init 方法的最后调用 setCenter 来居中，因为刚开始资源没有的时候，宽高为 0
 *
 */
class BaseView extends egret.DisplayObjectContainer {

    private reslen: number = 0;


    protected beinit: boolean = false;

    constructor() {
        super();
        Loading.instance.show();
    }

    public loadRes(resList: string[]) {
        this.reslen = resList.length;
        this.resCount = resList.length;
        let resName: string = "";
        for(let i = 0;i < this.reslen;i++) {
            resName = resList[i];
            RES.getResAsync(resName,this.onOver,this);
        }
    }

    private resCount = 0;
    private onOver(data: any,key: any) {
//        console.log("=========== onOver ",data,key);
        this.resCount--;
        if(this.resCount == 0) {
            this.init();
        }
    }

    public init() {
        // console.log( " getQualifiedClassName qualified class name -> " , getQualifiedClassName(this) );
        // console.log("base view init .........................");

        Loading.instance.hide();
        this.beinit = true;
    }

    /**
     * 居中显示
     * */
    public setCenter() {
        this.x = (ConfigData.wStage >> 1) - (this.width >> 1);
        this.y = (ConfigData.hStage >> 1) - (this.height >> 1);
    }

    public show() {

    }
}


