import api from "./api";

type registerResponsePayload =  {
  message : string,
  registered : boolean
}


const registerPlayer = async (username: string) => {
  if (!username) {
    alert("Enter a username");
    return;
  }

  try {
    const { data } = await api.post<registerResponsePayload>("/auth/register", { username });

    if (data.registered) {
      alert(data.message);
      window.location.href = "/game-menu";
    } else {
      alert(data.message || "Registration failed.");
    }
  } catch (error: any) {
    alert(error.response?.data?.message || "An error occurred during registration.");
  }
};

export default registerPlayer;

