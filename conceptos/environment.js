let greeting = process.env.GREETING || "No name"
let web = process.env.WEB || "No web"

console.log("Hello, " + greeting);
console.log("Web: " + web);