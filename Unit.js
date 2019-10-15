//usually creating an empty constructor and then adding properties to proto should be better idea
function Unit(name, dmg, armor, health, range, weapon) {
    this.name = name;
    this.dmg = dmg;
    this.armor = armor;
    this.health = health;
    this.range = range;
    this.weapon = weapon;
}

Unit.prototype.AttackedBy = function AttackedBy(enemy) {
    let potentialDamage =  enemy.GetDmg() - this.armor;
    let damageDealt = potentialDamage > 1 ? potentialDamage : 1;
    this.health = this.health - damageDealt;
    if(this.isDead())
    {
        this.Die();
    }
}

Unit.prototype.HealedBy = function HealedBy(ally) {
    //TO DO: add max healt and heal unit with ally healing power, but not over max health
}

Unit.prototype.GetDmg = function GetDmg() {
    return this.dmg;
}

Unit.prototype.isDead = function IsDead() {
    return this.health <= 0;
}

Unit.prototype.Die = function Die() {
    //somehow delete that data
    console.log(`${this.name} is dead`);
}

module.exports = Unit;