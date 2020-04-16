window.onload=function(){
	
	var put = document.getElementById("put");
	var t=document.querySelector(".t")
			var ts6=document.getElementById("ts6");
			var flag=0;
				put.onclick=function(){
					if(flag==0){
					ts6.style.display="block";
					t.innerHTML="";
					flag=1;
					}else{
					ts6.style.display="none";
					t.innerHTML="<p style='color:red;'>接受服务条款才能注册</p>";
					flag=0;
					}
					
				}
	var img=document.getElementById("img");
	var img1=document.getElementById("img1");
	var img2=document.getElementById("img2");
	var img3=document.getElementById("img3");
	var dui=document.getElementById("dui");
	var dui1=document.getElementById("dui1");
	var dui2=document.getElementById("dui2");
	var dui3=document.getElementById("dui3");
		var newInput1 = document.myform.input1;
			newInput1.onblur = function() {
				var newTs1 = document.getElementById("ts1");
				if(newInput1.value == "") {
					newTs1.innerHTML = "手机号不能为空";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				if(newInput1.value.length != 11) {
					newTs1.innerHTML = "请输入您的十一位手机号码";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				newTs1.innerHTML = "手机号一致";
				newTs1.className = "g";
				img.style.display="none";
				dui.style.display="block";
				yzm.disabled=false;
			}
			var newInput2 = document.myform.input2;
			newInput2.onblur = function() {
				var newTs2 = document.getElementById("ts2")
				if(newInput2.value==""){
					newTs2.innerHTML = "验证码不能为空";
					newTs2.className = "r";
					newTs2.style.display="block";
					img1.style.display="block";
					return false;
				}
				if(newInput2.value.length!=6) {
					newTs2.innerHTML = "请输入6位数字手机验证码";
					newTs2.className = "r";
					img1.style.display="block";
					return false;
				}
				if(newInput2.value!=yzm.innerText) {
					newTs2.innerHTML = "验证码不一致";
					newTs2.className = "r";
					img1.style.display="block";
					return false;
				}
				newTs2.innerHTML = "验证码一致";
				newTs2.style.display="block";
				newTs2.className = "g";
				img1.style.display="none";
				dui1.style.display="block";
			}
			var newInput3 = document.myform.input3;
			newInput3.onblur = function() {
				var reg=/^\w{6,20}$/;
				var val=newInput3.value;
			    var b=reg.test(val);
				var newTs3 = document.getElementById("ts3");
				if(b!=true) {
					newTs3.innerHTML = "密码由6-20位字母,数字和符合组成";
					newTs3.className = "r";
					img2.style.display="block";
					return false;
				}

				newTs3.innerHTML = "密码输入正确";
				newTs3.className = "g";
				img2.style.display="none";
				dui2.style.display="block";
			}
			var newInput4 = document.myform.input4;
			newInput4.onblur = function() {
				var newTs4 = document.getElementById("ts4");
				if(newInput4.value == "") {
					newTs4.innerHTML = "确认密码不能为空";
					newTs4.className = "r";
					img3.style.display="block";
					return false;
				}
				if(newInput4.value != newInput3.value) {
					newTs4.innerHTML = "请再次输入上面密码";
					newTs4.className = "r";
					return false;
				}
				newTs4.innerHTML = "密码输入正确";
				newTs4.className = "g";
				img3.style.display="none";
				dui3.style.display="block";
			}//失焦事件的显示
			
			
			
			//点击注册是否提交的显示
            var newForm = document.myform;
			newForm.onsubmit = function() {
                 var newInput1 = document.myform.input1;
				var newTs1 = document.getElementById("ts1");
				if(newInput1.value == "") {
					newTs1.innerHTML = "手机号不能为空";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				if(newInput1.value.length != 11) {
					newTs1.innerHTML = "请输入您的十一位手机号码";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				newTs1.innerHTML = "手机号一致";
				newTs1.className = "g";
			
				
				var newInput2 = document.myform.input2;
				
				var newTs2 = document.getElementById("ts2")
				if(newInput2.value==""){
					newTs2.innerHTML = "验证码不能为空";
					newTs2.className = "r";
					return false;
				}
				if(newInput2.value.length!=6) {
					newTs2.innerHTML = "请输入6位数字手机验证码";
					newTs2.className = "r";
					return false;
				}
				if(newInput2.value!=yzm.innerText) {
					newTs2.innerHTML = "验证码不一致";
					newTs2.className = "r";
					return false;
				}
				newTs2.innerHTML = "验证码一致";
				newTs2.className = "g";
				
				var newInput3 = document.myform.input3;
				var reg=/^\w{6,20}$/;
				var val=newInput3.value;
			    var b=reg.test(val);
				var newTs3 = document.getElementById("ts3");

				if(b==false) {
					newTs3.innerHTML = "密码由6-20位字母,数字和符合组成";
					newTs3.className = "r";
					return false;
				}
				newTs3.innerHTML = "密码输入正确";
				newTs3.className = "g";



				var newInput4 = document.myform.input4;

				var newTs4 = document.getElementById("ts4");
				if(newInput4.value == "") {
					newTs4.innerHTML = "确认密码不能为空";
					newTs4.className = "r";
					return false;
				}
				if(newInput4.value != newInput3.value) {
					newTs4.innerHTML = "请再次输入上面密码";
					newTs4.className = "r";
					return false;
				}
				newTs4.innerHTML = "密码输入正确";
				newTs4.className = "g";
			//点击注册是否提交的显示
			
			
			//判断勾选协议提交按钮是否能使用 且变色修改样式   独立存在
                var newInput5 = document.myform.input5;
                var newTs5 = document.getElementById("ts5");
				if(newInput5.checked == false) {
					newTs5.innerHTML = "接受服务条款才能注册";
					newTs5.className = "r";
					return false;
				}
				var newInput6 = document.getElementById("input6");

				}
			
			yzm=document.getElementById("yzm");
				//随机验证码的显示   独立存在
				yzm.onclick=function(){
				var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
				var str = "";
				for(var i = 0; i < 6; i++) {
					var num = Math.floor(Math.random() * 10);
					str += a[num];
					yzm.innerText = str;
				}
				}
}
