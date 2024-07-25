document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    window.onload = function () {
        console.log('window.onload event fired');
        var video = document.getElementById('fullscreenVideo');
        if (video) {
            console.log('Video element found');
            video.play().then(() => {
                console.log('Video started playing');
            }).catch(error => {
                console.error('Video play failed:', error);
            });

            video.addEventListener('ended', function () {
                console.log('Video ended event fired');
                window.location.href = 'index8.html'; // 替换为你要跳转的网页地址
            });
        } else {
            console.error('Video element not found');
        }
    };
});
