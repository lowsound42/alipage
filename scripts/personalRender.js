let personalBox = document.getElementById('personal');

document.addEventListener('click', function (e) {
    console.log(e.target.id);
    if (e.target.id == 'ptoggle' && personalBox.classList.contains('visible')) {
        personalBox.innerHTML = ' ';
        let iframe = document.createElement('iframe');
        iframe.src =
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1215136285&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false';
        iframe.setAttribute('height', '450px');
        personalBox.appendChild(iframe);
    }
});
