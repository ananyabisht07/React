const initState= {
    todos:[
        {id:1, content:'buy some milk'},
        {id:2, content:'play mario Kart'}
      ]
}

const addReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            
            return {
                ...state,
                todos:[...state.todos,action.todos]
            }
        case 'DELETE_TODO':
            //console.log(action)
            let newTodos = state.todos.filter(todo => {
                return action.id !== todo.id
            })
            return {
                ...state,
                todos: newTodos
            }
        default:
            return state ;
    }
    
}

export default addReducer