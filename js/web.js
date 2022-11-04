// Navbar effect
window.onscroll = function(){
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}



// -------------------- ToDo List -------------------------- //
const todoList = [
  "Design new interior chair for project B",
  "Meeting with client for product review at Meeting room",
  "Site visit for lighting design at Rue Hoffmann"
];

// function untuk hapus elemen sebelum add task baru
function clearTodoList(){
  const todoListBody = document.getElementById("todoListBody");
  while(todoListBody.firstChild){
    todoListBody.removeChild(todoListBody.firstChild)
    // pengecekan, kalau masih ada child element maka akan dihapus, dikosongkan
  }
}

// function removeTodoList index ke-berapa yg akan dihapus
function removeTodoList(index){
  todoList.splice(index, 1);  /* yg mau dihapus index ke brp (mau yg mana ??)*/
  displayTodoList();
}

function addTodoList(index, todo){
    // setelah ambil
    // buat elemen table baru 
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    // tambahkan button ke new list
    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function (){
      removeTodoList(index);
    };
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todoListBody = document.getElementById("todoListBody");
    todoListBody.appendChild(tr);
}

// menampilkan ToDo list
                // iterasi data dari todoList=[] lalu masukkan ke list(body)
function displayTodoList(){
  clearTodoList();          /* first: clear yg ada di todolist*/

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];   /*ambil todo one by one */
    
    const searchText = document.getElementById("search").value.toLowerCase();

    // compare
    if (todo.toLowerCase().includes(searchText)){
      addTodoList(i, todo);
    }
  }
}


// submit/add task ke ToDo list
document.forms['todoForm'].onsubmit = function (event){
  event.preventDefault();         /* prevent auto submit */


  const todo = document.forms['todoForm']['todo'].value;   /*ambil input/value todo(task) nya */
  todoList.push(todo);                                      /*tambahkan task baru ke todo list */


  document.forms['todoForm'].reset();                      /*clear/hapus task input setelah add todo baru */

  console.log(todoList);
  displayTodoList();                      /*setelah selesai add task, lakukan displayTodoList() */
};

// Pencarian task Todo List
const searchInput = document.getElementById("search");
searchInput.onkeyup = function (){
  displayTodoList();
}

searchInput.onkeydown = function (){
  displayTodoList();
}



displayTodoList(); 
