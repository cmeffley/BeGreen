import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';

function TreeActivityForm({ formTitle, ...activityInfo }) {
  return (
    <div>
      <h1>{formTitle}</h1>
      {activityInfo.id}
      <Form
        autoComplete='off'
      >
        <Input
          type='textarea'
          value={activityInfo.greenActivity}
          placeholder='Add an Activity you did that was Green!'
          required
        />
        <Label>Activity Points</Label>
          <Input
            type='number'
            value={activityInfo.treePoints}
            required
          />
          <br />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

TreeActivityForm.propTypes = {
  activityInfo: PropTypes.obj,
  formTitle: PropTypes.string
};

export default TreeActivityForm;
