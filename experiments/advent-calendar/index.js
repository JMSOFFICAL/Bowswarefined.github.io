var listItems = 1;

function preGen(day) {
  if (day == 1) {
    document.getElementById('day1').innerHTML = 'Day One Task: Start The Advent Calendar';
    localStorage.setItem('day1-2021', 'Start The Advent Calendar');
  } else if (day == 6) {
    document.getElementById('day6').innerHTML = 'Day Six Task: Participate in Hypixel SB Bingo';
    localStorage.setItem('day6-2021', 'Participate in Hypixel SB Bingo');
  } else if (day == 7) {
    document.getElementById('day7').innerHTML = 'Day Seven Task: Hobbit Development(Ender Rage V1.0)';
    localStorage.setItem('day7-2021', 'Hobbit Development(Ender Rage V1.0)');
  } else if (day == 14) {
    document.getElementById('day14').innerHTML = 'Day Fourteen Task: Hobbit Testing';
    localStorage.setItem('day14-2021', 'Hobbit Testing');
  } else if (day == 21) {
    document.getElementById('day21').innerHTML = 'Day Twenty-One Task: Cosmic Skyblock';
    localStorage.setItem('day21-2021', 'Cosmic Skyblock');
  } else if (day == 25) {
    document.getElementById('day25').innerHTML = 'Day Twenty-Five Task: Datapack Structure Building';
    localStorage.setItem('day25-2021', 'Datapack Structure Building');
  } else {
    console.log('No task for today');
  }
}

function generate(number) {
  if (localStorage.getItem('devKey') == 367344 && number == 1 || number == 6 || number == 7 || number == 14 || number == 21 || number == 25) {
    preGen(number);
  }
  if (localStorage.getItem(`day${number}-2021`) == null) {
    function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
    var currentTask = 1;
    var tasks = [];
    while (currentTask <= listItems) {
      task = document.getElementById(`task${currentTask}`).value;
      console.log(listItems);
      console.log(task);
      console.log(currentTask);
      tasks.push(task);
      currentTask = currentTask + 1;
    }
    console.log(tasks);
    var task = choose(tasks);
    console.log(task);
    document.getElementById(`day${number}`).innerHTML = `Day ${number} task:` + task;
    localStorage.setItem(`day${number}-2021`, task);
  }
}

function addListItem(number) {
  var item = `<input type="text" id="task${number}" value="">` +
    `<span id="remove">` +
    `<button onclick="removeListItem(${number})">Remove</button>` +
    `<span id="error"></span>` +
    `<button onclick="addListItem(${number + 1})">Add</button>` +
    `</span>`;
  document.getElementById('remove').remove();
  document.getElementById('list').insertAdjacentHTML('beforeend', item);
  listItems = number;
}

function removeListItem(number) {
  if (number == 1) {
    return document.getElementById('error').innerHTML = 'You may not remove the first task item!';
  } else {
    var item = `<span id="remove">` +
      `<button onclick="removeListItem(${number - 1})">Remove</button>` +
      `<span id="error"></span>` +
      `<button onclick="addListItem(${number})">Add</button>` +
      `</span>`;
    document.getElementById('remove').remove();
    document.getElementById(`task${number}`).remove();
    document.getElementById('list').insertAdjacentHTML('beforeend', item);
    listItems = number - 1;
  }
}

function webLoad() {
  if (localStorage.getItem('day1-2021') != null) {
    document.getElementById('day1').innerHTML = `Day One Task: ${localStorage.getItem('day1-2021')}`;
  }
  if (localStorage.getItem('day2-2021') != null) {
    document.getElementById('day2').innerHTML = `Day Two Task: ${localStorage.getItem('day2-2021')}`;
  }
  if (localStorage.getItem('day3-2021') != null) {
    document.getElementById('day3').innerHTML = `Day Three Task: ${localStorage.getItem('day3-2021')}`;
  }
  if (localStorage.getItem('day4-2021') != null) {
    document.getElementById('day4').innerHTML = `Day Four Task: ${localStorage.getItem('day4-2021')}`;
  }
  if (localStorage.getItem('day5-2021') != null) {
    document.getElementById('day5').innerHTML = `Day Five Task: ${localStorage.getItem('day5-2021')}`;
  }
  if (localStorage.getItem('day6-2021') != null) {
    document.getElementById('day6').innerHTML = `Day Six Task: ${localStorage.getItem('day6-2021')}`;
  }
  if (localStorage.getItem('day7-2021') != null) {
    document.getElementById('day7').innerHTML = `Day Seven Task: ${localStorage.getItem('day7-2021')}`;
  }
  if (localStorage.getItem('day8-2021') != null) {
    document.getElementById('day8').innerHTML = `Day Eight Task: ${localStorage.getItem('day8-2021')}`;
  }
  if (localStorage.getItem('day9-2021') != null) {
    document.getElementById('day9').innerHTML = `Day Nine Task: ${localStorage.getItem('day9-2021')}`;
  }
  if (localStorage.getItem('day10-2021') != null) {
    document.getElementById('day10').innerHTML = `Day Ten Task: ${localStorage.getItem('day10-2021')}`;
  }
  if (localStorage.getItem('day11-2021') != null) {
    document.getElementById('day11').innerHTML = `Day Eleven Task: ${localStorage.getItem('day11-2021')}`;
  }
  if (localStorage.getItem('day12-2021') != null) {
    document.getElementById('day12').innerHTML = `Day Twelve Task: ${localStorage.getItem('day12-2021')}`;
  }
  if (localStorage.getItem('day13-2021') != null) { 
    document.getElementById('day13').innerHTML = `Day Thirteen Task: ${localStorage.getItem('day13-2021')}`;
  }
  if (localStorage.getItem('day14-2021') != null) {
    document.getElementById('day14').innerHTML = `Day Fourteen Task: ${localStorage.getItem('day14-2021')}`;
  }
  if (localStorage.getItem('day15-2021') != null) {
    document.getElementById('day15').innerHTML = `Day Fifteen Task: ${localStorage.getItem('day15-2021')}`;
  }
  if (localStorage.getItem('day16-2021') != null) {
    document.getElementById('day16').innerHTML = `Day Sixteen Task: ${localStorage.getItem('day16-2021')}`;
  }
  if (localStorage.getItem('day17-2021') != null) {
    document.getElementById('day17').innerHTML = `Day Seventeen Task: ${localStorage.getItem('day17-2021')}`;
  }
  if (localStorage.getItem('day18-2021') != null) {
    document.getElementById('day18').innerHTML = `Day Eighteen Task: ${localStorage.getItem('day18-2021')}`;
  }
  if (localStorage.getItem('day19-2021') != null) {
    document.getElementById('day19').innerHTML = `Day Nineteen Task: ${localStorage.getItem('day19-2021')}`;
  }
  if (localStorage.getItem('day20-2021') != null) {
    document.getElementById('day20').innerHTML = `Day Twenty Task: ${localStorage.getItem('day20-2021')}`;
  }
  if (localStorage.getItem('day21-2021') != null) {
    document.getElementById('day21').innerHTML = `Day Twenty-One Task: ${localStorage.getItem('day21-2021')}`;
  }
  if (localStorage.getItem('day22-2021') != null) {
    document.getElementById('day22').innerHTML = `Day Twenty-Two Task: ${localStorage.getItem('day22-2021')}`;
  }
  if (localStorage.getItem('day23-2021') != null) {
    document.getElementById('day23').innerHTML = `Day Twenty-Three Task: ${localStorage.getItem('day23-2021')}`;
  }
  if (localStorage.getItem('day24-2021') != null) {
    document.getElementById('day24').innerHTML = `Day Twenty-Four Task: ${localStorage.getItem('day24-2021')}`;
  }
  if (localStorage.getItem('day25-2021') != null) {
    document.getElementById('day25').innerHTML = `Day Twenty-Five Task: ${localStorage.getItem('day25-2021')}`;
  }
}

document.onload = webLoad();