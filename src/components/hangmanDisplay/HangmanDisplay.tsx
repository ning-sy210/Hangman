import Human from "./Human";
import Stand from "./stand/Stand";

type hangmanDisplay = {
  word: string;
};

const HangmanDisplay = () => {
  return (
    <div>
      <Stand />
      <Human />
    </div>
  );
};

export default HangmanDisplay;
