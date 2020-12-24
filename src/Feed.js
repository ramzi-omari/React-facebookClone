import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">

            <StoryReel></StoryReel>
            <MessageSender></MessageSender>

            <Post 
                profilePic="https://i.ibb.co/rkw4rjc/Real-Madrid.jpg"
                message="MESSAGES IS OK"
                timestamp="THIS IS A TIMESTAMP"
                username="RealMadrid"
                image="https://static01.nyt.com/images/2018/05/27/sports/27championstrophy/merlin_138716301_7655ceb3-fb5e-4354-821a-bfad8d475786-jumbo.jpg?quality=90&auto=webp"
            ></Post>
            <Post 
                profilePic="https://i.ibb.co/54LvsF6/Ramzi.jpg"
                message="MESSAGES IS OK"
                timestamp="THIS IS A TIMESTAMP"
                username="Ramzi"
            ></Post>
            

        </div>
    )
}

export default Feed
