import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResourceCards from '../../components/ResourcesComponents/ResourceCards';
import getAllResources from '../../helpers/data/Resourcesdata';

const ResourcesDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function ResourcesView({ user }) {
  const [allResources, setAllResources] = useState([]);

  useEffect(() => {
    getAllResources().then(setAllResources);
  }, []);

  return (
    <div>
      <h2 style={{ color: '#fff' }}>If you are interested in helping your neighbor and yourself by doing more, check out these organizations</h2>
      <br />
      <ResourcesDiv>
        {allResources.map((resourceInfo) => (
          <ResourceCards
            key={resourceInfo.id}
            {...resourceInfo}
            user={user}
          />
        ))}
      </ResourcesDiv>
    </div>
  );
}

ResourcesView.propTypes = {
  user: PropTypes.any
};

export default ResourcesView;
