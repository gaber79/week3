$(function() {
  // console.log("Handler for .ready() called.");
  $('textarea').on("keyup",function(event) {
    // 140 is the max message length
    var remaining = 140 - $(this).val().length;
    $('span.counter').text(remaining);
    if (remaining < 0) {
      $('span.counter').css('color', 'red');
    }
  })


});
