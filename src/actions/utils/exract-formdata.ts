// Convert FormData to a plain object

export default function extractFormData(formData: FormData) {
  const formDataObj: { [key: string]: any } = {};
  formData.forEach((value, key) => {
    if (formDataObj[key]) formDataObj[key] = formData.getAll(key);
    else formDataObj[key] = value;
  });
  return formDataObj;
}
