/**
 * Created by Administrator on 2016/12/23 0023.
 */

class RulesTextField extends egret.DisplayObjectContainer {

    private textFieldList: egret.TextField[][] = [];

    public constructor() {
        super();
    }

    private clean() {

    }

    /***
     *  分号冒号必须用英文字符
     *
     * "1:本游戏仅供会员休闲娱乐，严禁赌博之用途；2:在游戏过程中，如遇到爆币、涨币之现象属于机台故障，只能按游戏起始币数计算；"
     * separate to :
     *      [ [1:],[本游戏仅供会员休闲娱乐，严禁赌博之用途；] ]
     *      [ [2:], [在游戏过程中，如遇到爆币、涨币之现象属于机台故障，只能按游戏起始币数计算；] ]
     *      textColor: number,width: number,height: number,
     x: number,y: number,parent: egret.DisplayObjectContainer,bold: boolean=false,
     align: string = egret.HorizontalAlign.LEFT,alpha: number = 1, wordWrap:boolean=false,
     border:boolean=false
     * */
    public text(value: string,textfieldWidth: number,l_textSize: number,l_sep: string = "；",eachStrSep = "：",textColor: number = ColorUtil.white,
        bold: boolean = false,align: string = egret.HorizontalAlign.LEFT,wordWrap: boolean = true,alpha: number = 1,border: boolean = false
    ) {
        // let chatCode:number = l_sep.charCodeAt(0);
        let result: string[] = value.split(l_sep);

        let vgap: number = 7;

        for(let i = 0;i < result.length;i++) {
            let str: string = result[i];
            let eachStr: string[] = str.split(eachStrSep);//[1:本游戏仅供会员休闲娱乐，严禁赌博之用途；]
            let eachTxtArr: egret.TextField[];
            if(this.textFieldList[i]) {
                eachTxtArr = this.textFieldList[i];
                eachTxtArr[0].text = eachStr[0];
                eachTxtArr[1].text = eachStr[1];
            } else {
                eachTxtArr = [];

                eachTxtArr[0] = ObjectUtil.createTextField(eachStr[0] + eachStrSep,l_textSize,textColor,textfieldWidth,-1,0,0,this,bold,align,alpha,wordWrap,border);
                eachTxtArr[0].width = eachTxtArr[0].textWidth;
                eachTxtArr[0].x = 0;
                eachTxtArr[0].y = (i == 0) ? 0 : this.textFieldList[i - 1][1].y + this.textFieldList[i - 1][1].height + vgap;
                if(eachStr.length == 1) {
                    eachTxtArr[0].text = eachStr[0];
                    eachTxtArr[0].x = textfieldWidth - eachTxtArr[0].width;
                    eachTxtArr[0].y = (i == 0) ? 0 : this.textFieldList[i - 1][1].y + this.textFieldList[i - 1][1].height + 20 + vgap;
                }
                if(eachStr.length == 2) {
                    eachTxtArr[1] = ObjectUtil.createTextField(eachStr[1],l_textSize,textColor,textfieldWidth,-1,0,0,this,bold,align,alpha,wordWrap,border);
                    eachTxtArr[1].x = (i == 0) ? eachTxtArr[0].width : this.textFieldList[i - 1][1].x;
                    eachTxtArr[1].y = (i == 0) ? 0 : this.textFieldList[i - 1][1].y + this.textFieldList[i - 1][1].height + vgap;
                    this.textFieldList[i] = eachTxtArr;
                }

            }
        }


    }
}