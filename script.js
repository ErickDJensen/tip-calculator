console.log('Hello World');

const total = document.querySelector('.total');
const button = document.querySelector('.button')

const calculate = () => {
    console.log('in calculate');
    const bill = document.querySelector('.bill').value;
    console.log(bill);
    const tipPercentage = document.querySelector('.tip_percentage').value;
    console.log(tipPercentage);
    const html = `<h3>Total</h3>
    $${((bill * tipPercentage) + Number(bill)).toFixed(2)}`;
    total.innerHTML = html;
}

button.addEventListener("click", calculate);



