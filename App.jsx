import './App.css';
import FlashCard from './components/FlashCard';
import { useState } from 'react';

const App = () => {
  const cards = [
    { question: "What ancient civilization is known for creating the first known writing system, called cuneiform?", answer: "The Sumerians" },
    { question: "What is the only species of bird known to be able to fly backwards?", answer: "The hummingbird" },
  ];

  const [currentCard, setCurrentCard] = useState(0);  
  const [guess, setGuess] = useState(''); 
  const [feedback, setFeedback] = useState('');  

  const handleSubmit = () => {
    if (guess.toLowerCase() === cards[currentCard].answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
  };

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);  
    setGuess('');
    setFeedback('');
  };


  const handleBack = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length); 
    setGuess('');
    setFeedback('');
  };

  return (
    <div className="App"> 
      <h1 className="homemade-apple-regular">The Ultimate Trivia</h1>
      <p className="homemade-apple-regular">Test your Knowledge</p>
      <div className="flipcard">
        <FlashCard question={cards[currentCard].question} answer={cards[currentCard].answer} feedback={feedback} />
        <input 
          type="text" 
          placeholder="Enter your guess..." 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
        />

        <button onClick={handleSubmit}>Submit</button>

        <p>{feedback}</p>

        <button onClick={handleBack}>Back</button>


        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
