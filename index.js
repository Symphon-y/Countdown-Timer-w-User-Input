function countDownTimer(hours, minutes, seconds){
  // Variables
  var hoursIsNumber = typeof hours;
  var minutesIsNumber = typeof minutes;
  var secondsIsNumber = typeof seconds;
  var inputTimeInSeconds = ((hours * 3600) + (minutes * 60) + seconds);
  var secondsCounter = 59;
  var minutesCounter = 59;
  

    // If user input is not in numbers, alert the user.
    if (hoursIsNumber !== 'number' || minutesIsNumber !== 'number' || secondsIsNumber !== 'number'){
      alert("Please input countdown time in numbers");
      return;
    }

    // Subtract one second at a time from the user input
    function decrementTime(inputTimeInSeconds){
      // Variables
      var hoursConverted = Math.floor(inputTimeInSeconds / 3600);
      var minutesConverted = Math.floor((inputTimeInSeconds - (hours * 3600)) / 60);
      var secondsConverted = inputTimeInSeconds - (hours * 3600) - (minutes * 60);

      // Subtract one second from total and wait for one second before running the function again
      setTimeout(function(){
        inputTimeInSeconds-= 1;
        
          if (secondsConverted < 0 ){
            secondsConverted = secondsCounter
            secondsCounter-= 1
          };

          if (secondsCounter < 0){
            secondsCounter = 59
          };

          if (minutesConverted < 0){
            minutesConverted = minutesCounter;
          };

          if (minutesConverted === minutesCounter && secondsCounter === 59){
            minutesCounter-= 1;
          };

          if (minutesCounter < 0){
            minutesCounter = 59;
          };

          if (hoursConverted < 0){
            hoursConverted = 0
          };
        
      
        console.log(`Time Remaining : ${hoursConverted} hours ${minutesConverted} minutes and ${secondsConverted} seconds.`);
        
        
        if (inputTimeInSeconds < 0){
          return;
        } else if (inputTimeInSeconds >= 0){
        return(decrementTime(inputTimeInSeconds));
        }
      }, 1000)
    };

  // Call Internal function until user input is zero
  if (inputTimeInSeconds > 0){
    return(decrementTime(inputTimeInSeconds))
  };
};


// Tests
  countDownTimer(1, 1, 1);
 