let audioContext = null;
let audioBuffer = null;
let sourceNode = null;
let isPlaying = false;

self.addEventListener('message', event => {
    const { action } = event.data;

    if (action === 'play') {
        playAudio();
    } else if (action === 'pause') {
        pauseAudio();
    }
});

async function playAudio() {
    if (!audioContext) {
        audioContext = new AudioContext();
        const response = await fetch('background-music.mp3');
        const arrayBuffer = await response.arrayBuffer();
        audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    }

    if (!isPlaying) {
        sourceNode = audioContext.createBufferSource();
        sourceNode.buffer = audioBuffer;
        sourceNode.connect(audioContext.destination);
        sourceNode.start();
        isPlaying = true;
    }
}

function pauseAudio() {
    if (sourceNode && isPlaying) {
        sourceNode.stop();
        isPlaying = false;
    }
}
