import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  campaignTitle: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  },
  goalAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  campaignImage: {
    type: String
  },
  endDate: {
    type: Date
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;