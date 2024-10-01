const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
// ================= all property keys ========================
// console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

// ================ all property values ========================
// all property vlaues
const values = Object.values(glass);
// console.log(values);
// [ 'glass', 'golden', 12, true ]

// ==============================================================
// entries = keys and values
const pair = Object.entries(glass);
// console.log(pair); 

/*
Array of array, two dimentional array
[
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ]
    
  */


//   ===============================================================

// console.log(glass); 
// delete glass.isCleaned;
// console.log(glass);

// =======================================================

// const {isCleaned, ...rest} = glass;
// console.log(rest);

// ======================================================
// freeze

// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 1000;
// console.log(glass);
// delete glass.name;
// console.log(glass);


// ===================================================================

Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 1000;
console.log(glass);
delete glass.name;
console.log(glass);

