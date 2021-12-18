import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import TreeActivityCard from '../../components/TreeComponents/TreeActivityCard';
import TreeActivityForm from '../../components/TreeComponents/TreeActivityForm';
import { getAllTreeActivities, getTreePictureSection } from '../../helpers/data/TreeData';

function TreeActivity() {
  const [activity, setActivity] = useState([]);
  const [treeSection, setTreeSection] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    getAllTreeActivities().then(setActivity);
    getTreePictureSection(3).then(setTreeSection);
  }, []);

  return (
    <>
      <h1>Tree Activities</h1>
      <div>
        <Button onClick={toggle}>Add An Activity</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Add a Green Activity
          </ModalHeader>
          <ModalBody>
            <TreeActivityForm
              formTitle={''}/>
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
