// code your solution here 
function razzle() {
    console.log("You've been razzled!");
  }
  
  razzle(); //=> "You've been razzled!"
function razzle() {
  console.log("You've been razzled!");
}

function saturdayFun( activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork( activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }