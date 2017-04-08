/**
 * 全局参数
 * 在main.ts中初始化
 */
var GlobalData;
(function (GlobalData) {
    GlobalData.server_url = "ws://203.195.217.251:7799/att";
    //固定显示的宽度与高度
    GlobalData.g_fix_width = 480;
    GlobalData.g_fix_height = 800;
    GlobalData.bIsInRoom = false; // 是否已经进入了某个房间
    GlobalData.isReleaseVerson = false;
    //通用字体颜色
    GlobalData.fontSet = [
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 0, strokeColor: 0x000 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0x551205, stroke: 0, strokeColor: 0x000 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0x018301, stroke: 0, strokeColor: 0x000 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0x2960fd, stroke: 0, strokeColor: 0x000 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xa629fd, stroke: 0, strokeColor: 0x000 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xff9700, stroke: 0, strokeColor: 0x551205 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xef0909, stroke: 0, strokeColor: 0x000 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 3, strokeColor: 0x551205 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 2, strokeColor: 0x018301 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 2, strokeColor: 0x2960fd },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 2, strokeColor: 0xa629fd },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 2, strokeColor: 0xff9700 },
        { fontFamily: "Microsoft YaHei", bold: true, textColor: 0xfcf8e8, stroke: 2, strokeColor: 0xef0909 } //红色描边
    ];
})(GlobalData || (GlobalData = {}));
//# sourceMappingURL=GlobalData.js.map