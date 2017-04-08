var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    //设置舞台焦点
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Object.defineProperty(GameScene, "instance", {
        get: function () {
            if (!GameScene._instance) {
                GameScene._instance = new GameScene();
            }
            return GameScene._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addChild(LayerManager.instance.mapLayer);
        this.addChild(LayerManager.instance.sceneLayer);
        this.addChild(LayerManager.instance.windowLayer);
        this.addChild(LayerManager.instance.topLayer);
        // ProtoFactory.getInstance().Init();
        // PlayerData.instance;
        this.openLogin();
    };
    GameScene.prototype.openLogin = function () {
        //加载登陆界面
        // LayerManager.instance.sceneLayer.addChild(ViewManager.getInstance());
        BeginModule.instance.show();
    };
    //主场景创建
    /**
     * 初次登录输入邀请码的登录，等服务端返回，调用这里进游戏
     * 非初次登录，直接微信，qq登录也是服务端返回，调用这里进游戏
    */
    GameScene.prototype.startGame = function () {
        MainModule.instance.show();
    };
    GameScene.prototype.changeBg = function (bgResName) {
        // window["doResize"](bgResName);
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map