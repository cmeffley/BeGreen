import React from 'react';
import PropTypes from 'prop-types';

function TreePicture({ user, treePointsTotal, ...picInfo }) {
  return (
    <div>
       { treePointsTotal === picInfo[1].revealPoints ? <img src={`data:image/png;base64, ${picInfo[1].image}`} className='treePictureContainer'/> : ''}
        {/* {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> } */}
        {/* {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> } */}
    </div>
  );
}

TreePicture.propTypes = {
  picInfo: PropTypes.object,
  treePointsTotal: PropTypes.number,
  user: PropTypes.any,
};

export default TreePicture();
