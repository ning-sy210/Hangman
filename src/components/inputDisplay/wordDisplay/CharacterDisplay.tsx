type charDisplay = {
  letter: string;
  show: boolean;
};

const CharacterDisplay = ({ letter, show }: charDisplay) => {
  return <div className={`vh-center char-display`}>{show && letter}</div>;
};

export default CharacterDisplay;
