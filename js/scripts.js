var python = 0;
var ruby = 0;
var c = 0;
var js = 0;


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    var question1 = $("input:radio[name=question1]:checked").val();
    if (question1 === "python") {
      python +=1;
    } else if (question1 === "ruby") {
      ruby +=1;
    } else if (question1 === "c") {
      c +=1;
    } else if (question1 === "js") {
      js +=1;
    };

    var question2 = $("input:radio[name=question2]:checked").val();
    if (question2 === "python") {
      python +=1;
    } else if (question2 === "ruby") {
      ruby +=1;
    } else if (question2 === "c") {
      c +=1;
    } else if (question2 === "js") {
      js +=1;
    };

    var question3 = $("input:radio[name=question3]:checked").val();
    if (question3 === "python") {
      python +=1;
    } else if (question3 === "ruby") {
      ruby +=1;
    } else if (question3 === "c") {
      c +=1;
    } else if (question3 === "js") {
      js +=1;
    };

    var question4 = $("input:radio[name=question4]:checked").val();
    if (question4 === "python") {
      python +=1;
    } else if (question4 === "ruby") {
      ruby +=1;
    } else if (question4 === "c") {
      c +=1;
    } else if (question4 === "js") {
      js +=1;
    };

    var question5 = $("input:radio[name=question5]:checked").val();
    if (question5 === "python") {
      python +=1;
    } else if (question5 === "ruby") {
      ruby +=1;
    } else if (question5 === "c") {
      c +=1;
    } else if (question5 === "js") {
      js +=1;
    };

    var question6 = $("input:radio[name=question6]:checked").val();
    if (question6 === "python") {
      python +=1;
    } else if (question6 === "ruby") {
      ruby +=1;
    } else if (question6 === "c") {
      c +=1;
    } else if (question6 === "js") {
      js +=1;
    };

    var question7 = $("input:radio[name=question7]:checked").val();
    if (question7 === "python") {
      python +=1;
    } else if (question7 === "ruby") {
      ruby +=1;
    } else if (question7 === "c") {
      c +=1;
    } else if (question7 === "js") {
      js +=1;
    };

    var question8 = $("input:radio[name=question8]:checked").val();
    if (question8 === "python") {
      python +=1;
    } else if (question8 === "ruby") {
      ruby +=1;
    } else if (question8 === "c") {
      c +=1;
    } else if (question8 === "js") {
      js +=1;
    };

    var question9 = $("input:radio[name=question9]:checked").val();
    if (question9 === "python") {
      python +=1;
    } else if (question9 === "ruby") {
      ruby +=1;
    } else if (question9 === "c") {
      c +=1;
    } else if (question9 === "js") {
      js +=1;
    };

    var question10 = $("input:radio[name=question10]:checked").val();
    if (question10 === "python") {
      python +=1;
    } else if (question10 === "ruby") {
      ruby +=1;
    } else if (question10 === "c") {
      c +=1;
    } else if (question10 === "js") {
      js +=1;
    };

    console.log("python: " + python)
    console.log("ruby: " + ruby)
    console.log("c: " + c)
    console.log("js: " + js)
    

       

  })
})