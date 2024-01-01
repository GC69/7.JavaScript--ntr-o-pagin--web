// Product list
const products = [
  {
    name: "Numele 1",
    description: "Description 1",
    category: "Categoria 1",
    price: 300,
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

function displayProductsDetails(container, product) {
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const category = document.createElement("p");
  const currency = document.createElement("p");
  const price = document.createElement("p");
  const nameCountry = document.createElement("p");
  const codeCountry = document.createElement("p");
  const stockAmount = document.createElement("p");
  const buy = document.createElement("button");

  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  title.innerHTML = product.name;
  description.innerHTML = product.description;
  category.innerHTML = product.category;
  price.innerHTML = product.price + " " + product.currency;
  nameCountry.innerHTML =
    product.originCountry.name + ": " + product.originCountry.code;
  stockAmount.innerHTML = product.inStock;
  buy.innerHTML = "Buy";
  editButton.innerHTML = "Edit";
  editButton.setAttribute("product-id", product.name);
  deleteButton.innerHTML = "Delete";

  // add event on click "edit" button
  editButton.addEventListener("click", function () {
    const productId = this.getAttribute("product-id");
    editProduct(productId);
  });

  // add event on click "delete" button
  deleteButton.addEventListener("click", function () {
    deleteProduct(product);
  });

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(category);
  container.appendChild(nameCountry);
  container.appendChild(price);
  container.appendChild(stockAmount);
  container.appendChild(buy);

  container.appendChild(editButton);
  container.appendChild(deleteButton);
}

function displayProducts(container, products) {
  const section = document.querySelector("#productSection");
  section.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");

    displayProductsDetails(card, product);

    container.appendChild(card);

    section.appendChild(card);
  });
}

function editProduct(id) {
  const container = document.getElementById(`productSection`);
  const product = products.find((p) => p.name === id);

  if (product) {
    const newName = prompt("Enter new name: ", product.name);
    const newDescription = prompt(
      "Enter new description: ",
      product.description
    );
    const newCategory = prompt("Enter new category: ", product.category);
    const newPrice = prompt("Enter new price: ", product.price);
    const newCurrency = prompt("Enter new currency:", product.currency);
    const newOriginCountryName = prompt(
      "Enter new origin country name: ",
      product.originCountry.name
    );
    const newOriginCountryCode = prompt(
      "Enter new origin country code:",
      product.originCountry.code
    );
    const newInStock = prompt("Enter new stock amount: ", product.inStock);

    product.name = newName;
    product.description = newDescription;
    product.category = newCategory;
    product.price = parseFloat(newPrice);
    product.currency = newCurrency;
    product.originCountry.name = newOriginCountryName;
    product.originCountry.code = newOriginCountryCode;
    product.inStock = parseInt(newInStock);

    // display the updated product
    displayProducts(container, [product]);
    displayProducts(container, products);
  }

  return product;
}

function deleteProduct(product) {
  const isConfirmed = window.confirm(
    `Are you sure you want to delete this product: ${product.name}?`
  );
  if (isConfirmed) {
    const indexToRemove = products.findIndex(function (p) {
      return p.name === product.name;
    });
    if (indexToRemove !== -1) {
      products.splice(indexToRemove, 1);
      console.log(`Deleted product: ${product.name}`);

      displayProducts(document.getElementById("productSection"), products);
    }
  } else {
    console.log("Deletion cancelled");
  }
}

function createProductForm() {
  const form = document.createElement("form");

  // create input elements for the new product
  const productNameInput = document.createElement("input");
  productNameInput.type = "text";
  productNameInput.placeholder = "Product name";

  const productDescriptionInput = document.createElement("textarea");
  // productDescriptionInput.type = "text";
  productDescriptionInput.placeholder = "Product Description";

  const productCategoryInput = document.createElement("input");
  productCategoryInput.type = "text";
  productCategoryInput.placeholder = "Product category";

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
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const newProduct = {
      name: productNameInput.value,
      description: productDescriptionInput.value,
      category: productCategoryInput.value,
      price: parseFloat(productPriceInput.value),
      currency: currencySelect.value,
      originCountry: {
        name: countrySelect.value,
        code: codeCountrySelect.value,
      },
      inStock: parseInt(stockAmountInput.value),
    };

    addNewProduct(newProduct);

    // create card for the new product
    const newProductCard = document.createElement("div");
    newProductCard.className = "New product";

    displayProductsDetails(newProductCard, newProduct);

    // append the new product card to the section
    const section = document.querySelector("#productSection");
    section.prepend(newProductCard);

    // Show updated list of products
    displayProducts(section, products);

    console.log(form);

    // reset the form after adding new product
    form.reset();
  });

  // add elements to the form
  form.appendChild(productNameInput);
  form.appendChild(productDescriptionInput);
  form.appendChild(productCategoryInput);
  form.appendChild(productPriceInput);
  form.appendChild(stockAmountInput);
  form.appendChild(countrySelect);
  form.appendChild(codeCountrySelect);
  form.appendChild(currencySelect);
  form.appendChild(submitButton);

  return form;
}

function addNewProduct(product) {
  const index = products.findIndex((item) => {
    return (
      item.name === product.name &&
      item.category === product.category &&
      item.originCountry.code === product.originCountry.code &&
      item.price === product.price &&
      item.currency === product.currency
    );
  });

  if (index === -1) {
    console.log("Adding new product:", product);
    products.push(product); //add new product in the list
  } else {
    console.log("Product already exists. Updating quantity");
    products[index].inStock += product.inStock;
  }

  displayProducts(document.getElementById("productSection"), products);

  console.log(products);
  return products;
}

function displayNewProduct() {
  const form = createProductForm();

  // add form to the section
  const section = document.querySelector("#productSection");

  //append the form to the section
  section.prepend(form);
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
  const section = document.querySelector("#productSection");
  section.innerHTML = "";

  const info = document.createElement("h4");
  const cheapestProductInfo = document.createElement("div");
  const cheapestProduct = findCheapestProduct();

  info.innerHTML = "Cheapest Product is: ";
  cheapestProductInfo.className = "cheapestProduct";

  displayProducts(cheapestProductInfo, [cheapestProduct]);

  section.prepend(info);
  section.appendChild(cheapestProductInfo);
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
  const section = document.querySelector("#productSection");
  section.innerHTML = "";

  const expensiveProductInfo = document.createElement("div");
  const info = document.createElement("h4");
  const expensiveProduct = findExpensiveProduct();

  info.innerHTML = "Expensive Product is: ";
  expensiveProductInfo.className = "expensiveProduct";

  displayProducts(expensiveProductInfo, [expensiveProduct]);

  section.prepend(info);
  section.appendChild(expensiveProductInfo);
}

function filterByProperty(property, value) {
  return products.filter(function (product) {
    return product[property] === value;
  });
}

function showProductsByProperty() {
  const section = document.querySelector("#productSection");
  section.innerHTML = "";

  const filterSelect = document.createElement("select");

  // add options for select
  const propertyOptions = ["name", "category", "originCountry.name"];
  propertyOptions.forEach((property) => {
    const option = document.createElement("option");
    option.value = property;
    option.text = property;
    filterSelect.appendChild(option);
  });

  // add select to DOM
  section.appendChild(filterSelect);

  // add input field for property value
  const selectedValue = document.createElement("input");
  selectedValue.type = "text";
  selectedValue.placeholder = "Enter a value for selected property";
  section.appendChild(selectedValue);

  // add button for trigger filter
  const filterButton = document.createElement("button");
  filterButton.innerHTML = "Filter";
  filterButton.addEventListener("click", function () {
    const selectedProperty = filterSelect.value;
    const selectedPropertyValue = selectedValue.value;

    // filter and show results
    const filterdProducts = filterByProperty(
      selectedProperty,
      selectedPropertyValue
    );

    displayProducts(document.getElementById("productSection"), filterdProducts);
  });
  section.appendChild(filterButton);
}

function findRangeProduct(minValue, maxValue) {
  return products.filter(function (product) {
    return product.price >= minValue && product.price <= maxValue;
  });
}

function showRangeProducts() {
  const section = document.querySelector("#productSection");
  section.innerHTML = "";

  const maxPrice = Math.ceil(
    Math.max(...products.map((product) => product.price))
  );

  // Create min range input
  const minRangeInput = document.createElement("input");
  minRangeInput.type = "range";
  minRangeInput.min = 0;
  minRangeInput.max = maxPrice;
  minRangeInput.step = 1;
  minRangeInput.value = 0;

  // Create max range input
  const maxRangeInput = document.createElement("input");
  maxRangeInput.type = "range";
  maxRangeInput.min = 0;
  maxRangeInput.max = maxPrice;
  maxRangeInput.step = 1;
  maxRangeInput.value = maxPrice;

  // Add event listener to update minRangeInput, maxRangeInput values
  minRangeInput.addEventListener("input", function () {
    minRangeValue.textContent =
      "Min Price: " + minRangeInput.value + " " + products[0].currency;

    // Update max attribute of maxRangeInput based on the new value of minRangeInput
    maxRangeInput.max = maxPrice;
    maxRangeInput.min = parseFloat(minRangeInput.value);

    // Ensure that max value doesn't exceed maxPrice
    if (parseFloat(maxRangeInput.value) > maxPrice) {
      maxRangeInput.value = maxPrice;
      maxRangeValue.textContent =
        "Max Price: " + maxRangeInput.value + " " + products[0].currency;
    }
  });

  maxRangeInput.addEventListener("input", function () {
    maxRangeValue.textContent =
      "Max Price: " + maxRangeInput.value + " " + products[0].currency;

    // Update min attribute of minRangeInput based on the new value of maxRangeInput
    minRangeInput.min = 0;
    minRangeInput.max = parseFloat(maxRangeInput.value);

    // Ensure that min value doesn't exceed maxPrice
    if (parseFloat(minRangeInput.value) > maxPrice) {
      minRangeInput.value = maxPrice;
      minRangeValue.textContent =
        "Min Price: " + minRangeInput.value + " " + products[0].currency;
    }
  });

  // Create range value span for min range input
  const minRangeValue = document.createElement("span");
  minRangeValue.textContent =
    "Min Price: " + minRangeInput.value + " " + products[0].currency;

  // Create range value span for max range input
  const maxRangeValue = document.createElement("span");
  maxRangeValue.textContent =
    "Max Price: " + maxRangeInput.value + " " + products[0].currency;

  // Add filter button
  const filterButton = document.createElement("button");
  filterButton.innerHTML = "Filter by Price Range";

  // Add event listener for filter button
  filterButton.addEventListener("click", function () {
    const minValue = parseFloat(minRangeInput.value);
    const maxValue = parseFloat(maxRangeInput.value);

    const filteredProducts = findRangeProduct(minValue, maxValue);

    // Show products after filtering
    if (filteredProducts.length > 0) {
      displayProducts(section, filteredProducts);
    } else {
      section.innerHTML = "No products found in the specified price range.";
    }
  });

  // Append elements to section
  section.appendChild(minRangeInput);
  section.appendChild(minRangeValue);
  section.appendChild(maxRangeInput);
  section.appendChild(maxRangeValue);
  section.appendChild(filterButton);
}

function resetFilters() {
  const section = document.querySelector("#productSection");

  displayProducts(section, products);
}
