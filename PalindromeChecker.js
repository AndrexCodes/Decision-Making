const isPalindrome = (data)=>{
    return data === data.split().reverse().join()
}


console.log(isPalindrome("level"))