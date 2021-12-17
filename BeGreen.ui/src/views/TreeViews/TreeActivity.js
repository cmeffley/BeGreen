import React, { useState, useEffect } from 'react';
import TreeActivityCard from '../../components/TreeComponents/TreeActivityCard';
import { getAllTreeActivities, getTreePictureSection } from '../../helpers/data/TreeData';

function TreeActivity() {
  const [activity, setActivity] = useState([]);
  const [treeSection, setTreeSection] = useState({});

  useEffect(() => {
    getAllTreeActivities().then(setActivity);
    getTreePictureSection(3).then(setTreeSection);
  }, []);

  return (
    <>
      <h1>Tree Activities</h1>
      <div>
        {activity.map((activityInfo) => (
          <TreeActivityCard
            key={activityInfo.id}
            {...activityInfo}
          />
        ))}
      </div>
      <div>
        {<img src={`data:image/png;base64, ${treeSection.image}`} /> }
      </div>
    </>
  );
}

export default TreeActivity;
