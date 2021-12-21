import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Feed, Button } from 'semantic-ui-react';
import IdeasForm from './IdeasForm';
import { deleteIdea } from '../../helpers/data/IdeasData';

function IdeasFeed({ user, setAllIdeas, ...ideasInfo }) {
  const [editIdea, setEditIdea] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditIdea((prevState) => !prevState);
        break;
      case 'delete':
        deleteIdea(ideasInfo.id).then(setAllIdeas);
        break;
      default:
        console.warn('Final Capstone Project');
    }
  };

  return (
    <div>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <Feed.User>{ideasInfo.userName}</Feed.User>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
            <Feed.Date>{ideasInfo.datePosted}</Feed.Date>
              {ideasInfo.sharedIdea}
            </Feed.Summary>
          </Feed.Content>
          <Button primary onClick={() => handleClick('edit')}>Edit</Button>
          <Button secondary onClick={() => handleClick('delete')}>Delete</Button>
          {
            editIdea && <IdeasForm
              formTitle='Edit Idea'
              {...ideasInfo}
              user={user}
            />
          }
        </Feed.Event>
      </Feed>
    </div>
  );
}

IdeasFeed.propTypes = {
  ideasInfo: PropTypes.array,
  setAllIdeas: PropTypes.func,
  user: PropTypes.any
};

export default IdeasFeed;
