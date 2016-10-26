// get dynamic points here
var points = 250;
    window.onload = function(){
      getMeatball()
      
    };
    
    function getMeatball(){
      document.getElementById("myPoints").innerHTML = points;
      if (points >= 5000)
        document.getElementById("mbimg").src = "img/mb5.png";
      else if (points >= 2000)
        document.getElementById("mbimg").src = "img/mb4.png";
      else if (points >= 1000)
        document.getElementById("mbimg").src = "img/mb3.png";
      else if (points >= 500)
        document.getElementById("mbimg").src = "img/mb2.png";
      else
        document.getElementById("mbimg").src = "img/mb1.png";
    };
