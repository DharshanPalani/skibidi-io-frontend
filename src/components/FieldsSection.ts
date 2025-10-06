import DifficultySection from "./DifficultySection";
import PlayerSection from "./PlayerSection";
import PrivacySection from "./PrivatySection";

const FieldsSection = () => {
  const privacySection = PrivacySection();
  const difficultySection = DifficultySection();
  const playerSection = PlayerSection();

  const fields = [
    { label: privacySection.label, input: privacySection.input },
    { label: difficultySection.label, input: difficultySection.input },
    { label: playerSection.label, input: playerSection.input },
  ];

  return fields;
};

export default FieldsSection;
