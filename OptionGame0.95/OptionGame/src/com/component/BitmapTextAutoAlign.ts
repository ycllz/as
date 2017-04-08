/**
 *
 * @author xx 自动左或者右对齐的图片文本框, 根据保存的固定坐标，左或者右对齐，计算文本宽度来自动对齐
 *  比如 右对齐
 *   5000
 *   2000
 *    500
 *    200
 *     10
 *  或者左对齐
 *    5000
 *    2000
 *    500
 *    200
 *    10
 */
class BitmapTextAutoAlign extends egret.DisplayObjectContainer {

    private m_fixedCoordinateX: number = 0;//固定的坐标 X
    private m_textAlign: string = egret.HorizontalAlign.LEFT;
    private m_bitmapText: egret.BitmapText = null;
    private m_txtNum: number = 0;
    /**
     * 
     */
    public constructor() {
        super();
        this.m_bitmapText = new egret.BitmapText();
        this.addChild(this.m_bitmapText);
    }

    public get bitmapText(): egret.BitmapText {
        return this.m_bitmapText;
    }


    public set fixedCoordinateX(value: number) {
        this.m_fixedCoordinateX = value;
    }

    public setTextAlign(value: string) {
        this.m_textAlign = value;
        this.m_bitmapText.textAlign = value;
    }

    //更新纹理，
    /**
     * 更新纹理， 会把数值一起更新了
     * */
    public updateTextTure(font_name: string,value: number = undefined) {
        this.bitmapText.font = RES.getRes(font_name);
        // RES.getRes(font_name);
        if(value == undefined) {
            this.text = this.m_bitmapText.text;
        } else {
            this.text = value.toString();
        }
    }

    public set text(value: string) {
        this.m_txtNum = parseInt(value);
        this.m_bitmapText.text = value;
        this.updateAlign();
    }

	/**
     * 可以从这里得到文本框最新的值，转 int 就可以了
     * */
    public get text(): string {
        return this.m_bitmapText.text;
    }

    public get realTextNumberValue(): number {
        return parseInt(this.m_bitmapText.text);
    }
    /**
     * 返回的是设置 text 属性的时候的值，如果没有更新 text 属性，这个值就一直是最开始的
     * */
    public get textNumberValue(): number {
        return this.m_txtNum;
    }

    /**
     *  设置完文本后自动根据 对齐方式 跟 固定坐标 来调整 X 坐标... 默认右对齐
     */
    private updateAlign() {
        if(egret.HorizontalAlign.LEFT == this.m_textAlign) {
            this.m_bitmapText.x = this.m_fixedCoordinateX;// + this.m_bitmapText.textWidth;
            //console.log(this.m_textAlign,this.m_fixedCoordinateX,this.m_bitmapText.textWidth);
        }
        /*else if(egret.HorizontalAlign.RIGHT == this.m_textAlign){
            this.x = this.m_fixedCoordinateX - this.textWidth;
        }*/
        else {
            this.x = this.m_fixedCoordinateX - this.m_bitmapText.textWidth;
            //console.log(this.m_textAlign,this.m_fixedCoordinateX,"this.m_bitmapText.textWidth ",this.m_bitmapText.textWidth);
        }
        this.addChild(this.m_bitmapText);
    }

}
