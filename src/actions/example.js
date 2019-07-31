import store from '../store'

export function greet(greeting) {
  store.dispatch({
    type: 'GREETING',
    payload: greeting
  })
}

export function addTodo(todo){
  store.dispatch({
    type: "ADD_TODO",
    payload: todo
  })

}