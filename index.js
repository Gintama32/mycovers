let nextPageToken = "";
function getVideos(){
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjbcEPQmTWImT7sCwLu3JUg&maxResults=10&order=date&key=AIzaSyDrEuNjJQvwvzv-lg9TI7Yg9K_5MRi7LBA&pageToken="+nextPageToken)
.then((result)=>{
    return result.json()
}).then((data=>{
    let videos = data.items;
    let videoContainer = document.querySelector(".youtube-container");
    for(video of videos){
        videoContainer.innerHTML+= `
         <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank"><h3>${video.snippet.title}</h3>
        <img src="${video.snippet.thumbnails.high.url}"></a>
        `
    }
}))
}
getVideos();
