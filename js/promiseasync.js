function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Register end");
            resolve();
        },3000);
    });
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("sending email");
            return reject("Network error during sending Email");
        },5000);
    });
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login end");
            resolve();
        },1000);
    });
    
}
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("got data");
            resolve();
        },4000);
    });
    

}
function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("displaying user data");
            resolve();
        },2000);
    });
}
console.log("Work other application");
// register()
// .then(sendEmail)
// .then(login)
// .then(displaydata)
// .catch((err)=>{
//     console.log("Error : ",err);
// })
// .finally(()=>{
//     console.log("finally block execute");
// });
async function authenticate() {
    try{
        await register();
        await sendEmail();
        await login();
        await getdata();
        await displaydata();
    }
   catch(err){
        console.log(err);
   }
    
}
authenticate();