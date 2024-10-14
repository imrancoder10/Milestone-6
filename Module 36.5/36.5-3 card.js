const addProduct = document.getElementById('add-product');
addProduct.addEventListener('click', function () {
    const productField = document.getElementById('product-name').value;
    const priceField = document.getElementById('product-price').value;

    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';

    displayProduct(productField, priceField);
    setProductToLocalStorage(productField, priceField);

});

const displayProduct = (productField, priceField) => {
    const ulContainer = document.getElementById('ul-container');
    const list = document.createElement('li');
    // const product = localStorage.getItem(productName);
    list.innerHTML = `${productField} : ${priceField}`;
    ulContainer.appendChild(list);
}


const setProductToLocalStorage = (product, price) => {
    const card = getProductFromLocatStorage();
    card[product] = price;
    const cardStringified = JSON.stringify(card);
    // console.log(cardStringified);
    localStorage.setItem('card', cardStringified);

}

const getProductFromLocatStorage = () => {
    let card = {};
    const storedCard = localStorage.getItem('card');
    if (storedCard) {
        card = JSON.parse(storedCard);
    }
    return card;

}

const displayProductFromLocaltorage = () =>{
    const setCard = getProductFromLocatStorage();
    // console.log(setCard);
    for(const product in setCard){
        const addPrice = setCard[product];
        displayProduct(product, addPrice);
    }
}
displayProductFromLocaltorage();