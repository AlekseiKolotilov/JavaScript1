//УРОК 3
//задание №1
var s, 
i = 2;
while(i <= 100 ){
    for( s = 2; s < i; s++){
        if (i % s === 0){
            break;
        }
    }
    if(i == s){
        console.log(i)
    }
    i++
}

//задание №2
var j = 0;
do {
    if ( j === 0 ) {
        console.log( j + '- число ноль');
    } else if ( j % 2 == 0) {
        console.log( j + '- число четное');
    } else {
        console.log( j + '- число нечетное');
    }
    j++;
    } while ( j < 11 );


//задание №3
for(i = 1; i<=9; console.log(i++)){};

//задание №4
var x = 'x';
for ( var i = 1; i<=20; i++) {
    console.log(x);
    x = x + 'x';
};