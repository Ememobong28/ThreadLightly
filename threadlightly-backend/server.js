import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './database.js';
import { User, Post } from './models/index.js';
import bcrypt from 'bcryptjs';
// import dotenv from 'dotenv';
// dotenv.config();

// console.log('DB_NAME:', process.env.DB_NAME);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_PORT:', process.env.DB_PORT);


const app = express();

app.use(cors())
app.use(express.json()); 
app.use(morgan('combined'));


// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a user by id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all posts, with associated users
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, as: 'user' }],
      order: [['createdAt', 'DESC']]
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new post
app.post('/posts', async (req, res) => {
  try {
    const post = await Post.create(req.body);

    const postWithUser = await Post.findOne({
      where: { id: post.id },
      include: [{ model: User, as: 'user' }]
    });

    res.status(201).json(postWithUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//signup
app.post('/signup', async (req, res) => {
  try {
    const { firstname, lastname, email, password, updates, terms } = req.body;
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      updates,
      terms,
    });
    res.status(201).json({ message: "User created successfully", userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ where: { email } });
      if (user) {
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) {
              res.json({ message: 'Login successful' });
          } else {
              res.status(400).json({ message: 'Invalid email or password' });
          }
      } else {
          res.status(400).json({ message: 'Invalid email or password' });
      }
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server error' });
  }
});

sequelize.sync({ alter: true })
  .then(() => {
    const port = 4001;
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error during user creation:', error);
  });