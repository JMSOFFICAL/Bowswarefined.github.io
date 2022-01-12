function webLoad() {
    /*Declare Variables*/
    var bDayName;
    var bDayName2;
    var bDayName3;
    var bDayName_default = "Name Here";
    var color1;
    var color1_default = "#FF0000";
    var color2;
    var color2_default = "#0000FF";
    var cake_default = "1";
    var font_default = "Oxygen";
    /*Setting random Music*/
    var songs = [
        'media/Happy_Birthday.mp3'
    ];
    var randomSong = Math.floor(Math.random() * songs.length);
    document.getElementById('bday').setAttribute('src', songs[randomSong]);
    var cake = localStorage.getItem('cake');
    /*Local Storage*/
    bDayName = localStorage.getItem('BdayPerson');
    bDayName2 = localStorage.getItem('BdayPerson2');
    bDayName3 = localStorage.getItem('BdayPerson3');
    color1 = localStorage.getItem('color1');
    color2 = localStorage.getItem('color2');
    /*Custom font*/
    document.getElementById("body").style.fontFamily = localStorage.getItem('font');
    if (!localStorage.getItem('font')) {
        document.getElementById("body").style.fontFamily = "Oxygen";
        localStorage.setItem('font', font_default);
    }
    if (!localStorage.getItem('BdayPerson')) {
        localStorage.setItem('BdayPerson', bDayName_default);
        bDayName = bDayName_default;
    } else if (!localStorage.getItem('BdayPerson2')) {
        //} else if (!localStorage.getItem('BdayPerson3')) {
        //document.getElementById("and2").style.display = "none";
        //document.getElementById("BDayName3").style.display = "none";
    } else if (!localStorage.getItem('color1')) {
        localStorage.setItem('color1', color1_default);
        color1 = color1_default;
    } else if (!localStorage.getItem('color2')) {
        localStorage.setItem('color2', color2_default);
        color2 = color2_default;
    } else if (!localStorage.getItem('cake')) {
        localStorage.setItem('cake', cake_default);
        cake = cake_default;
    } else {
        console.log('Everything is working, or some other error occured!')
    }
    document.title = 'Happy Birthday ' + bDayName + '!';
    /*Change Style tag innerHTML*/
    cakes();
}

function resetName() {
    stop();
    var end = new Audio('media/windowsXPshutdown.mp3');
    end.play();
    setTimeout(function() {
        location.replace('index.html');
    }, 3000);
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('BdayPerson');
    localStorage.removeItem('cake');
    localStorage.removeItem('font');
};

function stop() {
    audio = document.getElementById('bday');
    audio.pause();
};

function manualStop() {
    document.getElementById('music_toggle').innerHTML = "Start Music";
    document.getElementById('music_toggle').setAttribute('onclick', 'manualStart()');
    audio = document.getElementById('bday');
    audio.pause();
    localStorage.setItem('music_status', false);
};

function manualStart() {
    document.getElementById('music_toggle').innerHTML = "Stop Music";
    document.getElementById('music_toggle').setAttribute('onclick', 'manualStop()');
    audio = document.getElementById('bday');
    audio.play();
    localStorage.setItem('music_status', true);
};

window.onload = webLoad();