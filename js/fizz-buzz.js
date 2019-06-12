
for(var i= 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i,'fizz buzz')
        continue;// Skips this iteration of the loop
        //break => breaks away from the loop/ Stops the loop to execute
    }

    if(i % 3 === 0){
        console.log(i,'fizz')
    }
   
    if(i % 5 === 0){
        console.log(i,'buzz')
    }
   
  
}
