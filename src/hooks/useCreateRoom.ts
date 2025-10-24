import Difficulty from "../enums/Difficulty";

const useCreateRoom = (isPrivate : boolean, difficulty : Difficulty, maxPlayers : number) => {
  if(difficulty == Difficulty.Easy) {
    alert("Grow up lamo!");
  }
}

export default useCreateRoom;
