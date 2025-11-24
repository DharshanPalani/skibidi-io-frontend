import api from "./api";

const useCreateRoom = async (room_privacy : boolean, room_difficulty : string, room_max_players : number) => {

  try {
    await api.post("/room/create", {room_privacy, room_difficulty, room_max_players});
  } catch(error : any) {
    
  }
}

export default useCreateRoom;
