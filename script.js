function videoTemplate(videoPath, thumbnail){
    return `<article class="video">
        <video src="${videoPath}" controls preload="metadata" poster="${thumbnail}"></video>
    </article>`
}

function setVideo(videoPath, thumbnail){
    const video = document.querySelector(".video")
    video.innerHTML = videoTemplate(videoPath, thumbnail);
}

function init(){
    let videoPath = "./roadtothetop.mp4";
    let thumbnail = "./roadtothetop.jpg";
    setVideo(videoPath, thumbnail);
}

init();