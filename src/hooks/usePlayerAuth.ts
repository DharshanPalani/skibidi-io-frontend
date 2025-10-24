import router from "../router";
import api from "./api";
import { returnApp } from "./returnApp";
import { connectSocket } from "./socket";

interface VerifyPlayerPayload {
  message: string;
  verify: boolean;
  uuid: string;
  username: string;
  player: Record<string, string>;
}

const usePlayerAuth = async (username: string) => {
  if (!username) return alert("Enter a username");

  try {
    const { data } = await api.post("/auth/register", { username });

    if (!data.registered) {
      return alert(data.message || "Registration failed");
    }

    alert(data.message);

    const { data: verifyData } = await api.get<VerifyPlayerPayload>(
      "/auth/verify"
    );

    if (!verifyData.verify) {
      return alert("Player verification failed");
    }

    const socket = connectSocket();
    socket.emit("authenticate", { uuid: verifyData.uuid });

    window.history.pushState({}, "", "/game-menu");
    router(returnApp(), "/game-menu");
  } catch (error: any) {
    console.error(error);
    alert(
      error.response?.data?.message || "An error occurred during registration."
    );
  }
};

export default usePlayerAuth;
