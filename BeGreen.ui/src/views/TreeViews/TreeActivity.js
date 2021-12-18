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
import { getUsersTreeActivities, getTreePictureSection } from '../../helpers/data/TreeData';

function TreeActivity({ user }) {
  const [userActivity, setUserActivity] = useState([]);
  const [treeSection, setTreeSection] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    getUsersTreeActivities(user.id).then(setUserActivity);
    getTreePictureSection(3).then(setTreeSection);
  }, []);

  return (
    <>
      <h1>Tree Activities</h1>
      <h2>{userActivity.totalTreePoints}</h2>
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
        {<img src={`data:image/png;base64, ${treeSection.image}`} /> }
      </div>
    </>
  );
}

TreeActivity.propTypes = {
  user: PropTypes.any
};

export default TreeActivity;
