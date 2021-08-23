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
    } else {
        console.log('Error...? From setCake()');
    }
};

function submit() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var font = document.getElementById('font-in').value;

    var name = document.getElementById('user').value;

    var requiredValues = 0;
    if (!name) {
        alert('You must enter a name!');
    } else if (name) {
        requiredValues = requiredValues + 1;
    } else {
        alert('Unknown error!');
    }

    if (color1 = '#00FF33') {
        if (color2 = '#0091FF') {
            colorConfirm = confirm('You are using the default colors. Are you sure you want to do this?');
            if (colorConfirm === true) {
                requiredValues = requiredValues + 1;
            } else if (colorConfirm === false) {
                return alert('You have decided to use custom colors. Submit again if this was a mistake!');
            }
        } else return;
    } else if (color1 && color2) {
        requiredValues = requiredValues + 1;
    }

    if (requiredValues < 2) {
        return;
    } else if (requiredValues >= 2) {
        localStorage.setItem('BdayPerson', name);
        localStorage.setItem('color1', color1);
        localStorage.setItem('color2', color2);
        if (font) {
            localStorage.setItem('font', font);
        }
        location.replace('http://adfoc.us/53726676042623'); //ad link.
    }
};

function dirSubmit() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var font = document.getElementById('font-in').value;

    var name = document.getElementById('user').value;

    var requiredValues = 0;
    if (!name) {
        alert('You must enter a name!');
    } else if (name) {
        requiredValues = requiredValues + 1;
    } else {
        alert('Unknown error!');
    }

    if (color1 = '#00FF33') {
        if (color2 = '#0091FF') {
            colorConfirm = confirm('You are using the default colors. Are you sure you want to do this?');
            if (colorConfirm === true) {
                requiredValues = requiredValues + 1;
            } else if (colorConfirm === false) {
                return alert('You have decided to use custom colors. Submit again if this was a mistake!');
            }
        } else return;
    } else if (color1 && color2) {
        requiredValues = requiredValues + 1;
    }

    if (requiredValues < 2) {
        return;
    } else if (requiredValues >= 2) {
        localStorage.setItem('BdayPerson', name);
        localStorage.setItem('color1', color1);
        localStorage.setItem('color2', color2);
        if (font) {
            localStorage.setItem('font', font);
        }
        location.replace('birthday.html');
    }
};

/*function submit() {
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
} else {
  return alert('Unknown error. If this keeps happening please report on my discord!')
}
if (!color1 || !color2) {
  if (!color1S || !color2S) {
    return alert('You must choose both colors!');
  }
} else if (color1S && color2S) {
  savedColor = confirm('You are using previously saved colors. Do you still want to? Press "Cancel" to set new colors');
  if (savedColor === true) {} 
  else if (savedColor === false) {
    return alert('You decided to set custom colors. Submit again if this was a mistake!');
  }
} else if (color1 && color2) {
  localStorage.setItem('color1', color1);
  localStorage.setItem('color2', color2);
} else {
  return alert('Unknown error. If this keeps happening please report on my discord!')
}
if (!localStorage.getItem('BdayPerson')) {
  return;
} else {
  location.replace('birthday.html');
}
};*/
function setDefaultColor() {
    document.getElementById('color1').setAttribute('value', '#00FF33');
    document.getElementById('color2').setAttribute('value', '#0091FF');
};