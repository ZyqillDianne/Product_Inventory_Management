document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('next-btn');
  const backBtn = document.getElementById('back-btn');
  const container1 = document.getElementById('container-1');
  const container2 = document.getElementById('container-2');

  let totalItems = 0, totalCost = 0;
  let productData = JSON.parse(localStorage.getItem('productData')) || {}; // Kunin ang product data mula sa localStorage

  const form = document.getElementById('inventory-form');
  const productTypeSelect = document.getElementById('product-type');
  const quantityInput = document.getElementById('quantity');
  const costInput = document.getElementById('cost');
  const totalItemsSpan = document.getElementById('total-items');
  const totalCostSpan = document.getElementById('total-cost');
  const averageCostSpan = document.getElementById('average-cost');
  const productSummaryList = document.getElementById('product-summary-list');
  const addProductBtn = document.getElementById('add-product-btn');
  const newProductNameInput = document.getElementById('new-product-name');

  // Pumunta sa susunod na container
  nextBtn.addEventListener('click', () => {
    container1.classList.remove('active');
    container2.classList.add('active');
  });

  // Pabalik sa unang container
  backBtn.addEventListener('click', () => {
    container2.classList.remove('active');
    container1.classList.add('active');
  });

  // Pagdagdag ng bagong produkto
  addProductBtn.addEventListener('click', () => {
    const newProduct = newProductNameInput.value.trim();
    if (!newProduct) {
      alert('Please enter a valid product name.');
      return;
    }

    if (productData[newProduct]) {
      alert('Product already exists.');
      return;
    }

    const option = document.createElement('option');
    option.value = newProduct;
    option.textContent = newProduct;
    productTypeSelect.appendChild(option);
