//business back-end logic//

var leapYear = function(year) {
  return false;

};


//Front end logic//
$(document).ready(function() {
  $("form#leapyear").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val();
    var result = leapyear(year);
    $("#result").test(result);
  });

});
