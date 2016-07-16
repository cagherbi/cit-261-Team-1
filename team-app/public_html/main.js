/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var score = 0;
    var topScore;
    function changeTextWrong(id) {
            id.style.color='red';
            document.getElementById("wrong").innerHTML = "Try again!";
            document.getElementById('next').style.display = "block";
            localStorage.setItem('Score', score);
        }
        
        
        
        function changeTextRight(id) {
            id.style.color='green';
            document.getElementById("right").innerHTML = "Correct!";
            document.getElementById('next').style.display = "block";
            score = score + 10;
            document.getElementById("score").innerHTML= score;
            localStorage.setItem('Score', score);
            setHighScore();
        }
/********* These functions run the scoring for the app. ******************/        
        
        function getHighScore(){
        	if(window.localStorage){
        		topScore = localStorage.getItem('High Score');
        		document.getElementById("top_score").innerHTML = topScore;
        	}
        }
        
        function setHighScore(){
        	if(window.localStorage){
        		topScore = localStorage.getItem('High Score'); 
        		if(score >= topScore){
        		localStorage.setItem('High Score', score);
        		document.getElementById("top_score").innerHTML = score;
        		}
        	}
        }
    
/********* These functions run the ajax transitions ******************/  
        function orange() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "orange.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

 function lemon() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "lemon.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

 function apple() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "apple.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function grapes() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "grapes.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function pear() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "pear.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function pineapple() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "pineapple.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function pomegranate() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "pomegranate.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function strawberry() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "strawberry.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function watermelon() {
            var xhttp;
            if (window.XMLHttpRequest) {
            // code for modern browsers
                xhttp = new XMLHttpRequest();
            } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("question").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "watermelon.html", true);
  xhttp.send();
}

var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function storeName(){
	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	
	var player = {
		firstname: firstName,
		lastname: lastName
	};	
	var json = JSON.stringify(player);
	if(window.localStorage){
		localStorage.setItem('Player', json);
	};
}	

function load(){
	var player = JSON.parse(localStorage.getItem('Player'));
	console.log(player);
	document.getElementById('name').innerHTML = player.firstname + " " + player.lastname;
	if(window.localStorage){
        		topScore = localStorage.getItem('High Score');
        		score = localStorage.getItem('Score');
        		document.getElementById("top_score").innerHTML = topScore;
        		document.getElementById("score").innerHTML= score;
    }
 }
