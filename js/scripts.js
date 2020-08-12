$(document).ready(function() {
  $("#formOne").submit(function() {
    const phraseInput = $("input#phrase").val();
    console.log(phraseInput);

    event.preventDefault();
  });
});