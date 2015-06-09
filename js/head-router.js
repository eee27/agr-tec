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
blb='blb1';
	var Refresh=function(){
		$('.ban-list-router-img').attr('src',PicArray[num]);
		$('.ban-list-router-txt center').text(TxtArray[num]);
		$('.ban-list-a').attr('href',PoiArray[num]);
		$('.ban-list-bar').attr('class','ban-list-bar ban-list-bar-sto');
		$('#'+blb).attr('class','ban-list-bar ban-list-bar-act');
	};
	var OnClk=function(){
		$('.ban-list-bar').click(function(){
		var btn=$(this);
		$('.ban-list-bar').attr('class','ban-list-bar ban-list-bar-sto');
		btn.attr('class','ban-list-bar ban-list-bar-act');

		var ChosId=btn.attr('id');
		num=ChosId.substring(3);
		num=num--;

		Refresh();
		});
	};

	var AutoChange=setInterval(function(){

		if(num<3){
			num++;

		}else{
			num=0;
		}
		var blb=num+1;
		blb="blb"+blb;

		Refresh();

	}, 3000);
$(document).ready(function(){
	Refresh();
	OnClk();
	AutoChange();


});

