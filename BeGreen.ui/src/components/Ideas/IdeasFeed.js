import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Feed, Button } from 'semantic-ui-react';
import IdeasForm from './IdeasForm';
import { deleteIdea } from '../../helpers/data/IdeasData';

function IdeasFeed({
  user,
  setAllIdeas,
  isSubmitted,
  setIsSubmitted,
  ...ideasInfo
}) {
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
          { (user.id === ideasInfo.userId) ? <Button primary onClick={() => handleClick('edit')}>Edit</Button> : '' }
          { (user.id === ideasInfo.userId) ? <Button secondary onClick={() => handleClick('delete')}>Delete</Button> : '' }
          {
            editIdea && <IdeasForm
              formTitle='Edit Idea'
              {...ideasInfo}
              setAllIdeas={setAllIdeas}
              editIdea={editIdea}
              setEditIdea={setEditIdea}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
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
  isSubmitted: PropTypes.bool,
  setIsSubmitted: PropTypes.func,
  user: PropTypes.any
};

export default IdeasFeed;
