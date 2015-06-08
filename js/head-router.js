/*


 */
PicArray=new Array(4);
TxtArray=new Array(4);
PoiArray=new Array(4);

PicArray[0]="../img/1.jpg";
PicArray[1]="../img/2.jpg";
PicArray[2]="../img/3.jpg";
PicArray[3]="../img/4.jpg";

TxtArray[0]="海城市自然资源及啥啥啥啥简介";
TxtArray[1]="兰州市自然资源及啥啥啥啥简介";
TxtArray[2]="海南市自然资源及啥啥啥啥简介";
TxtArray[3]="荷兰市自然资源及啥啥啥啥简介";

PoiArray[0]="http://www.baidu.com";
PoiArray[1]="http://www.souhu.com";
PoiArray[2]="http://www.qq.com";
PoiArray[3]="http://www.taobao.com";

num=0;


$(document).ready(function(){
	//-调整全部属性

		$('.ban-list-router-img').attr('src',PicArray[num]);
		$('.ban-list-router-txt center').text(TxtArray[num]);
		$('.ban-list-a').attr('href',PoiArray[num]);


		$(".ban-list-bar").click(function(){
		//-按钮点击事件
			var btn=$(this);
			$('.ban-list-bar').attr('class','ban-list-bar ban-list-bar-sto');
			btn.attr('class','ban-list-bar ban-list-bar-act');

			var ChosId=btn.attr('id');
			num=ChosId.substring(3);
			num=num-1;

			$('.ban-list-router-img').attr('src',PicArray[num]);
			$('.ban-list-router-txt center').text(TxtArray[num]);
			$('.ban-list-a').attr('href',PoiArray[num]);


		//按钮点击事件-
	});





});

