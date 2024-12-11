import * as yup from 'yup'

export const groundValidationSchema = yup.object({
  companyName: yup.string().required('is required field'),
  email: yup.string().email('must be a valid email').required('is required field'),
  aircraftType: yup.string().required('is required field'),
  aircraftReg: yup.string().required('is required field'),
  purpose: yup.string().required('is required field'),
  checkboxes: yup
    .array()
    .min(1, 'please select at least one service')
    .of(yup.string().required())
    .required('is required field'),
  location: yup.string(),
  remarks: yup.string(),
})

export const airValidationSchema = yup.object({
  companyName: yup.string().required('is required field'),
  email: yup.string().email('must be a valid email').required('is required field'),
  passengerNumber: yup.string().required('is required field'),
  carriageType: yup.string().required('please select at least one type'),
  route: yup.string(),
  checkboxes: yup
    .array()
    .min(1, 'please select at least one service')
    .of(yup.string().required())
    .required('is required field'),
  remarks: yup.string(),
})
