import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookChat(props) {
  const [question, setQuestion] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [response, setResponse] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    startConversation();
  }, []);

  const startConversation = async () => {
    try {
      const response = await axios.post('http://localhost:3001/chat/bookChat/startConversation');
      setQuestion(response.data.question);
    } catch (error) {
      console.error(error);
    }
  };

  const generateResponse = async () => {
    try {
      const response = await axios.post('http://localhost:3001/chat/bookChat/generateResponse', {
        userResponse,
        questionAsked: question,
        questionIndex
      });

     // Set the bot response in the ChatBot component
     props.setBotResponse(response.data.response);

      setResponse(response.data.response);
      setQuestion(response.data.question);
      setQuestionIndex(response.data.questionIndex);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserResponse = () => {
    // Code to handle user response input
    generateResponse();
  };
}

export default BookChat;
