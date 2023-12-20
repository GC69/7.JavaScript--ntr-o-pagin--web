/*
// functie ce verifica disponibilitatea stocului
function checkStock(product) {
  return product.inStock > 0 ? "In stock" : "Out of stock";
}

// Array de produse
const products = [
  {
    name: "Numele 1",

    category: "Categoria 1",
    price: 299.99,
    originCountry: {
      name: "Rep.Moldova",
      code: "MD",
    },
    inStock: 6,
  },
  {
    name: "Numele 2",
    category: "Categoria 2",
    price: 639.99,
    originCountry: {
      name: "România",
      code: "RO",
    },
    inStock: 12,
  },
  {
    name: "Numele 3",
    category: "Categoria 4",
    price: 969.99,
    originCountry: {
      name: "Ukraine",
      code: "UKR",
    },
    inStock: 3,
  },
  {
    name: "Numele 4",
    category: "Categoria 3",
    price: 2369.99,
    originCountry: {
      name: "Moldova",
      code: "MD",
    },
    inStock: 0,
  },
  {
    name: "Numele 5",
    category: "Categoria 1",
    price: 599.99,
    originCountry: {
      name: "România",
      code: "RO",
    },
    inStock: 1,
  },
];

// Actualizarea metodei "checkStock" pentru a returna rezultatul
products.forEach(function (product) {
  product.availability = checkStock(product);
});

// Afisam lista de produse.
function showAllProducts() {
  products.forEach(function (product) {
    console.log(product);
  });
}

// Posibilitatea de a suplini stocul produselor.
function addNewProduct(product) {
  const index = products.findIndex((item) => item.name === product.name);
  if (index === -1) {
    products.push(product); // Adauga noul produs in lista
  }
  {
    products[index].inStock = products[index].inStock + product.inStock;
  }
}

// Posibilitatea de a lua produse din depozit.
function removeProduct(name) {
  const indexToRemove = products.findIndex(function (product) {
    return product.name === name;
  });

  if (indexToRemove !== -1) {
    if (products[indexToRemove].inStock > 1) {
      products[indexToRemove].inStock = products[indexToRemove].inStock - 1;

      return products[indexToRemove];
    } else {
      return products.splice(indexToRemove, 1)[0];
    }
  }
  return null;
}

// Posibilitatea de a filtra produsele după categorie.
function filterByCategory(categoryFilter) {
  return products.filter(function (product) {
    return product.category === categoryFilter;
  });
}

// Posibilitatea de a filtra produsele după țara de origine.
function filteredByCountry(countryFilter) {
  return products.filter(function (product) {
    return product.originCountry.name === countryFilter;
  });
}

// Să se găsească produsul cel mai scump.
function findExpensiveProduct() {
  let expensiveProduct = products[0];

  products.forEach(function (product) {
    if (product.price > expensiveProduct.price) {
      expensiveProduct = product;
    }
  });
  return expensiveProduct;
}

// Să se găsească produsul cel mai ieftin.
function findCheapestProduct() {
  let cheapestProduct = products[0];

  products.forEach(function (product) {
    if (product.price < cheapestProduct.price) {
      cheapestProduct = product;
    }
  });
  return cheapestProduct;
}

// Să se găsească produsele cu prețul între o limită indicată
function findRangeProduct(minValue, maxValue) {
  const foundProducts = [];

  products.forEach(function (product) {
    if (product.price > minValue && product.price < maxValue) {
      foundProducts.push(product);
    }
  });

  return foundProducts;
}

// addNewProduct({
//   name: "Numele 5",
//   category: "Categoria 1",
//   price: 599.99,
//   originCountry: {
//     name: "România",
//     code: "RO",
//   },
//   inStock: 11,
// });

*/

const products = [
  {
    name: "Numele 1",
    description: "Description 1",
    category: "Categoria 1",
    price: 299.99,
    currency: "MDL",
    originCountry: {
      name: "Rep.Moldova",
      code: "MD",
    },
    inStock: 6,
  },
  {
    name: "Numele 2",
    description: "Description 2",
    category: "Categoria 2",
    price: 639.99,
    currency: "RON",
    originCountry: {
      name: "România",
      code: "RO",
    },
    inStock: 12,
  },
  {
    name: "Numele 3",
    description: "Description 3",
    category: "Categoria 4",
    price: 969.99,
    currency: "USD",
    originCountry: {
      name: "Ukrain",
      code: "UKR",
    },
    inStock: 3,
  },
  {
    name: "Numele 4",
    description: "Description 4",
    category: "Categoria 3",
    price: 2369.99,
    currency: "MDL",
    originCountry: {
      name: "Moldova",
      code: "MD",
    },
    inStock: 0,
  },
  {
    name: "Numele 5",
    description: "Description 5",
    category: "Categoria 1",
    price: 599.99,
    currency: "RON",
    originCountry: {
      name: "România",
      code: "RO",
    },
    inStock: 1,
  },
];

function displayProducts() {
  const section = document.getElementById("productSection");
  section.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const category = document.createElement("p");
    const currency = document.createElement("p");
    const price = document.createElement("p");
    const nameCountry = document.createElement("p");
    const codeCountry = document.createElement("p");
    const stockAmount = document.createElement("p");
    const buy = document.createElement("button");

    title.innerHTML = product.name;
    description.innerHTML = product.description;
    category.innerHTML = product.category;
    price.innerHTML = product.price + " " + product.currency;
    nameCountry.innerHTML =
      product.originCountry.name + ": " + product.originCountry.code;
    stockAmount.innerHTML = product.inStock;
    buy.innerHTML = "Buy";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(category);
    card.appendChild(nameCountry);
    card.appendChild(price);
    card.appendChild(stockAmount);
    card.appendChild(buy);
    section.appendChild(card);
  });
}

function addNewProduct(product) {
  const index = products.findIndex((item) => item.name === product.name);

  console.log("Index:", index);
  if (index === -1) {
    console.log("Adding new product:", product);
    products.push(product); //add new product in the list
  } else {
    products[index].inStock += product.inStock;
  }
  return products[index] || products;
}

function displayNewProduct() {
  const form = document.createElement("form");

  // create input elements for the new product
  const productNameInput = document.createElement("input");
  productNameInput.type = "text";
  productNameInput.placeholder = "New Product name";

  const productCategoryInput = document.createElement("input");
  productCategoryInput.type = "text";
  productCategoryInput.placeholder = "New Product category";

  const productPriceInput = document.createElement("input");
  productPriceInput.type = "number";
  productPriceInput.placeholder = "Product price";

  const stockAmountInput = document.createElement("input");
  stockAmountInput.type = "number";
  stockAmountInput.placeholder = "Stock amount";

  // create the select element for the product countries
  const countrySelect = document.createElement("select");
  const countryOptions = ["Rep.Moldova", "România", "Ukraine"];
  countryOptions.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.appendChild(option);
  });

  // create the select element for the country code
  const codeCountrySelect = document.createElement("select");
  const codeCountryOptions = ["MD", "RO", "UKR"];
  codeCountryOptions.forEach(function (code) {
    const option = document.createElement("option");
    option.value = code;
    option.text = code;
    codeCountrySelect.appendChild(option);
  });
  // create the select element for the currencies
  const currencySelect = document.createElement("select");
  const currencyOptions = ["MDL", "RON", "EURO", "USD"];
  currencyOptions.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    currencySelect.appendChild(option);
  });

  // add submit button
  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.innerHTML = "Add Product";

  // add click event on submit button
  submitButton.addEventListener("click", function () {
    const newProduct = addNewProduct({
      name: productNameInput.value,
      category: productCategoryInput.value,
      price: parseFloat(productPriceInput.value),
      currency: currencySelect.value,
      originCountry: {
        name: countrySelect.value,
        code: codeCountrySelect.value,
      },
      inStock: parseInt(stockAmountInput.value),
    });

    form.remove();

    // create card for the new product
    const newProductCard = document.createElement("div");
    const title = document.createElement("h3");
    title.innerHTML = newProduct.name;
    const category = document.createElement("p");
    category.innerHTML = newProduct.category;
    const currency = document.createElement("p");
    const price = document.createElement("p");
    price.innerHTML = newProduct.price + " " + newProduct.currency;
    const nameCountry = document.createElement("p");
    const codeCountry = document.createElement("p");
    nameCountry.innerHTML =
      newProduct.originCountry.name + ": " + newProduct.originCountry.code;
    const stockAmount = document.createElement("p");
    stockAmount.innerHTML = newProduct.inStock;
    const buy = document.createElement("button");
    buy.innerHTML = "Buy";

    newProductCard.appendChild(title);
    newProductCard.appendChild(category);
    newProductCard.appendChild(nameCountry);
    newProductCard.appendChild(price);
    newProductCard.appendChild(stockAmount);
    newProductCard.appendChild(buy);

    // append the new product card to the section
    const section = document.querySelector("#productSection");
    section.appendChild(newProductCard);
  });

  // add elements to the form
  form.appendChild(productNameInput);
  form.appendChild(productCategoryInput);
  form.appendChild(productPriceInput);
  form.appendChild(countrySelect);
  form.appendChild(codeCountrySelect);
  form.appendChild(currencySelect);
  form.appendChild(stockAmountInput);
  form.appendChild(submitButton);

  // add form to the section
  const section = document.querySelector("#productSection");
  section.appendChild(form);
}

function findExpensiveProduct() {
  let expensiveProduct = products[0];

  products.forEach(function (product) {
    if (product.price > expensiveProduct.price) {
      expensiveProduct = product;
    }
  });
  return expensiveProduct;
}

function displayExpensiveProduct() {
  let expensiveProduct = findExpensiveProduct();

  const section = document.querySelector("#productSection");
  const expensiveProductInfo = document.createElement("div");
  expensiveProductInfo.className = "expensiveProduct";

  const info = document.createElement("h4");
  info.innerHTML = "Expensive Product is: ";

  const title = document.createElement("h3");
  title.innerHTML = expensiveProduct.name;
  const category = document.createElement("p");
  category.innerHTML = expensiveProduct.category;
  const currency = document.createElement("p");
  const price = document.createElement("p");
  price.innerHTML = expensiveProduct.price + " " + expensiveProduct.currency;
  const nameCountry = document.createElement("p");
  const codeCountry = document.createElement("p");
  nameCountry.innerHTML =
    expensiveProduct.originCountry.name +
    ": " +
    expensiveProduct.originCountry.code;
  const stockAmount = document.createElement("p");
  stockAmount.innerHTML = expensiveProduct.inStock;
  const buy = document.createElement("button");
  buy.innerHTML = "Buy";

  expensiveProductInfo.appendChild(info);
  expensiveProductInfo.appendChild(title);
  expensiveProductInfo.appendChild(category);
  expensiveProductInfo.appendChild(nameCountry);
  expensiveProductInfo.appendChild(price);
  expensiveProductInfo.appendChild(stockAmount);
  expensiveProductInfo.appendChild(buy);

  section.appendChild(expensiveProductInfo);
}

function findCheapestProduct() {
  let cheapestProduct = products[0];

  products.forEach(function (product) {
    if (product.price < cheapestProduct.price) {
      cheapestProduct = product;
    }
  });
  return cheapestProduct;
}

function displayCheapestProduct() {
  let cheapestProduct = findCheapestProduct();

  const section = document.querySelector("#productSection");
  const cheapestProductInfo = document.createElement("div");
  cheapestProductInfo.className = "cheapestProduct";

  const info = document.createElement("h4");
  info.innerHTML = "Cheapest Product is: ";
  const title = document.createElement("h3");
  title.innerHTML = cheapestProduct.name;
  const category = document.createElement("p");
  category.innerHTML = cheapestProduct.category;
  const currency = document.createElement("p");
  const price = document.createElement("p");
  price.innerHTML = cheapestProduct.price + " " + cheapestProduct.currency;
  const nameCountry = document.createElement("p");
  const codeCountry = document.createElement("p");
  nameCountry.innerHTML =
    cheapestProduct.originCountry.name +
    ": " +
    cheapestProduct.originCountry.code;
  const stockAmount = document.createElement("p");
  stockAmount.innerHTML = cheapestProduct.inStock;
  const buy = document.createElement("button");
  buy.innerHTML = "Buy";

  cheapestProductInfo.appendChild(info);
  cheapestProductInfo.appendChild(title);
  cheapestProductInfo.appendChild(category);
  cheapestProductInfo.appendChild(nameCountry);
  cheapestProductInfo.appendChild(price);
  cheapestProductInfo.appendChild(stockAmount);
  cheapestProductInfo.appendChild(buy);

  // cheapestProductInfo.appendChild(divContainer);

  section.appendChild(cheapestProductInfo);
}

function resetFilters() {
  const section = document.querySelector("#productSection");

  section.innerHTML = "";
  displayProducts();
}
