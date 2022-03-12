const $ = document.querySelector.bind(document);

function Play() {
    const audio = $('audio');
    const btnToggle = $('.btn-toggle-play');
    var isPlaying = false;
    btnToggle.onclick = function() {
        if (!isPlaying) {
            audio.play();
            Lyrics()
            document.body.classList.add('playing');
            isPlaying = true;
        } else alert('Không dừng được đâu hâhah')
    }
    window.onkeydown = function(e) {
        if (e.code == 'Space') {
            btnToggle.click()
        }
    }
}

function Lyrics() {
    const lyricsE = $('.lyrics')
    for (let i = 0; i < lyrics.length; i++) {
        setTimeout(function timer() {
            lyricsE.classList.add('animate__fadeIn')
            setTimeout(function() {
                lyricsE.classList.remove('animate__fadeIn')
            }, lyrics[i].time * 50);
            lyricsE.innerText = lyrics[i].lyric
        }, 1000 * lyrics[i].time)
    }
}
Play();