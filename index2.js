document.addEventListener('DOMContentLoaded', function () {
    const audioFiles = [
        'srkl.wav' // 替换为你的第一个音频文件路径
    ];
    document.getElementById('gift2').addEventListener('click', function () {
        this.style.opacity = '0'; // 设置透明度为0
        const audio = new Audio(audioFiles[0]);
        audio.volume = 1; // 设置点击音频音量
        audio.play();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const audioFiles = [
        'srkl.wav' // 替换为你的第一个音频文件路径
    ];
    document.getElementById('gift3').addEventListener('click', function () {
        const audio = new Audio(audioFiles[0]);
        audio.volume = 1; // 设置点击音频音量
        audio.play();
        this.style.opacity = '0'; // 设置透明度为0
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const texts = [
        '是不是打不开呀保镖小姐',
        '别急，我们先做点其他事情'

    ];
    const audioFiles = [
        'srkl.wav', // 替换为你的第一个音频文件路径
        'zmy.wav', // 替换为你的第二个音频文件路径

    ];
    document.getElementById('gift1').addEventListener('click', function () {
        clickCount++;
        const qypContainer = document.querySelector('.qyp-container');
        if (clickCount === 4) {
            document.getElementById('qyp').style.opacity = '1';
        }
        else if (clickCount === 5) {
            const newText = document.createElement('p');
            newText.textContent = texts[0];
            newText.classList.add('new-text'); // 添加样式类
            qypContainer.appendChild(newText);
            const audio = new Audio(audioFiles[0]);
            audio.volume = 1; // 设置点击音频音量
            audio.play();
        }
        else if (clickCount === 6) {
            const previousText = qypContainer.querySelector('.new-text');
            if (previousText) {
                previousText.style.opacity = '0';
            }
            const newText = document.createElement('p');
            newText.textContent = texts[1];
            newText.classList.add('new-text'); // 添加样式类
            qypContainer.appendChild(newText);
            const audio = new Audio(audioFiles[1]);
            audio.volume = 1; // 设置点击音频音量
            audio.play();
        }
        else if (clickCount === 7) {
            const showButton = document.createElement('a');
            showButton.href = "index3.html";
            showButton.textContent = "点我鸭保镖小姐";
            showButton.classList.add('show-button');
            qypContainer.appendChild(showButton);

        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const audioFiles = [
        'srkl.wav' // 替换为你的第一个音频文件路径
    ];
    let clickCount = 0;
    document.getElementById('gift1').addEventListener('click', function () {
        clickCount++;
        if (clickCount === 1) {
            const audio = new Audio(audioFiles[0]);
            audio.volume = 1; // 设置点击音频音量
            audio.play();
            document.getElementById('gift2').style.opacity = '0';
            document.getElementById('gift3').style.opacity = '0';
        }
    });
});