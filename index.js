var thetodo = $('.thetodo');
var submit = $('#submit');
var clear = $('#clear');
if(localStorage.getItem('todos') != null){
  var list = JSON.parse(localStorage.getItem('todos'));
  onRefresh();
}
else{
  var list = [];
}
submit.on("click", addToDo);
clear.on("click", listClear);

function addToDo(e){
  e.preventDefault();
  var item = $('.text').val();
  thetodo.append(`
    <p class = "todoitem">${item}</p>
  `);
    list.push(item);
    localStorage.setItem('todos', JSON.stringify(list));
   $('.text').val("");
}

function onRefresh(){
  list.forEach(initAppend)
}

function initAppend(storedItem){
  thetodo.append(
    `<p class = "todoitem">${storedItem}</p>`
  )
}

function listClear(){
  localStorage.clear();
  location.reload();
}
