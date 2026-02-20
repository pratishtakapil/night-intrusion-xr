// GameManager.js

import GameStateMachine, { GameStates } from "./GameStateMachine";

class GameManager {

constructor()
{

this.stateMachine = new GameStateMachine();

}


startGame()
{

this.stateMachine.startGame();

console.log("Game Started");

console.log("State:", this.stateMachine.getState());

}


submitChoice(isCorrect)
{

this.stateMachine.makeChoice(isCorrect);

console.log("New State:", this.stateMachine.getState());

console.log("Integrity:", this.stateMachine.getIntegrity());

console.log("Scenario:", this.stateMachine.getScenarioIndex());

}


getGameState()
{

return this.stateMachine.getState();

}


getIntegrity()
{

return this.stateMachine.getIntegrity();

}


getScenarioIndex()
{

return this.stateMachine.getScenarioIndex();

}

}


const gameManager = new GameManager();

export default gameManager;