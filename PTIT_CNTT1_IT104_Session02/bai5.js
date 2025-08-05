const phonebook=[
    
];
const addcontact=(phone,name,email)=>{
    return {phone,name,email};
}
const display=(phonebook)=>{
    phonebook.forEach(e=>{
        console.log(e);
    })
}
phonebook.push(addcontact("012030300","my","%%%%%"));
display(phonebook);