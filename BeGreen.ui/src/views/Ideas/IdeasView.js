import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RegularButtons from '../../styles/RegularButtons';
import IdeasFeed from '../../components/Ideas/IdeasFeed';
import IdeasForm from '../../components/Ideas/IdeasForm';
import { getAllIdeas } from '../../helpers/data/IdeasData';

function IdeasView({ user }) {
  const [allIdeas, setAllIdeas] = useState([]);
  const [createNewIdea, setCreateNewIdea] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (user !== false) {
      getAllIdeas().then((response) => {
        const sortedByDate = response.sort((a, b) => Date.parse(a.datePosted) - Date.parse(b.datePosted));
        setAllIdeas(sortedByDate);
      });
    }
  }, [isSubmitted]);

  const openAddClick = () => {
    setCreateNewIdea(!createNewIdea);
  };

  return (
    <div>
      <h2 style={{ color: '#fff' }}>Share your green practices, meetups or ideas!</h2>
      <br />
      <RegularButtons primary onClick={openAddClick}>Add A New Idea</RegularButtons>
      <br />
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
