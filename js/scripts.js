var python = 0;
var ruby = 0;
var c = 0;
var js = 0;


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    var question1 = $("input:radio[name=question1]:checked").val();
    console.log(question1);

       

  })
})