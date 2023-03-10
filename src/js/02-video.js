import Player from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', _.throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
