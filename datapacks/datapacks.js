function oneSixteenPacks() {
    sixteenContent =
        '<button class="accordion">Afk Display V1.1.1<span class="right-plus">+</span></button>' +
        '<div class="panel">' +
        'Afk Display V1.1.0 is a vanilla tweaks datapack. I added a small feature that i plan on expanding upon and have' +
        'released it in this update.<br>' +
        '<a href="downloads/afk display v1.1.1 - 1.16.zip" download>Download Here!</a>' +
        '</div>';
    document.getElementById("middleContent").innerHTML = sixteenContent;
    document.getElementById("v1.18").setAttribute('class', 'disabled');
    document.getElementById("v1.17").setAttribute('class', 'disabled');
    document.getElementById("v1.16").setAttribute('class', 'open');
    listener();
};

function oneSeventeenPacks() {
    seventeenContent =
        '<button class="accordion">Loot Boxes Gen3<span class="right-plus">+</span></button>' +
        '<div class="panel">' +
        'Loot Boxes Datapack adds a drop to fishing, mob kills, and more that generates random loot. Genetation Three' +
        'is the latest version. Generation Two was never released due to many bugs & other issues.' +
        '<a href="downloads/1.17/[1.17.x]Generation Three Vanilla+ Loot Boxes.zip" download>Download Here!</a>' +
        '</div>' +
        '<br><br>' +
        '<button class="accordion">Afk Display V1.1.1<span class="right-plus">+</span></button>' +
        '<div class="panel">' +
        'Afk Display V1.1.0 is a vanilla tweaks datapack. I added a small feature that i plan on expanding upon and have' +
        'released it in this update.<br>' +
        '<a href="datapacks/afk display v1.1.1 - 1.17.zip" download>Download Here!</a>' +
        '</div>';
    document.getElementById("middleContent").innerHTML = seventeenContent;
    document.getElementById("v1.18").setAttribute('class', 'disabled');
    document.getElementById("v1.17").setAttribute('class', 'open');
    document.getElementById("v1.16").setAttribute('class', 'disabled');
    listener();
};

function oneEighteenPacks() {
    eighteenContent =
    '<button class="accordion">Loot Boxes Gen3<span class="right-plus">+</span></button>' +
    '<div class="panel">' +
    'Loot Boxes Datapack adds a drop to fishing, mob kills, and more that generates random loot. Genetation Three' +
    'is the latest version. Generation Two was never released due to many bugs & other issues.' +
    '<a href="downloads/1.17/[1.17.x]Generation Three Vanilla+ Loot Boxes.zip" download>Download Here!</a>' +
    '</div>' +
    '<br><br>' +
    '<button class="accordion">Better Dragon Fight Vanilla+ V1.0.0<span class="right-plus">+</span></button>' +
    '<div class="panel">' +
    'The Better Dragon Fight Vanilla+ Pack is a pack that gives a new armor set and a new strategy to the ender dragon' +
    'fight.' +
    'Just one armor piece blows a full neterite set out of the water. However it is such a rare drop I wouldn\'t expect' +
    'a drop any time soon.<br>' +
    '<a href="downloads/1.18/[1.18.x] Better Dragon Fight V1.zip" download>Download Here!</a>' +
    '<a href="downloads/1.18/[1.18.x]Better Dragon Fight V1 NULLSCAPE COMPATIBILITY.zip" download>Download NullScape Compat Here!</a>' +
    '</div>';
    document.getElementById("middleContent").innerHTML = eighteenContent;
    document.getElementById("v1.18").setAttribute('class', 'open');
    document.getElementById("v1.17").setAttribute('class', 'disabled');
    document.getElementById("v1.16").setAttribute('class', 'disabled');
    listener();
}

function listener() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

window.onload = oneEighteenPacks();