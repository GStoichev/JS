
var timer = null;

// attackers and deffenders should be arrays
function Battle(defender, attacker) {
    this.defender = defender;
    this.attacker = attacker;
}


Battle.prototype.Start = function Start() {
    //this.Preparation();

    timer = setInterval(() => {
        this.StartRound()
    }
    ,1000);
}

Battle.prototype.Preparation =  function Preparation() {
    
}

Battle.prototype.StartRound = function StartRound() {
    //pick random unit

    this.attacker.AttackedBy(this.defender);
    this.defender.AttackedBy(this.attacker);

    if(this.attacker.isDead() || this.defender.isDead())
    {
        //stop battle;
        clearInterval(timer);
        return;
    }

    battleStatus(this.attacker,this.defender);
    
}

function battleStatus(attacker, defender) {
    console.log(`Attacker : Health ${attacker.health} `);
    console.log(`Deffender : Health ${defender.health} `)
}

function initiative(attacker, defender) {
    return defender;
}

module.exports = Battle;