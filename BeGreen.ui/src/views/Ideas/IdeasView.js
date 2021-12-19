import React, { useState, useEffect } from 'react';
import IdeaCard from '../../components/Ideas/IdeaCard';
import { getAllIdeas } from '../../helpers/data/IdeasData';

function IdeasView() {
  const [allIdeas, setAllIdeas] = useState([]);

  useEffect(() => {
    getAllIdeas().then(setAllIdeas);
  }, []);

  return (
    <div>
      <h1>Share Your Ideas!</h1>
      {allIdeas.map((ideasInfo) => (
        <IdeaCard
          key={ideasInfo.id}
          {...ideasInfo}/>
      ))}
    </div>
  );
}

export default IdeasView();
