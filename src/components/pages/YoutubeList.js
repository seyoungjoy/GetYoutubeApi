import React from 'react';


const YoutubeItem = (props) => {
    console.log(props)
    return (
        <li>
            <img 
                src={props.video.snippet.thumbnails.medium.url} 
                alt={props.video.snippet.title}
            />
            <div>
                <p>{props.video.snippet.title}</p>
                <p>{props.video.snippet.description}</p>
            </div>
        </li>
    )
}

const YoutubeList = (props) => {
    return (
        <div className="youtube__list">
            <ul>
                {props.lists.map((video) => (
                    <YoutubeItem video={video} key={video.id.videoId} />
                ))}
            </ul>
        </div>
    )
}

export default YoutubeList;