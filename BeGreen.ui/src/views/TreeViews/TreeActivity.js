/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
import TreePicture from '../../components/TreeComponents/TreePicture';
import {
  getUsersTreeActivities,
  getUserTotalTreePoints,
  getWholeTreePicture
} from '../../helpers/data/TreeData';

function TreeActivity({ user }) {
  const [userActivity, setUserActivity] = useState([]);
  const [wholeTreePicture, setWholeTreePicture] = useState([]);
  const [treePointsTotal, setTreePointsTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUsersTreeActivities(user.id).then(setUserActivity);
      getWholeTreePicture().then(setWholeTreePicture);
    }
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
        {wholeTreePicture.map((picInfo) => {
          if (treePointsTotal >= picInfo.revealPoints) {
            return (
              <TreePicture
                key={picInfo.id}
                {...picInfo}
              />
            );
          }
        })}
      </div>
    </>
  );
}

TreeActivity.propTypes = {
  user: PropTypes.any,
};

export default TreeActivity;
