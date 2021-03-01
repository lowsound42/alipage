import { youtube } from '../data/youtube.js';

let videoBox = document.getElementById('videos');
document.addEventListener('click', function (e) {
    let targetElem = document.getElementById('youContainer');
    if (e.target.id == 'vtoggle') {
        if (videoBox.classList.contains('visible')) {
            for (var key in youtube) {
                console.log(youtube[key].link);
                let container = document.createElement('div');
                container.classList.add('youCard');
                let youFrame = document.createElement('iframe');
                youFrame.classList.add('youtube');
                youFrame.src = youtube[key].link;
                container.appendChild(youFrame);
                targetElem.appendChild(container);
            }
        }
    }
});
