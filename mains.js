var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 16: Shrinking Guest List
var Gue_st = ["Abdullah", "Munafullah", "Ahmed"];
var nonDinnerPartner = Gue_st.pop();
console.log("Sorry, ".concat(nonDinnerPartner, ", we cannot invite you to dinner"));
Gue_st.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner tonight."));
});
Gue_st.splice(0, Gue_st.length);
console.log(Gue_st); // Should be an empty list
// 17: Seeing the World
var placesToVisit = ["London", "Paris", "New York", "Dubai", "Rome"];
console.log("Places in original order:", placesToVisit);
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
console.log("Still in Original Order:", placesToVisit);
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Still in Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
placesToVisit.reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
// 18: Dinner Guests
var members = ["Abdullah", "Munafullah", "Ahmed", "Ahrad", "Waqas"];
console.log("Number of people invited to dinner: ".concat(members.length));
// 19: List of Sports
var favoriteSports = ["cricket", "football", "basketball", "tennis", "hockey"];
console.log("Sports that I would love to watch and play:", favoriteSports);
// 20: Football Player Object
var footballPlayer = {
    name: "Cristiano Ronaldo",
    club: "Real Madrid",
    careerGoals: 873,
    age: 39
};
console.log("".concat(footballPlayer.name, ", who plays for ").concat(footballPlayer.club, ", recently scored his ").concat(footballPlayer.careerGoals, "th goal at the age of ").concat(footballPlayer.age, "."));
// 21: Intentional Error (Corrected)
var myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers[4]); // Accessing a valid index
myNumbers[4] = 5; // Correcting the error
// 22: Conditional Tests
var Car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == 'subaru'); // True
var myCar = 'Mehran';
console.log("Is myCar == 'Mehran'? I predict True.");
console.log(myCar == 'Mehran'); // True
var isCar = 'Alto';
console.log("Is isCar == 'Alto'? I predict True.");
console.log(isCar == 'Alto'); // True
var himCar = 'corolla';
console.log("Is himCar == 'corolla'? I predict True.");
console.log(himCar == 'corolla'); // True
var hisCar = 'civic';
console.log("Is hisCar == 'civic'? I predict True.");
console.log(hisCar == 'civic'); // True
// False Statements
console.log("Is car == 'lamborghini'? I predict False.");
console.log(Car == 'lamborghini'); // False
console.log("Is car == 'revo'? I predict False.");
console.log(Car == 'revo'); // False
console.log("Is car == 'audi'? I predict False.");
console.log(Car == 'audi'); // False
console.log("Is car == 'mercedes'? I predict False.");
console.log(Car == 'mercedes'); // False
console.log("Is car == 'toyota'? I predict False.");
console.log(Car == 'toyota'); // False
// 23: More Conditional Tests
var equality = "hello";
var inequality = "world";
console.log(equality == inequality); // False
console.log(equality !== inequality); // True
var lower = "HELLO";
var upper = "hello";
console.log(lower.toLowerCase() === upper.toLowerCase()); // True
var num1 = 10;
var num2 = 5;
console.log(num1 > num2); // True
console.log(num1 < num2); // False
var x = 5;
var y = 10;
console.log(x < y && y <= x); // False
console.log(x < y || y >= x); // True
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
console.log(array.includes(6)); // False
console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False
// 24: Alien Colors #1
var alienColor = "green";
if (alienColor == "green") {
    console.log("You earned 5 points.");
}
alienColor = "red";
if (alienColor == "green") {
    // No output
}
// 25: Alien Colors #2
var alien_color = "green";
if (alien_color === "green") {
    console.log("Player just earned 5 points.");
}
else {
    console.log("Player just earned 10 points.");
}
alien_color = "red";
if (alien_color === "green") {
    console.log("Player just earned 5 points.");
}
else {
    console.log("Player just earned 10 points.");
}
// 26: Alien Colors #3
var Alien_color = "green";
if (Alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (Alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (Alien_color == "red") {
    console.log("You earned 15 points.");
}
Alien_color = "red";
if (Alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (Alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (Alien_color == "red") {
    console.log("You earned 15 points.");
}
Alien_color = "yellow";
if (Alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (Alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (Alien_color == "red") {
    console.log("You earned 15 points.");
}
// 27: Stages of Life
var age = 19;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 28: Favorite Fruit
var favoriteFruits = ["banana", "apple", "mango"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
else {
    console.log("You don't like strawberries.");
}
// 29: Hello Admin
var userNames = ["admin", "eric", "palmer", "johnson"];
userNames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
// 30: No Users
var users = ["John", "Alice", "Bob"];
function checkusers(usersList) {
    if (usersList.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        console.log("Current users:", usersList);
    }
}
checkusers(users);
users = [];
checkusers(users);
