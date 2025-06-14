<script setup>
import { ref, onMounted } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import axios from 'axios'

const todos = ref([])
const API = 'http://localhost:3000/api/todos'

async function fetchTodos() {
  const res = await axios.get(API)
  todos.value = res.data
}

async function addTodo(todo) {
  const res = await axios.post(API, todo)
  todos.value.push(res.data)
}

async function removeTodo(id) {
  await axios.delete(`${API}/${id}`)
  todos.value = todos.value.filter(t => t.id !== id)
}

async function toggleTodo(todo) {
  const newStatus = todo.completed === 'done' ? 'pending' : 'done'
  await axios.put(`${API}/${todo.id}`, { ...todo, completed: newStatus })
  todo.completed = newStatus
}

onMounted(fetchTodos)
</script>

<template>
  <main>
    <div class="logo-bar">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" class="logo vue" />
      <span class="plus">+</span>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" class="logo express" />
    </div>
    <h1>To-Do List</h1>
    <TodoForm @add="addTodo" />
    <TodoList :todos="todos" @remove="removeTodo" @toggle="toggleTodo" />
  </main>
</template>

<style scoped>
main {
  max-width: 480px;
  margin: 3rem auto;
  padding: 2.5rem 2rem 2rem 2rem;
  background: #f9fafb;
  border-radius: 18px;
  box-shadow: 0 4px 24px #0002;
  border: 1px solid #e5e7eb;
}
h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #42b883;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 2.2rem;
  font-family: 'Segoe UI', 'Nunito', Arial, sans-serif;
}
.logo-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.logo {
  width: 40px;
  height: 40px;
}
.plus {
  font-size: 2rem;
  margin: 0 1rem;
  color: #42b883;
}
</style>
