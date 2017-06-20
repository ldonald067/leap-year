//Front end logic//
$(document).ready(function() {
  $("leapyear").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val();
    var result = leapyear(year);
    $("#result").test(result);
  });

});
