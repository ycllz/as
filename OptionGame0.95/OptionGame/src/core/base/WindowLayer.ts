class WindowLayer extends eui.Component {

	private _mask:egret.Sprite;

	public constructor() {
		super();
		this._mask = new egret.Sprite();
		this.addChild(this._mask);
	}

	public addChild(child:egret.DisplayObject):any{
		super.addChild(child);

        child.x = (LayerManager.instance.stageWidth>>1)-(child.width>>1);
        child.y = (LayerManager.instance.stageHeight>>1)-(child.height>>1);
	}

	/**
	 * 一般来说，此方法不用。
	 * 如果没有 createchild 就addchild 的时候，界面的位置应该不是居中的，调用这里居中
	 * 
	*/
	public setCenter(child:egret.DisplayObject){
		super.addChild(child);
		child.x = (LayerManager.instance.stageWidth>>1)-(child.width>>1);
        child.y = (LayerManager.instance.stageHeight>>1)-(child.height>>1);
	}

	public showMask(){
		this._mask.visible = true;
		this._mask.graphics.beginFill(0, 0.5);
		this._mask.graphics.drawRect(-50, -50, Common.stageW+100, Common.stageH+100);
		this._mask.graphics.endFill();
	}

	public hideMask(){
		this._mask.visible = false;
	}




}