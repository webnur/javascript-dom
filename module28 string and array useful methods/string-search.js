const products = [
    'dell hardcore i29 200GB laptop',
    'iPhone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1Xap lenevo commercial yoga laptop',
    'dell suparnuva laptop',
    'HTC low price phone',
    'purple colour phone with Laptop'
]

// const searching = 'laptop';
const searching = 'dell';

// indexOf
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product)
    }
}

// console.log(output);


for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){

        // output.push(product)
    }
}

// console.log(output);


for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
}


console.log(output);