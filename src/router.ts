import MainMenu from "./pages/MainMenu";
import GameMenu from "./pages/GameMenu";

const router = (app : HTMLDivElement, path : string) => {
  app.innerHTML = '';
  switch(path) {
    case '/':
      app.append(MainMenu());
      break;
    case '/game-menu':
      app.append(GameMenu());
      break;
    case '/create-menu':
      break;
    case '/join-menu':
      break;
    case '/lobby-menu':
      break;
    case '/game-view':
      break;
    default:
      app.innerHTML = '<h1> Invalid shit </h1>';
  }
  return 0;
}

export default router;
