import express from 'express';
import { protect } from '../middleware/auth';
import { User } from '../models/User';

const router = express.Router();

// Get user's job alerts
router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.jobAlerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new job alert
router.post('/', protect, async (req, res) => {
  try {
    const { keywords, locations, frequency } = req.body;
    const user = await User.findById(req.user.id);
    
    user.jobAlerts.push({
      keywords: keywords.split(',').map((k: string) => k.trim()),
      locations: locations.split(',').map((l: string) => l.trim()),
      frequency,
    });
    
    await user.save();
    res.status(201).json(user.jobAlerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete job alert
router.delete('/:alertId', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.jobAlerts = user.jobAlerts.filter(
      (alert: any) => alert._id.toString() !== req.params.alertId
    );
    await user.save();
    res.json(user.jobAlerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;