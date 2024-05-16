// 1:  Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var person = "Hi Abdullah";
var massage = " Hello! ".concat(person, " how are you?");
console.log(massage);
// 2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var men = "Abdullah";
console.log(men.toLowerCase());
console.log(men.toUpperCase());
console.log(men.charAt(0).toUpperCase() + men.slice(1).toLowerCase());
// 3: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"; //
console.log("\"Albert Einstien once said,\"A person who never made a mistake never tried anything new.\"");
// 4: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousperson = "Albert Einstein";
var message = "\"".concat(famousperson, " once  said,\"A person who  never made a mistake never tried something new.\"");
console.log(message);
// 5: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var namee = "\t\n  Abdullah  \t\n";
console.log(namee);
console.log(namee.trim());
// 6: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
//AND//
// 7: You should create four lines that look like this:
//console.log(5 + 3)Your output should simply be four lines with the number 8 appearing once on each line//
console.log(4 + 4); //addition
console.log(9 - 1); //subtraction
console.log(8 * 1); //multiplication
console.log(16 / 2); //division
// 8: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message?//
var favoritenumber = 7;
console.log("My favorite number is  ".concat(favoritenumber));
// 9: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
//Abdullah 4/3/2024
//this keyword use to store any type of data,it may be numbers or text etc. 
var mynumber = 7;
console.log(mynumber);
// 10: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["Abdullah", "Mohammed", "Ahmad", "Mahmoud"];
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);
// 11: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Abdullah", "Mohammed", "Ahmad", "Mahmoud"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello my friend" + name_1);
}
// 12: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["car", "motorcycle", "bike", "bus"];
for (var _a = 0, transportation_1 = transportation; _a < transportation_1.length; _a++) {
    var transport = transportation_1[_a];
    console.log("I would like to own a " + transport);
}
// 13: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestlist = ["Abdullah", "Mohammed", "Ahmad", "Mahmoud"];
for (var _b = 0, guestlist_1 = guestlist; _b < guestlist_1.length; _b++) {
    var guest = guestlist_1[_b];
    console.log("Hello my friend ".concat(guest, " would you like to have dinner with me tonight"));
}
// 14: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var Guests = ["Abdullah", "Mohammed", "Ahmad", "Mahmoud"];
for (var _c = 0, Guests_1 = Guests; _c < Guests_1.length; _c++) {
    var guest = Guests_1[_c];
    console.log("Hello my friend" + guest);
}
Guests.splice(2, 1, "Ahmed");
for (var _d = 0, Guests_2 = Guests; _d < Guests_2.length; _d++) {
    var guest = Guests_2[_d];
    console.log("Hello my friend ".concat(guest, " would you like to have dinner with me tonight"));
}
var guests = ["Abdullah", "Mohammed", "Ahmed"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var unableToAttend = "Ahmed";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "munafullah";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (newGuest) {
    console.log("Dear ".concat(newGuest, ", would you like to join me for dinner?"));
});
// 15: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var gues_ts = ["Abdullah", "Munafullah", "Ahmed"];
guests.unshift("Mohammed");
guests.push("Ahrad");
guests.splice(2, 0, "waqas");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to have dinner with us today?"));
});
