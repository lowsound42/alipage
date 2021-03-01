import { youtube } from '../data/youtube.js';

let videoBox = document.getElementById('videos');
document.addEventListener('click', function (e) {
    let targetElem = document.getElementById('youContainer');
    if (e.target.id == 'vtoggle') {
        if (videoBox.classList.contains('visible')) {
            targetElem.innerHTML = ' ';
            for (var key in youtube) {
                console.log(youtube[key].link);
                let container = document.createElement('div');
                container.classList.add('youCard');
                let youFrame = document.createElement('iframe');
                youFrame.classList.add('youtube');
                youFrame.src = youtube[key].link;
                youFrame.setAttribute('frameborder', '0');
                youFrame.setAttribute(
                    'allow',
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                );
                youFrame.setAttribute('allowfullscreen', 'yes');
                container.appendChild(youFrame);
                targetElem.appendChild(container);
            }
        }
    }
});
