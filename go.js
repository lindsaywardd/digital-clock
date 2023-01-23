function displayTime() {
    var date = new Date();
    
    var m = "A.M.";
    var seconds = date.getSeconds();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    if(hours == 0) { hours = 12; }
    if(hours > 12) { 
      hours = hours - 12; 
      m = "P.M.";
    }
    
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    
    var time = hours + ":" + minutes + ":" + seconds   + " " + m;
    document.getElementById("ClockShow").innerText =  time;
    document.getElementById("ClockShow").textContent  = time;
    
    setTimeout(displayTime, 1000);
  }
  
  displayTime();