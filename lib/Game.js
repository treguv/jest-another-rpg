const inquirer = require("inquirer");
const Enemy = require("../lib/Enemy");
const Player = require("../lib/Player");
function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

module.exports = Game;

Game.prototype.initializegame = function () {
  this.enemies.push(new Enemy("goblin", "sword"));
  this.enemies.push(new Enemy("orc", "baseball bat"));
  this.enemies.push(new Enemy("skeleton", "axe"));
  this.currentEnemy = this.enemies[0];
  //Get the users name

  inquirer
    .prompt({
      type: "text",
      name: "name",
      message: "What is your name?",
    })
    .then(({ name }) => {
      this.player = new Player(name);
      this.startNewBattle();
    });
};
