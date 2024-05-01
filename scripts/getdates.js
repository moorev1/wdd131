// Get current year and populate the span element
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Get last modified date and populate the paragraph element
const lastModified = document.lastModified;
document.getElementById("lastModified").innerText = "Last modified: " + lastModified;
