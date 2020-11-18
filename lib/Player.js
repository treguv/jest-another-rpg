const Potion = require("../lib/Potion");
function Player(name = "") {
  //this sets it to a default empty string if no name is provided
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.inventory = [new Potion("health"), new Potion()];
}
module.exports = Player;
//Using this.getStats = .... will create a new method for each instance
//prototype will make one main one and all will inherit
// return player stats
Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};
//return inventory
Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.health}`;
};

Player.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Player.prototype.reduceHealth = function (health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};
