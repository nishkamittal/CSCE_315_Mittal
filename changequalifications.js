// changing qualifications css
document.getElementById("interests").addEventListener("click", function() {
    // setting 3 different for interests, skills and resume section
    let interests = document.getElementById("quals-interests");
    let skills = document.getElementById("quals-skills");
    // getting all of them so that we can change
    let resume = document.getElementById("quals-resume");
    // checking where the style at so we can change
    if (interests.style.opacity === "1") {
        interests.style.opacity = "0";
    } else {
        // else case so that we can change all
        interests.style.opacity = "1";
        skills.style.opacity = "0";
        // interest needs to change:)
        resume.style.opacity = "0";
    }
  });
  
// repeat for skills
  document.getElementById("skills").addEventListener("click", function() {
    let interests = document.getElementById("quals-interests");
    // getting all the variables again
    let skills = document.getElementById("quals-skills");
    let resume = document.getElementById("quals-resume");
    // checking where skills at so we can change
    if (skills.style.opacity === "1") {
        skills.style.opacity = "0";        
    } else {
        // changing skills only this time
        interests.style.opacity = "0";
        skills.style.opacity = "1";
        resume.style.opacity = "0";
        //PLEASE WORK!!!
    }
  });

  // repeat for resume :)
  document.getElementById("resume").addEventListener("click", function() {
    let interests = document.getElementById("quals-interests");
    let skills = document.getElementById("quals-skills");
    // getting resume deets so that we can compare in next few lines
    let resume = document.getElementById("quals-resume");
    // checking where we at so that we can change
    if (resume.style.opacity === "1") {
        resume.style.opacity = "0";
    } else {
        // comparing otherwise to change just the resume part
        interests.style.opacity = "0";
        skills.style.opacity = "0";
        // changing resume!!!
        resume.style.opacity = "1";
      
    }
  });




