// ITERATION 1

function updateSubtotal(product) {
  
  let price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  
  const subtotal = parseFloat(price) * parseFloat(quantity);
  let subtotalElement = product.querySelector('.subtotal span');
  
  
  console.log("Calculating subtotal, yey!", price, quantity, subtotal);
  subtotalElement.innerText = subtotal;
  return subtotal;

  //product.querySelector(".subtotal span").innerText = 99;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 // count = [];
  //const products = document.querySelectorAll('.product').forEach((product) => {
   // count.push(updateSubtotal(product));
  //})

   const allProducts = document.querySelectorAll(".product");

  // ITERATION 3

  const allSubtotals = [];
  allProducts.forEach((product) => allSubtotals.push(updateSubtotal(product)));
  let total = allSubtotals.reduce((acc, cur) => acc + cur, 0);
  const totalEl = document.querySelector("#total-value span");
  totalEl.innerText = total;
 
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.removeChild(target);
  console.log('The target in remove is:', target);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
})