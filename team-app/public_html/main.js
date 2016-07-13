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
        function changeScreen() {
            document.getElementById("one").innerHTML = "";
        }
       

