import React, { useState, useEffect } from 'react';
import {
  Card,
  // CardText,
  // CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from 'reactstrap';
import { getAllQuizQuestions, getAllQuizResults, getSingleQuizResult } from '../helpers/data/QuizData';

function Quiz() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [allResults, setAllResults] = useState([]);
  const [singleResult, setSingleResult] = useState({});
  const [startOver, setStartOver] = useState(false);

  useEffect(() => {
    getAllQuizQuestions().then((questions) => {
      setAllQuestions(questions);
      setSingleQuestion(questions[currentQuestion]);
    });
  }, [currentQuestion]);

  useEffect(() => {
    getAllQuizResults().then(setAllResults);
  }, []);

  const showResults = () => {
    if (points >= allResults[0].lowerPointRange && points <= allResults[0].upperPointRange) {
      getSingleQuizResult(1).then(setSingleResult);
    } else if (points >= allResults[1].lowerPointRange && points <= allResults[1].upperPointRange) {
      getSingleQuizResult(2).then(setSingleResult);
    } else {
      getSingleQuizResult(3).then(setSingleResult);
    }
  };

  const handleClick = (e) => {
    const buttonPoints = Number(e.target.value);
    setPoints(points + buttonPoints);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < allQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      showResults();
      setStartOver(true);
    }
  };

  const tryAgain = () => {
    setCurrentQuestion(0);
    setPoints(0);
    setStartOver(false);
  };

  return (
    <>
      <h1>Welcome To The Quiz Page</h1>
      <Card>
        <CardTitle>{singleQuestion.question}</CardTitle>
        <ButtonGroup>
          <Button
            disabled={startOver === true}
            value={3}
            onClick={handleClick}>
            Yes
          </Button>
          <Button
            disabled={startOver === true}
            value={1}
            onClick={handleClick}>
            Sometimes
          </Button>
          <Button
            disabled={startOver === true}
            value={0}
            onClick={handleClick}>
            No
          </Button>
        </ButtonGroup>
      </Card>
      {startOver ? singleResult.result : ''}
      <br />
      {startOver ? <Button onClick={tryAgain}>Try Again</Button> : ''}
    </>
  );
}

export default Quiz;
