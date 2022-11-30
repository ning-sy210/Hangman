import Human from "./Human";
import HangDevice from "./stand/HangDevice";

type hangmanDisplay = {
  word: string;
};

const HangmanDisplay = () => {
  return (
    <div>
      <div className="d-flex">
        <HangDevice />
        <Human />
      </div>
      <div id="floor" className="black-fill"></div>
    </div>
  );
};

export default HangmanDisplay;
