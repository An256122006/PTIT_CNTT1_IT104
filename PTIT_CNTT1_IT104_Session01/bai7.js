const sum=(...args)=>{
    return args.map(e=>e.reduce((a,b)=>a+b,0));
}
const aray=sum([1,2,3],[6,7,8],[12,8]);
console.log(aray);