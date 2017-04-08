var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var btns;
(function (btns) {
    var BtnRoundRect = (function (_super) {
        __extends(BtnRoundRect, _super);
        function BtnRoundRect(strTxBtn, numColorNormal, numColorClick) {
            if (numColorNormal === void 0) { numColorNormal = 0x288328; }
            if (numColorClick === void 0) { numColorClick = 0x1C5B1C; }
            var _this = _super.call(this) || this;
            _this.nPadding = 10;
            //this.width = numWidthBtn;
            //this.height = numHeightBtn;
            _this.numColorClick = numColorClick;
            _this.numColorNormal = numColorNormal;
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.touchSelf, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.touchSelf, _this);
            _this.touchEnabled = true;
            var tfTxBtn = new egret.TextField;
            btns.setProps(tfTxBtn, {
                size: 20, x: _this.nPadding, y: _this.nPadding //bold:true,
            });
            _this.addChild(tfTxBtn);
            _this.tfTxBtn = tfTxBtn;
            _this.SetLabel(strTxBtn);
            return _this;
        }
        BtnRoundRect.prototype.SetBtnID = function (btn_id) {
            this.btn_id = btn_id;
        };
        BtnRoundRect.prototype.GetBtnID = function () {
            return this.btn_id;
        };
        BtnRoundRect.prototype.touchSelf = function (evt) {
            this.drawSelf(evt.type == egret.TouchEvent.TOUCH_BEGIN ? this.numColorClick : this.numColorNormal);
        };
        BtnRoundRect.prototype.drawSelf = function (numColor) {
            this.graphics.clear();
            this.graphics.beginFill(numColor);
            this.graphics.drawRoundRect(0, 0, this.width, this.height, this.height / 3, this.height / 3);
            this.graphics.endFill();
        };
        BtnRoundRect.prototype.SetLabel = function (str) {
            this.tfTxBtn.text = str;
            this.width = this.tfTxBtn.width + this.nPadding * 2;
            this.height = this.tfTxBtn.height + this.nPadding * 2;
            this.drawSelf(this.numColorNormal);
        };
        return BtnRoundRect;
    }(egret.Sprite));
    btns.BtnRoundRect = BtnRoundRect;
    __reflect(BtnRoundRect.prototype, "btns.BtnRoundRect");
    var BtnBmBm = (function (_super) {
        __extends(BtnBmBm, _super);
        function BtnBmBm(nameTextureBg, nameTextureTx, propsBg, propsTx) {
            var _this = _super.call(this) || this;
            var bmBgBtn = new egret.Bitmap(RES.getRes(nameTextureBg));
            btns.setProps(bmBgBtn, { x: bmBgBtn.width / 2, y: bmBgBtn.height / 2 }, [0.5, 0.5]);
            var bmTxBtn = new egret.Bitmap(RES.getRes(nameTextureTx));
            btns.setProps(bmTxBtn, { x: bmBgBtn.x, y: bmBgBtn.y }, [0.5, 0.5]);
            btns.addChildren(_this, [bmBgBtn, bmTxBtn]);
            if (propsTx)
                btns.setProps(bmTxBtn, propsTx);
            if (propsBg)
                btns.setProps(bmBgBtn, propsBg);
            _this.bmBgBtn = bmBgBtn;
            _this.bmTxBtn = bmTxBtn;
            return _this;
        }
        BtnBmBm.prototype.ctrlTouch = function (canTouch) {
            this.touchEnabled = canTouch;
            this.alpha = canTouch ? 1 : 0.5;
        };
        BtnBmBm.prototype.updateBtn = function (nameTextureBg, nameTextureTx) {
            this.bmBgBtn.texture = RES.getRes(nameTextureBg);
            this.bmTxBtn.texture = RES.getRes(nameTextureTx);
        };
        return BtnBmBm;
    }(egret.DisplayObjectContainer));
    btns.BtnBmBm = BtnBmBm;
    __reflect(BtnBmBm.prototype, "btns.BtnBmBm");
    var BtnBmTf = (function (_super) {
        __extends(BtnBmTf, _super);
        function BtnBmTf(nameTextureBg, txTf, propsBg, propsTx) {
            var _this = _super.call(this) || this;
            var bgBtn = new egret.Bitmap(RES.getRes(nameTextureBg));
            if (propsBg)
                btns.setProps(bgBtn, propsBg, [0.5, 0.5]);
            btns.setProps(bgBtn, { x: bgBtn.width / 2, y: bgBtn.height / 2, name: 'bg_btn' }, [0.5, 0.5]);
            if (propsBg)
                btns.setProps(bgBtn, propsBg, [0.5, 0.5]);
            var txBtn = new egret.TextField();
            btns.setProps(txBtn, { text: txTf, x: bgBtn.width / 2, y: bgBtn.height / 2, name: 'tx_btn' }, [0.5, 0.5]);
            if (propsTx)
                btns.setProps(txBtn, propsTx);
            btns.addChildren(_this, [bgBtn, txBtn]);
            _this.txBtn = txBtn;
            _this.bgBtn = bgBtn;
            return _this;
        }
        BtnBmTf.prototype.modifyPropsTx = function (props, arrAnchor) {
            btns.setProps(this.txBtn, props, arrAnchor);
        };
        BtnBmTf.prototype.modifyPropsBgBtn = function (props, arrAnchor) {
            btns.setProps(this.bgBtn, props, arrAnchor);
        };
        return BtnBmTf;
    }(egret.DisplayObjectContainer));
    btns.BtnBmTf = BtnBmTf;
    __reflect(BtnBmTf.prototype, "btns.BtnBmTf");
    function initFloatBtn(obj, nYOffset) {
        if (nYOffset === void 0) { nYOffset = 5; }
        obj.touchEnabled = true;
        var numYOrigin = obj.y;
        //触摸动作开始
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            if (evt.target != obj)
                return;
            twScaleButton(obj, 'down');
        }, this);
        //触摸动作结束
        obj.addEventListener(egret.TouchEvent.TOUCH_END, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'up');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'up');
        }, this);
        function twScaleButton(obj, wayTw) {
            var yPos = wayTw == 'down' ? numYOrigin + nYOffset : numYOrigin;
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                .to({ y: yPos }, 60, egret.Ease.bounceOut);
        }
    }
    btns.initFloatBtn = initFloatBtn;
    function initScaleBtn(obj, funEnd, scopeEnd) {
        obj.touchEnabled = true;
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            if (evt.target != obj)
                return;
            twScaleButton(obj, 'small');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_END, function (evt) {
            if (evt.target != obj)
                return;
            twScaleButton(obj, 'big');
            if (funEnd)
                funEnd.call(scopeEnd);
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evt) {
            if (evt.target != obj)
                return;
            twScaleButton(obj, 'big');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
        }, this);
        function twScaleButton(obj, wayTw) {
            var scaleFactor = wayTw == 'small' ? 0.9 : 1;
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                .to({ scaleX: scaleFactor, scaleY: scaleFactor }, 60, egret.Ease.bounceOut);
        }
    }
    btns.initScaleBtn = initScaleBtn;
    /**
     * 按钮点击时缩放效果
     * 注意：使用此函数后若需要使用碰撞，注意锚点改变，不能直接获取x，y值
     * 不要在界面切换时会调用的函数中使用，避免切换界面多次调用
     */
    function initScaleBtn1(obj, funEnd, scopeEnd) {
        var time = 0;
        obj.touchEnabled = true;
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'small');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_END, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
            if (funEnd)
                funEnd.call(scopeEnd);
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
        }, this);
        function twScaleButton(obj, wayTw) {
            var scaleFactor = wayTw == 'small' ? 0.93 : 1;
            if (time == 0) {
                // obj.x = obj.x + Math.floor(obj.width*0.5);
                // obj.y = obj.y + obj.height;
                // obj.anchorOffsetX = Math.floor(obj.width*0.5);
                // obj.anchorOffsetY = obj.height;
                time++;
            }
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                .to({ scaleX: scaleFactor, scaleY: scaleFactor }, 60, egret.Ease.bounceOut);
        }
    }
    btns.initScaleBtn1 = initScaleBtn1;
    /**
     * 按钮点击时缩放效果
     * 注意：使用此函数后若需要使用碰撞，注意锚点改变，不能直接获取x，y值
     * 不要在界面切换时会调用的函数中使用，避免切换界面多次调用
     */
    function initScaleBtn2(obj, funEnd, scopeEnd) {
        var time = 0;
        obj.touchEnabled = true;
        obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'small');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_END, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
            if (funEnd)
                funEnd.call(scopeEnd);
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
        }, this);
        obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (evt) {
            // if(evt.target!=obj) return;
            twScaleButton(obj, 'big');
        }, this);
        function twScaleButton(obj, wayTw) {
            var scaleFactor = wayTw == 'small' ? 0.93 : 1;
            if (time == 0) {
                obj.x = obj.x + Math.floor(obj.width * 0.5);
                obj.y = obj.y + Math.floor(obj.height * 0.5);
                obj.anchorOffsetX = Math.floor(obj.width * 0.5);
                obj.anchorOffsetY = Math.floor(obj.height * 0.5);
                time++;
            }
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj)
                .to({ scaleX: scaleFactor, scaleY: scaleFactor }, 60, egret.Ease.bounceOut);
        }
    }
    btns.initScaleBtn2 = initScaleBtn2;
    /**
     * 面板切换时由上方向下运动
     */
    function inScalePanel2(obj, x, y) {
        obj.anchorOffsetX = obj.width / 2;
        obj.anchorOffsetY = obj.height / 2;
        obj.x = -1500;
        obj.y = y + obj.height / 2;
        egret.Tween.get(obj).to({ x: (x + obj.width / 2) }, 120, egret.Ease.bounceOut);
    }
    btns.inScalePanel2 = inScalePanel2;
    /**
     * 面板切换时由上方向下运动
     */
    function inScalePanel3(obj, x, y) {
        obj.anchorOffsetX = obj.width / 2;
        obj.anchorOffsetY = obj.height / 2;
        obj.x = x + obj.width / 2;
        obj.y = -700;
        egret.Tween.get(obj).to({ y: (y + obj.height / 2) }, 120, egret.Ease.bounceOut);
    }
    btns.inScalePanel3 = inScalePanel3;
    /**
    * 面板切换时由无到有
    */
    function inScalePanel(obj, x, y) {
        obj.anchorOffsetX = obj.width / 2;
        obj.anchorOffsetY = obj.height / 2;
        obj.x = x + obj.width / 2;
        obj.y = y + obj.height / 2;
        obj.alpha = 0;
        egret.Tween.get(obj).to({ alpha: 1 }, 200, egret.Ease.bounceOut);
    }
    btns.inScalePanel = inScalePanel;
    /**
     * 面板切换时由大到小效果
     */
    function inScalePanel1(obj, x, y) {
        // console.log("面板大小"+obj.height);
        obj.anchorOffsetX = obj.width / 2;
        obj.anchorOffsetY = obj.height / 2;
        obj.x = x + obj.width / 2;
        obj.y = y + obj.height / 2;
        obj.scaleX = 1.2;
        obj.scaleY = 1.2;
        egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1 }, 120, egret.Ease.bounceOut);
    }
    btns.inScalePanel1 = inScalePanel1;
    /**
     * 处理对象类 ******************************************************************************************************
     */
    function setProps(obj, objProperty, objAnchor) {
        for (var i in objProperty) {
            obj[i] = objProperty[i];
        }
        if (objAnchor) {
            obj.anchorOffsetX = obj.width * objAnchor[0];
            obj.anchorOffsetY = obj.height * objAnchor[1];
        }
    }
    btns.setProps = setProps;
    function addChildren(container, arr) {
        for (var i in arr) {
            container.addChild(arr[i]);
        }
    }
    btns.addChildren = addChildren;
})(btns || (btns = {}));
//# sourceMappingURL=btns.js.map