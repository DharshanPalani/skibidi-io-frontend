import "../css/CreateMenuStyle.css";

import FieldsSection from "../components/FieldsSection";

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
  createMenu.appendChild(createButton);

  return createMenu;
};

export default CreateMenu;
