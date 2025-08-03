const creuser=(name="cho duong",Age=15,role="user")=>{
    return{
        name:name,
        age:Age,
        role:role
    }
}
console.log(creuser());
console.log(creuser("duong gio tai",16,"admin"));