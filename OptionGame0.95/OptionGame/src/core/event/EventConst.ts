/**
 * Created by yc on 2016/12/26.
 */
enum EventConst
{

    PROTO_BEGIN                  = 0,
    //1-10为公共系统消息
     ON_CHANNEL_SESSION_CLOSE 		 = 1,//连接关闭
     ON_SYSTEM_TIME_TASK 			 = 2,//系统定时器
     ON_COM_ERROR_PROTO_SC 		 = 3,//发送公共错误提示协议

     ComNotifyProto 		 = 4,//发送公共错误提示协议
     GMComRespProto 		 = 5,//发送公共错误提示协议
     
     ON_COM_REQ_CS = 9,                 //请求
     ON_COM_PROTO_RESP_CS = 10,         //公共协议返回

     ON_GM_LOGIN_REQ_CS 			 = 21,//GM请求登录
     ON_GM_LOGIN_RESP_SC 			 = 22,//GM请求登录,返回

     ON_PLAYER_REG_REQ_CS 			 = 51,//请求注册
     ON_PLAYER_REG_RESP_SC 		 = 52,//请求注册,返回
     
     ON_LOGIN_REQ_CS 				 = 53,//请求登录
     ON_LOGIN_RESP_SC 				 = 54,//请求登录,返回

     ON_HOUSE_LIST_REQ_CS 			 = 101,//请求房间列表
     ON_HOUSE_LIST_RESP_CS			 = 102,//请求房间列表,返回
     
     ON_MACHINE_LIST_REQ_CS		 = 103,//请求房间机器列表
     ON_MACHINE_LIST_RESP_CS		 = 104,//请求房间机器列表,返回
     
     ON_MACHINE_OWN_REQ_CS			 = 105,//请求占有机器
     ON_MACHINE_OWN_RESP_CS		 = 106,//请求占有机器,返回
     
     ON_MACHINE_CANCEL_REQ_CS		 = 107,//请求取消占有
     ON_MACHINE_CANCEL_RESP_CS		 = 108,//请求取消占有,返回



    ON_LOCK_POKE_REQ_CS			= 109,//请求锁牌
    ON_LOCK_POKE_RESP_SC			= 110,//请求锁牌,返回
    
    ON_UNLOCK_POKE_REQ_CS			= 111,//请求锁牌
    ON_UNLOCK_POKE_RESP_SC		= 112,//请求锁牌,返回
    
    ON_RESERVED_MACHINE_REQ_CS	= 113,//请求留机
    ON_RESERVED_MACHINE_RESP_SC	= 114,//请求留机,返回

    ON_UNRESERVED_MACHINE_REQ_CS	= 115,//请求解除留机
    ON_UNRESERVED_MACHINE_RESP_SC	= 116,//请求解除留机,返回



     ON_ADDPOINTS_REQ_CS 			 = 201,//请求上分
     ON_ADDPOINTS_RESP_SC 			 = 202,//请求上分,返回
     
     ON_SUBOINTS_REQ_CS 			 = 203,//请求下分
     ON_SUBPOINTS_RESP_SC 			 = 204,//请求下分,返回
     
     ON_BEGPOINT_REQ_CS 			 = 205,//请求押分
     ON_BEGPOINT_RESP_CS 			 = 206,//请求押分,返回
     
     ON_OPEN1_CARD_REQ_CS 			 = 207,//请求第一次开牌
     ON_OPEN1_CARD_RESP_CS 		 = 208,//请求第一次开牌,返回
     
     ON_OPEN2_CARD_REQ_CS 			 = 209,//请求第二次开牌
     ON_OPEN2_CARD_RESP_CS 		 = 210,//请求第二次开牌,返回
     
     ON_CARD_DOUBLE_RATIO_REQ_CS 	 = 211,//请求倍比
     ON_CARD_DOUBLE_RATIO_RESP_SC 	 = 212,//请求倍比,返回
     
     ON_GAIN_POINT_REQ_CS 			 = 213,	//请求得分
     ON_GAIN_POINT_RESP_SC 		 = 214,	//请求得分,返回

    //  ON_LOCK_CARD_CS       = 215,//HOLD
    //  ON_LOCK_CARD_SC        = 216,//RECEIVE_PROTOCOL HOLD CARD

    PROTO_END = 9999, //
    
    RECEIVE_PROTOCOL = 10001,//主模块不处理的数据，用这个协议号发出去，各自模块监听到后处理 bytearray

}