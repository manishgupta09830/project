

const getcoldDrink= function(){
    
    return new Promise((res,rej)=>{
    setTimeout(()=>{res("coldDrink come")},1000)
})} 
//console.log(getcoldDrink);
const getbutter=  function(){
    
    return new Promise((res,rej)=>{
    setTimeout(()=>{res("butter come")},500)
    
})}
//console.log(getbutter);
let promsieall=async()=>{
    let promise=await Promise.all([
        getbutter(),
        getcoldDrink(),
    ]);
    console.log(promise);
}
promsieall();


