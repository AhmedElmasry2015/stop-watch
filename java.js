
var hour=document.getElementById('hour');
var minute=document.getElementById('minute');
var seconds=document.getElementById('seconds');
var x;
function go(){
seconds+=1;
document.getElementById('seconds').innerHTML=seconds;
if(seconds>= 60){
seconds=0;
document.getElementById('seconds').innerHTML=0;
minute+=1;
document.getElementById('minute').innerHTML=minute;
}
if(minute >=60){
	minute=0;
	hour+=1;
	document.getElementById('minute').innerHTML=0;
	document.getElementById('hour').innerHTML=hour;
}
}

function start(){
x=window.setInterval(go,1000);
}
function stop(){
	window.clearInterval(x);
}