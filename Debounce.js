
// jaise ek user type kare api request send karo but ek timelimit ke sath 
// agar user ne dobara type krna start kr diya to vo api request concel ho jayegi aur 
// nayi request jati hai 
// 
function debounce(fn,delay){
    let timerid

    return function(...args){
        clearTimeout(timerid);// cancel the last call 
       timerid= setTimeout(() => {
            fn(...args)
        }, delay);
    }

}

const search=(query)=>{
console.log(`searching for ${query}`);
}

const searchwithdebounce=debounce(search,1000);


searchwithdebounce("hard");
searchwithdebounce("hard js");
searchwithdebounce("hard js interview questions");