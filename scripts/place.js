document.addEventListener("DOMContentLoaded", function() {   
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    // Display current year and last modified date in footer
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified;

    // Static values for temperature and wind speed
    const temperatureCelsius = 10;
    const windSpeedKmh = 5;

    // Calculate wind chill factor if conditions are met
    if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
        document.getElementById("windChill").textContent = windChill + "°C";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
});

// Function to calculate wind chill factor
function calculateWindChill(temperatureCelsius, windSpeedKmh) {
    // Formula for calculating wind chill factor (in Celsius)
    const windChillCelsius = 13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedKmh, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedKmh, 0.16));
    return windChillCelsius.toFixed(1);
}
