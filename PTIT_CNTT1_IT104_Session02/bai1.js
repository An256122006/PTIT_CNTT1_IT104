const sum=(...arr)=>{
    let target=0;
    for(const i of arr){
        if(i%2==0){
            target+=i;
        }
    }
    return target;
}
const arr=[1,2,3,4,5,6];
console.log(sum(...arr));