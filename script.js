function tipCalculator(){
    amount = prompt(`What was the bill?`);
    bill = Number(amount)

    tip15 = bill * .15;
    tip20 = bill * .20;

    // Ternary Operator 
    tipAmount = bill >= 50 && bill <= 300 ? `Your bill was $${bill}, the tip should be $${tip15}, and the total comes out to $${bill + tip15} (15%)` : 
    `Your bill was $${bill}, the tip should be $${tip20}, and the total comes out to $${bill + tip20} (20%)`;

    alert(tipAmount);
}