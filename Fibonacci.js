const fibonnaci = (x)=>{
    if(x === 1){
        return 1
    }
    return x * fibonnaci(x-1)
}

console.log(fibonnaci(5))
