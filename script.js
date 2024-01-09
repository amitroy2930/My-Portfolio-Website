// Get the buttons and sections
const onEducation = document.getElementById("onEducation");
const onExperience = document.getElementById("onExperience");
const educationSection = document.getElementById("education");
const experienceSection = document.getElementById("experience");

// Add click event listeners to the buttons
onEducation.addEventListener("click", () => {
  experienceSection.style.display = "none";
  educationSection.style.display = "block";
});

onExperience.addEventListener("click", () => {
  educationSection.style.display = "none";
  experienceSection.style.display = "block";
});



