const DifficultySection = () => {
  const difficultyLabel = document.createElement("label");
  difficultyLabel.textContent = "Difficulty";
  const difficultySelect = document.createElement("select");
  difficultySelect.id = "difficultySelect";
  ["Easy", "Normal", "Hard"].forEach((level) => {
    const option = document.createElement("option");
    option.textContent = level;
    difficultySelect.appendChild(option);
  });

  const difficultySection = {
    label: difficultyLabel,
    input: difficultySelect,
  };

  return difficultySection;
};

export default DifficultySection;
