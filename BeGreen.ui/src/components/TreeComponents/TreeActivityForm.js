import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form,
  Label,
  Input,
  Toast,
  ToastBody,
} from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { createNewActivity, updateActivity } from '../../helpers/data/TreeData';

const ToastDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ActivityButtons = styled.button`
  background-color: #BC4749;
  padding: 7px 10px;
  margin: 3px;
  color: #fff;
  border-radius: 10px;
`;
function TreeActivityForm({
  formTitle,
  user,
  userActivity,
  setUserActivity,
  setModal,
  revealTree,
  ...activityInfo
}) {
  const [addActivity, setAddActivity] = useState({
    greenActivity: activityInfo?.greenActivity || '',
    treePoints: activityInfo?.treePoints || '',
    totalTreePoints: Number(activityInfo?.totalTreePoints) || Number(''),
    userId: activityInfo?.userId || user.id
  });
  const [toast, setToast] = useState(false);

  const handleInputChange = (e) => {
    setAddActivity((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'treePoints' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addActivity.treePoints > 5) {
      setToast(true);
    } else if (activityInfo.id) {
      updateActivity(addActivity.id, addActivity).then((response) => setUserActivity(response));
    } else {
      createNewActivity(addActivity, user.id).then((response) => setUserActivity(response));
      setModal(false);
    }
  };

  return (
    <div>
      <ToastDiv>
        { toast
          ? <Toast>
          <Button inverted icon compact floated='right' onClick={() => setToast(!toast)}>
            <Icon name='close'/>
          </Button>
          <ToastBody>
            {'Points cannot be greater than 5'}
          </ToastBody>
        </Toast>
          : ''}
      </ToastDiv>
      <h1>{formTitle}</h1>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Input
          name='greenActivity'
          type='textarea'
          value={activityInfo.greenActivity}
          placeholder='Add an Activity you did that was Green!'
          required
          onChange={handleInputChange}
        />
        <Label>Activity Points</Label>
          <Input
            name='treePoints'
            type='number'
            value={activityInfo.treePoints}
            required
            onChange={handleInputChange}
          />
          <br />
        <ActivityButtons type='submit'>Submit</ActivityButtons>
      </Form>
    </div>
  );
}

TreeActivityForm.propTypes = {
  activityInfo: PropTypes.object,
  formTitle: PropTypes.string,
  user: PropTypes.any,
  userActivity: PropTypes.array,
  setUserActivity: PropTypes.func,
  setModal: PropTypes.func,
  revealTree: PropTypes.func,
};

export default TreeActivityForm;
