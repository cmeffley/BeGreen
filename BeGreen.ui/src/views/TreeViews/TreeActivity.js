/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import TreeActivityCard from '../../components/TreeComponents/TreeActivityCard';
import TreeActivityForm from '../../components/TreeComponents/TreeActivityForm';
import TreePicture from '../../components/TreeComponents/TreePicture';
import {
  getUsersTreeActivities,
  getUserTotalTreePoints,
  getWholeTreePicture
} from '../../helpers/data/TreeData';

// const ComponentDiv = styled.div`
//   position: relative;
// `;

const CardDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  // justify-content: space-evenly;
  height: 200vh;
  position: relative;
  z-index: 2;
  border: solid pink 2px;
`;

const TreeDiv = styled.div`
  position: absolute;
  z-index: 1;
  height: 100vh;
  border: solid yellow 2px;
  top: 50%;
  right: 30%;
`;

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
      <h1>{user.firstName}&apos;s Activities</h1>
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
            <Button color='success' onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
      <CardDiv>
        {userActivity.length <= 0 ? 'Add an Activity, Earn Points, See what grows' : userActivity.map((activityInfo) => (
          <TreeActivityCard
            key={activityInfo.id}
            {...activityInfo}
            user={user}
            setUserActivity={setUserActivity}
          />
        ))}
      </CardDiv>
      <TreeDiv>
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
      </TreeDiv>
    </>
  );
}

TreeActivity.propTypes = {
  user: PropTypes.any,
};

export default TreeActivity;
