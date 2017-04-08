/**
 * 全局参数
 * 在main.ts中初始化
 */
module GlobalData {
    export var server_url:string = "ws://203.195.217.251:7799/att";
    // export var server_url: string = "ws://192.168.1.115:7799/att";
    // export var server_url:string = "";
    export var g_main: Main;//主程序
    // 屏幕宽度与高度
    export var g_screen_width: number;
    export var g_screen_height: number;

    //固定显示的宽度与高度
    export var g_fix_width: number = 480;
    export var g_fix_height: number = 800;

    export var bIsInRoom: boolean = false; // 是否已经进入了某个房间

    export var isReleaseVerson:boolean=false;


    //通用字体颜色
    export var fontSet: Array<any> = [
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 0,strokeColor: 0x000 }, //白色字无描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0x551205,stroke: 0,strokeColor: 0x000 }, //深色字无描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0x018301,stroke: 0,strokeColor: 0x000 }, //绿色无描边 69fa69
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0x2960fd,stroke: 0,strokeColor: 0x000 }, //蓝色无描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xa629fd,stroke: 0,strokeColor: 0x000 }, //紫色无描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xff9700,stroke: 0,strokeColor: 0x551205 }, //橙色无描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xef0909,stroke: 0,strokeColor: 0x000 }, //红色无描边

        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 3,strokeColor: 0x551205 }, //深色描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 2,strokeColor: 0x018301 }, //绿色描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 2,strokeColor: 0x2960fd }, //蓝色描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 2,strokeColor: 0xa629fd }, //紫色描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 2,strokeColor: 0xff9700 }, //橙色描边
        { fontFamily: "Microsoft YaHei",bold: true,textColor: 0xfcf8e8,stroke: 2,strokeColor: 0xef0909 } //红色描边
    ];
}
