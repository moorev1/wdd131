const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x225/NorthGateA02.jpg"
    },
    {
      templeName: "Logan Utah",
      location: "Logan, Utah, United States",
      dedicated: "1884, May, 17",
      area: 119619,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-utah-temple-autumn-1001541-wallpaper.jpg"
    },
    {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois, United States",
      dedicated: "1846, May, 1",
      area: 54000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-766886-wallpaper.jpg"
    },
    {
      templeName: "Provo City Center",
      location: "Provo, Utah, United States",
      dedicated: "2016, March, 20",
      area: 85000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17195,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    // Add more temple objects here if needed...
  ];

  document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
  
    // Get the last modified date of the document
    var lastModified = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString(undefined, options);
    document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
  
    // Generate temple cards
    var mainElement = document.querySelector("main");
    temples.forEach(function(temple) {
      var templeCard = document.createElement("figure");
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}">
        <figcaption>
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} square feet</p>
        </figcaption>
      `;
      mainElement.appendChild(templeCard);
    });
  
    // Add event listeners to menu items
    var menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tags
  
        var filter = event.target.textContent.toLowerCase(); // Get the text content of the clicked menu item
        filterTemples(filter); // Call the function to filter temples based on the selected criteria
      });
    });
  });
  
  function filterTemples(criteria) {
    var mainElement = document.querySelector("main");
    mainElement.innerHTML = ""; // Clear the existing temple cards
    
    temples.forEach(function(temple) {
      var shouldDisplay = false;
  
      switch (criteria) {
        case "old":
          shouldDisplay = parseInt(temple.dedicated.split(",")[0]) < 1900;
          break;
        case "new":
          shouldDisplay = parseInt(temple.dedicated.split(",")[0]) > 2000;
          break;
        case "large":
          shouldDisplay = temple.area > 90000;
          break;
        case "small":
          shouldDisplay = temple.area < 10000;
          break;
        default:
          shouldDisplay = true; // Display all temples for "Home" option
          break;
      }
  
      if (shouldDisplay) {
        var templeCard = document.createElement("figure");
        templeCard.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}">
          <figcaption>
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} square feet</p>
          </figcaption>
        `;
        mainElement.appendChild(templeCard);
      }
    });
  }