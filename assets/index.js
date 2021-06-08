import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";


const video = document.querySelector("video");
const button = document.querySelector("#playPause");
const muteUnmute = document.querySelector('#unmuteMute')


const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay()]
  });


button.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.unmuteMute();