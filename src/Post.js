import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import ThumpUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NearMeIcon from "@material-ui/icons/NearMe"
import DeleteIcon from '@material-ui/icons/Delete'
import {ExpandMoreOutlined} from "@material-ui/icons"
import "./Post.css"
import db from './firebase'


function Post({keyId, profilePic, image, username, timestamp, message}) {
    const deletePost = (keyId) => {
        // const data = db.collection('posts')
        // const query = data.where("timestamp", "==", timestamp)
        // console.log(query)

        // db.collection('posts').doc(query).delete()        
        // .then(()=>{
        //     console.log('success')
        // }).catch((error)=>{
        //     console.error('erroooor',error)
        // })

        db.collection("posts").doc(keyId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className="post__avatar"></Avatar>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="post__delete">
                    <IconButton aria-label="delete">
                      <DeleteIcon onClick={()=> deletePost(keyId)} />
                    </IconButton>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""></img>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumpUpIcon></ThumpUpIcon>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon></NearMeIcon>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon></AccountCircleIcon>
                    <ExpandMoreOutlined></ExpandMoreOutlined>
                </div>

            </div>
        </div>
    )
}

export default Post
