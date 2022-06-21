// const facts = [
//     "I like tacos.",
//     "I have a twin.",
//     "Kenzie is the best!",
//     "Will this work?",
//     "alll I can do is try!"
// ]
const facts = new Set();
facts.add("blue");
facts.add("green");
facts.add("yellow");
facts.add("orange");
facts.add("black");

function funFact() {
var result;
result = Math.floor(Math.random() * facts.length); 
document.write (result);
}
const random = Math.floor(Math.random() * facts.length); 

