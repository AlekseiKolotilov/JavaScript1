//УРОК 4
//задание №1
function NumToObj(num) {
    var obj = {};
    if ( num < 1 || num > 999 || isNaN( num )) {
        console.log( 'Некорректное число. Введите от 1 до 999' );
    }
    else {
        obj[ 'Сотни' ] =  parseInt(num / 100);
        obj[ 'Десятки' ] = parseInt((num - obj[ 'Сотни' ]*100) / 10);
        obj[ 'Еденицы' ] = parseInt(num - obj[ 'Сотни' ]*100 - obj[ 'Десятки' ]*10);
        return obj;
    };
};
console.log(NumToObj(123));

//задание №2

var products = [{
        id: 1,
        title: 'item 1',
        price: 123,},
        {
        id: 2,
        title: 'item 2',
        price: 321,},
        {
        id: 3,
        title: 'item 3',
        price: 50,},
];

var cart = {
    products: [],
    sum: 0,
    getProductById(productId){
        for (var i = 0; i < this.products.length; i++){
            if (this.products[i].id == productId){
                return this.products[i]
            }
        }
        return false;
    },
    addProduct: function(product){
        var item = this.getProductById(product.id);

        if (!item){
            item = {};
            item.id = product.id;
            item.quantity = 1;
            item.price = product.price;
            this.products.push(item);
        }else{
            ++item.quantity;
        }
        
        
        this.countTotalPrice();
    },
   countTotalPrice() {
    var sum = 0;
    for (var i = 0; i < this.products.length; i++){
        sum += this.products[i].price * this.products[i].quantity;
    }
    this.sum = sum; 
    }
};


cart.addProduct(products[0]);
cart.addProduct(products[0]);
cart.addProduct(products[0]);
cart.addProduct(products[0]);
cart.addProduct(products[1]);
cart.addProduct(products[2]);
