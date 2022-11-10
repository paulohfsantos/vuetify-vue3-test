export interface ITodo {
  todoList: Todo[],
  todo: Todo
}

export interface Todo {
  task: string
  done: boolean
}
