// imports
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv/config');

// route imports
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('Hello');
});
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

// app.get('/user', async (req, res) => {
//   const { rows } = await db.query('SELECT * FROM "User"');
//   res.json(rows);
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
