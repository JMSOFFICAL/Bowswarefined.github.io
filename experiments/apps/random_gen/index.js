function generateRandomNum() {
  var maxNum = document.getElementById('maxNum').value;

  if (!maxNum) {
    return alert('Please input a maximum number!');
  }
  
  var math = Math.floor((Math.random() * (maxNum)) + 1);
  document.getElementById('number').innerHTML = math;
}