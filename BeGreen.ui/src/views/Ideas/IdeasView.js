import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import IdeasFeed from '../../components/Ideas/IdeasFeed';
import IdeasForm from '../../components/Ideas/IdeasForm';
import { getAllIdeas } from '../../helpers/data/IdeasData';

function IdeasView({ user }) {
  const [allIdeas, setAllIdeas] = useState([]);
  const [createNewIdea, setCreateNewIdea] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getAllIdeas().then(setAllIdeas);
    }
  }, [isSubmitted]);

  const openAddClick = () => {
    setCreateNewIdea(!createNewIdea);
  };

  return (
    <div>
      <h1>Share Your Ideas!</h1>
      <Button primary onClick={openAddClick}>Add A New Idea</Button>
      <>
      { createNewIdea
      && <div>
        <IdeasForm
          formTitle='Add An Idea'
          setAllIdeas={setAllIdeas}
          createNewIdea={createNewIdea}
          setCreateNewIdea={setCreateNewIdea}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          user={user}
        />
      </div>
      }
      </>
      <br />
      <div>
      {allIdeas.map((ideasInfo) => (
        <IdeasFeed
          key={ideasInfo.id}
          {...ideasInfo}
          setAllIdeas={setAllIdeas}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          user={user}
        />
      ))}
      </div>
    </div>
  );
}

IdeasView.propTypes = {
  user: PropTypes.any
};

export default IdeasView;
