import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random() *10 + 1);



const answer = await inquirer.prompt([
    { name:"userguessednumber",
    type : "number",
    message : "please guess a number between 1-10",
    }
])
console.log(answer)


//conditional statment
 
if(answer.userguessednumber === randomnumber){
    console.log("Congtratulations! you guessed right number.");
}else{
    console.log("Sorry! you guessed wrong number.");
}