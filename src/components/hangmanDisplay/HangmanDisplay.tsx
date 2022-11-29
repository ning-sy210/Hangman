import Human from "./Human";
import Stand from "./stand/Stand";

type hangmanDisplay = {
  word: string;
};

const HangmanDisplay = () => {
  return (
    <div className="d-flex">
      <Stand />
      <Human />
    </div>
  );
};

export default HangmanDisplay;
