import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { signInUser, signOutUser } from '../helpers/auth';
import GreenSmall from '../assets/GreenSmall.png';

function Landing({ user }) {
  const history = useHistory();

  return (
    <>
      <h1 style={{ color: '#fff' }}>It&apos;s Not Easy Being Green</h1>
      <br />
      <div>
        <img src={GreenSmall} />
      </div>
      <br />
      <h5 style={{ color: '#fff' }}>The World is changing, and if we all do a little bit, we can have a massive impact.</h5>
      <h5 style={{ color: '#fff' }}>Take the quiz to see how impactful you are, or
      sign in and share ideas with others willing to help out.</h5>
      <h5 style={{ color: '#fff' }}>Then take those ideas and add them to your activities, and see what grows!</h5>
      <br />
      <div>
        { user ? <Button color='red' onClick={signOutUser}>Sign Out</Button>
          : <Button color='teal' onClick={signInUser}>Sign In</Button>}
        <Button color='green' onClick={() => history.push('/quiz')}>Take Quiz</Button>
      </div>
    </>
  );
}

Landing.propTypes = {
  user: PropTypes.any
};

export default Landing;
