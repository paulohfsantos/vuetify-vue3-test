import { defineStore } from "pinia";
import { ITodo, Todo } from './../types/todo';

export const useTodo = defineStore('todo', {
  state: () => ({
    todoList: [
      { done: false, task: "task 1" },
      { done: true, task: "task 2" },
      { done: false, task: "task 3" },
      { done: true, task: "task 4" },
    ],
    todo: {
      done: false,
      task: ""
    }
  } as ITodo),

  actions: {
    setTodo(item: Todo) {
      // this.todo.done = item.done
      // this.todo.task = item.task
      this.todoList.push(item)
    },

    deleteAll() {
      this.todoList = []
    }
  }
})
