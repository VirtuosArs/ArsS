var target;
      var guess_input_text;
      var guess_input;
      var finished = false;
      var guesses = 0;
      var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "pink", "purple", "red", "navy", "yellow"];


      function do_game() {
          var random_number = Math.random() * (colors.length - 1);
          var random_number_integer = Math.floor(random_number);
          target = random_number_integer;
          var answer = String(colors[random_number_integer]);
          //Alert correct answer for testing purposes
          alert("The correct answer is: " + answer);

          while(!finished) {
              guess_input_text = prompt("I am thinking of one of these colors:\n\n"+
                  colors+"\n\n"+
                  "What color am I thinking of?");
              guess_input = colors.indexOf(guess_input_text);
              guesses += 1;
              finished = check_guess();
          }
      }

       function check_guess() {
      if (guess_input == -1) {
      alert("Sorry, I don't recognize your color. \n\n Please try again.");
      return false;
      }
      else if (guess_input > target) {
      alert("Sorry, your guess is not correct! \n\n Hint: Your color is alphabetically higher than mine.\n\n Please try again.");
      return false;
      }
      else if (guess_input < target) {
      alert("Sorry, your guess is not correct!\n\n Hint: Your color is alphabetically lower than mine.\n\n Please try again.");
      return false;
      }
      else {
        elem_body = document.getElementById("myDIV");
        elem_body.style.background = colors[guess_input];
      //document.body.style.backgroundColor = colors[guess_input];
      alert("Congratulations! You have guessed the color!\n\n It took you " + guesses+ " guesses to finish the game!\n\n You can see the color in the background.");

     }
     return true;

      }