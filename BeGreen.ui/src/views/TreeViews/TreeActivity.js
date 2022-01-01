/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import RegularButtons from '../../styles/RegularButtons';
import TreeActivityCard from '../../components/TreeComponents/TreeActivityCard';
import TreeActivityForm from '../../components/TreeComponents/TreeActivityForm';
import TreePicture from '../../components/TreeComponents/TreePicture';
import {
  getUsersTreeActivities,
  getUserTotalTreePoints,
  getWholeTreePicture
} from '../../helpers/data/TreeData';

const CardDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
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
      <h1 style={{ color: '#fff' }}>{user.firstName}&apos;s Activities</h1>
      <br />
      <h2 style={{ color: '#fff' }}>Total Points: {treePointsTotal}</h2>
      <div>
        <RegularButtons onClick={toggle}>Add An Activity</RegularButtons>
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
            <h6>Point Options:</h6>
            <ul>
              <li>1 Point - Quick and Simple</li>
              <li>2 Points - Takes a little more time</li>
              <li>3 Points - Done often but infrequently</li>
              <li>4 Points - Starting to become habit</li>
              <li>5 Points - Done consistently or very impactful</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <RegularButtons onClick={toggle}>Close</RegularButtons>
          </ModalFooter>
        </Modal>
      </div>
      <br />
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
    </>
  );
}

TreeActivity.propTypes = {
  user: PropTypes.any,
};

export default TreeActivity;
