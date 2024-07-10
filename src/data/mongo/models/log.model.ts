import mongoose from 'mongoose'

const logSchema = new mongoose.Schema({
  message: String,
  level: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low',
  },
  origin: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export const LogModel = mongoose.model('Log', logSchema)
