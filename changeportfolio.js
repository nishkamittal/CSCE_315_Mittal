// changing the css for portfolio
document.getElementById("past-port").addEventListener("click", function() {
    // getting past portfolio css
    let past = document.getElementById("portfolio-past");
    // getting the one we want to change too as well
    let future = document.getElementById("portfolio-future");
    // checking where we at so that we can change
    if (past.style.opacity === "1") {
        past.style.opacity = "0";

    } else {
        // same thing tbh so we can change otherwise
        past.style.opacity = "1";
        future.style.opacity = "0";
    }
  }); 
// repeat for dark toggle style
  document.getElementById("future-port").addEventListener("click", function() {
    // getting past portfolio css
    let past = document.getElementById("portfolio-past");
    // getting future one too so that we can change
    let future = document.getElementById("portfolio-future");
    // checking where we at so that we change appropriately
    if (future.style.opacity === "1") {
        future.style.opacity = "0";
    } else {
        // same thing tbh so that we can change in else case
        past.style.opacity = "0";
        future.style.opacity = "1";
    }
  }); 