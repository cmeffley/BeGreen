import React from 'react';
import PropTypes from 'prop-types';

function TreePicture({ ...picInfo }) {
  return (
    <div>
       <img src={`data:image/png;base64, ${picInfo.image}`} className='treePictureContainer'/>
    </div>
  );
}

TreePicture.propTypes = {
  picInfo: PropTypes.object,
};

export default TreePicture;
