import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import TreeActivityCard from '../../components/TreeComponents/TreeActivityCard';
import TreeActivityForm from '../../components/TreeComponents/TreeActivityForm';
// import TreePicture from '../../components/TreeComponents/TreePicture';
import {
  getUsersTreeActivities,
  getUserTotalTreePoints,
  // getTreePictureSection,
  // getWholeTreePicture
} from '../../helpers/data/TreeData';

function TreeActivity({ user, wholeTreePicture }) {
  const [userActivity, setUserActivity] = useState([]);
  // const [wholeTreePicture, setWholeTreePicture] = useState([]);
  // const [treeSection, setTreeSection] = useState({});
  // const [currentPicture, setCurrentPicture] = useState(0);
  const [treePointsTotal, setTreePointsTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    getUsersTreeActivities(user.id).then(setUserActivity);
    // getWholeTreePicture().then(setWholeTreePicture);
  }, []);

  useEffect(() => {
    getUserTotalTreePoints(user.id).then(setTreePointsTotal);
  }, [userActivity]);

  return (
    <>
      <h1>Tree Activities</h1>
      <h2>{treePointsTotal}</h2>
      <div>
        <Button onClick={toggle}>Add An Activity</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Add a Green Activity
          </ModalHeader>
          <ModalBody>
            <TreeActivityForm
              formTitle={''}
              user={user}
              setUserActivity={setUserActivity}
              userActivity={userActivity}
              setModal={setModal}
              // revealTree={revealTree}
            />
          <hr />
            <ul>
              <li>1 Point</li>
              <li>2 Points</li>
              <li>3 Points</li>
              <li>4 Points</li>
              <li>5 Points</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        {userActivity.map((activityInfo) => (
          <TreeActivityCard
            key={activityInfo.id}
            {...activityInfo}
            user={user}
            setUserActivity={setUserActivity}
          />
        ))}
      </div>
      <div>
        {wholeTreePicture.map((picInfo) => (
          console.warn(picInfo)
          // <TreePicture
          //   key={picInfo.id}
          //   {...picInfo}
          //   treePointsTotal={treePointsTotal}
          //   user={user}
          // />
        ))}
        {<img src={`data:image/png;base64, ${wholeTreePicture[5].image}`} className='treePictureContainer'/> }
        {/* {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> } */}
        {/* {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> }
        {<img src={`data:image/png;base64, ${treeSection.image}`} className='treePictureContainer'/> } */}
      </div>
    </>
  );
}

TreeActivity.propTypes = {
  user: PropTypes.any,
  wholeTreePicture: PropTypes.array
};

export default TreeActivity;
