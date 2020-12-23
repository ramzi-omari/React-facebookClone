import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({image, profileSrc, title}) {
    return (
        <div className="storyReel">
            <Avatar src={profileSrc}></Avatar>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
