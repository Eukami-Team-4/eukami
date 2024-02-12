document.addEventListener('DOMContentLoaded', function () {
  var radios = document.getElementsByName('paymentDetails', );
  var paymentDetails = {
    eMoney: document.getElementById('eMoneyDetails'),
    creditCard: document.getElementById('creditCardDetails'),
  };

  function updatePaymentDetails() {
    // Hides all payment selections
    for (var method in paymentDetails) {
      paymentDetails[method].style.display = 'none';
    }

    // gets selected payment method, shows details
    var selectedMethod = document.querySelector('input[name="paymentDetails"]:checked').value;
    if (paymentDetails[selectedMethod]) {
      paymentDetails[selectedMethod].style.display = 'block';
    }
  }

  // Initialize the payment details on page load
  updatePaymentDetails();

  // Attach the event listener to radio buttons
  Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener('change', updatePaymentDetails);
  });
});