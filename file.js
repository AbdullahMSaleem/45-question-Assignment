//31:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["John", "Alice", "Bob", "mary", "Steve"];
var new_users = ["john", "Alice", "George", "michael", "steve"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
// 32:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else if (number === 4) {
        console.log("".concat(number, "th"));
    }
    else if (number === 5) {
        console.log("".concat(number, "th"));
    }
    else if (number === 6) {
        console.log("".concat(number, "th"));
    }
    else if (number === 7) {
        console.log("".concat(number, "th"));
    }
    else if (number === 8) {
        console.log("".concat(number, "th"));
    }
    else if (number === 9) {
        console.log("".concat(number, "th"));
    }
});
// 33: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizzas = ["pepperoni", "cheese", "veggie"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
// 34: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Dog", "cat", "rabbit",];
animals.forEach(function (animal) {
    console.log("".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
// 35: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and the message on it is ").concat(message, "."));
}
make_shirt("L", "Hello World");
// 36:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function Buiild_paint(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, " and the message on it is ").concat(message, "."));
}
Buiild_paint();
Buiild_paint("small");
Buiild_paint("medium", "make your coding easy with typescript");
// 37:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("lahore");
describe_city("Rome", "Italy");
// 39:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("lahore", "Pakistan"));
console.log(city_country("Rome", "Italy"));
// 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks,
    };
    return album;
}
console.log(make_album("The Beatles", "Abbey Road"));
console.log(make_album("Pink Floyd", "The Dark Side of the Moon"));
console.log(make_album("Queen", "A Night at the Opera", 12));
//41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
//42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++)
        magicians[i] = "the Great ".concat(magicians[i]);
}
make_great(magicians);
show_magicians(magicians);
// 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
    return magicians;
}
var great_magicians = make_great(Magicians);
show_Magicians(Magicians);
show_Magicians(great_magicians);
//44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(item1, item2, item3, item4, item5) {
    var sandwich = [item1, item2, item3, item4, item5];
    console.log(sandwich);
}
sandwich("ham", "cheese", "tomato", "onion", "lettuce");
sandwich("ham", "cheese", "tomato", "onion");
sandwich("ham", "cheese", "tomato");
// 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, model, color, feature) {
    var car = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        feature: feature,
    };
    return car;
}
console.log(car("Toyota", "Camry", "red", "sunroof"));
