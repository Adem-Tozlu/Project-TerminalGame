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




            
        

if(characters[attackerName] && characters[defenderName]){
    for(i=0; i < 100; i++){
        if (characters[attackerName].health >= 0 && characters[defenderName].health >= 0) {
            characters[attackerName].attack(characters[defenderName]);
            characters[defenderName].live();

          
                if(characters[defenderName].health <30 && characters[defenderName].health > 0){
                    console.log(`${characters[defenderName].name} kann kaum auf den beinen stehen.`)}
        }
        if (characters[attackerName].health >= 0 && characters[defenderName].health >= 0) {
            characters[defenderName].attack(characters[attackerName]);
            characters[attackerName].live();

            
            if(characters[attackerName].health <30 && characters[attackerName].health > 0){
                console.log(`${characters[attackerName].name} kann kaum auf den beinen stehen.`)}
    
               
        

        } 

        
       
       
        }}
        

        if(characters[attackerName] && !characters[defenderName]){
        console.log('Der Gegner ist noch nicht Kampfbereit')}
        
        if(!userInputArr && !characters[defenderName]){
        console.log('Bitte geben Sie einen gültigen Charakter ein')
        
    }
       
      

        

        if(paul.health <= 0){
            console.log(`Du bist tot. \n\nG\nA\nM\nE \n\nO\nV\nE\nR\n\n!\n`);

        }
        if(hexe.health <= 0){
            console.log(`Du rettest die Kinder und der Tag ist gerettet. Herzlichen Glückwunsch! 
            ----The End----`);
        }
        if(waldtiere.health <= 0){
            console.log(`Du hast überlebt. Gehe in Richtung Lebkuchenhaus oder zum Weg. Gib ein hexenhaus oder weg.`);
        }
        if(junge.health <= 0){
            console.log(`Der Junge war schwächer. Vielleicht war es so ,weil er viel kleiner als du ist. Und vielleicht war er einfach kein Sieger. Du kannst nun nur in zwei Richtungen. Gib ein feste(vor) oder start(zurück)`);
        }


        //
    

