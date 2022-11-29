type charDisplay = {
  letter: string;
  show: boolean;
};

const CharacterDisplay = ({ letter, show }: charDisplay) => {
  return (
    <div className={`vh-center char-display`}>
      <span>{show && letter}</span>
    </div>
  );
};

export default CharacterDisplay;
