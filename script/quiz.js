var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;
 if (prevScrollpos == 0) {
   document.getElementById("navbar").style.top = "0";
 }else if (prevScrollpos > currentScrollPos) {
   document.getElementById("navbar").style.top = "0";
 } else {
   document.getElementById("navbar").style.top = "-50px";
 }
 prevScrollpos = currentScrollPos;
}

var timer;
var min1 = 0;
var sec1 = 60;
var min2; 
var sec2;//introducing variables

//Get the button:
myicon = document.getElementById("up_btn");

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) { //button shows when pages down 600px
    myicon.style.display = "block";
  } else {
    myicon.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

            
window.onload = function timecount(){ //timer fuction
    timer = setInterval(function(){
        sec1--;
        if(min1 == 0 && sec1 == 0){
            document.getElementById("timer").innerHTML = "Time's Up";
            clearTimeout(timer); 
            
            document.getElementById("myBtn").click();   //auto submit after timer
            document.getElementById("myBtn").click();                      
        }
	    else if(sec1 == 0){ //RUNNING TIMER
            min1--;
            sec1 = 60;
        }
                        
        document.getElementById("timer").innerHTML = "Time Remaining  :"+min1+":"+sec1;
                },1000);
                
}

function getRadioValue( radioArray ) { //CHECK RADIO VALUE
	var i;
	for ( i = 0; i < radioArray.length; i++ ) {
	    if ( radioArray[ i ].checked ) { 
		    return radioArray[ i ].value;
	    }
	}
	return "";
}


function show(check) { //QUIZ MARKS
	clearTimeout(timer);
	var points=0;
	var quiz1=getRadioValue(check.question1);
	var quiz2=getRadioValue(check.question2);
	var quiz3=getRadioValue(check.question3);
	var quiz4=getRadioValue(check.question4);
	var quiz5=getRadioValue(check.question5);
	var quiz6=getRadioValue(check.question6);
	var quiz7=getRadioValue(check.question7);
	var quiz8=getRadioValue(check.question8);
	var quiz9=getRadioValue(check.question9);
	var quiz10=getRadioValue(check.question10);
	
	
	//QUIZ1
	if (quiz1=="ans1") {
		document.getElementById("answer1").innerHTML = "WELL DONE!!!";
		document.getElementById("answer1").style.color = "black";
		points+=2;
	}
	else if (quiz1=="") {
		document.getElementById("answer1").innerHTML = "You did not select an answer";
		document.getElementById("answer1").style.color = "black";
	}
	else {
		document.getElementById("answer1").style.color = "black";
        document.getElementById("answer1").innerHTML = 'WRONG!!! Correct answer is "Brazil"';
		points--;
	}
	
	//QUIZ2
	if (quiz2=="ans1") {
		document.getElementById("answer2").innerHTML = "WELL DONE!!!";
		document.getElementById("answer2").style.color = "black";
		points+=2;
	}
	else if (quiz2=="") {
		document.getElementById("answer2").innerHTML = "You did not select an answer";
		document.getElementById("answer2").style.color = "black";
	}
	else {
		document.getElementById("answer2").style.color = "black";
        document.getElementById("answer2").innerHTML = 'WRONG!!! Correct answer is "Miroslav Klose"';
		points--;
	}
	
	//QUIZ3
	if (quiz3=="ans1") {
		document.getElementById("answer3").innerHTML = "WELL DONE!!!";
		document.getElementById("answer3").style.color = "black";
		points+=2;
	}
	else if (quiz3=="") {
		document.getElementById("answer3").innerHTML = "You did not select an answer";
		document.getElementById("answer3").style.color = "black";
	}
	else {
		document.getElementById("answer3").style.color = "black";
        document.getElementById("answer3").innerHTML = 'WRONG!!! Correct answer is "France"';
		points--;
	}
	
	//QUIZ4
	if (quiz4=="ans2") {
		document.getElementById("answer4").innerHTML = "WELL DONE!!!";
		document.getElementById("answer4").style.color = "black";
		points+=2;
	}
	else if (quiz4=="") {
		document.getElementById("answer4").innerHTML = "You did not select an answer";
		document.getElementById("answer4").style.color = "black";
	}
	else {
		document.getElementById("answer4").style.color = "black";
        document.getElementById("answer4").innerHTML = 'WRONG!!! Correct answer is "Italy"';
		points--;
	}
	
	//QUIZ5
	if (quiz5=="ans2") {
		document.getElementById("answer5").innerHTML = "WELL DONE!!!";
		document.getElementById("answer5").style.color = "black";
		points+=2;
	}
	else if (quiz5=="") {
		document.getElementById("answer5").innerHTML = "You did not select an answer";
		document.getElementById("answer5").style.color = "black";
	}
	else {
		document.getElementById("answer5").style.color = "black";
        document.getElementById("answer5").innerHTML = 'WRONG!!! Correct answer is "Brazil"';
		points--;
	}
	
	//QUIZ6
	if (quiz6=="ans2") {
		document.getElementById("answer6").innerHTML = "WELL DONE!!!";
		document.getElementById("answer6").style.color = "black";
		points+=2;
	}
	else if (quiz6=="") {
		document.getElementById("answer6").innerHTML = "You did not select an answer";
		document.getElementById("answer6").style.color = "black";
	}
	else {
		document.getElementById("answer6").style.color = "black";
        document.getElementById("answer6").innerHTML = 'WRONG!!! Correct answer is “Argentina”';
		points--;
	}
	
	//QUIZ7
	if (quiz7=="ans2") {
		document.getElementById("answer7").innerHTML = "WELL DONE!!!";
		document.getElementById("answer7").style.color = "black";
		points+=2;
	}
	else if (quiz7=="") {
		document.getElementById("answer7").innerHTML = "You did not select an answer";
		document.getElementById("answer7").style.color = "black";
	}
	else {
		document.getElementById("answer7").style.color = "black";
        document.getElementById("answer7").innerHTML = 'WRONG!!! Correct answer is "Germany"';
		points--;
	}
	
	//QUIZ8
	if (quiz8=="ans2") {
		document.getElementById("answer8").innerHTML = "WELL DONE!!!";
		document.getElementById("answer8").style.color = "black";
		points+=2;
	}
	else if (quiz8=="") {
		document.getElementById("answer8").innerHTML = "You did not select an answer";
		document.getElementById("answer8").style.color = "black";
	}
	else {
		document.getElementById("answer8").style.color = "black";
        document.getElementById("answer8").innerHTML = 'WRONG!!! Correct answer is "Germany"';
		points--;
	}
	
	//QUIZ9
	if (quiz9=="ans3") {
		document.getElementById("answer9").innerHTML = "WELL DONE!!!";
		document.getElementById("answer9").style.color = "black";
		points+=2;
	}
	else if (quiz9=="") {
		document.getElementById("answer9").innerHTML = "You did not select an answer";
		document.getElementById("answer9").style.color = "black";
	}
	else {
		document.getElementById("answer9").style.color = "black";
        document.getElementById("answer9").innerHTML = 'WRONG!!! Correct answer is "Pele"';
		points--;
	}
	
	//QUIZ10
	if (quiz10=="ans3"){
		document.getElementById("answer10").innerHTML = "WELL DONE!!!";
		document.getElementById("answer10").style.color = "black";
		points+=2;
	}
	else if (quiz10=="") {
		document.getElementById("answer10").innerHTML = "You did not select an answer";
		document.getElementById("answer10").style.color = "black";
	}
	else {
		document.getElementById("answer10").style.color = "black";
        document.getElementById("answer10").innerHTML = 'WRONG!!! Correct answer is "Mbappe"';
		points--;
	}
	
	min2 = 0 - min1;
    sec2 = 60 - sec1;
    if (points < 0){
        points = 0;
    }


//RESULT POPUP BOX
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
	

//BACKGROUND CHANGE
	if (points > 15){
        document.getElementById("all").style.background = "green";
        document.getElementById("marks").innerHTML = "CONGRADULATIONS!!!<br><br> YOU GOT  " + points + " POINTS OUT OF 20.<br> <br>"+"YOU GOT " + sec2 + " Seconds to complete this quiz.";
    }
    else if (points > 10){
        document.getElementById("all").style.background = "yellow";
        document.getElementById("marks").innerHTML = "YOU GOT  " + points + " POINTS OUT OF 20.<br> <br>"+"YOU GOT " + sec2 + " Seconds to complete this quiz.";
    }
    else{
        document.getElementById("all").style.background = "red";
        document.getElementById("marks").innerHTML = "SORRY!!! <br><br>YOU GOT  " + points + " POINTS OUT OF 20.<br> <br>"+"YOU GOT " + sec2 + " Seconds to complete this quiz.";
    }
    document.getElementById("myBtn").click(); 
}