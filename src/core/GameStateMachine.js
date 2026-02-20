// src/core/GameStateMachine.js

export const GameStates = {

  IDLE: "IDLE",

  SCENARIO_START: "SCENARIO_START",

  WAITING_FOR_CHOICE: "WAITING_FOR_CHOICE",

  CHOICE_CORRECT: "CHOICE_CORRECT",

  CHOICE_WRONG: "CHOICE_WRONG",

  GAME_OVER: "GAME_OVER",

  VICTORY: "VICTORY"

};



class GameStateMachine {

  constructor()
  {
    this.currentState = GameStates.IDLE;

    this.currentScenarioIndex = 0;

    this.systemIntegrity = 100;

    this.maxScenarios = 3; // you can increase later
  }



  startGame()
  {
    this.currentState = GameStates.SCENARIO_START;

    this.currentScenarioIndex = 0;

    this.systemIntegrity = 100;

    console.log("GameStateMachine initialized");
  }



  makeChoice(isCorrect)
  {

    // Prevent actions after game ends
    if (
      this.currentState === GameStates.GAME_OVER ||
      this.currentState === GameStates.VICTORY
    )
    {
      console.log("Game already finished");

      return;
    }



    if (isCorrect)
    {
      this.handleCorrectChoice();
    }
    else
    {
      this.handleWrongChoice();
    }

  }



  handleCorrectChoice()
  {

    this.currentScenarioIndex++;

    this.currentState = GameStates.CHOICE_CORRECT;



    if (this.currentScenarioIndex >= this.maxScenarios)
    {
      this.currentState = GameStates.VICTORY;

      console.log("Player WON");
    }
    else
    {
      this.currentState = GameStates.SCENARIO_START;
    }

  }



  handleWrongChoice()
  {

    this.systemIntegrity -= 50;



    // Clamp to 0
    if (this.systemIntegrity <= 0)
    {
      this.systemIntegrity = 0;

      this.currentState = GameStates.GAME_OVER;

      console.log("Player LOST");
    }
    else
    {
      this.currentState = GameStates.CHOICE_WRONG;
    }

  }



  getState()
  {
    return this.currentState;
  }



  getIntegrity()
  {
    return this.systemIntegrity;
  }



  getScenarioIndex()
  {
    return this.currentScenarioIndex;
  }

}



export default GameStateMachine;