import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle((timeupdateHandler), 1000));

function timeupdateHandler({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
}

const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
const parsedCurrentTime = JSON.parse(savedCurrentTime);

player.setCurrentTime(parsedCurrentTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
