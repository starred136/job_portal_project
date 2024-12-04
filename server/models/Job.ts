import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Temporary'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: [String],
  responsibilities: [String],
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'EUR',
    },
  },
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
  }],
  status: {
    type: String,
    enum: ['active', 'closed', 'draft'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: Date,
});

jobSchema.index({ title: 'text', description: 'text' });

export const Job = mongoose.model('Job', jobSchema);