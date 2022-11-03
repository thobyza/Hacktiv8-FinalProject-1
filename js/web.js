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
  "Design new interior chair for project x",
  "Meeting with client for product review at x",
  "Site visit for lighting design at x"
];

function clearTodoList(){
  const todoListBody = document.getElementById("todoListBody");
  while(todoListBody.firstChild){
    todoListBody.removeChild(todoListBody.firstChild)
    // pengecekan, kalau masih ada child element maka akan dihapus, dikosongkan
  }
}

// menampilkan ToDo list
                // iterasi data dari todoList=[] lalu masukkan ke list(body)
function displayTodoList(){
  clearTodoList();          /* first: clear yg ada di todolist*/

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];   /*ambil todo one by one */
    
    // setelah ambil
    // membuat elemen table baru 
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    // tambahkan button ke new list
    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Done";
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todoListBody = document.getElementById("todoListBody");
    todoListBody.appendChild(tr);
  }
}


// submit/add task ke ToDo list
document.forms['todo-form'].onsubmit = function (event){
  event.preventDefault();         /* prevent auto submit */


  const todo = document.forms['todo-form']['todo'].value;   /*ambil input/value todo(task) nya */
  todoList.push(todo);                                      /*tambahkan task baru ke todo list */


  document.forms['todo-form'].reset();                      /*clear/hapus task input setelah add todo baru */

  console.info(todoList);
  displayTodoList();                      /*setelah selesai add task, lakukan displayTodoList() */
};

displayTodoList(); 