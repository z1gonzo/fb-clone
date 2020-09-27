import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic=""
        message="This works!"
        timestamp="Thisis timestamp"
        username="Markus"
        image="https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg"
      />
    </div>
  );
}

export default Feed;
