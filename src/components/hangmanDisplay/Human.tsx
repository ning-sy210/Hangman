type human = {
  wrongGuesses: number;
};

const Human = ({ wrongGuesses }: human) => {
  return (
    <div id="human">
      <div
        id="rope"
        className={`black-fill ${wrongGuesses < 5 && "hidden"}`}
      ></div>
      <div id="human-head" className={`${wrongGuesses < 1 && "hidden"}`}></div>
      <div
        id="human-body"
        className={`black-fill ${wrongGuesses < 2 && "hidden"}`}
      ></div>
      <div
        id="human-arms"
        className={`human-limbs ${wrongGuesses < 3 && "hidden"}`}
      ></div>
      <div
        id="human-legs"
        className={`human-limbs ${wrongGuesses < 4 && "hidden"}`}
      ></div>
    </div>
  );
};

export default Human;
