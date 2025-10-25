const PlayerSection = () => {
  const playersLabel = document.createElement("label");
  playersLabel.textContent = "Max Players";
  const playersInput = document.createElement("input");
  playersInput.type = "number";
  playersInput.value = "2";
  playersInput.id = "maxPlayers"
  const playerSection = {
    label: playersLabel,
    input: playersInput,
  };

  return playerSection;
};

export default PlayerSection;
