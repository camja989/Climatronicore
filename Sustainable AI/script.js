function calculateCarbonFootprint() {
    var electricityUsage = parseFloat(document.getElementById('electricity').value);
    var transportationEmissions = parseFloat(document.getElementById('transportation').value);
    var foodConsumption = parseFloat(document.getElementById('food').value);

    // Perform carbon footprint calculation and provide personalized recommendations
    var carbonFootprint = electricityUsage + transportationEmissions + foodConsumption;
    var recommendations = getRecommendations(carbonFootprint);

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your carbon footprint is ' + carbonFootprint.toFixed(2) + ' kg CO2e<br>' +
                               'Recommendations: ' + recommendations;
}

function getRecommendations(carbonFootprint) {
    // Implement personalized recommendations based on the calculated carbon footprint
    // This is a simplified example, and you can expand it with more comprehensive recommendations

    if (carbonFootprint < 10) {
        return 'Great job! Your carbon footprint is already low.';
    } else if (carbonFootprint < 20) {
        return 'Consider reducing electricity usage and opting for more sustainable transportation options.';
    } else {
        return 'You can significantly reduce your carbon footprint by reducing electricity usage, choosing sustainable transportation, and adopting a plant-based diet.';
    }
}
