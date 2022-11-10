<template>
  <v-app>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import TodoList from './components/TodoList.vue';

import { useTodo } from './store/Todo'

let store = useTodo()
let state = store.todo

const hello = "Hello there"
</script>
