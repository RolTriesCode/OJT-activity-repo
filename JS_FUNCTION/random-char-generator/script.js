// 1. Create a basic character object
const character = {
    name: "Hero",
    health: 100,

    // 3. Method to randomize health
    randomizeHealth: function () {
        character.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }
};

// 2. Add a random class
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = classes[Math.floor(Math.random() * classes.length)];

// 4. Assign a random special ability
const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = abilities[Math.floor(Math.random() * abilities.length)];

// 5. Function to generate a new random character
function generateCharacter(name) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

    const newCharacter = {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],

        // 6. Battle method
        battle: function (otherCharacter) {
            const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            const previousHealth = otherCharacter.health;
            otherCharacter.health -= damage;
            if (otherCharacter.health < 0) otherCharacter.health = 0;

            console.log(`Character ${character.name} attacked Character ${otherCharacter.name} with ${character.specialAbility}. ${otherCharacter.name}'s health dropped from ${previousHealth} to ${otherCharacter.health}.`);
        }
    };

    return newCharacter;
}

// 7. Function to generate multiple characters
function generateMultipleCharacters(count) {
    const charactersArray = [];
    for (let i = 0; i < count; i++) {
        charactersArray.push(generateCharacter());
    }
    return charactersArray;
}

// Testing
console.log("\nSingle random character:");
console.dir(generateCharacter());

console.log("\nNamed character:");
console.dir(generateCharacter("Drake"));

console.log("\nMultiple characters:");
console.dir(generateMultipleCharacters(5));

// Battle simulation test
const char1 = generateCharacter("Zane");
const char2 = generateCharacter("Elara");
char1.battle(char2);
