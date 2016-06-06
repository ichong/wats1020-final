$(document).on('ready', function() {

  $('#order-form').validate({
    submitForm: function(form) {
      form.submit();
    },

    //Name Require
    rules: {
      "your-name": {
        required: true,
        maxlength: 128,
        letterswithbasicpunc: true
      },
      //Email Required
      "your-email": {
        required: true,
      },

      //Name required, must be fewer than 128 characters and no numbers.
      "card-holder-name": {
        required: true,
        maxlength: 128,
        letterswithbasicpunc: true
      },

      //Card no. required, valid 16 digits.
      "card-number": {
        required: true,
        creditcard: true,
      },

      //Expiration month must be selected
      "expiry-month": {
        required: true
      },

      //CVV required, 3 digits only.
      "cvv": {
        required: true,
        maxlength: 3,
        digits: true
      },

      //Comments max 500
      "comments": {
        required: false,
        maxlength: 500
      },

    }
  });

});