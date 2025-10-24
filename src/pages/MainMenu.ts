import "../css/MainMenuStyle.css";
import usePlayerAuth from "../hooks/usePlayerAuth";

const MainMenu = () => {
  const mainMenu = document.createElement("div");
  mainMenu.className = "mainMenu";

  const rightBottom = document.createElement("div");
  rightBottom.className = "right-bottom";

  const usernameInput = document.createElement("input");
  usernameInput.placeholder = "Enter your username";

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.addEventListener("click", () => {
    usePlayerAuth(usernameInput.value);
  });

  const gameTitle = document.createElement("h1");
  gameTitle.textContent = "Skibidi.io";

  mainMenu.appendChild(gameTitle);

  rightBottom.appendChild(usernameInput);
  rightBottom.appendChild(startButton);

  mainMenu.appendChild(rightBottom);

  return mainMenu;
};

export default MainMenu;
