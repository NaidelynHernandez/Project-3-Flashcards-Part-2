import React, { useState } from "react"; 

const FlashCard = ({ question, answer, feedback }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div onClick={() => setShowAnswer(!showAnswer)} className="flashcard">
      {showAnswer ? answer : question}
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default FlashCard;
