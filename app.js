function showAdder() {
    let x = document.getElementById("message-adder");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function tabToList() {
  let x = document.getElementById('comments');
  let y = document.getElementById('todo-list');
  let a = document.getElementById('todo-tab');
  let b = document.getElementById('comment-tab');
    x.style.display = "none";
    y.style.display = "block";
    a.style.backgroundColor = "lightgray";
    b.style.backgroundColor = "white";
}

function tabToComent() {
  let x = document.getElementById('comments');
  let y = document.getElementById('todo-list');
  let a = document.getElementById('todo-tab');
  let b = document.getElementById('comment-tab');
    y.style.display = "none";
    x.style.display = "block";
    b.style.backgroundColor = "lightgray";
    a.style.backgroundColor = "white";
}

function tabSearching() {
  let x = document.getElementById('checkboxes');
  let y = document.getElementById('search-input');
  if (x.style.display === "flex"){
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
  }
}

const list = document.querySelector('#todo-list ul');
const forms = document.forms;

list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

list.addEventListener('click', function (e) {
  if(e.target.className == 'makeDone'){
  document.querySelector('#todo-list ul li .name').classList.toggle('done');
  }
});

const message = document.querySelector('#comments');

const searchBar = forms['search-input'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const messages = message.getElementsByClassName('comment');
  Array.from(messages).forEach((messages) => {
    const pText = messages.children[1];
    const text = pText.textContent;
    if(text.toLowerCase().indexOf(e.target.value) != -1){
      messages.style.display = 'grid';
    } else {
      messages.style.display = 'none';
    }

  });
});

const addForm = forms['todo-tab'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const note = document.createElement('span');
  const makingDone = document.createElement('span');
  const deleteBtn = document.createElement('span');

  note.textContent = value;
  makingDone.textContent = '@';
  deleteBtn.textContent = '\u00D7';

  note.classList.add('name');
  makingDone.classList.add('makeDone');
  deleteBtn.classList.add('delete');

  li.appendChild(note);
  li.appendChild(makingDone);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});