import { Howl } from 'howler';
import correctSoundFile from '../assets/correct.mp3';
import incorrectSoundFile from '../assets/incorrect.mp3';

export const correctSound = new Howl({
    src: [correctSoundFile],
    volume: 0.5, // ajusta el volumen según tus preferencias
});

export const incorrectSound = new Howl({
    src: [incorrectSoundFile],
    volume: 0.5, // ajusta el volumen según tus preferencias
});