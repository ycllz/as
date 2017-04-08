var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ProtoFactory = (function () {
    function ProtoFactory() {
        //协议类
        this.clazz_arr = null;
        //console.log("constructor init proto factory ");
        this.clazz_arr = [];
        this.Init();
    }
    ProtoFactory.getInstance = function () {
        if (ProtoFactory.instance == null) {
            ProtoFactory.instance = new ProtoFactory();
        }
        return ProtoFactory.instance;
    };
    ProtoFactory.prototype.Init = function () {
        var proto = RES.getRes("base_proto");
        var builder = dcodeIO.ProtoBuf.loadProto(proto);
        //请求
        this.clazz_arr[EventConst.ON_COM_REQ_CS] = builder.build("ComReqProto");
        //请求返回
        this.clazz_arr[EventConst.ON_COM_PROTO_RESP_CS] = builder.build("ComRespProto");
        //公共错误时返回
        this.clazz_arr[EventConst.ON_COM_ERROR_PROTO_SC] = builder.build("ComErrRespProto");
        this.clazz_arr[EventConst.ComNotifyProto] = builder.build("ComNotifyProto");
        this.clazz_arr[EventConst.GMComRespProto] = builder.build("GMComRespProto");
        var proto = RES.getRes("login_proto");
        var builder = dcodeIO.ProtoBuf.loadProto(proto);
        //gm login
        this.clazz_arr[EventConst.ON_GM_LOGIN_REQ_CS] = builder.build("GmLoginReqProto");
        this.clazz_arr[EventConst.ON_GM_LOGIN_RESP_SC] = builder.build("GmLoginRespProto");
        //user login
        this.clazz_arr[EventConst.ON_LOGIN_REQ_CS] = builder.build("LoginReqProto");
        this.clazz_arr[EventConst.ON_LOGIN_RESP_SC] = builder.build("LoginRespProto");
        //signup
        this.clazz_arr[EventConst.ON_PLAYER_REG_REQ_CS] = builder.build("RegReqProto");
        this.clazz_arr[EventConst.ON_PLAYER_REG_RESP_SC] = builder.build("RegRespProto");
        var proto = RES.getRes("logic_proto");
        var builder = dcodeIO.ProtoBuf.loadProto(proto);
        //请求房间列表
        this.clazz_arr[EventConst.ON_HOUSE_LIST_REQ_CS] = builder.build("HouseListReq");
        this.clazz_arr[EventConst.ON_HOUSE_LIST_RESP_CS] = builder.build("HouseListResp");
        //请求房间机器列表
        this.clazz_arr[EventConst.ON_MACHINE_LIST_REQ_CS] = builder.build("MachineListReq");
        this.clazz_arr[EventConst.ON_MACHINE_LIST_RESP_CS] = builder.build("MachineListResp");
        //请求占有机器
        this.clazz_arr[EventConst.ON_MACHINE_OWN_REQ_CS] = builder.build("OwnMachineReq");
        this.clazz_arr[EventConst.ON_MACHINE_OWN_RESP_CS] = builder.build("OwnMachineResp");
        //请求解除占有机器
        this.clazz_arr[EventConst.ON_MACHINE_CANCEL_REQ_CS] = builder.build("CancelOwnMachineReq");
        this.clazz_arr[EventConst.ON_MACHINE_CANCEL_RESP_CS] = builder.build("CancelOwnMachineResp");
        //请求上分
        this.clazz_arr[EventConst.ON_ADDPOINTS_REQ_CS] = builder.build("AddPointsReq");
        this.clazz_arr[EventConst.ON_ADDPOINTS_RESP_SC] = builder.build("AddPointsResp");
        //请求下分
        this.clazz_arr[EventConst.ON_SUBOINTS_REQ_CS] = builder.build("SubPointsReq");
        this.clazz_arr[EventConst.ON_SUBPOINTS_RESP_SC] = builder.build("SubPointsResp");
        //请求押分
        this.clazz_arr[EventConst.ON_BEGPOINT_REQ_CS] = builder.build("BetPointsReq");
        this.clazz_arr[EventConst.ON_BEGPOINT_RESP_CS] = builder.build("BetPointsResp");
        //请求开牌【1、2次】
        this.clazz_arr[EventConst.ON_OPEN1_CARD_REQ_CS] = builder.build("OpenCardReq");
        this.clazz_arr[EventConst.ON_OPEN1_CARD_RESP_CS] = builder.build("OpenCardResp");
        //请求开牌【1、2次】
        this.clazz_arr[EventConst.ON_OPEN2_CARD_REQ_CS] = builder.build("OpenCardReq");
        this.clazz_arr[EventConst.ON_OPEN2_CARD_RESP_CS] = builder.build("OpenCardResp");
        //请求倍比
        this.clazz_arr[EventConst.ON_CARD_DOUBLE_RATIO_REQ_CS] = builder.build("CardRatioReq");
        this.clazz_arr[EventConst.ON_CARD_DOUBLE_RATIO_RESP_SC] = builder.build("CardRatioResp");
        //请求计算得分
        this.clazz_arr[EventConst.ON_GAIN_POINT_REQ_CS] = builder.build("GainPointsReq");
        this.clazz_arr[EventConst.ON_GAIN_POINT_RESP_SC] = builder.build("GainPointsResp");
        //请求锁牌
        this.clazz_arr[EventConst.ON_LOCK_POKE_REQ_CS] = builder.build("LockCardReq");
        this.clazz_arr[EventConst.ON_LOCK_POKE_RESP_SC] = builder.build("LockCardResp");
        //请求解锁
        this.clazz_arr[EventConst.ON_UNLOCK_POKE_REQ_CS] = builder.build("LockCardReq");
        this.clazz_arr[EventConst.ON_UNLOCK_POKE_RESP_SC] = builder.build("LockCardResp");
        //请求请求留机
        this.clazz_arr[EventConst.ON_RESERVED_MACHINE_REQ_CS] = builder.build("LockCardReq");
        this.clazz_arr[EventConst.ON_RESERVED_MACHINE_RESP_SC] = builder.build("LockCardResp");
        //请求解除留机,返回
        this.clazz_arr[EventConst.ON_UNRESERVED_MACHINE_REQ_CS] = builder.build("LockCardReq");
        this.clazz_arr[EventConst.ON_UNRESERVED_MACHINE_RESP_SC] = builder.build("LockCardResp");
    };
    //新建一个对象
    ProtoFactory.prototype.newProto = function (action_index) {
        if (action_index < EventConst.PROTO_BEGIN || action_index >= EventConst.PROTO_END) {
            return null;
        }
        var proto = new this.clazz_arr[action_index];
        return proto;
    };
    ProtoFactory.prototype.GetClazz = function (action_index) {
        if (action_index < EventConst.PROTO_BEGIN || action_index >= EventConst.PROTO_END) {
            return null;
        }
        return this.clazz_arr[action_index];
    };
    return ProtoFactory;
}());
ProtoFactory.instance = null;
__reflect(ProtoFactory.prototype, "ProtoFactory");
//# sourceMappingURL=ProtoFactory.js.map