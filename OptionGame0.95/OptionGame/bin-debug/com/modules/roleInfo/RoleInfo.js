var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RoleInfo = (function (_super) {
    __extends(RoleInfo, _super);
    function RoleInfo() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.roleInfo;
        _this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclose, _this);
        _this.bindphone.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onbindphone, _this);
        _this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onmusic, _this);
        _this.sound.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onsound, _this);
        return _this;
    }
    RoleInfo.prototype.onmusic = function () {
        if (this.music.currentState == "up") {
            this.music.currentState = "disabled";
        }
        else {
            this.music.currentState = "up";
        }
    };
    RoleInfo.prototype.onsound = function () {
        if (this.sound.currentState == "up") {
            this.sound.currentState = "disabled";
        }
        else {
            this.sound.currentState = "up";
        }
    };
    RoleInfo.prototype.onclose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    RoleInfo.prototype.onbindphone = function () {
        if (!this.bindPanel) {
            this.bindPanel = new BindPhone();
        }
        LayerManager.instance.windowLayer.addChild(this.bindPanel);
        this.bindPanel.x = (LayerManager.instance.stageWidth >> 1) - (this.bindPanel.width >> 1);
        this.bindPanel.y = (LayerManager.instance.stageHeight >> 1) - (this.bindPanel.height >> 1);
        this.dispose();
    };
    RoleInfo.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return RoleInfo;
}(eui.Component));
__reflect(RoleInfo.prototype, "RoleInfo");
//# sourceMappingURL=RoleInfo.js.map