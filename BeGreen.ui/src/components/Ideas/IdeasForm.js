import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addNewIdea, updateIdea } from '../../helpers/data/IdeasData';

function IdeasForm({
  user,
  formTitle,
  isSubmitted,
  setIsSubmitted,
  createNewIdea,
  setCreateNewIdea,
  editIdea,
  setEditIdea,
  setAllIdeas,
  ...ideasInfo
}) {
  const [newIdea, setNewIdea] = useState({
    sharedIdea: ideasInfo?.sharedIdea || '',
    image: ideasInfo?.image || '',
    userName: ideasInfo?.userName || user.userName,
    userFirstName: ideasInfo?.userFirstName || user.firstName,
    userId: ideasInfo?.userId || user.id,
    id: ideasInfo?.id
  });

  console.warn(user);

  const handleInputChange = (e) => {
    setNewIdea((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ideasInfo.id) {
      updateIdea(newIdea.id, newIdea).then(setAllIdeas);
      setEditIdea(false);
    } else {
      addNewIdea(newIdea).then(setAllIdeas);
      setCreateNewIdea(!createNewIdea);
    }
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div>
      <h1>{formTitle}</h1>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Label>Add a Green Idea that Others can Do!</Label>
          <Input
            name='sharedIdea'
            value={newIdea.sharedIdea}
            onChange={handleInputChange}
            required
          />
        <Label>Add an Image if you want</Label>
          <Input
            name='image'
            value={newIdea.image}
            onChange={handleInputChange}
          />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

IdeasForm.propTypes = {
  ideasInfo: PropTypes.object,
  user: PropTypes.any,
  formTitle: PropTypes.string,
  setAllIdeas: PropTypes.func,
  setIsSubmitted: PropTypes.func,
  isSubmitted: PropTypes.bool,
  createNewIdea: PropTypes.bool,
  setCreateNewIdea: PropTypes.func,
  editIdea: PropTypes.bool,
  setEditIdea: PropTypes.func
};

export default IdeasForm;
