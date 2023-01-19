
var name = (arr)=>{
    var count=0;
  return ()=>{
    console.log("hello"+arr[count]);
    count++;
  }


}

let fun = name(["Ram","Shyam"]);

fun()// Print Hello Ram

fun()//print Hello Shyam