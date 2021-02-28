import { data } from '../data/data.js';

let prevElem = null;

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

document.addEventListener('click', function (e) {
    //check is the right element clicked
    if (prevElem) {
        if (prevElem.classList.contains('a-panel')) {
            prevElem.innerHTML = ' ';
        }
    }
    console.log(e.target.nextElementSibling);
    let param = e.target.nextElementSibling.id;
    let elem = e.target.nextElementSibling;
    if (param in data) {
        let count = 1;
        data[param].forEach((element) => {
            // console.log(element);
            let div = document.createElement('div');
            div.classList.add('test');
            let paraText = document.createTextNode(count);
            let final = div.appendChild(paraText);
            count++;
            let iframe = document.createElement('iframe');
            iframe.classList.add('iframe');
            (element.type = 1)
                ? (iframe.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${element.widget}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`)
                : (iframe.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${element.widget}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`);
            setAttributes(iframe, {
                height: '100%',
                width: '60%',
                height: '100',
                scrolling: 'no',
                frameborder: 'yes'
            });
            elem.appendChild(iframe);
        });
    }
    prevElem = elem;
});
