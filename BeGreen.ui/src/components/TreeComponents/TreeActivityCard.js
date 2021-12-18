import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  // CardText,
  // CardBody,
} from 'reactstrap';
import TreeActivityForm from './TreeActivityForm';

function TreeActivityCard({ ...activityInfo }) {
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
          />
        }
      </Card>
    </div>
  );
}

TreeActivityCard.propTypes = {
  activityInfo: PropTypes.obj
};

export default TreeActivityCard;
