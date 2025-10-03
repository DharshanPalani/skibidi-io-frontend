import '../css/MainMenuStyle.css';

const MainMenu = () => {
  const mainMenu = document.createElement('div');
  const usernameInput = document.createElement('input');
  const startButton = document.createElement('button');
  const gameTitle = document.createElement('h1');
 
  const rightBottom = document.createElement('div');
  rightBottom.className = 'right-bottom';

  mainMenu.className = 'mainMenu';
  
  startButton.textContent = 'Start';

  usernameInput.placeholder = 'Enter your username';

  gameTitle.textContent = "Skibidi.io";
  

  mainMenu.appendChild(gameTitle);
  rightBottom.appendChild(usernameInput);
  rightBottom.appendChild(startButton);

  mainMenu.appendChild(rightBottom);

  return mainMenu;
}


export default MainMenu;
