const user = [{name: 'POST1',lastactivitytime:new Date().getTime()}];
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            user.push({name:'post2',lastactivitytime:new Date().getTime()})
            resolve(JSON.stringify(user))
            upadatelastuseractivitytime();
            
        }, 3000)
    }) 
}
function upadatelastuseractivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         user.lastactivitytime=new Date().getTime();
         resolve(user.lastactivitytime);
        },1000)
    })
}
function userUpdatesPost(){
    Promise.all([createPost(),upadatelastuseractivitytime()])
    .then(([createpostresolve,upadatelastuseractivityreslve])=>{
        console.log(upadatelastuseractivityreslve+" "+createpostresolve)
    }).catch(err=>console.log(err))
}
function deleteBlog(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(user.length > 0){
                const poppedElement  = user.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}
createPost().then(()=>{
    userUpdatesPost()
    })


