var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 * 主要控制三个界面的切换
 */
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /**
     * 这里初始化
     */
    ViewManager.prototype.init = function () {
        this.beginPanel = new BeginPanel();
        this.addChild(this.beginPanel);
        this.beginPanel.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    };
    ViewManager.prototype.start = function () {
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    };
    ViewManager.getInstance = function () {
        if (ViewManager.instance == null) {
            ViewManager.instance = new ViewManager();
        }
        return ViewManager.instance;
    };
    ViewManager.prototype.onChangeScene = function (e) {
        e.obj.end();
        this.removeChildren();
        switch (e.eventType) {
            case BeginPanel.GAME_NAME:
                this.beginPanel.start();
                this.addChild(this.beginPanel);
                break;
            case MainPanel.GAME_NAME:
                if (this.mainPanel == undefined) {
                    this.mainPanel = new MainPanel();
                }
                this.mainPanel.start();
                this.addChild(this.mainPanel);
                break;
            case CarRentalPanel.GAME_NAME:
                if (this.carRentalPanel == undefined) {
                    this.carRentalPanel = new CarRentalPanel();
                }
                this.carRentalPanel.addEvents();
                this.addChild(this.carRentalPanel);
                break;
            // case GameStorePanel.GAME_STROE:
            //     this.gameStorePanel.start();
            //     this.addChild(this.gameStorePanel);
            //     break;
            default:
                break;
        }
    };
    return ViewManager;
}(egret.Sprite));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map