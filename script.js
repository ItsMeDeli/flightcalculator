document.getElementById("calculateButton").addEventListener("click", function() {
    const passengers = parseInt(document.getElementById("passengers").value);  // Liczba osób
    const tripType = document.getElementById("tripType").value;  // Typ lotu

    if (!passengers || passengers <= 0) {
        alert("Wprowadź poprawną liczbę osób.");
        return;
    }

    const ticketPrice = 7500;  // Cena biletu na osobę w dolarach
    let totalCost = passengers * ticketPrice;  // Całkowity koszt

    if (tripType === "roundTrip") {
        totalCost *= 2;
    }

    const costPerPerson = Math.round(totalCost / passengers);

    document.getElementById("totalCost").textContent = `Całkowity koszt: $${totalCost.toLocaleString('en-US')}`;
    document.getElementById("costPerPerson").textContent = `Koszt na osobę: $${costPerPerson}`;
});
