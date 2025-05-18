/*
gpt questions for the code below 
https://chatgpt.com/share/6829fd15-b950-800f-9277-5281fe2adb30

*/


function throttle(fn,delay){
    let lastcall=0;

    return function(...args){
        const now=Date.now();
        if(now-lastcall<delay){
            return; 
            // cooldown window se phele a gya 

        }
        lastcall=now;
        return fn(...args);
    }

}

function chatmsg(query){
console.log(`used messaged ${query}`);
}


const sendcharmsgwiththrottle = throttle(chatmsg,2*1000);

sendcharmsgwiththrottle("hey there");
sendcharmsgwiththrottle("another fucntion call");
sendcharmsgwiththrottle("hello");  
sendcharmsgwiththrottle("last one promise");



setTimeout(()=>{
sendcharmsgwiththrottle("another fucntion call");
},1500)
setTimeout(() => {
  sendcharmsgwiththrottle("hello");  
},2000);


sendcharmsgwiththrottle("last one promise");