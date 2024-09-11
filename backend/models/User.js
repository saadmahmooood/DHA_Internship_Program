const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  CNIC: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  college: { type: String },
  marks: { type: Number },
  university: { type: String },
  cgpa: { type: String },
  photo: { type: String }, // URL or file path for the photo
  transcript: { type: String }, // URL or file path for the transcript
  resume: { type: String }, // URL or file path for the resume
});

module.exports = mongoose.model('User', UserSchema);
