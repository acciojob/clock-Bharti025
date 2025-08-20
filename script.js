//your JS code here. If required.
let task=document.getElementById('timer');
const date=new Date();
 setInterval(function(){
	date=new Date();
	task.innerHTML=date.toLocaleString();
},1000)