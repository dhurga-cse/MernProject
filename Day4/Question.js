let createArray=(par1,par2,par3)=>{
    return [par1,par2,par3];
};
console.log(createArray(3,5,7));

const arr1=[1,4,"hello","world"];
const strings = arr1.filter(item => typeof item === 'string');
console.log(strings);

for(let i=0;i<arr1.length;i++){
    if(typeof arr1[i]==="string"){
        console.log(arr1[i]);
    }
}

// let arr=[1,4,5];
// console.log(typeof arr);

let arr=[3,5,8,9,2];
for(let i=0;i<arr.length;i++){
  arr[i]=arr[i]*arr[i];
}
  console.log(arr);
//   let even = arr.filter(item => item %2==0);
//   console.log(even);

//   let getEven=(par1,par2,par3)=>{
//     int
// };
// add(20,50);
// add(40,50);
// add();
