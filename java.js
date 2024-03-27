function Character(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackfoot = ["back kick","Side kick","Roundhouse kick"];
    this.attackhand = ["Jab","Cross","Hook","Uppercut"];
    this.attackDamage = attackDamage;
}

Character.prototype.attackSkill = function() {
    let attackType = Math.random() < 0.5 ? this.attackfoot : this.attackhand;
    return attackType[Math.floor(Math.random() * attackType.length)];
}

Character.prototype.randomDamage = function() {
    return this.attackDamage[Math.floor(Math.random() * this.attackDamage.length)];
}

Character.prototype.attack = function(params){
    let damage = this.randomDamage();
    params.health -= damage;
    console.log(`${this.name} griff ${params.name} mit einem ${this.attackSkill()} an und fügte ${damage} Schaden zu.`);
}

Character.prototype.live = function() {
    this.health <= 0 ? console.log(`${this.name} ist am Boden und kann nicht mehr aufstehen `) : console.log(`${this.name} Gesundheit beträgt jetzt ${this.health}`);
}

let attackerName = process.argv[2];
let versus = process.argv[3];
let defenderName = process.argv[4];

let paul = new Character("Paul", 300, [30,45,60,15,25]);
let waldtiere= new Character("Waldtiere", 290, [45,15,35,25,30]);
let junge = new Character("Junge", 200, [5,10,8,17,25]);
let hexe = new Character("Hexe", 350, [10,15,35,25,45]);


let characters = { paul,versus,hexe,junge,waldtiere };

    

if(characters[attackerName]|| characters[defenderName]){
    console.log('Der Gegner ist noch nicht Kampfbereit')}else{
            console.log('Der Kämpfer ist nicht verfügbar');
        }

if(characters[attackerName] && characters[defenderName]){
    for(i=0; i < characters[attackerName].health; i++){
        if (characters[attackerName].health >= 0 && characters[defenderName].health >= 0) {
            characters[attackerName].attack(characters[defenderName]);
            characters[defenderName].live();
        }
        if (characters[attackerName].health >= 0 && characters[defenderName].health >= 0) {
            characters[defenderName].attack(characters[attackerName]);
            characters[attackerName].live();
        

        } 
       
        }}

    
    

