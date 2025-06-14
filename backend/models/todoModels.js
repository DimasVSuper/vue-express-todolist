const db = require('../config/db');

// Ambil semua todo
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM todos');
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    completed: row.completed,
  }));
};

// Tambah todo baru
exports.create = async (todo) => {
  const completed =
    todo.completed && ['pending', 'done'].includes(todo.completed)
      ? todo.completed
      : 'pending';
  const [result] = await db.query(
    'INSERT INTO todos (id, title, completed) VALUES (UUID(), ?, ?)',
    [todo.title, completed]
  );
  // Ambil todo terakhir yang baru saja di-insert berdasarkan title dan completed
  const [rows] = await db.query(
    'SELECT * FROM todos WHERE title = ? AND completed = ? ORDER BY id DESC LIMIT 1',
    [todo.title, completed]
  );
  return rows[0];
};

// Update todo berdasarkan id
exports.update = async (id, updatedTodo) => {
  const fields = [];
  const values = [];
  if (updatedTodo.title !== undefined) {
    fields.push('title = ?');
    values.push(updatedTodo.title);
  }
  if (updatedTodo.completed !== undefined) {
    fields.push('completed = ?');
    values.push(updatedTodo.completed);
  }
  if (fields.length === 0) return null;
  values.push(id);

  await db.query(
    `UPDATE todos SET ${fields.join(', ')} WHERE id = ?`,
    values
  );
  const [rows] = await db.query('SELECT * FROM todos WHERE id = ?', [id]);
  return rows[0];
};

// Hapus todo berdasarkan id
exports.delete = async (id) => {
  const [result] = await db.query('DELETE FROM todos WHERE id = ?', [id]);
  return result.affectedRows > 0;
};