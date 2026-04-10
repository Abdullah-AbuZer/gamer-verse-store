//Tells the browser to wait until the entire webpage is fully loaded before running the rest of the code.
document.addEventListener('DOMContentLoaded', function () {
    // Price of one item in USD
    const itemPriceUSD = 13.00;

    // Grabbing HTML Elements
    const quantityInput = document.getElementById('quantity');
    const resultElement = document.getElementById('result');
    const currencySelect = document.getElementById('currency');

    // Function to calculate and display total
    function calculateTotal() {
        // Gets the number of items the user types in, defaults to 1.
        const quantity = parseInt(quantityInput.value) || 1;
        // Get and convert the selected currency value
        const currencyRate = parseFloat(currencySelect.value);

        // Declare the total variable
        let total;

        // Check if USD is selected
        if (currencyRate === 1.41) {
            total = (itemPriceUSD * quantity).toFixed(2); // No conversion for USD
        } else {
            total = (itemPriceUSD * currencyRate * quantity).toFixed(2); // Apply conversion for other currencies
        }
        // Display the result with the currency symbol and amount
        resultElement.textContent = `${currencySelect.options[currencySelect.selectedIndex].getAttribute('data-currency')} ${total}`;
    }

    // Calculate total on page load
    calculateTotal();

    // Update total whenever quantity or currency changes
    quantityInput.addEventListener('input', calculateTotal);
    currencySelect.addEventListener('change', calculateTotal);
});
