let personalBox = document.getElementById('personal');

document.addEventListener('click', function (e) {
    if (e.target.id == 'ptoggle' && personalBox.classList.contains('visible')) {
        personalBox.innerHTML = ' ';
        let header = document.createElement('h2');
        let headerText = document.createTextNode('Ancient Mariner: Mix');
        header.classList.add('persHeader');
        header.appendChild(headerText);
        let para = document.createElement('p');
        let divPers = document.createElement('div');
        divPers.classList.add('divPers');
        let paraText = document.createTextNode(
            'This is the stuff I write and record for myself'
        );
        para.appendChild(paraText);
        para.classList.add('fiverrPara');
        let iframe = document.createElement('iframe');
        iframe.src =
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1215136285&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false';
        iframe.setAttribute('height', '450px');
        divPers.appendChild(para);
        divPers.appendChild(header);
        personalBox.appendChild(divPers);
        personalBox.appendChild(iframe);
    }
});
