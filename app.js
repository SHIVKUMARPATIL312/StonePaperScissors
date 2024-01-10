let userScore =0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const mess=document.querySelector("#mess")

const userScorePara=document.querySelector("#user-score")
const comScorePara=document.querySelector("#comp-score")

const genrateCompChoice = ()=>{
       //rock, paper, scissor

       const options=["rock", "paper", "scissor"];
       const randIdx=Math.floor(Math.random()*3);
       return options[randIdx];
}

const drowGame=()=>{
    console.log("It is drow")
}


const showWinner=(userWin, userChoice, comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        mess.innerText=`You Won ${userChoice} beats ${comChoice}`
        mess.style.backgroundColor="green"
    }else{
        comScore++;
        comScorePara.innerText=comScore;
        mess.innerText=`You lose ${comChoice} beats ${userChoice}`
        mess.style.backgroundColor="red"
    }
}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice)
    //Genrate computor choice -> modur lar way of programing

    const comChoice=genrateCompChoice();
    console.log("Computor choice is: ", comChoice)

    if(userChoice === comChoice){
        drowGame()
    }else {
        let userWin=true;

        if(userChoice ==="rock"){
           userWin=   comChoice==="paper" ? false : true;
        }else if(userChoice ==="paper"){
           userWin= comChoice === "secissor" ? false :true;
        }else {
             userWin=  comChoice==="rock" ?false:true;
        }
        showWinner(userWin, userChoice, comChoice)
    }
   
}

choices.forEach((choice) => {
     choice.addEventListener(("click"), ()=>{
            const userChoice=choice.getAttribute("id")
            //  console.log("Choice was clicked", userChoice)
            playGame(userChoice)
     })
});
