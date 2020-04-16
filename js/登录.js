window.onload=function(){

	var img=document.getElementById("img");
	var img2=document.getElementById("img2");
	var dui=document.getElementById("dui");
	var dui2=document.getElementById("dui2");
		var newInput1 = document.myform.input1;
			newInput1.onblur = function() {
				var newTs1 = document.getElementById("ts1");
				if(newInput1.value == "") {
					newTs1.innerHTML = "账号不能为空";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				if(newInput1.value.length != 11) {
					newTs1.innerHTML = "请输入您的十一位账号";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				newTs1.innerHTML = "账号一致";
				newTs1.className = "g";
				img.style.display="none";
				dui.style.display="block";
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
			
			
			
			//点击注册是否提交的显示
            var newForm = document.myform;
			newForm.onsubmit = function() {
                 var newInput1 = document.myform.input1;
				var newTs1 = document.getElementById("ts1");
				if(newInput1.value == "") {
					newTs1.innerHTML = "账号不能为空";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				if(newInput1.value.length != 11) {
					newTs1.innerHTML = "请输入您的十一位账号";
					newTs1.className = "r";
					img.style.display="block";
					return false;
				}
				newTs1.innerHTML = "账号一致";
				newTs1.className = "g";
			
				
				
				
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



				
			
			
				var newInput6 = document.getElementById("input6");
				}
	
}
