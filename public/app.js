$(document).ready(() => {
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(err => console.log (err));

    $('#todoInput').keypress(event => {
        if(event.which === 13) {
           createTodo(); 
        }
    });

    $('.list').on('click', 'li', function(){
        updateTodo($(this));
      });

    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    })
});

function addTodos(todos){
    todos.forEach(todo => addTodo(todo));
}

function addTodo(todo) {
    var newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if (newTodo.completed) {
        todo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo (){
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(err => console.log(err))
}

function removeTodo(todo) {
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
        .then(data => todo.remove())
        .catch(err => console.log(err));
}

function updateTodo (todo) {
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function (updatedTodo) {
        todo.toggleClass("done");
        todo.data('completed', isDone)
    });
}