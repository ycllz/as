//会话
class SessionChannel  extends egret.DisplayObjectContainer
{
    //private m_dispatcher:MsgDispatcher = new MsgDispatcher();
    private  m_sock:egret.WebSocket = null;
    private gameSock:egret.WebSocket = null;
    public connected:boolean = false;
    public constructor()
    {
        super();
        this.m_sock = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.m_sock.type = egret.WebSocket.TYPE_BINARY;
        this.m_sock.addEventListener(egret.ProgressEvent.SOCKET_DATA,   this.OnRecvMsg, this);
        this.m_sock.addEventListener(egret.Event.CONNECT, this.OnSocketOpen, this);
        this.m_sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
        this.m_sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);

    }
    public static CreateChannel():SessionChannel
    {
        var session:SessionChannel = new SessionChannel();
        return session;
    }
    //如：ws://localhost:8080/RoyaltyServer/logicprocessor
    public OpenChannel(url:string, funCall:Function, scope:any)
    {
     //   this.m_sock.connect("127.0.0.1", 8888);
        //console.log("url : ", url );
        this.m_sock.connectByUrl(url);
        this.m_sock.once(egret.Event.CONNECT, funCall, scope); // todo
        egret.warn("CONNECTING "+url);
    }
    private OnSocketOpen():void {
        egret.warn("CONNECTED");
        this.connected = true;
    }
    private OnSocketError():void {
        // egret.warn("error");
        this.connected = false;
    }
    private OnSocketClose():void {
        //  egret.warn("close");
        this.connected = false;
    }

    //收到 socket 数据
    private OnRecvMsg(e:egret.Event):void
    {
        var msgBuff: ArrayBuffer;
        var msgBody: egret.ByteArray = new egret.ByteArray();
        this.m_sock.readBytes(msgBody);
        //请求返回, ComRespProto ： uint32  cid ， uint32 status
        var classz: any = ProtoFactory.getInstance().GetClazz(EventConst.ON_COM_PROTO_RESP_CS);
        
        var resp_proto: any = classz.decode(msgBody.buffer);//先得到 cid 
        
        var classz: any = ProtoFactory.getInstance().GetClazz(resp_proto.cid);//用 cid 去找对应的 proto 结构解包
        
        var proto_data: any = classz.decode(msgBody.buffer);
        
        
        
        // //console.log("收到返回");
        
        //把解包的数据派出去
        EventManager.instance.dispatchEventWith(GlobalEvents.ReceiveServerMsg,false,proto_data);
        
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

    }
    public SendText(msg:string)
    {
        ////console.log("发出"+msg);
        this.m_sock.writeUTF(msg);
    }
    public SendBinary(data:any)
    {
        var arraybuffer: ArrayBuffer = data.toArrayBuffer();
        var len: number = arraybuffer.byteLength;
        var btyearray:egret.ByteArray=new egret.ByteArray(arraybuffer);
        if(len > 0)
        {
            this.m_sock.writeBytes(btyearray);
            this.m_sock.flush();

            // console.log(" flush socket --------------- > ", data );
        }

    }
    public CloseChannel():void
    {
        this.m_sock.close();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //回调方案
    //public SendBinary(data:any, funCall:Function, scopeCall:any)
    //{
    //    this.arrCall[data.cid+1] = {fun:funCall, scope:scopeCall};// todo 回调方案注册回调
    //    var arraybuffer: ArrayBuffer = data.toArrayBuffer();
    //    var len: number = arraybuffer.byteLength;
    //    var btyearray:egret.ByteArray=new egret.ByteArray(arraybuffer);
    //    if(len > 0)
    //    {
    //        this.m_sock.writeBytes(btyearray);
    //        this.m_sock.flush();
    //    }
    //
    //}
    //private OnRecvMsg(e:egret.Event):void {
    //    var msgBuff:ArrayBuffer;
    //    var msgBody:egret.ByteArray = new egret.ByteArray();
    //    this.m_sock.readBytes(msgBody);
    //    var classz:any = ProtoFactory.getInstance().GetClazz(MsgAction.ON_COM_PROTO_RESP_CS);
    //    var resp_proto:any = classz.decode(msgBody.buffer);
    //
    //    var classz: any = ProtoFactory.getInstance().GetClazz(resp_proto.cid+1);
    //    var weixin_resp: any = classz.decode(msgBody.buffer);
    //    this.arrCall[resp_proto.cid].fun.call(this.arrCall[resp_proto.cid].scope,weixin_resp);
    //
    //}
    //private arrCall:CallRegister[] = [];// 回调函数镜像数组
    //回调方案
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}