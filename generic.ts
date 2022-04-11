function getData(value:any){
    return value;
}

// generic
function myData<T>(value:T){
    return value;
}

const arrowFunc = <T>(value:T) =>{
    return value;
}

console.log(getData(1));
console.log(arrowFunc("string"));