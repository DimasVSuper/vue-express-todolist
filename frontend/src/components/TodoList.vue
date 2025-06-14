<template>
  <ul class="todo-list">
    <li v-for="(todo, idx) in todos" :key="todo.id" class="todo-item">
      <span class="todo-index">{{ idx + 1 }}.</span>
      <label>
        <input
          type="checkbox"
          :checked="todo.completed === 'done'"
          @change="toggle(todo)"
        />
        <span :class="{ done: todo.completed === 'done' }">
          {{ todo.title }}
        </span>
      </label>
      <button class="delete-btn" @click="remove(todo.id)">Hapus</button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({ todos: Array })
const emit = defineEmits(['remove', 'toggle'])

function remove(id) {
  emit('remove', id)
}

function toggle(todo) {
  emit('toggle', todo)
}
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  padding: 0.7rem 0.2rem;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 4px #42b88311;
  transition: box-shadow 0.2s;
}
.todo-item:hover {
  box-shadow: 0 4px 16px #42b88322;
}
.todo-index {
  width: 2rem;
  text-align: right;
  margin-right: 0.7rem;
  color: #42b883;
  font-weight: bold;
  font-size: 1.1rem;
}
label {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
  color: #aaa;
}
.delete-btn {
  margin-left: auto;
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  transition: background 0.2s;
}
.delete-btn:hover {
  background: #d9363e;
}
</style>