<template>
  <form @submit.prevent="addTodo">
    <input v-model="title" placeholder="Tambah tugas..." required />
    <button type="submit">Tambah</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const emit = defineEmits(['add'])

function addTodo() {
  if (!title.value.trim()) return
  emit('add', { title: title.value, completed: 'pending' })
  title.value = ''
}
</script>

<style scoped>
form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
input {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 1.5px solid #e0e7ef;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
  transition: border 0.2s;
}
input:focus {
  outline: none;
  border-color: #42b883;
  background: #f0fdfa;
}
button {
  background: linear-gradient(90deg, #42b883 60%, #347474 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px #42b88322;
}
button:hover {
  background: linear-gradient(90deg, #347474 60%, #42b883 100%);
  box-shadow: 0 4px 16px #42b88333;
}
</style>