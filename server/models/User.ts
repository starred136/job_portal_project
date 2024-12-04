import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ['student', 'employer', 'admin'],
    default: 'student',
  },
  jobAlerts: [{
    keywords: [String],
    locations: [String],
    frequency: {
      type: String,
      enum: ['daily', 'weekly'],
      default: 'weekly',
    },
  }],
  savedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model('User', userSchema);