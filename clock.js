/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var count = 0;
var timeout;

function showTime(){
	var today = new Date();

	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	minutes = timeFormat(minutes);
	seconds = timeFormat(seconds);

	var time = hours+ ":" +minutes+ ":" + seconds;
	
	var clock = document.getElementById("clock");
	clock.innerHTML = time;

	timeout = setTimeout("showTime();", 1000);
}

function timeFormat(time){
	if(time < 10)
		time = "0"+time;

	return time;
}