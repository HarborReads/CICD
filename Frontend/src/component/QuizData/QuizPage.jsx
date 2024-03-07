import React, { useState } from 'react';
import Questions from './QuestionsData'; // Assuming Questions.js contains your array of questions

function Quiz(){
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === Questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
  };

  const shuffledOptions = Questions[currentQuestion].options.sort(() => Math.random() - 0.5);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="maincontainer w-[400px] md:w-[1000px] h-[725px] md:h-[725px] bg-black flex flex-col justify-between overflow-y-auto">
    <div className="container mx-auto">
      {currentQuestion < 5 ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{Questions[currentQuestion].questions}</h1>
          <div className="mb-4">
            {shuffledOptions.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={option} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
          <p className="mb-4">Your score: {score}/5</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Quiz;
