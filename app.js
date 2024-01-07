function updatePrice(item) {
    var quantitySelect = document.getElementById(item);
    var priceDisplay = document.getElementById("price-" + item);
    var price;

    // Set prices based on the selected quantity
    if (quantitySelect.value === "500") {
      price = 100;
    } else 
    if (quantitySelect.value === "1000") {
      price = 200;
    } else {
      price = 200; // Default to 0 if no valid quantity is selected
    }

    // Update the price display
    priceDisplay.textContent = "$" + price.toFixed(2);
  }
  function placeOrder() {
    var item1Total = parseFloat(document.getElementById("price-apple").textContent.slice(1));
    var item2Total = parseFloat(document.getElementById("price-orange").textContent.slice(1));
    var item3Total = parseFloat(document.getElementById("price-watermelon").textContent.slice(1));

    var totalAmount = item1Total + item2Total + item3Total;

    // Display prompt
    alert("Your order is ready. Total amount to be paid: $" + totalAmount.toFixed(2));
  }