const arrcat=(arr1,arr2)=>{
    return [...arr1,...arr2];
}
const arr1=[1,2,3,7,8,9];
const arr2=[4,5,6];
console.log(arrcat(arr1,arr2).sort());