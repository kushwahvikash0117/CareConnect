const mongoose = require('mongoose');

const familyMemberSchema = new mongoose.Schema(
  {
    seniorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    phone: { type: String, required: true },
    priority: { type: String, enum: ['Primary', 'Secondary', 'Common'], default: 'Common' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('FamilyMember', familyMemberSchema);