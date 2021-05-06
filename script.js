console.log('Hello World');

const total = document.querySelector('.total');

const calculate = () => {
    const html = `<h3>Total</h3>`;
    total.innerHTML = html;
}



const bill = document.querySelector('.bill').value;
console.log(bill);

const tipPercentage = document.querySelector('.tip_percentage').value;
console.log(tipPercentage);

calculate();

