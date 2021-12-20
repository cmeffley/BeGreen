import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';

function IdeasFeed({ ...ideasInfo }) {
  return (
    <div>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Date>{ideasInfo.datePosted}</Feed.Date>
            <Feed.User>{ideasInfo.userName}</Feed.User>
            <Feed.Summary>
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

export default IdeasFeed();
