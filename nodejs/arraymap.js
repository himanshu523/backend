let array = ['apple','oranges',' ','mango',' ','lemon']
const array1 = array.map((str)=>{
    if(str===' ')
    {
        str='empty string';
    }
    return str;
});
console.log(array1);
console.log(array);


const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)




