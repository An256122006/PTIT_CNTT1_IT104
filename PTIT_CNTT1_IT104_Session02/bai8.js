const user = {
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country: "Vietnam"
    },
    contact:
    {
        email: "john@example.",
        phone: "0123456789"
    },
    job:
    {
        title: "Developer",
        company: "Tech Corp"
    }
};
const displayuser = (user) => {
    const { name, age, location,contact,job} = user;
    const {city,country}=location ||{};
    const {email,phone}=contact||{};
    const {title,company}=job||{};
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${title ? title:"unknown"} at ${company ? company :"unknown"}, and can be contacted via ${email ? email:"unknown"} or ${phone ? phone:"unknown"}.`)
};
displayuser({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" }});
displayuser(user);