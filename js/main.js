
const elSearchForm = document.querySelector(".js-search-form"); 
const productsInput = document.querySelector(".js-input"); 

const elTable = document.querySelector(".js-table");

const tableName = document.querySelector(".js-add");
const tableNumber = document.querySelector(".js-number");
const tableTime= document.querySelector(".js-price");


function renderProducts(products) {
    tableName.innerHTML = "";
    tableNumber.innerHTML = "";
    tableTime.innerHTML = "";
    
    products.forEach((product) => {
            tableName.textContent = product.name,
            tableNumber.textContent = product.number,
            tableTime.textContent = product.time
    });
}

function showSearchResults(regexp) {
    const filteredProducts = products.filter(
        (product) => 
        String(product.id).match(regexp) 
    );          
    return filteredProducts;
}

elSearchForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const inputValue = productsInput.value;
    const searchProducts = showSearchResults(inputValue);

    console.log(searchProducts);
    if(searchProducts.length != 0){
        renderProducts(searchProducts);
    }else{
        alert("Kechirasiz, bunday Id raqamdagi mahsulot mavjud emas!");
    }

    productsInput.value = "";
});