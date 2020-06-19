export const addTodo = (todo) => {
    return {
    type:'ADD_TODO',
    todos:todo
    }
 }

 export const deleteTodo = (id) => {
    return {
        type:'DELETE_TODO',
        id
    }
}