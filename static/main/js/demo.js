// learning this

var person = {
    name: "Fang",
    greet: function() {
        console.log("hello " + this.name);
    }
};

console.log("start test this ...")
person.greet();

greet = person.greet;
greet();



// var name = "Jay Global";
// var person = {
//     name: 'Jay Person',
//     details: {
//         name: 'Jay Details',
//         print: function() {
//             return this.name;
//         }
//     },
//     print: function() {
//         return this.name;
//     }
// };
// console.log("start test this again...")

// console.log(person.details.print());  // Jay Details
// console.log(person.print());          // Jay Person
// var name1 = person.print;
// var name2 = person.details;
// console.log(name1()); // Jay Global
// console.log(name2.print()) // Jay Details

// console.log("end test this ...")


// var object = {
//     data: [1,2,3],
//     double: function() {
//         this.data.forEach(function() {
//             // Get this to point to object.
//             console.log(this);
//         });
//     }
// };
// object.double();
