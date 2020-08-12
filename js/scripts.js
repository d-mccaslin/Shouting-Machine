$(document).ready(function() {
  // Form handler
  $("#formOne").submit(function() {
    const phraseInput = $("input#phrase").val();
    const phraseUpper = phraseInput.toUpperCase();
    // console.log(phraseUpper);
    // alert(phraseUpper);

    $(".phrase").append(phraseInput);
    $("#input-form").hide();
    $("#confirm").show();

    event.preventDefault();
  });
  // Confirm button handlers
});