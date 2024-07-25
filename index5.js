document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        '怎么样',
        '我唱歌还是很好听吧',
        '是不是要被我迷倒啦',
        '来吧',
        '把蜡烛吹灭吧'
    ];

    let clickCount = 0;

    document.body.addEventListener('click', function () {
        const h2Container = document.querySelector('.duihua');
        if (clickCount < texts.length) {
            if (clickCount > 0) {
                const previousText = h2Container.querySelector('p:last-child');
                if (previousText) {
                    previousText.classList.add('transparent');
                }
            }


            const text = texts[clickCount];
            const p = document.createElement('p');
            p.classList.add('new-text');

            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.classList.add('char');
                p.appendChild(span);
            }

            h2Container.appendChild(p);

            const chars = p.querySelectorAll('.char');
            chars.forEach((char, index) => {
                setTimeout(() => {
                    char.style.opacity = 1;
                }, index * 100); // 每个字出现的时间间隔
            });



            clickCount++;
        } else if (clickCount === texts.length) {
            const showButton = document.createElement('a');
            showButton.href = "index6.html";
            showButton.textContent = "吹灭蜡烛";
            showButton.classList.add('show-button');
            h2Container.appendChild(showButton);

            clickCount++;
        }
    });
});