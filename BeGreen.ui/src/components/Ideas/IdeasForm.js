import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form,
  Input,
} from 'reactstrap';
import RegularButtons from '../../styles/RegularButtons';
import { addNewIdea, updateIdea } from '../../helpers/data/IdeasData';

const FormDiv = styled.div`
  margin: 20px auto;
  width: 50%;
`;

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
      <br />
      <h2 style={{ color: '#fff' }}>{formTitle}</h2>
      <FormDiv>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Input
          placeholder='Add a Green Idea that Others can Do!'
          name='sharedIdea'
          value={newIdea.sharedIdea}
          onChange={handleInputChange}
          required
        />
        <br />
        <Input
          placeholder='Add an Image if you would like'
          name='image'
          value={newIdea.image}
          onChange={handleInputChange}
        />
        <br />
        <RegularButtons type='submit'>Submit</RegularButtons>
      </Form>
      </FormDiv>
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
