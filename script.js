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
    let videoPath = "https://dl.dropboxusercontent.com/scl/fi/dayve2ff0ejc2hduvj9bn/roadtothetop.mp4?rlkey=27vo5vf57h4kcvrijb8f8v9zz&st=hgk9xe2g";
    let thumbnail = "./roadtothetop.jpg";
    setVideo(videoPath, thumbnail);
}

init();