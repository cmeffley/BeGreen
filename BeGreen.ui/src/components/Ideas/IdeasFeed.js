import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';

function IdeasFeed({ ...ideasInfo }) {
  return (
    <div>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <Feed.User>{ideasInfo.userName}</Feed.User>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
            <Feed.Date>{ideasInfo.datePosted}</Feed.Date>
              {ideasInfo.sharedIdea}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </div>
  );
}

IdeasFeed.propTypes = {
  ideasInfo: PropTypes.array
};

export default IdeasFeed;
