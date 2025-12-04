// console.log(a);
// //hosting
// var a=10;
// //global scope/function scope
// console.log(a);

// //ES6
// //let const
// console.log(b);
// //referrence error
// //temporal dead zone
// let b=20;
// b=130;
// //block scope
// console.log(b);
// {
//     let b=30;
//     console.log(b)
// }
// console.log(b);
// const c=30;
// c=40;
// //type error
// console.log(c);
//functions
//1.nested functions
//function declaration

// function namedfunc(){
//     console.log("namefunction called");
// }
// //function call/invoakers
// namedfunc();
// //funexp();
// //2.function expression

// let funcexp=function(){
//     console.log("function expression called");

// };
// funcexp();
// //3.arrow function(es6)
// let arrow=()=>{
//     console.log("arrow function");
// };
// arrow();
// //4.callback and 5.IIFE-imediately invoked function expression
// (function(){
//     console.log("callback and iife");

// })();
// (()=>{
//     console.log("callback and iife and arrow");

// })();

//add
// const addtwo =(parameter1,parameter2)=>{
//     console.log(parameter1,parameter2);
//     let num1=parameter1||10;
//     let num2=parameter2||20;
//     let sum=num1+num2;
//     console.log("sim of two numbers is: ",sum);

// };
// addtwo(20,50);
// addtwo(40,50);
// addtwo();
// const add=(parameter1,parameter2)=>{
//     console.log(parameter1,parameter2);
//     let num1=parameter1||10;
//     let num2=parameter2||20;
//     let sum=num1+num2;
//     console.log(`sim of two numbers is  ${sum}`,sum);//string

// };
// add(20,50);
// add(40,50);
// add();
// const print=(parameter1,parameter2)=>{
//     console.log(parameter1,parameter2);
//     let num1=parameter1||10;
//     let num2=parameter2||20;
//     let sum=num1+num2;
//     console.log("parameter1 value is",num1 ,"and parameter2 value is ",num2);
    

// };
// print(20,50);
// print(40,50);
// print();

// //type
// let a="hello";
// console.log(typeof a);

//loop
// let arr=[3,5,8,9,2];
// console.log(arr);

// //for
// for(let i=0;i<arr.length;i++){
//   arr[i]=arr[i]+i;
// }
//   console.log(arr);

// let arr1=[3,5,8,9,2];
// console.log(arr1);

// //for-each
// arr1.forEach((element,index)=>{
//     console.log(element,index);
// });

// //map
// let arr2=[2,4,6,5,3];
// let a=arr2.map((el,ind)=>{
//     return el+ind;
// });
// console.log(a);

// let aa=arr2.map((el,ind)=>el+ind);
// console.log(arr2);
// console.log(aa);

let a=[1,2,3,4,5,6,7,8,9];
//filter-only will work on truthy values
let b=a.filter((el,ind)=>{
    return ind>4;
});
console.log(b);

//reduce-return  a single value
let c=a.reduce((acc,el,ind)=>{
    console.log(acc,el);
    return acc+el;
// },200
});
console.log(c);
