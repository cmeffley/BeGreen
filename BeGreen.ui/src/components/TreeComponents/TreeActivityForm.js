import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { createNewActivity, updateActivity } from '../../helpers/data/TreeData';

function TreeActivityForm({
  formTitle,
  user,
  userActivity,
  setUserActivity,
  setModal,
  ...activityInfo
}) {
  const [addActivity, setAddActivity] = useState({
    greenActivity: activityInfo?.greenActivity || '',
    treePoints: activityInfo?.treePoints || '',
    totalTreePoints: Number(activityInfo?.totalTreePoints) || Number(''),
    userId: activityInfo?.userId || user.id
  });

  const handleInputChange = (e) => {
    setAddActivity((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'treePoints' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityInfo.id) {
      updateActivity(addActivity.id, addActivity).then((response) => setUserActivity(response));
    } else {
      createNewActivity(addActivity, user.id).then((response) => setUserActivity(response));
      setModal(false);
    }
  };

  return (
    <div>
      <h1>{formTitle}</h1>
      {activityInfo.id}
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
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

TreeActivityForm.propTypes = {
  activityInfo: PropTypes.any,
  formTitle: PropTypes.string,
  user: PropTypes.any,
  userActivity: PropTypes.array,
  setUserActivity: PropTypes.func,
  setModal: PropTypes.func
};

export default TreeActivityForm;
