const Joi = require("joi");

const addStudentSaveNowSchema = Joi.object({
  firstName: Joi.string().min(4).allow("").allow(null),
  lastName: Joi.string().min(4).allow("").allow(null),
  roll: Joi.string().allow("").allow(null),
  yearOfJoining: Joi.string().allow("").allow(null),
  yearOfPassout: Joi.string().allow("").allow(null),
  studentType: Joi.string().allow("").allow(null),
  nameOfCourse: Joi.string().allow("").allow(null),

  addedById: Joi.string().allow("").allow(null).min(24).max(24),
  instituteId: Joi.string().allow("").allow(null).min(24).max(24),
  intitutionName: Joi.string().allow("").allow(null),
  adharNumber: Joi.string().allow("").allow(null),
  state: Joi.string().allow("").allow(null),
  landMark: Joi.string().allow("").allow(null),
  city: Joi.string().allow("").allow(null),
  zipCode: Joi.number().allow("").allow(null),
  dateOfBirth: Joi.string().allow("").allow(null),
  email: Joi.string().email().allow("").allow(null),
  phoneNumber: Joi.string().allow("").allow(null),

  address: Joi.string().allow("").allow(null),
  extraActivity: Joi.string().allow("").allow(null),
  extraActivityDocumentName: Joi.string().allow("").allow(null),
  noOfEductionalDocuments: Joi.number().allow("").allow(null),
  eductionalDocumentNames: Joi.array().allow("").allow(null),
  originalFilename: Joi.string().allow("").allow(null),
  originalFilenames: Joi.array().allow("").allow(null),
  purposeOfFile: Joi.array().allow("").allow(null),
  status: Joi.boolean().allow("").allow(null),
  finalStatus: Joi.boolean().allow(null),

  // CANDIDATE
  // nameofFeedbackProvider: Joi.string().allow("").allow(null),
  // designationOfFeedbackProvider: Joi.string().allow("").allow(null),
  feedbackProviderName: Joi.string().allow("").allow(null),
  feedbackProviderDesignation: Joi.string().allow("").allow(null),
  feedbackProviderRelationship: Joi.string().allow("").allow(null),
  feedbackProviderEmail: Joi.string().allow("").allow(null),
  feedbackProviderPhoneNumber: Joi.number().allow("").allow(null),
  institutionlocation: Joi.string().allow("").allow(null),
  bgvCandidate: Joi.boolean().allow(null).allow(""),
  hrorganisationId: Joi.string().min(24).max(24).allow(null).allow(""),
  dateOfVerification: Joi.date().allow(null).allow(""),
  verifiedFor: Joi.string().allow("").allow(null),
  verifiedBy: Joi.string().allow("").allow(null),
  personalIdentity: Joi.boolean().allow("").allow(null),
  criminal: Joi.boolean().allow("").allow(null),
  verificationAddress: Joi.boolean().allow("").allow(null),
  drugsAndSubstanceAbuse: Joi.boolean().allow("").allow(null),
  documentUploadPersonalIdentity: Joi.array().allow(null),
  originalFilenamePersonalIdentity: Joi.array().allow(null),
  documentUploadcriminal: Joi.array().allow("").allow(null),
  originalFilenamecriminal: Joi.array().allow(null),
  documentUploadverificationAddress: Joi.array().allow(null),
  originalFilenameverificationAddress: Joi.array().allow(null),
  documentUploaddrugsAndSubstanceAbuse: Joi.array().allow(null),
  originalFilenamedrugsAndSubstanceAbuse: Joi.array().allow(null),
});

module.exports = {
  addStudentSaveNowSchema: addStudentSaveNowSchema,
};
