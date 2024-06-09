document.getElementById('btn-apply').addEventListener('click', function () {
    const payAmountText = document.getElementById('pay-amount');
    const safeAmountText = document.getElementById('safe-amount');

    // get price field value
    const priceField = document.getElementById('price-field');
    const mainPriceString = priceField.value;
    const mainPrice = parseFloat(mainPriceString);

    // get discount field value
    const discountField = document.getElementById('discount-field');
    const discountString = discountField.value;
    const discount = parseFloat(discountString);

    if (isNaN(mainPrice) || isNaN(discount)) {
        alert('Provide valid number');
        return;
    }
    else {
        // discount calculation
        const finalDiscount = mainPrice - (mainPrice * discount / 100);

        // save money
        const safeAmount = mainPrice - finalDiscount;

        // set pay amount
        payAmountText.innerText = finalDiscount;
        // set same amount
        safeAmountText.innerText = safeAmount;

        // clear input field
        priceField.value = '';
        discountField.value = '';
    }


})