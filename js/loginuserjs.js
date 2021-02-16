
function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }

function validateform(){
    var pass1=document.myform.pass1.value;

	if(pass1==null || pass1=="")
	{  
	  alert("Password can't be blank");  
	  return false;  
    }
    else
    {
            return true;
    } 
}

function validateform2(){
  var pass2=document.myform2.pass2.value;
  var companyname=document.myform2.companyname.value;
  var companybranch=document.myform2.companybranch.value;

  if(pass2==null || pass2=="")
  {  
  alert("Password can't be blank");  
  return false;  
  }  
  else if(companyname==null || companyname=="")
  {  
    alert("Company name can't be blank");  
    return false;  
    }
    else if(companybranch==null || companybranch=="")
    {  
      alert("Company branch can't be blank");  
      return false;  
      }  
  else
  {
          return true;
  } 
}