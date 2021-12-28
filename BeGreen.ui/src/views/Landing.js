import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { signInUser, signOutUser } from '../helpers/auth';

function Landing({ user }) {
  const history = useHistory();

  return (
    <>
      <h1>It&apos;s Not Easy Being Green</h1>
      <h6>Help the World, take a quiz to see if you&apos;re everyday habits are helpful or harmful.</h6>
      <h6>Sign In to share Green Ideas with others and use those ideas in the activities area to create something!</h6>
      <div>
        { user ? <Button inverted color='red' onClick={signOutUser}>Sign Out</Button>
          : <Button inverted color='teal' onClick={signInUser}>Sign In</Button>}
        <Button inverted color='green' onClick={() => history.push('/quiz')}>Take Quiz</Button>
      </div>
    </>
  );
}

Landing.propTypes = {
  user: PropTypes.any
};

export default Landing;
