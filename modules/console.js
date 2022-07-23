console.log("object");
console.error("object");
console.warn("object");

var table = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Peter",
        age: 25
    }
]

console.log(table);
console.table(table)

console.group("People");
console.log("Hi %s, you are %d years old", "John", 30);
console.log("Hi %s, you are %d years old", "Peter", 25);
console.groupEnd();
console.log("Bye");

console.count("Times")
console.count("Times")
console.count("Times")
console.count("Times")
console.countReset("Times")
console.count("Times")
console.count("Times")