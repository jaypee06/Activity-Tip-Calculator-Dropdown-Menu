
const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();
  // Assign form values
  const billTotal = Number(form.total.value);

  //const Bad = Number(12);
  //const Adequate =Number(18);
  //const Amazing = Number(23);

  // 2a. Create `service` variable to accept value from select menu
  const service = form.service.value;
  let result
  //let example;
  
  //const paymentTotal = billTotal + tipAmount;
  
  //const bad = Number(12)/100;
  //const Adequate = Number(18)/100;
  //const Amazing = Number(23)/100;
  
  // 2b. Refactor `tipPercentage` and `tipRate` based on `service` using conditional statements (if/else/etc)
  // Bad service -> 12%/0.12
  // Adequate service -> 18%/0.18
  // Amazing service -> 23%/0.23 
  if (service === 'bad'){
     result = Number(12)/100; 
    //form.service.value = example;
    const tipAmount = billTotal * result;
    const paymentTotal = billTotal + tipAmount;
    form.payment.value = `Tip for $${billTotal} at ${result}% tip for a total payment of $${paymentTotal.toFixed(2)}`;
  }
  else if (service === 'adequate') {
     result = Number(18)/100;
    //form.service.value = example;
    const tipAmount = billTotal * result;
    const paymentTotal = billTotal + tipAmount;
    form.payment.value = `Tip for $${billTotal} at ${result}% tip for a total payment of $${paymentTotal.toFixed(2)}`;
  }
  else if (service === 'amazing'){
   result = Number(23)/100;
    //form.service.value = example;
    const tipAmount = billTotal * result;
    const paymentTotal = billTotal + tipAmount;
    form.payment.value = `Tip for $${billTotal} at ${result}% tip for a total payment of $${paymentTotal.toFixed(2)}`;
  }
   else {
     form.payment.value = "please select"
   }
   

  // Calculate tip and tax amounts
 
  // console.log(billTotal, tipPercentage, tipRate, paymentTotal);
  // Output results  
  
  
}

const form = document.querySelector('form');

form.addEventListener('submit', calculateTotal);