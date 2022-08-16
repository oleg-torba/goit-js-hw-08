import videoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function(timeUpdate){
 currentTime, throttle = 1s
}

player.on('play', onPlay);
