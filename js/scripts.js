var python = 0;
var ruby = 0;
var c = 0;
var js = 0;


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    var question1 = $("input:radio[name=question1]:checked").val();
    console.log(question1);
    if (question1 === "python") {
      python +=1;
    } else if (question1 === "ruby") {
      ruby +=1;
    } else if (question1 === "c") {
      c +=1;
    } else if (question1 === "js") {
      js +=1;
    }

    var question2 = $("input:radio[name=question2]:checked").val();
    console.log(question1);
    if (question2 === "python") {
      python +=1;
    } else if (question2 === "ruby") {
      ruby +=1;
    } else if (question2 === "c") {
      c +=1;
    } else if (question2 === "js") {
      js +=1;
    }

    console.log("python: " + python)
    console.log("ruby: " + ruby)
    console.log("c: " + c)
    console.log("js: " + js)
    

       

  })
})