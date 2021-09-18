function setCake() {
    //close
    var e = document.getElementById("cakes");
    var value = e.options[e.selectedIndex].value;
    if (value === "1") {
        document.getElementById("cake-prev").src = "Chocolate.png";
    } else if (value === "2") {
        document.getElementById("cake-prev").src = "Platter.png";
    } else if (value === "3") {
        document.getElementById("cake-prev").src = "Strawberry.png";
    } else if (value === "4") {
        document.getElementById("cake-prev").src = "Vanilla.png";
    } else if (value === "5") {
        document.getElementById("cake-prev").src = "Fondue.png";
    } else if (value === "6") {
        document.getElementById("cake-prev").src = "Slice.png";
    } else {
        console.log('Error...? From setCake()');
    }
};

function submit() {
    var requiredValues = 0;
    //names
    var name1 = document.getElementById('user').value;
    var name2 = document.getElementById('user2').value;
    var name3 = document.getElementById('user3').value;

    if (!name1) {
        return alert('You must enter a name!');
    } else if (name1) {
        requiredValues = requiredValues + 1;
    } else {
        alert('Something went wrong. Please check the console.');
        console.log('Please join the discord server and report this error: ERROR CODE 11111-0: LN 35.js')
    }
    //colors
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;

    //cakes
    var e = document.getElementById("cakes");
    var value = e.options[e.selectedIndex].value;
    localStorage.setItem("cake", value);

    //font
    var font = document.getElementById('font-in').value;
    //submit all
    if (requiredValues < 3) {
        return;
    } else if (requiredValues >= 3) {
        localStorage.setItem('BdayPerson', name1);
        if (name2) {
            localStorage.setItem('BdayPerson2', name2);
        }
        if (name3) {
            localStorage.setItem('BdayPerson3', name3);
        }
        localStorage.setItem('color1', color1);
        localStorage.setItem('color2', color2);
        if (font) {
            localStorage.setItem('font', font);
        }
        location.replace('http://adfoc.us/53726676042623'); //ad link.
    } else {
        alert('Something Went Wrong! Please Check Console!');
        console.log('Please join the discord server and report this error: ERROR CODE 22222-0: LN 67.js');
    }
};

function dirSubmit() {
    var requiredValues = 0;
    //names
    var name1 = document.getElementById('user').value;
    var name2 = document.getElementById('user2').value;
    var name3 = document.getElementById('user3').value;

    if (!name1) {
        return alert('You must enter a name!');
    } else if (name1) {
        requiredValues = requiredValues + 1;
    } else {
        alert('Something went wrong. Please check the console.');
        console.log('Please join the discord server and report this error: ERROR CODE 11111-1: LN 84.js')
    }
    //colors
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;

    //cakes
    var e = document.getElementById("cakes");
    var value = e.options[e.selectedIndex].value;
    localStorage.setItem("cake", value);

    //font
    var font = document.getElementById('font-in').value;
    //submit all
    if (requiredValues < 3) {
        return;
    } else if (requiredValues >= 3) {
        localStorage.setItem('BdayPerson', name1);
        if (name2) {
            localStorage.setItem('BdayPerson2', name2);
        }
        if (name3) {
            localStorage.setItem('BdayPerson3', name3);
        }
        localStorage.setItem('color1', color1);
        localStorage.setItem('color2', color2);
        if (font) {
            localStorage.setItem('font', font);
        }
        location.replace('birthday.html'); //direct link
    } else {
        alert('Something Went Wrong! Please Check Console!');
        console.log('Please join the discord server and report this error: ERROR CODE 22222-1: LN 116.js');
    }
};

function setDefaultColor() {
    document.getElementById('color1').value = '#00FF33'
    document.getElementById('color2').value = '#0091FF'
};