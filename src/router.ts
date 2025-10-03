import Menu from "./views/menu";
import GameMenu from "./views/gameMenu";

const router = (app : HTMLDivElement, path : string) => {
  app.innerHTML = '';
  switch(path) {
    case '/':
      app.innerHTML = '<h1> Home </h1>';
      break;
    case '/menu':
      app.append(Menu());
      break;
    case '/game-menu':
      app.appendChild(GameMenu());
      break;
    default:
      app.innerHTML = '<h1> Invalid shit </h1>';
  }
  return 0;
}

export default router;
