//Normal function
function add(a,b){
console.log(a+b)
}
add(2,7)


//Arrow Function: We don't use function keyword in that instead of this we will use variables.
const sub=(a,b)=>{console.log(a-b)}
const mul=(a,b)=>{console.log(a*b)}
//Callback: Passing a function in the parameter
const calc=(a,b,func)=>{
    func(a,b)
}
calc(4,6,add)
calc(2,8,sub)
calc(7,4,mul)

//Looping 
let num=[2,3,6,8,4]
for(let index in num){
    console.log(index)
}
for(let index in num){
    console.log(num[index])
}

let num1=[2,3,6,8,9,5]
let obj={
    name:'Hema',
    state:{
        city: 'Madanapalle',
    },
    age: 19
}
console.log(obj?.state)
//for(let index in obj){
    //console.log(obj[index]);
//}



