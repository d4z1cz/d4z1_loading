var play = true;
var currentTrackIndex = 0;
var myAudio = document.getElementById("music");
var musicFiles = ["music/music1.mp3"];
myAudio.volume = 0.1;

var trackNames = {
    "music/music1.mp3": "Písnička - Tvůj Název",
};

  
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function updateTrackInfo() {
    var currentTime = formatTime(myAudio.currentTime);
    var duration = formatTime(myAudio.duration);
    document.getElementById('trackTime').textContent = currentTime + ' / ' + duration;
}

function playTrack(index) {
    myAudio.src = musicFiles[index];
    myAudio.play();
    currentTrackIndex = index;
    document.getElementById('currentTrackName').textContent = 'Hraje: ' + trackNames[musicFiles[index]];
    setInterval(updateTrackInfo, 1000);
}


function playRandomMusic() {
    playTrack(Math.floor(Math.random() * musicFiles.length));
}

function playNextMusic() {
    currentTrackIndex = (currentTrackIndex + 1) % musicFiles.length;
    playTrack(currentTrackIndex);
}

function playPreviousMusic() {
    currentTrackIndex = (currentTrackIndex - 1 + musicFiles.length) % musicFiles.length;
    playTrack(currentTrackIndex);
}

function onKeyDown(event) {
    switch (event.keyCode) {
        case 32: // SpaceBar                    
            if (play) {
                myAudio.pause();
                play = false;
                document.getElementById('playPauseMusic').innerHTML = '<i class="fas fa-play"></i>'; 
            } else {
                myAudio.play();
                play = true;
                document.getElementById('playPauseMusic').innerHTML = '<i class="fas fa-pause"></i>'; 
            }
            event.preventDefault(); 
            break;
    }
    return false;
}


window.addEventListener("keydown", onKeyDown, false);
document.getElementById('volume').addEventListener('input', function (e) {
    myAudio.volume = e.currentTarget.value;
});
document.getElementById('playPauseMusic').addEventListener('click', function() {
    if (myAudio.paused) {
        myAudio.play();
        this.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        myAudio.pause();
        this.innerHTML = '<i class="fas fa-play"></i>';
    }
});
document.getElementById('nextMusic').addEventListener('click', playNextMusic);
document.getElementById('prevMusic').addEventListener('click', playPreviousMusic);

playRandomMusic();


document.body.style.backgroundImage = 'url("images/1.jpg")';
