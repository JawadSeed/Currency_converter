#!/usr/bin/env node 

import inquirer from "inquirer"

const money:any = {
    USD:1,
    Pound:353, 
    INR:74.53,
    EURO:0.91,
    PKR:'280'
}



let userans = await inquirer.prompt(
[    {
   name:'from',
   message:'Enter from your currency',
   type:'list',
   choices:["USD","Pound","INR","EURO","PKR"]
},
 {
    name:'to',
    message:'Enter to currency',
    type:'list',
    choices:["USD","Pound","INR","EURO","PKR"]
 },
 
   {   name:'amount',
      message:'Enter  your currency',
      type:'number',
   },
]
)

let fromamount = money[userans.from];
let toamount = money[userans.to];
let amount = userans.amount;
let baseamount = amount / fromamount //base currency
let convertamount = baseamount * toamount;
console.log(convertamount);

// console.log(fromamount);
// console.log(toamount);
// console.log(amount);


