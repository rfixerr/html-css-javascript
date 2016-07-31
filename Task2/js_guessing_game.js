var target;
var guess_input_text;
var finished = false;
var guesses = 0;
colors=["azure", "cadetblue", "darkorchid", "dimgray","firebrick", "greenyellow", "midnightblue", "olive", "plum", "snow", "wheat"];

function  do_game(){
  var target = colors[Math.floor(Math.random() * colors.length)];

  while(!finished){
      guess_input_text=prompt("guess the color");
      guesses += 1;
      if(guess_input_text==target)
           alert("congrats");

      }
  }

}
