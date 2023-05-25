// Handdling async step in nodejs using Promise
let a= 20;
let b=0;
let promises=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(30);
    },2000);
})

promises.then((data)=>{
    console.log(a+data);

})