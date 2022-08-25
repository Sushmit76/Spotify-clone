console.log("Hello");

let songIndex = 0;
let audioVolume = 0;
let audioElement=new Audio('Kun Faya Kun.mp3');
let masterPlay=document.getElementById('Play');
let durationbar=document.getElementById('durationbar');
let volume=document.getElementById('volume');
let sound=document.getElementById('sound');
let masterSongName = document.getElementById('masterSongName');
let songlists = Array.from(document.getElementsByClassName('songlists'));

let songs = [
    {songName: "Kun Faya Kun", filePath: "/Spotify clone/songs/Kun Faya Kun.mp3",coverPath: "/spotify clone/cover1.jpg"},
    {songName: "Haan Main Galat", filePath: "/Spotify clone/songs/Haan Main Galat.mp3",coverPath: "/spotify clone/cover2.webp"},
    {songName: "Humraah", filePath: "/Spotify clone/songs/Humraah.mp3",coverPath: "/spotify clone/cover3.webp"},
    {songName: "Yaar Mod Do", filePath: "/Spotify clone/songs/Yaar Mod Do.mp3",coverPath: "/spotify clone/cover5.jpg"},
    {songName: "Despacito", filePath: "/Spotify clone/songs/despacito.mp3",coverPath: "/spotify clone/cover6.jpg"},


]
songlists.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

Play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');

    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }
    

})


audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration) * 100);
    durationbar.value=progress;

})
durationbar.addEventListener('change', ()=>{
    audioElement.currentTime = durationbar.value * audioElement.duration/100;

})

sound.addEventListener('click' , ()=>{
    if(audioVolume<=0){
        
        sound.classList.remove('fa-volume-high');
        sound.classList.add('fa-volume-xmark');

    }
    else{        
        sound.classList.remove('fa-volume-xmark');
        sound.classList.add('fa-volume-high');
    }
})

// volume.addEventListener('change' , ()=>{
    
// })

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})