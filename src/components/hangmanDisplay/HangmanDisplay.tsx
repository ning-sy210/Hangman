import Human from "./Human";
import HangDevice from "./HangDevice";

type hangmanDisplay = {
  wrongGuesses: number;
};

const HangmanDisplay = ({ wrongGuesses }: hangmanDisplay) => {
  return (
    <div>
      <div className="d-flex">
        <HangDevice />
        <Human wrongGuesses={wrongGuesses} />
      </div>
      <div id="floor" className="black-fill"></div>
    </div>
  );
};

export default HangmanDisplay;
