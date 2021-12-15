import React, { useState, useEffect } from 'react';
import {
  Card,
  // CardText,
  // CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from 'reactstrap';
import { getAllQuizQuestions } from '../helpers/data/QuizData';

function Quiz() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    getAllQuizQuestions().then((questions) => {
      setAllQuestions(questions);
      setSingleQuestion(questions[currentQuestion]);
    });
  }, [currentQuestion]);

  const handleClick = (e) => {
    const buttonPoints = Number(e.target.value);
    setPoints(points + buttonPoints);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < allQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      window.alert('No more questions');
    }
    console.warn(buttonPoints, 'button');
    console.warn(points);
  };

  return (
    <>
      <h1>Welcome To The Quiz Page</h1>
      <Card>
        <CardTitle>{singleQuestion.question}</CardTitle>
        <ButtonGroup>
          <Button
            value={3}
            onClick={handleClick}>
            Yes
          </Button>
          <Button
            value={1}
            onClick={handleClick}>
            Sometimes
          </Button>
          <Button
            value={0}
            onClick={handleClick}>
            No
          </Button>
        </ButtonGroup>
      </Card>
    </>
  );
}

export default Quiz;
