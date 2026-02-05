// Task 1
let book = {
    title: "Can't Hurt Me",
    author: "David Goggins",
    pages: 366,
    isRead: false,
};

console.log("Using dot notation:");
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

console.log("Using bracket notation:");
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

book.isRead = true;
book.genre = "Autobiography";

console.log(book);



// Task 2
let movies = [
    {
        title: "The Amazing Spider-Man",
        director: "Marc Webb",
        year: 2012,
    },
    {
        title: "The Notebook",
        director: "Nick Cassavetes",
        year: 2004,
    },
    {
        title: "Pokemon: Detective Pikachu",
        director: "Rob Letterman",
        year: 2019,
    },
];

console.log(movies[1].title);

movies.push({
    title: "Iron Man",
    director: "Jon Favreau",
    year: 2008,
});

movies[0].year = 2023;

console.log(movies);



// Task 3
let student = {
    name: "Errol",
    age: 20,
    subjects: ["Math", "Science", "English"],
};

console.log(student.subjects[1]);
student.subjects.push("OOP");

console.log(student);



// Task 4 - Challenge Task
let recipe = {
    name: "Adobo",
    ingredients: [
        {
            name: "Chicken",
            quantity: "1kg",
        },
        {
            name: "Soy Sauce",
            quantity: "1/2 cup",
        },
        {
            name: "Vinegar",
            quantity: "1/4 cup",
        },
        {
            name: "Garlic",
            quantity: "5 cloves",
        },
        {
            name: "Bay Leaf",
            quantity: "2 pcs",
        },
        {
            name: "Peppercorn",
            quantity: "1 tsp",
        },
        {
            name: "Sugar",
            quantity: "1 tbsp",
        },
        {
            name: "Salt",
            quantity: "1 tsp",
        },
        {
            name: "Water",
            quantity: "1/2 cup",
        },
        {
            name: "Oil",
            quantity: "2 tbsp",
        },
    ],
    isVegitarian: false,
};

recipe.ingredients.push({
    name: "Onion",
    quantity: "1 pc",
});

console.log(recipe.ingredients[1].name);
console.log(recipe);
