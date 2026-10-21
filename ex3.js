//adi hazzan, shrabel jadoun
const a = [1,4,0,0,7,0,8,8,9,0];
let count = 0;
for(let i=0;i<a.length;i++)
    count +=a[i]==0?1:0;
console.log(count);
//this code counts how many zeros are in the array without using if()