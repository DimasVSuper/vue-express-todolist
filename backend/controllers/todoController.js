const Todo = require('../models/todoModels');

// Ambil semua todo
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (err) {
    console.error('[getAllTodos]', err);
    res.status(500).json({ error: 'Gagal mengambil data todo' });
  }
};

// Tambah todo baru
exports.createTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title wajib diisi' });
    }
    if (completed && !['pending', 'done'].includes(completed)) {
      return res.status(400).json({ error: 'Status tidak valid' });
    }
    const newTodo = await Todo.create({ title, completed: completed || 'pending' });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error('[createTodo]', err);
    res.status(500).json({ error: 'Gagal menambah todo' });
  }
};

// Update todo berdasarkan id
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    if (completed && !['pending', 'done'].includes(completed)) {
      return res.status(400).json({ error: 'Status tidak valid' });
    }
    const updated = await Todo.update(id, { title, completed });
    if (!updated) {
      return res.status(404).json({ error: 'Todo tidak ditemukan' });
    }
    res.json(updated);
  } catch (err) {
    console.error('[updateTodo]', err);
    res.status(500).json({ error: 'Gagal update todo' });
  }
};

// Hapus todo berdasarkan id
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.delete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Todo tidak ditemukan' });
    }
    res.json({ message: 'Todo berhasil dihapus' });
  } catch (err) {
    console.error('[deleteTodo]', err);
    res.status(500).json({ error: 'Gagal hapus todo' });
  }
};