import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card,
  CardTitle,
  // CardText,
  // CardBody,
} from 'reactstrap';
import TreeActivityForm from './TreeActivityForm';

const CardDiv = styled.div`
  border: solid red 3px;
  margin: 10px 15px 10px 15px;
`;

function TreeActivityCard({ setUserActivity, ...activityInfo }) {
  const [editActivity, setEditActivity] = useState(false);

  return (
    <CardDiv>
      <Card className='activityCard'>
        <CardTitle>{activityInfo.greenActivity}</CardTitle>
        <CardTitle>{activityInfo.treePoints}</CardTitle>
        {
        editActivity && <TreeActivityForm
          formTitle={'Edit Activity'}
          {...activityInfo}
          setEditActivity={setEditActivity}
          setUserActivity={setUserActivity}
          />
        }
      </Card>
    </CardDiv>
  );
}

TreeActivityCard.propTypes = {
  activityInfo: PropTypes.object,
  setUserActivity: PropTypes.func
};

export default TreeActivityCard;
