import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  // CardText,
  // CardBody,
} from 'reactstrap';

function TreeActivityCard({ ...activityInfo }) {
  return (
    <div>
      <Card>
        <CardTitle>{activityInfo.greenActivity}</CardTitle>
      </Card>
    </div>
  );
}

TreeActivityCard.propTypes = {
  activityInfo: PropTypes.obj
};

export default TreeActivityCard;
