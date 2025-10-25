const PrivacySection = () => {
  const privacyLabel = document.createElement("label");
  privacyLabel.textContent = "Privacy";
  const privacySelect = document.createElement("select");
  privacySelect.id = "privacySelect";
  ["Public", "Private"].forEach((optionText) => {
    const option = document.createElement("option");
    option.textContent = optionText;
    option.value = optionText;
    privacySelect.appendChild(option);
  });

  const privacySection = {
    label: privacyLabel,
    input: privacySelect,
  };

  return privacySection;
};

export default PrivacySection;
