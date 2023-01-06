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







