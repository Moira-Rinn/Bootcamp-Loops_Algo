// 1. Print odds 1-20

for(let i=1; i<20; i+=2){
    console.log(i);
}

// 2. Sum and Print 1-5

let x=0;
for(let i=1; i<=5; i++){
  console.log(`num = ${i}`);
  x=x+i;
  console.log(`sum = ${x}`);
}

// Office Hour Challenge...

for(let i=1; i<=100; i++){
  if(i%3==0 && i%5==0){
    console.log(`${i}: Silly Cat`);
  }
  else if(i%3==0){
    console.log(`${i}: Silly`);
  }
  else if(i%5==0){
    console.log(`${i}: Cat`);
  }
  else{ console.log(`${i}: Not a Cat!`);}
}

// Office Hour Challenge

let arr=[-1,3,5,-5,7,-9,-18,4,19];

function makeItBig(arr){
  bigArray=[];
  arr.forEach(val => {
    if(val>=0){
      bigArray.push("big");
    }
    else{ bigArray.push(val);}
});
return bigArray;
}
console.log(makeItBig(arr));