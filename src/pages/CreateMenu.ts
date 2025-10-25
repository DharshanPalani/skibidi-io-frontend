import "../css/CreateMenuStyle.css";

import FieldsSection from "../components/FieldsSection";

import useCreateRoom from "../hooks/useCreateRoom";

const CreateMenu = () => {
  const createMenu = document.createElement("div");
  createMenu.className = "createMenu";

  const title = document.createElement("h2");
  title.textContent = "Create Room";
  createMenu.appendChild(title);

  const form = document.createElement("div");
  form.className = "formContainer";

  const fields = FieldsSection();

  for (var i = 0; i < fields.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "formField";
    wrapper.appendChild(fields[i].label);
    wrapper.appendChild(fields[i].input);
    form.appendChild(wrapper);
  }

  createMenu.appendChild(form);

  const createButton = document.createElement("button");
  createButton.className = "createButton";
  createButton.textContent = "Create Room";

  createButton.addEventListener('click', () => {
    const privacySelectElement = document.getElementById('privacySelect') as HTMLSelectElement;
    const privacySelectedValue = privacySelectElement.value;
    const isPrivate = privacySelectedValue === "Private";

    const difficultySelectElement = document.getElementById('difficultySelect') as HTMLSelectElement;

    const maxPlayersInputElement = document.getElementById('maxPlayers') as HTMLInputElement;

    useCreateRoom(isPrivate, difficultySelectElement.value, Number(maxPlayersInputElement.value));
  });

  createMenu.appendChild(createButton);

  return createMenu;
};

export default CreateMenu;
