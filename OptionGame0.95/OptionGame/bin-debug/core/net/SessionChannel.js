var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//会话
var SessionChannel = (function (_super) {
    __extends(SessionChannel, _super);
    function SessionChannel() {
        var _this = _super.call(this) || this;
        //private m_dispatcher:MsgDispatcher = new MsgDispatcher();
        _this.m_sock = null;
        _this.gameSock = null;
        _this.connected = false;
        _this.m_sock = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        _this.m_sock.type = egret.WebSocket.TYPE_BINARY;
        _this.m_sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, _this.OnRecvMsg, _this);
        _this.m_sock.addEventListener(egret.Event.CONNECT, _this.OnSocketOpen, _this);
        _this.m_sock.addEventListener(egret.Event.CLOSE, _this.OnSocketClose, _this);
        _this.m_sock.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.OnSocketError, _this);
        return _this;
    }
    SessionChannel.CreateChannel = function () {
        var session = new SessionChannel();
        return session;
    };
    //如：ws://localhost:8080/RoyaltyServer/logicprocessor
    SessionChannel.prototype.OpenChannel = function (url, funCall, scope) {
        //   this.m_sock.connect("127.0.0.1", 8888);
        //console.log("url : ", url );
        this.m_sock.connectByUrl(url);
        this.m_sock.once(egret.Event.CONNECT, funCall, scope); // todo
        egret.warn("CONNECTING " + url);
    };
    SessionChannel.prototype.OnSocketOpen = function () {
        egret.warn("CONNECTED");
        this.connected = true;
    };
    SessionChannel.prototype.OnSocketError = function () {
        // egret.warn("error");
        this.connected = false;
    };
    SessionChannel.prototype.OnSocketClose = function () {
        //  egret.warn("close");
        this.connected = false;
    };
    //收到 socket 数据
    SessionChannel.prototype.OnRecvMsg = function (e) {
        var msgBuff;
        var msgBody = new egret.ByteArray();
        this.m_sock.readBytes(msgBody);
        //请求返回, ComRespProto ： uint32  cid ， uint32 status
        var classz = ProtoFactory.getInstance().GetClazz(EventConst.ON_COM_PROTO_RESP_CS);
        var resp_proto = classz.decode(msgBody.buffer); //先得到 cid 
        var classz = ProtoFactory.getInstance().GetClazz(resp_proto.cid); //用 cid 去找对应的 proto 结构解包
        var proto_data = classz.decode(msgBody.buffer);
        // //console.log("收到返回");
        //把解包的数据派出去
        EventManager.instance.dispatchEventWith(GlobalEvents.ReceiveServerMsg, false, proto_data);
        //        GlobalData.g_main.panelTestBtns.OnTestNet(resp_proto.cid, msgBody);
        //        var classz: any = ProtoFactory.getInstance().GetClazz(resp_proto.cid);
        //        var weixin_resp: any = classz.decode(msgBody.buffer);
        //        DataInteract.getInst().callReturn(resp_proto.cid,weixin_resp);
        //ltz 测试用
        //GlobalData.g_main.panelTestBtns.OnTestNet(resp_proto.cid, msgBody);
        //        var classz: any = ProtoFactory.getInstance().GetClazz(resp_proto.cid);
        //        var weixin_resp: any = classz.decode(msgBody.buffer);
        //        DataInteract.getInst().callReturn(resp_proto.cid,weixin_resp);
        //        var classz: any = ProtoFactory.getInstance().GetClazz(resp_proto.cid);
        //        var weixin_resp: any = classz.decode(msgBody.buffer);
        //        DataInteract.getInst().callReturn(resp_proto.cid,weixin_resp);
        //var len = msgBody.buffer.byteLength;
        //   var dataView = new DataView(btyearray.buffer);
        //   var pbView = new DataView(new ArrayBuffer(len));
        //   for(var i = 0;i < len;i++) {
        //      pbView.setInt8(i,dataView.getInt8(i));
        //   }
        //  msgBuff = pbView.buffer;
        // var proto: string = RES.getRes("message_proto");
        // var builder:any = dcodeIO.ProtoBuf.loadProto(proto);
        // var clazz:any = builder.build("WeixinAccessTokenResp");
        //    var data: any = clazz.decode(msgBody.buffer);
        //   alert("decodeData id=" + data.get("cid")+" status="+data.status);
        //   var my_am:any = builder.build("MyAm");
        //   var my_am_data: any = my_am.decode(msgBody.buffer);
        //   alert("decodeData text=" + my_am_data.get("text")+" openid="+my_am_data.get("openid"));
    };
    SessionChannel.prototype.SendText = function (msg) {
        ////console.log("发出"+msg);
        this.m_sock.writeUTF(msg);
    };
    SessionChannel.prototype.SendBinary = function (data) {
        var arraybuffer = data.toArrayBuffer();
        var len = arraybuffer.byteLength;
        var btyearray = new egret.ByteArray(arraybuffer);
        if (len > 0) {
            this.m_sock.writeBytes(btyearray);
            this.m_sock.flush();
        }
    };
    SessionChannel.prototype.CloseChannel = function () {
        this.m_sock.close();
    };
    return SessionChannel;
}(egret.DisplayObjectContainer));
__reflect(SessionChannel.prototype, "SessionChannel");
//# sourceMappingURL=SessionChannel.js.map