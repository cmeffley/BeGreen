import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Feed, Button, Icon } from 'semantic-ui-react';
import RegularButtons from '../../styles/RegularButtons';
import IdeasForm from './IdeasForm';
import { deleteIdea } from '../../helpers/data/IdeasData';

const FeedImg = styled.img`
  height: 400px;
  width: 425px;
`;

const FeedDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function IdeasFeed({
  user,
  setAllIdeas,
  isSubmitted,
  setIsSubmitted,
  ...ideasInfo
}) {
  const [editIdea, setEditIdea] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

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
      <>
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalBody>
            {<FeedImg src={ideasInfo.image}/>}
          </ModalBody>
          <ModalFooter>
            <RegularButtons onClick={toggle2}>Close</RegularButtons>
          </ModalFooter>
        </Modal>
      </>
      <br />
      <FeedDiv>
      <Feed size='large' className='feed'>
        <Feed.Event>
          <Feed.Label><Icon name='comment outline'/></Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              {ideasInfo.userName}
              <Feed.Extra text>
                {ideasInfo.sharedIdea}
              </Feed.Extra>
            </Feed.Summary>
            <Feed.Extra images>
             <a onClick={toggle2}>{<img src={ideasInfo.image}/>}</a>
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
      </FeedDiv>
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
