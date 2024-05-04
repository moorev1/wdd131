document.addEventListener("DOMContentLoaded", function() {
  // Get the current year
  var currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  // Get the last modified date of the document
  var lastModified = new Date(document.lastModified);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = lastModified.toLocaleDateString(undefined, options);
  document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
});
