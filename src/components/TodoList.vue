<script setup lang="ts">
import { useTodo } from '../store/Todo'

let store = useTodo()
let {deleteAll, todoList} = store

</script>

<template>
  <v-card class="mx-auto" max-width="300">
    <v-list lines="one">
      <v-list-item
        v-for="item in todoList"
        :key="item.task"
        :title="item.task"
      >
        <template v-slot:append>
          <v-btn>
            <v-icon icon="mdi-delete" color="#333"></v-icon>
          </v-btn>
        </template>
      </v-list-item>
    </v-list>

    <div>
      <v-btn class="w-100" @click="deleteAll">Delete All</v-btn>
    </div>
  </v-card>
</template>
