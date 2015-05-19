  $(function() {
    // jQuery is listening for input from the entire form
    $('#translator').submit(function(e) {

      e.preventDefault();
      var payload = {
        // break out of the paramenters within the from
        // accessing by # in Jade
        word: $('#translate-word').val(),
        from: $('#from').val(),
        to:   $('#to').val()
      };
      // sending information back to translate page
      // to be posted in Jade #result
      $.post('/translate', payload, function(data) {
        console.log(data)
        $('#result').text(data.translation);

      });

    });

  });
