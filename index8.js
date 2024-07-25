document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        '你的礼物我已经托人去送你了',
        '这是ta的电话：17823865693',
        '取件码在ta那',
        '怎么样，这个生日过的满意吗？',
        '希望你每天都能够开心，小寿星',
        '就算水母学会走路，海龟学会爬树，鲨鱼改成吃素，你也要一直开心    (完)'
    ];
    const images = [
        '13qy.png',
        '2qy.png',
        '13qy.png',
        '2qy.png',
        '4qy.png',
        '5qy.png'
    ];
    let clickCount = 0;

    document.body.addEventListener('click', function () {
        const imgContainer = document.querySelector('.tupian');
        const h2Container = document.querySelector('.text');

        if (!imgContainer || !h2Container) {
            console.error('Container elements not found');
            return;
        }

        if (clickCount < texts.length) {
            if (clickCount > 0) {
                const previousText = h2Container.querySelector('p:last-child');
                const previousImage = imgContainer.querySelector('img:last-child');
                if (previousText && previousImage) {
                    previousText.classList.add('transparent'); previousImage.classList.add('transparent');
                }

            }

            const text = texts[clickCount];
            const p = document.createElement('p');
            p.classList.add('new-text');

            const img = document.createElement('img');
            img.src = images[clickCount];
            img.classList.add('new-image');

            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.classList.add('char');
                p.appendChild(span);
            }

            h2Container.appendChild(p);
            imgContainer.appendChild(img);

            const chars = p.querySelectorAll('.char');
            chars.forEach((char, index) => {
                setTimeout(() => {
                    char.style.opacity = 1;
                }, index * 100); // 每个字出现的时间间隔
            });

            clickCount++;
        } else {
            console.log('All texts and images have been displayed');
        }
    });
});
