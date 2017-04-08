/**
 * Created by yc on 2016/12/26.
 */
var EventConst;
(function (EventConst) {
    EventConst[EventConst["PROTO_BEGIN"] = 0] = "PROTO_BEGIN";
    //1-10为公共系统消息
    EventConst[EventConst["ON_CHANNEL_SESSION_CLOSE"] = 1] = "ON_CHANNEL_SESSION_CLOSE";
    EventConst[EventConst["ON_SYSTEM_TIME_TASK"] = 2] = "ON_SYSTEM_TIME_TASK";
    EventConst[EventConst["ON_COM_ERROR_PROTO_SC"] = 3] = "ON_COM_ERROR_PROTO_SC";
    EventConst[EventConst["ComNotifyProto"] = 4] = "ComNotifyProto";
    EventConst[EventConst["GMComRespProto"] = 5] = "GMComRespProto";
    EventConst[EventConst["ON_COM_REQ_CS"] = 9] = "ON_COM_REQ_CS";
    EventConst[EventConst["ON_COM_PROTO_RESP_CS"] = 10] = "ON_COM_PROTO_RESP_CS";
    EventConst[EventConst["ON_GM_LOGIN_REQ_CS"] = 21] = "ON_GM_LOGIN_REQ_CS";
    EventConst[EventConst["ON_GM_LOGIN_RESP_SC"] = 22] = "ON_GM_LOGIN_RESP_SC";
    EventConst[EventConst["ON_PLAYER_REG_REQ_CS"] = 51] = "ON_PLAYER_REG_REQ_CS";
    EventConst[EventConst["ON_PLAYER_REG_RESP_SC"] = 52] = "ON_PLAYER_REG_RESP_SC";
    EventConst[EventConst["ON_LOGIN_REQ_CS"] = 53] = "ON_LOGIN_REQ_CS";
    EventConst[EventConst["ON_LOGIN_RESP_SC"] = 54] = "ON_LOGIN_RESP_SC";
    EventConst[EventConst["ON_HOUSE_LIST_REQ_CS"] = 101] = "ON_HOUSE_LIST_REQ_CS";
    EventConst[EventConst["ON_HOUSE_LIST_RESP_CS"] = 102] = "ON_HOUSE_LIST_RESP_CS";
    EventConst[EventConst["ON_MACHINE_LIST_REQ_CS"] = 103] = "ON_MACHINE_LIST_REQ_CS";
    EventConst[EventConst["ON_MACHINE_LIST_RESP_CS"] = 104] = "ON_MACHINE_LIST_RESP_CS";
    EventConst[EventConst["ON_MACHINE_OWN_REQ_CS"] = 105] = "ON_MACHINE_OWN_REQ_CS";
    EventConst[EventConst["ON_MACHINE_OWN_RESP_CS"] = 106] = "ON_MACHINE_OWN_RESP_CS";
    EventConst[EventConst["ON_MACHINE_CANCEL_REQ_CS"] = 107] = "ON_MACHINE_CANCEL_REQ_CS";
    EventConst[EventConst["ON_MACHINE_CANCEL_RESP_CS"] = 108] = "ON_MACHINE_CANCEL_RESP_CS";
    EventConst[EventConst["ON_LOCK_POKE_REQ_CS"] = 109] = "ON_LOCK_POKE_REQ_CS";
    EventConst[EventConst["ON_LOCK_POKE_RESP_SC"] = 110] = "ON_LOCK_POKE_RESP_SC";
    EventConst[EventConst["ON_UNLOCK_POKE_REQ_CS"] = 111] = "ON_UNLOCK_POKE_REQ_CS";
    EventConst[EventConst["ON_UNLOCK_POKE_RESP_SC"] = 112] = "ON_UNLOCK_POKE_RESP_SC";
    EventConst[EventConst["ON_RESERVED_MACHINE_REQ_CS"] = 113] = "ON_RESERVED_MACHINE_REQ_CS";
    EventConst[EventConst["ON_RESERVED_MACHINE_RESP_SC"] = 114] = "ON_RESERVED_MACHINE_RESP_SC";
    EventConst[EventConst["ON_UNRESERVED_MACHINE_REQ_CS"] = 115] = "ON_UNRESERVED_MACHINE_REQ_CS";
    EventConst[EventConst["ON_UNRESERVED_MACHINE_RESP_SC"] = 116] = "ON_UNRESERVED_MACHINE_RESP_SC";
    EventConst[EventConst["ON_ADDPOINTS_REQ_CS"] = 201] = "ON_ADDPOINTS_REQ_CS";
    EventConst[EventConst["ON_ADDPOINTS_RESP_SC"] = 202] = "ON_ADDPOINTS_RESP_SC";
    EventConst[EventConst["ON_SUBOINTS_REQ_CS"] = 203] = "ON_SUBOINTS_REQ_CS";
    EventConst[EventConst["ON_SUBPOINTS_RESP_SC"] = 204] = "ON_SUBPOINTS_RESP_SC";
    EventConst[EventConst["ON_BEGPOINT_REQ_CS"] = 205] = "ON_BEGPOINT_REQ_CS";
    EventConst[EventConst["ON_BEGPOINT_RESP_CS"] = 206] = "ON_BEGPOINT_RESP_CS";
    EventConst[EventConst["ON_OPEN1_CARD_REQ_CS"] = 207] = "ON_OPEN1_CARD_REQ_CS";
    EventConst[EventConst["ON_OPEN1_CARD_RESP_CS"] = 208] = "ON_OPEN1_CARD_RESP_CS";
    EventConst[EventConst["ON_OPEN2_CARD_REQ_CS"] = 209] = "ON_OPEN2_CARD_REQ_CS";
    EventConst[EventConst["ON_OPEN2_CARD_RESP_CS"] = 210] = "ON_OPEN2_CARD_RESP_CS";
    EventConst[EventConst["ON_CARD_DOUBLE_RATIO_REQ_CS"] = 211] = "ON_CARD_DOUBLE_RATIO_REQ_CS";
    EventConst[EventConst["ON_CARD_DOUBLE_RATIO_RESP_SC"] = 212] = "ON_CARD_DOUBLE_RATIO_RESP_SC";
    EventConst[EventConst["ON_GAIN_POINT_REQ_CS"] = 213] = "ON_GAIN_POINT_REQ_CS";
    EventConst[EventConst["ON_GAIN_POINT_RESP_SC"] = 214] = "ON_GAIN_POINT_RESP_SC";
    //  ON_LOCK_CARD_CS       = 215,//HOLD
    //  ON_LOCK_CARD_SC        = 216,//RECEIVE_PROTOCOL HOLD CARD
    EventConst[EventConst["PROTO_END"] = 9999] = "PROTO_END";
    EventConst[EventConst["RECEIVE_PROTOCOL"] = 10001] = "RECEIVE_PROTOCOL";
})(EventConst || (EventConst = {}));
//# sourceMappingURL=EventConst.js.map