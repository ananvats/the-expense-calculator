const headingEl = document.querySelector("#headingTotal");

const inputDescEl = document.querySelector("#inputDesc")

const inputElement = document.querySelector("#inputAmount");

const expenseTableEl = document.querySelector("#expenseTable");

let totalExpense = 0;

headingEl.textContent = totalExpense;
const allExpenses = [];

function addExpenseToTotal() {

    const expenseItem = {};

    const textAmount = inputElement.value;

    const textDesc = inputDescEl.value;

    const expense = parseInt(textAmount, 10);

    expenseItem.desc = textDesc;

    expenseItem.amount = expense;

    allExpenses.push(expenseItem);

    totalExpense = totalExpense + expense;

    const someText = `Total: ${totalExpense}`

    headingEl.textContent = someText;



    const allExpenseHTML = allExpenses.map(expense => {
        return `<div> ${expense.amount} :: 4{expense.desc} </div>`
    });
    

    const joinedAllExpenseHTML = allExpenseHTML.join();


    console.log(allExpenseHTML);



}
const element = document.querySelector("#btn-counter");
element.addEventListener("click", addExpenseToTotal, false);