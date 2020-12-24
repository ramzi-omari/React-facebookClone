import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            {/* Story Reel component */}
            <StoryReel></StoryReel>
            <MessageSender></MessageSender>

            {/* MessageSender component */}

        </div>
    )
}

export default Feed
