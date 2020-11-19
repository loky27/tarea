import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import './styles.css'
const PrimaryCol = (props) => {
    return (
        <div className="t-col-contraine">
            <h3>Inicio</h3>
            <PostTweet profileUrl={props.profileUrl} />
            <Feed />
        </div>
    )
}

export default PrimaryCol;