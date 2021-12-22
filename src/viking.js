// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

  }
  attack() {
    return this.strength
  }

  receiveDamage(theDamage) {
    
    this.health -= theDamage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(theDamage) {

    super.receiveDamage(theDamage);

    if(this.health > 0  ) {
      return  `${this.name} has received ${theDamage} points of damage`;

    } else  {
      return `${this.name} has died in act of combat`;
    }

  }
  
  battleCry(){
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);

    if(this.health > 0  ) {
      return  `A Saxon has received ${theDamage} points of damage`;

    } else  {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {

   vikingArmy = [];
   saxonArmy = []; 

  addViking(addVik) { 
    
    this.vikingArmy.push(addVik);
  }

  addSaxon(addSax) {
    this.saxonArmy.push(addSax)
  }

  vikingAttack(){
    const rVik = Math.floor(Math.random()*this.vikingArmy.length);
    const rSax = Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking = this.vikingArmy[rVik];
    const randomSaxon = this.saxonArmy[rSax];

    const damagedRec = randomSaxon.receiveDamage(randomViking.strength)

  if(randomSaxon.health <= 0) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon))
  }
    return damagedRec
  }

  saxonAttack() {
    const rVik = Math.floor(Math.random()*this.vikingArmy.length);
    const rSax = Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking = this.vikingArmy[rVik];
    const randomSaxon = this.saxonArmy[rSax];

    const damagedRec = randomViking.receiveDamage(randomSaxon.strength)

  if(randomViking.health <= 0) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking))
  }
    return damagedRec

  }

  showStatus() {
    if(this.saxonArmy.length === 0 ) {
      return "Vikings have won the war of the century!";
    } else if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
      return "Vikings and Saxons are still in the thick of battle.";
    }

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
