import mongoose from 'mongoose';

const contributorSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  amountContributed: {
    type: Number,
    required: true
  },
  remarks: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  profilePicture: {
    type: String
  }
});

const Contributor = mongoose.model('Contributor', contributorSchema);

export default Contributor;
