/*
 * DOCU: Simulates a 10-round battle between two characters (Thor and Zeus). 
 *       Each character has a name, HP (health points), and strength. 
 *       On each round, both characters attack each other with random damage based on their strength.
 *       HP is reduced according to damage, and the final result declares a winner or a draw.
 * @inputs {object} thor - Character object with name, hp, strength, and attack method
 * @inputs {object} zeus - Character object with name, hp, strength, and attack method
 * @process Loops through 10 rounds; each round executes attacks and updates HP
 * @output Logs each attack, HP status per round, and final battle result to the console
 *
 * Last Updated: 2026-02-10
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */
const thor = {
    name: "Thor",
    hp: 100,
    strength: 15,
    attack: function () {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

const zeus = {
    name: "Zeus",
    hp: 100,
    strength: 12,
    attack: function () {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

for (let round = 1; round <= 10; round++) {
    console.log(`=== Round ${round} ===`);

    let thorDamage = thor.attack();
    zeus.hp -= thorDamage;
    if (zeus.hp < 0) zeus.hp = 0;
    console.log(`${thor.name} attacks ${zeus.name} and does ${thorDamage} damage!`);
    console.log(`${thor.name} HP: ${thor.hp} | ${zeus.name} HP: ${zeus.hp}`);

    let zeusDamage = zeus.attack();
    thor.hp -= zeusDamage;
    if (thor.hp < 0) thor.hp = 0;
    console.log(`${zeus.name} attacks ${thor.name} and does ${zeusDamage} damage!`);
    console.log(`${thor.name} HP: ${thor.hp} | ${zeus.name} HP: ${zeus.hp}`);

    console.log("");
}

console.log("=== Battle Result ===");
if (thor.hp > zeus.hp) {
    console.log(`${thor.name} WINS the battle!`);
} else if (zeus.hp > thor.hp) {
    console.log(`${zeus.name} WINS the battle!`);
} else {
    console.log("The battle ends in a DRAW!");
}
