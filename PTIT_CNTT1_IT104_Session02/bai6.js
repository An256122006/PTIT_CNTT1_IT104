const check=(st1,st2)=>{
    if(st1.endsWith(st2)) return true;
    return false;
}
console.log(check("hello world","world"));