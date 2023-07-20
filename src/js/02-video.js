import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle((timeupdateHandler), 1000));

function timeupdateHandler({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

const savedCurrentTime = localStorage.getItem('videoplayer-current-time');

if(savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
}