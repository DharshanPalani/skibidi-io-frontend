import "../css/GameMenuStyle.css";
import PublicLobbyList from "../components/PublicLobbyList";
import router from "../router";

const GameMenu = () => {
  const gameMenu = document.createElement("div");
  gameMenu.className = "gameMenu";

  const leftSide = document.createElement("div");
  leftSide.className = "left-side";
  leftSide.appendChild(PublicLobbyList());

  const rightSide = document.createElement("div");
  rightSide.className = "right-side";

  const joinButton = document.createElement("button");
  joinButton.className = "joinButton";
  joinButton.textContent = "Join";

  const createButton = document.createElement("button");
  createButton.className = "createButton";
  createButton.textContent = "Create";

  createButton.addEventListener('click', () => {
    router("create-menu");
  });


  rightSide.appendChild(joinButton);
  rightSide.appendChild(createButton);

  gameMenu.appendChild(leftSide);
  gameMenu.appendChild(rightSide);

  return gameMenu;
};

export default GameMenu;
