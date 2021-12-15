import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  // CardText,
  // CardBody,
  CardTitle,
} from 'reactstrap';
import { Button } from 'semantic-ui-react';

function QuestionCard({ ...questionInfo }) {
  const [yesPoints, setYesPoints] = useState(0);
  const [sometimesPoints, setSometimesPoints] = useState(0);
  const [noPoints, setNoPoints] = useState(0);

  const addPoints = yesPoints + sometimesPoints + noPoints;
  console.warn(addPoints);
  return (
    <div>
      <Card>
        <CardTitle>{questionInfo.question}</CardTitle>
        <Button.Group>
          <Button
            name='yes'
            value={3}
            onClick={(e) => setYesPoints(e.target.value) + addPoints}>
              Yes
          </Button>
          <Button
            name='sometimes'
            value={1}
            onClick={(e) => setSometimesPoints(e.target.value) + addPoints}>
              Sometimes
          </Button>
          <Button
            name='no'
            value={0}
            onClick={(e) => setNoPoints(e.target.value) + addPoints}>
              No
          </Button>
        </Button.Group>
      </Card>
    </div>
  );
}

QuestionCard.propTypes = {
  questionInfo: PropTypes.object
};

export default QuestionCard;
