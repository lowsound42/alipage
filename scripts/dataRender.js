import { data } from '../data/data.js';

let prevElem = null;

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('a-btn')) {
        if (prevElem) {
            if (prevElem.classList.contains('a-panel')) {
                prevElem.innerHTML = ' ';
            }
        }
        if (e.target.nextElementSibling.id) {
            var param = e.target.nextElementSibling.id;
        }
        let elem = e.target.nextElementSibling;
        if (param in data) {
            let count = 1;
            data[param].forEach((element) => {
                count++;
                let iframe = document.createElement('iframe');
                iframe.classList.add('iframe');
                console.log(element.type);
                if (element.type === 1) {
                    iframe.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${element.widget}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
                } else {
                    iframe.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${element.widget}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
                }
                setAttributes(iframe, {
                    height: '100%',
                    width: '100%',
                    height: '300',
                    scrolling: 'no',
                    frameborder: 'yes'
                });
                let review = document.createElement('div');
                let reviewText = document.createTextNode(element.review);
                if (element.review) {
                    review.classList.add('middle');
                    if (element.type === 2) {
                        review.classList.add('wat');
                    }
                    review.appendChild(reviewText);
                }
                let fiverrCard = document.createElement('div');
                fiverrCard.classList.add('fiverrCard');
                elem.appendChild(fiverrCard);
                fiverrCard.appendChild(iframe);
                fiverrCard.appendChild(review);
            });
        }
        prevElem = elem;
    }
});
