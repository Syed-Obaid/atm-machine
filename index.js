#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 10000;
const myPin = 12345;
const question = await inquirer.prompt({
    message: "Enter your Account Pin : ",
    name: "pin",
    type: "number",
});
if (question.pin === myPin) {
    console.log(`Correct Pin!`);
    let questionAns = await inquirer.prompt({
        message: "Please Select Option",
        name: "options",
        type: "list",
        choices: ["withdraw", "fast cash", "check balance"],
    });
    if (questionAns.options === "withdraw") {
        let amountAns = await inquirer.prompt({
            message: "Enter Your Amount",
            name: "amount",
            type: "number",
        });
        if (amountAns.amount > currentBalance) {
            console.log(`InSufficient Balance`);
        }
        else {
            currentBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is : ${currentBalance} `);
        }
    }
    else if (questionAns.options === "check balance") {
        console.log(`Your Balance is : ${currentBalance}`);
    }
    else if (questionAns.options === "fast cash") {
        let fastWithdraw = await inquirer.prompt({
            message: "Please Select Option",
            type: "list",
            name: "direct",
            choices: ["1000", "2000", "5000", "10000"],
        });
        currentBalance -= fastWithdraw.direct;
        console.log(`Your Remaining Balance is : ${currentBalance} `);
    }
}
else {
    console.log(`Incorrect Pin!`);
}
