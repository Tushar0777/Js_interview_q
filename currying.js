
// this is currying 

/*
basic idea ye hai ki jab tak apke teeno ya jitne bhi parameter hai vo nhi a jate 
tab tak function execute nhi hoga 
*/
function add(a){
   return  function(b){
    return function(c){
        console.log(a+b+c);
    }
    }
}

add(1)(2)(3);
// now a practicle example

function sendautoemail(to){
    return function(subject){
        return function(body){
            console.log(`sendong email to ${to} with subject ${subject} body ${body}`);
        }
    }
}

let step1=sendautoemail("rohit");
let step2=step1("captainig of india");
let step3=step2("hold team india and make it champion ");



// now same can be done with arrow function 
const add1=(a)=>(b)=>(c)=> a+b+c;

const sendingmail=(to)=>(subject)=>(body)=>`sending email to ${to} subject ${subject} with body ${body}`;

let x=sendingmail("me")("subject kya hota hai ")("body ban jayegi 1 saal me ");
console.log(x);
