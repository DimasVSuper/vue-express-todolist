const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController'); // tanpa "s"

// Ambil semua todo
router.get('/', todoController.getAllTodos);

// Tambah todo baru
router.post('/', todoController.createTodo);

// Update todo berdasarkan id
router.put('/:id', todoController.updateTodo);

// Hapus todo berdasarkan id
router.delete('/:id', todoController.deleteTodo);

module.exports = router;