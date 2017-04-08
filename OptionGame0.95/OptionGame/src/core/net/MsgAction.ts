/**
 * 协议设计一定要以一对出现，也就是说有REQ，下一条协议就是RESP
 */

enum MsgAction
{


    //1-5000	为无锁单线程操作
    //1->50帐号登录管理
    PROTO_BEGIN                  = 0,
    ON_CHANNEL_SESSION_CLOSE         = 1,   // 连接关闭
    ON_COM_ERROR_PROTO_SC            = 2,   // 发送公共错误提示协议
    ON_HAND_OUT_ONE_CARD_SC          = 3,   // 派发一张牌到前端

    ON_COM_PROTO_RESP_CS            = 7,    //公共协议返回

    /** 登录协议 */
    ON_WEIXIN_ACCESS_TOKEN_REQ_CS   = 11,//微信请求access_token
    ON_WEIXIN_ACCESS_TOKEN_RESP_SC  = 12,

    ON_WEIXIN_USERINFO_REQ_CS       = 13,//微信请求access_token
    ON_WEIXIN_USERINFO_RESP_SC      = 14,

    /** 房间协议 */
    ON_OPENING_HOUSEINFO_REQ_CS      = 101,//请求麻将开房房间信息
    ON_OPENING_HOUSEINFO_RESP_SC     = 102,

    ON_OPEN_HOUSE_REQ_CS              = 103,//请求麻将开房
    ON_OPEN_HOUSE_RESP_SC             = 104,

    ON_CLOSE_HOUSE_REQ_CS   		= 105,//解散房间
    ON_CLOSE_HOUSE_RESP_SC  		= 106,

    ON_SIGN_CLOSE_HOUSE_REQ_CS         = 107,// 发起签名关闭房间
    ON_SIGN_CLOSE_HOUSE_RESP_SC         = 108,

    ON_ANSWER_SIGN_CLOSE_HOUSE_REQ_CS     = 109,// 应答签名关闭房间
    ON_ANSWER_SIGN_CLOSE_HOUSE_RESP_SC    = 110,

    ON_JOIN_HOUSE_REQ_CS     = 111,// 加入房间
    ON_JOIN_HOUSE_RESP_SC    = 112,

    ON_QUIT_HOUSE_REQ_CS     = 113,// 退出房间
    ON_QUIT_HOUSE_RESP_SC    = 114,

    /** 游戏过程协议 */
    ON_VOTE_KING_REQ_CS 			= 151,// 请求选举大王
    ON_VOTE_KING_RESP_SC 			= 152,

    ON_DELIVER_CARD_REQ_CS 			= 153,// 庄家请求发牌
    ON_DELIVER_CARD_RESP_SC 		= 154,

    ON_OUTPUT_CARD_REQ_CS 		= 161,// 请求出牌
    ON_OUTPUT_CARD_RESP_SC 		= 162,

    ON_PLAY_CIRCLE_ACTION_NONE_CS            = 163,// 无
    ON_PLAY_CIRCLE_ACTION_NONE_SC            = 164,// 无

    ON_PLAY_CIRCLE_ACTION_PASS_CS            = 165,// 过
    ON_PLAY_CIRCLE_ACTION_PASS_SC            = 166,// 过

    ON_PLAY_CIRCLE_ACTION_PENG_CS          = 167,// 碰
    ON_PLAY_CIRCLE_ACTION_PENG_SC          = 168,// 碰

    ON_PLAY_CIRCLE_ACTION_DIAN_GANG_CS         = 169 ,//点杠
    ON_PLAY_CIRCLE_ACTION_DIAN_GANG_SC         = 170 ,//点杠

    ON_PLAY_CIRCLE_ACTION_AN_GANG_CS        = 171 ,//暗杠
    ON_PLAY_CIRCLE_ACTION_AN_GANG_SC        = 172,

    ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_CS     = 173 ,//碰杠
    ON_PLAY_CIRCLE_ACTIONP_PENG_GANG_SC     = 174,

    ON_HU_CARD_REQ_CS 			= 175,//请求胡牌
    ON_HU_CARD_RESP_SC 			= 176,


    ON_TEST_CONFIG_MY_CARDS_CS 		= 701,//设置我的牌型
    ON_TEST_CONFIG_MY_CARDS_SC 		= 702,//设置我的牌型，返回
    ON_TEST_CONFIG_LAST_CARDS_CS 		= 703,//设置尾盘
    ON_TEST_CONFIG_LAST_CARDS_SC 		= 704,//设置尾盘，返回

    PROTO_END //微信请求access_token返回


    // 5001-9999为多线程有锁操作
}