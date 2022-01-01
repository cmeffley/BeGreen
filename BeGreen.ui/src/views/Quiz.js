import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { getAllQuizQuestions, getAllQuizResults, getSingleQuizResult } from '../helpers/data/QuizData';
import { signInUser } from '../helpers/auth';

const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 24%;
`;

const QuizButton = styled.button`
  background-color: #BC4749;
  padding: ${(props) => props.btnSizeP || ''};
  margin: ${(props) => props.btnSizeM || ''};
  font-size: ${(props) => props.textSize || ''};
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.btnColor || '#A7C957'};
  }
`;

function Quiz() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [allResults, setAllResults] = useState([]);
  const [singleResult, setSingleResult] = useState({});
  const [startOver, setStartOver] = useState(false);
  const history = useHistory();

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

  const signInAndGo = () => {
    signInUser();
    history.push('/');
  };

  return (
    <>
      <h1 style={{ color: '#fff' }}>How Environmentally Friendly Are You?</h1>
      <h2 style={{ color: '#fff' }}>Take the Quiz and Find Out!</h2>
      <br />
      <br />
      <QuizContainer>
      <Card className='quizCard'>
        <CardBody>
        <CardTitle>{singleQuestion.question}</CardTitle>
        <ButtonContainer>
          <QuizButton
            disabled={startOver === true}
            value={3}
            onClick={handleClick}>
            Yes
          </QuizButton>
          <QuizButton
            disabled={startOver === true}
            value={1}
            onClick={handleClick}>
            Sometimes
          </QuizButton>
          <QuizButton
            disabled={startOver === true}
            value={0}
            onClick={handleClick}>
            No
          </QuizButton>
        </ButtonContainer>
        </CardBody>
      </Card>
      </QuizContainer>
      <br />
      <AnswerContainer>
        { startOver
          ? <Card className='answerCard'>
        <CardBody>
          {singleResult.result}
        </CardBody>
        </Card>
          : ''}
      </AnswerContainer>
      <br />
      {startOver ? <QuizButton btnColor='#BC4749' btnSizeP='10px' textSize='large' btnSizeM='15px'
      onClick={tryAgain}>Try Again</QuizButton> : ''}
      {startOver ? <h5 style={{ color: '#fff' }}>OR</h5> : '' }
      {startOver ? <QuizButton btnColor='#BC4749' btnSizeP='10px' textSize='large' btnSizeM='15px'
      onClick={signInAndGo}>Click To Experience More!</QuizButton> : ''}
    </>
  );
}

export default Quiz;
