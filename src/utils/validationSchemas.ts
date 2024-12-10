import * as yup from 'yup'

export const groundValidationSchema = yup.object({
  companyName: yup.string().required('is required field'),
  email: yup.string().email('must be a valid email').required('is required field'),
  aircraftType: yup.string().required('is required field'),
  aircraftReg: yup.string().required('is required field'),
  purpose: yup.string().required('is required field'),
  checkboxes: yup.array().min(1).of(yup.string().required()).required(),
})

export const airValidationSchema = yup.object({
  companyName: yup.string().required('is required field'),
  email: yup.string().email('must be a valid email').required('is required field'),
  passengerNumber: yup.string().required('is required field'),
})
