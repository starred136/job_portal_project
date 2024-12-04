import express from 'express';
import { protect } from '../middleware/auth';
import { BlogPost } from '../models/BlogPost';

const router = express.Router();

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find()
      .populate('author', 'firstName lastName')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single blog post
router.get('/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id).populate(
      'author',
      'firstName lastName'
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create blog post (admin only)
router.post('/', protect, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const post = await BlogPost.create({
      ...req.body,
      author: req.user.id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;