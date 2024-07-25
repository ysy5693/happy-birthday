window.onload = function () {
    // 处理覆盖层变黑
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    setTimeout(function () {
        overlay.style.opacity = '1';
    }, 50); // 等待50ms以确保display属性已经生效

    var audio = document.getElementById('myAudio');
    audio.volume = 0; // 初始音量为0
    audio.play();

    var increaseVolume = setInterval(function () {
        if (audio.volume < 1) {
            audio.volume += 0.01; // 每次增加0.01的音量
        } else {
            clearInterval(increaseVolume); // 停止增加音量
        }
    }, 50); // 每50毫秒增加一次音量

    setTimeout(function () {
        audio.play();
    }, 3000); // 3秒后开始播放音频

    // 监听音频结束事件
    audio.addEventListener('timeupdate', function () {
        var duration = audio.duration;
        var currentTime = audio.currentTime;
        var timeLeft = duration - currentTime;

        if (timeLeft <= 3) { // 如果剩余时间小于等于3秒
            var decreaseVolume = setInterval(function () {
                if (audio.volume > 0) {
                    audio.volume -= 0.01; // 每次减少0.01的音量
                } else {
                    clearInterval(decreaseVolume); // 停止减少音量
                }
            }, 50); // 每50毫秒减少一次音量
        }
    });
    var nextPageButton = document.getElementById('nextPageButton');
    // 监听音频播放结束事件
    audio.addEventListener('ended', function () {

        nextPageButton.style.display = 'block'; // 显示按钮
    });

    // 按钮点击事件
    nextPageButton.addEventListener('click', function () {
        window.location.href = 'index5.html'; // 跳转到下一页
    });
};
