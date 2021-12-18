import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  // CardText,
  // CardBody,
} from 'reactstrap';
import TreeActivityForm from './TreeActivityForm';

function TreeActivityCard({ setUserActivity, ...activityInfo }) {
  const [editActivity, setEditActivity] = useState(false);

  return (
    <div>
      <Card>
        <CardTitle>{activityInfo.greenActivity}</CardTitle>
        {
        editActivity && <TreeActivityForm
          formTitle={'Edit Activity'}
          {...activityInfo}
          setEditActivity={setEditActivity}
          setUserActivity={setUserActivity}
          />
        }
      </Card>
    </div>
  );
}

TreeActivityCard.propTypes = {
  activityInfo: PropTypes.any,
  setUserActivity: PropTypes.func
};

export default TreeActivityCard;
