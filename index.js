
let looper;
let degrees = 0;
function rotateAnimation(el,speed){
	let elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+ degrees+"deg)";
	}else if(navigator.userAgent.match("Firefox")) {
		elem.style.WebkitTransform = "rotate("+ degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")) {
		elem.style.WebkitTransform = "rotate("+ degrees+"deg)";
	}

if(looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed));
degrees ++

if(degrees > 359){
	degrees = 1;
} 
}



