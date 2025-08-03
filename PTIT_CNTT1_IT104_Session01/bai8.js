const arrcat=(arr1,arr2,pos)=>{
    arr1.splice(pos, 0, ...arr2);
    return arr1;
}
const arr1=[1,2,3,7,8,9];
const arr2=[4,5,6];
const pos=3;
console.log(arrcat(arr1,arr2,pos));