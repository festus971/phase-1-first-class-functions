function returnsANamedFunction(){
    const named=()=>
    console.log("named function");
    return named;
}
function receivesAFunction(callback){
    callback();
}
function returnsAnAnonymousFunction(){
    return ()=>
    console.log("anonymous function");
}