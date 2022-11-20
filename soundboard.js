var snareButtonElement = document.getElementById('snareButton');
// Lol Kick Buttin'!
var kickButtonElement = document.getElementById('kickButton');
var crashButtonElement = document.getElementById('crashButton');
var hatsButtonElement = document.getElementById('hatsButton');


function playSnare ()
{
    var sound = document.getElementById('snareSound');

    // https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
    if (sound.paused)
    {
        sound.play();
    }

    else {
        sound.currentTime = 0;
    }
}

function playKick ()
{
    var sound = document.getElementById('kickSound');
    if (sound.paused)
    {
        sound.play();
    }

    else {
        sound.currentTime = 0;
    }
}

function playCrash ()
{
    var sound = document.getElementById('crashSound');
    if (sound.paused)
    {
        sound.play();
    }

    else {
        sound.currentTime = 0;
    }
}

function playHats ()
{
    var sound = document.getElementById('hatsSound');
    if (sound.paused)
    {
        sound.play();
    }

    else {
        sound.currentTime = 0;
    }
}

snareButtonElement.addEventListener('click', playSnare);

snareButtonElement.addEventListener('mouseenter', playSnare);

kickButtonElement.addEventListener('click', playKick);
kickButtonElement.addEventListener('mouseenter', playKick);

crashButtonElement.addEventListener('click', playCrash);
crashButtonElement.addEventListener('mouseenter', playCrash);

hatsButtonElement.addEventListener('click', playHats);
hatsButtonElement.addEventListener('mouseenter', playHats);