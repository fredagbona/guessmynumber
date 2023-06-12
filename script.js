
// Variables
    let score = 20;
    let highscore = 0;
    let message = document.querySelector(".message");
    let number_guess;
    let real_number = generateNumber();

// Functions
    
    // again function reset everything except highscore
    function again(){
        real_number = generateNumber();
        document.querySelector(".number").innerHTML = "?";
        score = 20;
        document.querySelector(".score").innerHTML = score;
        message.innerHTML = "Start guessing...";
        document.body.style.background = "#000";
    };


    // generateNumber generate a random number between 1 and 20 who player must guess
    function generateNumber(){
        let randomDecimal = Math.random();
        let randomNumber = Math.floor(randomDecimal * 20) + 1;
        return randomNumber;
    }
    
    // check function verify if the number typed by player is the generated number
    function check(){
        number_guess = document.querySelector(".guess");
        verifiedValue(number_guess.value, real_number);
    }

    function updateHighScore(oldHighScore, newHighScore){
        if(newHighScore > oldHighScore){
            document.querySelector(".highscore").innerHTML = newHighScore;
            highscore = newHighScore;
        }else{
            document.querySelector(".highscore").innerHTML = oldHighScore;
            highscore = oldHighScore;
        }
    }

    // verifieValue check matching between number entered by player and generated number, then print the appropriate message
    function verifiedValue(number_guess, real_number){
        if(number_guess > real_number){
            message.innerHTML = "Too High";
            score--;
            document.querySelector(".score").innerHTML = score;
        }else{
            if(number_guess < real_number){
                message.innerHTML = "Too Low";
                score--;
                document.querySelector(".score").innerHTML = score;
            }else{
                message.innerHTML = "Great, You WIN !";
                document.body.style.background = "green";
                document.querySelector(".number").innerHTML = real_number;
                updateHighScore(highscore,score);
            }
        }
       
        return highscore;
    }


//Listeners
    document.querySelector(".again").addEventListener("click", again);
    document.querySelector(".check").addEventListener("click", check);
 



