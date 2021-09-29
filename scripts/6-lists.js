console.log('working with lists');
console.log('');
console.log('-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-');
console.log('Possible destinations in Brazil');
console.log('-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-');
//const city = ['Salvador', 'São paulo', 'Curitiba'];

const destinationList = new Array(
    'Salvador',
    'São paulo',
    'Curitiba'
);

//add element
destinationList.push('Bonito');

//itaration
//destinationList.forEach(city => {
//    console.log(city)
//});

//remove element
destinationList.splice(2, 1);

console.log(destinationList[2]);