console.log("Hello");

let songIndex = 1;
// let audioVolume = 0;
let audioElement=new Audio('/songs/1.mp3');
let Play=document.getElementById('Play');
let Previous=document.getElementById('Previous');
let Next=document.getElementById('Next');
let Shuff=document.getElementById('Shuff');
let Rept=document.getElementById('Rept');
let durationbar=document.getElementById('durationbar');
let volume=document.getElementById('volume');
let sound=document.getElementById('sound');
// let masterSongName = document.getElementById('masterSongName');
// let songlists = Array.from(document.getElementsByClassName('songlists'));

let songs = [
    {songName: "Kun Faya Kun", filePath: "/Spotify clone/songs/4.mp3",coverPath: "/Spotify clone/cover1.jpg"},
    {songName: "Haan Main Galat", filePath: "/Spotify clone/songs/2.mp3",coverPath: "/spotify clone/cover2.webp"},
    {songName: "Humraah", filePath: "/Spotify clone/songs/3.pm3",coverPath: "/spotify clone/cover3.webp"},
    {songName: "Yaar Mod Do", filePath: "/Spotify clone/songs/5.mp3",coverPath: "/spotify clone/cover5.jpg"},
    {songName: "Despacito", filePath: "/Spotify clone/songs/1.mp3",coverPath: "/spotify clone/cover6.jpg"},


]
// after ending of song
audioElement.addEventListener('ended', ()=> {
    durationbar.value=0;
    if(songIndex>=5){
        songIndex=1;

    }
    else{
        songIndex+=1;
        
    }
    audioElement.src=`/songs/${songIndex}.mp3`;
    audioElement.play();


})

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
// for next button
Next.addEventListener('click' , ()=>{
    if(songIndex>=5){
        songIndex=1;

    }
    else{
        songIndex+=1;
        
    }
    audioElement.src=`/songs/${songIndex}.mp3`;
    audioElement.play();
})

// for previous button
Previous.addEventListener('click' , ()=>{
    if(songIndex<=1){
        songIndex=5;
        
    }
    else{
        songIndex-=1;
        
    }
    audioElement.src=`/songs/${songIndex}.mp3`;
    
    audioElement.play();
})
// for shuffle
Shuff.addEventListener('click' ,()=>{
    let rndInt = Math.floor(Math.random() * 5) + 1;
    audioElement.src=`/songs/${rndInt}.mp3`;
    audioElement.play();
    // console.log(rndInt);
})
// for repeat
Rept.addEventListener('click' ,()=>{
    // audioElement.
    if (typeof myAudio.loop == 'boolean')
    {
        myAudio.loop = true;
    }
    else
    {
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    myAudio.play();




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
