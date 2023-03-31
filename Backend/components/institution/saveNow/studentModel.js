const { boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// schema
const studentSaveNowSchema = new mongoose.Schema({
  nameOfCourse: {
    type: String,
    required: false,
  },
  yearOfJoining: {
    type: String,
  },
  yearOfPassout: {
    type: String,
  },
  studentType: {
    type: String,
    required: false,
  },
  extraActivity: {
    type: String,
  },
  extraActivityDocumentName: {
    type: String,
  },
  noOfEductionalDocuments: {
    type: Number,
  },
  eductionalDocumentNames: {
    type: Array,
  },
  originalFilename: {
    type: String,
    required: false,
  },
  originalFilenames: {
    type: Array,
    required: false,
  },
  purposeOfFile: {
    type: Array,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  roll: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    lowercase: false,
    trim: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  zipCode: {
    type: Number,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  landMark: {
    type: String,
    required: false,
  },
  adharNumber: {
    type: String,
    required: false,
  },

  intitutionName: {
    type: String,
    required: false,
  },
  addedById: {
    type: String,
    required: false,
  },
  instituteId: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: Boolean,
    required: false,
  },
  finalStatus: {
    type: Boolean,
    required: false,
  },

  // CANDIDATE ATTRIBUTES
  // nameofFeedbackProvider: {
  //   type: String,
  //   required: false,
  // },
  // designationOfFeedbackProvider: {
  //   type: String,
  //   required: false,
  // },

  feedbackProviderName: {
    type: String,
    required: false,
  },
  feedbackProviderDesignation: {
    type: String,
    required: false,
  },
  feedbackProviderRelationship: {
    type: String,
    required: false,
  },
  feedbackProviderEmail: {
    type: String,
    required: false,
  },
  feedbackProviderPhoneNumber: {
    type: Number,
    required: false,
  },

  institutionlocation: {
    type: String,
    required: false,
  },

  bgvCandidate: {
    type: Boolean,
    required: false,
  },
  hrorganisationId: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  dateOfVerification: {
    type: Date,
    required: false,
  },
  verifiedFor: {
    type: String,
    required: false,
  },
  verifiedBy: {
    type: String,
  },
  personalIdentity: {
    type: String,
    required: false,
  },
  criminal: {
    type: String,
    required: false,
  },
  verificationAddress: {
    type: String,
    required: false,
  },
  drugsAndSubstanceAbuse: {
    type: String,
    required: false,
  },
});
// compile schema to model
module.exports = mongoose.model("studentsSaveNow", studentSaveNowSchema);
