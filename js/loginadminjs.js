function validateform(){
    var username=document.myform.username.value;
    var password=document.myform.password.value;

	if(username==null || username=="")
	{  
	  alert("Username can't be blank");  
	  return false;  
    }
	else if(password==null || password=="")
	{  
	  alert("Password can't be blank");  
	  return false;  
    }  
    else
    {
            return true;
    } 
}