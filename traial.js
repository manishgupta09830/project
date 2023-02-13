async function playstation(){
    console.log("a");
    console.log("b");
    const massege=await new Promise((res,rej)=>{
        setTimeout(()=>{res("c")},1000)
        
    })
    console.log(massege);
    const massege2=await new Promise((res,rej)=>{
        setTimeout(()=>{res("d")},2000)
        
    })
    console.log(massege2);
    console.log("e");

}
playstation();