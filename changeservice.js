// this is for changing the css for the service section
document.getElementById("past-serv").addEventListener("click", function() {
    //getting the past service css
    let past = document.getElementById("service-past");
// getting future one too
    let future = document.getElementById("service-opps");
    // detecting where we at so that we can change
    if (past.style.opacity === "1") {
        past.style.opacity = "0";
    } else {
        // same as the past ones tbh
        past.style.opacity = "1";
        future.style.opacity = "0";
    }
  }); 
 // exact same thing but if we are starting with the dark one 
  document.getElementById("opps").addEventListener("click", function() {
    // getting past service css
    let past = document.getElementById("service-past");
    // getting future one too?
    let opps = document.getElementById("service-opps");
    // detecting where we at so that we can change
    if (opps.style.opacity === "1") {
        opps.style.opacity = "0";
    } else {
        // exact same thing ngl :)
        past.style.opacity = "0";
        opps.style.opacity = "1";
    }
  }); 