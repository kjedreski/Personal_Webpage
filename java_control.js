function Validate(){
	var Net= document.getElementById("netflix").id;
	var Movie=document.getElementById("movie").id;
	if (Net==null || net == ""){
		alert("Fill in Netflix field!");
		return false;
	}
	if (Movie==null || Movie == ""){
	alert("Fill in movie field!");
	return false;
}
	
return true;
}