/**
 * 加载界面
 */
class loadPanel extends eui.Component{ 
    public gro:eui.Group;
    public present:eui.Label;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.loadingPanelSkin;
    }

    public dispose(){

    }


}