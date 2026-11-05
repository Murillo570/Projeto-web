const listaVideosYouTube = [
    '5trE9WOJmQU',
    'pVwsISZA8jw',
    'IIHWUSy8IEE',
    'B8e5cOrN0Lk'
];

function obterIdAleatorio() {
    const indice = Math.floor(Math.random() * listaVideosYouTube.length);
    return listaVideosYouTube[indice];
}

function carregarVideoAleatorio() {
    const iframe = document.getElementById('video-fundo-iframe');
    if (!iframe) return;

    const idVideo = obterIdAleatorio();
    
    iframe.src = `https://www.youtube.com/embed/${idVideo}?autoplay=1&mute=1&controls=0&loop=1&playlist=${idVideo}&enablejsapi=1`;
}

document.addEventListener('DOMContentLoaded', carregarVideoAleatorio);