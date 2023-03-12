import Player from '@vimeo/player';
var _ = require('lodash');
const VIDEOPLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME_KEY, JSON.stringify(seconds));
}

player.on('timeupdate', _.throttle(onPlay, 1000));

if (localStorage.getItem(VIDEOPLAYER_CURRENT_TIME_KEY)) {
  player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME_KEY));
}
