var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule.prototype.show = function (params) {
    };
    BaseModule.prototype.startLoadModuleRES = function (groupName, resProgress) {
        if (resProgress === void 0) { resProgress = undefined; }
        this.connect = HttpConnect.instance;
        // this.connect.initHttpEvent();
        loadx.instance.loadGroup(groupName, this.loadGroupRESOver, this, resProgress);
    };
    BaseModule.prototype.loadGroupRESOver = function () {
    };
    BaseModule.prototype.setIspop = function (param1) {
        this._ispop = param1;
    };
    BaseModule.prototype.getIspop = function () {
        if (!this.parentLayer) {
            return false;
        }
        return this._ispop;
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /**网络通信，模块之间通信的方法，各个模块直接调用这里的方法，要扩展的再在子类重写方法*/
    ///////////////////////////////// 发送文本 /////////////////////////////////////////////////
    BaseModule.prototype.sendHttpMessage = function (vo) {
        this.connect.sendPostRequest(vo.url, vo.params, vo.responseType, vo.requestHeader);
    };
    BaseModule.prototype.addHttpListener = function (lcommand, lhandler, lcontext) {
        this.connect.addHttpListener(lcommand, lhandler, lcontext);
    };
    /**
     * 删除消息处理监听
    */
    BaseModule.prototype.removeHttpListener = function (lcommand, lhandler, lcontext) {
        this.connect.removeHttpListener(lcommand, lhandler, lcontext);
    };
    /**
     * 判断是否有消息监听
     */
    BaseModule.prototype.hasHttptListener = function (lcommand) {
        return this.connect.hasHttptListener(lcommand);
    };
    //////////////////////////////// 发送json //////////////////////////////////////////
    /**
     * 发送json 格式
    */
    BaseModule.prototype.sendPostRequestAsJson = function (lurl, lparams) {
        if (lparams === void 0) { lparams = undefined; }
        this.connect.sendPostRequestAsJson(lurl, lparams);
    };
    BaseModule.prototype.addHttpListenerJson = function (lcommand, lhandler, lcontext) {
        this.connect.addHttpListenerJson(lcommand, lhandler, lcontext);
    };
    /**
     * 删除消息处理监听
    */
    BaseModule.prototype.removeHttpListenerJson = function (lcommand, lhandler, lcontext) {
        this.connect.removeHttpListenerJson(lcommand, lhandler, lcontext);
    };
    /**
     * 判断是否有消息监听
     */
    BaseModule.prototype.hasSocketListenerJson = function (lcommand) {
        return this.connect.hasHttpListenerJson(lcommand);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    BaseModule.prototype.dispose = function () {
    };
    return BaseModule;
}());
__reflect(BaseModule.prototype, "BaseModule");
//# sourceMappingURL=BaseModule.js.map