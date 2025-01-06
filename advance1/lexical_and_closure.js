// this is lexical scoping as inner function can take the value define in outer orits global function 
function family(){
    const name = "singh"
    function getname(){
        console.log(`${name}`)
    }
    getname()
}
family()
// lets understand closure
// closure is a function that has access to its outer function's scope even when the outer function has
// returned or finished executing.
// easy way to understand is that it send whole reference of function rategr than just aa part
function outer(){
    let count = 0;
    function inner(){
        return count+1
    }
    return inner
}
// lets see how closure works
console.log(outer())