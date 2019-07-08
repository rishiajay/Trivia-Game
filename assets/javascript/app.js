$(document).ready(function () {
  // create our starting number
  var counter = 30;
  var rightAnswers = 0;
  var losses = 0;
  var userChoice = 0;
  var timedInterval = setInterval(timer, 1000);


  // what happens when button is clicked
  // this button is not working
  $("button").on("click", function () {
    // compare what user selected to right answers

    if (userChoice === rightAnswers) {
      counter = counter + 1;
    } else {
      counter === 0;
    }

    // show results



  });

  //do something every second
  function timer() {

    // subtract one from counter
    counter = counter - 1;

    // display on screen
    $("#time_left").text(counter)

    if (counter === 0) {
      // stop the interval using its name
      clearInterval(timedInterval);
      // fire an alert
      alert('done');
      // grab all of the selected answers from the html
      var Movie3On = $('input#Movie3:checked').val();
      var SpiceGirls2On = $('input#SpiceGirls2:checked').val();
      var NBA4On = $('input#NBA4:checked').val();
      var song1On = $('input#song1:checked').val();
      // compare those answers to the correct answers
      if (Movie3On === "on") {
        rightAnswers = rightAnswers + 1;
      }
      if (SpiceGirls2On === "on") {
        rightAnswers = rightAnswers + 1;
      }
      if (NBA4On === "on") {
        rightAnswers = rightAnswers + 1;
      }
      if (song1On === "on") {
        rightAnswers = rightAnswers + 1;
      }

      // tally up the right and wrong answers

      function finalScore() {
        var i = 0;
        var select1 = document.getElementById("testValues1");
        var answer1 = select1.options[select1.selectedIndex].value;
        if (answer1 == "right") {
          i++;
        }

        var select2 = document.getElementById("testValues2");
        var answer2 = select2.options[select2.selectedIndex].value;
        if (answer2 == "right") {
          i++;
        }

        var select3 = document.getElementById("testValues3");
        var answer3 = select3.options[select3.selectedIndex].value;
        if (answer3 == "right") {
          i++;
        }

        var select4 = document.getElementById("testValues3");
        var answer4 = select3.options[select3.selectedIndex].value;
        if (answer3 == "right") {
          i++;
        }
        document.getElementById("scoreDisplay").innerHTML = i;
      }


      // display results
      alert("You've got this many correct! " + rightAnswers);
    }
  }

})



