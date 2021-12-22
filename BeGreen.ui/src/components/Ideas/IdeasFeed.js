import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Feed, Button, Icon } from 'semantic-ui-react';
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
      <Feed size='large' className='feed'>
        <Feed.Event>
          <Feed.Label><Icon name='pencil'/></Feed.Label>
          <Feed.Content>
            <Feed.User>{ideasInfo.userName}</Feed.User>
            <Feed.Summary>
              <Feed.Extra text>
                {ideasInfo.sharedIdea}
              </Feed.Extra>
            </Feed.Summary>
            <Feed.Extra images>
              {<img src={ideasInfo.image}/>}
            </Feed.Extra>
            <Feed.Meta>
            <Feed.Date>{ideasInfo.datePosted}</Feed.Date>
            </Feed.Meta>
          </Feed.Content>
          </Feed.Event>
          { (user.id === ideasInfo.userId) ? <Button icon secondary onClick={() => handleClick('edit')}>{ editIdea ? <Icon inverted name='close'/> : <Icon name='edit'/> }</Button> : '' }
          { (user.id === ideasInfo.userId) ? <Button icon secondary onClick={() => handleClick('delete')}><Icon name='trash alternate'/></Button> : '' }
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
      </Feed>
      <br />
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
