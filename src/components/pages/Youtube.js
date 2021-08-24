import React, { useEffect, useState } from 'react';
import YoutubeList from '../pages/YoutubeList';
import YoutubeSearch from '../pages/YoutubeSearch';

function Youtube(){
    const [lists, videos] = useState([]);

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        //   템플릿리터럴
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyCvJ52pq3tyla1RfS2IOu2psNePZXM-LUc`, requestOptions)
            .then(response => response.json())
            .then(result => videos(result.items))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=''&key=AIzaSyCvJ52pq3tyla1RfS2IOu2psNePZXM-LUc", requestOptions)
            .then(response => response.json())
            .then(result => videos(result.items))
            .catch(error => console.log('error', error));
    },[]);

    return (
        <>
            <div className="youtube__cont">
                <div className="logo">
                    <img src="/img/youtubeLogo.png"></img>
                </div>
                <YoutubeSearch onSearch={search}/>
                <div className="introduce">
                    <p>Please enter your desired search term!</p>
                    <p>This is what I did with the YouTube API. Enter the desired search term and a list of videos will appear.</p>
                </div>
                <YoutubeList lists={lists} />
            </div>
        </>
    );
}

export default Youtube;