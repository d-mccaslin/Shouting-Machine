$(document).ready(function() {
  let phraseUpper;
  // Form handler
  $("#formOne").submit(function() {
    const phraseInput = $("input#phrase").val();
    phraseUpper = phraseInput.toUpperCase();
    // console.log(phraseUpper);
    // alert(phraseUpper);

    $(".phrase").append(phraseInput);
    $("#input-form").hide();
    $("#confirm").show();
    
    event.preventDefault();
  });
  
  // Confirm button handler
  $("button#yes").click(function() {
    alert(phraseUpper);
    $("#input-form").show();
    $("#confirm").hide();
  });
  // Reject button handler
  $("button#no").click(function() {
    $("#input-form").show();
    $("#confirm").hide();
  });
});