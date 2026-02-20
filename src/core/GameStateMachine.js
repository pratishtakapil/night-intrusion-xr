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

}


startGame()
{

this.currentState = GameStates.SCENARIO_START;

this.currentScenarioIndex = 0;

this.systemIntegrity = 100;

}


makeChoice(isCorrect)
{

if(isCorrect)
{

this.currentScenarioIndex++;

if(this.currentScenarioIndex >= 3)
{

this.currentState = GameStates.VICTORY;

}

else
{

this.currentState = GameStates.SCENARIO_START;

}

}

else
{

this.systemIntegrity -= 50;

if(this.systemIntegrity <= 0)
{

this.currentState = GameStates.GAME_OVER;

}

else
{

this.currentState = GameStates.CHOICE_WRONG;

}

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