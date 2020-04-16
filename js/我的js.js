window.onload = function() {
	//聚焦显示隐藏
	var newInput = document.getElementById("input1");
	var newXlk = document.querySelector(".xlk");
	var newDiv2 = document.getElementById("div2");
	var newDiv1 = document.getElementById("div1");
	var newQk = document.getElementById("qk");
	var flag = 0;
	newDiv2.onclick = function() {
		//创建新的div插入内容
		var newDiv = document.createElement("div");
		newDiv1.appendChild(newDiv);
		newDiv.innerHTML = newInput.value;
		newDiv.style.marginLeft = "20px";
	}
	//清楚和点击下拉框阻止冒泡
	newXlk.onclick = function(event) {
		event.stopPropagation();
	}
	newQk.onclick = function(event) {
		event.stopPropagation();
		newQk.previousElementSibling.innerHTML = "";
	}
	//聚焦时input内容清空
	newInput.onfocus = function() {
		if(newInput.value != "") {
			newInput.value = "";
		}
		newXlk.style.display = "block";
		if(flag == 0) {
			newXlk.style.display = "block";
			flag = 1;
		} else {
			newXlk.style.display = "none";
			flag = 0;
		}
	}
	//点击button拿到innertext给input
	var xlk2 = document.querySelector(".xlk2");
	var i1 = document.querySelector(".i1");
	var aniu = document.querySelectorAll(".xlk2 button");
	for(var i = 0; i < aniu.length; i++) {
		aniu[i].onclick = function(event) {
			event.preventDefault();
			i1.value = this.innerText;
		}
	}

	//顶部固定
	var newBt = document.querySelector(".biaoti-nei-2");
	document.onscroll = function() {
		var h = document.body.scrollTop || document.documentElement.scrollTop;
		if(h >= 20) {
			newBt.className = "a";
		} else {
			newBt.className = "";
		}
	}

	//二级下拉框
	var newUl1 = document.getElementById("oul");
	var newXl = document.querySelector(".biaoti-nei-2-1");
	newXl.onmouseover = function() {
		newUl1.style.display = "block";
	}
	newXl.onmouseout = function() {
		newUl1.style.display = "none";
	}

	//轮播
	var newUl = document.getElementById("newUl");
	var newDiv = document.querySelector(".lunbo1");
	var newLeft = document.querySelector(".left");
	var newRight = document.querySelector(".right");
	var newLi = document.querySelectorAll("#oldUl>li");
	var time;
	var num = 0;
	newLeft.onclick = function() {
		num++;
		if(num > 2) {
			num = 0;
		}
		newUl.style.left = -1428 * num + "px";
		for(var i = 0; i < newLi.length; i++) {
			newLi[i].className = "";
		}
		newLi[num].className = "a";
	}
	newRight.onclick = function() {
		num--;
		if(num < 0) {
			num = 2;
		}
		newUl.style.left = -1428 * num + "px";
		for(var i = 0; i < newLi.length; i++) {
			newLi[i].className = "";
		}
		newLi[num].className = "a";
	}
	time = setInterval(function() {
		newLeft.onclick();
	}, 3000)
	newDiv.onmouseover = function() {
		clearInterval(time);
		newLeft.style.display = "block";
		newRight.style.display = "block";
	}
	newDiv.onmouseout = function() {
		newLeft.style.display = "none";
		newRight.style.display = "none";
		time = setInterval(function() {
			newLeft.onclick();
		}, 3000)
	}
	for(var i = 0; i < newLi.length; i++) {
		newLi[i].index = i;
		newLi[i].onclick = function() {
			num = this.index;
			newUl.style.left = -1428 * num + "px";
			for(var i = 0; i < newLi.length; i++) {
				newLi[i].className = "";
			}
			this.className = "a";
		}
	}

	//display下拉
	var uu = document.getElementById("uua")
	var menu = document.getElementById("menua");
	uu.onmouseover = function() {
		menu.style.height = 320 + "px";
		menu.style.width = 53 + "px";
		menu.style.display = "block";
	}
	uu.onmouseout = function() {
		menu.style.height = "0px";
		menu.style.width = "0px";
		menu.style.display = "none";
	}

	//缓慢下拉菜单
	function fun(event1,event2){
	var time1;
	var time2;
	var h = event2.offsetHeight;
	event1.onmouseover = function() {
		clearTimeout(time2);
		add();
	}
	event1.onmouseout = function() {
		clearTimeout(time1);
		remove();
	}

	function add() {
		h += 5;
		if(h <= 100) {
			event2.style.height = h + "px";
			event2.style.backgroundColor = "white";
			time1 = setTimeout(add, 10);
		} else {
			return;
		}
	}

	function remove() {
		h -= 5;
		if(h > 0) {
			event2.style.height = h + "px";
			event2.style.backgroundColor = "white";
			time2 = setTimeout(remove, 10);
		} else {
			event2.style.height = "0px";
			return;
		}
	}
	}
	var a=document.querySelector(".temai");
	var b=a.getElementsByTagName("ul")[0];
	fun(a,b);
	var a1=document.querySelector(".huiyuan");
	var b1=a1.getElementsByTagName("ul")[0];
    fun(a1,b1);
	var a2=document.querySelector(".fuwu");
	var b2=a2.getElementsByTagName("ul")[0];
	fun(a2,b2);
	
	
	//倒计时
	function clock(){
		 var today=new Date();
		 var stopTime=new Date("2019-12-12,00:00:00");
		 var zj=stopTime.getTime()-today.getTime();
		 var tian=parseInt(zj/(1000*60*60*24));
		 var sheng=zj%(1000*60*60*24);
		 var shi=parseInt(sheng/(1000*60*60));
		 var shengs=sheng%(1000*60*60);
		 var feng=parseInt(shengs/(1000*60));
		 var shengf=shengs%(1000*60);
		 var miao=parseInt(shengf/(1000));
		 if(miao<10){
		 	miao="0"+miao;
		 }
		 if(feng<10){
		 	feng="0"+feng;
		 }
		 if(shi<10){
		 	shi="0"+shi;
		 }
         document.querySelector(".shi").innerHTML=shi;
         document.querySelector(".feng").innerHTML="&nbsp"+feng;
         document.querySelector(".miao").innerHTML="&nbsp&nbsp"+miao;
         setTimeout(clock,500);
	}
	clock();
 
    //显示缓慢返回顶部
            var newBack=document.getElementById("back");
            var time3;
			newBack.onclick=function(event){
				event.preventDefault();
				var g=document.body.scrollTop||document.documentElement.scrollTop;
				time3=setInterval(function(){
				if(g>=5){
					g-=60;
					document.body.onscrollTop=g;
					document.documentElement.scrollTop=g;
					
				}else{
					document.body.onscrollTop=0;
					document.documentElement.scrollTop=0;
					clearInterval(time3);
				}
			      },10)
			}
	
			
			
			//地址
				var dizhi=document.getElementById("dizhi");
							var dz=document.querySelector(".dz");
							var cha=document.getElementById("cha");
							var span1=document.getElementById("span1");
							var sf=document.getElementById("sf");
							var dz1=document.querySelector(".dz1");
							var li=dz1.querySelectorAll("li");
							var flag=0;
							sf.onclick=function(){
								if(flag==0){
									dz1.style.display="block";
									flag=1;
								}else{
									dz1.style.display="none";
									flag=0;
								}
								for (var i=0;i<li.length;i++) {
									li[i].onclick=function(){
										span1.innerText=this.innerText;
									}
								}
							}
							dizhi.onclick=function(){
								dz.style.display="block";
							}
							cha.onmousedown=function(){
								dz.style.display="none";
								dz1.style.display="none";
							}
  
			
}