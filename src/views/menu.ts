const Menu = () => {
  const menu = document.createElement('div');
  menu.id = 'menu';

  const msg = document.createElement('p');

  const playButton = document.createElement('input');
  playButton.type = 'button';
  playButton.className = 'joinBtn';
  playButton.value = 'Click to play!';
  playButton.addEventListener("click", () => {
    msg.innerText = "Disconnected"
  })

  menu?.appendChild(msg);
  menu?.appendChild(playButton);

  return menu;
}


export default Menu;
