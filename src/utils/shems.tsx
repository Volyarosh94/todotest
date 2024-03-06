import * as yup from 'yup'

export const addToDoSchema = yup.object().shape({
  'title': yup.string().required("Обов'язкове поле").min(5),
  'description': yup.string().required("Обов'язкове поле").min(5),
})
