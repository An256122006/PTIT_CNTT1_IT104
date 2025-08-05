const user = {
    name: "Dev",
    age: 20,
    listMonhoc:
        [
            { subject: "Math", score: 9 },
            { subject: "English", score: 7.5 },
            { subject: "Physics", score: 6 },
            { subject: "Literature", score: 8.5 }
        ]
}
const display = (user) => {
    const { name, age, listMonhoc } = user;
    bestsub=listMonhoc[0];
    weakestsub=listMonhoc[0];
    let sum=0;
        listMonhoc.forEach(element => {
        sum+=element.score;
        if(element.score>bestsub.score){
            bestsub=element;
        }
        if(element.score<weakestsub.score){
           weakestsub=element;
        }
    });
    sum=sum/4;
    const xeploai=sum>=8.5?"hoc sinh gioi":sum>=7?"hoc sinh kha":sum>=5?"hoc sinh trung binh":"yeu";
    console.log(`${name} is ${age} years old.
Average score: ${sum}-> ${xeploai}
Best subject: ${bestsub.subject} (${bestsub.score});
Weakest subject: ${weakestsub.subject} (${weakestsub.score});
    `);}
display(user);