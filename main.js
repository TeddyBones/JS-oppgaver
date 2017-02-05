var day = new Date();
var d = day.getDay();
var dayList = ["søndag", "mandag", "tirsdag", "torsdag", "fredag", "lørdag", "søndag"]
var time = new Date();

function myFunction() {
   document.getElementById("demo").innerHTML = dayList[d]  ;
}



function funksjon() {
	window.print();
}


/* gjett tallet */

function random() {
	var x = Math.floor((Math.random()*10) + 1);
	var guess = prompt("guess a number between 1 - 10");
	if (x == guess) 
		alert("match") ; 
	else 
		alert("not match, nummeret var" + x) ; 
	document.getElementById("tall").innerHTML = x ;
}
 
/* telle ned dager til jul */

today = new Date (); 
var cmas = new Date(today.getFullYear(),11, 25); 

if (today.getMonth() == 11 && today.getDate()> 25) {
	cmas.setFullYear (cmas.getFullYear()+1); 
}
var enDag = 1000*60*60*24;

function jul() {
	document.getElementById("dager").innerHTML = (Math.ceil((cmas.getTime()-today.getTime())/(enDag)) + "dager igjen til jul" );

}

/* gange og dele */



	
function ganging () {
	var a = document.getElementById("tall1").value; 
	var b = document.getElementById("tall2").value; 
	document.getElementById("svar").innerHTML = a * b ;
}

function deling () {
	var a = document.getElementById("tall1").value; 
	var b = document.getElementById("tall2").value; 
	document.getElementById("svar").innerHTML = a / b ;
}


/* reversere tall */


function reverseNumber() {
	var i = document.getElementById("numHere")
	var n = getElementById("input").value;
	return n.split("").reverse().join("");

	document.getElementById("svar").innerHTML = reverseNumber;
}









