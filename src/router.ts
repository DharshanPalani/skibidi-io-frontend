import MainMenu from "./pages/MainMenu";
import GameMenu from "./pages/GameMenu";
import CreateMenu from "./pages/CreateMenu";
import { returnApp } from "./hooks/returnApp";
const router = (path : string) => {
  const app : HTMLDivElement = returnApp(); 
  app.innerHTML = '';
  switch(path) {
    case '':
      app.append(MainMenu());
      break;
    case 'game-menu':
      app.append(GameMenu());
      break;
    case 'create-menu':
      app.append(CreateMenu());
      break;
    case 'join-menu':
      break;
    case 'lobby-menu':
      break;
    case 'game-view':
      break;
    default:
      app.innerHTML = '<h1> Invalid shit </h1>';
  }
  return 0;
}

export default router;
