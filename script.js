document.getElementById("calculateButton").addEventListener("click", function() {
    const passengers = parseInt(document.getElementById("passengers").value);  
    const tripType = document.getElementById("tripType").value; 

    if (!passengers || passengers <= 0) {
        alert("Wprowadź poprawną liczbę osób.");
        return;
    }

    const ticketPrice = 7500;  
    let totalCost = passengers * ticketPrice;  

    if (tripType === "roundTrip") {
        totalCost *= 2;
    }

    const costPerPerson = Math.round(totalCost / passengers);

    document.getElementById("totalCost").textContent = `Całkowity koszt: $${totalCost.toLocaleString('en-US')}`;
    document.getElementById("costPerPerson").textContent = `Koszt na osobę: $${costPerPerson}`;
});
