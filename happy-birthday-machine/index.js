function setCake() {
    var e = document.getElementById("cakes");
    var value = e.options[e.selectedIndex].value;
    localStorage.setItem("cake", value);
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
}

/*function submit() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var font = document.getElementById('font-in').value;

    var name = document.getElementById('user').value;
    if (!name) {
        return alert('You must enter a name!');
    } else if (name) {
        localStorage.setItem('BdayPerson', name);
    } else {
        return alert('Unknown error!');
    }
}*/

function submit() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var font = document.getElementById('font-in').value;
    localStorage.removeItem('BdayPerson');
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.setItem('color1', color1);
    localStorage.setItem('color2', color2);
    localStorage.removeItem('font');
    localStorage.setItem('font', font);
    var name = document.getElementById('user').value;
    if (!name) {
        return alert('You must enter a name!');
    } else if (name) {
        localStorage.setItem('BdayPerson', name);
        location.replace('birthday.html');
    } else {
        return alert('Unknown error. If this keeps happening please report on my discord!')
    }
    if (!color1 || !color2) {
        if (!color1S || !color2S) {
            return alert('You must choose both colors!');
        }
    } else if (color1S && color2S) {
        savedColor = confirm('You are using previously saved colors. Do you still want to? Press "Cancel" to set new colors');
        if (savedColor === true) {} else if (savedColor === false) {
            return alert('You decided to set custom colors. Submit again if this was a mistake!');
        }
    } else if (color1 && color2) {
        localStorage.setItem('color1', color1);
        localStorage.setItem('color2', color2);
        location.replace('birthday.html');
    } else {
        return alert('Unknown error. If this keeps happening please report on my discord!')
    }

    if (!localStorage.getItem('BdayPerson')) {
        return;
    } else {
        location.replace('birthday.html');
    }

};

function setDefaultColor() {
    document.getElementById('color1').setAttribute('value', '#00FF33');
    document.getElementById('color2').setAttribute('value', '#0091FF');
}


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}