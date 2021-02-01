function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length <=6)
		{
			alert("Password length must be graeter than 6");
		}
		else
		{
	    alert("Thank You for Login & You are Redirecting to Ram Kumer's Github page");
        //Redirecting to other page.
         window.location = "https://github.com/Ramkumar701500";
		}
	}
    
    //Reset Inputfield code.
	function clearFunction()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	
	