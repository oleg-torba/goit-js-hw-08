import throttle from 'lodash.throttle';
import vimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function data({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(data, 1000));

const dataStorage = function () {
  localStorage.getItem(STORAGE_KEY);

  if (dataStorage) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }
};
