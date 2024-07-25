document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.volume = 0.25;

    // 从sessionStorage中恢复音频播放状态
    let isPlaying = sessionStorage.getItem('musicPlayerIsPlaying') === 'true';
    let currentTime = parseFloat(sessionStorage.getItem('musicPlayerCurrentTime')) || 0;

    // 在页面加载时恢复播放状态和当前时间
    musicPlayer.currentTime = currentTime;
    if (isPlaying) {
        musicPlayer.play().catch(error => {
            console.error('播放音频时出错:', error);
            isPlaying = false;
            sessionStorage.setItem('musicPlayerIsPlaying', 'false');
            playButton.textContent = '播放音乐';
        });
        playButton.textContent = '暂停音乐';
    } else {
        musicPlayer.pause();
        playButton.textContent = '播放音乐';
    }

    playButton.addEventListener('click', function () {
        if (musicPlayer.paused) {
            musicPlayer.play().catch(error => {
                console.error('播放音频时出错:', error);
                isPlaying = false;
                sessionStorage.setItem('musicPlayerIsPlaying', 'false');
                playButton.textContent = '播放音乐';
            });
            playButton.textContent = '暂停音乐';
            sessionStorage.setItem('musicPlayerIsPlaying', 'true');
        } else {
            musicPlayer.pause();
            playButton.textContent = '播放音乐';
            sessionStorage.setItem('musicPlayerIsPlaying', 'false');
        }
    });

    musicPlayer.addEventListener('timeupdate', function () {
        sessionStorage.setItem('musicPlayerCurrentTime', musicPlayer.currentTime);
    });

    window.addEventListener('beforeunload', function () {
        sessionStorage.setItem('musicPlayerCurrentTime', musicPlayer.currentTime);
    });

    // 在页面加载完毕后恢复播放
    window.addEventListener('focus', function () {
        if (isPlaying) {
            musicPlayer.play().catch(error => {
                console.error('播放音频时出错:', error);
                isPlaying = false;
                sessionStorage.setItem('musicPlayerIsPlaying', 'false');
                playButton.textContent = '播放音乐';
            });
        }
    });
});
