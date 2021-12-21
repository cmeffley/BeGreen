import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import IdeasFeed from '../../components/Ideas/IdeasFeed';
import IdeasForm from '../../components/Ideas/IdeasForm';
import { getAllIdeas } from '../../helpers/data/IdeasData';

function IdeasView({ user }) {
  const [allIdeas, setAllIdeas] = useState([]);
  const [createNewIdea, setCreateNewIdea] = useState(false);

  useEffect(() => {
    getAllIdeas().then(setAllIdeas);
  }, []);

  const openAddClick = () => {
    setCreateNewIdea(!createNewIdea);
  };

  return (
    <div>
      <h1>Share Your Ideas!</h1>
      <Button primary onClick={openAddClick}>Add A New Idea</Button>
      <div>
        <IdeasForm
          formTitle='Add An Idea'
          setCreateNewIdea={setCreateNewIdea}
          setAllIdeas={setAllIdeas}
          user={user}
        />
      </div>
      <div>
      {allIdeas.map((ideasInfo) => (
        <IdeasFeed
          key={ideasInfo.id}
          {...ideasInfo}
          setAllIdeas={setAllIdeas}
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
