document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        '我还有一个节目',
        '期不期待',
        '怎么样，是不是觉得我多才又多艺'
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
            showButton.href = "index7.html";
            showButton.textContent = "看看节目";
            showButton.classList.add('show-button');
            h2Container.appendChild(showButton);

            clickCount++;
        }
    });
});