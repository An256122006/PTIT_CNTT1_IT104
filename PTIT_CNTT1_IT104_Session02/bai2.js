class nguoi{
    constructor(ten,status){
        this.ten=ten;
        this.status=status;
    }
    say(){
        if(this.status=="sunny"){
            console.log(`Chào ${this.ten}! Hôm nay trời nắng tuyệt vời!`);
        }else if(this.status=="rainy"){
            console.log(`Chào ${this.ten}! Hôm nay trời mưa, hãy mang theo ô!`);
        }else{
            console.log(`Chào ${this.ten}! Hôm nay thời tiết không xác định.`);
        }
    }
}
const nguoi1=new nguoi("Nguyen an","sunny");
const nguoi2=new nguoi("lenam","rainy");
const nguoi3=new nguoi("tuyet","clouly")
nguoi1.say();
nguoi2.say();
nguoi3.say();