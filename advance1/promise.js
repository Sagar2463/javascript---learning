
const promise1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Promise resolved after 1 second');
        }, 1000);
        resolve();
});
promise1.then(() => {
    console.log('recived');
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise resolved after 2 seconds');
            resolve();
        }, 2000);
    });
    
    const handlePromise = async () => {
        await promise2;
        console.log('received2');
    };
    
    handlePromise();
/* few example in debt by using real word api req*/
fetch("https://randomuser.me/api/").
then((response)=>{
    return response.json()
}).then(function(data){
    console.log(data.results[0].login.username);
}).catch((reject)=>{
    console.log(reject);
})




    


