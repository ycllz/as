/**
 *
 * @author 
 *
 */
class ObjectUtil {
    static createBitMapText(font_name: string,txt: string,parent: egret.DisplayObjectContainer = null,
        x: number = 0,y: number = 0,align: string = egret.HorizontalAlign.RIGHT): egret.BitmapText {
        var bmt: egret.BitmapText = new egret.BitmapText();
        bmt.textAlign = align;
        bmt.font = RES.getRes(font_name);
        bmt.text = txt;
        bmt.x = x;
        bmt.y = y;
        if(parent != null) {
            parent.addChild(bmt);
        }
        //console.log("obj util : ", bmt);
        return bmt;
    }

    public static createTextField(text: string,size: number,textColor: number,width: number,height: number,
        x: number,y: number,parent: egret.DisplayObjectContainer,bold: boolean = false,
        align: string = egret.HorizontalAlign.LEFT,alpha: number = 1,wordWrap: boolean = false,
        border: boolean = false,pw: boolean = false,type: string = egret.TextFieldType.DYNAMIC): egret.TextField {

        var textfield = new egret.TextField();

        textfield.width = width;
        if(height > 0) {
            textfield.height = height;
        }
        textfield.size = size;
        textfield.textColor = textColor;
        textfield.x = x;
        textfield.y = y;

        textfield.text = text;

        textfield.textAlign = align;
        textfield.alpha = alpha;
        textfield.bold = bold;
        textfield.border = border;

        textfield.displayAsPassword = pw;
        textfield.type = type;

        /*textfield.border = true;
        textfield.borderColor = 0xff0000;*/

        parent.addChild(textfield);
        return textfield;
    }

    /**
     * fixedCoordinateX 固定的竖直坐标, 就是 X 坐标
     * **/
    static createBitMapTextAutoAlign(font_name: string,txt: string,parent: egret.DisplayObjectContainer = null,
        fixedCoordinateX: number = 0,y: number = 0,letterSpacing: number = 0,align: string = egret.HorizontalAlign.RIGHT): BitmapTextAutoAlign {
        var bmt: BitmapTextAutoAlign = new BitmapTextAutoAlign();

        bmt.setTextAlign(align);
        bmt.bitmapText.font = RES.getRes(font_name);
        //console.log( "RES.getRes(font_name) ", RES.getRes(font_name) );

        bmt.fixedCoordinateX = fixedCoordinateX;
        bmt.bitmapText.y = y;
        bmt.bitmapText.letterSpacing = letterSpacing;
        bmt.text = txt;

        if(parent != null) {
            parent.addChild(bmt);
        }
        //console.log("obj util : ", bmt);
        return bmt;
    }


    static createBitmapByName(name: string,x: number,y: number, paren: egret.DisplayObjectContainer,
    height: number = -1, width: number = -1, scalex: number = -1, scaley: number = -1): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        result.x = x;
        result.y = y;
        if(height > 0) {
            result.height = height;
        }
        if(width > 0) {
            result.width = width;
        }
        if(scalex > 0) {
            result.scaleX = scalex;
        }
        if(scaley > 0) {
            result.scaleY = scaley;
        }
        paren.addChild(result);
        return result;
    }


    //把显示对象按照左边坐标开始，右边的坐标结束，均匀排布
    static horizontalLayout(disObjList: egret.DisplayObject[],leftXcoord: number,rightXcoord: number) {
        let howFarAway: number = rightXcoord - leftXcoord;
        let eachWidth: number = howFarAway / disObjList.length;
        let overWidth: number = eachWidth - disObjList[0].width;
        let realWidth: number = (overWidth / disObjList.length) + eachWidth;
        for(var i = 0;i < disObjList.length;i++) {
            var obj = disObjList[i];
            obj.x = leftXcoord + realWidth * i;
        }
    }


    //
    /****
     * 把显示对象按照左边坐标开始，右边的坐标结束，均匀排布，行列排布
     * @param column 列数
     * 
    */
    static tileList(disObjList: egret.DisplayObject[],leftXcoord: number,rightXcoord: number, column:number) {
        let howFarAway: number = rightXcoord - leftXcoord;
        let eachWidth: number = howFarAway / disObjList.length;
        let overWidth: number = eachWidth - disObjList[0].width;
        let realWidth: number = (overWidth / disObjList.length) + eachWidth;
        for(var i = 0;i < disObjList.length;i++) {
            var obj = disObjList[i];
            obj.x = leftXcoord + realWidth * i;
        }
    }
    /** 
     * 对象列表中的对象的图像资源以及加载了的，已经知道了具体宽高
     * 
     * @param vgap 横向间隔
     * @param hgap 纵向间隔
    */
    static tileDisplayObjectList(disObjList: egret.DisplayObject[], column:number, vgap:number, hgap:number) {
        let shang:number = 0;//
        let yushu:number = 0;//
        for(var i = 0;i < disObjList.length;i++) {
            var obj = disObjList[i];
            shang = Math.floor(i / column);//set y coord, calculate this object in which line
            yushu = Math.floor( i % column );//set x coord
            obj.x = (obj.width + vgap) * yushu;
            obj.y = (obj.height + hgap) * shang;
            if(obj.parent){
                obj.parent.addChild(obj);
            }
            // console.log('shang : ', shang );
        }
    }






}
