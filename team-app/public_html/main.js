/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    function changeTextWrong(id) {
            id.style.color='red';
            document.getElementById("wrong").innerHTML = "Try again!";
        }
        
        var x = 0;
        
        function changeTextRight(id) {
            id.style.color='green';
            document.getElementById("right").innerHTML = "Correct!";
            document.getElementById('next').style.display = "block";
            x = x + 10;
            document.getElementById("score").innerHTML=x;
            highScore();
        }
        
        function highScore(){
        	if(window.localStorage){
        		localStorage.setItem('High Score', x);
        		document.getElementById("top_score").innerHTML = x;
        	}
        }
        //function changeScreen() {
          //  document.getElementById("one").innerHTML = "";
        //}
        
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

function end() {
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
  xhttp.open("GET", "end.html", true);
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