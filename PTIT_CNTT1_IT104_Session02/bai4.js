const checkElement=(arr,value)=>{
      let check=-1;
        arr.forEach(element => {
            if(element==value){
                check=0;
            }
        });
        if(check==0){
            return "true";
        }else{
            return "false";
        }
};
let arr=[1,2,3,4,5];
let value=3;
console.log(checkElement(arr,value));