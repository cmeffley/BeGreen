import React from 'react';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';

function IdeasForm() {
  return (
    <div>
      <h1>Add A Green Idea</h1>
      <Form
        autoComplete='off'
      >
        <Label>Add a Green Idea that Others can Do!</Label>
          <Input
            name='sharedIdea'
          />
        <Label>Add an Image if you want</Label>
          <Input
            name='image'
          />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

export default IdeasForm;
