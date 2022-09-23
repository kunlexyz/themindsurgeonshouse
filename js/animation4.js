//animation4.js
//alert('working in progress');
/*
var pic6=['m2.jpg','m6.jpg','m4.jpg','m3.jpg','m1.jpg'];
p2Wheel6=0;
function slideMini6(){
	//alert('working in progress');
	var holda1='<div class="boxAdsC6" id="boxAdsC6"><img src="images/'+pic6[p2Wheel6]+'" id="adx6" class="imgHalf" style="margin:0px" />';
	p2Wheel6++;
	if(p2Wheel6==pic6.length){p2Wheel6=0;}
	var holda2='<img src="images/'+pic6[p2Wheel6]+'" class="imgHalf" /></div>';
	document.getElementById('boxAds6').innerHTML=holda1+holda2;
	$('#boxAdsC6').animate({'margin-left': '-100%'}, 3000);
	setTimeout('slideMini6()',6000);
}slideMini6();

*/
// from slide 4
var pix7=['gl.jpg','gl2.jpg','gl3.jpg','gl4.jpg'];
p7=0;
function slide7(){
	var holda1='<div class="" style="height:202%;"><img src="images/'+pix7[p7]+'" id="adx3"  style="margin-top:-50%;width:100%; height:50%;" />';
	
	p7x = p7-1;
	if(p7x<0){p7x=pix7.length-1;}
	var holda2='<img src="images/'+pix7[(p7x)]+'" class="" style="width:100%;height:50%;" /></div>';
	document.getElementById('slid7').innerHTML=holda1+holda2;
	
	p7++;
	if(p7==pix7.length){p7=0;}
	$('#adx3').animate({'margin-top': '0%'}, 3000);
	setTimeout('slide7()',6000);
}slide7();

// for top slider
vx = 0;
pic = ['1.jpg',
'2.jpg',
'3.jpg',
'4.jpg',
'5.jpg',
'6.jpg',
];
var picLen = 0;


function slide(dd,dd2,dd3,array3){
    var div = $(dd);
	
	
    div.animate({'opacity': '0'}, 200);
    div.animate({'opacity': '0.5'}, 2000);
	setTimeout('slide()',4000);
	
}
//slide('#top')
function sl(){$('#top').animate({"opacity":"1"},2000);
	px = '<img src="images/'+pic[picLen]+'" class="SliderImage" />';
	document.getElementById('top').innerHTML=px;	
	picLen++;
	if(picLen==pic.length){picLen=0;}
	setTimeout('sl2()',4000);}
function sl2(){$('#top').animate({'opacity': '0'}, 2000);
	px = '<img src="images/'+pic[picLen]+'" class="SliderImage" />';
	document.getElementById('top2').innerHTML=px;	
	picLen++;
	if(picLen==pic.length){picLen=0;}
	setTimeout('sl()',4000);}

sl();
