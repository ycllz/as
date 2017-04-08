package com.scene.sceneUnit.common
{
	import com.utils.String5;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import flash.geom.Rectangle;
	
	import morn.core.utils.BitmapUtils;
	
	/**
	 * 图片数字
	 * 用符号分隔的图片数字,比如 123456789 显示成 123,456,789 ;如果分隔符 bitmapdata 为 null，则不分隔
	 * @param1 使用：1. setBitmapDataSource 设置bitmapdata ； 2. setNum4 设置数字
	 * @author Administrator
	 * 
	 */	
	public class NumberImageMarks extends Sprite
	{
		private var _num:Number;//需要图片显示的数值
		private var _numClips:Vector.<BitmapData>;
		private var _numBitmapData:BitmapData;
		private var _marksBitmapData:BitmapData;
		
		private var _numBitmap:Bitmap;
		
		private var _marksStr:String;
		private var _vgap:Number;
		private var _smoothing:Boolean=false;
		
		private var _numWidth:Number;//单个数字的宽高
		private var _numHeight:Number;
		
		private var _numList:Vector.<Bitmap> = new Vector.<Bitmap>();
		
		public function NumberImageMarks()
		{
			super();
			
		}
		/**
		 * 
		 * @param marksStr		分隔字符 比如英文逗号  ,
		 * @param marksBitmapData	分隔符 bitmapdata
		 * @param numberBitmapData	数字的bitmapdata 包括从 0到 9 的十个数字的一张图片的bitmapdata
		 * @param vgap				横向间隔
		 */	
		public function setBitmapDataSource(marksStr:String, marksBitmapData:BitmapData, numberBitmapData:BitmapData, vgap:Number=0, smoothing:Boolean=false):void
		{
			var p:Point = new Point(0,0);
			var rect:Rectangle;
			var bitmapData:BitmapData;
			this._marksStr = marksStr;
			this._numClips = morn.core.utils.BitmapUtils.createClips( numberBitmapData, 10, 1 );
			var len:int = this._numClips.length;
			for(var i:int=0; i<len; i++){
				rect = _numClips[i].getColorBoundsRect(0xFF000000,0x00000000,false);
				bitmapData = new BitmapData(rect.width, rect.height, true, 0);
				bitmapData.threshold(_numClips[i], rect, p, "==", 0xFF000000, 0x00000000, 0xFFFFFFFF, true);
				this._numClips[i] = bitmapData;
			}
			_numHeight = bitmapData.height;
			_numWidth = bitmapData.width;
//			this._numClips = App.asset.getClips("", 10, 1, true, numberBitmapData);
			this._numBitmapData = numberBitmapData;
			
			rect = marksBitmapData.getColorBoundsRect(0xFF000000,0x00000000,false);
			this._marksBitmapData = new BitmapData(rect.width, rect.height, true, 0);
			this._marksBitmapData.threshold(marksBitmapData, rect, p, "==", 0xFF000000, 0x00000000, 0xFFFFFFFF, true);
			
			this._vgap = vgap;
			this._smoothing = smoothing;
		}
		/**
		 *传入数字，设置图片数值 
		 * @param num
		 * 
		 */		
		public function setNum4( num:Number ):void
		{
			var len:int = _numList.length;
			var bitmap:Bitmap;
			for(var i:int=0; i<len; i++){
				bitmap = _numList[i];
				if(bitmap.parent){
					bitmap.parent.removeChild(bitmap);
				}
			}
			var str5:String;
			if(_marksBitmapData==null){
				str5 = num.toString();
			}
			else{
				str5 = String5.tranNumberToString( num );
			}
			
			var strLen:int = str5.length;
			
			var isMarks:Boolean=false;
			var singleStr:String;
			var singleNum:int;
			var offsetY:Number=0;
			for(i=0; i<strLen; i++){
				singleStr = str5.charAt(i);
				isMarks = false;
				if(i<len){
					bitmap = _numList[i];
				}else{
					bitmap = new Bitmap(null, "auto", this._smoothing);
					_numList.push(bitmap);
				}
				if(this._marksStr==singleStr){
					//分隔符
					isMarks = true;
					bitmap.bitmapData = _marksBitmapData;
				}else{
					//数字
					singleNum = int(singleStr);
					bitmap.bitmapData = this._numClips[singleNum];
				}
				bitmap.x = (i==0) ? 0 : (_numList[i-1].x + _numList[i-1].width + _vgap);
				this.addChild(bitmap);
				if(isMarks){
					offsetY = _numHeight - (_numHeight - bitmap.height);
					bitmap.y = offsetY;
					isMarks = false;
				}else{
					bitmap.y = 0;
				}
			}
		}
		
		/**
		 * 
		 * @param num
		 * 
		 */		
		public function setNum( num:Number ):void
		{
			this._num = num;
			
			var str5:String;
			if(_marksBitmapData==null){
				str5 = num.toString();
			}
			else{
				str5 = String5.tranNumberToString( num );
			}
			
			var len:int = str5.length;
			
			var bitmapWidth:Number = len * (_numWidth + this._vgap) + 5;//bitmapdata 数字 宽度
			var bitmapHeight:Number = _numHeight;
			
			var singleNum:int;
			var singleBitmapData:BitmapData;
			var singleStr:String;
			var offsetX:Number=0;
			var offsetY:Number=0;
			
			var numBitmapData:BitmapData = new BitmapData(bitmapWidth, bitmapHeight, true, 0);
			var isMarks:Boolean=false;
			var curWidth:Number=0;
			var curXcoord:Number=0;
			var lastBitmapDataWidth:Number=0;
			for(var i:int=0; i<len; i++){
				singleStr = str5.charAt(i);
				isMarks = false;
				offsetY = 0;
				if(this._marksStr==singleStr){
					//分隔符
					singleBitmapData = this._marksBitmapData;
					isMarks = true;
				}else{
					//数字
					singleNum = int(singleStr);
					singleBitmapData = this._numClips[singleNum];
				}
				
				curXcoord = (i==0) ? 0 : curXcoord + lastBitmapDataWidth + _vgap;
				
				if(isMarks){
					offsetY = _numHeight - (_numHeight - singleBitmapData.height);
//					curXcoord = curXcoord + singleBitmapData.width;
					isMarks = false;
				}else{
//					curXcoord = (i==0) ? 0 : curXcoord + singleBitmapData.width + _vgap;
				}
				
				lastBitmapDataWidth = singleBitmapData.width;
				numBitmapData.draw( singleBitmapData, new Matrix(1,0,0,1, curXcoord, offsetY) );
			}
			
			if(!_numBitmap){
				_numBitmap = new Bitmap(numBitmapData);
			}
			this._numBitmap.bitmapData = numBitmapData;
			this.addChild(this._numBitmap);
			
		}
	}
}