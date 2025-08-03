const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
const {title,author}=response.data;
const {name:authorname,email:authoremail}=author;
console.log("title:",title);
console.log("Author:",author);
console.log("Authorname:",authorname);
console.log("Authoremail:",authoremail);