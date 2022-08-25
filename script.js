console.log("Hello");

let songIndex = 0;
let audioVolume = 0;
let audioElement=new Audio('/songs/Kun Faya Kun.mp3');
let Play=document.getElementById('Play');
let durationbar=document.getElementById('durationbar');
let volume=document.getElementById('volume');
let sound=document.getElementById('sound');
// let masterSongName = document.getElementById('masterSongName');
// let songlists = Array.from(document.getElementsByClassName('songlists'));

let songs = [
    {songName: "Kun Faya Kun", filePath: "/Spotify clone/songs/Kun Faya Kun.mp3",coverPath: "/spotify clone/cover1.jpg"},
    {songName: "Haan Main Galat", filePath: "/Spotify clone/songs/Haan Main Galat.mp3",coverPath: "/spotify clone/cover2.webp"},
    {songName: "Humraah", filePath: "/Spotify clone/songs/Humraah.mp3",coverPath: "/spotify clone/cover3.webp"},
    {songName: "Yaar Mod Do", filePath: "/Spotify clone/songs/Yaar Mod Do.mp3",coverPath: "/spotify clone/cover5.jpg"},
    {songName: "Despacito", filePath: "/Spotify clone/songs/despacito.mp3",coverPath: "/spotify clone/cover6.jpg"},


]
// songlists.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })

// for play and pause
Play.addEventListener('click' , ()=>{
    if(Play.classList.contains("fa-circle-play")){
        audioElement.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
                //  console.log('play button');

    }
    else{
        audioElement.pause();
        // console.log('pause button');
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }

})

// for duration bar
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration) * 100);
    durationbar.value=progress;

})
durationbar.addEventListener('change', ()=>{
    audioElement.currentTime = durationbar.value * audioElement.duration/100;

})

// for sound bar
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
