let userPromise = new Promise((resolve, reject) => {
    let a=1+1;
    if(a==3){
        resolve(a)
    }
    else{
        reject("a is not iqual to 2")
    }
})

userPromise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})