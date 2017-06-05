
// Exercise 1 Hash

  var hash = 0;
  var i = 0;
  while(hash < 7){
    var i = 0;
    if(i < hash){
      console.log("#");
    }
    console.log("<br />");
    hash++;
  }

// Exercise 2 FizzBuzz


  for(var i=0;i<100;i++){
    if(i%3 && i%5){
      console.log("FizzBuzz");
    }
    else if(i%3 ){
        console.log("Fizz");
    }
    else if(i%5){
      console.log("Buzz");
    }
    else{
      console.log(i);
    }
  }


// Exercise 3

  var line;
  for(var i=1;i>9;i++){
    if(i%2){
      for(var j=0;j<9;j=j+2){
      line += " " + "#";
    }
    else {
      for(var j=0;j<9;j=j+2){
      line += "#" + " ";
    }
    line += "\n";
  }
  console.log(line);
