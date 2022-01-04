import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
} from 'reactstrap';

function ResourceCards({ user, ...resourceInfo }) {
  return (
    <div>
      <Card className='resourceCard'>
        <CardTitle className='resourceName'>{resourceInfo.name}</CardTitle>
        <CardBody>
          <a href={resourceInfo.linkUrl}>
            <CardImg className='resourceImage' src={resourceInfo.image} />
          </a>
        </CardBody>
        <CardBody>
          <CardTitle>{resourceInfo.description}</CardTitle>
        </CardBody>
      </Card>

    </div>
  );
}

ResourceCards.propTypes = {
  resourceInfo: PropTypes.object,
  user: PropTypes.any
};

export default ResourceCards;
