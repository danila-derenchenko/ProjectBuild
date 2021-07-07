import { Howl } from 'howler';
let sound = new Howl({
    src: ['../audio/1.mp3']
});

export function start() {

    sound.play();

}

export function stop() {

    sound.stop();

}