console.log("Hello World")


// Task 1

const firstName ="Mats";
const lastName="Krane";

const fullName = firstName + " " + lastName;

console.log(fullName)


// Task 2

const theHouse = {
    typeOfHouse: "apartement",
    numerOfRooms: 5,
    buildingMaterial: "wood",
    houseOccupied: "no"
};

console.log(theHouse)


// Task 3

const myFavoriteBooks = [
    { bookName: 'Harry Potter and the Order of the Phoenix', },
    { bookName: 'Harry Potter and the Halfblood Prince' },
    { bookName: 'Eragon 4 book series' },
]

console.log(myFavoriteBooks)

myFavoriteBooks.forEach((myFavoriteBooks) => {
    console.log("I like" + " " + myFavoriteBooks.bookName)
})

