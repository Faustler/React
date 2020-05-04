fetch('https://todo-a7861.firebaseio.com/todos.json').then(res => res.json()).then(res => {
    document.querySelectorAll(".app-list-item-label").forEach((text, index)  => {
        text.innerHTML = res[index].title;
    });
})