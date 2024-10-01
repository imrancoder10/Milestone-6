// data access
const data = [{
    id: 1,
    name: 'abul',
    address: 'Jahudanga'
}];

// console.log(data[0].address);
// ===========================================================

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000}
    ]
}
// second product price
// console.log(products.data[1].price);

// ============================================================================

const user = {
    id: 5001,
    name: 'shohagh',
    address: {
        street:{
            frist: '54/1 uttor side',
            second: 'probag er goli',
            third: 'no dorai'
        },
        city: 'Satkhira'
    }
}
// console.log(user.address.street.second);
// ==============================================================================================
const user2 = {
    id: 5001,
    name: 'pori bibir majar',
    address: {
        city: 'khulna',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.city);