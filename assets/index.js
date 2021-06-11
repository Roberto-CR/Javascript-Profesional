import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";


const video = document.querySelector("video");
const button = document.querySelector("#playPause");





const muteUnmute = document.querySelector('#unmuteMute')


const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
  });


button.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.unmuteMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error =>{
    console.error(error.message);
  });
}