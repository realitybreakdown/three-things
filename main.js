var nameBtn = document.getElementById('namebtn');
var foodBtn = document.getElementById('foodbtn');
var colorBtn = document.getElementById('colorbtn');

nameBtn.addEventListener('click', function(evt) {
  var li = document.createElement('li');
  var inp = document.getElementById('name');
  li.textContent = inp.value;
  document.getElementById('namebox').appendChild(li);
});

foodBtn.addEventListener('click', function(evt) {
  var li = document.createElement('li');
  var inp = document.getElementById('food');
  li.textContent = inp.value;
  document.getElementById('foodbox').appendChild(li);
});

colorBtn.addEventListener('click', function(evt) {
  var li = document.createElement('li');
  var inp = document.getElementById('color');
  li.textContent = inp.value;
  document.getElementById('colorbox').appendChild(li);
});