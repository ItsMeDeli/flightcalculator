document.getElementById("calculateButton").addEventListener("click", function() {
    const passengers = parseInt(document.getElementById("passengers").value);
    const tripType = document.getElementById("tripType").value;

    if (!passengers || passengers <= 0) {
        alert("Wprowadź poprawną liczbę osób.");
        return;
    }

    const planeCost = 105000;
    const peoplePerPlane = 14;
    const numPlanes = Math.ceil(passengers / peoplePerPlane);

    let totalCost = numPlanes * planeCost;
    if (tripType === "roundTrip") {
        totalCost *= 2;
    }

    const costPerPerson = Math.round(totalCost / passengers);

    document.getElementById("totalCost").textContent = `Całkowity koszt: $${totalCost.toLocaleString('en-US')}`;
    document.getElementById("costPerPerson").textContent = `Koszt na osobę: $${costPerPerson}`;
});
