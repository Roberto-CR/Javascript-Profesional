import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const button:HTMLMenuElement = document.querySelector("#playPause");
const muteUnmute:HTMLMetaElement = document.querySelector('#unmuteMute')


const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

button.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.unmuteMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error =>{
    console.error(error.message);
  });
}