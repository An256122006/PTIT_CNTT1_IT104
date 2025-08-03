const checknumber= (x)=>{
    if(Number.isInteger(x)){
        return true;
    }else{
        return false;
    }
}
const a=+prompt("moi ban nhap so phai check:");
if(checknumber(a)){
    if(a%2==0){
        console.log(`${a} is an even number`);
    }else{
        console.log(`${a} is obb`);
    }
}else{
    console.log("a not is number");
}