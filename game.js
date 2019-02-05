
        let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
        let picked = _.sample(planets);
        let array = picked.split("");
        let finalLine = [];
        //console.log(array);
        
        for(let i=0; i<array.length; i++){
            finalLine.push("-");
           //let letter = picked.charAt(i);
           //console.log(test);
            }
            document.getElementById("line1").innerHTML = finalLine;

        for(let i = 0; i<8; i++){
            let guess = prompt("Please pick a letter now!");
            for(let j = 0; j<array.length; j++){
            if(guess == array[j]){
                finalLine[j] = guess;
                document.write(finalLine + "\n");

            }
        }
    }
/*
        for(let i=0; i<finalLine.length; i++){

        let positionNumber = array.indexOf(guess);
            if(positionNumber != -1){
                finalLine.splice(positionNumber,1,guess);
                positionNumber += positionNumber+1
                                
                }
            }
            document.getElementById("line2").innerHTML = (finalLine + " ");
    */
        
      
    




        //console.log(guess);
        //let arrayFinall = array.replace(array[1], guess);
        //console.log(array);
    
    
    /*        window.alert("Sorry! wrong letter. Try again.");
                let guess = prompt("Please pick a letter now!");
                }
        }
        
        
    */