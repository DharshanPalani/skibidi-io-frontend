import "../css/PublicLobbyBarStyle.css";

const PublicLobbyList = () => {
  const list = document.createElement("div");
  list.className = "publicLobbyList";

  const lobbies = [
    { name: "Rizz guy's lobby", players: "3/8" },
    { name: "Hardcore guy's lobby", players: "6/10" },
  ];

  for (var i = 0; i < lobbies.length; i++) {
    const item = document.createElement("div");
    item.className = "lobbyItem";
    item.textContent = `${lobbies[i].name} - ${lobbies[i].players}}`;
    list.appendChild(item);
  }

  return list;
};

export default PublicLobbyList;
